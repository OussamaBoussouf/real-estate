import { properties } from '../../../api/data/properties';
import PropertiesTable from '../components/my_properties/PropertiesTable';

const TITLES = [
  'property',
  'type',
  'status',
  'price',
  'location',
  'action',
];

function MyPropertiesPage() {

  return (
    <>
      <h1 className="mb-xl">My Properties</h1>
      <PropertiesTable title={TITLES} data={properties} />
    </>
  );
}

export default MyPropertiesPage;
