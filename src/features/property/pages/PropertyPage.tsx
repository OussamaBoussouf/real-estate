import PropertyList from '../components/PropertyList';
import SidebarFilter from '../components/SidebarFilter';

function PropertyPage() {
  return (
    <main className="property-page container px-md my-xl">
      {/* Content */}
      <div className="property-page__header">
        <h1 className="fs-sm">Available Properties</h1>
        <SidebarFilter />
      </div>
      <div className="property-page__layout-main">
        <PropertyList />
      </div>
      {/* </div> */}
    </main>
  );
}

export default PropertyPage;
