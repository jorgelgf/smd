import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function XCarousel() {
    const image = "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <Carousel>
            <div>
                <img src={image} alt='1' />

            </div>
            <div>
                <img src={image} alt='1' />

            </div>
            <div>
                <img src={image} alt='1' />
            </div>
            <div>
                <img src={image} alt='1' />
            </div>
            <div>
                <img src={image} alt='1' />
            </div>
            <div>
                <img src={image} alt='1' />
            </div>
            <div>
                <img src={image} alt='1' />
            </div>

        </Carousel>
    );
};

