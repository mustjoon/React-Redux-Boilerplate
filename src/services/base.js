
import { callApi} from './api';

class BaseService {

  constructor(route, schema) {
    this.route = route;
    this.schema = schema;
  }

  create = (params) => {

    params.userId = 1; // Because of mock backend 
    const options = {
      method: 'POST',
      body: params
    }

    return callApi(this.route, this.schema, options);
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
    console.log("HERE?");
    params.userId = 1; // Because of mock backend 
    const options = {
      method: 'PUT',
      body: params
    }
    return callApi(`${this.route}/${params.id}`, this.schema, options )
  }
}

export default BaseService;