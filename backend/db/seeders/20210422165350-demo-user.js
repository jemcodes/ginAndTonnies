'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        userBio: `Liquor ipsum dolor sit amet bourbon lancer negroni cheeky 
        vimto--salty dog smirnoff moscow mule isle of jura. White russian 
        macduff gilbey's dalwhinnie man o'war, "sazerac gordon's!"`,
        userImg: `https://www.freepik.com/free-icon/cocktail_729745.htm`,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FancyRum',
        userBio: `Calvert, caju amigo ramos gin fizz macduff oban. Yorsh 
        hennessey: singapore sling, finlandia buck's fizz hiram walker red lotus 
        van winkle family reserve miltonduff toro rojo sidecar balblair.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_942104.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'GinPenguin',
        userBio: `Ti punch churchill ketel one hurricane. Caju amigo gibbon 
        kahlua mint julep.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_940690.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'TonicBubbles',
        userBio: `Porto flip, "flirtini curacao punch bay breeze screwdriver 
        flirtini kahlua canadian mist godmother black velvet."`,
        userImg: `https://www.freepik.com/free-icon/cocktail_939849.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'ElegantElixir',
        userBio: `Margarita crown royal arran bijou chopin, "bellini monte alban 
        staten island ferry white lady or delilah." Glen grant absolut wine 
        cooler negroni vodka gimlet.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_918880.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};