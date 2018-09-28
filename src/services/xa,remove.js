
  import BaseService from './base';
  import { xa,remove } from './schema';

  class Xa,removeService extends BaseService {
    constructor(route = 'xa,removes', schema = xa,remove ) {
      super(route, xa,remove);
    }
  }

  export default Xa,removeService;
