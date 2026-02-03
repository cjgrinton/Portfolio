import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center p-8 relative z-10">
      <div className="w-full max-w-[800px] flex-grow font-custom flex flex-col items-center gap-2 mb-12 mt-10">

        <div className="flex-shrink-0 w-24 h-24 mx-auto mb-3">
          <img src="/images/IMG_4547(1).jpg" alt="ducky avatar" className="w-full h-full max-h-96 object-cover rounded-lg shadow-md border border-blue-200" />
        </div>

        <div className="flex flex-col items-center text-center">

          <h1 className="font-semibold text-4xl text-slate-900 mb-5" >
            Caleb Grinton
          </h1>
          <h2 className="font-semibold text-2xl text-slate-700 mb-2 tracking-wide" >
            IT Web Programmer
          </h2>

          <nav className="flex flex-row justify-center gap-6 mb-12 mt-1 w-full border-b border-slate-900 pb-4">
            <Link href="/" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-1">Home</Link>
            <Link href="/projects" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-2">Projects</Link>
            <Link href="/contact" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-2">Contact</Link>
          </nav>

          <div className="font-medium text-lg leading-relaxed text-center text-slate-900 mb-12 max-w-[650px] px-4">
            Hey Hey, I'm Caleb! i am a second year <span className="text-blue-800">it web programming</span> student at nova scotia community college.
            <p className="mt-3">my focus is on building clean, interesting, and accessible web applications for the modern web.</p>
            <p className="mt-3"> i take great joy in fun site designs, and am always looking for new ways to make my pages more engaging and fun for users. this also ties in to making pages ui and ux accessibile.</p>
            <p className="mt-3">feel free to reach out to me below, or send me an email from the contact page!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 mb-10">
            <Link href="https://github.com/cjgrinton" target="_blank" className="group p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-white transition-all shadow-sm">
              <h3 className="font-bold text-xl text-slate-800 group-hover:text-blue-600 mb-2">Github</h3>
              <p className="text-sm text-slate-500">view my code and repositories</p>
            </Link>

            <Link href="https://www.linkedin.com/in/caleb-grinton-614aa7391/" target="_blank" className="group p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-white transition-all shadow-sm">
              <h3 className="font-bold text-xl text-slate-800 group-hover:text-blue-600 mb-2">LinkedIn</h3>
              <p className="text-sm text-slate-500">let's connect professionally</p>
            </Link>
          </div>

          <a href="/files/Caleb Grinton - Resume 2025.pdf" target="_blank" className="px-10 py-4 backdrop-blur-sm bg-white/50 text-slate-800 rounded-full font-bold text-lg hover:bg-blue-600 transition-all hover:shadow-xl active:scale-95">My Resume</a>

        </div>

      </div>

      <Footer />
    </main>
  );

}