import Countdown from "../../components/timer/Countdown";
import { FC } from "react";

const HomePage: FC = () => {
    return (
        <main className="container h-full">
            <Countdown />
        </main>
    );
};

export default HomePage;
