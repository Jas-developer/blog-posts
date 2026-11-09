import Link from "next/link";

export function Header() {
   return(
    <header className="flex items-center justify-between py-4 flex-direction-row">
        <div>
            Logo
        </div>
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
   );

}