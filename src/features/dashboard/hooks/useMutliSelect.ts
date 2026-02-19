

export const useMutliSelect = (
  selectedValues: string[],
  onSelect: (values: string[]) => void
) => {
  const isSelected = (value: string) => selectedValues.includes(value);

  const toggle = (value: string) => {
    if (isSelected(value)) {
      onSelect(selectedValues.filter(v => v !== value));
    } else {
      onSelect([...selectedValues, value]);
    }
  };

  return {
    isSelected,
    toggle,
  };
};
