import Image from 'next/image';
import xenonLogo from 'public/images/xenon-logo.png';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center py-12 sm:py-20">
                <div className="flex justify-center mb-8">
                    <Image
                        src={xenonLogo}
                        alt="Xenon Consulting Ltd logo"
                        width={150}
                        height={150}
                        className="drop-shadow-lg"
                    />
                </div>
                <h1 className="mb-6 text-[#00B4D8]">Xenon Consulting Ltd</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Transforming businesses through innovative solutions
                </p>
            </section>

            <section className="bg-[#0d1f35] rounded-lg p-8 sm:p-12">
                <h2 className="text-2xl font-bold mb-6 text-[#00D4AA]">About Our Services</h2>
                <p className="text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0d1f35] rounded-lg p-6 border border-[#0077B6]/30 hover:border-[#00B4D8]/50 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-[#00B4D8]">Strategic Consulting</h3>
                    <p className="text-gray-400 text-sm">Expert guidance for your business transformation journey.</p>
                </div>
                <div className="bg-[#0d1f35] rounded-lg p-6 border border-[#0077B6]/30 hover:border-[#00B4D8]/50 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-[#00B4D8]">Technology Solutions</h3>
                    <p className="text-gray-400 text-sm">Cutting-edge technology implementations tailored to your needs.</p>
                </div>
                <div className="bg-[#0d1f35] rounded-lg p-6 border border-[#0077B6]/30 hover:border-[#00B4D8]/50 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-[#00B4D8]">Business Intelligence</h3>
                    <p className="text-gray-400 text-sm">Data-driven insights to power your decision making.</p>
                </div>
            </section>
        </div>
    );
}
