import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom';
import Gallery from "./Gallery";

function MainPage() {
    const location = useLocation();

    const scrollToGallery = () => {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.scrollIntoView({behavior: 'smooth'});
        }
    };

    useEffect(() => {
        if (location.hash === "#gallery") {
            scrollToGallery();
        }
    }, [location]);

    return (
        <div>
            <div className="container-fluid first-container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="about-us">
                            <h1>O nás</h1>
                            <p>Jsme čajovna dovážející čaje přímo z Japonska, specializujeme se tedy převážně na zelené
                                čaje.</p>
                            <p> Každý pátek osobně připravuje čaje čajový mistr z Japonska.</p>
                            <p>Ostatní dny v týdnu jsou k dispozici jeho čeští studenti, kteří ještě v přípravě čaje
                                nedosáhli
                                mistrovské úrovně.</p>
                            <p>Otevírací dobu máme již od 8 ráno pro ranní ptáčata, která ovšempotřebují nabuzení před
                                prací.
                                Zkrátka nepřijdou ani
                                noční sovy, protože máme otevřeno až do 2 do rána.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div>
                            <img className="img-fluid" src="/images/white-teapot.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            <Gallery/>
        </div>
    )
}

export default MainPage;