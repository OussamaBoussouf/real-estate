type AmenitiesMultiSelectProps = {
  onCheck: (arg: string) => void;
  onUncheck: (arg: string) => void;
  options: { label: string; value: string }[];
  selectedValues?: string[];
  className?: string;
};

function AmenitiesMultiSelect({
  onCheck,
  onUncheck,
  selectedValues,
  options,
  className,
}: AmenitiesMultiSelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
      onCheck(value);
    } else {
      onUncheck(value);
    }
  };
  return (
    <div className={className ? className : 'grid-layout'}>
      {options.map(option => (
        <div className="multi-select d-flex-between" key={option.value}>
          <label className="fs-xxs w-full" htmlFor={option.value}>
            {option.label}
          </label>
          <input
            type="checkbox"
            checked={
              selectedValues?.length !== 0 &&
              selectedValues?.includes(option.value)
            }
            id={option.value}
            name="options"
            value={option.value}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}

export default AmenitiesMultiSelect;
