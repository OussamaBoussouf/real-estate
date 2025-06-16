import { SearchFrom } from '../features/search';

function HomePage() {
  return (
    <main className="hero-section">
      <div className="container hero-section__wrapper">
        <div className="hero-section__text">
          <h1 className="hero-section__title">
            Find your dream home with ease and confidence
          </h1>
          <p className="hero-section__description">
            Discover a wide range of properties tailored to your needs. Start
            your search today and step into your dream home tomorrow.
          </p>
        </div>
        <div className="hero-section__search-form">
          <SearchFrom />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
