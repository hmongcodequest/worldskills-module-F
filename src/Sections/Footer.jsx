import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
    return (
        <>
            <footer className="pt-4 pb-2" style={{ backgroundColor: "rgb(239, 239, 239)", }}>
                <ul>
                    <li>
                        <ul className="d-flex flex-column justify-content-start align-items-start">
                            <li tabIndex={7}><a className="btn" href="/About-Us">About Us</a></li>
                            <li tabIndex={7}><a className="btn" href="/Getting-Here">Getting Here</a></li>
                            <li tabIndex={7}><a className="btn" href="/Getting-Here">FAQs</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="d-flex flex-column justify-content-start align-items-start">
                            <li tabIndex={7}><a className="btn" href="/Places-to-Stay">Places to Stay</a></li>
                            <li  tabIndex={7}><a className="btn" href="/Things-to-Do">Things to Do</a></li>
                            <li tabIndex={7}><a className="btn" href="/Events-Calendar">Events Calendar</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="d-flex flex-column justify-content-start align-items-start">
                            <li tabIndex={7}><a className="btn" href="/Restaurants">Restaurants</a></li>
                            <li tabIndex={7}><a className="btn" href="/Nightlife">Nightlife</a></li>
                            <li tabIndex={7}><a className="btn" href="/Shopping">Shopping</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="d-flex flex-column justify-content-start align-items-start">
                            <li tabIndex={7}><a className="btn" href="/Plan-Your-Trip">Plan Your Trip</a></li>
                            <li tabIndex={7}><a className="btn" href="/Contact-Us">Contact Us</a></li>
                            <li tabIndex={7}><a className="btn" href="/Newsletter-Signup">Newsletter Signup</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="pt-4 text-center">
                    <p>© 2024. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}