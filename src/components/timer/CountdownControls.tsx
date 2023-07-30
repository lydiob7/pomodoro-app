import { FC } from "react";
import Button from "../global/Button";

interface CountdownControlsProps {
    isRunning: boolean;
    isStarted: boolean;
    pause: () => void;
    restart: () => void;
    start: () => void;
}

const CountdownControls: FC<CountdownControlsProps> = ({ isRunning, isStarted, pause, restart, start }) => {
    return (
        <>
            {!isRunning ? (
                !isStarted ? (
                    <Button onClick={start}>Start</Button>
                ) : (
                    <div className="flex items-center justify-center w-full gap-4">
                        <Button color="secondary" size="sm" variant="outlined" onClick={start}>
                            Resume
                        </Button>
                        <Button size="sm" variant="outlined" onClick={restart}>
                            Clear
                        </Button>
                    </div>
                )
            ) : (
                <div className="flex items-center justify-center w-full gap-4">
                    <Button color="secondary" size="sm" variant="outlined" onClick={pause}>
                        Pause
                    </Button>
                    <Button size="sm" variant="outlined" onClick={restart}>
                        Restart
                    </Button>
                </div>
            )}
        </>
    );
};

export default CountdownControls;
