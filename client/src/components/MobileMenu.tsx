import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 h-screen bg-dark-darker border-none">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="font-bold text-xl">Menu</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-auto p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors text-lg py-2"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg text-center mt-4 transition-colors"
                onClick={handleLinkClick}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileMenu;
