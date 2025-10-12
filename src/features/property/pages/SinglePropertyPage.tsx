import { useParams } from 'react-router';
import PropertyImageGallery from '../components/PropertyImageGallery';
import { getPropertyById } from '../services/PropertyService';
import { useQuery } from '@tanstack/react-query';
import PropertyImageGallerySkeleton from '../components/PropertyImageGallerySkeleton';
import OwnerDetails from '../components/OwnerDetails';
import PropertyDetails from '../components/PropertyDetails';
import PropertyDetailsSkeleton from '../components/PropertyDetailsSkeleton';
import OwnerDetailsSkeleton from '../components/OwnerDetailsSkeleton';

function SinglePropertyPage() {
  const { id } = useParams();

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['property'],
    queryFn: () => getPropertyById(id as string),
  });


  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <main className="single-property my-xl">
      <div className="container px-md">
        <section>
          {isPending ? (
            <PropertyImageGallerySkeleton />
          ) : (
            <PropertyImageGallery gallery={data.images} />
          )}
        </section>
        <section className="details mt-xl">
          {isPending ? (
            <PropertyDetailsSkeleton />
          ) : (
            <PropertyDetails
              title={data.title}
              bathrooms={data.bathrooms}
              bedrooms={data.bedrooms}
              size={data.size}
              price={data.price}
              location={data.location}
              amenities={data.amenities}
            />
          )}
          {isPending ? <OwnerDetailsSkeleton /> : <OwnerDetails />}
        </section>
      </div>
    </main>
  );
}

export default SinglePropertyPage;
