import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Select } from 'radix-ui';
import React from 'react';

type SelectItemProps = React.ComponentPropsWithRef<typeof Select.Item> & {
  children: React.ReactNode;
};

type SelectItemRef = React.ElementRef<typeof Select.Item>;

type CustomSelectProps = {
  options: { value: string; label: string }[];
  placeholder?: string;
  id: string;
  onChange: (arg: Record<string, string>) => void;
  name: string;
  value: string;
};

function CustomSelect({
  options,
  placeholder,
  onChange,
  value,
  id,
  name,
  ...props
}: CustomSelectProps) {
  const handleValueChange = (val: string) => {
    onChange({[name]: val});
  };

  return (
    <Select.Root
      {...props}
      name={name}
      value={value}
      onValueChange={handleValueChange}
    >
      <Select.Trigger id={id} className="select__trigger" aria-labelledby={id}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="d-flex-center">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="select__content">
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="select__viewport">
            <Select.Group>
              {options.map((option, i) => (
                <SelectItem key={i} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="select__scroll-btn">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef<SelectItemRef, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="select__item d-flex cursor-pointer"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="d-flex-center ms-sm">
          <CheckIcon size="1rem" />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default CustomSelect;
