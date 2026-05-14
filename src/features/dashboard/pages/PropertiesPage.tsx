import { properties } from '../../../api/data/properties';
import AllPropertiesTable from '../components/AllPropertiesTable';

const TITLES = ['Property name', 'Listed by','Owner Info', 'Status', 'Action'];

function PropertiesPage() {
  return (
    <>
      <h1 className="mb-xl">All Properties</h1>
      <AllPropertiesTable
        title={TITLES}
        data={properties}
      />
    </>
  );
}

export default PropertiesPage;
