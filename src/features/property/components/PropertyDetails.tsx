import { MapPin } from 'lucide-react';

type PropertyDetailsProps = {
  title: string;
  bathrooms: number;
  bedrooms: number;
  size: number;
  price: number;
  location: { city: string; address: string };
  amenities: string[];
};

function PropertyDetails({
  title,
  bathrooms,
  bedrooms,
  size,
  price,
  location,
  amenities,
}: PropertyDetailsProps) {
  return (
    <div className="property-details">
      <h1 className="property-details__title my-md">{title}</h1>
      <ul className="property-details__meta-info my-md">
        <li>{bathrooms} bathrooms</li>
        <li>{bedrooms} bedrooms</li>
        <li>{size} m²</li>
      </ul>
      <div className="property-details__location-price my-md">
        <address className="property-details__address">
          <MapPin size="20" color="black" /> {location.city}, {location.address}
        </address>
        <strong className="property-details__price fs-md fw-bold">
          ${price}
        </strong>
      </div>
      <h2 className="my-md">Description</h2>
      <p className="property-details__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sapiente,
        placeat sed facilis modi doloribus provident officia cum praesentium
        vero iure unde ratione? Asperiores cumque voluptatum vero aliquid et
        dolor aspernatur, voluptatem error magnam exercitationem quas incidunt
        iure nulla minima doloremque recusandae ad delectus adipisci, doloribus
        temporibus autem id officia vitae? Dolorum quibusdam porro et error
        deserunt cupiditate. Itaque assumenda enim id repellat ipsum quis iusto
        accusantium, vero ratione commodi dicta tempora illo impedit pariatur.
        Delectus modi, atque officiis reprehenderit ab, repellendus consectetur
        ex, optio tempora beatae ipsa minus hic accusamus aliquid deserunt.
        Placeat exercitationem temporibus, molestiae culpa a fugiat?
      </p>
      <h2 className="my-md">Amenities</h2>
      <ul className="property-details__amenities">
        {amenities.map((amenity) => (
          <li key={amenity}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyDetails;
