import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/outline"

const MobileMenuIcon = ({isOpen,setIsOpen}) => {
  return (
    <button className="block sm:hidden" onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ?
         (<XMarkIcon className="h-6 w-6 text-slate-600"/>
        ): (
            <Bars3Icon className="h-6 w-6 text-slate-600" />
        )}
    </button>
  );
};


export default MobileMenuIcon;