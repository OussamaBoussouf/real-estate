import { capitalizeWord } from '../utils/utils';

type CustomRadioGroupProps = {
  labelValues: string[];
  values: string[];
  name: string;
  selectedValue: string;
  direction?: 'row' | 'column';
  onChange: (val: Record<string, any>) => void;
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
    onChange({ [name]: value });
  };

  return (
    <div
      className={`radio-group__container ${
        direction === 'column' ? 'column' : 'row'
      }`}
    >
      {labelValues.map((val: string, index: number) => (
        <div key={index} className="radio-group__item">
          <input
            type="radio"
            className="radio-group__item-radio"
            onChange={handleRadioChange}
            checked={selectedValue === values[index]}
            name={name}
            id={values[index]}
            value={values[index]}
          />
          <label htmlFor={values[index]}>{capitalizeWord(val)}</label>
        </div>
      ))}
    </div>
  );
}

export default CustomRadioGroup;
