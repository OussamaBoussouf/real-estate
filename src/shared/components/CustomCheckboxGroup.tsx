import { type ChangeEvent } from 'react';
import { capitalizeWord } from '../utils/utils';

type CustomCheckboxGroupProps = {
  checkboxValues: string[];
  className?: string;
  values: string[];
  onChange: (val: string[]) => void;
};

function CustomCheckboxGroup({
  checkboxValues,
  className,
  values=[],
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

    onChange([...newValues]);
  };

  return (
    <div className={`${className} mt-sm`}>
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





type CustomCheckboxGroupWithLabelProps = {
  label: string;
} & CustomCheckboxGroupProps;

export const CustomCheckboxGroupWithLabel = ({
  label,
  ...rest
}: CustomCheckboxGroupWithLabelProps) => {
  return (
    <div className="fieldset">
      <label className="fs-xxs">{label}</label>
      <CustomCheckboxGroup {...rest} />
    </div>
  );
};
