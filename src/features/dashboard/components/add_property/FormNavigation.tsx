type FormNavigationProps = {
  isLastStep: boolean;
  isFirstStep: boolean;
  isSubmitting: boolean;
  onBack: () => void;
};

function FormNavigation({
  isLastStep,
  isFirstStep,
  isSubmitting,
  onBack,
}: FormNavigationProps) {
  return (
    <div className="d-flex-end gap-sm mt-md">
      {!isFirstStep && (
        <button
          disabled={isSubmitting}
          className={`btn btn--secondary btn--rounded ${isSubmitting && 'btn--disabled'}`}
          type="button"
          onClick={onBack}
        >
          Back
        </button>
      )}
      <button
        disabled={isSubmitting}
        className={`btn btn--info btn--rounded ${isSubmitting && 'btn--disabled'}`}
        type="submit"
      >
        {isLastStep ? (isSubmitting ? 'Submitting...' : 'Submit') : 'Next'}
      </button>
    </div>
  );
}

export default FormNavigation;
