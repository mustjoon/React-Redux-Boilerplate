
import BaseService from './base';
import { album } from './schema';

class AlbumService extends BaseService {
  constructor(route = 'albums', schema = album ) {
    super(route, album);
  }
}

export default AlbumService;
  