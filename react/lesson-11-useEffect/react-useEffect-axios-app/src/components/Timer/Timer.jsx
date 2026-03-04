import { useState, useRef, useEffect } from "react";

const Timer = ()=> {
    const [time, setTime] = useState(0);
    const intervalIdRef = useRef(null);

    useEffect(()=> {
        return ()=> onStop();
    }, []);

    const onStart = ()=> {
        intervalIdRef.current = setInterval(()=> {
            console.log(time);
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }

    const onStop = ()=> {
        clearInterval(intervalIdRef.current);
    }

    const onReset = ()=> {
        onStop();
        setTime(0);
    }

    return (
        <div>
            <p>{time}</p>
            <div>
                <button onClick={onStart}>Start</button>
                <button onClick={onStop}>Stop</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}

export default Timer;