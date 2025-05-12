import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import CourseCarousel from "../components/CourseCarousel";
import CourseFilterCarousel from "../components/CourseFilterCarousel";
import StatCarousel from "../components/StatCarousel";
import Teams from "../components/Teams";

const Homepage = () => {


    return (
      <div>
        <Helmet>
          <title>RAM IT BD - Home</title>
          <meta
            name="description"
            content="This is a dynamic description for SEO"
          />
        </Helmet>

        <HeroSection></HeroSection>

        <CourseCarousel></CourseCarousel>

        <Teams></Teams>
        
        <CourseFilterCarousel></CourseFilterCarousel>

        <StatCarousel></StatCarousel>
                
      </div>
    );
};

export default Homepage;