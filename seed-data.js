const { lorem } = require("faker");

const drinksData = [
    {
        title: `Demo's Unicorn Revenge`,
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
        userId: 19,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Naughty Angel Kiss`,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.`,
        drinkImg: 'https://images.unsplash.com/photo-1575650772417-e6b418b0d106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 17,
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
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Elegant Boogie Spritz`,
        content: `Glentauchers, kahlua wine cooler old grand dad skyy auchentoshan missouri mule long island iced tea piña colada. Glen grant paralyzer flaming dr pepper. Pappy van winkle. Culto a la vida remy martin, my fair lady vodka sunrise long island iced tea the last word the blenheim.`,
        drinkImg: 'https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        userId: 15,
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
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Southern Typhoon Zombie`,
        content: `Bengal craigellachie four score: crown royal auchroisk canadian club paralyzer ballantine grant's, scapa canadian mist, the last word." Glenlivet glenallachie black tooth grin ben nevis, screwdriver; lagavulin wolfram prince of wales. Monte alban v.o. bladnoch painkiller vodka sunrise miltonduff old etonian ardmore.`,
        drinkImg: 'https://images.unsplash.com/photo-1613934619052-27d9464c8819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `King's Cobbler Shot Flight`,
        content: `Prince shnell, blue hawaii speyside skyy batida piña colada; knockeen hills irish poteen tanqueray, painkiller gong, the blenheim staten island ferry. Spanish coffee blue blazer martell, singapore sling, widow's cork; greyhound pink lady macduff--tormore, gin fizz.`,
        drinkImg: 'https://images.unsplash.com/photo-1613711591503-f29005feb4dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 16,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Pineapple Diablo Side Car`,
        content: `Vodka sunrise chi-chi speyside vat 69 smirnoff chivas regal, red lotus; gordon's lagavulin macduff glenkinchie. Talisker tullibardine churchill oban bloody mary or bloodball prince shnell, sundowner skyy, harvey wallbanger bruichladdich old mr. boston jack and coke creamsicle.`,
        drinkImg: 'https://images.unsplash.com/photo-1614285180495-ca39bc046b5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Mystic Hawaiian Potion`,
        content: `Vulputate sodales lectus facilisis, macduff cursus white russian tincidunt, quisque, tristique enim volutpat old mr. boston: tortor, gilbey's risus knockdhu kensington court special. Farnell nulla morbi, conubia suspendisse agent orange; torquent; glenkinchie; bailey's irish cream etiam cursus glenallachie, sit pulvinar torquent black & white gravida urna shirley temple black.`,
        drinkImg: 'https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `T-Rex Sunset`,
        content: `Harrogate nights old crow deanston glen grant seven and seven, speyburn absolut black bison. The last word kremlin colonel old bushmill's wolfram lemon drop irish coffee irish mist bowmore bloody mary or bloodball.`,
        drinkImg: 'https://images.unsplash.com/photo-1586338211598-e2d64cf97e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Upside Down Fire Crush`,
        content: `Sazerac cape cod bananarita; presbyterian. Quentão corn n' oil bumbo ron rico, prince shnell inchgower cuba libre." Flaming volcano, aultmore pall mall savoy affair dufftown macuá.`,
        drinkImg: 'https://images.unsplash.com/photo-1615553186013-06b13fe822e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=953&q=80',
        userId: 15,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Devious Llama Delight`,
        content: `Tormore linkwood, jameson flaming dr pepper pegu old bushmill's, long island iced tea vodka mcgovern negroni kensington court special. Knockdhu chicago cocktail clynelish aviation christian brothers el presidente, godfather glenglassaugh angel's tit patron planter's punch old fashioned planter's punch.`,
        drinkImg: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        userId: 19,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Hot Magic Cosmo`,
        content: `Ginza mary balblair, blue blazer black bison black cossack glendullan, balvenie. Joker suaza polmos krakow. Sazerac matador my fair lady jim beam; pink lady dufftown long island iced tea lemon split zombie cape cod brandy daisy! White horse irish flag, seagrams jack rose daiquiri; old crow ben nevis. The blenheim presbyterian leroux grog grand marnier, chivas regal painkiller caribou lou harper's grant's."`,
        drinkImg: 'https://images.pexels.com/photos/4279097/pexels-photo-4279097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Flannel Gnome Swizzle`,
        content: `Blue hawaii kensington court special bengal brandy manhattan. Wolfram sake screwdriver spritzer fettercairn glen scotia quentão culto a la vida, edradour, "mai-tai dalmore metaxa." Planter's punch benedictine singapore sling caribou lou gordon's salty dog chupacabra. Old mr. boston. Leite de onça the last word irish coffee irish coffee dalmore orgasm, bombay vodka sundowner. Lagavulin; mortlach`,
        drinkImg: 'https://images.pexels.com/photos/4946725/pexels-photo-4946725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Swirled Honey Badger Storm`,
        content: `Lemon drop savoy affair the last word spanish coffee, tanqueray, skyy polish martini, screwdriver. Balblair savoy affair jagertee. Glen keith longmorn saketini jameson quentão, skyy golden doublet highland park tomatin glenrothes glen spey the amarosa cocktail imperial kirsch? Kamikaze lorraine jack rose vodka mcgovern. Glendronach; old etonian batida haig & haig "pinch" irish mist tamagozake cafe zürich kamikaze dalmore gimlet gordon's lime rickey speyburn choking hazard. Pegu pegu wild turkey, patron vesper strega, cointreau whiskey sour harvey wallbanger piña colada.`,
        drinkImg: 'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 13,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Berry Bae Shandy`,
        content: `Mannochmore benedictine, royal arrival amaretto di saronno polmos krakow. Bombay, "mojito glenmorangie fleischmann's gong mickey slim glenrothes balblair," glenrothes dewar's scotch whisky ti punch, "irish mist," hi-fi." Singapore sling jack and coke, jack rose isle of jura one-balled dictator, speyburn, old mr. boston glendullan singapore sling.`,
        drinkImg: 'https://images.unsplash.com/photo-1604321115296-f4b73745c7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
        userId: 14,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: `Coconut Cure`,
        content: `Satan's whiskers ti punch bunnahabhain ketel one; irish coffee colorado bulldog blue lagoon creamsicle v.o. irish flag gin sour caipiroska. Caipiroska old etonian jack daniel's bunnahabhain laphroaig calvert, fleischmann's. Benedictine jack and coke metaxas jack daniel's white russian. Alexander yorsh canadian mist patron lime rickey planter's punch; black & white black velvet.`,
        drinkImg: 'https://images.unsplash.com/photo-1548849956-8aa872cefb93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        userId: 18,
        createdAt: new Date(),
        updatedAt: new Date()

    },
]

const reviewsData = [
    {
        rating: 5,
        content: `Glen spey mint julep; ectoplasm, black & white glogg; seven and seven dalmore brandy alexander, hiram walker. Jim beam: bailey's irish cream dailuaine lemon drop smirnoff kir royale? Edradour mortlach tom and jerry bladnoch, dalwhinnie ballantine moonwalk. Tom and jerry kahlua mai-tai hennessey bladnoch ron rico old etonian kensington court special."
    `,
        userId: 1,
        drinkId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 2,
        content: `Laoreet viverra at aptent feugiat libero ornare rutrum fames. Blair athol? Three wise men scelerisque paralyzer ultrices rutrum. Dolor northern comfort link up risus snowball sapien auchroisk quis nisi jim beam golden doublet."
    `,
        userId: 8,
        drinkId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.
    `,
        userId: 13,
        drinkId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Faucibus gravida; habitasse consectetur curabitur, posuere auchroisk linkwood, odio; ut cointreau mollis id, "spritzer ac ad," black velvet. Chartreuse etiam elit singapore sling highland park rum swizzle torquent satan's whiskers etiam. Netus nisi integer hendrerit varius leo tempus tormore, laphroaig felis nisl, sake bomb facilisis leo.
    `,
        userId: 12,
        drinkId: 2,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 3,
        content: `Tequila sunset est, "curabitur: feugiat black cossack gin pahit, the macallan." Smoky martini condimentum felis egestas urna vivamus torquent, egestas a risus. Fusce bumbo loch lomond--cheeky vimto orci aberfeldy, "quis venenatis aenean; nam," mollis vodka mcgovern. Proin shirley temple black lectus cragganmore kirsch mollis.
    `,
        userId: 1,
        drinkId: 2,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 1,
        content: `Liquor ipsum dolor sit amet maecenas fusce; farnell harrogate nights? Per speyside pharetra mauris vulputate jack and coke salmiakki koskenkorva cursus. Mattis arcu fusce glenburgie vulputate hurricane habitasse tincidunt, talisker wolfram imperdiet; kir royale gibson fermentum, amet aptent aenean taciti sake bomb.
    `,
        userId: 19,
        drinkId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Laoreet viverra at aptent feugiat libero ornare rutrum fames. Blair athol? Three wise men scelerisque paralyzer ultrices rutrum. Dolor northern comfort link up risus snowball sapien auchroisk quis nisi jim beam golden doublet."
    `,
        userId: 14,
        drinkId: 4,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 5,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.
    `,
        userId: 11,
        drinkId: 4,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Faucibus gravida; habitasse consectetur curabitur, posuere auchroisk linkwood, odio; ut cointreau mollis id, "spritzer ac ad," black velvet. Chartreuse etiam elit singapore sling highland park rum swizzle torquent satan's whiskers etiam. Netus nisi integer hendrerit varius leo tempus tormore, laphroaig felis nisl, sake bomb facilisis leo.
    `,
        userId: 20,
        drinkId: 5,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 5,
        content: `Tequila sunset est, "curabitur: feugiat black cossack gin pahit, the macallan." Smoky martini condimentum felis egestas urna vivamus torquent, egestas a risus. Fusce bumbo loch lomond--cheeky vimto orci aberfeldy, "quis venenatis aenean; nam," mollis vodka mcgovern. Proin shirley temple black lectus cragganmore kirsch mollis.
    `,
        userId: 7,
        drinkId: 6,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 1,
        content: `Liquor ipsum dolor sit amet maecenas fusce; farnell harrogate nights? Per speyside pharetra mauris vulputate jack and coke salmiakki koskenkorva cursus. Mattis arcu fusce glenburgie vulputate hurricane habitasse tincidunt, talisker wolfram imperdiet; kir royale gibson fermentum, amet aptent aenean taciti sake bomb.
    `,
        userId: 5,
        drinkId: 7,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Laoreet viverra at aptent feugiat libero ornare rutrum fames. Blair athol? Three wise men scelerisque paralyzer ultrices rutrum. Dolor northern comfort link up risus snowball sapien auchroisk quis nisi jim beam golden doublet."
    `,
        userId: 10,
        drinkId: 7,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 5,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.
    `,
        userId: 10,
        drinkId: 8,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Faucibus gravida; habitasse consectetur curabitur, posuere auchroisk linkwood, odio; ut cointreau mollis id, "spritzer ac ad," black velvet. Chartreuse etiam elit singapore sling highland park rum swizzle torquent satan's whiskers etiam. Netus nisi integer hendrerit varius leo tempus tormore, laphroaig felis nisl, sake bomb facilisis leo.
    `,
        userId: 19,
        drinkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 5,
        content: `Tequila sunset est, "curabitur: feugiat black cossack gin pahit, the macallan." Smoky martini condimentum felis egestas urna vivamus torquent, egestas a risus. Fusce bumbo loch lomond--cheeky vimto orci aberfeldy, "quis venenatis aenean; nam," mollis vodka mcgovern. Proin shirley temple black lectus cragganmore kirsch mollis.
    `,
        userId: 5,
        drinkId: 10,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 2,
        content: `Liquor ipsum dolor sit amet maecenas fusce; farnell harrogate nights? Per speyside pharetra mauris vulputate jack and coke salmiakki koskenkorva cursus. Mattis arcu fusce glenburgie vulputate hurricane habitasse tincidunt, talisker wolfram imperdiet; kir royale gibson fermentum, amet aptent aenean taciti sake bomb.
    `,
        userId: 15,
        drinkId: 11,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Laoreet viverra at aptent feugiat libero ornare rutrum fames. Blair athol? Three wise men scelerisque paralyzer ultrices rutrum. Dolor northern comfort link up risus snowball sapien auchroisk quis nisi jim beam golden doublet."
    `,
        userId: 19,
        drinkId: 12,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 3,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.
    `,
        userId: 10,
        drinkId: 13,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Faucibus gravida; habitasse consectetur curabitur, posuere auchroisk linkwood, odio; ut cointreau mollis id, "spritzer ac ad," black velvet. Chartreuse etiam elit singapore sling highland park rum swizzle torquent satan's whiskers etiam. Netus nisi integer hendrerit varius leo tempus tormore, laphroaig felis nisl, sake bomb facilisis leo.
    `,
        userId: 16,
        drinkId: 14,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 3,
        content: `Tequila sunset est, "curabitur: feugiat black cossack gin pahit, the macallan." Smoky martini condimentum felis egestas urna vivamus torquent, egestas a risus. Fusce bumbo loch lomond--cheeky vimto orci aberfeldy, "quis venenatis aenean; nam," mollis vodka mcgovern. Proin shirley temple black lectus cragganmore kirsch mollis.
    `,
        userId: 9,
        drinkId: 15,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 5,
        content: `Liquor ipsum dolor sit amet maecenas fusce; farnell harrogate nights? Per speyside pharetra mauris vulputate jack and coke salmiakki koskenkorva cursus. Mattis arcu fusce glenburgie vulputate hurricane habitasse tincidunt, talisker wolfram imperdiet; kir royale gibson fermentum, amet aptent aenean taciti sake bomb.
    `,
        userId: 19,
        drinkId: 16,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Laoreet viverra at aptent feugiat libero ornare rutrum fames. Blair athol? Three wise men scelerisque paralyzer ultrices rutrum. Dolor northern comfort link up risus snowball sapien auchroisk quis nisi jim beam golden doublet."
    `,
        userId: 1,
        drinkId: 17,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 3,
        content: `Tincidunt tobermory vel, gin and tonic quam, elementum gin sour ultrices neque tempor leo quisque jameson, dolor. Morbi the goldeneye varius augue sem praesent sea breeze massa craigellachie dickel. Hac litora caridan at benrinnes orci ultrices tincidunt lejon euismod.
    `,
        userId: 17,
        drinkId: 18,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 4,
        content: `Faucibus gravida; habitasse consectetur curabitur, posuere auchroisk linkwood, odio; ut cointreau mollis id, "spritzer ac ad," black velvet. Chartreuse etiam elit singapore sling highland park rum swizzle torquent satan's whiskers etiam. Netus nisi integer hendrerit varius leo tempus tormore, laphroaig felis nisl, sake bomb facilisis leo.
    `,
        userId: 8,
        drinkId: 19,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        rating: 5,
        content: `Tequila sunset est, "curabitur: feugiat black cossack gin pahit, the macallan." Smoky martini condimentum felis egestas urna vivamus torquent, egestas a risus. Fusce bumbo loch lomond--cheeky vimto orci aberfeldy, "quis venenatis aenean; nam," mollis vodka mcgovern. Proin shirley temple black lectus cragganmore kirsch mollis.
    `,
        userId: 6,
        drinkId: 20,
        createdAt: new Date(),
        updatedAt: new Date()

    },
]

module.exports = { drinksData, reviewsData };