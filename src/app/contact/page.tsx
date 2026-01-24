import Link from "next/link";

export default function Contact() {
    return (
        <main className="w-[700px] h-[650px] mx-auto md:p-8 p-4 bg-window-panel shadow-4xl relative z-10">
            <div className="font-custom flex flex-col items-center w-full gap-2 mb-8 mt-15 bg-selector">

                <div className="flex flex-col items-center text-center">
                    <div className="font-semibold text-4xl text-slate-800" >
                        Contact Me
                    </div>
                    <div className="font-semibold text-2xl text-slate-700" >
                        Caleb Grinton
                    </div>

                    <div className="flex flex-row justify-center gap-2 mb-4 mt-1 w-full">
                        <Link href="/" className="font-light text-md text-slate-600">Home</Link>
                        <Link href="/about" className="font-light text-md text-slate-600">About</Link>
                        <Link href="/projects" className="font-light text-md text-slate-600">Projects</Link>
                        <Link href="/contact" className="font-light text-md text-slate-600">Contact</Link>
                    </div>

                    {/* make this an actual contact me page */}

                </div>
            </div>
            <div className="font-custom font-semibold text-md text-slate-700 text-center items-baseline">
                @2026 Caleeb
            </div>
        </main>
    );
}