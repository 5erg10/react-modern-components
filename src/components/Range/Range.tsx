
import { useRef, useState, forwardRef } from "react";
import { RangeProps } from "./Range.types";
import "./Range.css";

export const Range = forwardRef<HTMLDivElement, RangeProps>(
    (props, ref) => {

        const { min = 0, max = 100, step = 1, value, onChange = () => { }, disabled = false, showTooltip = false } = props;

        const trackRef = useRef<HTMLDivElement>(null);
        const [isDragging, setIsDragging] = useState(false);

        const percentage = ((value - min) / (max - min)) * 100;

        const updateValueFromPointer = (clientX: number) => {
            if (!trackRef.current || disabled) return;

            const rect = trackRef.current.getBoundingClientRect();
            const pos = clientX - rect.left;
            const newPercentage = Math.min(Math.max(pos / rect.width, 0), 1);

            const newValue = min + newPercentage * (max - min);
            const steppedValue = Math.round(newValue / step) * step;

            onChange(Number(steppedValue.toFixed(2)));
        };

        const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
            if (disabled) return;

            setIsDragging(true);
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

            updateValueFromPointer(clientX);

            const moveHandler = (event: MouseEvent | TouchEvent) => {
                const clientX =
                    "touches" in event
                        ? event.touches[0].clientX
                        : (event as MouseEvent).clientX;
                updateValueFromPointer(clientX);
            };

            const upHandler = () => {
                setIsDragging(false);
                window.removeEventListener("mousemove", moveHandler as any);
                window.removeEventListener("mouseup", upHandler);
                window.removeEventListener("touchmove", moveHandler as any);
                window.removeEventListener("touchend", upHandler);
            };

            window.addEventListener("mousemove", moveHandler as any);
            window.addEventListener("mouseup", upHandler);
            window.addEventListener("touchmove", moveHandler as any);
            window.addEventListener("touchend", upHandler);
        };

        const handleKeyDown = (e: React.KeyboardEvent) => {
            if (disabled) return;
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                onChange(Math.min(value + step, max));
            } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                onChange(Math.max(value - step, min));
            }
        };
        return (
            <div
                ref={ref}
                className={`slider ${disabled ? "slider--disabled" : ""}`}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    disabled={disabled}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="slider__native"/>

                <div
                    ref={trackRef}
                    className="slider__track"
                    onMouseDown={handlePointerDown}
                    onTouchStart={handlePointerDown}
                    tabIndex={disabled ? -1 : 0}
                    onKeyDown={handleKeyDown}>
                    <div
                        className="slider__progress"
                        style={{ width: `${percentage}%` }}/>
                    <div
                        className={`slider__thumb ${isDragging ? "slider__thumb--active" : ""
                            }`}
                        style={{ left: `${percentage}%` }}>
                        {showTooltip && (
                            <span className="slider__tooltip">{value}</span>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

