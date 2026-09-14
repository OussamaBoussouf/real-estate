import Pagination from '../components/Pagination';
import PropertyList from '../components/PropertyList';
import SidebarFilter from '../components/SidebarFilter';
import { useProperties } from '../hooks/useProperties';
import { SlidersHorizontal } from 'lucide-react';
import { usePropertyFilterParams } from '../hooks/usePropertyFilterParams';

function PropertyPage() {
  const [filter, setFilter] = usePropertyFilterParams();

  const { properties, isPending, isError, error } = useProperties(filter);

  return (
    <main className="property-page container px-md my-xl">
      {/* Content */}
      <div className="property-page__header">
        <h1 className="fs-sm">Available Properties</h1>
        <SidebarFilter>
          <SidebarFilter.Trigger>
            Filter <SlidersHorizontal size={18} />
          </SidebarFilter.Trigger>
          <SidebarFilter.Content>
            <SidebarFilter.Aside
              minPrice={properties?.min_price}
              maxPrice={properties?.max_price}
              initialFilter={filter}
              onSubmit={setFilter}
            />
          </SidebarFilter.Content>
        </SidebarFilter>
      </div>
      <div className="property-page__layout-main">
        <PropertyList
          data={properties?.data}
          isPending={isPending}
          isError={isError}
          error={error}
        />
        {properties?.totalPages && properties?.totalPages > 1 ? (
          <Pagination totalPages={properties?.totalPages} />
        ) : null}
      </div>
      {/* </div> */}
    </main>
  );
}

export default PropertyPage;
