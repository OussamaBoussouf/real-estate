import PropertyDetailsEdit from "../components/edit_property/PropertyDetailsEdit";
import PropertyInfoForm from "../components/edit_property/PropertyInfoEdit";

function EditPropertyPage() {
  return (
    <>
      <h1 className="mb-xl">Edit Property</h1>
      <form action="">
        <PropertyInfoForm/>
        <PropertyDetailsEdit/>
      </form>
    </>
  );
}

export default EditPropertyPage;
