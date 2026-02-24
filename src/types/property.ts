export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  type: string;
  size: number;
  location: {
    city: string;
    address: string;
  };
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  amenities: string[];
  available: boolean;
  listedDate: string;
};

export type PaginatedProperty = {
  properties: Property[];
  totalPages: number;
};

export type PropertyFormValues = {
  title: string;
  type: string;
  size: string;
  description: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  city: string;
  address: string;
  amenities: string[];
  images: { id: string; file: File }[];
};
