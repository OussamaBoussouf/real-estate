import CustomSelect from '../../../../shared/components/CustomSelect';

function PropertyInfoFormEdit() {
  return (
    <fieldset className="mb-lg p-md grid col-2 border-dashed border-rounded">
      <legend>Property Info</legend>
      <div>
        <label htmlFor="name">Title</label>
        <br />
        <input className='w-full' type="text" id="name" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input className='w-full' type="number" id="price" />
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <br />
        <CustomSelect
          id="type"
          placeholder="Select Type"
          options={[
            {
              value: 'sale',
              label: 'For Sale',
            },
            {
              value: 'rent',
              label: 'For Rent',
            },
          ]}
          onChange={value => console.log(value)}
        />
      </div>
      <div>
        <label htmlFor="size">Size</label>
        <br />
        <input className='w-full' type="number" id="size" />
      </div>
      <div className='span-2'>
        <label htmlFor="description">Description</label>
        <br />
        <textarea className='w-full' id="description" cols={30} rows={10} />
      </div>
    </fieldset>
  );
}

export default PropertyInfoFormEdit;
