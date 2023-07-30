import { FC } from "react";
import useTimer from "../../hooks/useTimer";
import { FaBookOpen } from "@react-icons/all-files/fa/FaBookOpen";
import { FaBed } from "@react-icons/all-files/fa/FaBed";
import TimePeriod from "./TimePeriod";
import CountdownControls from "./CountdownControls";

interface CountdownProps {
    periods?: number;
    rest?: number;
    work?: number;
}

const Countdown: FC<CountdownProps | undefined> = (props) => {
    const { periods, rest, work } = props ?? {};

    const {
        animatedElementRef,
        elapsedPeriods,
        isOnRest,
        isRunning,
        isStarted,
        minutes,
        pause,
        restart,
        seconds,
        start
    } = useTimer({
        periods,
        rest,
        work
    });

    return (
        <div className="grid place-items-center gap-12 p-8 h-full">
            <div className="flex items-center gap-4">
                {Array.from(Array(periods || 4).keys()).map((per) => (
                    <TimePeriod key={per} active={elapsedPeriods === per} elapsed={elapsedPeriods >= per + 1} />
                ))}
            </div>
            {isRunning ? (
                isOnRest ? (
                    <FaBed size="3rem" className="text-primary" />
                ) : (
                    <FaBookOpen size="3rem" className="text-secondary" />
                )
            ) : null}
            <div className="relative grid place-items-center shrink-0 grow-0 h-60 w-60">
                <span className="absolute w-60 h-60 border-6 border-gray-700 rounded-full z-10 top-0 left-0" />
                <svg className="absolute top-0 -left-8 z-10" ref={animatedElementRef} height="300" width="300">
                    <circle
                        className={isOnRest ? "stroke-primary" : "stroke-secondary"}
                        cx="180"
                        cy="152"
                        r="117"
                        strokeWidth="6"
                        fill="transparent"
                    />
                </svg>
                <span className="relative z-20 text-6xl font-extralight">
                    {minutes}
                    <span className="px-2">:</span>
                    {seconds}
                </span>
            </div>
            <CountdownControls
                isRunning={isRunning}
                isStarted={isStarted}
                pause={pause}
                restart={restart}
                start={start}
            />
        </div>
    );
};

export default Countdown;
