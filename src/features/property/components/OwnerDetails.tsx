function OwnerDetails() {
  return (
    <div className="owner-details">
      <div className="owner-details__info">
        <img
          width="80"
          height="80"
          className="owner-details__avatar"
          src="https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp"
          alt="owner profile image"
        />
        <div className="owner-details__meta">
          <span className="owner-details__name fw-bold">Alex Ripon</span>
          <span>New York, NY</span>
        </div>
      </div>
      <ul className="owner-details__contact mt-xl">
        <li className="owner-details__contact-phone">
          <span>Phone:</span>
          <span className="fw-bold">+33 309232323</span>
        </li>
        <li className="owner-details__contact-email">
          <span>Email:</span>
          <span className="fw-bold">xyz@gmail.com</span>
        </li>
      </ul>
      <button type="button" className="btn btn--primary btn--pill w-full mt-md">
        Add to Contact
      </button>
    </div>
  );
}

export default OwnerDetails;
