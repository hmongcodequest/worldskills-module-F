import "bootstrap/dist/css/bootstrap.min.css";

export const ContactUs = () => {

    return (
        <section className="d-flex my-5 justify-content-center align-items-center" tabIndex={6}>
            <div className="w-100 border-4 border pt-5 position-relative" tabIndex={6} style={{ maxWidth: "800px" }}>
                <h1 className="fw-bold border-4 border p-3 position-absolute bg-white" tabIndex={6} aria-label="Contact us" style={{ width: "max-content", top: '-50px', left: "35%" }}>Contact Us</h1>
                <form className="p-5">
                    <div className="row row-cols-2 my-2">
                        <div className="col">
                            <label htmlFor="first_name" tabIndex={6} className="pe-2">First name</label>
                            <input type="text" id="first_name" tabIndex={6} className="w-auto" />
                        </div>
                        <div className="col">
                            <label htmlFor="last_name" tabIndex={6} className="pe-2">Last name</label>
                            <input type="text" id="last_name" tabIndex={6} className="w-auto" />
                        </div>
                    </div>
                    <div className="row row-cols-2 my-2">
                        <div className="col">
                            <label htmlFor="emali" tabIndex={6} className="pe-2">Email</label>
                            <input type="email" id="emali" tabIndex={6} className="w-auto" />
                        </div>
                        <div className="col">
                            <label htmlFor="phone" tabIndex={6} className="pe-2">Phone</label>
                            <input type="tel" id="phone" tabIndex={6} className="w-auto" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}