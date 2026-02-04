'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Contact() {
    // logic and state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: ""
    });

    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        const isFormIncomplete =
            formData.name.trim() === "" ||
            formData.email.trim() === "" ||
            formData.subject.trim() === "" ||
            formData.message.trim() === "";

        setDisableSubmit(isFormIncomplete);
    }, [formData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.honeypot !== "") {
            console.log("Bot detected!");
            setError('Thanks for the message! I will get back to you soon.'); // Fake success
            setShowError(true);
            return;
        }

        setIsSending(true);
        setShowError(false);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            setShowError(true);
            setError("Must be a valid email");
            setIsSending(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowError(true);
                setError('Thanks for the message! I will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
            } else {
                setShowError(true);
                setError('Failed to send message. Please try again.');
            }
        } catch (err) {
            setShowError(true);
            setError('Failed to send message. Please try again.');
        } finally {
            setIsSending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setShowError(false);
    };


    // ui portion
    return (
        <main className="min-h-screen flex flex-col items-center p-8 relative z-10">
            <div className="w-full max-w-[800px] flex-grow flex flex-col items-center gap-2 mb-12 mt-10">

                <div className="flex flex-col items-center text-center">
                    <div className="font-custom font-semibold text-4xl/17 text-slate-900 mb-5" >
                        Contact Me
                    </div>
                    <div className="font-custom font-semibold text-2xl text-slate-700 mb-2" >
                        Caleb Grinton
                    </div>

                    <nav className="font-custom flex flex-row justify-center gap-6 mb-12 mt-1 w-full border-b border-slate-900 pb-4">
                        <Link href="/" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-1">Home</Link>
                        <Link href="/projects" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-2">Projects</Link>
                        <Link href="/contact" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-2">Contact</Link>
                    </nav>
                </div>

                {/* form section */}
                <div className="w-full bg-white rounded-xl shadow-xl p-8 border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Email Me</h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-col-2 gap-5">
                            <div>
                                <label className="block text-slate-700 font-semibold mb-2">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} maxLength={100} required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-slate-700" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-slate-700 font-semibold mb-2">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} maxLength={300} required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-slate-700" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">Subject</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} maxLength={100} required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-slate-700" placeholder="What is this about?" />
                        </div>

                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} maxLength={300} required rows={5} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none text-slate-700" placeholder="How can I help you?"
                            />
                        </div>

                        {/* Honeypot field - Hidden from users */}
                        <div className="hidden" aria-hidden="true">
                            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                        </div>

                        <button type="submit" disabled={disableSubmit || isSending}
                            className={`w-full py-3 rounded-lg font-bold transition-all shadow-md transform hover:scale-[1.01] active:scale-[0.99] 
                                ${(disableSubmit || isSending)
                                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                        >
                            {isSending ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                        {showError && (
                            <div className={`p-4 rounded-lg text-center font-medium animate-in fade-in slide-in-from-top-2 ${error.includes('Thank you') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>{error}</div>
                        )}
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}