import logoImage from "@/assets/swiftura-logo.png";

const Logo = () => {
  return (
    <a href="#" className="text-white font-bold text-2xl flex items-center">
      <div className="h-12 flex items-center mr-3">
        <img src={logoImage} alt="Swiftura Logo" className="h-full w-auto" />
      </div>
      <span className="tracking-wide">Swiftura</span>
    </a>
  );
};

export default Logo;
