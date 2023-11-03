import person from "../../../public/about_us/person.jpg";
import parts from "../../../public/about_us/parts.jpg";

const About = () => {
  return (
    <div className="flex">
      <div className="lg:w-1/2">
        <img src={person} alt="" />
        <img src={parts} alt="" />
      </div>
      <div className="hero min-h-screen bg-base-200 lg:w-1/2">
        <div className="hero-content flex-col lg:flex-row">
          <img src="" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">About us!</h1>
            <p className="py-6">
              About Us We are qualified & of experience in this field
            </p>
            <button className="btn btn-primary">Get more info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
