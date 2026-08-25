import CustomCheckboxGroup from '../../../shared/components/CustomCheckboxGroup';
import { useSearchParams } from 'react-router';
import { filterEmptyQueryParams } from '../../../shared/utils/utils';
import CustomRadioGroup from '../../../shared/components/CustomRadioGroup';
import PriceSlider from './PriceSlider';
import CustomSelect from '../../../shared/components/CustomSelect';
import { CITIES } from '../../../constants/geography';
import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import Overlay from '../../../shared/components/Overlay';

function SidebarFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        type="button"
        className="btn btn--info btn--rounded d-flex-center gap-sm"
      >
        Filter <SlidersHorizontal size={18} />
      </button>
      {isOpen ? (
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      ) : null}
    </>
  );
}

export default SidebarFilter;

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState<Record<string, any>>({
    type: searchParams.get('type') || '',
    city: searchParams.get('city') || '',
    category: searchParams.getAll('category') || [],
    bedrooms: searchParams.get('bedrooms') || '',
    bathrooms: searchParams.get('bathrooms') || '',
  });

  const handleQueryParamChange = (newParams: Record<string, any>) => {
    setQueryParams(prev => ({ ...prev, ...newParams }));
  };

  const handleFilterReset = () => {
    setQueryParams({
      type: '',
      city: '',
      category: [],
      bedrooms: '',
      bathrooms: '',
    });
  };

  const handleApplyFilters = () => {
    setSearchParams(filterEmptyQueryParams({ ...queryParams }));
    onClose();
  };

  return (
    <>
      <Overlay isVisible={isOpen} onClick={onClose} />
      <aside className="sidebar-filter">
        <form className="sidebar-filter__form">
          {/* Buy or Rent */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">type</legend>
            <CustomSelect
              placeholder="Select a type..."
              value={queryParams.type}
              options={[
                { label: 'Buy', value: 'buy' },
                { label: 'Rent', value: 'rent' },
              ]}
              onChange={(value: string) =>
                handleQueryParamChange({ type: value })
              }
              id="type"
            />
          </fieldset>
          {/* Cities */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">cities</legend>
            <CustomSelect
              placeholder="Select a city..."
              value={queryParams.city}
              options={CITIES}
              onChange={(value: string) =>
                handleQueryParamChange({ city: value })
              }
              id="city"
            />
          </fieldset>
          {/* Real Estate Type */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">property type</legend>
            <CustomCheckboxGroup
              className="grid col-3"
              values={queryParams.category}
              name="category"
              checkboxValues={[
                'house',
                'apartment',
                'condo',
                'loft',
                'studio',
                'cabin',
              ]}
              onChange={handleQueryParamChange}
            />
          </fieldset>
          {/* Bedrooms */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">bedrooms</legend>
            <CustomRadioGroup
              direction="row"
              onChange={handleQueryParamChange}
              selectedValue={queryParams.bedrooms}
              labelValues={['1', '2', '3', '4 plus']}
              values={['1', '2', '3', '4']}
              name="bedrooms"
            />
          </fieldset>
          {/* Bathrooms */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">bathrooms</legend>
            <CustomRadioGroup
              direction="row"
              onChange={handleQueryParamChange}
              selectedValue={queryParams.bathrooms}
              labelValues={['1', '2', '3 plus']}
              values={['1', '2', '3']}
              name="bathrooms"
            />
          </fieldset>
          {/* Range Slider */}
          <PriceSlider onChange={handleQueryParamChange} />
          {/* Apply and Reset Buttons */}
          <div className="sidebar-filter__form-actions">
            <button
              type="button"
              onClick={handleApplyFilters}
              className="btn btn--info"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={handleFilterReset}
              className="btn btn--primary"
            >
              Reset Filters
            </button>
          </div>
        </form>
      </aside>
    </>
  );
};
