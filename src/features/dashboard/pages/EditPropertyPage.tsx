import { Form, Formik } from 'formik';
import PropertyInfoFormEdit from '../components/edit_property/PropertyInfoEdit';
import PropertyDetailsEdit from '../components/edit_property/PropertyDetailsEdit';
import PropertyImageEdit from '../components/edit_property/PropertyImageEdit';

import { PROPERTY_FORM_INITIAL_VALUES } from '../constants/property-form';
import { PROPERTY_EDIT_SCHEMA } from '../validators/schema';
import { PropertyFormValues } from '../../../types/property';

function EditPropertyPage() {
  const handleSubmit = (values: PropertyFormValues) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="mb-xl">Edit Property</h1>
      <Formik
        initialValues={PROPERTY_FORM_INITIAL_VALUES}
        validationSchema={PROPERTY_EDIT_SCHEMA}
        onSubmit={handleSubmit}
      >
        {props => (
          <Form>
            <PropertyInfoFormEdit {...props} />
            <PropertyDetailsEdit {...props} />
            <PropertyImageEdit {...props} />
            <button type="submit" className="btn btn--info btn--rounded">
              Update
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditPropertyPage;
