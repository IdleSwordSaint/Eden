"use client"

import {useBackground} from "@/app/contexts/BackgroundContext";
import {ChangeEvent} from "react";

export default function BackgroundUpload() {
console.log("BackgroundUpload component rendered"); // Add this debug line
    const {setBackgroundImage} = useBackground();

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file)
        {
            const imageUrl = URL.createObjectURL(file);
            setBackgroundImage(imageUrl);
        }
    };


    return (
        <div className="absolute top-4 right-4 z-10">
            <label className="cursor-pointer px-4 py-2 bg-white/10 hover:bg-white/20 
                            rounded-lg backdrop-blur-sm transition-all">
                <span className="text-sm">Change Background</span>
                <input
                type = "file"
                accept = "image/*"
                onChange={handleImageUpload}
                className="hidden"
                />
            </label>
        </div>
    );
}