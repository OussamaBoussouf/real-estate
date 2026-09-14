import { capitalizeWord } from '../utils/utils';

type CustomRadioGroupProps = {
  labelValues: string[];
  values: string[];
  name: string;
  selectedValue: string;
  direction?: 'row' | 'column';
  onChange: (val: string) => void;
};

function CustomRadioGroup({
  labelValues,
  values,
  name,
  onChange,
  direction = 'column',
  selectedValue,
}: CustomRadioGroupProps) {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div
      className={`radio-group__container mt-sm ${
        direction === 'column' ? 'column' : 'row'
      } `}
    >
      {labelValues.map((val: string, index: number) => (
        <div key={index} className="radio-group__item">
          <input
            type="radio"
            className="radio-group__item-radio"
            onChange={handleRadioChange}
            checked={selectedValue === values[index]}
            name={name}
            id={`${name}-${values[index]}`}
            value={values[index]}
          />
          <label htmlFor={`${name}-${values[index]}`}>
            {capitalizeWord(val)}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CustomRadioGroup;




type CustomRadioGroupWithLabelProps = {
  label: string;
} & CustomRadioGroupProps;

export const CustomRadioGroupWithLabel = ({
  label,
  ...rest
}: CustomRadioGroupWithLabelProps) => {
  return (
    <div className="fieldset">
      <label className="fs-xxs">{label}</label>
      <CustomRadioGroup {...rest} />
    </div>
  );
};
