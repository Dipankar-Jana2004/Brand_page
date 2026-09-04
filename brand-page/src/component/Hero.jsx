import amazonIcon from "../assets/amazon.svg";
import flipkartIcon from "../assets/flipkart.svg";
import shoeImage from "../assets/shoe_image.png";
import "./Hero.css";
function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
      </div>

      <div className="hero-btn">
        <button className="btn">Shop Now</button>
        <button className="btn">Category</button>
      </div>

      <div className="shopping">
        <p>Also available on</p>
        <div className="brand-icons">
          <img src={amazonIcon} alt="Amazon" />
          <img src={flipkartIcon} alt="Flipkart" />
        </div>
      </div>
      <div className="hero-image">
        <span className="hero-image-label">AIR / 01</span>
        <img src={shoeImage} alt="Red and white running shoe" />
      </div>
    </main>
  );
}
export default Hero;
