var ItemSelect;
var mapObject;

$('input[id="var-select"]').autoComplete({
    minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['Bonjour Bakery & Deli',
        'Blue Olive Lounge Ballantyne',
        'Rita B Chuang, MD',
        'Colonial Eatery',
        "Alice Fazooli's",
        'Starbucks',
        'GoodLife Fitness',
        'Pep Boys Auto Service & Tire',
        'Mesa Park',
        'Momoyama Sushi',
        'PetSmart',
        'Istanbul Grill',
        'Oriental Taste Restaurant',
        'AMC Fitchburg 18',
        'Public Storage',
        'The UPS Store',
        'Air Conditioning Of Arizona',
        'One Nevada Credit Union',
        'The Optic Zone',
        'La-Z-Boy Furniture Galleries',
        'Pizza Marsala',
        'Southwest Wildlife Conservation Center',
        'Zaytoon Kabob Bistro',
        "Kettlemuck's Toy Shoppe",
        'Power MMA & Fitness',
        'K1 Speed',
        "StonePepper's Grill",
        'Sakura Ichiban Restaurant',
        'Little Luxuries',
        'AAA - South End',
        'Jamba Juice',
        'Comptoir 21',
        'Panda Express',
        'Mesa Modern Dentistry and Orthodontics',
        'La Michoacana',
        'Katchakid',
        'My Pigsty Furniture Warehouse',
        'Express Marble and Granite',
        'The Red Lantern',
        "Jimmy's Coffee",
        'The Hobby Bench',
        '99 Pub and Grill',
        'Pine Tree Garden Restaurant',
        'Palm Beach Tan',
        'RideNow Powersports Surprise',
        'Nostos',
        'Pretty Nails',
        'Moksha Yoga North York',
        'I-Migoo',
        "sweetDee's bakeshop",
        'Food For Thought Deli',
        'Pho Xua',
        'Tuvalu Coffehouse & Gallery',
        "Riliberto's Fresh Mexican Food",
        "Domino's Pizza",
        'Aptive',
        'Holtzman Home Improvement',
        "Tommy's Fairview Tavern",
        'Knight Theater',
        'Wallace Espresso',
        'Lidl',
        "Dunkin' Donuts",
        'Nations Fresh Foods',
        'Francis & Sons Car Wash',
        '9 Bars',
        'The Cutting Board',
        'Au "Grottens" Cafe & Catering',
        "Portofino's Pizza & Pasta",
        'Affordable Dentures & Implants',
        'Panera Bread',
        "Nature's Pet Las Vegas",
        'Thirsty Parrot',
        'University Auto Spa',
        'Juut Salon Spa',
        "Wendy's",
        'Diamond Cabaret',
        'The Egg & I Cafe',
        "Michael A's Restaurant & Lounge",
        'The Buckle',
        'LV Photo',
        'Salon Adikt',
        'Style by Maciel',
        'The Canadian Brewhouse',
        "Wade's Discount Muffler & Brakes",
        'Ginger And Onion Cuisine',
        'Shanghai Shikumen Restaurant',
        'Battle Sports',
        "Ken Stewart's Tre Belle",
        'Bixels Salon and Spa Studio',
        'FastMed Urgent Care',
        'Uptown Barber Shop',
        'Marshalls',
        'Walgreens',
        'University Eye Associates',
        'Heritage at Deer Valley',
        'Real Steemer',
        'Choko-Mocko',
        'Sprint Store by Connectivity Source',
        'Imperial Buffet',
        'Clothes Mentor - Avondale',
        'La Vidorra Spa',
        'Just Around The Corner Pet Sitting & Home Services',
        "McAlister's Deli",
        'Rainbow Dental Care',
        'Palacio Apartments',
        'The Pickle Barrel',
        'Maize at the Station',
        'Stetson Hills Animal Hospital',
        'Verizon',
        'See & Be Seen Eyecare',
        'SkyView YMCA',
        'Papa Primoz',
        'Larry H. Miller Collision Center',
        "Hog's Heaven BBQ",
        'Toronto Bicycle Tours',
        'Blair House Suites',
        'Cucina di Vita',
        'Eyebrows 4 Us',
        'Aces High Party Rentals',
        'Sports Book Grill',
        'Studio VaVaVoom',
        'Greek Palace Mediterranean',
        'Lexus of Madison',
        "Nino's Pizzeria & Wings",
        'Pool Shop',
        'Elysian Nail Bar',
        'The Standard',
        'Reptile Mogul Exotics',
        'Creating Magic Salon',
        'Zero Below',
        "We'll Carry the Load Movers",
        'AutoZone',
        'I Wok',
        'Bow Valley Ranche Restaurant',
        'Casa Santa Fe',
        "Bijoy's Restaurant"];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    },
    onSelect: function(e, term, item){
        function doit() {
            console.log("doit() is running..."); 
            function replace(new_str) {
                for (var key in mapObject) {
                    if (!mapObject.hasOwnProperty(key)) {
                        continue;
                    }
                    
                    if (new_str.length === key.length) {
                    new_str = new_str.replace(key, mapObject[key]);
                    }
                    else {
                        continue;
                    }
                }
                return new_str
            }
            // get instance of input
            title = item.data('val');
            ItemSelect = replace(title);
            console.log(JSON.stringify(ItemSelect));
            }
              
            if (e.type === "keydown") {
            console.log("the keydown event was captured");
            doit();
            }
            else {
            doit(); 
            console.log("the keydown event was not captured");
            }
    }
});