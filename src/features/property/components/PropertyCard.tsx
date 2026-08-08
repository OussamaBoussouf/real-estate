import { Bath, Bed, MapPin } from 'lucide-react';
import Badge from '../../../shared/components/Badge';
import PropertyImage from '../../../assets/hero_image_1.jpg';
import { formatCurrency } from '../../../shared/utils/formatter';
import { Link } from 'react-router-dom';

type PropertyCardProps = {
  id: string;
  price: number;
  title: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  type: string;
};

function PropertyCard({
  id,
  price,
  title,
  city,
  bedrooms,
  bathrooms,
  propertyType,
  type,
}: PropertyCardProps) {
  return (
    <div className="property-card">
      <div className="property-card__image-wrapper">
        <Badge type="secondary" position="top-left">
          {' '}
          {type === 'buy' ? 'For Sale' : 'For Rent'}
        </Badge>
        <Link to={`/properties/${id}`}>
          <img
            className="property-card__image"
            width="300"
            height="200"
            src={PropertyImage}
            alt="big house"
          />
        </Link>
      </div>
      <div className="property-card__content">
        <div className="property-card__header">
          <p className="property-card__title">{title}</p>
          <p className="property-card__city">
            <MapPin size="15" />
            {city}
          </p>
          <ul className="property-card__amenities">
            <li>
              <Bed size="15" /> {bedrooms} bed(s)
            </li>
            <li>
              <Bath size="15" /> {bathrooms} bath(s)
            </li>
          </ul>
        </div>
        <div className="property-card__footer">
          <span>
            {formatCurrency(price)}
            {type === 'rent' && '/mo'}
          </span>
          <span className="property-card__type">{propertyType}</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
