import useFancybox from '../hooks/useFancybox';

type PropertyImageGalleryProps = {
  gallery: string[];
};

const NUMBER_OF_DISPLAYED_IMAGES = 3;

function PropertyImageGallery({ gallery }: PropertyImageGalleryProps) {
  const [fancyboxRef] = useFancybox({});

  const galleryHasMoreThan3Images = gallery.length > NUMBER_OF_DISPLAYED_IMAGES;

  if (galleryHasMoreThan3Images) {
    return (
      <>
        <ul ref={fancyboxRef} className="gallery">
          {gallery.map((src, idx) =>
            idx <= 2 ? (
              <li key={idx} className="gallery__image">
                <img
                  data-fancybox="gallery"
                  className={`${idx === 2 && 'gallery__image--overlay'}`}
                  src={src}
                  alt="house image"
                />
                {idx === 2 && (
                  <span className="gallery__plus-images">
                    {gallery.length - 2}+
                  </span>
                )}
              </li>
            ) : (
              <li hidden key={idx} className="gallery__image">
                <img data-fancybox="gallery" src={src} alt="house image" />
              </li>
            )
          )}
        </ul>
      </>
    );
  }

  return (
    <ul ref={fancyboxRef} className="gallery">
      {gallery.map((src, idx) => (
        <li key={idx + 1} className="gallery__image">
          <img data-fancybox="gallery" src={src} alt="house image" />
        </li>
      ))}
    </ul>
  );
}

export default PropertyImageGallery;
