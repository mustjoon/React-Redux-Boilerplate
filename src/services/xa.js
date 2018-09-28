
  import BaseService from './base';
  import { xa } from './schema';

  class XaService extends BaseService {
    constructor(route = 'xas', schema = xa ) {
      super(route, xa);
    }
  }

  export default XaService;
