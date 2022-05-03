import faker from '@faker-js/faker';
import request from 'supertest';
import { app } from '..';
import createNewTaskHandler from './create-new-task';

//TITLE: task
describe(createNewTaskHandler, () => {
  it('task.01 should return error on "" task request', async () => {
    const requestBody = {
      task: '',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-empty');
  });

  it('task.02 should return error on undefined task request', async () => {
    const requestBody = {
      task: undefined,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-not-string');
  });

  it('task.03 should return error on null task request', async () => {
    const requestBody = {
      task: null,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-not-string');
  });

  it('task.04 should return error on [""] task request', async () => {
    const requestBody = {
      task: [''],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-an-array');
  });

  it('task.05 should return error on [undefined] task request', async () => {
    const requestBody = {
      task: [undefined],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-an-array');
  });

  it('task.06 should return error on [null] task request', async () => {
    const requestBody = {
      task: [null],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-an-array');
  });

  it('task.07 should return error on ["First", "Second"] task request', async () => {
    const requestBody = {
      task: ['First', 'Second'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-an-array');
  });

  it('task.08 should return success on "First" task request', async () => {
    const requestBody = {
      task: 'First',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('task', 'First');
  });

  it('task.09 should return success on "A" task request', async () => {
    const requestBody = {
      task: 'A',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('task', 'A');
  });

  it('task.10 should return error on type.integer task request', async () => {
    const requestBody = {
      task: 1,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-not-string');
  });

  it('task.11 should return success on type.boolean task request', async () => {
    const requestBody = {
      task: true,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toEqual('task-is-not-string');
  });
});

//TITLE: isDone
describe(createNewTaskHandler, () => {
  it('isDone.01 should return success on "" isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: '',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.02 should return success on undefined isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: undefined,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.03 should return success on null isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: null,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.04 should return success on [""] isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: [''],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.05 should return success on [undefined] isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: [undefined],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.06 should return success on [null] isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: [null],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.07 should return success on ["First", "Second"] isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: ['First', 'Second'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.08 should return success on "First" isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: 'First',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.09 should return success on "A" isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: 'A',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.10 should return success on type.integer isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: 1,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', false);
  });

  it('isDone.11 should return success on type.boolean isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: true,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('isDone', true);
  });
});

//TITLE: dueDate
describe(createNewTaskHandler, () => {
  it('dueDate.01 should return success on "" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: '',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('dueDate', null);
  });

  it('dueDate.02 should return success on undefined dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: undefined,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('dueDate', null);
  });

  it('dueDate.03 should return success on null dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: null,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('dueDate', null);
  });

  it('dueDate.04 should return error on [""] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: [''],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.05 should return error on [undefined] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: [undefined],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.06 should return error on [null] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: [null],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.07 should return error on ["First", "Second"] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: ['First', 'Second'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.08 should return error on "First" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: 'First',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });

  it('dueDate.09 should return error on "A" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: 'A',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });

  it('dueDate.10 should return error on type.integer dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: 1,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });

  it('dueDate.11 should return error on type.boolean dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: true,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });

  it('dueDate.12 should return error on ["2022-05-01"] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: ['2022-05-01'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.13 should return success on "2022-05-01" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: '2022-05-01',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('dueDate', '2022-05-01');
  });

  it('dueDate.14 should return success on "2022-5-1" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: '2022-5-1',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('dueDate', '2022-05-01');
  });

  it('dueDate.15 should return error on "22-5-1" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: '22-5-1',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });
});

//TITLE: tagNames
describe(createNewTaskHandler, () => {
  it('tagNames.01 should return success on "" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: '',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', null);
  });

  it('tagNames.02 should return success on undefined tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: undefined,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', null);
  });

  it('tagNames.03 should return success on null tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: null,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', null);
  });

  it('tagNames.04 should return success on [""] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: [''],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', null);
  });

  it('tagNames.05 should return success on [undefined] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: [undefined],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', null);
  });

  it('tagNames.06 should return success on [null] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: [null],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', null);
  });

  it('tagNames.07 should return success on ["First", "Second"] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: ['First', 'Second'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', ['first', 'second']);
  });

  it('tagNames.08 should return success on "First" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: 'First',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', ['first']);
  });

  it('tagNames.09 should return success on "A" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: 'A',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', ['a']);
  });

  it('tagNames.10 should return success on type.integer tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: 1,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', null);
  });

  it('tagNames.11 should return success on type.boolean tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: true,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', null);
  });

  it('tagNames.12 should return success on ["2022-05-01"] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: ['2022-05-01'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', ['2022-05-01']);
  });

  it('tagNames.13 should return success on "2022-05-01" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: '2022-05-01',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', ['2022-05-01']);
  });

  it('tagNames.14 should return success on "2022-5-1" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: '2022-5-1',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', ['2022-5-1']);
  });

  it('tagNames.15 should return success on "AAAA" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: 'AAAA',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', ['aaaa']);
  });

  it('tagNames.16 should return success on ["A", "a"] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: ['A', 'a'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('tagNames', ['a']);
  });
});

//TITLE: listName
describe(createNewTaskHandler, () => {
  it('listName.01 should return success on "" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: '',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', null);
  });

  it('listName.02 should return success on undefined listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: undefined,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', null);
  });

  it('listName.03 should return success on null listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: null,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', null);
  });

  it('listName.04 should return error on [""] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: [''],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.05 should return error on [undefined] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: [undefined],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.06 should return error on [null] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: [null],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.07 should return error on ["First", "Second"] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: ['First', 'Second'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.08 should return success on "First" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 'First',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', 'First');
  });

  it('listName.09 should return success on "A" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 'A',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', 'A');
  });

  it('listName.10 should return error on type.integer listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 1,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-not-string');
  });

  it('listName.11 should return error on type.boolean listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: true,
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-not-string');
  });

  it('listName.12 should return success on ["2022-05-01"] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: ['2022-05-01'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.13 should return success on "2022-05-01" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: '2022-05-01',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', '2022-05-01');
  });

  it('listName.14 should return success on "2022-5-1" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: '2022-5-1',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', '2022-5-1');
  });

  it('listName.15 should return success on "AAAA" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 'AAAA',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', 'AAAA');
  });

  it('listName.16 should return error on ["A", "a"] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: ['A', 'a'],
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.17 should return success on "AbCdEf" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 'AbCdEf',
    };
    const response = await request(app).post('/tasks').send(requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('listName', 'AbCdEf');
  });
});
