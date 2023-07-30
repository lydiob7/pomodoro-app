import clsx from "clsx";
import { FC } from "react";

interface TimePeriodProps {
    active?: boolean;
    elapsed?: boolean;
}

const TimePeriod: FC<TimePeriodProps> = ({ active, elapsed }) => {
    return (
        <div
            className={clsx(
                "rounded-full w-16 h-8",
                elapsed ? "bg-secondary" : "border-2 border-secondary opacity-50",
                active ? "opacity-100" : ""
            )}
        />
    );
};

export default TimePeriod;
