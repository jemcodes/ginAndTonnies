const { lorem } = require("faker");

const drinksData = [
    {
        title: `Butler's Unicorn Revenge`,
        content: `Liquor ipsum dolor sit amet maecenas fusce; farnell harrogate nights? Per speyside pharetra mauris vulputate jack and coke salmiakki koskenkorva cursus. Mattis arcu fusce glenburgie vulputate hurricane habitasse tincidunt, talisker wolfram imperdiet; kir royale gibson fermentum, amet aptent aenean taciti sake bomb.`,
        drinkImg: 'https://images.unsplash.com/photo-1587888559483-c16e80d8dded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Fizzy Bite Chiller`,
        content: `Laoreet viverra at aptent feugiat libero ornare rutrum fames. Blair athol? Three wise men scelerisque paralyzer ultrices rutrum. Dolor northern comfort link up risus snowball sapien auchroisk quis nisi jim beam golden doublet.`,
        drinkImg: 'https://images.pexels.com/photos/3196019/pexels-photo-3196019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Naughty Angel Kiss`,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.`,
        drinkImg: 'https://images.unsplash.com/photo-1575650772417-e6b418b0d106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Queen's Paramour Collins`,
        content: `Faucibus gravida; habitasse consectetur curabitur, posuere auchroisk linkwood, odio; ut cointreau mollis id, "spritzer ac ad," black velvet. Chartreuse etiam elit singapore sling highland park rum swizzle torquent satan's whiskers etiam. Netus nisi integer hendrerit varius leo tempus tormore, laphroaig felis nisl, sake bomb facilisis leo.`,
        drinkImg: 'https://images.unsplash.com/photo-1603064973490-a46594e1c6af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Dirty Tickler Potion`,
        content: `Tequila sunset est, "curabitur: feugiat black cossack gin pahit, the macallan." Smoky martini condimentum felis egestas urna vivamus torquent, egestas a risus. Fusce bumbo loch lomond--cheeky vimto orci aberfeldy, "quis venenatis aenean; nam," mollis vodka mcgovern. Proin shirley temple black lectus cragganmore kirsch mollis.`,
        drinkImg: 'https://images.unsplash.com/photo-1607446045875-de57c995726b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Pure Holler Dream`,
        content: `Glentauchers, kahlua wine cooler old grand dad skyy auchentoshan missouri mule long island iced tea piña colada. Glen grant paralyzer flaming dr pepper. Pappy van winkle. Culto a la vida remy martin, my fair lady vodka sunrise long island iced tea the last word the blenheim.`,
        drinkImg: 'https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Charming Blues Tincture`,
        content: `Grog kensington court special bladnoch, brandy sour aultmore, ben nevis zombie patron chimayó cocktail leite de onça laphroaig sake bomb balblair glen moray royal arrival. Vodka sundowner. Bourbon lancer the goldeneye dalmore gordon's, benrinnes long island iced tea kir imperial.`,
        drinkImg: 'https://images.unsplash.com/photo-1557313773-74c3490a350d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Hot Buttered Corgi on the Beach`,
        content: `Aberlour bailey's irish cream jameson tonic and tequila jose cuervo paralyzer haig & haig "pinch" grant's dailuaine screwdriver colombia bloody mary culto a la vida. Spanish coffee cosmopolitan, dailuaine hennessey golden dream pappy van winkle french connection hiram walker.`,
        drinkImg: 'https://images.unsplash.com/photo-1563312416-4ca09c8ba9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Southern Typhoon Zombie`,
        content: `Bengal craigellachie four score: crown royal auchroisk canadian club paralyzer ballantine grant's, scapa canadian mist, the last word." Glenlivet glenallachie black tooth grin ben nevis, screwdriver; lagavulin wolfram prince of wales. Monte alban v.o. bladnoch painkiller vodka sunrise miltonduff old etonian ardmore.`,
        drinkImg: 'https://images.unsplash.com/photo-1613934619052-27d9464c8819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `King's Cobbler Shot Flight`,
        content: `Prince shnell, blue hawaii speyside skyy batida piña colada; knockeen hills irish poteen tanqueray, painkiller gong, the blenheim staten island ferry. Spanish coffee blue blazer martell, singapore sling, widow's cork; greyhound pink lady macduff--tormore, gin fizz.`,
        drinkImg: 'https://images.unsplash.com/photo-1613711591503-f29005feb4dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
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