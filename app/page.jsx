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
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-1">
                    Transforming businesses through innovative solutions
                </p>
            </section>

            <section className="bg-[#0d1f35] rounded-lg p-8 sm:p-12">
                <h2 className="text-2xl font-bold mb-6 text-[#00D4AA]">About Our Services</h2>
                <p className="text-gray-300 leading-relaxed">
                    We are a technology‑focused consultancy helping organisations win and deliver complex projects with confidence. Our services span bid management, ensuring proposals are credible and competitive; governance advisory, tailoring assurance frameworks that balance cost and risk; and project delivery leadership, with a particular strength in turning around struggling initiatives. We enable small firms to scale up and work effectively with large corporations and government clients by instilling lean governance, clear scope discipline, and stakeholder trust. With expertise across design, architecture, and execution, we restore momentum, rebuild confidence, and deliver outcomes that matter.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0d1f35] rounded-lg p-6 border border-[#0077B6]/30 hover:border-[#00B4D8]/50 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-[#00B4D8]">Governance Advisory</h3>
                    <p className="text-gray-400 text-sm">Helping smaller firms win big by tailoring governance across bids, design, and delivery — balancing cost, risk, and credibility.</p>
                </div>
                <div className="bg-[#0d1f35] rounded-lg p-6 border border-[#0077B6]/30 hover:border-[#00B4D8]/50 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-[#00B4D8]">Project Turnaround</h3>
                    <p className="text-gray-400 text-sm">Turning challenged tech projects into focused, reliable success.</p>
                </div>
                <div className="bg-[#0d1f35] rounded-lg p-6 border border-[#0077B6]/30 hover:border-[#00B4D8]/50 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-[#00B4D8]">Bid Leadership</h3>
                    <p className="text-gray-400 text-sm">Driving complex bids to success through strong governance, clear focus and customer insight.</p>
                </div>
            </section>
        </div>
    );
}
