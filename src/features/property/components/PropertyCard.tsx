import { BedDouble, MapPin, ShowerHead } from 'lucide-react';
import Badge from '../../../shared/components/Badge';

type PropertyCardProps = {
  price: number;
  title: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
};

function PropertyCard({
  price,
  title,
  city,
  bedrooms,
  bathrooms,
  propertyType,
}: PropertyCardProps) {
  return (
    <div className="property-card">
      <div className="property-card__image-wrapper">
        <Badge> {propertyType} </Badge>
        <img
          className="property-card__image"
          width="300"
          height="200"
          src="https://rockwellcustom.com/wp-content/uploads/2019/07/new-construction-homes-1024x698.jpg"
          alt="big house"
        />
      </div>
      <div className="property-card__content">
        <div className="property-card__header">
          <p className="property-card__header-price">${price}</p>
          <p className="property-card__header-title">{title}</p>
          <p className="property-card__header-city">
            {' '}
            <MapPin size="20" color="blue" />
            {city}
          </p>
        </div>
        <div className="property-card__details">
          <ul>
            <li>
              {' '}
              <ShowerHead size="20" /> {bathrooms} bath(s){' '}
            </li>
            <li>
              {' '}
              <BedDouble size="20" /> {bedrooms} bed(s)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
