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
        username: 'amazingmartinis',
        userBio: `Porto flip, "flirtini curacao punch bay breeze screwdriver 
        flirtini kahlua canadian mist godmother black velvet."`,
        userImg: `https://www.freepik.com/free-icon/cocktail_939849.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'Elegant-Elixir',
        userBio: `Margarita crown royal arran bijou chopin, "bellini monte alban 
        staten island ferry white lady or delilah." Glen grant absolut wine 
        cooler negroni vodka gimlet.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_918880.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'Avieamaretto',
        userBio: `Tincidunt senectus; lejon volutpat et speyside snowball bruichladdich justo beefeater kentucky tavern miltonduff. Dark and stormy, hac ron rico crown royal convallis lynchburg lemonade ante: lorraine.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_729745.htm`,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'SangriaStorm',
        userBio: `Paradise the amarosa cocktail donec gin pahit gin pahit, satan's whiskers nam pulvinar batida mattis sodales. Tellus; pretium, turpis; porttitor metus auctor hac, "euismod, metus, velit aenean hennessey; benrinnes, sit."`,
        userImg: `https://www.freepik.com/free-icon/cocktail_942104.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'NimbleGimlet',
        userBio: `Salmiakki koskenkorva godmother caju amigo vulputate sociosqu, tempus rum swizzle laphroaig ultricies rhoncus ac. B & b; malesuada, donec sem--harvey's bristol cream long island iced tea old rip van winkle aberfeldy.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_940690.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'MrMaiTai',
        userBio: `Amet, dictumst kir feugiat, vel dui, "cointreau satan's whiskers." Primis venenatis man o'war tristique adipiscing aenean rhoncus tempus platea volutpat.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_939849.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'LuckyVolcano',
        userBio: `Aliquet gilbey's jacquin, aliquam mannochmore urna staten island ferry sollicitudin nikolaschka aenean. Metus magna laoreet fleischmann's, nibh, "hairy virgin ante caol ila orci; taciti," fringilla turpis macduff pink lady hac rum swizzle vel; vehicula!`,
        userImg: `https://www.freepik.com/free-icon/cocktail_918880.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'Vieux-carre',
        userBio: `Hendrerit pink gin tortor venenatis: nulla french connection bibendum suscipit massa fames cointreau dapibus tomintoul." Cubilia glenburgie quisque ipsum aliquam, blue lagoon ornare; duis.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_729745.htm`,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'SidecarQueen',
        userBio: `Donec; cactus jack sollicitudin potenti black & white, "sagittis chartreuse link up dictum etiam," brackla, ben nevis dufftown paddy. Id fleischmann's long island iced tea teacher's varius lorem tortor egestas knockando venenatis!`,
        userImg: `https://www.freepik.com/free-icon/cocktail_942104.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'DrambuieDutchess',
        userBio: `Metaxa b & b; house of lords fringilla hanky-panky craigellachie urna dufftown sit inceptos porta; etiam. Ketel one caju amigo praesent, missouri mule, "gilbey's vodka martini vehicula."`,
        userImg: `https://www.freepik.com/free-icon/cocktail_940690.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'BlazeBlack',
        userBio: `Porta polmos krakow libero edradour brass monkey potenti lobortis vestibulum nulla brandy manhattan mauris; auctor hendrerit, "fringilla four horsemen."`,
        userImg: `https://www.freepik.com/free-icon/cocktail_939849.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'ShakenStir',
        userBio: `Arcu lobortis himenaeos habitant velit, vestibulum french 75 dictum monte alban nostra; consequat. Nec luctus at fusce quam prince shnell blandit lagavulin godfather amet per, phasellus.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_918880.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'TomCollins',
        userBio: `Teaninich rusty nail dailuaine rose kennedy cocktail benromach bacardi? Hiram walker tequila sunset long island iced tea?"`,
        userImg: `https://www.freepik.com/free-icon/cocktail_729745.htm`,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'ChilledCrusher',
        userBio: `Calvert gin and tonic gibson, corn n' oil staten island ferry shirley temple black, bundaberg ginza mary, old bushmill's. Cragganmore hi-fi sazerac moscow mule j & b bull shot tom collins christian brothers glenfarclas; kahlua appletini.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_942104.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'Caipirinha',
        userBio: `Drambuie 20th century savoy corpse reviver aviation bundaberg; tonic and tequila teaninich.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_940690.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'TonicBubbles',
        userBio: `Inchgower black & white toro rojo lemon split teacher's; savoy affair vesper martini vodka mcgovern? Old fashioned hayride cafe zürich benedictine salmiakki koskenkorva.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_939849.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'LemonySugar',
        userBio: `Old fashioned remy martin savoy corpse reviver black & white spanish coffee laphroaig polish martini grant's caol ila.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_918880.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'junglebird',
        userBio: `Ron rico link up hurricane the blenheim royal arrival gordon's sex on the beach, shirley temple black dufftown.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_729745.htm`,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'Mixologist',
        userBio: `Agent orange screwdriver toro rojo tobermory gordon's the last word dewar's scotch whisky.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_942104.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'Sloe-sipper',
        userBio: `Bronx montgomery murphy's deanston, black tooth grin caju amigo glen keith mortlach loch lomond french 75 lime rickey.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_940690.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'MargaritaMadness',
        userBio: `Satan's whiskers rusty nail lemon drop bloody mary or bloodball two fingers dailuaine. Creamsicle staten island ferry christian brothers black velvet finlandia mimosa.`,
        userImg: `https://www.freepik.com/free-icon/cocktail_939849.htm`,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'DaiquiriDreams',
        userBio: `Glenglassaugh polmos krakow, dewar's scotch whisky the goldeneye; toro rojo glendullan cherry herring sloe gin.`,
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