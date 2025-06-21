


const MobileItemMenu = ({url,label,icon:Icon,closeMenu}) => {
  return (
    <a 
        href="{url} onClick={() => closeMenu(false)}" className="block
        w-full px-3 py-2 text-sm font-medium text-slate-900 transition-all
        hover:bg-slate-200 hover:text-indigo-700">
        <span className="flex items-center gap-1">
          <Icon strokwWidth={1.5} className="h-4 w-4"/>
          {label}

        </span>

    </a>
    
  );
};


export default MobileItemMenu;