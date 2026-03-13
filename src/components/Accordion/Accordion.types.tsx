export interface AccordionItem {
  title: string;
  content: string;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  disabled?: boolean;
}
