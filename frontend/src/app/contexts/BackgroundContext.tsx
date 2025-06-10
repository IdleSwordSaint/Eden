"use client"

import { createContext, useState, useContext, ReactNode} from "react";

type BackgroundContextType = {
    backgroundImage: string | null;
    setBackgroundImage: (image: string | null) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined> (undefined);

export function BackgroundProvider({children}: {children: ReactNode}) {
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

    return (
        <BackgroundContext.Provider value = { {backgroundImage,setBackgroundImage}}>
            {children}
        </BackgroundContext.Provider>
    );
}

export function useBackground() {
    const context = useContext(BackgroundContext);
    if(undefined === context) {
        throw new Error("useBackground must be used within a BackgroundProvider");
    }
    return context;
}