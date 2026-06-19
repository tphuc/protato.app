
import fs from "fs"
import path from "path"
import { getBlogPosts } from '@/lib/blog';
import { POSTS_PER_PAGE } from './const';
export const baseUrl = 'https://protato.app';

const GUIDE_DIR = path.join(process.cwd(), "app/guides")

const NON_GUIDE_DIRS = new Set([
	"guide-breadcrumb.tsx",
	"guide-sidebar.tsx",
	"layout.tsx",
	"page.tsx",
])

function getGuideSlugs(): string[] {
	const entries = fs.readdirSync(GUIDE_DIR, { withFileTypes: true })
	return entries
		.filter((e) => e.isDirectory() && !NON_GUIDE_DIRS.has(e.name))
		.map((e) => e.name)
}

export default async function sitemap() {
	console.log('🛠️ [SITEMAP] Generating sitemap...');

	// Static routes
	const routes = ['', '/blog', '/guides'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));
	console.log('✅ [SITEMAP] Static routes:', routes);

	// Guide pages — dynamically read from app/guides/ directories
	const guideSlugs = getGuideSlugs()
	const guides = guideSlugs.map((slug) => ({
		url: `${baseUrl}/guides/${slug}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));
	console.log('✅ [SITEMAP] Guide pages:', guides.length);

	// Blog posts
	let blogs: any[] = [];
	let paginatedBlogRoutes: any[] = [];

	try {
		const posts = getBlogPosts();
		blogs = posts.map((post) => ({
			url: `${baseUrl}/blog/${post.slug}`,
			lastModified: post.metadata?.publishedAt ?? new Date().toISOString(),
		}));
		console.log('✅ [SITEMAP] Blog posts:', blogs.length);

		// Paginated blog routes
		const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
		for (let i = 1; i <= totalPages; i++) {
			paginatedBlogRoutes.push({
				url: `${baseUrl}/blog?page=${i}`,
				lastModified: new Date().toISOString().split('T')[0],
			});
		}
		console.log('✅ [SITEMAP] Paginated blog routes:', paginatedBlogRoutes.length);
	} catch (err) {
		console.error('❌ [SITEMAP] Failed to load blog posts:', err);
	}

	const all = [...routes, ...blogs, ...paginatedBlogRoutes, ...guides];
	console.log('✅ [SITEMAP] Total entries:', all.length);

	return all;
}
