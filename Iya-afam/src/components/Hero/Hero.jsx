import Image1 from "/src/assets/Images/Iya afam1.jpg";
import Image2 from "/src/assets/Images/Iya afam 6.jpeg";
import Image3 from "/src/assets/Images/Iya afam7.jpeg";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image2,
        title: "Up to 30% off on all Frozen foods",
        description: "Best quality frozen foods you can get with ensured freshness like they were freshly caught"
    },
    {
        id: 1,
        img: Image1,
        title: "Up to 40% off on all Soft drinks",
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 1,
        img: Image3,
        title: "Upto 30% off on all Frozen foods",
        description: "Best quality frozen foods you can get with ensured freshness like they were freshly caught"
    }
];

const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true

    };

    return (
        <div
            className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center">
            {/*background pattern*/}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

            </div>
            {/*hero section*/}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/*Text Section*/}
                                <div
                                    className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                    <p className="text-sm">{data.description}</p>
                                    <div>
                                        <button
                                            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                                {/*image section*/}
                                <div className="order-1 sm:order-2">
                                    <div className="relative z-10">
                                        <img src={data.img} alt=""
                                             className="w-[300px] h-[300px] sm:h-[450px] sm:w-450px sm:scale-105 lg:scale-120 lg:object-cover sm:object-cover md:object-cover rounded-full mx-auto "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>
        </div>
    )
}
export default Hero
