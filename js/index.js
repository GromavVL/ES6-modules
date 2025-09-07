// іменований імпорт -----------------
// import { sum as mySum, mult, PI } from './math.js';

// console.log('sum(1,2) :>> ', mySum(1, 2));
// console.log('mult(PI,2) :>> ', mult(PI, 2));

// або
// import * as MyMath from './math.js';

// console.log('MyMath.sum(PI,3) :>> ', MyMath.sum(MyMath.PI, 3));

// дефолтний імпорт -----------------------
import Test  from "./math.js";

console.log('new Test(5) :>> ', new Test(5));

// поэднаний варіант -------------------------
// import { default as MyTest, sum, mult, PI } from './math.js';

import MyTest, { sum, mult, PI } from './math.js';

console.log('mult(PI,2) :>> ', mult(PI, 2));
console.log('new MyTest(5) :>> ', new MyTest(5));