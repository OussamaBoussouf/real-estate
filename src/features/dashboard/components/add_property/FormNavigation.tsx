type FormNavigationProps = {
  isLastStep: boolean;
  isFirstStep: boolean;
  onBack: () => void;
};

function FormNavigation({
  isLastStep,
  isFirstStep,
  onBack,
}: FormNavigationProps) {
  return (
    <div className="d-flex-end gap-md mt-md">
      {!isFirstStep && (
        <button
          className="btn btn--secondary btn--rounded"
          type="button"
          onClick={onBack}
        >
          Back
        </button>
      )}
      <button className="btn btn--info btn--rounded" type="submit">
        {isLastStep ? 'Submit' : 'Next'}
      </button>
    </div>
  );
}

export default FormNavigation;
