import Image from 'next/image';
import Link from 'next/link';
import xenonLogo from 'public/images/xenon-logo.png';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Case Studies', href: '/case-studies' },
    { linkText: 'About Us', href: '/about' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/" className="flex items-center gap-3 no-underline hover:opacity-90">
                <Image src={xenonLogo} alt="Xenon Consulting Ltd logo" width={50} height={50} />
                <span className="text-xl font-bold text-white hidden sm:inline">Xenon Consulting Ltd</span>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 ml-auto">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 hover:text-[#00B4D8]">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
