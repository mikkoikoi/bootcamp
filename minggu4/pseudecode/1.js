// procedure countCoins(amount, denomination)
// currentAmount ! amount
// coinCount ! 0
// while (currentAmount ! denomination)
// (coinCount ! coinCount + 1
// currentAmount ! currentAmount – denomination)
// return coinCount
// procedure makeChange(amount)
// currentAmount ! amount
// quarters ! countCoins(currentAmount, 25)
// currentAmount ! currentAmount – (25 ! quarters)
// dimes ! countCoins(currentAmount, 10)
// currentAmount ! currentAmount – (10 ! dimes)
// nickels ! countCoins(currentAmount, 5)
// currentAmount ! currentAmount – (5 ! nickels)
// pennies ! countCoins(currentAmount, 1)
// return [quarters, dimes, nickels, pennies]

// procedure listRPM(factor1, factor2)
// if (factor1 > factor2) then
// (term1 ! factor2
// term2 ! factor1)
// else
// (term1 ! factor1
// term2 ! factor2)
// addendList ! [ ]
// while (term1 > 0)
// (if (term1 is odd) then
// (add term2 to addendList)
// term1 ! halveWithoutRemainder(term1)
// term2 ! double(term2))
// product ! 0
// for each (number in addendList)
// (product ! product + number)
// return product

var countCoins = function (amount, denomination) {
  var currentAmount = amount;
  var coinCount = 0;
  while (currentAmount >= denomination) {
    coinCount = coinCount + 1;
    currentAmount = currentAmount - denomination;
  }
  return coinCount;
};
var makeChange = function (amount) {
  var currentAmount = amount;
  var quarters = countCoins(currentAmount, 25);
  currentAmount = currentAmount - 25 * quarters;
  var dimes = countCoins(currentAmount, 10);
  currentAmount = currentAmount - 10 * dimes;
  var nickels = countCoins(currentAmount, 5);
  currentAmount = currentAmount - 5 * nickels;
  var pennies = countCoins(currentAmount, 1);
  return [quarters, dimes, nickels, pennies];
};

var listRPM = function (factor1, factor2) {
  var term1 = factor1;
  var term2 = factor2;
  if (factor1 > factor2) {
    term1 = factor2;
    term2 = factor1;
  }
  var addendList = [];
  while (term1 > 0) {
    if (term1 % 2 == 1) {
      addendList.push(term2);
    }
    term1 = parseInt(term1 / 2);
    term2 = term2 * 2;
  }
  var product = 0;
  for (var index = 0; index < addendList.length; index += 1) {
    product = product + addendList[index];
  }
  return product;
};
