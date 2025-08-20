import api from '../app/axios';
import MockAdapter from 'axios-mock-adapter';
import { properties } from './data/properties';

const adapter = new MockAdapter(api, { delayResponse: 1000 });

// Get all properties listing with or without params
adapter.onGet('/properties').reply(config => {
  const limit = 6;

  const params = config.params;

  let filteredProperties = properties;

  const city = params?.city;
  const type = params?.type;
  const category = params?.category;
  const page = parseInt(params?.page) || 1;

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

  if (category) {
    filteredProperties = filteredProperties.filter(
      properties => properties.propertyType.toLowerCase() === category
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
