import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Header.css"

export const Header = () => {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const old_Scroll = window.pageYOffset;
        const scroll = () => {
            const new_scroll = window.pageYOffset;
            if (new_scroll > old_Scroll) {
                if (new_scroll > 60) {
                    setIsScroll(true);
                } else {
                    setIsScroll(false)
                }
            }
        }
        scroll();
        window.addEventListener('scroll', scroll);
        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    return (
        <header className={`d-flex flex-wrap justify-content-evenly align-items-center py-2 border-bottom ${isScroll ? 'bg-opacity' : ''}`} tabIndex={1}>
            <h2 tabIndex={1} aria-label="WELLCOME LYOU">WELLCOME LYOU</h2>

            <nav>
                <ul>
                    <li><a href="/link" tabIndex={1}>Link</a></li>
                    <li><a href="/link" tabIndex={1}>Link</a></li>
                    <li><a href="/link" tabIndex={1}>Link</a></li>
                </ul>
            </nav>
        </header>
    )
}