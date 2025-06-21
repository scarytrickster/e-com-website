import { Link } from "react-router-dom"

import Header from "@components/Header"
import Footer from "@components/Footer"



const ErrorScreen = () => {
  return (
    <div className="flex min-h-screen flex-col">
        <Header/>
        <div className="grid flex-grow place-items-center bg-white px-6 py-2 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt- tet-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Page not found

                </h1>
                <p className="mt-6 text-base leading-7 text-slate-600">
                    sorry we counldnt find the page you are looking
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm
                        font-semibold text-white shadow-sm hover:bg-indigo-500">
                        Go back Home

                    </Link>

                </div>
            </div>

        </div>

        <Footer/>

    </div>
  )
}

export default ErrorScreen