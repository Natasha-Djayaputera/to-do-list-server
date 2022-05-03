import request from 'supertest';
import { app } from '..';

import faker from '@faker-js/faker';
import modifyTaskDetailsHandler from './modify-task-details';

//TITLE: task
describe(modifyTaskDetailsHandler, () => {
  it('task.01 should return error on "" task request', async () => {
    const requestBody = {
      task: '',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-empty');
  });

  it('task.02 should return error on undefined task request', async () => {
    const requestBody = {
      task: undefined,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-not-string');
  });

  it('task.03 should return error on null task request', async () => {
    const requestBody = {
      task: null,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-not-string');
  });

  it('task.04 should return error on [""] task request', async () => {
    const requestBody = {
      task: [''],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-an-array');
  });

  it('task.05 should return error on [undefined] task request', async () => {
    const requestBody = {
      task: [undefined],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-an-array');
  });

  it('task.06 should return error on [null] task request', async () => {
    const requestBody = {
      task: [null],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-an-array');
  });

  it('task.07 should return error on ["First", "Second"] task request', async () => {
    const requestBody = {
      task: ['First', 'Second'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-an-array');
  });

  it('task.08 should return success on "First" task request', async () => {
    const requestBody = {
      task: 'First',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('task.09 should return success on "A" task request', async () => {
    const requestBody = {
      task: 'A',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('task.10 should return error on type.integer task request', async () => {
    const requestBody = {
      task: 1,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('task-is-not-string');
  });

  it('task.11 should return success on type.boolean task request', async () => {
    const requestBody = {
      task: true,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toEqual('task-is-not-string');
  });
});

//TITLE: isDone
describe(modifyTaskDetailsHandler, () => {
  it('isDone.01 should return error on "" isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: '',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.02 should return success on undefined isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: undefined,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('isDone.03 should return error on null isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: null,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.04 should return error on [""] isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: [''],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.05 should return error on [undefined] isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: [undefined],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.06 should return error on [null] isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: [null],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.07 should return error on ["First", "Second"] isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: ['First', 'Second'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.08 should return error on "First" isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: 'First',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.09 should return error on "A" isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: 'A',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.10 should return error on type.integer isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: 1,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error.message).toBe('is-done-is-not-boolean');
  });

  it('isDone.11 should return success on type.boolean isDone request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      isDone: true,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });
});

//TITLE: dueDate
describe(modifyTaskDetailsHandler, () => {
  it('dueDate.01 should return success on "" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: '',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('dueDate.02 should return success on undefined dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: undefined,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('dueDate.03 should return success on null dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: null,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('dueDate.04 should return error on [""] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: [''],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.05 should return error on [undefined] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: [undefined],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.06 should return error on [null] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: [null],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.07 should return error on ["First", "Second"] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: ['First', 'Second'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.08 should return error on "First" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: 'First',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });

  it('dueDate.09 should return error on "A" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: 'A',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });

  it('dueDate.10 should return error on type.integer dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: 1,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });

  it('dueDate.11 should return error on type.boolean dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: true,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });

  it('dueDate.12 should return error on ["2022-05-01"] dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: ['2022-05-01'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('due-date-is-an-array');
  });

  it('dueDate.13 should return success on "2022-05-01" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: '2022-05-01',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('dueDate.14 should return success on "2022-5-1" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: '2022-5-1',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('dueDate.15 should return error on "22-5-1" dueDate request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      dueDate: '22-5-1',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('invalid-due-date-format');
  });
});

//TITLE: tagNames
describe(modifyTaskDetailsHandler, () => {
  it('tagNames.01 should return success on "" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: '',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.02 should return success on undefined tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: undefined,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.03 should return success on null tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: null,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.04 should return success on [""] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: [''],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.05 should return success on [undefined] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: [undefined],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.06 should return success on [null] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: [null],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.07 should return success on ["First", "Second"] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: ['First', 'Second'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.08 should return success on "First" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: 'First',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.09 should return success on "A" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: 'A',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.10 should return success on type.integer tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: 1,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.11 should return success on type.boolean tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: true,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.12 should return success on ["2022-05-01"] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: ['2022-05-01'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.13 should return success on "2022-05-01" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: '2022-05-01',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.14 should return success on "2022-5-1" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: '2022-5-1',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.15 should return success on "AAAA" tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: 'AAAA',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('tagNames.16 should return success on ["A", "a"] tagNames request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      tagNames: ['A', 'a'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });
});

//TITLE: listName
describe(modifyTaskDetailsHandler, () => {
  it('listName.01 should return success on "" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: '',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('listName.02 should return success on undefined listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: undefined,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('listName.03 should return success on null listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: null,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('listName.04 should return error on [""] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: [''],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.05 should return error on [undefined] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: [undefined],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.06 should return error on [null] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: [null],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.07 should return error on ["First", "Second"] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: ['First', 'Second'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.08 should return success on "First" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 'First',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('listName.09 should return success on "A" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 'A',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('listName.10 should return error on type.integer listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 1,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-not-string');
  });

  it('listName.11 should return error on type.boolean listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: true,
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-not-string');
  });

  it('listName.12 should return success on ["2022-05-01"] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: ['2022-05-01'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.13 should return success on "2022-05-01" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: '2022-05-01',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('listName.14 should return success on "2022-5-1" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: '2022-5-1',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('listName.15 should return success on "AAAA" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 'AAAA',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });

  it('listName.16 should return error on ["A", "a"] listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: ['A', 'a'],
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.message).toEqual('list-name-is-an-array');
  });

  it('listName.17 should return success on "AbCdEf" listName request', async () => {
    const requestBody = {
      task: faker.lorem.lines(),
      listName: 'AbCdEf',
    };
    const response = await request(app).patch('/tasks/1').send(requestBody);

    expect(response.statusCode).toBe(201);
  });
});
