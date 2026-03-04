import { useRef, useState, useEffect, forwardRef } from "react";
import { RangeProps } from "./Range.types";
import "./Range.css";

export const Range = forwardRef<HTMLDivElement, RangeProps>(
    (props, ref) => {
        const {
            min = 0,
            max = 100,
            step = 1,
            value,
            onChange = () => {},
            disabled = false,
            showTooltip = false,
        } = props;

        const trackRef = useRef<HTMLDivElement>(null);
        const [isDragging, setIsDragging] = useState(false);
        const moveHandlerRef = useRef<((event: MouseEvent | TouchEvent) => void) | null>(null);
        const upHandlerRef = useRef<(() => void) | null>(null);

        const percentage = ((value - min) / (max - min)) * 100;

        // Clamp the thumb visually so it never overflows the track edges.
        // thumbSize must match --slider-thumb-size in CSS (default 20px).
        const thumbSize = 20;
        const thumbOffset = `calc(${percentage}% - ${(percentage / 100) * thumbSize}px)`;

        const updateValueFromPointer = (clientX: number) => {
            if (!trackRef.current || disabled) return;

            const rect = trackRef.current.getBoundingClientRect();
            const pos = clientX - rect.left;
            const newPercentage = Math.min(Math.max(pos / rect.width, 0), 1);
            const newValue = min + newPercentage * (max - min);
            const steppedValue = Math.round(newValue / step) * step;
            const clamped = Math.min(Math.max(steppedValue, min), max);

            onChange(Number(clamped.toFixed(10).replace(/\.?0+$/, "")));
        };

        // Cleanup listeners if the component unmounts while dragging (prevents memory leak)
        useEffect(() => {
            return () => {
                if (moveHandlerRef.current) {
                    window.removeEventListener("mousemove", moveHandlerRef.current as EventListener);
                    window.removeEventListener("touchmove", moveHandlerRef.current as EventListener);
                }
                if (upHandlerRef.current) {
                    window.removeEventListener("mouseup", upHandlerRef.current);
                    window.removeEventListener("touchend", upHandlerRef.current);
                }
            };
        }, []);

        const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
            if (disabled) return;

            setIsDragging(true);
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            updateValueFromPointer(clientX);

            const moveHandler = (event: MouseEvent | TouchEvent) => {
                const x =
                    "touches" in event
                        ? (event as TouchEvent).touches[0].clientX
                        : (event as MouseEvent).clientX;
                updateValueFromPointer(x);
            };

            const upHandler = () => {
                setIsDragging(false);
                window.removeEventListener("mousemove", moveHandler as EventListener);
                window.removeEventListener("mouseup", upHandler);
                window.removeEventListener("touchmove", moveHandler as EventListener);
                window.removeEventListener("touchend", upHandler);
                moveHandlerRef.current = null;
                upHandlerRef.current = null;
            };

            moveHandlerRef.current = moveHandler;
            upHandlerRef.current = upHandler;

            window.addEventListener("mousemove", moveHandler as EventListener);
            window.addEventListener("mouseup", upHandler);
            window.addEventListener("touchmove", moveHandler as EventListener);
            window.addEventListener("touchend", upHandler);
        };

        const handleKeyDown = (e: React.KeyboardEvent) => {
            if (disabled) return;
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                e.preventDefault();
                onChange(Math.min(Number((value + step).toFixed(10).replace(/\.?0+$/, "")), max));
            } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                e.preventDefault();
                onChange(Math.max(Number((value - step).toFixed(10).replace(/\.?0+$/, "")), min));
            }
        };

        return (
            <div
                ref={ref}
                className={`slider ${disabled ? "slider--disabled" : ""}`}
            >
                {/* Native input kept for form compatibility and screen readers */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    disabled={disabled}
                    onChange={(e) => onChange(Number(e.target.value))}
                    aria-hidden="true"
                    tabIndex={-1}
                    className="slider__native"
                />

                <div
                    ref={trackRef}
                    className="slider__track"
                    role="slider"
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : 0}
                    onMouseDown={handlePointerDown}
                    onTouchStart={handlePointerDown}
                    onKeyDown={handleKeyDown}
                >
                    <div
                        className="slider__progress"
                        style={{ width: `${percentage}%` }}
                    />
                    <div
                        className={`slider__thumb ${
                            isDragging ? "slider__thumb--active" : ""
                        }`}
                        style={{ left: thumbOffset }}
                    >
                        {showTooltip && (
                            <span className="slider__tooltip">{value}</span>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

Range.displayName = "Range";
