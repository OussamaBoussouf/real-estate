import { Bath, Bed} from 'lucide-react';
import FavoriteButton from './FavoriteButton';

type PropertyCardProps = {
  price: number;
  title: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
};

function PropertyCard({
  price,
  title,
  city,
  size,
  bedrooms,
  bathrooms,
}: PropertyCardProps) {
  return (
    <div className="property-card">
      <div className="property-card__image-wrapper">
        <img
          className="property-card__image"
          width="300"
          height="200"
          src="https://rockwellcustom.com/wp-content/uploads/2019/07/new-construction-homes-1024x698.jpg"
          alt="big house"
        />
        <FavoriteButton />
      </div>
      <div className="property-card__content">
        <div className="property-card__header">
          <h4>{title}</h4>
          <p>${price}</p>
        </div>
        <div className="property-card__details">
          <p>{city}</p>
          <ul>
            <li>{bathrooms} <Bath size={22}/> </li>
            <li>{bedrooms} <Bed size={22}/> </li>
            <li>{size} m²</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
