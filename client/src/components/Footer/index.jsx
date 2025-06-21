

export const Footer = () => {
  return (
    <footer className="w-full">
        <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-slate 700 sm:text left">
                @{new Date().getFullYear()} RST Store.All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}


export default Footer;