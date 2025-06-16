import api from '../app/axios';
import MockAdapter from 'axios-mock-adapter';
import { properties } from './data/properties';

const adapter = new MockAdapter(api, { delayResponse: 1000 });

// Gets all properties listing
adapter.onGet('/properties').reply(config => {
  return [
    200,
    {
      properties: properties,
    },
  ];
});
