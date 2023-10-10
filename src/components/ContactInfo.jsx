import React from "react";

function ContactInfo() {
    return (
        <div className="container-fluid first-container">
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <h2>Kontaktní údaje</h2>
                        <p><i className="fas fa-map-marker-alt"></i> Náměstí Svobody 103/5, 602 00 Brno-střed</p>
                        <p><i className="fas fa-phone"></i> 123 456 789</p>
                        <p><i className="fas fa-at"></i> sencajovna@fakemail.cz</p>
                        <br/>
                        <h2>Otevírací doba</h2>
                        <p><i className="fas fa-home"></i> Každý den 8:00—02:00</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d325.9077682695823!2d16.6082645!3d49.1955864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129450bb4dccb1%3A0x10f1a7ab01adf4b9!2sStarbucks!5e0!3m2!1scs!2scz!4v1662714190471!5m2!1scs!2scz"
                            width="400" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;