import { useLoaderData, useParams } from "react-router-dom";
import BrandItem from "../BrandItem/BrandItem";
// import slider1 from '../../assets/slide 1.png'
// import slider2 from '../../assets/slide 2.png'
// import slider3 from '../../assets/slide 3.png'

const BrandItems = () => {
    const brandItems = useLoaderData();
    const brandName = useParams();
    console.log(brandName, brandItems)

    const item = brandItems.filter(i => i.brandName == brandName.name)
    console.log(item)

    return (
        <div>
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slider1} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

            <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto w-full gap-16">
                    {
                        item.map(car => <BrandItem key={car.id} car={car}></BrandItem>)
                    }
            </div>
        </div>
    );
};

export default BrandItems;