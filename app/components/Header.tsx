import Link from "next/link";
import Image from 'next/image';



export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
            <div className="flex items-center gap-2">
                <Image src="images/logo.svg" alt="logo" width={200} height={200}/>
            </div>
            <nav className="flex gap-6">
                <Link href="/">Main</Link>
                <Link href="/about">About</Link>
                <Link href="/contacts">Contacts</Link>
                <Link href="/products">Products</Link>
            </nav>
        </header>
    );
}
