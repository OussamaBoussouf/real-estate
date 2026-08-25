import { useState, type ChangeEvent } from 'react';
import { capitalizeWord } from '../utils/utils';

type CustomCheckboxGroupProps = {
  checkboxValues: string[];
  className?: string;
  name: string;
  values: string[];
  onChange: (val: Record<string, any>) => void;
};

function CustomCheckboxGroup({
  checkboxValues,
  className,
  values = [],
  name,
  onChange,
}: CustomCheckboxGroupProps) {
  
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    
    let newValues = new Set([...values]);

    if (checked && !newValues.has(value)) {
      newValues.add(value);
    } else {
      newValues.delete(value);
    }
    
    onChange({ [name]: [...newValues] });
  };

  return (
    <div className={className}>
      {checkboxValues.map((val, index) => (
        <div key={index} className="checkbox-group__item">
          <input
            type="checkbox"
            className="checkbox-group__item-checkbox"
            onChange={handleCheckboxChange}
            checked={values.includes(val)}
            id={val}
            value={val}
          />
          <label htmlFor={val}>{capitalizeWord(val)}</label>
        </div>
      ))}
    </div>
  );
}

export default CustomCheckboxGroup;
