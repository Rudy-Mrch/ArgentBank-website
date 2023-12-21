import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import FeatureItem from "../../components/FeatureItem/FeatureItem";



const Home = () => {
  return (
    <div>
  <Banner />
  <div className="hero">
  </div>
  <section className="features">
    <h2 className="sr-only">Features</h2>
   <FeatureItem 
   iconSrc="/../../img/icon-chat.webp"
   Alt="Chat Icon"
   title="You are our #1 priorit"
   description=" Need to talk to a representative? You can get in touch through our
   24/7 chat or through a phone call in less than 5 minutes."
   />
      <FeatureItem 
   iconSrc="/../../img/icon-money.webp"
   Alt="Chat Icon"
   title="More savings means higher rates"
   description=" The more you save with us, the higher your interest rate will be!."
   />
      <FeatureItem 
   iconSrc="/../../img/icon-security.webp"
   Alt="Chat Icon"
   title="Security you can trust"
   description="  We use top of the line encryption to make sure your data and money
   is always safe."
   />
    
    </section>    
  
  <Footer />
    
    </div>
  );
};

export default Home;
