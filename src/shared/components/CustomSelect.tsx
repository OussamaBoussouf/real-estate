import { ChevronDownIcon } from 'lucide-react';
import { Select } from 'radix-ui';
import { ReactNode } from 'react';

type CustomSelectProps = {
  placeholder: string;
  options: { value: string; label: string | ReactNode }[];
  onChange?: (value: string) => void;
  id?: string;
  value?: string;
  width?: string;
  name?: string;
};

function CustomSelect({
  placeholder,
  onChange,
  id,
  options,
  value,
  width = '100%',
}: CustomSelectProps) {
  const handleValueChange = (value: string) => {
    onChange?.(value);
  };

  return (
    <Select.Root value={value} onValueChange={handleValueChange}>
      <Select.Trigger
        style={{ width: width }}
        className="select__trigger mt-sm"
        id={id}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="d-flex-center">
          <ChevronDownIcon size="16" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="select__content">
          <Select.Viewport className="select__viewport">
            {options.map(option => (
              <Select.Item
                className="select__item"
                value={option.value}
                key={option.value}
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export default CustomSelect;

type CustomSelectWithLabelProps = {
  label: string;
} & CustomSelectProps;

export const CustomSelectWithLabel = ({label, id, ...rest} : CustomSelectWithLabelProps) => {
  return (
    <div className="fieldset">
      <label className="fs-xxs" htmlFor={id}>
        {label}
      </label>
      <CustomSelect id={id} {...rest} />
    </div>
  );
};
