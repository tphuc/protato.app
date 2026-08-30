
import { getBlogPosts } from '@/lib/blog';
import { POSTS_PER_PAGE } from './const';
export const baseUrl = 'https://protato.app';

// Only canonical guides belong in the sitemap. Older, unlinked guide URLs stay
// live for existing visitors but are intentionally not promoted to search.
const CANONICAL_GUIDE_SLUGS = [
	"your-first-app-store-screenshot",
	"app-store-screenshot-sizes",
	"text-overlays-and-branding",
	"3d-mockup-vs-flat-screenshot",
	"app-store-screenshots-subscription-app",
	"create-iphone-mockup",
	"create-macbook-mockup",
	"mockups-for-saas-landing-page",
	"make-app-promo-video",
	"app-preview-video-app-store",
]

export default async function sitemap() {
	console.log('🛠️ [SITEMAP] Generating sitemap...');

	// Static routes
	const routes = ['', '/blog', '/guides'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));
	console.log('✅ [SITEMAP] Static routes:', routes);

	const guides = CANONICAL_GUIDE_SLUGS.map((slug) => ({
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
