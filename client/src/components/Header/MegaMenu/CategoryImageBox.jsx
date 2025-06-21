
const CategoryImageBox = ({url,imageUrl,label}) => {
  return (
    <div>
        <a href="#" className="relative block overflow-hidden rounded-x1">
           <span className="absolute bottom-10 left-1/2 z-10 block-translate-x-1/2 rounded-lg bg-white px-3 py-2
                text-center text-sm font-semibold uppercase tracking-wide">
                {label}
           </span>
            <img src={imageUrl} alt={label} 
            className="h-64 w-full object-cover object-top rounded-xl hover:scale-105 transition-all duration-500" 
            />
        </a>
    </div>
  )
}

export default CategoryImageBox; 