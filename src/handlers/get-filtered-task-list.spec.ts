import moment from 'moment';
import request from 'supertest';
import { app } from '..';
import getFilteredTaskListHandler from './get-filtered-task-list';

//TITLE: task
describe(getFilteredTaskListHandler, () => {
  it('task.01 should return success on "" task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('task');
    expect(response.body.data.length).toBe(200);
  });

  it('task.02 should return success on undefined task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('task');
    expect(response.body.data.length).toBe(200);
  });

  it('task.03 should return success on null task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('task');
    expect(response.body.data.length).toBe(200);
  });

  it('task.04 should return success on [""] task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('task');
    expect(response.body.data.length).toBe(200);
  });

  it('task.05 should return success on [undefined] task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('task');
    expect(response.body.data.length).toBe(200);
  });

  it('task.06 should return success on [null] task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('task');
    expect(response.body.data.length).toBe(200);
  });

  it('task.07 should return success on ["First", "Second"] task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: ['First', 'Second'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('task');
    expect(response.body.data.length).toBe(200);
  });

  it('task.08 should return success on "First" task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: 'First' })
      .send();

    expect(response.statusCode).toBe(200);
  });

  it('task.09 should return success on "A" task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: 'A' })
      .send();

    expect(response.statusCode).toBe(200);
  });

  it('task.10 should return success on type.integer task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: 1 })
      .send();

    expect(response.statusCode).toBe(200);
  });

  it('task.11 should return success on type.boolean task query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ task: true })
      .send();

    expect(response.statusCode).toBe(200);
  });
});

//TITLE: dueDate
describe(getFilteredTaskListHandler, () => {
  it('dueDate.01 should return success on "" dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.02 should return success on undefined dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.03 should return success on null dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.04 should return success on [""] dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.05 should return success on [undefined] dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.06 should return success on [null] dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.07 should return success on ["First", "Second"] dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: ['First', 'Second'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.08 should return success on "First" dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: 'First' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.09 should return success on "A" dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: 'A' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.10 should return success on type.integer dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.11 should return success on type.boolean dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('dueDate.12 should return success on ["2021-07-18"] dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: ['2021-07-18'] })
      .send();

    expect(response.statusCode).toBe(200);
  });

  it('dueDate.13 should return success on "2021-07-18" dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: '2021-07-18' })
      .send();

    expect(response.statusCode).toBe(200);
  });

  it('dueDate.14 should return success on "2021-7-18" dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: '2021-7-18' })
      .send();

    expect(response.statusCode).toBe(200);
  });

  it('dueDate.15 should return success on "21-7-18" dueDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], dueDate: '21-7-18' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].dueDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });
});

//TITLE: startDate
describe(getFilteredTaskListHandler, () => {
  it('startDate.01 should return success on "" startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.02 should return success on undefined startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.03 should return success on null startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.04 should return success on [""] startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.05 should return success on [undefined] startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.06 should return success on [null] startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.07 should return success on ["First", "Second"] startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: ['First', 'Second'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.08 should return success on "First" startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: 'First' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.09 should return success on "A" startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: 'A' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.10 should return success on type.integer startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.11 should return success on type.boolean startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('startDate.12 should return success on ["2021-07-18"] startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: ['2021-07-18'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('startDate.13 should return success on "2021-07-18" startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: '2021-07-18' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('startDate.14 should return success on "2021-7-18" startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: '2021-7-18' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('startDate.15 should return success on "21-7-18" startDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], startDate: '21-7-18' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].startDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });
});

//TITLE: endDate
describe(getFilteredTaskListHandler, () => {
  it('endDate.01 should return success on "" endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.02 should return success on undefined endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.03 should return success on null endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.04 should return success on [""] endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.05 should return success on [undefined] endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.06 should return success on [null] endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.07 should return success on ["First", "Second"] endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: ['First', 'Second'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.08 should return success on "First" endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: 'First' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.09 should return success on "A" endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: 'A' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.10 should return success on type.integer endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.11 should return success on type.boolean endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });

  it('endDate.12 should return success on ["2021-07-18"] endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: ['2021-07-18'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('endDate.13 should return success on "2021-07-18" endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: '2021-07-18' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('endDate.14 should return success on "2021-7-18" endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: '2021-7-18' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('endDate.15 should return success on "21-7-18" endDate query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['dueDate,ASC'], endDate: '21-7-18' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('dueDate');
    expect(moment(response.body.data[0].endDate).isValid()).toEqual(true);
    expect(response.body.data.length).toBe(200);
  });
});

//TITLE: tagNames
describe(getFilteredTaskListHandler, () => {
  it('tagNames.01 should return success on "" tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames');
    expect(response.body.data.length).toBe(200);
  });

  it('tagNames.02 should return success on undefined tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames');
    expect(response.body.data.length).toBe(200);
  });

  it('tagNames.03 should return success on null tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames');
    expect(response.body.data.length).toBe(200);
  });

  it('tagNames.04 should return success on [""] tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames');
    expect(response.body.data.length).toBe(200);
  });

  it('tagNames.05 should return success on [undefined] tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames');
    expect(response.body.data.length).toBe(200);
  });

  it('tagNames.06 should return success on [null] tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames');
    expect(response.body.data.length).toBe(200);
  });

  it('tagNames.07A should return success on ["work", "life"] tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: ['work', 'life'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames');
    expect(response.body.data[0].tagNames.includes('work', 'life')).toBe(true);
  });

  it('tagNames.07B should return success on ["life", "work"] tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: ['life', 'work'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames');
    expect(response.body.data[0].tagNames.includes('work', 'life')).toBe(true);
  });

  it('tagNames.08 should return success on "work" tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: 'work' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames', ['work']);
  });

  it('tagNames.09 should return success on "A" tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: 'A' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('tagNames.10 should return success on type.integer tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('tagNames.11 should return success on type.boolean tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('tagNames.12 should return success on ["2021-05-12"] tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: ['2021-05-12'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('tagNames.13 should return success on "2021-05-12" tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: '2021-05-12' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('tagNames.14 should return success on "2022-5-1" tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: '2021-5-12' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('tagNames.15 should return success on "AAAA" tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: 'AAAA' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('tagNames.16 should return success on ["work", "WORK"] tagNames query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ tagNames: ['work', 'WORK'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('tagNames', ['work']);
  });
});

//TITLE: listName
describe(getFilteredTaskListHandler, () => {
  it('listName.01 should return success on "" listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('listName');
    expect(response.body.data.length).toBe(200);
  });

  it('listName.02 should return success on undefined listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('listName');
    expect(response.body.data.length).toBe(200);
  });

  it('listName.03 should return success on null listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('listName');
    expect(response.body.data.length).toBe(200);
  });

  it('listName.04 should return success on [""] listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('listName');
    expect(response.body.data.length).toBe(200);
  });

  it('listName.05 should return success on [undefined] listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('listName');
    expect(response.body.data.length).toBe(200);
  });

  it('listName.06 should return success on [null] listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('listName');
    expect(response.body.data.length).toBe(200);
  });

  it('listName.07 should return success on ["programming", "dentistry"] listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: ['programming', 'dentistry'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(200);
  });

  it('listName.08 should return success on "programming" listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: 'programming' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('listName', 'programming');
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('listName.09 should return success on "A" listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: 'A' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('listName.10 should return success on type.integer listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('listName.11 should return success on type.boolean listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('listName.12 should return success on ["2021-05-12"] listName query', async () => {
    const listName = { listName: ['2021-05-12'] };
    const response = await request(app)
      .get('/tasks/filters')
      .query(listName)
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('listName.13 should return success on "2021-05-12" listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: '2021-05-12' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('listName.14 should return success on "2022-5-1" listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: '2021-5-12' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });

  it('listName.15 should return success on "AAAA" listName query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ listName: 'AAAA' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBe(0);
  });
});

//TITLE: sort
describe(getFilteredTaskListHandler, () => {
  it('sort.01 should return success on "" sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.02 should return success on undefined sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.03 should return success on null sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.04 should return success on [""] sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.05 should return success on [undefined] sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.06 should return success on [null] sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.07 should return success on ["id,DESC"] sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['id,DESC'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(1);
  });

  it('sort.08 should return success on "id,DESC" sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: 'id,DESC' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(1);
  });

  it('sort.09 should return success on ["asdf"] sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['asdf'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.10 should return success on "asdf" sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: 'asdf' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.11 should return success on 1 sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.12 should return success on true sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('sort.13 should return success on ["id", "DESC"] sort query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ sort: ['id', 'DESC'] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });
});

//TITLE: page
describe(getFilteredTaskListHandler, () => {
  it('page.01 should return success on "" page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: '', size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.02 should return success on undefined page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: undefined, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.03 should return success on null page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: null, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.04 should return success on [""] page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: [''], size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.05 should return success on [undefined] page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: [undefined], size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.06 should return success on [null] page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: [null], size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.07 should return success on -1 page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: -1, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.08 should return success on 0 page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: 0, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.09 should return success on 1 page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: 1, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('page.10 should return success on 2 page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: 2, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(11);
  });

  it('page.11 should return success on "2" page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: '2', size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(11);
  });

  it('page.12 should return success on true page query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ page: true, size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });
});

//TITLE: size
describe(getFilteredTaskListHandler, () => {
  it('size.01 should return success on "" size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: '' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.02 should return success on undefined size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: undefined })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.03 should return success on null size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: null })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.04 should return success on [""] size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: [''] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.05 should return success on [undefined] size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: [undefined] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.06 should return success on [null] size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: [null] })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });

  it('size.07 should return success on -1 size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: -1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBeNull;
  });

  it('size.08 should return success on 0 size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: 0 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBeNull;
  });

  it('size.09 should return success on 1 size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: 1 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(1);
  });

  it('size.10 should return success on 2 size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: 2 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(2);
  });

  it('size.11 should return success on "2" size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: '2' })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(2);
  });

  it('size.12 should return success on 10 size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: 10 })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[response.body.data.length - 1].id).toEqual(10);
  });

  it('size.13 should return success on true size query', async () => {
    const response = await request(app)
      .get('/tasks/filters')
      .query({ size: true })
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0].id).toEqual(1);
  });
});
