#!/usr/bin/env node

const [,, ...args] = process.argv;



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



const name = args;
const upperCase = name.toString().toUpperCase();
const firstUppercase = capitalizeFirstLetter(name.toString());

var fs = require('fs');
const modulePath = `./../src/redux/modules/${name.toString()}`;
const sagaPath = `./../src/sagas`;
const servicePath = `./../src/services`;

if (!fs.existsSync(modulePath)){
  fs.mkdirSync(modulePath);
}

const actionContent = `
  import {REQUEST, SUCCESS, FAILURE } from '../../constants ';
  import { createRequestTypes, action } from '../../actions';  
  export const LOAD_${upperCase}S = 'LOAD_${upperCase}S' ; 
  export const CREATE_${upperCase} = 'CREATE_${upperCase}'; 
  export const EDIT_${upperCase} = 'EDIT_${upperCase}';  
  export const DELETE_${upperCase} = 'DELETE_${upperCase}';  
  export const LOAD_SINGLE_${upperCase} = 'LOAD_SINGLE_${upperCase}';  
  export const CLEAR_${upperCase}_REDIRECT = 'CLEAR_${upperCase}_REDIRECT';  
  export const ${upperCase}S = createRequestTypes(LOAD_${upperCase}S);  
  export const ${upperCase} = createRequestTypes(LOAD_SINGLE_${upperCase}); 
  export const C_${upperCase} = createRequestTypes(CREATE_${upperCase});  
  export const D_${upperCase} = createRequestTypes(DELETE_${upperCase}) 
  export const E_${upperCase} = createRequestTypes(EDIT_${upperCase});  

  const ENTITY_NAME = '${name}';

  export const ${name} = {
    request: (${name}) => action(${upperCase}[REQUEST], {id: ${name}}),
    success: (${name}, response) => action(${upperCase}[SUCCESS], {id: ${name}, response, entity: ENTITY_NAME}),
    failure: (fullName, error) => action(${upperCase}[FAILURE], {fullName, error}),
  }

  export const ${name}s = {
    request: () => action(${upperCase}S[REQUEST], {}),
    success: (${name}, response) => action(${upperCase}S[SUCCESS], {${name}, response}),
    failure: (fullName, error) => action(${upperCase}S[FAILURE], {fullName, error}),
  }

  export const c${firstUppercase} = {
    request: (${name}) => action(C_${upperCase}[REQUEST], {}),
    success: (${name}, response) => action(C_${upperCase}[SUCCESS], {${name}, response}),
    failure: (${name}, error) => action(C_${upperCase}[FAILURE], {${name}, error})
  }

  export const d${firstUppercase} = {
    request: (${name}) => action(D_${upperCase}[REQUEST], {id: ${name}}),
    success: (${name}, response) => action(D_${upperCase}[SUCCESS], {entity: {type: '${name}', id: ${name}}, response}),
    failure: (${name}, error) => action(D_${upperCase}[FAILURE], {${name}, error})
  }

  export const e${firstUppercase} = {
    request: (${name}) => action(E_${upperCase}[REQUEST], {}),
    success: (${name}, response) => action(E_${upperCase}[SUCCESS], {${name}, response}),
    failure: (${name}, error) => action(E_${upperCase}[FAILURE], {${name}, error})
  }

  export const create${firstUppercase} = ${name} => action(CREATE_${upperCase}, {${name}});
  export const loa${firstUppercase} = (id) => action(LOAD_SINGLE_${upperCase}, {id});
  export const load${firstUppercase}s = ${name} => action(LOAD_${upperCase}S, {${name}})
  export const remove${firstUppercase} = id => action(DELETE_${upperCase}, {id});
  export const edit${firstUppercase} = data => action(EDIT_${upperCase}, {data});
  export const clear${firstUppercase}Redirect = () => action(CLEAR_${upperCase}_REDIRECT);
`

const selectorsContent = `

  export const getActive${firstUppercase} = (state) => {
    if(state.entities.albums && state.entities.albumId) {
      return state.entities.albums[state.entities.albumId]
    }
    return {};
  }

  export const get${firstUppercase}s = (state) => state.entities.${name}s ? Object.values(state.entities.${name}s) : [];
  export const get${firstUppercase}Loading = (state) => state.${name}.isLoading;
  export const getRedirect = (state) => state.${name}.redirect;
  export const getRedirectURL = (state) => state.${name}.redirectURL;

`

fs.writeFile(`${modulePath}/actions.js`, actionContent, function (err) {
  if (err) throw err;
  console.log('actions.js created!');
});

fs.writeFile(`${modulePath}/selectors.js`, selectorsContent, function (err) {
  if (err) throw err;
  console.log('selectors.js created!!');
});

const sageContent = `
  import { take, call, fork } from 'redux-saga/effects'

  import { fetchEntity } from './index';
  import { ${name}Service as api } from '../services'
  import * as actions from  '@redux/modules/${name}/actions';

  const { ${name}, ${name}s, c${firstUppercase}, d${firstUppercase}, e${firstUppercase} } = actions;

  export const fetch${firstUppercase} = fetchEntity.bind(null, ${name}, api.fetchOne);
  export const fetch${firstUppercase}s = fetchEntity.bind(null, ${name}s, api.fetchAll)
  export const fetchPost${firstUppercase}s = fetchEntity.bind(null, c${firstUppercase}, api.create)
  export const fetchDelete${firstUppercase} = fetchEntity.bind(null, d${firstUppercase}, api.remove);
  export const fetchEdit${firstUppercase} = fetchEntity.bind(null, e${firstUppercase}, api.edit);

  function* load${firstUppercase}(id) {
    yield call(fetch${firstUppercase}, id);
  }

  function* load${firstUppercase}s(${name}, requiredFields) {
    yield call(fetch${firstUppercase})
  }

  function* create${firstUppercase}(${name}) {
    yield call(fetchPost${firstUppercase}s, ${name})
  }

  function* remove${firstUppercase}(id) {
    yield call(fetchDelete${firstUppercase}, id);
  }

  function* edit${firstUppercase}(data) {
    yield call(fetchEdit${firstUppercase}, data);
  }

  /******************************************************************************/
  /******************************* WATCHERS *************************************/
  /******************************************************************************/

  export function* watchLoad${firstUppercase}() {
    while(true) {
      const { id } = yield take(actions.LOAD_SINGLE_${upperCase})
      yield fork(load${firstUppercase}, id);
    }
  }

  export function* watchLoad${firstUppercase}s() {
    while(true) {
      const { ${name}s } = yield take(actions.LOAD_${upperCase}S)
      yield fork(load${firstUppercase}s, ${name}s);
    }
  }

  export function* watchCreate${firstUppercase}() {
    while(true) {
      const { ${name} } = yield take(actions.CREATE_${upperCase})
      yield fork(create${firstUppercase}, ${name});
    }
  }

  export function* watchEdit${firstUppercase}() {
    while(true) {
      const {data} = yield take(actions.EDIT_${upperCase});
      yield fork(edit${firstUppercase}, data)
    }
  }

  export function* watchRemove${firstUppercase}() {
    while(true) {
      const { id } = yield take(actions.DELETE_${upperCase});
      yield fork(remove${firstUppercase}, id);
    }
  }
`;

fs.writeFile(`${sagaPath}/${name.toString()}.js`, sageContent, function (err) {
  if (err) throw err;
  console.log('saga file created!!');
});

const serviceContent = `
  import BaseService from './base';
  import { ${name} } from './schema';

  class ${firstUppercase}Service extends BaseService {
    constructor(route = '${name}s', schema = ${name} ) {
      super(route, ${name});
    }
  }

  export default ${firstUppercase}Service;
`;

const schemaContent = `
export const ${name} = new schema.Entity('${name}s', {
});

export const single${firstUppercase} = new schema.Entity('${name}s');
export const ${name}Schema = [${name}]
`

fs.writeFile(`${servicePath}/${name.toString()}.js`, serviceContent, function (err) {
  if (err) throw err;
  console.log('service file created!!');
});

fs.readFile(`${servicePath}/schema.js`, function (err, data) {
  if (err) throw err;
  if(data.indexOf(schemaContent) === -1){
    fs.appendFile(`${servicePath}/schema.js`, schemaContent, function (err) {
      if (err) throw err;
      console.log('service file created!!');
    });
    
  }
});


