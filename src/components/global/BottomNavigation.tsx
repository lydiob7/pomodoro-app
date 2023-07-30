import paths from "../../config/paths";
import { Link } from "react-router-dom";
import { MdHome } from "@react-icons/all-files/md/MdHome";

const BottomNavigation = () => {
    return (
        <nav className="grow-0 flex items-center justify-center gap-4 w-full px-4 py-2">
            <Link to={paths.home}>
                <button type="button" className="p-4 rounded-full border-1 border-white grid place-items-center">
                    <MdHome size="3rem" />
                </button>
            </Link>
        </nav>
    );
};

export default BottomNavigation;
