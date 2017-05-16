/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-05-16T21:51:00+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: t2.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-05-16T22:44:38+08:00
 * @License: MIT
 * @Copyright: 2017
 */

var merge = require('../lib/index.js')
var res = merge([{'a': {'b': 1, 'd': {'e': 12}}}, {'a': {'c': 1, 'd': 12}}] )
console.log(res);
/*
{ a: { b: 1, d: { e: 12 }, c: 1 } }
 */
