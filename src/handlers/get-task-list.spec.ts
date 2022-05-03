import request from 'supertest';
import { app } from '..';
import getTaskListHandler from './get-task-list';

//TITLE: sort
describe(getTaskListHandler, () => {
  it('sort.01 should return success on "" sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.02 should return success on undefined sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.03 should return success on null sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.04 should return success on [""] sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.05 should return success on [undefined] sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.06 should return success on [null] sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.07 should return success on ["id,DESC"] sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: ['id,DESC'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(1);
  });

  it('sort.08 should return success on "id,DESC" sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: 'id,DESC' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(1);
  });

  it('sort.09 should return success on ["asdf"] sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: ['asdf'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.10 should return success on "asdf" sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: 'asdf' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.11 should return success on 1 sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.12 should return success on true sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.13 should return success on ["id", "DESC"] sort query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ sort: ['id', 'DESC'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });
});

//TITLE: page
describe(getTaskListHandler, () => {
  it('page.01 should return success on "" page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: '', size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.02 should return success on undefined page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: undefined, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.03 should return success on null page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: null, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.04 should return success on [""] page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: [''], size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.05 should return success on [undefined] page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: [undefined], size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.06 should return success on [null] page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: [null], size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.07 should return success on -1 page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: -1, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.08 should return success on 0 page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: 0, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.09 should return success on 1 page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: 1, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.10 should return success on 2 page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: 2, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(11);
  });

  it('page.11 should return success on "2" page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: '2', size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(11);
  });

  it('page.12 should return success on true page query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ page: true, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });
});

//TITLE: size
describe(getTaskListHandler, () => {
  it('size.01 should return success on "" size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.02 should return success on undefined size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.03 should return success on null size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.04 should return success on [""] size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.05 should return success on [undefined] size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.06 should return success on [null] size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.07 should return success on -1 size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: -1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBeNull;
  });

  it('size.08 should return success on 0 size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: 0 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBeNull;
  });

  it('size.09 should return success on 1 size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(1);
  });

  it('size.10 should return success on 2 size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: 2 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(2);
  });

  it('size.11 should return success on "2" size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: '2' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(2);
  });

  it('size.12 should return success on 10 size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(10);
  });

  it('size.13 should return success on true size query', async () => {
    const response = await request(app)
      .get('/tasks/all')
      .query({ size: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });
});
