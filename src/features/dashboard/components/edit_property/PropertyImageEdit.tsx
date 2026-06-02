import { useRef, useState } from "react";

function PropertyImageEdit() {
  const [images, setImages] = useState([]);
  return (
    <fieldset className="p-md border-dashed border-rounded">
        <legend>Property Photos</legend>
        <ImageUploader />
    </fieldset>
  );
}

export default PropertyImageEdit;


const ImageUploader = () => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = () => {
        fileInputRef.current?.click();
    }

    return (
        <div onClick={handleInputClick}>
            <input ref={fileInputRef} type="file" id="images" accept="image/*" multiple />
        </div>

    )
}


const ImageList = () => {
    return (
        <div className="grid col-3 gap-sm">
            
        </div>
    )
}