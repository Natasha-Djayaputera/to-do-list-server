import request from 'supertest';
import { app } from '..';
import deleteTaskHandler from './delete-task';

//TITLE: task
describe(deleteTaskHandler, () => {
  it('01 should return error on "asd" id request', async () => {
    const response = await request(app).delete('/tasks/asd').send();

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-id');
  });

  it('02 should return error on empty id request', async () => {
    const response = await request(app).delete('/tasks/').send();

    expect(response.statusCode).toBe(404);
  });

  it('03 should return success on valid id request', async () => {
    const response = await request(app).delete('/tasks/1').send();

    expect(response.statusCode).toBe(201);
    expect(response.body.data.message).toBe('task-deleted');
  });
});
