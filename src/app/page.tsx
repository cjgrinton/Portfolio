import Link from "next/link";

export default function Home() {

  return (
    <main className="w-[800px] h-[650px] mx-auto md:p-8 p-4 bg-window-panel shadow-4xl relative z-10">
      <div className="font-custom flex flex-col items-center w-full gap-2 mb-8 mt-15 bg-selector-home">

        <div className="flex-shrink-0 w-24 h-24 mx-auto mb-3">
          <img src="/images/IMG_4547(1).jpg" alt="ducky" className="w-full h-full max-h-96 object-cover rounded-lg shadow-md border border-blue-200" />
        </div>

        <div className="flex flex-col items-center text-center">

          <div className="font-semibold text-4xl text-slate-800 mb-5" >
            Caleb Grinton
          </div>
          <div className="font-semibold text-2xl text-slate-600 mb-2" >
            Professional IT Web Programmer
          </div>

          <div className="flex flex-row justify-center gap-2 mb-6 mt-1 w-full">
            <Link href="/" className="font-light text-md text-slate-500 hover:text-slate-900">Home</Link>
            <Link href="/about" className="font-light text-md text-slate-500 hover:text-slate-900">About</Link>
            <Link href="/projects" className="font-light text-md text-slate-500 hover:text-slate-900">Projects</Link>
            <Link href="/contact" className="font-light text-md text-slate-500 hover:text-slate-900">Contact</Link>
          </div>

          <Link href="https://github.com/cjgrinton" target="blank" className="font-semibold text-2xl text-slate-700 hover:text-slate-900">Github Link</Link>
          <div className=" font-normal text-md text-slate-600 pb-4 pt-2">
            A link to my Github page.
          </div>

          <Link href="#" className="font-semibold text-2xl text-slate-700 hover:text-slate-900">LinkedIn</Link>
          <div className=" font-normal text-md text-slate-600 pb-4 pt-2">
            A link to my LinkedIn page.
          </div>

          {/* <Link href="#" className="font-semibold text-2xl text-slate-700 hover:text-slate-900 hover:underline">Link</Link>
          <div className=" font-normal text-md text-slate-600 pb-4">
            A link to my ______ page.
          </div> */}
        </div>

      </div>
      <div className="font-custom font-semibold text-md text-slate-700 text-center items-baseline">
        @2026 Caleeb
      </div>
    </main>
  );

}