/*!
 * poop.js v0.1
 * (c) 2020 Rubén Burgos
 * Released under the MIT License.
 */

/************ FUNCTIONS ************/
/****** fuf (frequently used functions) ******/
const puts = (parameters) => {
    try {
        parameters.forEach(element => {
            console.log(element);
        });
    } catch (e) {
        console.log(`%c${e}`, 'color: #ff4444');
    }
}

const getById = (id) => document.getElementById(id);
const getByClassName = (className) => document.getElementsByClassName(className);

/****** Math methods ******/
const clc = () => console.clear();
const abs = (x) => Math.abs(x);
const acos = (x) => Math.acos(x);
const acosh = (x) => Math.acosh(x);
const asin = (x) => Math.asin(x);
const asinh = (x) => Math.asinh(x);
const atan = (x) => Math.atan(x);
const atanh = (x) => Math.atanh(x);
const atan2 = (y, x) => Math.atan2(x, y);
const cbrt = (x) => Math.cbrt(x);
const ceil = (x) => Math.ceil(x);
const clz32 = (x) => Math.clz32(x);
const cos = (x) => Math.cos(x);
const cosh = (x) => Math.cosh(x);
const exp = (x) => Math.exp(x);
const expm1 = (x) => Math.expm1(x);
const floor = (x) => Math.floor(x);
const fround = (x) => Math.fround(x);
const imul = (x, y) => Math.imul(x, y);
const log = (x) => Math.log(x);
const log1p = (x) => Math.log1p(x);
const log10 = (x) => Math.log10(x);
const log2 = (x) => Math.log2(x);
const pow = (x, y) => Math.pow(x, y);
const random = () => Math.random();
const round = (x) => Math.round(x);
const sign = (x) => Math.sign(x);
const sin = (x) => Math.sin(x);
const sinh = (x) => Math.sinh(x);
const sqrt = (x) => Math.sqrt(x);
const tan = (x) => Math.tan(x);
const tanh = (x) => Math.tanh(x);
const trunc = (x) => Math.trunc(x);

/************ CONSTANTS ************/
const E = Math.E;
const LN2 = Math.LN2;
const LN10 = Math.LN10;
const LOG2E = Math.LOG2E;
const PI = Math.PI;
const LOG10E = Math.LOG10E;
const SQRT1_2 = Math.SQRT1_2;
const SQRT2 = Math.SQRT2;
const PHI = 1.61803398875;
const C = 299792458;
const POOP = '💩';