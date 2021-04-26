const { lorem } = require("faker");

const drinksData = [
    {
        title: `Butler's Unicorn Revenge`,
        content: `Liquor ipsum dolor sit amet maecenas fusce; farnell harrogate nights? Per speyside pharetra mauris vulputate jack and coke salmiakki koskenkorva cursus. Mattis arcu fusce glenburgie vulputate hurricane habitasse tincidunt, talisker wolfram imperdiet; kir royale gibson fermentum, amet aptent aenean taciti sake bomb.
    `,
        drinkImg: 'https://images.unsplash.com/photo-1587888559483-c16e80d8dded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Fizzy Bite Chiller`,
        content: `Laoreet viverra at aptent feugiat libero ornare rutrum fames. Blair athol? Three wise men scelerisque paralyzer ultrices rutrum. Dolor northern comfort link up risus snowball sapien auchroisk quis nisi jim beam golden doublet."
    `,
        drinkImg: 'https://images.unsplash.com/photo-1557313773-74c3490a350d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Naughty Angel Kiss`,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.
    `,
        drinkImg: 'https://images.unsplash.com/photo-1575650772417-e6b418b0d106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Legit Gangster Vodka Tonic`,
        content: `Faucibus gravida; habitasse consectetur curabitur, posuere auchroisk linkwood, odio; ut cointreau mollis id, "spritzer ac ad," black velvet. Chartreuse etiam elit singapore sling highland park rum swizzle torquent satan's whiskers etiam. Netus nisi integer hendrerit varius leo tempus tormore, laphroaig felis nisl, sake bomb facilisis leo.
    `,
        drinkImg: 'https://images.unsplash.com/photo-1514361526511-a1ecd83f89d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Dirty Tickler Potion`,
        content: `Tequila sunset est, "curabitur: feugiat black cossack gin pahit, the macallan." Smoky martini condimentum felis egestas urna vivamus torquent, egestas a risus. Fusce bumbo loch lomond--cheeky vimto orci aberfeldy, "quis venenatis aenean; nam," mollis vodka mcgovern. Proin shirley temple black lectus cragganmore kirsch mollis.
    `,
        drinkImg: 'https://images.unsplash.com/photo-1607446045875-de57c995726b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()

    },
]

const reviewsData = [
    {
        rating: 5,
        content: `Liquor ipsum dolor sit amet maecenas fusce; farnell harrogate nights? Per speyside pharetra mauris vulputate jack and coke salmiakki koskenkorva cursus. Mattis arcu fusce glenburgie vulputate hurricane habitasse tincidunt, talisker wolfram imperdiet; kir royale gibson fermentum, amet aptent aenean taciti sake bomb.
    `,
        userId: 1,
        drinkId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Laoreet viverra at aptent feugiat libero ornare rutrum fames. Blair athol? Three wise men scelerisque paralyzer ultrices rutrum. Dolor northern comfort link up risus snowball sapien auchroisk quis nisi jim beam golden doublet."
    `,
        userId: 2,
        drinkId: 2,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 3,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.
    `,
        userId: 3,
        drinkId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Faucibus gravida; habitasse consectetur curabitur, posuere auchroisk linkwood, odio; ut cointreau mollis id, "spritzer ac ad," black velvet. Chartreuse etiam elit singapore sling highland park rum swizzle torquent satan's whiskers etiam. Netus nisi integer hendrerit varius leo tempus tormore, laphroaig felis nisl, sake bomb facilisis leo.
    `,
        userId: 4,
        drinkId: 4,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 5,
        content: `Tequila sunset est, "curabitur: feugiat black cossack gin pahit, the macallan." Smoky martini condimentum felis egestas urna vivamus torquent, egestas a risus. Fusce bumbo loch lomond--cheeky vimto orci aberfeldy, "quis venenatis aenean; nam," mollis vodka mcgovern. Proin shirley temple black lectus cragganmore kirsch mollis.
    `,
        userId: 5,
        drinkId: 5,
        createdAt: new Date(),
        updatedAt: new Date()

    },
]

module.exports = { drinksData, reviewsData };