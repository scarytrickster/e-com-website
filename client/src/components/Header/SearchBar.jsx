import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";


const SearchBar = () => {
  return (
    <div className="relative hidden w-full lg:block">
        <MagnifyingGlassIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400"/>

        <input type="search" placeholder="What are you looking for?" 
        className="h-10 w-full rounded-lg bg-slate-200 px-4 pl-10 
        text-sm outline-slate-600 transitions-all
        placeholder:text-slate-500"
        />

    
    </div>
  );
}; 

export default SearchBar;
