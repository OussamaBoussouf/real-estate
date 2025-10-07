import CustomToggleGroup from '../../../shared/components/CustomToggleGroup';
import CustomCheckboxGroup from '../../../shared/components/CustomCheckboxGroup';
import { useSearchParams } from 'react-router';
import { filterEmptyQueryParams } from '../../../shared/utils/utils';
import CustomRadioGroup from '../../../shared/components/CustomRadioGroup';
import PriceSlider from './PriceSlider';
import CustomSelect from '../../../shared/components/CustomSelect';

function SidebarFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUrlParamChange = (updates: Record<string, any>) => {
    const urlParams: Record<string, any> = {};
  
    for (const [key, val] of searchParams.entries()) {
      if (!updates['low_price'] && key === 'low_price') continue; //remove low_price from query params to fetch 
      //new properties with new low price
      else if (!updates['high_price'] && key === 'high_price') continue; //remove high_price from query params to fetch 
      //new properties with new high price
      else if(key === 'page') continue; //remove page from query params to reset pagination when a filter changes
      else if (key !== 'category') urlParams[key] = val;
      else if (!urlParams[key]) urlParams[key] = [val];
      else urlParams[key].push(val);
    }

    setSearchParams(filterEmptyQueryParams({ ...urlParams, ...updates }));
  };



  return (
    <form className="sidebar__form">
      {/* Buy or Rent */}
      <CustomToggleGroup
        value={searchParams.get('type') || ''}
        toggledValues={['buy', 'rent']}
        onChange={handleUrlParamChange}
        name="type"
      />
      {/* Cities */}
      <fieldset className='fieldset'>
        <legend className="fieldset-legend">Cities</legend>
        <CustomSelect
          value={searchParams.get('city') || ''}
          name="city"
          id="city"
          placeholder='Select a city...'
          onChange={handleUrlParamChange}
          options={[{value: 'kenitra', label: 'Kenitra'}, {value: 'sale', label: 'Sale'}, {value: 'casablanca', label: 'Casablanca'}, {value: 'rabat', label: 'Rabat'}]}
        />
      </fieldset>
      {/* Real Estate Type */}
      <fieldset className="fieldset">
          <legend className="fieldset-legend">Real estate type</legend>
          <CustomCheckboxGroup
              values={searchParams.getAll('category')}
              legend="Real estate type"
              name="category"
              checkboxValues={['house', 'apartment', 'condo', 'loft', 'studio', 'cabin']}
              onChange={handleUrlParamChange}
            />    
      </fieldset>
      {/* Bedrooms */}
       <fieldset className="fieldset">
          <legend className="fieldset-legend">BedRooms</legend>
          <CustomRadioGroup
            direction="row"
            onChange={handleUrlParamChange}
            selectedValue={searchParams.get('bedrooms') || ''}
            labelValues={['1', '2', '3', '4 plus']}
            values={['1', '2', '3', '4']}
            name="bedrooms"
          /> 
       </fieldset>
       {/* Bathrooms */}
         <fieldset className="fieldset">
          <legend className="fieldset-legend">BathRooms</legend>
          <CustomRadioGroup
            direction="row"
            onChange={handleUrlParamChange}
            selectedValue={searchParams.get('bathrooms') || ''}
            labelValues={['1', '2', '3 plus']}
            values={['1', '2', '3']}
            name="bathrooms"
          /> 
       </fieldset>
      {/* Range Slider */}
      <PriceSlider onChange={handleUrlParamChange} />
    </form>
  );
}

export default SidebarFilter;
