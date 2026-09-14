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
  data: Property[];
  min_price: number;
  max_price: number;
  totalPages: number;
};

export type PropertyFilter = {
  type: string;
  category: string[];
  city: string;
  bathrooms: string;
  bedrooms: string;
  min_price: string;
  max_price: string;
  page: string;
};

export type FileObject = { id: string; file: File };

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
  images: File[] | [];
};
