import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-neo-surface w-full border-t-[3px] border-black">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-12 py-12 w-full mx-auto max-w-7xl">


                <div className="space-y-2 text-center md:text-left">
                    <div className="text-3xl font-black uppercase tracking-tighter font-[family-name:var(--font-lexend)]">
                        Arcly
                    </div>
                    <p className="text-black font-medium">The boldest way to build a resume.</p>
                </div>


                <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
                    <h4 className="font-bold text-sm uppercase bg-neo-secondary px-2 py-1 border-[2px] border-black inline-block mb-1 neu-shadow">
                        Developer
                    </h4>
                    <p className="font-bold text-xl">Sahil Singh</p>
                    <a
                        href="mailto:your.email@example.com"
                        className="font-medium hover:underline hover:text-blue-600 transition-colors"
                    >
                        sahilsingh107433@gmail.com
                    </a>
                </div>

                <div className="flex justify-center md:justify-end">
                    <a
                        href="https://digitalheroesco.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-button bg-neo-primary border-black border-[3px] neu-shadow px-6 py-4 font-bold text-black uppercase active:translate-x-[4px] active:translate-y-[4px] hover:bg-neo-tertiary transition-colors inline-block text-center"
                    >
                        Built for Digital Heroes
                    </a>
                </div>

            </div>

            <div className="border-t-[3px] border-black px-6 py-6 text-center bg-neo-bg">
                <p className="uppercase font-bold text-sm">
                    © 2026 Arcly. ALL RIGHTS RESERVED. NO GRADIENTS ALLOWED.
                </p>
            </div>
        </footer>
    );
}