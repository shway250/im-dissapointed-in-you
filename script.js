var quotes = ["You smell bad and everyone talks about it behind your back",
              "I met a kitten once that said you were a pathetic loser",
              "All of your dreams will crumble into dust before being carried away by a soft but uncaring breeze",
              "Your prom date only said yes so she wouldn't have to go alone",
              "I'm gonna steal all your stuff and poke you in the eye",
              "You should just stop trying, jerk",
              "those people you love and hold dear? They're all gonna die one day",
              "Life is fallacious, and then you die",
              "You're not special and you never could have been special and your face looks funny",
              "You're childhood pet hated you",
              "All your efforts are essentially meaningless, and you smell like a fart",
              "Don't touch me you weirdo!",
              "All of your mail is bills and offers for credit cards with high interest rates",
              "No one will ever love you as much as you love sitting on the edge of your bed and stairing at the floor",
              "If you ever go on a vacation you'll probably get sick on the first day and have no fun the whole time, assface",
              "Gnomes sneak into your room while you sleep and spit in your mouth",
              "Some pervert put a webcam in your house, but he stopped watching it because your so boring",
              "Your mom called me and told me you were her least favorite. Not her least favorite child, her least favorite anything.",
              "Scientists in Eastern Europe genetically engineered a horse to kick you in the nuts",
              "You've had a piece of spinach caught in your teeth since May 17th, 2003",
              "I paid all your childhood friends to hang out with you",
              "In a scientific poll of likely voters conducted by PPP 58% of Americans said they want to push you into a muddy puddle",
              "Hey, come on dude. Don't pee your pants. That's disgusting",
              "The next time you tell yourself you should quit something because it's too hard you should just slam your hand in a car door instead",
              "Somebody once told me the world was gonna roll me, but they were wrong. The world is gonna roll you. Because you're fat."
              ];
var text = $('div');

function randIndex(){
 return Math.floor(Math.random() * quotes.length)
}

text.on('click', function(){
  $(this).html(quotes[randIndex()]);
})