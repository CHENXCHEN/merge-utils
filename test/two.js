/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-05-08T13:31:20+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: two.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-05-08T13:34:49+08:00
 * @License: MIT
 * @Copyright: 2017
 */

var merge = require('../lib/index.js')
var a = {
    'a': 123, 'b': 456,
    'c': {
        'd': [123, 34],
        'e': { 'f': 123, 'g': true }
    },
    'd': true
}
var b = {
    'a': 998, 'b': 466,
    'c': {
        'd': [133, 35],
        'e': { 'f': 126, 'g': false }
    }
}
var c = {
    'd': false,
}
var res = merge([a, b, c], {
    'a': true,
    'c': {
        'd': true
    }
})
console.log(res)
/*
{ a: 123, b: 466,
  c: { d: [ 123, 34 ], e: { f: 126, g: false } },
  d: false }
 */
