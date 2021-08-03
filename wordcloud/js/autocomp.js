var ItemSelect;
var mapObject;

$('input[id="var-select"]').autoComplete({
    minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['Rainforest Café',
        'The Westin Lake Las Vegas Resort & Spa',
        'Greens and Proteins',
        '808 Sushi',
        "Braddah's Island Style",
        'Pier W',
        "Fatty Daddy's",
        'Square Cafe',
        "Dominick's Steakhouse",
        'The House Brasserie',
        'Crave Dessert Bar',
        'Blue Ribbon Fried Chicken - Grand Bazaar',
        "Rooster's Uptown",
        'Evel Pie',
        "Lucky's Cafe",
        'Ramen KoBo',
        'Zombie Burlesque',
        'Rise & Shine a Steak & Egg Place',
        'Red 8',
        'Kaiju',
        'Mr Tokyo Japanese Restaurant',
        'Buon Gusto Ristorante',
        'Havana Grill',
        'La Grande Orange Pizzeria',
        'In-N-Out Burger',
        'Blueberry Hill Family Restaurant ',
        'Blue Fin Sushi & Roll',
        'Amore Taste of Chicago',
        'Las Vegas South Premium Outlets',
        'Tapas Papa Frita',
        "BJ's Restaurant & Brewhouse",
        'Britney- Piece of Me',
        "Casey Moore's Oyster House",
        'Costa di Mare',
        'Rice & Company',
        'Happy Dog',
        'The Chicken Shack',
        'Legacy Air',
        'Sprinkles Cupcakes',
        'Simon Restaurant and Lounge',
        'Loving Hut - Glendale',
        'Ethel M Chocolate',
        'D.O.C.G. Enoteca',
        'Terrace Restaurants',
        "Coconut's Fish Cafe",
        'El Cortez Hotel & Casino',
        'Rock & Roll Hall of Fame',
        'Yong Kang Street',
        'Fiamma Italian Kitchen',
        'Roka Akor - Scottsdale',
        "Hussong's Cantina Las Vegas",
        'Smiling Banana Leaf',
        'Hikari',
        "McKoy's Smokehouse & Saloon",
        'Dim Sum Cafe',
        'Oyster Bar',
        'Garden Court Buffet',
        'Copper Blues Rock Pub & Kitchen - Phoenix',
        'Rehab Beach Club',
        'Momocho',
        'Off The Strip at the LINQ',
        'Gadzooks Enchiladas & Soup',
        'Lemongrass Café',
        'Pho Thanh Huong',
        'Chica',
        'Hungry Monk',
        'Bannock',
        'illy Caffè',
        'Double Helix Wine & Whiskey Lounge',
        'Blanco Tacos And Tequila',
        'Mark Kia',
        "Flancer's",
        'Backyard Taco',
        'Jenni Pho',
        'Shake Shack',
        'Anzios Italian Restaurant',
        'SkyBar',
        'Colados Coffee & Crepes',
        'SEA: The Thai Experience',
        "Glazier's Food Marketplace",
        'Polished Nails & Spa',
        'Mill Street Brew Pub',
        'Carnival World & Seafood Buffet',
        'LOOK Style Society',
        'Little Saigon',
        'Karaoke Q Studio',
        'Il Fornaio',
        'Blue Sea Sushi and Izakaya',
        "KGB: Kerry's Gourmet Burgers",
        'Fat Heads Saloon',
        'Wadaa Street Tacos',
        'The Keg Steakhouse + Bar',
        'The Cracked Egg',
        'Messini Authentic Gyros',
        'Melt Bar and Grilled',
        'Pho Tien Thanh',
        'Richmond Station',
        'Trattoria Reggiano',
        'Imperial Health Spa',
        'Monta Chaya',
        'Koi Restaurant',
        'The Rose and Crown',
        'Desert Wireless',
        'Tuscany Suites & Casino',
        'Babbo Italian Eatery',
        'Noodlecat',
        'Pita Jungle',
        'Pomo Pizzeria - Phoenix',
        'Maverick Helicopters',
        'To See Roll',
        'Egg Works',
        'Sidestreet Pho and Grill',
        "Jewel's Bakery and Cafe",
        "Ronald's Donuts",
        'Pointe Hilton Tapatio Cliffs Resort',
        'Kahunaville Island Restaurant',
        "Nicky's Thai Kitchen",
        'Thai Spices',
        'The Clarendon Hotel',
        'Worth Takeaway',
        'La Carnita',
        'El Chorro',
        "Eddie V's Prime Seafood",
        'Geisha A Go Go',
        'Elephant Bar Restaurant',
        'Fat Cats Gilbert',
        'Timo Wine Bar',
        'Millie Creperie',
        'ARIA Café',
        'M&M Soul Food Cafe',
        "Martorano's",
        'Botero',
        'Second Story Restaurant & Liquor Bar',
        "Archi's Thai Kitchen",
        'Vegas Noodle House',
        'The Palm Las Vegas',
        'Thai St Cafe',
        'Vapiano',
        'Yama Sushi',
        'Rudy\'s "Country Store" and Bar-B-Q',
        'The Skeptical Chymist',
        'Grazie Ristorante',
        'Canaletto',
        'North Italia',
        'Primanti Bros',
        'Hopdoddy Burger Bar',
        'Kazu',
        'Hillstone Restaurant',
        'Chicago Brewing Company',
        'Makino Sushi & Seafood Buffet',
        'Cracker Barrel Old Country Store',
        'The Greene House',
        'Bei',
        "Children's Museum of Phoenix",
        'The Bank',
        "VinciTorio's"];
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