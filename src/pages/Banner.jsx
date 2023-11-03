import image1 from "../../src/assets/images/banner/1.jpg";
import image2 from "../../src/assets/images/banner/2.jpg";
import image3 from "../../src/assets/images/banner/3.jpg";
import image4 from "../../src/assets/images/banner/4.jpg";
// import image5 from '../../src/assets/images/banner/5.jpg'
// import image6 from '../../src/assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        
        <img src={image1} className="w-full rounded-lg " />
        <div
          className="absolute  rounded-lg pl-4 text-white mr-9 h-full items-center left-0  space-y-7 bottom-0 w-1/2
        bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"
        >
          <h2 className="text-6xl">
            Affordable <br /> Price For Car <br /> Servicing
          </h2>
          <p className="">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end mr-9 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>


      <div id="slide2" className="carousel-item relative w-full">
      <img src={image2} className="w-full rounded-lg " />
        <div
          className="absolute  rounded-lg pl-4 text-white mr-9 h-full items-center left-0  space-y-7 bottom-0 w-1/2
        bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"
        >
          <h2 className="text-6xl">
            Affordable <br /> Price For Car <br /> Servicing
          </h2>
          <p className="">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end mr-9 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <img src={image3} className="w-full rounded-lg " />
        <div
          className="absolute  rounded-lg pl-4 text-white mr-9 h-full items-center left-0  space-y-7 bottom-0 w-1/2
        bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"
        >
          <h2 className="text-6xl">
            Affordable <br /> Price For Car <br /> Servicing
          </h2>
          <p className="">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end mr-9 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <img src={image4} className="w-full rounded-lg " />
        <div
          className="absolute  rounded-lg pl-4 text-white mr-9 h-full items-center left-0  space-y-7 bottom-0 w-1/2
        bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"
        >
          <h2 className="text-6xl">
            Affordable <br /> Price For Car <br /> Servicing
          </h2>
          <p className="">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end mr-9 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
