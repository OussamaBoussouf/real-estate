import PropertyList from '../components/PropertyList';

function PropertyPage() {
  return (
    <main className="property-page my-xl">
      <div className="container px-md">
        <div className="property-page__layout">
          {/* Sidebar */}
          <div className="property-page__sidebar">Side bar</div>
          {/* Content */}
          <div className="property-page__main">
            <PropertyList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PropertyPage;
