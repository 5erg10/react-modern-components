export interface Option {[key: string]: any}; // internal

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  options: Option[];
  label: string;
  ambient?: 'dark' | 'light';
  color?: string;
  backgroundColor?: string;
  darkColor?: string;
  darkBackgroundColor?: string;
};
