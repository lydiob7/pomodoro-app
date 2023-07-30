import { FC } from "react";
import logo from "../../assets/images/logo.png";
import brand from "../../assets/images/brand.png";
import { Link } from "react-router-dom";
import paths from "../../config/paths";

const Header: FC = () => {
    return (
        <header className="grow-0 h-24 px-4 py-2 flex items-center justify-between w-full">
            <Link to={paths.home}>
                <div className="h-12">
                    <img className="h-full object-scale-down" src={brand} alt="Pomodoro App" />
                </div>
            </Link>
            <div className="h-20">
                <img className="h-full object-scale-down" src={logo} alt="Pomodoro App" />
            </div>
        </header>
    );
};

export default Header;
