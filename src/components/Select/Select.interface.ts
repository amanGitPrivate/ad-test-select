/* children interace */

export interface ListChildren {
  value: string;
  label: string;
  additionalInfo?: string
}

interface ListOption {
  categoryName: string;
  children: ListChildren[];
}

export interface AdditionalInfoChilren {
  value: string;
  label: string;
  additionalInfo: string
}
export interface Selected {
  label?: string;
  value: string;
  addintionalInfo?: string;
}

export interface SelectProps {
  menuOptions: ListOption[];
  searchable?: boolean;
  searchPlaceHolder?: string;
  onChange: (option: ListChildren) => void;
  selected?: {
    value: string;
    label?: string;
  };
  renderOption?: (option: ListChildren) => void;
  isMenuOpen?: boolean;
  dropDownlabel?: string;
  dropDownPlaceholder?: string;
}

