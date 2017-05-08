/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-05-08T00:00:12+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: vv.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-05-08T13:35:35+08:00
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
var d = {
    'c': {
        'e': {'f': 126, 'g': false}
    }
}
var res = merge([a, d], {
    'c': {
        'e': { 'g': true },
        'd': true
    }
},2)
console.log(res)
/*
{ a: 123,
  b: 456,
  c: { d: [ 123, 34 ], e: { f: 126, g: true } },
  d: true }
 */
