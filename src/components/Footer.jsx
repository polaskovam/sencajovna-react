import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <div className="container-fluid first-container">
                <div className="row">
                    <div className="col-lg-4">
                        <h5>Otevírací doba</h5>
                        <h6>Denně 8:00—02:00</h6>
                    </div>
                    <div className="col-lg-4">
                        <h5>Adresa</h5>
                        <h6>Náměstí Svobody 103/5</h6>
                        <h6>602 00 Brno-střed</h6>
                    </div>
                    <div className="col-lg-4">
                        <h5>Kontakt</h5>
                        <h6>123 456 789</h6>
                        <h6>sencajovna@fakemail.cz</h6>
                    </div>
                </div>
            </div>
            <div className="container-fluid second-container">
                <div className="row">
                    <div className="col-lg-12">
                        <h5>
                            {year}
                            Senčajovna
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;