import { useEffect, useRef } from "react"


export const useSound = (src : string,soundEnabled : boolean) => {
    const sound = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        sound.current = new Audio(src)
    },[src]);
    
    const play = () => {
        if(!soundEnabled) return;
        sound.current?.play();
    }

    return play;
}