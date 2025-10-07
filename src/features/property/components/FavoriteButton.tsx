import { Heart } from 'lucide-react';
import { useState } from 'react';

function FavoriteButton() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled(!isToggled);

  return (
    <button onClick={toggle} className="property-card__favorite" type="button">
      <Heart size={18}  fill={isToggled ? 'red' : 'transparent'}/>
    </button>
  );
}

export default FavoriteButton;
