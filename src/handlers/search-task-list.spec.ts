import request from 'supertest';
import { app } from '..';
import searchTaskListHandler from './search-task-list';

//TITLE: task
describe(searchTaskListHandler, () => {
  it('01 should return success on "" task query', async () => {
    const response = await request(app).get("/tasks/''").send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('02 should return success on "Lorem" task query', async () => {
    const response = await request(app).get('/tasks/Lorem').send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeLessThan(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('03 should return success on "A" task query', async () => {
    const response = await request(app).get('/tasks/A').send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeLessThan(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});
