import BaseService from './base';
import { todo } from './schema';

class TodoService extends BaseService {
  constructor(route = 'posts', schema = todo ) {
    super(route, schema);
  }
}

export default TodoService;