"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import BuilderPanel from "../components/BuilderPanel";
import PreviewPanel from "../components/PreviewPanel";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);

  if (isStarted) {
    return (
      <div className="h-screen flex flex-col bg-neo-bg font-sans overflow-hidden">
        <nav className="w-full sticky top-0 z-50 bg-white border-b-[3px] border-black py-4 px-6 flex justify-between items-center print-hide shrink-0">
          <div className="text-2xl font-black font-[var(--font-lexend)] uppercase tracking-tighter">
            ARCLY
          </div>
          <button 
            onClick={() => setIsStarted(false)}
            className="neo-btn bg-white px-4 py-2 font-bold text-black uppercase text-sm"
          >
            ← Back to Home
          </button>
        </nav>

        <main className="flex-1 flex overflow-hidden split-container">
          <BuilderPanel />
          <PreviewPanel />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-neo-bg text-black font-sans overflow-x-hidden selection:bg-neo-primary selection:text-black min-h-screen flex flex-col">
      <nav className="w-full sticky top-0 z-50 bg-neo-bg border-b-[3px] border-black">
        <div className="flex justify-between items-center w-full px-4 md:px-12 py-4 max-w-full mx-auto">
          <div className="text-3xl font-black font-[var(--font-lexend)] tracking-tighter uppercase">
            ARCLY
          </div>
          <div className="hidden md:flex space-x-8 items-center font-bold">
            <a href="#features" className="hover:text-pink-500 transition-colors cursor-pointer">Features</a>
            <a href="#testimonials" className="hover:text-pink-500 transition-colors cursor-pointer">Testimonials</a>
          </div>
          <div>
            <button 
              onClick={() => setIsStarted(true)}
              className="neo-btn bg-neo-primary px-6 py-3 font-bold uppercase"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section className="px-4 md:px-12 py-24 md:py-32 relative overflow-hidden border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="starburst starburst-1 -top-12 -left-8 md:-left-16 rotate-12">NEW!</div>
              <h1 className="text-6xl md:text-7xl font-black font-[var(--font-lexend)] uppercase leading-none tracking-tighter">
                Build a Resume that actually gets noticed
              </h1>
              <p className="text-lg font-medium max-w-lg">
                Stop blending in. Stand out with bold, brutalist templates designed for creatives who refuse to be boring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsStarted(true)}
                  className="neo-btn bg-neo-primary px-8 py-4 font-bold text-lg uppercase"
                >
                  Start Building Now
                </button>
                <a 
                  href="#features"
                  className="neo-btn bg-white px-8 py-4 font-bold text-lg uppercase flex items-center justify-center text-center"
                >
                  See Features
                </a>
              </div>
            </div>
            <div className="relative flex justify-center items-center mt-16 md:mt-0">
              <div className="absolute inset-0 bg-[#ffd7f1] border-[3px] border-black neu-shadow transform translate-x-4 translate-y-4 rounded-xl"></div>
              <div className="relative w-full aspect-square max-w-md bg-white border-[3px] border-black neu-shadow p-6 flex flex-col gap-4 rounded-xl z-10 overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="w-full h-12 border-b-[3px] border-black flex items-center px-4 justify-between bg-[#eae2cf]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full border-[2px] border-black"></div>
                    <div className="w-3 h-3 bg-neo-primary rounded-full border-[2px] border-black"></div>
                    <div className="w-3 h-3 bg-neo-tertiary rounded-full border-[2px] border-black"></div>
                  </div>
                  <span className="font-bold text-xs uppercase">Preview</span>
                </div>
                <div className="flex-1 border-[3px] border-black p-4 flex flex-col gap-4 bg-neo-bg relative">
                  <div className="w-24 h-24 bg-neo-primary border-[3px] border-black neu-shadow mb-4 absolute top-4 right-4 rotate-6"></div>
                  <div className="h-8 w-3/4 bg-black"></div>
                  <div className="h-4 w-1/2 bg-gray-200 border-[2px] border-black"></div>
                  <div className="space-y-2 mt-8">
                    <div className="h-3 w-full bg-gray-200"></div>
                    <div className="h-3 w-full bg-gray-200"></div>
                    <div className="h-3 w-4/5 bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="px-4 md:px-12 py-24 bg-[#eae2cf] border-b-[3px] border-black scroll-mt-20">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black font-[var(--font-lexend)] uppercase">Why Be Boring?</h2>
              <p className="text-lg font-medium text-gray-800 max-w-2xl mx-auto">
                Our features are designed to make recruiters stop scrolling and start reading.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="neo-card p-8 flex flex-col gap-6 relative overflow-hidden group bg-white">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ffd7f1] rounded-full border-[3px] border-black group-hover:scale-110 transition-transform duration-300"></div>
                <div className="w-16 h-16 bg-neo-primary border-[3px] border-black neu-shadow flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  <Image src="/paint.png" alt="Paint icon" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-[var(--font-lexend)] mb-2">Bold Aesthetics</h3>
                  <p className="text-gray-700 font-medium">Leave standard Arial behind. Choose from layouts that command attention and scream personality.</p>
                </div>
              </div>

              <div className="neo-card p-8 flex flex-col gap-6 relative overflow-hidden group bg-white">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-neo-tertiary rounded-full border-[3px] border-black group-hover:scale-110 transition-transform duration-300"></div>
                <div className="w-16 h-16 bg-[#fe8fe7] border-[3px] border-black neu-shadow flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  <Image src="/zap.png" alt="Lightning bolt icon" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-[var(--font-lexend)] mb-2">Fast Export</h3>
                  <p className="text-gray-700 font-medium">Generate perfectly formatted PDFs instantly. No layout breaking, no weird margins.</p>
                </div>
              </div>

              <div className="neo-card p-8 flex flex-col gap-6 relative overflow-hidden group bg-white">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-neo-primary rounded-full border-[3px] border-black group-hover:scale-110 transition-transform duration-300"></div>
                <div className="w-16 h-16 bg-[#06e600] border-[3px] border-black neu-shadow flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  <Image src="/rocket.png" alt="Rocket icon" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-[var(--font-lexend)] mb-2">ATS Friendly</h3>
                  <p className="text-gray-700 font-medium">Bold design doesn&apos;t mean broken parsing. Our underlying structure ensures robots can read it too.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="px-4 md:px-12 py-24 bg-neo-bg border-b-[3px] border-black scroll-mt-20">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black font-[var(--font-lexend)] uppercase">They Stood Out</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-[#ffd7f1] border-[3px] border-black neu-shadow p-8 relative hover:-translate-y-2 transition-transform duration-300">
                <p className="text-lg font-bold mb-6 relative z-10">&quot;I applied to 50 jobs with my old resume and heard nothing. Switched to an ARCLY template and got 3 interviews in a week.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                  <div>
                    <div className="font-bold text-lg">Sarah J.</div>
                    <div className="text-sm font-bold text-gray-700">UX Designer</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#ffe170] border-[3px] border-black neu-shadow p-8 relative lg:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
                <p className="text-lg font-bold mb-6 relative z-10">&quot;The bold style exactly matches my portfolio. It feels like a cohesive brand package now.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                  <div>
                    <div className="font-bold text-lg">Mark D.</div>
                    <div className="text-sm font-bold text-gray-700">Frontend Dev</div>
                  </div>
                </div>
              </div>

              <div className="bg-neo-tertiary border-[3px] border-black neu-shadow p-8 relative lg:-translate-y-8 hidden lg:block hover:-translate-y-10 transition-transform duration-300">
                <p className="text-lg font-bold mb-6 relative z-10">&quot;Recruiters literally mentioned how cool my resume looked during the screening calls.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                  <div>
                    <div className="font-bold text-lg">Alex T.</div>
                    <div className="text-sm font-bold text-gray-700">Marketing Lead</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="px-4 md:px-12 py-32 bg-neo-primary border-b-[3px] border-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black font-[var(--font-lexend)] uppercase leading-none">Ready to drop the boring?</h2>
            <p className="text-2xl font-bold text-[#705d00] max-w-2xl mx-auto">Build your new resume in minutes.</p>
            <button 
              onClick={() => setIsStarted(true)}
              className="neo-btn bg-black text-white px-12 py-6 font-bold text-xl uppercase hover:bg-white hover:text-black transition-colors relative z-20"
            >
              Start Building For Free
            </button>
          </div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#fe8fe7] border-[3px] border-black rounded-full neu-shadow opacity-50 z-0"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#06e600] border-[3px] border-black transform rotate-45 neu-shadow opacity-50 z-0"></div>
        </section>

      </main>

      <Footer />
    </div>
  );
}