import React from "react";

export interface CarouselProps {
    elements: React.ReactNode[]
}

export class Carousel extends React.PureComponent<CarouselProps> {

    public render() {
        return <div id="main-carousel" className="carousel slide nopadding" data-bs-ride="carousel" data-bs-interval="false">
            <div className="carousel-inner w-100 h-100">

                {this.props.elements.map((element, i) => <div key={i} className={"carousel-item w-100 h-100" + (i == 0 ? " active" : "")}>
                    <div className="container w-100 h-100">
                        <div className="col-12 p-3 carousel-container">
                            {element}
                        </div>
                    </div>
                </div>)}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#main-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#main-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>;
    }
}