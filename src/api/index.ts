import api from '../app/axios';
import MockAdapter from 'axios-mock-adapter';
import { properties } from './data/properties';
import { users } from './data/users';

const adapter = new MockAdapter(api, { delayResponse: 1000 });

// Get all properties listing with or without params
adapter.onGet('/properties').reply(config => {
  const limit = 9;

  const params = config.params;

  let filteredProperties = properties;

  const city = params?.city;
  const type = params?.type;
  const category = params?.category;
  const bedrooms = params?.bedrooms;
  const bathrooms = params?.bathrooms;
  const page = parseInt(params?.page) || 1;
  const priceMax = parseInt(params?.high_price);
  const priceMin = parseInt(params?.low_price);

  if (city) {
    filteredProperties = filteredProperties.filter(
      properties => properties.location.city.toLowerCase() === city
    );
  }

  if (type) {
    filteredProperties = filteredProperties.filter(
      properties => properties.type.toLowerCase() === type
    );
  }

  if (bedrooms) {
    filteredProperties = filteredProperties.filter(properties => {
      if (bedrooms === '4') {
        return properties.bedrooms >= 4;
      }
      return properties.bedrooms === parseInt(bedrooms);
    });
  }

  if (bathrooms) {
    filteredProperties = filteredProperties.filter(properties => {
      if (bathrooms === '3') {
        return properties.bathrooms >= 3;
      }
      return properties.bathrooms === parseInt(bathrooms);
    });
  }

  if (category.length > 0) {
    filteredProperties = filteredProperties.filter(properties =>
      category.includes(properties.propertyType.toLowerCase())
    );
  }

  if (priceMax && priceMin) {
    filteredProperties = filteredProperties.filter(
      properties => properties.price >= priceMin && properties.price <= priceMax
    );
  }

  const total = filteredProperties.length;
  const start = (page - 1) * limit;
  const end = page * limit;
  filteredProperties = filteredProperties.slice(start, end);

  return [
    200,
    {
      properties: filteredProperties,
      totalPages: Math.ceil(total / limit),
    },
  ];
});

// Get the price range based on the filter
adapter.onGet('/properties/price-range').reply(config => {
  const params = config.params;

  const city = params?.city;
  const type = params?.type;
  const category = params?.category;
  const bedrooms = params?.bedrooms;

  let filteredProperties = properties;

  if (city) {
    filteredProperties = filteredProperties.filter(
      properties => properties.location.city.toLowerCase() === city
    );
  }

  if (type) {
    filteredProperties = filteredProperties.filter(
      properties => properties.type.toLowerCase() === type
    );
  }

  if (bedrooms) {
    filteredProperties = filteredProperties.filter(properties => {
      if (bedrooms === '4') {
        return properties.bedrooms >= 4;
      }
      return properties.bedrooms === parseInt(bedrooms);
    });
  }

  if (category.length > 0) {
    filteredProperties = filteredProperties.filter(properties =>
      category.includes(properties.propertyType.toLowerCase())
    );
  }

  let maxPrice = 0;
  let minPrice = Infinity;

  filteredProperties.forEach(property => {
    if (property.price > maxPrice) {
      maxPrice = property.price;
    }
    if (property.price < minPrice) {
      minPrice = property.price;
    }
  });

  //Turn minPrice to 0 if there is no property found after filtering
  if (minPrice === Infinity) minPrice = 0;

  return [200, [minPrice, maxPrice]];
});

// Get a property based on the id
adapter.onGet(/\/properties\/\d+/).reply(config => {
  const id = config.url?.split('/')[2];

  const property = properties.find(prop => prop.id === id);

  if (!property) {
    return [404, { message: 'Property not found' }];
  }

  return [200, property];
});

// Authentication
adapter.onPost('/auth/login').reply(config => {
  const data = config.data;

  const { email, password } = JSON.parse(data);

  const user = users.find(user => user.email === email);

  if (!user) {
    return [400, { message: 'invalid credentials' }];
  }

  if (user.password !== password) {
    return [400, { message: 'invalid credentials' }];
  }

  const userInfo = {
    fullName: user.fullName,
    profileImage: user.profileImage,
    email: user.email,
    address: user.address,
    role: user.role,
    phone: user.phone,
  };

  return [200, userInfo];
});

adapter.onPost('/auth/sign-up').reply(config => {
  const data = config.data;

  const { fullName, email, phone, password } = JSON.parse(data);

  if (users.some(u => u.email === email)) {
    return [400, { message: 'email already exists' }];
  }

  if (users.some(u => u.phone === phone)) {
    return [400, { message: 'phone already exists' }];
  }

  const newUser = {
    fullName,
    email,
    address: 'Hay chabab 2, 32',
    phone,
    password,
    id: String(users.length + 1),
    role: 'tenant',
    profileImage:
      'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80',
  };

  users.push(newUser);

  return [201, { message: 'User has been created successfully' }];
});
