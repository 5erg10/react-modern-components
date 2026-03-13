import { forwardRef, useState } from "react";
import { AccordionProps } from "./Accordion.types";
import "./Accordion.css";
import { Icon } from "../../icons";

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, ambient = 'light', disabled = false }, ref) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
      setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
      <div ref={ref} className="modern-accordion" data-accordion-ambient={ambient}>
        {items.map((item, index) => {
          const isOpen     = openIndex === index;
          const isDisabled = disabled || item.disabled;

          return (
            <div
              key={index}
              className="modern-accordion__item"
              data-open={isOpen}
              data-disabled={isDisabled}
            >
              <button
                className="modern-accordion__header"
                onClick={() => !isDisabled && handleToggle(index)}
                aria-expanded={isOpen}
                aria-disabled={isDisabled}
                disabled={isDisabled}
              >
                <span className="modern-accordion__title">{item.title}</span>
                <Icon
                  name={isOpen ? "caret-up" : "caret-down"}
                  variant="fill"
                  className="modern-accordion__icon"
                />
              </button>

              <div className="modern-accordion__collapse">
                <div
                  className="modern-accordion__body"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";
