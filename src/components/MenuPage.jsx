import React from "react";

function MenuPage() {
    return (
        <div className="container-fluid first-container">
            <div className="row">
                <div className="col-lg-6 firstCol">
                    <h1>Nabídka</h1>
                    <p><i className="fas fa-mug-hot"></i> Kromě naší stálé nabídky máme i proměnlivou, a z té pro nás
                        zajistíme vždy
                        ty nejčerstvější čaje.</p>
                    <br/>
                    <p><i className="fas fa-mug-hot"></i> K čaji si u nás můžete dát různé dobroty. Od čajových
                        sušenek až po domácí
                        veganské zákusky.</p>
                    <br/>
                    <p><i className="fas fa-mug-hot"></i> Při čajovém obřadu podáváme autentické japonské
                        laskominy.</p>
                    <br/>
                    <p><i className="fas fa-mug-hot"></i> Nabízíme také k zakoupení čajovou keramiku a čaje.
                    </p>
                </div>
                <div className="col-lg-6 firstCol">
                    <div className="mainPicture">
                        <img className="img-fluid" src="images/matcha.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuPage;