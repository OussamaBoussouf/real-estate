import PropertyDetailsEdit from "../components/edit_property/PropertyDetailsEdit";
import PropertyImageEdit from "../components/edit_property/PropertyImageEdit";
import PropertyInfoFormEdit from "../components/edit_property/PropertyInfoEdit";

function EditPropertyPage() {
  return (
    <>
      <h1 className="mb-xl">Edit Property</h1>
      <form action="">
        <PropertyInfoFormEdit/>
        <PropertyDetailsEdit/>
        <PropertyImageEdit/>
      </form>
    </>
  );
}

export default EditPropertyPage;
