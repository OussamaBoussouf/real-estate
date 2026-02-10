type FormProgressProps = {
    currentStep: number;
    steps: string[];
};



function FormProgress({ currentStep, steps }: FormProgressProps) {
  return (
    <div className="form-progress__container">
      <div className="form-progress__header">
        <span className="form-progress__step-number fw-bold fs-sm">{currentStep}</span>
        <h2 className="fs-sm">{steps[currentStep - 1]}</h2>
      </div>
      <progress className="form-progress__progress-bar" value={currentStep} max={steps.length}>
        {currentStep}
      </progress>
      <p className="fs-xxs">Step {currentStep} of {steps.length}</p>
    </div>
  );
}

export default FormProgress;
