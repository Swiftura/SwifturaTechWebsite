import { Check } from "lucide-react";

const Logo = () => {
  return (
    <a href="#" className="text-white font-bold text-xl flex items-center">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
        <Check className="h-5 w-5" />
      </div>
      Swiftura
    </a>
  );
};

export default Logo;
