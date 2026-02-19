import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import FormProgress from './FormProgress';
import PropertyDetailsStep from './steps/PropertyDetailsStep';
import PropertyInfoStep from './steps/PropertyInfoStep';
import UploadImageStep from './steps/UploadImageStep';
import {
  PROPERTY_DETAILS_SCHEMA,
  PROPERTY_INFO_SCHEMA,
} from '../../validators/property-form.schema';
import { PROPERTY_FORM_INITIAL_VALUES } from '../../constants/property-form';
import FormNavigation from './FormNavigation';

const steps = [
  (props: any) => <PropertyInfoStep {...props} />,
  (props: any) => <PropertyDetailsStep {...props} />,
  (props: any) => <UploadImageStep {...props} />,
];

const formValiditionSchemas: Record<number, Yup.ObjectSchema<any>> = {
  1: PROPERTY_INFO_SCHEMA,
  2: PROPERTY_DETAILS_SCHEMA,
};

function PropertyFrom() {
  const { goBack, goNext, currentStep, isLastStep, isFirstStep } =
    useMultiStepForm(3);
    

  const handleSubmit = (
    values: typeof PROPERTY_FORM_INITIAL_VALUES,
    { setTouched }: FormikHelpers<typeof PROPERTY_FORM_INITIAL_VALUES>
  ) => {
    if (!isLastStep) {
      setTouched({});
      goNext();
      return;
    }
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  };

  return (
    <div className="panel">
      <FormProgress
        currentStep={currentStep}
        steps={['Property Info', 'Property Details', 'Property Images']}
      />
      <Formik
        initialValues={PROPERTY_FORM_INITIAL_VALUES}
        validationSchema={formValiditionSchemas[currentStep]}
        validateOnChange={true}
        onSubmit={handleSubmit}
      >
        {props => (
          <form className="mt-lg" onSubmit={props.handleSubmit}>
            {steps[currentStep - 1](props)}
            <FormNavigation
              onBack={goBack}
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
            />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default PropertyFrom;
