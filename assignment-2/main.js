function dishes(recipe, avaibleIngridient) {
  let maxDishes = Infinity;
  for (let ingredient in recipe) {
    if (avaibleIngridient.hasOwnProperty(ingredient)) {
      const count = Math.floor(
        avaibleIngridient[ingredient] / recipe[ingredient]
      );
      maxDishes = Math.min(maxDishes, count);
    } else {
      maxDishes = 0;
      break;
    }
  }
  return maxDishes;
}

console.log(
  dishes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  dishes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
// Bayaqdan bunu baslatmayi unutmusam oz ozume danisirammis ses ve video kaydi var xahis edirem nezere alin artiq gecdi bundan sora bu videonu cekmek mentiqsiz olar vaxtinda bitmesine az qalib video ve ses kaydina qulaq assaniz ozumun yazdigimi anlayarsiniz , anlayisiniza gore tesekkur edirem
