import Hero from "../components/Hero/Hero";
import Services from "../components/ServicesComp/ServicesComp";

const HomePage = () => {

    return (
        <div>
            <div>
                <Hero/>
            </div>
            
            <div className="mt-5">
                <Services />
            </div>

           
        </div>
    );
}

export default HomePage;