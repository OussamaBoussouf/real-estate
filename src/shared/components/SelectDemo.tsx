import { ChevronDownIcon } from 'lucide-react';
import { Select } from 'radix-ui';

type SelectDemoProps = {
  placeholder: string;
  options: { value: string; label: string }[];
};

function SelectDemo({ placeholder, options }: SelectDemoProps) {
  return (
    <Select.Root>
      <Select.Trigger className="select__trigger">
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="d-flex-center">
          <ChevronDownIcon size="16" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="select__content">
          <Select.Viewport className="select__viewport">
            {options.map(option => (
              <Select.Item className="select__item" value={option.value} key={option.value}>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
            {/* <Select.Item className="select__item" value="New">
              <Select.ItemText>New</Select.ItemText>
            </Select.Item>
            <Select.Item className="select__item" value="Contacted">
              <Select.ItemText>Contacted</Select.ItemText>
            </Select.Item>
            <Select.Item className="select__item" value="Closed">
              <Select.ItemText>Closed</Select.ItemText>
            </Select.Item> */}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export default SelectDemo;
