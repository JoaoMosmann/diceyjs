# diceyjs
Javascript helper to roll dices for browsers and nodejs

## Usage

There are many ways to use it. So use it as you may like.
```js
var Dicey = require('./dicey.js');
Dicey.roll(3, 15); // Will return a random number from 3 to 15
Dicey.roll(50); // Will return a random number from 0 to 50
Dicey.roll('2d10'); // Will return a random number from 2 to 20
```

## Randomizer Methods

By default are 5 randomizer methods.

**NORMAL_ROLL** : Just randomize, round the number and return it.

**BEST_OF_TWO** : Randomize twice and return the highest value.

**BEST_OF_THREE** : Randomize three times and return the highest value.

**WORST_OF_TWO** : Randomize twice and return the lowest value.

**WORST_OF_THREE** : Randomize three times and return the lowest value.

#### Example
```js
Dicey.roll('2d10', 'BEST_OF_THREE');
Dicey.roll(10, 50, 'WORST_OF_THREE');
```
