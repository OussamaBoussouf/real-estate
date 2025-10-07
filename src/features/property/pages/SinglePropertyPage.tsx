import {
  Cctv,
  Dumbbell,
  FlameKindling,
  MapPin,
  Rows4,
  WavesLadder,
  Wifi,
} from 'lucide-react';
import { useParams } from 'react-router';

function SinglePropertyPage() {
  const { id } = useParams();

  return (
    <main className="single-property my-xl">
      <div className="container px-md">
        <section className="gallery">
          <div className="gallery__main-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="house image"
            />
          </div>
          <div className="gallery__thumbnails">
            <img
              src="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="house image"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="house image"
            />
          </div>
        </section>
        <section className="details mt-xl">
          <div className="property-details">
            <h1 className="property-details__title my-md">
              Veloura Residences
            </h1>
            <div className="d-flex-between gap-xl">
              <span className="property-details__address">
                <MapPin size="20" color="black" /> Miami, Florida, celinam
                delware 2098
              </span>
              <span className="property-details__price fs-md fw-bold">
                $4050
              </span>
            </div>
            <h2 className="my-md">Description</h2>
            <p className="property-details__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              sapiente, placeat sed facilis modi doloribus provident officia cum
              praesentium vero iure unde ratione? Asperiores cumque voluptatum
              vero aliquid et dolor aspernatur, voluptatem error magnam
              exercitationem quas incidunt iure nulla minima doloremque
              recusandae ad delectus adipisci, doloribus temporibus autem id
              officia vitae? Dolorum quibusdam porro et error deserunt
              cupiditate. Itaque assumenda enim id repellat ipsum quis iusto
              accusantium, vero ratione commodi dicta tempora illo impedit
              pariatur. Delectus modi, atque officiis reprehenderit ab,
              repellendus consectetur ex, optio tempora beatae ipsa minus hic
              accusamus aliquid deserunt. Placeat exercitationem temporibus,
              molestiae culpa a fugiat?
            </p>
            <h2 className="my-md">Amenities</h2>
            <ul className="property-details__amenities">
              <li>
                <div className="property-details__amenities-icon">
                  <Rows4 color="black" />
                </div>
                Garage
              </li>
              <li>
                <div className="property-details__amenities-icon">
                  <WavesLadder color="black" />
                </div>
                Pool
              </li>
              <li>
                <div className="property-details__amenities-icon">
                  <Dumbbell color="black" />
                </div>
                Gym
              </li>
              <li>
                <div className="property-details__amenities-icon">
                  <Wifi color="black" />
                </div>
                Wifi
              </li>
              <li>
                <div className="property-details__amenities-icon">
                  <Cctv color="black" />
                </div>
                Security System
              </li>
              <li>
                <div className="property-details__amenities-icon">
                  <FlameKindling color="black" />
                </div>
                Fire Place
              </li>
            </ul>
          </div>
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
              <li className="owner-details__contact-whatsapp">
                <span>Whatsapp:</span>
                <span className="fw-bold">33 3029312932</span>
              </li>
              <li className="owner-details__contact-email">
                <span>Email:</span>
                <span className="fw-bold">xyz@gmail.com</span>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn--primary btn--pill w-full mt-md"
            >
              Send Message
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SinglePropertyPage;
