
import { DigitalClockProps } from "./DigitalClock.types";
import "./DigitalClock.css";
import { styleText } from "util";
import { Transform } from "stream";

export const DigitalClock = ({
}: DigitalClockProps ) => {
    return (
        <div className="digital-clock-main-container">
            <div className="digital-clock-seconds-circle">
                <div className="diallines"></div>
                {
                    Array.from({length: 60}).map((dot, index) => {
                        return (
                            <div
                                style={{ transform: `rotate(${index * 6}deg)` }}
                                key={index + 1}
                                className="diallines">    
                            </div>)
                    })
                }
            </div>
            <div className="digital-clock-seconds-marker">
                <span>Segundos</span>
            </div>
        </div>
    )    
};
