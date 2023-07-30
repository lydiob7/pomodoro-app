import { useEffect, useRef, useState } from "react";
import workAudioFile from "../assets/audio/shamisen.mp3";
import restAudioFile from "../assets/audio/cuenco.mp3";

const TIMER_RADIUS = 117;
const TOTAL_DASHOFFSET = 2 * Math.PI * TIMER_RADIUS;

function calculateOffset(time: number, work: number) {
    const percentage = time / (work * 60);
    return `${TOTAL_DASHOFFSET * percentage}`;
}

interface UseTimerProps {
    periods?: number;
    rest?: number;
    work?: number;
}

function convertSecondsToTime(time: number) {
    const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");

    return { minutes, seconds };
}

const workAudio = new Audio(workAudioFile);
const restAudio = new Audio(restAudioFile);

const useTimer = ({ periods = 4, rest = 5, work = 25 }: UseTimerProps) => {
    const [elapsedPeriods, setElapsedPeriods] = useState<number>(0);
    const [isOnRest, setIsOnRest] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [time, setTime] = useState<number>(work * 60);

    const animatedElementRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (animatedElementRef?.current) {
            animatedElementRef.current.style.animationDuration = `${(work || 25) * 60}s`;
            animatedElementRef.current.style.animationIterationCount = "infinite";
            animatedElementRef.current.style.transform = "rotate(-90deg)";
            animatedElementRef.current.style.strokeDasharray = `${TOTAL_DASHOFFSET}`;
            animatedElementRef.current.style.strokeDashoffset = `${TOTAL_DASHOFFSET}`;
            // animatedElementRef.current.style.transition = "stroke-dashoffset 1s linear";
        }
    }, [animatedElementRef, work]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    useEffect(() => {
        if (time === 0) {
            if (isOnRest) workAudio.play();
            else restAudio.play();
            setTimeout(() => {
                if (isOnRest) {
                    setIsOnRest(false);
                    setTime(work * 60);
                } else {
                    setIsOnRest(true);
                    setTime(rest * 60);
                    if (elapsedPeriods !== periods) setElapsedPeriods((prevState) => prevState + 1);
                }
            }, 1000);
        }
    }, [elapsedPeriods, isOnRest, periods, rest, time, work]);

    useEffect(() => {
        if (elapsedPeriods === periods) {
            setElapsedPeriods(0);
            setIsRunning(false);
            setIsStarted(false);
            setTime(work * 60);
        }
    }, [elapsedPeriods, periods, work]);

    useEffect(() => {
        if (animatedElementRef.current)
            animatedElementRef.current.style.strokeDashoffset = calculateOffset(time, isOnRest ? rest : work);
    }, [animatedElementRef, isOnRest, rest, time, work]);

    const handleStart = () => {
        if (!isStarted) workAudio.play();
        setIsRunning(true);
        setIsStarted(true);
    };

    const handleRestart = () => {
        setTime(work * 60);
        if (!isRunning) setIsStarted(false);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const { minutes, seconds } = convertSecondsToTime(time);

    return {
        animatedElementRef,
        elapsedPeriods,
        isOnRest,
        isRunning,
        isStarted,
        minutes,
        pause: handlePause,
        restart: handleRestart,
        seconds,
        start: handleStart
    };
};

export default useTimer;
