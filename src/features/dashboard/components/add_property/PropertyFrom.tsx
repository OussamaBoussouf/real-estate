import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import FormProgress from './FormProgress';

function PropertyFrom() {
  const { goBack, goNext, currentStep, isLastStep } = useMultiStepForm(3);

  return (
    <div className="panel">
      <FormProgress
        currentStep={currentStep}
        steps={['Property Info', 'Property Details', 'Property Images']}
      />
      <button type="button" className='btn btn--primary' onClick={goNext}>Next</button>
      <button type="button" className='btn btn--secondary' onClick={goBack}>Back</button>
    </div>
  );
}

export default PropertyFrom;
