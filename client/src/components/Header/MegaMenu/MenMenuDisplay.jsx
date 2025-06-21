import LinkedItem from "./LinkedItem";


const MenMenuDisplay = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="relative z-50 max-auto hidden max-w-7xl gap-10 bg-white px-5 py-8 sm:px-6 lg:flex lg:px-18">
        <div className="grid w-full grid-cols-12 gap-8">
          <div className="col-span-2">
            <h6 className="mb-6 text-sm font-semibold text-slate-600">
              Categories
            </h6>
            <ul className="flex flex-col gap-y-3">
              <LinkedItem url='#' label="Mens FAshion"/>
              <LinkedItem url='#' label="New Arrivals"/>
              <LinkedItem url='#' label="Clothing"/>
              <LinkedItem url='#' label="Footwear"/>
              <LinkedItem url='#' label="Jewellry"/>
              <LinkedItem url='#' label="Backpacks"/>
              <LinkedItem url='#' label="Lugguage"/>
              
            </ul>

          </div>

          <div className='col-span-2'>
						<h6 className='mb-6 text-sm font-semibold text-slate-600'>
							Top Brands
						</h6>
						<ul className='flex flex-col gap-y-3'>
							<LinkedItem url='#' label='Nike' />
							<LinkedItem url='#' label='Tommy Hilfiger' />
							<LinkedItem url='#' label='Skechers' />
							<LinkedItem url='#' label='Adidas' />
							<LinkedItem url='#' label='Puma' />
							<LinkedItem url='#' label='Campus' />
							<LinkedItem url='#' label='Prada' />
						</ul>
					</div>

          <div className="col-span-5">
            <div>
              <a href="#" className="relative block overflow-hidden rounded-x1">
                <span className="absolute bottom-10 left-1/2 z-10 block-translate-x-1/2 rounded-lg bg-white px-3 py-2
                text-center text-sm font-semibold uppercase tracking-wide">Luxury Watches</span>
                <img src="/images/men-watches-category.jpg" alt="Mens Watches" 
                className="h-64 w-full object-cover object-top rounded-xl hover:scale-105 transition-all duration-500" />
              </a>
            </div>

          </div>

          <div className="col-span-3">
            <div>
              <a href="#" className="relative block overflow-hidden rounded-x1">
                <span className="absolute bottom-10 left-1/2 z-10 block-translate-x-1/2 rounded-lg bg-white px-3 py-2
                text-center text-sm font-semibold uppercase tracking-wide">Mens Suits</span>
                <img src="/images/mens-suit-category.jpg" alt="Mens Suits" 
                className="h-64 w-full object-cover object-top rounded-xl hover:scale-105 transition-all duration-500" />
              </a>
            </div>

          </div>


        </div>

      </div>
    </section>
  )
}

export default MenMenuDisplay;