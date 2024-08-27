import Sidebar from "./sidebar/Sidebar";
import Hero from "./hero/Hero";
import Today from "./today/Today";
import Categories from "./categories/Categories";
import ThisMonth from "./thisMonth/ThisMonth";
import PromoBanner from "./promoBanner/PromoBanner";
import OurProducts from "./ourProducts/OurProducts";
import Featured from "./featured/Featured";
import Services from "./services/Services";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Hero />
        </div>
      </div>
      <Today />
      <Categories />
      <ThisMonth />
      <PromoBanner />
      <OurProducts />
      <Featured />
      <Services />
    </>
  );
};

export default Home;
