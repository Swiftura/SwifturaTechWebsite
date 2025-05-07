import logoImage from "@/assets/swiftura-logo.png";

const Logo = () => {
  return (
    <a href="#" className="text-white font-bold text-xl flex items-center">
      <div className="h-10 flex items-center mr-3">
        <img src={logoImage} alt="Swiftura Logo" className="h-full w-auto" />
      </div>
      Swiftura
    </a>
  );
};

export default Logo;
