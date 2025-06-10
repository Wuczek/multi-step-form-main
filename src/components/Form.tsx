import { ReactElement, useState } from "react";
import FormAddOns from "./form-steps/FormAddOns";
import FormConfirmation from "./form-steps/FormConfirmation";
import FormInfo from "./form-steps/FormInfo";
import FormPlan from "./form-steps/FormPlan";
import FormSummary from "./form-steps/FormSummary";
import FormSidebar from "./FormSidebar";

type FormStepComponents = {
  [key: number]: ReactElement;
};

function Form() {
  const [step, setStep] = useState(1);

  const formSteps: FormStepComponents = {
    1: <FormInfo />,
    2: <FormPlan />,
    3: <FormAddOns />,
    4: <FormSummary />,
    5: <FormConfirmation />,
  };

  return (
    <>
      <FormSidebar step={step} />
      {formSteps[step]}
    </>
  );
}

export default Form;
