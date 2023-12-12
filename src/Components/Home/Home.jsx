import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner/Banner";
import LinkSection from "./LinkSection/LinkSection";
import SocialLink from "./SocialLink/SocialLink";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LinkSection></LinkSection>
            <SocialLink></SocialLink>
            <Footer></Footer>
        </div>
    );
};

export default Home;