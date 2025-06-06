import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Video from "/videos/lyon.mp4";

export const LayoutVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (videoRef.current) {
                if (document.hidden) {
                    videoRef.current.pause();
                } else {
                    videoRef.current.play();
                }
            }
        };

        const handleScroll = () => {
            if (videoRef.current) {
                const rect = videoRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (!isVisible) {
                    videoRef.current.pause();
                } else {
                    videoRef.current.play();
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section className="mb-5">
                <video className="w-100" tabIndex={4} aria-label="Video of the city of Lyon" autoPlay muted>
                    <source src={Video} type="video/mp4" />
                </video>
            </section>
        </>
    );
};
