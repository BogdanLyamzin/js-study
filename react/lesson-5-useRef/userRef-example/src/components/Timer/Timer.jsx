import { useState, useRef } from "react";

const Timer = ()=> {
    const [time, setTime] = useState(0);
    // const [id, setId] = useState(null);
    const idRef = useRef(null);
    console.log("render")

    const startTimer = ()=> {
        const timerId = setInterval(()=> {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        // setId(timerId)
        useRef.current = timerId;
    }

    const stopTimer = ()=> {
        // clearInterval(id)
        clearInterval(idRef.current)
    }

    const resetTimer = ()=> {
        stopTimer();
        setTime(0);
    }

    return (
        <div>
            <p>{time}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer;