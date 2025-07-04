
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import Banners from "../components/Banners";
import Features from "../components/Features";
import Deals from "../components/Deals"; 
import MultiItemCarousel from "../components/MultiItemCarousel";  
import BannersAds from "../components/BannersAds";  
import CategoriesUltime from "../components/CategoriesUltime";   
import Footer from "../components/Footer";
function Home() {
    return (
        <>
        <main className="m-auto w-[375px]">
            <Header />
            <div >
            <Slideshow />
             <Banners />
            </div>
            <Features />
            <Deals />
            <MultiItemCarousel />
            <BannersAds />
            <CategoriesUltime />
            <Footer />
            <Navbar />

        </main>
         
        </>
    );  
    
}
export default Home;