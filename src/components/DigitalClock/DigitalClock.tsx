
import { useEffect, useState } from "react";
import { DigitalClockProps } from "./DigitalClock.types";
import "./DigitalClock.css";

// Cada unidad en grados
const DEG_PER_MINUTE = 6;   // 360° / 60 minutos
const DEG_PER_HOUR = 15;    // 360° / 24 horas

// El indicador está a las 3 en punto (90°), así que hay que
// compensar ese offset para que el valor correcto quede centrado en él
const MINUTES_INDICATOR_OFFSET = 45; // 90° / 6° por minuto = 15 slots... ajustado a 45 empíricamente
const HOURS_INDICATOR_OFFSET = 42;   // equivalente para horas

export const DigitalClock = ({
    size = 'medium',
    ambient = "light",
    maskOpacity = 0.5
}: DigitalClockProps ) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

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
        <div className='digital-clock' data-clock-size={size} data-ambient-mode={ambient}>
            <div className="dial-box seconds-dial">
                {
                    Array.from({length: 60}).map((dot, index) => {
                        return (
                            <div
                                style={{ transform: `rotate(${index * DEG_PER_MINUTE}deg)` }}
                                key={index + 1}
                                className="marker seconds-marker">    
                            </div>)
                    })
                }
            </div>
            <div className="dial-box minutes-dial" style={{ rotate: `-${(MINUTES_INDICATOR_OFFSET + time.getMinutes()) * DEG_PER_MINUTE}deg ` }}>
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
            <div className="dial-box hours-dial" style={{ rotate: `-${(HOURS_INDICATOR_OFFSET + time.getHours()) * DEG_PER_HOUR}deg` }}>
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
