import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Xenon Consulting Ltd. All rights reserved.
                </p>
                <Link
                    href="/contact"
                    className="text-[#00B4D8] hover:text-[#00D4AA] transition-colors"
                >
                    Contact Us
                </Link>
            </div>
        </footer>
    );
}
