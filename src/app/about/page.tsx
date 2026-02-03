import Link from "next/link";
import Footer from "../../components/Footer";

export default function About() {

    return (
        <main className="min-h-screen flex flex-col items-center p-8 relative z-10">
            <div className="w-full max-w-[800px] flex-grow font-custom flex flex-col items-center gap-2 mb-12 mt-10">

                <div className="flex flex-col items-center text-center">
                    <div className="font-custom font-semibold text-4xl text-slate-900 mb-5" >
                        About Me
                    </div>
                    <div className="font-custom font-semibold text-2xl text-slate-700 mb-2" >
                        Caleb Grinton
                    </div>

                    <nav className="flex flex-row justify-center gap-6 mb-12 mt-1 w-full border-b border-slate-900 pb-4">
                        <Link href="/" className="font-light text-md text-slate-600 hover:text-slate-900 hover:-translate-y-1">Home</Link>
                        <Link href="/projects" className="font-light text-md text-slate-600 hover:text-slate-900 hover:-translate-y-2">Projects</Link>
                        <Link href="/contact" className="font-light text-md text-slate-600 hover:text-slate-900 hover:-translate-y-2">Contact</Link>
                    </nav>

                    <div className="font-semibold text-sm text-start text-slate-600">
                        <h1 className="mb-2">RUNAWAY</h1>

                        <p className="mb-2">So put your hands up to the light<br />
                            Watch as we bring it to life tonight</p>

                        <p className="mb-2">Coming from the dark<br />
                            Your position knows not<br />
                            The will to carry on<br />
                            And restless is that<br />
                            Idea burning hot<br />
                            I wanted to take it higher than any one of us now<br />
                            But some things fall away<br />
                            And I've found it's a necessary change<br />
                            For the future<br />
                            And you might find it strange<br />
                            Rest assured, I've made something so better<br />
                            Made something forever<br />
                            So what more could I want?<br />
                            There's nothing I could want<br />
                            It can't be for nothing<br />
                            Yet I'm feeling a fool<br />
                            And I'm desperate to keep it inside</p>

                        <p className="mb-2">I won't give anything, no<br />
                            I can't keep anything close to me<br />
                            And then what do I want?<br />
                            What's becoming of the ones that play the parts?<br />
                            They pray that all will fall in place</p>

                        <p className="mb-2">And they'll come running to the windows<br />
                            Peering in and crying out<br />
                            The martyrs play with me<br />
                            They'll stay the course of our expansion ever farther<br />
                            Spread my bliss so all can see<br />
                            The rounds I've won<br />
                            The friend that I will be<br />
                            Only justifying just that little cost to entry</p>

                        <p className="mb-2">So don't you say goodbye<br />
                            I really feel we're just beginning</p>

                        <p className="mb-2">Have we met before?<br />
                            A beginning<br />
                            No, there must be more<br />
                            To what makes us, moves us, takes control<br />
                            And it breaks us<br />
                            This can't be all that's in store<br />
                            I need an out<br />
                            So come and breathe me in<br />
                            And spit the bible out<br />
                            Embodiment of sin<br />
                            It's truly so devout<br />
                            I saw it through<br />
                            Oh, don't you want it too?<br />
                            No, they don't even answer<br />
                            It's breaking my heart…</p>

                        <p className="mb-2">It's tearing your heart out<br />
                            It's hopeless survival<br />
                            Oh, where did the time go?<br />
                            Remember the ones who ran forever?<br />
                            My muses of nightmare<br />
                            And now that I wake, I'm crying for it<br />
                            "O, Calamity<br />
                            Chasing shadows of your wings<br />
                            Holding close your memory<br />
                            Praying I could ever see you again"</p>

                        <p className="mb-2">Why would I ever want for something else when I am god?<br />
                            What becomes of the want to see myself a runaway?</p>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}