import PropertyList from '../components/PropertyList';
import SidebarFilter from '../components/SidebarFilter';

function PropertyPage() {
  return (
    <main className="property-page my-xl">
      <div className="container px-md">
        <div className="property-page__layout">
          {/* Sidebar */}
          <div className="property-page__layout-sidebar">
            <SidebarFilter />
          </div>
          {/* Content */}
          <div className="property-page__layout-main">
            <PropertyList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PropertyPage;
