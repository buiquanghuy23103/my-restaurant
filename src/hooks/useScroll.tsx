import React, { useEffect, useState } from 'react'

export default function useScroll() {
    const SCROLL = "scroll";
    const [scrollPosition, setScrollPosition] = useState<number | null>(null);

    function handleScrolling() {
        setScrollPosition(window.scrollY);
    }

    function removeEvent() {
        document.removeEventListener(SCROLL, handleScrolling);
    }

    // Listen for scrolling when the app is mounted
    useEffect(() => {
        document.addEventListener(SCROLL, handleScrolling);
        return removeEvent;
    }, []);

    return scrollPosition;
}
