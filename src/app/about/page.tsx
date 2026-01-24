import Link from "next/link";

export default function About() {

    return (
        <main className="w-[700px] h-[650px] mx-auto md:p-8 p-4 bg-window-panel shadow-4xl relative z-10">
            <div className=" font-custom flex flex-col items-center w-full gap-2 mb-8 mt-15 bg-selector">

                <div className="flex flex-col items-center text-center">
                    <div className="font-semibold text-4xl text-slate-800" >
                        About Me
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

                    <div className="font-semibold text-sm text-start text-slate-600">
                        {/* too long, needs to be shortened and a bit more professional */}
                        {/* <p className="pb-2">
                            Hello! My name is Caleb Grinton, and welcome to my personal corner of the web!
                            I am an ***Aspiring Web Designer*** with a keen focus on crafting intuitive and engaging user interfaces (**UI design**).
                            My journey into coding was sparked by inspiration from my older sister, whose talent showed me the creative potentisl of a career in technology. 
                            I enjoy the challenge of translating ideas into intriguing, user-friendly digital experiences.
                        </p>
                        <p className="pb-2">
                            Looking ahead, my goal is simple: to continuously grow my coding expertise and eventually lead a team - ideally a **UI design team** - where I can mentor others and drive innovative projects.
                        </p>
                        <p className="pb-2">
                            When I'm not busy designing, I let roam free in other ways.
                            I enjoy making pencil sketches of some of my interests, and have a passion for collecting cool stickers for my desk and laptop. Also, I enjoy building intricate LEGO displays.
                            My gaming passions are just as varied: I like to dominant the track in Mariokart 8 and Team Sonic Racing, tapping along to Friday Night Funkin', or indulging in my favourite franchise, Sonic The Hedgehog (Metal Sonic is the best, hands down).
                            I also enjoy the quirky fun of the mobile tower defense game, The Battle Cats! and travelling with my family.
                        </p>
                        <p>
                            I believe that good design, much like a well-built LEGO set, reqiures both creativity and meticulous detail. I bring that same enthusiasm to every project I take on!
                        </p> */}
                    </div>

                </div>
            </div>
            <div className="font-custom font-semibold text-md text-slate-700 text-center items-baseline">
                @2026 Caleeb
            </div>
        </main>
    );
}