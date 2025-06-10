"use client"

import Timer from "./components/Timer";
import BackgroundUpload from "./components/BackgroundUpload";
import { useBackground } from "./contexts/BackgroundContext";

export default function Home() {
    const { backgroundImage } = useBackground();
    
    return (
        <main 
            className="relative flex flex-col items-center justify-center min-h-screen gradient-bg"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <BackgroundUpload />
            <div className="w-full max-w-4xl px-4 py-8 text-center space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-gradient tracking-tight">
                    Sharpen Your Focus
                </h1>
                <p className="text-lg md:text-xl opacity-80">
                    Enter The Zone
                </p>
                <div className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 shadow-xl">
                    <Timer />
                </div>
            </div>
        </main>
    );
}