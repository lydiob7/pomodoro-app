import { FC } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
    return (
        <div className="flex flex-col justify-between items-stretch h-screen overflow-hidden bg-[#1E1D1E] text-white">
            <Header />
            <div className="flex-1 overflow-y-scroll">
                <Outlet />
            </div>
            <BottomNavigation />
        </div>
    );
};

export default Layout;
