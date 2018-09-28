
  import BaseService from './base';
  import { test } from './schema';

  class TestService extends BaseService {
    constructor(route = 'tests', schema = test ) {
      super(route, test);
    }
  }

  export default TestService;
