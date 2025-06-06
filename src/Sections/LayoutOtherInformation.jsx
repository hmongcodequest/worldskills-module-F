import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LayoutOtherInformation.css";

export const LayoutOtherInformation = () => {

    const [tab, setTab] = useState('tab1');

    return (
        <>
            <section className="my-5">
                <h1 className="text-center fw-bold" tabIndex={5}>Other Information</h1>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div>
                        <div className="d-flex border-bottom border-4" style={{ width: "600px" }}>
                            <button type="button" tabIndex={5} className={`btn-tab ${tab === 'tab1'?"active":""}`} onClick={() => setTab("tab1")} aria-label="tab1">tab1</button>
                            <button type="button" tabIndex={5} className={`btn-tab ${tab === 'tab2'?"active":""}`} onClick={() => setTab("tab2")} aria-label="tab2">tab2</button>
                            <button type="button" tabIndex={5} className={`btn-tab ${tab === 'tab3'?"active":""}`} onClick={() => setTab("tab3")} aria-label="tab3">tab3</button>
                        </div>
                        <div role="tab">
                            {tab === "tab1" && (
                                <div className="tab-div">
                                    <p tabIndex={5}>Tab 1: This is the content for Tab 1.</p>
                                </div>
                            )}
                            {tab === "tab2" && (
                                <div className="tab-div">
                                    <p tabIndex={5}>Tab 2: This is the content for Tab 2.</p>
                                </div>
                            )}
                            {tab === "tab3" && (
                                <div className="tab-div">
                                    <p tabIndex={5}>Tab 3: This is the content for Tab 3.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}