import FormAddOns from "./form-steps/FormAddOns";
import FormConfirmation from "./form-steps/FormConfirmation";
import FormInfo from "./form-steps/FormInfo";
import FormPlan from "./form-steps/FormPlan";
import FormSummary from "./form-steps/FormSummary";
import FormSidebar from "./FormSidebar";

function Form() {
  return (
    <>
      <FormSidebar />
      <FormInfo />
      <FormPlan />
      <FormAddOns />
      <FormSummary />
      <FormConfirmation />
    </>
  );
}

export default Form;
