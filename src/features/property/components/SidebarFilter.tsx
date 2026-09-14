import { CustomCheckboxGroupWithLabel } from '../../../shared/components/CustomCheckboxGroup';
import { CustomRadioGroupWithLabel } from '../../../shared/components/CustomRadioGroup';
import PriceSlider from './PriceSlider';
import { CustomSelectWithLabel } from '../../../shared/components/CustomSelect';
import { CITIES } from '../../../constants/geography';
import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from 'react';
import Overlay from '../../../shared/components/Overlay';
import { createPortal } from 'react-dom';
import { PropertyFilter } from '../../../types/property';
import { filterReducer } from '../../../reducer/filterReducer';

type SidebarFilterContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarFilterContext = createContext<SidebarFilterContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

function SidebarFilter({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = {
    isOpen,
    setIsOpen,
  };

  return (
    <SidebarFilterContext.Provider value={contextValue}>
      {children}
    </SidebarFilterContext.Provider>
  );
}

function Trigger({ children }: { children: ReactNode }) {
  const { setIsOpen } = useContext(SidebarFilterContext);

  return (
    <button
      onClick={() => setIsOpen(prev => !prev)}
      type="button"
      className="btn btn--info btn--rounded d-flex-center gap-sm"
    >
      {children}
    </button>
  );
}

function Content({ children }: { children: ReactNode }) {
  const { isOpen } = useContext(SidebarFilterContext);

  if (!isOpen) return null;

  return <>{children}</>;
}

type AsideProps = {
  minPrice: number | undefined;
  maxPrice: number | undefined;
  initialFilter: PropertyFilter;
  onSubmit: (args: Partial<PropertyFilter>) => void;
};

function Aside({ minPrice, maxPrice, initialFilter, onSubmit }: AsideProps) {
  const { setIsOpen } = useContext(SidebarFilterContext);
  const [state, dispatch] = useReducer(filterReducer, initialFilter);

  const handleApplyFilter = () => {
    onSubmit(state);
    setIsOpen(false);
  };

  const handleResetFilter = () => {
    onSubmit({
      type: '',
      city: '',
      category: [],
      bedrooms: '',
      bathrooms: '',
      min_price: '',
      max_price: '',
    });
    setIsOpen(false);
  };

  return createPortal(
    <>
      <Overlay isVisible={true} onClick={() => setIsOpen(false)} />
      <aside className="sidebar-filter">
        <form className="sidebar-filter__form">
          {/* Buy or Rent */}
          <CustomSelectWithLabel
            label="type"
            placeholder="Select a type..."
            value={state.type}
            options={[
              { label: 'Buy', value: 'buy' },
              { label: 'Rent', value: 'rent' },
            ]}
            onChange={(value: string) =>
              dispatch({ type: 'UPDATE_FILTER', payload: { type: value } })
            }
            id="type"
          />
          {/* City */}
          <CustomSelectWithLabel
            label="city"
            placeholder="Select a city..."
            value={state.city}
            options={CITIES}
            onChange={(value: string) =>
              dispatch({ type: 'UPDATE_FILTER', payload: { city: value } })
            }
            id="city"
          />

          {/* Real Estate Type */}
          <CustomCheckboxGroupWithLabel
            className="grid col-3"
            label="property type"
            checkboxValues={[
              'house',
              'apartment',
              'condo',
              'loft',
              'studio',
              'cabin',
            ]}
            onChange={(values: string[]) => {
              dispatch({
                type: 'UPDATE_FILTER',
                payload: { category: values },
              });
            }}
            values={state.category}
          />
          {/* Bedrooms */}
          <CustomRadioGroupWithLabel
            label="bedrooms"
            direction="row"
            onChange={(value: string) => {
              dispatch({
                type: 'UPDATE_FILTER',
                payload: { bedrooms: value },
              });
            }}
            selectedValue={state.bedrooms}
            labelValues={['1', '2', '3 plus']}
            values={['1', '2', '3']}
            name="bedrooms"
          />

          {/* Bathrooms */}
          <CustomRadioGroupWithLabel
            label="bathrooms"
            direction="row"
            onChange={(value: string) => {
              dispatch({
                type: 'UPDATE_FILTER',
                payload: { bathrooms: value },
              });
            }}
            selectedValue={state.bathrooms}
            labelValues={['1', '2', '3 plus']}
            values={['1', '2', '3']}
            name="bathrooms"
          />
          {/* Range Slider */}
          {minPrice && maxPrice ? (
            <PriceSlider
              onValueCommit={([minPrice, maxPrice]: [number, number]) => {
                dispatch({
                  type: 'UPDATE_PRICE',
                  payload: [minPrice.toString(), maxPrice.toString()],
                });
              }}
              minPrice={minPrice}
              maxPrice={maxPrice}
              currentMinPrice={parseInt(state.min_price ?? '0')}
              currentMaxPrice={parseInt(state.max_price ?? '0')}
            />
          ) : null}

          {/* Apply and Reset Buttons */}
          <div className="sidebar-filter__form-actions">
            <button
              type="button"
              onClick={handleApplyFilter}
              className="btn btn--info"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={handleResetFilter}
              className="btn btn--primary"
            >
              Reset Filters
            </button>
          </div>
        </form>
      </aside>
    </>,
    document.body
  );
}

SidebarFilter.Trigger = Trigger;
SidebarFilter.Content = Content;
SidebarFilter.Aside = Aside;

export default SidebarFilter;
