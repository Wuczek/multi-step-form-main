type FormSidebarProps = {
  step: number;
};

type FormSidebarSelections = {
  [key: number]: string;
};

function FormSidebar({ step }: FormSidebarProps) {
  const sidebarSelections: FormSidebarSelections = {
    1: "Step 1 Your info",
    2: "Step 2 Select plan",
    3: "Step 3 Add-ons",
    4: "Step 4 Summary",
  };

  return (
    <div>
      {/* <!-- Sidebar start --> */}
      <p>{sidebarSelections[step]}</p>
      {/* <!-- Sidebar end --> */}
    </div>
  );
}

export default FormSidebar;
