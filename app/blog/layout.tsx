
import Nav from "../nav";
import Footer2 from "../(marketing)/footer";

export default function Layout({children}: {children: any}){
    return <div className="bg-secondary/80">
        <Nav/>
        {children}

        <Footer2/>
    </div>
}