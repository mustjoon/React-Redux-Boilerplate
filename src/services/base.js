
import { callApi} from './api';

class BaseService {

  constructor(route, schema) {
    this.route = route;
    this.schema = schema;
  }

  create(params) {
    params.method = 'POST';
    params.body = {
      title: 'ttemp'
    };

    callApi(this.route, this.schema, params);
  }

  fetchOne = (id) => {
    return callApi(`${this.route}/${id}`, this.schema)
  }

  fetchAll = () => {
    return callApi(`${this.route}`, [this.schema])
  }

  remove = (id) => {
    const params = {method: 'DELETE'};
    return callApi(`${this.route}/${id}`, this.schema, params )
  }

  edit = (params) => {
    params.method = 'PUT';
    return callApi(`${this.route}/${params.id}`, this.schema, params )
  }
}

export default BaseService;