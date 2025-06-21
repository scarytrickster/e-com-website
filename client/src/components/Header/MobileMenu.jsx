import { ShoppingBagIcon,TagIcon,UserIcon} from "@heroicons/react/24/outline";
import MobileSearchBar from "./MobileSearchbar";
import MobileItemMenu from "./MobileItemMenu";



const MobileMenu = ({setIsOpen}) => {
  return (
    <nav className="relative z-10 w-full overflow-y-auto bg-white pb-2 sm:max-w-sm">
        <MobileSearchBar/>
        <div className="h-2"/>
        <div>
            <MobileItemMenu url='#' label="Categories" icon={TagIcon} closeMenu={setIsOpen}/>
            <MobileItemMenu url='/cart' label="Cart" icon={ShoppingBagIcon} closeMenu={setIsOpen}/>
            <MobileItemMenu url='/login' label="Login" icon={UserIcon} closeMenu={setIsOpen}/>


        </div>

    </nav>
  );
};

export default MobileMenu;
