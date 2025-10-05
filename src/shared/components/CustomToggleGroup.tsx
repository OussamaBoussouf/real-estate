import { ToggleGroup } from 'radix-ui';
import { useState} from 'react';
import { capitalizeWord } from '../utils/utils';

type CustomToggleGroupProps = {
  value: string;
  toggledValues: string[];
  onChange: (val: Record<string, any>) => void;
  name: string;
};

function CustomToggleGroup({
  toggledValues,
  onChange,
  value,
  name,
}: CustomToggleGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const handleValueChange = (val: string) => {
    onChange({[name]: val });
    setSelectedValue(val);
  };

  return (
    <ToggleGroup.Root
      className="toggle-group"
      type="single"
      value={selectedValue}
      onValueChange={handleValueChange}
    >
      {toggledValues.map((val, index) => (
        <ToggleGroup.Item
          key={index}
          className={`toggle-group__item ${
            selectedValue === val ? 'toggle-group__item--active' : ''
          }`}
          value={val}
          aria-label={val}
        >
          {capitalizeWord(val)}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}

export default CustomToggleGroup;
