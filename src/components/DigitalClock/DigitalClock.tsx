
import { useEffect, useState } from "react";
import { DigitalClockProps } from "./DigitalClock.types";
import "./DigitalClock.css";

export const DigitalClock = ({
    size = 'medium',
    ambient = "light",
    maskOpacity = 0.5
}: DigitalClockProps ) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let interval: any;

        const updateClock = () => {
            setTime(new Date());
        };

        const now = new Date();
        const delay = (60 - now.getSeconds()) * 1000;

        const timeout = setTimeout(() => {
            updateClock();
            interval = setInterval(updateClock, 60000);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='digital-clock' clock-size={size} ambient-mode={ambient}>
            <div className="dial-box seconds-dial">
                {
                    Array.from({length: 60}).map((dot, index) => {
                        return (
                            <div
                                style={{ transform: `rotate(${index * 6}deg)` }}
                                key={index + 1}
                                className="marker seconds-marker">    
                            </div>)
                    })
                }
            </div>
            <div className="dial-box minutes-dial" style={{ rotate: `-${(45 + time.getMinutes()) * 6}deg ` }}>
                {
                    Array.from({length: 60}).map((dot, index) => {
                        return (
                            <div
                                style={{ rotate: `${index * 6}deg` }}
                                key={index + 1}
                                className="marker minutes-marker">
                                    <div>{size != 'small' || index % 5 == 0? index.toString().padStart(2, "0") : '|'}</div> 
                            </div>)
                    })
                }
            </div>
            <div className="dial-box hours-dial" style={{ rotate: `-${(42 + time.getHours()) * 15}deg` }}>
                {
                    Array.from({length: 24}).map((dot, index) => {
                        return (
                            <div
                                style={{ rotate: `${index * 15}deg` }}
                                key={index + 1}
                                className="marker hour-marker">
                                    <div>{index}</div>
                            </div>)
                    })
                }
            </div>
            <div className="digital-clock-indicator" style={{ "--mask-opacity": maskOpacity } as React.CSSProperties}>
                <span>Hour</span>
            </div>
        </div>
    )    
};
