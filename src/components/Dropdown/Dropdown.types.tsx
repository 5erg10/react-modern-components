export interface Option {[key: string]: any}; // internal

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  options: Option[];
  label: string;
};
