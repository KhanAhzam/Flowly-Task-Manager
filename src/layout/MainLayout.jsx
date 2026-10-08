import { Outlet } from "react-router-dom"

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import maincontent_bg_image from '../assests/maincontent_bg_image.png'

const MainLayout = () => {
    return (
        <div className="h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${maincontent_bg_image})` }}>

            {/* Header/Navbar
            <div className="h-20 w-full border-b border-secondary/10">
                <Navbar />
            </div> */}

            {/* Mainbox */}
            <div className="Mainbox flex-1 w-full flex min-h-0">

                <div className="w-[10%] xl:w-[15%]">
                    <Sidebar />
                </div>

                <div className="Maincontent flex-1 overflow-y-auto">
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default MainLayout
