import { Formik } from 'formik';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import FormProgress from './FormProgress';
import PropertyDetailsStep from './steps/PropertyDetailsStep';
import PropertyInfoStep from './steps/PropertyInfoStep';
import UploadImageStep from './steps/UploadImageStep';
import { PROPERTY_DETAILS_SCHEMA } from '../../validators/property-form.schema';
import { PROPERTY_FORM_INITIAL_VALUES } from '../../constants/property-form';

 

const steps = [
  (props: any) => <PropertyInfoStep {...props} />,
  (props: any) => <PropertyDetailsStep {...props} />,
  (props: any) => <UploadImageStep {...props} />,
];

function PropertyFrom() {
  const { goBack, goNext, currentStep, isLastStep } = useMultiStepForm(3);

  const handleSubmit = (values: typeof PROPERTY_FORM_INITIAL_VALUES) => {
    console.log(values);
  };

  return (
    <div className="panel">
      <FormProgress
        currentStep={currentStep}
        steps={['Property Info', 'Property Details', 'Property Images']}
      />
      <Formik
        initialValues={PROPERTY_FORM_INITIAL_VALUES}
        validationSchema={PROPERTY_DETAILS_SCHEMA}
        validateOnChange={true}
        onSubmit={handleSubmit}
      >
        {props => (
          <form className="mt-lg" onSubmit={props.handleSubmit}>
            {steps[currentStep - 1](props)}
            <button type="submit" className="btn btn--info btn--rounded mt-md ">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default PropertyFrom;
