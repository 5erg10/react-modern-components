import { useRef, useState, useEffect, useCallback, forwardRef } from "react";
import { RangeProps } from "./Range.types";
import "./Range.css";

export const Range = forwardRef<HTMLDivElement, RangeProps>(
    (props, ref) => {
        const {
            min = 0,
            max = 100,
            step = 1,
            value,
            onChange,
            disabled = false,
            showTooltip = false,
            label,
        } = props;

        const trackRef = useRef<HTMLDivElement>(null);
        const [isDragging, setIsDragging] = useState(false);

        // Refs to hold the active drag handlers so we can clean them up
        // if the component unmounts while a drag is in progress.
        const moveHandlerRef = useRef<((event: MouseEvent | TouchEvent) => void) | null>(null);
        const upHandlerRef = useRef<(() => void) | null>(null);

        // Always keep a fresh reference to updateValueFromPointer so that
        // drag handlers created on pointerDown never close over stale props.
        const updateValueFromPointerRef = useRef<(clientX: number) => void>(() => {});

        const percentage = ((value - min) / (max - min)) * 100;

        // Derive decimal precision directly from the step prop so we never
        // produce floating-point noise (e.g. 0.30000000000000004).
        const stepPrecision = (step.toString().split(".")[1] ?? "").length;

        const updateValueFromPointer = useCallback(
            (clientX: number) => {
                if (!trackRef.current || disabled) return;

                const rect = trackRef.current.getBoundingClientRect();
                const pos = clientX - rect.left;
                const newPercentage = Math.min(Math.max(pos / rect.width, 0), 1);
                const newValue = min + newPercentage * (max - min);
                const steppedValue = Math.round(newValue / step) * step;
                const clamped = Math.min(Math.max(steppedValue, min), max);

                onChange(Number(clamped.toFixed(stepPrecision)));
            },
            [disabled, min, max, step, stepPrecision, onChange]
        );

        // Keep the ref in sync with the latest version of the callback.
        useEffect(() => {
            updateValueFromPointerRef.current = updateValueFromPointer;
        });

        // Cleanup listeners if the component unmounts while a drag is in progress.
        useEffect(() => {
            return () => {
                if (moveHandlerRef.current) {
                    window.removeEventListener("mousemove", moveHandlerRef.current);
                    window.removeEventListener("touchmove", moveHandlerRef.current);
                }
                if (upHandlerRef.current) {
                    window.removeEventListener("mouseup", upHandlerRef.current);
                    window.removeEventListener("touchend", upHandlerRef.current);
                }
            };
        }, []);

        const handlePointerDown = useCallback(
            (e: React.MouseEvent | React.TouchEvent) => {
                if (disabled) return;

                setIsDragging(true);
                const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
                updateValueFromPointerRef.current(clientX);

                // Explicitly typed native handlers — no cast needed.
                const moveHandler = (event: MouseEvent | TouchEvent): void => {
                    const x =
                        "touches" in event
                            ? (event as TouchEvent).touches[0].clientX
                            : (event as MouseEvent).clientX;
                    updateValueFromPointerRef.current(x);
                };

                const upHandler = (): void => {
                    setIsDragging(false);
                    window.removeEventListener("mousemove", moveHandler);
                    window.removeEventListener("mouseup", upHandler);
                    window.removeEventListener("touchmove", moveHandler);
                    window.removeEventListener("touchend", upHandler);
                    moveHandlerRef.current = null;
                    upHandlerRef.current = null;
                };

                moveHandlerRef.current = moveHandler;
                upHandlerRef.current = upHandler;

                window.addEventListener("mousemove", moveHandler);
                window.addEventListener("mouseup", upHandler);
                window.addEventListener("touchmove", moveHandler);
                window.addEventListener("touchend", upHandler);
            },
            [disabled]
        );

        const handleKeyDown = useCallback(
            (e: React.KeyboardEvent) => {
                if (disabled) return;
                if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                    e.preventDefault();
                    onChange(Number(Math.min(value + step, max).toFixed(stepPrecision)));
                } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                    e.preventDefault();
                    onChange(Number(Math.max(value - step, min).toFixed(stepPrecision)));
                }
            },
            [disabled, value, step, min, max, stepPrecision, onChange]
        );

        return (
            <div
                ref={ref}
                className={`slider ${disabled ? "slider--disabled" : ""}`}
            >
                {/* Native input kept for form compatibility only */}
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
                    aria-label={label}
                    aria-orientation="horizontal"
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
                        style={{
                            // Offset derived purely from CSS var — no JS magic number.
                            left: `calc(${percentage}% - ${percentage / 100} * var(--slider-thumb-size))`
                        }}
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
