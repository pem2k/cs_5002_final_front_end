import React from 'react'


// from https://github.com/pem2k/react-portfolio/blob/master/src/components/Carousel.js
export default function Carousel() {
    return (
        <div className='mt-2'>
            <div id="carouselExampleControls" className="carousel slide text-center" data-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active h-25">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">Inverting Modulus</h1>
                                <p className="lead">Arsh Singh, Oksana Pooley, Parker McKillop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}