import { schema } from 'normalizr'

export const todo = new schema.Entity('todos', {
});

export const singleTodo = new schema.Entity('todos');
export const todoSchema = [todo]

export const mockCreateData = {
  title: 'tester',
  body: 'bar',
  userId: 1
}

export const album = new schema.Entity('albums', {
});

export const singleAlbum = new schema.Entity('albums');
export const albumSchema = [album]
