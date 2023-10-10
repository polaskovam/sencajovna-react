import React from "react";

function ContactForm() {
    return (
        <div className="container-fluid second-container">
            <div className="row">
                <div className="col-lg-12 contact-form">
                    <h1>Kontaktní formulář</h1>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="váš@e-mail.cz"/>
                        <label htmlFor="floatingInput">Váš e-mail</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Vaše jméno"/>
                        <label htmlFor="floatingInput">Vaše jméno</label>
                    </div>
                    <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Zpráva pro nás" id="floatingTextarea2"
                          style={{height: "100px"}}/>
                        <label htmlFor="floatingTextarea2">Zpráva pro nás</label>
                    </div>
                    <div className="button-div">
                        <button type="button" className="btn btn-outline-success btn-lg">Odeslat</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;