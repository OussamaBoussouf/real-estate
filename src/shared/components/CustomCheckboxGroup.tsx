import { useState, type ChangeEvent } from 'react';
import { capitalizeWord } from '../utils/utils';

type CustomCheckboxGroupProps = {
  checkboxValues: string[];
  name: string;
  values: string[];
  onChange: (val: Record<string, any>) => void;
};

function CustomCheckboxGroup({
  checkboxValues,
  values = [],
  name,
  onChange,
}: CustomCheckboxGroupProps) {
  const [currentVal, setCurrentVal] = useState<string[]>(values);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    let updatedValues = [...values];

    if (checked && !updatedValues.includes(value)) {
      updatedValues.push(value);
    } else {
      updatedValues = updatedValues.filter(item => item !== value);
    }

    setCurrentVal(updatedValues);
    onChange({ [name]: updatedValues });
  };

  return (
    <>
      {checkboxValues.map((val, index) => (
        <div key={index} className="checkbox-group__item">
          <input
            type="checkbox"
            className="checkbox-group__item-checkbox"
            onChange={handleCheckboxChange}
            checked={currentVal.includes(val)}
            id={val}
            value={val}
          />
          <label htmlFor={val}>{capitalizeWord(val)}</label>
        </div>
      ))}
    </>
  );
}

export default CustomCheckboxGroup;
