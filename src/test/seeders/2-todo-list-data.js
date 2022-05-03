const { faker } = require('@faker-js/faker');

const TAGS = ['work', 'life', 'balance'];

const LIST_NAMES = ['programming', 'dentistry', 'grocery', undefined];

module.exports = {
  up: (queryInterface, Sequelize) => {
    const insertQuery = Array.from({ length: 200 }).map((_, i) => ({
      task: faker.lorem.lines((length = 1)),
      isDone: i < 3,
      dueDate:
        Math.random() < 0.5
          ? undefined
          : Math.random() < 0.5
          ? faker.date.future()
          : faker.date.past(),
      tagNames:
        i % 4 === 0
          ? undefined
          : Array.from({ length: Math.floor(Math.random() * 2 + 1) }).map(
              () => TAGS[Math.floor(Math.random() * 2)]
            ),
      listName:
        i % 5 === 0 ? LIST_NAMES[Math.floor(3 * Math.random())] : undefined,
    }));
    console.log(insertQuery);
    return queryInterface.bulkInsert('tasklists', insertQuery);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasklists', null, {});
  },
};
