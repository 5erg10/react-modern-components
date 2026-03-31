
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { DropdownProps, Option } from "./Dropdown.types";
import "./Dropdown.css";
import { Icon } from "../../icons";

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
({ options, label, ambient = 'dark', color, backgroundColor, darkColor, darkBackgroundColor, onChange, disabled, ...props }, ref) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => selectRef.current!);

    const resolvedColor = ambient === 'dark' ? (color ?? '#f3f4f6') : (darkColor ?? '#333333');
    const resolvedBg    = ambient === 'dark' ? (backgroundColor ?? '#374151') : (darkBackgroundColor ?? '#dedede');

    const colorStyle = {
        '--input-text-color': resolvedColor,
        '--input-bg-color': resolvedBg,
        '--input-border-color': resolvedColor,
    } as React.CSSProperties;

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (index: number, o: Option) => {
        setSelectedIndex(index);
        setIsOpen(false);
        if (selectRef.current) {
            selectRef.current.value = JSON.stringify(o);
            onChange?.({ target: selectRef.current, currentTarget: selectRef.current } as React.ChangeEvent<HTMLSelectElement>);
        }
    };

    return (
        <div className="modern-dropdown" style={colorStyle} data-input-ambient={ambient} data-disabled={disabled} ref={containerRef}>
            <select ref={selectRef} style={{ display: 'none' }} disabled={disabled} {...props}>
                { options.map((o: Option, i: number) => (
                    <option key={i} value={JSON.stringify(o)}>{ String(o[label]) }</option>
                ))}
            </select>

            <div className="modern-dropdown__select" data-has-value={selectedIndex !== null} onClick={() => !disabled && setIsOpen(prev => !prev)}>
                { selectedIndex !== null ? String(options[selectedIndex][label]) : '' }
            </div>

            <label className="modern-dropdown__label">{ label.charAt(0).toUpperCase() + label.slice(1) }</label>

            <div className="modern-dropdown__icon" data-open={isOpen}>
                <Icon name="caret-right" variant="light" />
            </div>

            { isOpen && (
                <div className="modern-dropdown__list">
                    { options.map((o: Option, i: number) => (
                        <div
                            key={i}
                            className="modern-dropdown__option"
                            data-selected={selectedIndex !== null && i === selectedIndex}
                            onMouseDown={() => handleSelect(i, o)}
                        >
                            { String(o[label]) }
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
});

Dropdown.displayName = "Dropdown";
