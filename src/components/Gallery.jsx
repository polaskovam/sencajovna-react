import React from "react";

function Gallery() {
    return (
        <div className="container-fluid second-container">
            <div id="gallery" className="row">
                <div className="col-12">
                    <h1 className="gallery-title">Galerie</h1>
                </div>
                <div className="small-carousel col-12">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"
                         data-bs-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/big-room.jpg" className="d-block w-100"
                                     alt="Fotografie naší světlé místnosti."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Světlá čajová místnost</h5>
                                    <p>V této velké čajové místnosti se pořádá čajový obřad každý pátek.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/big-room.jpg" className="d-block w-100"
                                     alt="Fotografie naší menší čajové místnosti."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Menší čajová místnost</h5>
                                    <p>Menší čajová místnost, vhodná pro posezení se skupinou přátel.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/big-room.jpg" className="d-block w-100"
                                     alt="Fotografie naší malé čajové místnosti."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Nejmenší čajová místnost</h5>
                                    <p>Naše nejmenší čajová místnost, vhodná pro tiché posezení u čaje.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/big-room.jpg" className="d-block w-100"
                                     alt="Fotografie z čajového obřadu."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Čajový obřad</h5>
                                    <p>Fotografie z čajového obřadu.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/big-room.jpg" className="d-block w-100"
                                     alt="Fotografie čajového mistra."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Čajový mistr</h5>
                                    <p>Náš čajový mistr při práci.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/big-room.jpg" className="d-block w-100" alt="Fotografie matchi."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Matcha</h5>
                                    <p>Ukázka matchi.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/big-room.jpg" className="d-block w-100" alt="Hnědá čajová konvička."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Čajové náčiní</h5>
                                    <p>Jedna z našich mnoha čajových konviček.</p>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;