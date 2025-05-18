import heroimage from "../assets/sl1.png";
import bannerBg from "../assets/banner_bg.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
    return (
      <div
        className="px-[5%] py-4 lg:py-[50px] bg-repeat"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="img w-full">
              <img src={heroimage} className="w-full rounded-lg shadow-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#202020]">
                Unleash Your Potential
              </h1>
              <p className="py-6 text-3xl lg:text-6xl font-bold text-[#202020]">
                Become an IT Pro & Rule the Digital World
              </p>
              <p className="py-3 text-xl text-[#202020]">
                With a vision to turn manpower into assets, RAM IT BD
                 is ready to enhance your learning experience with
                skilled mentors and an updated curriculum. Pick your desired
                course from more than 45 trendy options.
              </p>
              <div className="flex gap-4">
                <Link to="/courses">
                  <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-600 hover:to-red-600 transition-all duration-300 cursor-pointer">
                    Browse Courses
                  </button>
                </Link>
                <Link to="/seminars">
                  <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-orange-600 hover:to-red-700 transition-all duration-300 cursor-pointer">
                    Join Free Seminar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;
