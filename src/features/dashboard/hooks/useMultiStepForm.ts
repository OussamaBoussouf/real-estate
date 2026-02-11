import { useCallback, useState } from "react";

export const useMultiStepForm = (steps: number) => {
    const [currentStep, setCurrentStep] = useState(1);

    const isFirstStep = currentStep === 1;

    const isLastStep = currentStep === steps;

    const goNext = useCallback(() => {
        setCurrentStep((prev) => Math.min(prev + 1, steps));
    }, []);

    const goBack = useCallback(() => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    }, []);


    return {
        currentStep,
        isLastStep,
        isFirstStep,
        goNext,
        goBack
    };
}