import { KeyboardEvent, memo } from 'react';
import { useMutliSelect } from '../../hooks/useMutliSelect';

type MultiSelectPickerProps = {
  options: Option[];
  selectedValues: string[];
  onSelect: (selected: string[]) => void;
};

type Option = {
  icon: string;
  label: string;
  value: string;
};

function MultiSelectPicker({
  options,
  selectedValues,
  onSelect,
}: MultiSelectPickerProps) {

  const { isSelected, toggle } = useMutliSelect(selectedValues, onSelect);

  return (
    <ul className="multi-select-picker w-full">
      {options.map(option => (
        <OptionItem
          key={option.value}
          checked={isSelected(option.value)}
          option={option}
          onToggle={toggle}
        />
      ))}
    </ul>
  );
}

export default memo(MultiSelectPicker);

type OptionItemProps = {
  option: Option;
  checked: boolean;
  onToggle: (value: string) => void;
};

const OptionItem = ({ option, checked, onToggle }: OptionItemProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(option.value);
    } else if (e.key === 'Escape') {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <li key={option.value}>
      <label
        className="multi-select-picker__option fs-xxs"
        htmlFor={option.value}
      >
        <span className="mr-sm">{option.icon}</span>
        <input
          type="checkbox"
          id={option.value}
          value={option.value}
          checked={checked}
          onChange={() => onToggle(option.value)}
          onKeyDown={handleKeyDown}
        />
        {option.label}
      </label>
    </li>
  );
};
