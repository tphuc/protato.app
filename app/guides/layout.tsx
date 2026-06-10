import Nav from "../nav";
import Footer2 from "../(marketing)/footer";

export default function Layout({ children }: { children: any }) {
    return <div className="bg-background min-h-screen">
        <Nav />
        {children}
        <Footer2 />
    </div>
}
