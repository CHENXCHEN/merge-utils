/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-05-08T13:51:17+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: tt.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-05-08T13:55:24+08:00
 * @License: MIT
 * @Copyright: 2017
 */

var merge = require('../lib/index.js')
var res = merge([{'a': 100}, {'a': 200}], { 'a': true })
console.log(res)
var res = merge([{'a': 100}, {'a': 200}], { 'a': false})
console.log(res)
var res1 = merge([{'a': 100, 'b': {'c': 1}}, {'a': 200, 'b': {'c': 2}}], {}, 1)
console.log(res1)
var res2 = merge([{'a': 100, 'b': {'c': 1, 'd': 1}}, {'a': 200, 'b': {'c': 2, 'd': 2}}], {'b': { 'c': false}}, 1)
console.log(res2)
