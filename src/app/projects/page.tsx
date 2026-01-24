import Link from "next/link";

export default function Projects() {
    return (
        <main className="w-[700px] h-[650px] mx-auto md:p-8 p-4 bg-window-panel shadow-4xl relative z-10">
            <div className="font-custom flex flex-col items-center w-full gap-2 mb-8 mt-15 bg-selector">

                <div className="flex flex-col items-center text-center">
                    <div className="font-semibold text-4xl text-slate-800" >
                        Projects
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

                    <div className="flex flex-col w-full">
                        {/* <div className="flex justify-start w-full">
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:w-5/6">
                                <div className="flex-shrink-0 w-40 h-42 mx-auto mb-3">
                                    <img src="/images/Screenshot 2025-10-29 213343.png" alt="Project example 1" className="w-full h-full max-h-96 object-cover rounded-lg shadow-md border border-blue-200" />
                                </div>
                                <div className="w-full sm:w-2/3">
                                    <h4 className="font-semibold text-xl text-slate-800">Photo Album App</h4>
                                    <p className="font-normal text-md text-start text-slate-700 mt-1">
                                        A photo album app where you can move left and right between 11 photos, and leave comments on them.
                                    </p>
                                    <p className="font-medium text-md text-slate-700">
                                        Tools: NextJS, Tailwind CSS, API Integration.
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end w-full">
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:w-5/6">
                                <div className="w-full sm:w-2/3">
                                    <h4 className="font-semibold text-xl text-slate-800">Item Review Page</h4>
                                    <p className="font-normal text-md text-end text-slate-700 mt-1">
                                        An item review page "selling" a product, where you can leave your name, a review, and 1-5 stars.
                                    </p>
                                    <p className="font-medium text-md text-slate-700">
                                        Tools: ASP.NET, Bootstrap, MySQL.
                                    </p>
                                </div>
                                <div className="flex-shrink-0 w-40 h-42 mx-auto">
                                    <img src="/images/Screenshot 2025-10-29 223926.png" alt="Project example 2" className="w-full h-full max-h-96 object-cover rounded-lg shadow-md border border-blue-200" />
                                </div>
                            </div>
                        </div>  */}
                    </div>
                </div>
            </div>
            <div className="font-custom font-semibold text-md text-slate-700 text-center items-baseline">
                @2026 Caleeb
            </div>
        </main>
    );
}