(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es6/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise =  false || resolve(value));
            }
            function onReject(error) {
                promise && (promise =  false || reject(error));
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    if (NativePromise) {
        patchThen(NativePromise);
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('fetch', function (global, Zone, api) {
    var fetch = global['fetch'];
    var ZoneAwarePromise = global.Promise;
    var symbolThenPatched = api.symbol('thenPatched');
    var fetchTaskScheduling = api.symbol('fetchTaskScheduling');
    var fetchTaskAborting = api.symbol('fetchTaskAborting');
    if (typeof fetch !== 'function') {
        return;
    }
    var OriginalAbortController = global['AbortController'];
    var supportAbort = typeof OriginalAbortController === 'function';
    var abortNative = null;
    if (supportAbort) {
        global['AbortController'] = function () {
            var abortController = new OriginalAbortController();
            var signal = abortController.signal;
            signal.abortController = abortController;
            return abortController;
        };
        abortNative = api.patchMethod(OriginalAbortController.prototype, 'abort', function (delegate) { return function (self, args) {
            if (self.task) {
                return self.task.zone.cancelTask(self.task);
            }
            return delegate.apply(self, args);
        }; });
    }
    var placeholder = function () { };
    global['fetch'] = function () {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        var options = args.length > 1 ? args[1] : null;
        var signal = options && options.signal;
        return new Promise(function (res, rej) {
            var task = Zone.current.scheduleMacroTask('fetch', placeholder, args, function () {
                var fetchPromise;
                var zone = Zone.current;
                try {
                    zone[fetchTaskScheduling] = true;
                    fetchPromise = fetch.apply(_this, args);
                }
                catch (error) {
                    rej(error);
                    return;
                }
                finally {
                    zone[fetchTaskScheduling] = false;
                }
                if (!(fetchPromise instanceof ZoneAwarePromise)) {
                    var ctor = fetchPromise.constructor;
                    if (!ctor[symbolThenPatched]) {
                        api.patchThen(ctor);
                    }
                }
                fetchPromise.then(function (resource) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    res(resource);
                }, function (error) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    rej(error);
                });
            }, function () {
                if (!supportAbort) {
                    rej('No AbortController supported, can not cancel fetch');
                    return;
                }
                if (signal && signal.abortController && !signal.aborted &&
                    typeof signal.abortController.abort === 'function' && abortNative) {
                    try {
                        Zone.current[fetchTaskAborting] = true;
                        abortNative.call(signal.abortController);
                    }
                    finally {
                        Zone.current[fetchTaskAborting] = false;
                    }
                }
                else {
                    rej('cancel fetch need a AbortController.signal');
                }
            });
            if (signal && signal.abortController) {
                signal.abortController.task = task;
            }
        });
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget_1 = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget_1) {
            patchFilteredProperties(XMLHttpRequestEventTarget_1 && XMLHttpRequestEventTarget_1.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    attachOriginToPatched(target[method], nativeDelegate);
}
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    patchCallbacks(document, 'Document', 'registerElement', callbacks);
}
function patchCustomElements(_global) {
    if ((!isBrowser && !isMix) || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    patchCallbacks(_global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    registerElementPatch(global);
    patchCustomElements(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue || localStorage.user; // need to remove
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        //let currentUser = this.authenticationService.currentUserValue;
        //if (AppConfig.settings.aad.accessToken) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer a448d5376b956dcc5589516ddefcf7bc"
            }
        });
        //  }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/_services/config.service.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var options = {
            withCredentials: true,
            headers: { 'Authorization': 'Basic ' + btoa(username + ":" + password) }
        };
        return this.http.post(_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].settings.aad.loginURL, {}, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                user.username = username;
                user.expires_at = new Date();
                user.expires_at.setSeconds(user.expires_at.getSeconds() + user.expires_in);
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/config.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/config.service.ts ***!
  \*********************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AppConfig = /** @class */ (function () {
    function AppConfig(http) {
        this.http = http;
    }
    AppConfig_1 = AppConfig;
    AppConfig.prototype.load = function () {
        var _this = this;
        var jsonFile = "assets/config/config." + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].name + ".json";
        return new Promise(function (resolve, reject) {
            _this.http.get(jsonFile).toPromise().then(function (response) {
                AppConfig_1.settings = response;
                resolve();
            }).catch(function (response) {
                reject("Could not load file '" + jsonFile + "': " + JSON.stringify(response));
            });
        });
    };
    var AppConfig_1;
    AppConfig = AppConfig_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/_services/filter-manager.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/filter-manager.service.ts ***!
  \*****************************************************/
/*! exports provided: FilterManagerService, Filter, FilterMode, MonitorCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterManagerService", function() { return FilterManagerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMode", function() { return FilterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorCase", function() { return MonitorCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var FilterManagerService = /** @class */ (function () {
    function FilterManagerService() {
        this.filterMonitor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.filterManager = {};
        this.freeHandles = {
            freed: [],
            next: 0
        };
    }
    FilterManagerService.prototype.getHandle = function () {
        if (this.freeHandles.freed.length > 0) {
            return this.freeHandles.freed.pop();
        }
        else {
            var next = this.freeHandles.next;
            this.freeHandles.next++;
            return next;
        }
    };
    FilterManagerService.prototype.freeHandle = function (handle) {
        this.freeHandles.freed.push(handle);
    };
    FilterManagerService.prototype.registerFilter = function (conditions, sorter) {
        var handle = this.getHandle();
        this.filterManager[handle] = new Filter(conditions, sorter);
        this.filterMonitor.next({ handle: handle, case: MonitorCase.CREATED });
        return handle;
    };
    FilterManagerService.prototype.removeFilter = function (handle) {
        delete this.filterManager[handle];
        this.filterMonitor.next({ handle: handle, case: MonitorCase.DESTROYED });
        this.freeHandle(handle);
    };
    FilterManagerService.prototype.addFilterCondition = function (handle, condition) {
        this.filterManager[handle].addCondition(condition);
        this.filterMonitor.next({ handle: handle, case: MonitorCase.ADD_COND });
    };
    FilterManagerService.prototype.removeFilterCondition = function (handle, condition) {
        this.filterManager[handle].removeCondition(condition);
        this.filterMonitor.next({ handle: handle, case: MonitorCase.REMOVE_COND });
    };
    //only one sort can be registered per tracked filter
    FilterManagerService.prototype.setFilterSorter = function (handle, sortFunction) {
        this.filterManager[handle].setSorter(sortFunction);
        this.filterMonitor.next({ handle: handle, case: MonitorCase.UPDATE_SORTER });
    };
    FilterManagerService.prototype.getFilter = function (handle) {
        return this.filterManager[handle];
    };
    FilterManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterManagerService);
    return FilterManagerService;
}());

var Filter = /** @class */ (function () {
    function Filter(conditions, sorter) {
        this.conditions = conditions == undefined ? [] : conditions;
        this.sorter = sorter == undefined ? null : sorter;
    }
    Filter.prototype.addCondition = function (condition) {
        this.conditions.push(condition);
    };
    Filter.prototype.removeCondition = function (condition) {
        var index = this.conditions.indexOf(condition);
        if (index >= 0) {
            this.conditions.splice(index, 1);
        }
    };
    Filter.prototype.setSorter = function (sortFunction) {
        this.sorter = sortFunction;
    };
    Filter.prototype.getConditions = function () {
        return this.conditions;
    };
    Filter.prototype.getSorter = function () {
        return this.sorter;
    };
    Filter.prototype.generateFilterFunct = function (mode) {
        var _this = this;
        var condFunct = function (data) {
            return data.filter(function (datum) {
                var pass = true;
                var i;
                for (i = 0; i < _this.conditions.length; i++) {
                    pass = pass && _this.conditions[i](datum);
                }
                return pass;
            });
        };
        var sortFunct = function (data) {
            return _this.sorter == null ? data : data.sort(_this.sorter);
        };
        var allFunct = function (data) {
            var condFilter = condFunct(data);
            return sortFunct(condFilter);
        };
        switch (mode) {
            case FilterMode.COND: {
                return condFunct;
            }
            case FilterMode.SORT: {
                return sortFunct;
            }
            case FilterMode.COND_SORT: {
                return allFunct;
            }
            default: {
                throw new Error("Invalid mode");
            }
        }
    };
    return Filter;
}());

var FilterMode;
(function (FilterMode) {
    FilterMode[FilterMode["COND"] = 0] = "COND";
    FilterMode[FilterMode["SORT"] = 1] = "SORT";
    FilterMode[FilterMode["COND_SORT"] = 2] = "COND_SORT";
})(FilterMode || (FilterMode = {}));
var MonitorCase;
(function (MonitorCase) {
    MonitorCase[MonitorCase["CREATED"] = 0] = "CREATED";
    MonitorCase[MonitorCase["DESTROYED"] = 1] = "DESTROYED";
    MonitorCase[MonitorCase["ADD_COND"] = 2] = "ADD_COND";
    MonitorCase[MonitorCase["REMOVE_COND"] = 3] = "REMOVE_COND";
    MonitorCase[MonitorCase["UPDATE_SORTER"] = 4] = "UPDATE_SORTER";
})(MonitorCase || (MonitorCase = {}));


/***/ }),

/***/ "./src/app/_services/query-cache.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/query-cache.service.ts ***!
  \**************************************************/
/*! exports provided: ResetOptionFlags, QueryCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetOptionFlags", function() { return ResetOptionFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCacheService", function() { return QueryCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetOptionFlags;
(function (ResetOptionFlags) {
    ResetOptionFlags[ResetOptionFlags["SET"] = 1] = "SET";
    ResetOptionFlags[ResetOptionFlags["GET"] = 2] = "GET";
})(ResetOptionFlags || (ResetOptionFlags = {}));
var QueryCacheService = /** @class */ (function () {
    function QueryCacheService() {
        this.dataStore = {};
    }
    QueryCacheService_1 = QueryCacheService;
    QueryCacheService.prototype.exists = function (key) {
        return this.dataStore[key] != undefined;
    };
    QueryCacheService.prototype.createEntry = function (key, initData, options) {
        var _this = this;
        var initOptions = {
            timeout: QueryCacheService_1.DEFAULT_OPTIONS.timeout,
            resetOn: QueryCacheService_1.DEFAULT_OPTIONS.resetOn,
            timoutHandler: null
        };
        if (options != undefined) {
            if (options.timeout != undefined) {
                initOptions.timeout = options.timeout;
            }
            if (options.resetOn != undefined) {
                initOptions.resetOn = options.resetOn;
            }
        }
        initOptions.timoutHandler = function () {
            delete _this.dataStore[key];
        };
        this.dataStore[key] = new CacheData(initOptions, initData);
    };
    QueryCacheService.prototype.setData = function (key, data, start) {
        var cacheData = this.dataStore[key];
        var inserted = false;
        if (data != undefined) {
            cacheData.set(data, start);
            inserted = true;
        }
        else {
            throw new Error("Data key does not exist: createEntry must be called to create cache entry before inserting data");
        }
        return inserted;
    };
    QueryCacheService.prototype.fetchData = function (key, range) {
        var fetchedData = null;
        var data = this.dataStore[key];
        if (data != undefined) {
            if (range == undefined) {
                range = [0, null];
                fetchedData = data.fetch(range);
            }
        }
        return fetchedData;
    };
    var QueryCacheService_1;
    //time before query cleared from cache in ms
    QueryCacheService.DEFAULT_OPTIONS = {
        timeout: 1000 * 60 * 5,
        resetOn: ResetOptionFlags.GET | ResetOptionFlags.SET
    };
    QueryCacheService = QueryCacheService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QueryCacheService);
    return QueryCacheService;
}());

var CacheData = /** @class */ (function () {
    function CacheData(options, initData) {
        if (initData != undefined) {
            this.data = initData.data;
            this.complete = initData.complete;
        }
        else {
            this.data = [];
            this.complete = false;
        }
        this.options = options;
        this.setTimeout();
    }
    CacheData.prototype.set = function (data, start) {
        var _a;
        //don't allow gaps, shouldn't be any reason to need to
        if (start > this.data.length) {
            throw new Error("Data out of range: range minimum exceeds current maximum value, data must be inserted in order");
        }
        if (this.checkReset(ResetOptionFlags.SET)) {
            this.resetTimeout();
        }
        (_a = this.data).splice.apply(_a, [start, data.data.length].concat(data.data));
        this.complete = data.complete;
    };
    CacheData.prototype.fetch = function (range) {
        var _a;
        if (this.checkReset(ResetOptionFlags.GET)) {
            this.resetTimeout();
        }
        if (range[1] == null) {
            range[1] = this.data.length;
        }
        var fetchedData = (_a = this.data).slice.apply(_a, range);
        var dataDetails = {
            data: fetchedData,
            range: [range[0], range[0] + fetchedData.length],
            complete: this.complete && fetchedData.length == this.data.length
        };
        return dataDetails;
    };
    //if a flag matches a resetOn flag then return true (should reset)
    CacheData.prototype.checkReset = function (flags) {
        return (this.options.resetOn & flags) != 0;
    };
    CacheData.prototype.resetTimeout = function () {
        clearTimeout(this.timeout);
        this.setTimeout();
    };
    CacheData.prototype.setTimeout = function () {
        this.timeout = setTimeout(this.options.timoutHandler, this.options.timeout);
    };
    return CacheData;
}());


/***/ }),

/***/ "./src/app/_services/query-handler.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/query-handler.service.ts ***!
  \****************************************************/
/*! exports provided: QueryHandlerService, QueryController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryHandlerService", function() { return QueryHandlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryController", function() { return QueryController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _spatial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spatial.service */ "./src/app/_services/spatial.service.ts");
/* harmony import */ var _query_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query-cache.service */ "./src/app/_services/query-cache.service.ts");
/* harmony import */ var _filter_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-manager.service */ "./src/app/_services/filter-manager.service.ts");






//import { HandleGenerator } from "../_models/handleGenerator"
var QueryHandlerService = /** @class */ (function () {
    function QueryHandlerService(spatial, cache, filters) {
        this.spatial = spatial;
        this.cache = cache;
        this.filters = filters;
        // initFilterListener(filterMonitor: Observable<MonitorEvent>) {
        //   filterMonitor.subscribe((event: MonitorEvent) => {
        //     //console.log(event);
        //     switch(event.case) {
        //       case MonitorCase.CREATED: {
        //         this.dataPorts[event.handle] = new DataPort();
        //         //console.log(this.dataPorts[0]);
        //         break;
        //       }
        //       case MonitorCase.DESTROYED: {
        //         delete this.dataPorts[event.handle];
        //         break;
        //       }
        //     }
        //   });
        // }
        // getFilterObserver(filterHandle: FilterHandle): Observable<Metadata[]> {
        //   let port = this.dataPorts[filterHandle];
        //   //console.log(filterHandle);
        //   //console.log(this.dataPorts);
        //   if(port == undefined) {
        //     throw new Error("Invalid filter handle: the filter handle does not have an associated data port");
        //   }
        //   return port.source.asObservable();
        // }
        this.query = function (query, startPoint) {
            var ramp, rampState, limit, complete, offset, canceled;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ramp = QueryHandlerService_1.RAMP_FUNCT(startPoint);
                        rampState = ramp.next();
                        limit = rampState.value;
                        complete = rampState.done;
                        offset = startPoint;
                        canceled = false;
                        _a.label = 1;
                    case 1:
                        if (!(!canceled && !complete)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.spatial.search(query, limit, offset).then(function (data) {
                                //if less data returned than requested, then the query should be complete
                                complete = data.length != limit;
                                var status = {
                                    status: 200,
                                    error: false,
                                    loadedResults: offset + data.length,
                                    finished: complete
                                };
                                return {
                                    status: status,
                                    data: data
                                };
                            }, function (e) {
                                console.log(e);
                                //errored out, set complete (shouldn't continue)
                                complete = true;
                                var status = {
                                    status: e.status,
                                    error: true,
                                    message: e.message,
                                    loadedResults: offset,
                                    finished: false
                                };
                                return {
                                    status: status,
                                    data: null
                                };
                            })];
                    case 2:
                        //console.log(this.spatial);
                        //inject true to cancel the current query if new query comes
                        canceled = _a.sent();
                        offset += limit;
                        rampState = ramp.next();
                        limit = rampState.value;
                        complete = complete || rampState.done;
                        return [3 /*break*/, 1];
                    case 3:
                        if (!canceled) return [3 /*break*/, 5];
                        return [4 /*yield*/, true];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, complete];
                }
            });
        };
        this.querySubjectMap = {};
    }
    QueryHandlerService_1 = QueryHandlerService;
    // private cancelQuery() {
    //   if(this.queryState.queryGen != null) {
    //     //inject signal to cancel into query generator, shouldn't matter if already complete
    //     this.queryState.queryGen.next(true);
    //   }
    //   this.queryState.masterDataSubController.next();
    // }
    // //extension searches only garentee up to QueryHandlerService.MAX_QUERY results (may be able to return more if query broken up)
    // //assumed that extension queries are limited
    // //no filtering support, results cached with specified ttl or 5 minutes if not specified
    // valueSearchExtension(keys: string[], options?: HeuristicOptions) {
    //   let query = "";
    //   if(options != undefined) {
    //     let low = Math.max(0, options.rootIndex - options.searchRange);
    //   }
    //   this.spatial.search(query, QueryHandlerService.MAX_QUERY, 0) {
    //   }
    // }
    // spatialSearchExtension(geometry: any, options?: HeuristicOptions) {
    // }
    // handleExtensionQuery() {
    // }
    //filters handled by filtermanager, filters should be registered here and data ports are handled there
    //handle requests here, emit requests through filtermanager data ports
    //add support for sorting and filters
    //for any data retrieval method, return a promise, if data not cached:
    //verify that the query has been properly submitted and throw error if not
    //use the statusPort to signal new data received and check if requested data available
    //return null if first entry out of range or
    //error if query errors out
    //assumes that any data from current query should be cached (overflow will be cut off if excessively large)
    //need to add overflow indicator to status
    // cancelQuery(handle: QueryHandle): boolean {
    //   let subjects = this.subjectMap[handle];
    //   let canceled = false;
    //   if(subjects != undefined) {
    //     let i;
    //     for(i = 0; i < subjects.length; i++) {
    //       subjects[i].complete();
    //     }
    //     canceled = true;
    //   }
    //   return canceled;
    // }
    QueryHandlerService.prototype.valueSearch = function (keys) {
        throw new Error("valueSearch not implemented");
    };
    //!!! doesn't work with multiple queries as is, each query will report when it's finished and its own internal accumulator
    //!!! should subscribe to each subquery, then rebroadcast as a single query
    //should also go back to having a central cancel subject for each query unit that subqueries listen to to make cancelation more streamlined
    //handle features separately to optimize cache catches for subset queries
    QueryHandlerService.prototype.spatialSearch = function (features) {
        // let res: QueryResults = {
        //   handle: this.handleGen.getHandle(),
        //   dataStream: new Observable<QueryResponse>()
        // };
        var subjects = [];
        //need to do something to handle too long queries
        var query = "{'$and':[{'name':{'$in':['TEST_Micro_GPS']}},{'value.loc': {$geoWithin: {'$geometry':" + JSON.stringify(features[0].geometry).replace(/"/g, '\'') + "}}}]}";
        var stored = this.cache.fetchData(query);
        if (stored) {
            return stored;
        }
        else {
            subjects.push(this.handleQuery(query));
            return new QueryController(subjects);
        }
    };
    QueryHandlerService.prototype.ahupuaaSearch = function () {
        // let res: QueryResults = {
        //   handle: this.handleGen.getHandle(),
        //   dataStream: new Observable<QueryResponse>()
        // };
        var subjects = [];
        //need to do something to handle too long queries
        var query = "{'$and':[{'name':{'$in':['TEST_Ahupuaa']}}]}";
        var stored = this.cache.fetchData(query);
        if (stored) {
            return stored;
        }
        else {
            subjects.push(this.handleQuery(query));
            return new QueryController(subjects);
        }
    };
    //handle features separately to optimize cache catches for subset queries
    QueryHandlerService.prototype.siteDateSearch = function (locations, filterQuery) {
        // let res: QueryResults = {
        //   handle: this.handleGen.getHandle(),
        //   dataStream: new Observable<QueryResponse>()
        // };
        var subjects = [];
        var query;
        query = "{'$and': [{'name':{'$in':['TEST_Site_Date_Geochem']}, 'value.location': {'$in':" + JSON.stringify(locations) + "}}" + filterQuery + "] }";
        // pull all site_date_geochem
        var stored = this.cache.fetchData(query);
        if (stored) {
            return stored;
        }
        else {
            subjects.push(this.handleQuery(query));
            return new QueryController(subjects);
        }
    };
    QueryHandlerService.prototype.microbeSearch = function (locations, filterQuery) {
        // let res: QueryResults = {
        //   handle: this.handleGen.getHandle(),
        //   dataStream: new Observable<QueryResponse>()
        // };
        var subjects = [];
        var query;
        query = "{'$and': [{'name':{'$in':['TEST_Microbes']}, 'value.id': {'$in':" + JSON.stringify(locations) + "}}" + filterQuery + "] }";
        // pull all site_date_geochem
        var stored = this.cache.fetchData(query);
        if (stored) {
            return stored;
        }
        else {
            subjects.push(this.handleQuery(query));
            return new QueryController(subjects);
        }
    };
    QueryHandlerService.prototype.cfuSearch = function (locations, filterQuery) {
        var subjects = [];
        var query;
        query = "{'$and': [{'name':{'$in':['TEST_CFU']}, 'value.id': {'$in':" + JSON.stringify(locations) + "}}" + filterQuery + "] }";
        var stored = this.cache.fetchData(query);
        if (stored) {
            return stored;
        }
        else {
            subjects.push(this.handleQuery(query));
            return new QueryController(subjects);
        }
    };
    QueryHandlerService.prototype.qpcrSearch = function (microbes, filterQuery) {
        var subjects = [];
        var results = [];
        var cachedQueries = [];
        var query;
        var cachedStatus = false;
        if (microbes.length > 100) {
            while (microbes.length) {
                var sliced = microbes.slice(0, 100);
                var newQuery = "{'$and': [{'name':{'$in':['TEST_Fem_A']}, 'value.sample_replicate': {'$in':" + JSON.stringify(sliced) + "}}" + filterQuery + "] }";
                cachedQueries.push(newQuery);
                subjects.push(this.handleQuery(newQuery));
                microbes.splice(0, 100);
            }
        }
        else {
            query = "{'$and': [{'name':{'$in':['TEST_Fem_A']}, 'value.sample_replicate': {'$in':" + JSON.stringify(microbes) + "}}" + filterQuery + "] }";
            cachedQueries.push(query);
            subjects.push(this.handleQuery(query));
        }
        if (cachedQueries.length > 1) {
            for (var i = 0; i < subjects.length; i++) {
                var stored = this.cache.fetchData(cachedQueries[i]);
                if (stored.data.length)
                    cachedStatus = true;
                results.push(stored);
            }
        }
        else if (cachedQueries.length === 1) {
            var stored = this.cache.fetchData(query);
            if (stored.data.length)
                cachedStatus = true;
            results.push(stored);
        }
        if (cachedStatus) {
            return results;
        }
        return new QueryController(subjects);
    };
    QueryHandlerService.prototype.getAllRecords = function () {
        // let res: QueryResults = {
        //   handle: this.handleGen.getHandle(),
        //   dataStream: new Observable<QueryResponse>()
        // };
        var subjects = [];
        //need to do something to handle too long queries
        var query = "{'$and':[{'name':{'$in':['TEST_Micro_Requests']}}]}";
        var stored = this.cache.fetchData(query);
        if (stored) {
            return stored;
        }
        else {
            subjects.push(this.handleQuery(query));
            return new QueryController(subjects);
        }
    };
    // return the populated subjects array
    // divideQuery(arrayToDivide, subjects, queryStringStart, queryStringEnd) {
    //   return subjects;
    // }
    //deal with case where same query running multiple times before complete
    QueryHandlerService.prototype.handleQuery = function (query) {
        var _this = this;
        var dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ status: null, data: [] });
        var stored = this.cache.fetchData(query);
        var offset;
        var complete;
        if (stored == null) {
            offset = 0;
            complete = false;
            //no entry so create entry
            this.cache.createEntry(query);
        }
        else {
            //issue with retreival, should always pull from first item with no specified range
            if (stored.range[0] != 0) {
                throw new Error("Unexpected error occured in cache retreival: data retreived did not start at 0");
            }
            offset = stored.range[1];
            complete = stored.complete;
            var response = {
                status: {
                    status: 200,
                    error: false,
                    loadedResults: stored.data.length,
                    finished: stored.complete
                },
                data: stored.data
            };
            dataStream.next(response);
        }
        //if cache has all the data already no need to execute a query
        if (!complete) {
            var dataController_1 = this.querySubjectMap[query];
            //check if query already executing
            if (dataController_1 == undefined) {
                dataController_1 = {
                    data: this.requestDriver(query, offset),
                    observers: 0
                };
                this.querySubjectMap[query] = dataController_1;
            }
            //increment the number of observers
            dataController_1.observers++;
            //indicate if query completed
            var complete_1 = false;
            //mirror dataController's data to this instance's dataStream
            var controllerSub_1 = dataController_1.data.subscribe(function (data) {
                dataStream.next(data);
            }, function (error) {
                complete_1 = true;
                //is this the right syntax? Documentation is weird, shouldn't ever happen anyway
                dataStream.error(error);
            }, function () {
                complete_1 = true;
                dataStream.complete();
            });
            var cleanup = function () {
                //if canceled or errored then unsubscribe, otherwise no need
                if (!complete_1) {
                    controllerSub_1.unsubscribe();
                }
                if (--dataController_1.observers == 0) {
                    //if canceled or errored and last observer, cancel the query's data stream (no need to get the rest of the data, no one's using it)
                    //if complete then the data stream has already been completed/errored out
                    if (!complete_1) {
                        dataController_1.data.complete();
                    }
                    //no more observers, delete mapping
                    delete _this.querySubjectMap[query];
                }
            };
            //when dataStream completes or errors out run cleanup
            dataStream.subscribe(null, cleanup, cleanup);
        }
        return dataStream;
    };
    //drives database request for query
    //assumes that cache data timeout set to a sufficiently long time so data doesn't expire during retreival (and that timeout reset conditions are set reasonably so data before offset isn't removed)
    //if these conditions aren't met then the cache will throw an error on insertion (if preceding data has been cleared)
    QueryHandlerService.prototype.requestDriver = function (query, offset) {
        var _this = this;
        var dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var qGen = this.query(query, offset);
        var queryHandle = qGen.next().value;
        var cancel = function () {
            qGen.next(true);
        };
        //query may be cancelled by calling complete() on dataStream, listen for this and cancel
        var canceller = dataStream.subscribe(null, null, cancel);
        var completeDataStream = function () {
            //unsubscribe from canceller so not trying to cancel completed query
            canceller.unsubscribe();
            //complete dataStream
            dataStream.complete();
        };
        //if hasnt been started start the query driver and listen in
        //query driver only ends if no more listeners
        var handler = function (response) {
            //query succeeded, cache data and continue
            if (!response.status.error) {
                //insert data into cache\
                var data = {
                    data: response.data,
                    complete: response.status.finished
                };
                _this.cache.setData(query, data, offset);
                offset += data.data.length;
                var next = qGen.next();
                if (next.value == undefined) {
                    throw new Error("An unexpected error has occured while handling the query: handler called after generator completed");
                }
                //generator complete or canceled
                if (next.done) {
                    //if completed, push data
                    if (next.value) {
                        dataStream.next(response);
                        completeDataStream();
                    }
                    //if canceled then don't push data, subject has been completed
                }
                //otherwise still more data to be had, push data and keep going
                else {
                    //push data to stream
                    dataStream.next(response);
                    //execute next subquery
                    _this.recursivePromise(next.value, handler);
                }
            }
            //query failed
            else {
                //get next generator value to check if dataStream has already been canceled
                var next = qGen.next();
                if (next.value == undefined) {
                    throw new Error("An unexpected error has occured while handling the query: handler called after generator completed");
                }
                //generator has not completed or it has completed but not been canceled, push error to dataStream and complete
                if (!next.done || next.value) {
                    dataStream.next(response);
                    completeDataStream();
                }
                //otherwise dataStream has been canceled already, just ignore and exit
            }
        };
        this.recursivePromise(queryHandle, handler);
        return dataStream;
    };
    QueryHandlerService.prototype.recursivePromise = function (promise, handler) {
        promise.then(function (data) {
            handler(data);
        });
    };
    var QueryHandlerService_1;
    //static readonly DEFAULT_PAGE = 10;
    QueryHandlerService.MIN_QUERY = 100;
    //limit to half API max, seems to be more responsive if not maxing out
    QueryHandlerService.MAX_QUERY = 5000;
    QueryHandlerService.MAX_RESULTS = 100000;
    QueryHandlerService.ENABLE_FAST_QUERY = true;
    QueryHandlerService.RAMP_FUNCT = QueryHandlerService_1.ENABLE_FAST_QUERY ? function (start) {
        var acc, size;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = start;
                    size = QueryHandlerService_1.MIN_QUERY;
                    _a.label = 1;
                case 1:
                    if (!(acc <= this.MAX_RESULTS)) return [3 /*break*/, 3];
                    return [4 /*yield*/, size];
                case 2:
                    _a.sent();
                    size = Math.min(size * 2, QueryHandlerService_1.MAX_QUERY);
                    acc += size;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    } : function (start) {
        var acc;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = start;
                    _a.label = 1;
                case 1:
                    if (!(acc <= this.MAX_RESULTS)) return [3 /*break*/, 3];
                    return [4 /*yield*/, 10000];
                case 2:
                    _a.sent();
                    acc += 10000;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    QueryHandlerService = QueryHandlerService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_spatial_service__WEBPACK_IMPORTED_MODULE_3__["SpatialService"], _query_cache_service__WEBPACK_IMPORTED_MODULE_4__["QueryCacheService"], _filter_manager_service__WEBPACK_IMPORTED_MODULE_5__["FilterManagerService"]])
    ], QueryHandlerService);
    return QueryHandlerService;
}());

var QueryController = /** @class */ (function () {
    function QueryController(querySubjects) {
        var _this = this;
        this.querySubjects = querySubjects;
        this.queryOutput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var completed = 0;
        var loadedResults = 0;
        var i;
        for (i = 0; i < querySubjects.length; i++) {
            querySubjects[i].subscribe(function (response) {
                //ignore initial value pushed if no cache data
                if (response.status != null) {
                    if (response.data != null) {
                        loadedResults += response.data.length;
                    }
                    var outStatus = {
                        status: response.status.status,
                        error: response.status.error,
                        message: response.status.message,
                        loadedResults: loadedResults,
                        finished: false,
                    };
                    var outResponse = {
                        status: outStatus,
                        data: response.data
                    };
                    if (response.status.finished) {
                        completed++;
                    }
                    //if all completed set query status to finished
                    if (completed == querySubjects.length || (querySubjects.length > 1 && completed == querySubjects.length - 1)) {
                        outStatus.finished = true;
                    }
                    _this.queryOutput.next(outResponse);
                    //check if failed and cancel query if it did (stop if any part of query fails)
                    if (response.status.error) {
                        _this.cancel();
                    }
                }
            }, function () {
                //something went wrong, throw error in output and cancel query
                _this.queryOutput.error("An error has occurred while retreiving data");
                //remove this subscription from subscription list since already completed (stop cleanup from being performed on cancel)
                _this.querySubjects[i] = null;
                _this.cancel();
            }, function () {
                //remove this subscription from subscription list since already completed (stop cleanup from being performed on cancel)
                _this.querySubjects[i] = null;
            });
        }
    }
    QueryController.prototype.getQueryObserver = function () {
        return this.queryOutput.asObservable();
    };
    QueryController.prototype.cancel = function () {
        var i;
        for (i = 0; i < this.querySubjects.length; i++) {
            var sub = this.querySubjects[i];
            //if null then already completed, complete any still running subscriptions
            if (sub != null) {
                sub.complete();
            }
        }
        //complete output stream
        this.queryOutput.complete();
    };
    return QueryController;
}());



/***/ }),

/***/ "./src/app/_services/spatial.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/spatial.service.ts ***!
  \**********************************************/
/*! exports provided: SpatialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpatialService", function() { return SpatialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/_services/config.service.ts");



//import { MessageService } from './message.service';



var SpatialService = /** @class */ (function () {
    function SpatialService(http) {
        this.http = http;
    }
    SpatialService.prototype.search = function (query, limit, offset) {
        //let query = "[{'$and':[{'value.loc': {$geoWithin: {'$geometry':" + JSON.stringify(geometry).replace(/"/g,'\'') + "}}}]}, {$count: 'test'}]";
        // interface ResponseResults {
        //  result: any
        // }
        //console.log(AppConfig.settings.aad.tenant);
        var url = _config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].settings.aad.tenant + "/search/v2/data?q=" + encodeURI(query) + "&limit=" + limit.toString() + "&offset=" + offset.toString();
        //url = "https://agaveauth.its.hawaii.edu/meta/v2/data/3988988121641119255-242ac1111-0001-012"
        //console.log(url);
        //.set("Authorization", "Bearer " + currentUser.access_token)
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set("Content-Type", "application/x-www-form-urlencoded");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .append("method", "GET")
            .append("lifetime", "3600")
            .append("maxUses", "10");
        var options = {
            headers: head,
            observe: "response",
        };
        //console.log("stuff");
        // let response = this.http.post<any>(url, options)
        //  .pipe(
        //   retry(3),
        //   map((data: any) => {
        //     console.log(data);
        //     return data.body.result;
        //   }),
        //   catchError((e: HttpErrorResponse) => {
        //     console.log(e);
        //     let err: {
        //       message: string,
        //       status: number
        //     };
        //     err = typeof e == "string" ? {
        //       message: e,
        //       status: 500
        //     } : {
        //       message: e.message,
        //       status: e.status
        //     }
        //     //e is just being returned as a string for some reason???
        //     //if this is the case set up manually and just assume status 500
        //     return throwError(err);
        //   })
        // );
        var response = this.http.get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.body.result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            var err;
            err = typeof e == "string" ? {
                message: e,
                status: 500
            } : {
                message: e.message,
                status: e.status
            };
            //e is just being returned as a string for some reason???
            //if this is the case set up manually and just assume status 500
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
        return response.toPromise();
    };
    SpatialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SpatialService);
    return SpatialService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");














var appRoutes = [
    {
        path: 'map',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>\n\n<!-- main app container -->\n\n<div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\" style=\"padding-bottom: 20px\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n        <!-- <div>\n            <a href=\"http://ikewai.org\"><img height=\"75px\" src=\"./assets/logo_ike_wai.jpg\"/></a>\n            <a href=\"http://hawaii.edu/epscor\"><img height=\"75px\" src=\"./assets/EPSCoR-Logo.png\"/></a>\n            <a href=\"http://hawaii.edu\"><img height=\"75px\" src=\"./assets/uh-logo.png\"/></a>\n            <a href=\"http://nsf.gov\"><img height=\"75px\" src=\"./assets/nsf-logo.png\"/></a>\n        </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/config.service */ "./src/app/_services/config.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'ng-agave-login';
        this.tenant = _services_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].settings.aad.tenant;
        this.accessToken = _services_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].settings.aad.accessToken;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initializeApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/config.service */ "./src/app/_services/config.service.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _asymmetrik_ngx_leaflet_draw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet-draw */ "./node_modules/@asymmetrik/ngx-leaflet-draw/dist/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular2_query_builder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-query-builder */ "./node_modules/angular2-query-builder/dist/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
























function initializeApp(appConfig) {
    return function () { return appConfig.load(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogOverviewExampleDialog"]
            ],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogOverviewExampleDialog"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_17__["LeafletModule"].forRoot(),
                _asymmetrik_ngx_leaflet_draw__WEBPACK_IMPORTED_MODULE_18__["LeafletDrawModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_19__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                angular2_query_builder__WEBPACK_IMPORTED_MODULE_20__["QueryBuilderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"]
            ],
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_16__["AppConfig"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: initializeApp,
                    deps: [_services_config_service__WEBPACK_IMPORTED_MODULE_16__["AppConfig"]], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    position: absolute;\n    top: 60px;\n    bottom: 60px;\n    left: 0;\n    right: 0;\n  }\n  \n  .example-sidenav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 200px;\n    background: rgba(255, 0, 0, 0.5);\n  }\n  \n  .example-header {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  .example-footer {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7R0FDVjs7RUFFRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixpQ0FBaUM7R0FDbEM7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0dBQ1YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgYm90dG9tOiA2MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<div class=\"mat-app-background basic-container\">\n  <app-sidenav>loading</app-sidenav>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");






//import { AuthenticationService } from '@/_services';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    };
    Object.defineProperty(DashboardComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            _this.loading = false;
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"width: 100%; display: flex; justify-content: center;\">Sample Request Form</h1>\n<!-- <div *ngIf=\"data.length\" mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div> -->\n<div *ngIf=\"data.length\" style=\"display: flex; flex-direction: column; padding: 10px; margin-bottom: 10px\">\n  <mat-dialog-content mat-dialog-action style=\"display: flex; align-items: center; flex-direction: column;\">\n    <mat-form-field style=\"width: 75%\">\n      <label>Full Name</label><input matInput type=\"text\">\n    </mat-form-field>\n    <mat-form-field style=\"width: 75%\">\n      <label>Company/Affiliation</label><input matInput type=\"text\">\n    </mat-form-field>\n    <mat-form-field style=\"width: 75%; margin-bottom: 35px\">\n      <label>Email</label><input matInput type=\"text\">\n    </mat-form-field>\n    <h6 style=\"width: 100%; display: flex; justify-content: center; margin-bottom: 20px\">Sample Specifications</h6>\n    <div style=\"width: 50%; display: grid; grid-template-columns: 1fr 1fr; margin-bottom: 60px; justify-items: center;\">\n      <span><input type=\"checkbox\" [checked]=true><label>&nbsp;&nbsp;16s</label></span>\n      <span><input type=\"checkbox\" [checked]=true><label>&nbsp;&nbsp;WGS</label></span>\n      <span><input type=\"checkbox\" [checked]=true><label>&nbsp;&nbsp;qPCR</label></span>\n      <span><input type=\"checkbox\" [checked]=true><label>&nbsp;&nbsp;Cultured Data</label></span>\n    </div>\n    <h6 style=\"width: 100%; display: flex; justify-content: center; margin-bottom: 20px\">All Requested Samples ({{ data.length }})</h6>\n    <div style=\"width: 100%; margin-left: 20px; display: grid; grid-template-columns: 1fr 1fr 1fr;\">\n      <div *ngFor=\"let item of data\">\n        <div><input type=\"checkbox\" [checked]=true>&nbsp;&nbsp;{{ item.value.id }}</div>\n      </div>\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-content style=\"margin-top: 20px; width: 100%; display: flex; justify-content: center; align-items: center\" mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n  </mat-dialog-content>\n</div>\n<div *ngIf=\"!data.length\" style=\"display: flex; flex-direction: column; padding: 10px; margin-bottom: 10px\" mat-dialog-actions>\n  <p>No Samples Selected</p>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-left {\n    position: absolute;\n    left: 2%\n  }\n\n.header-right {\n    position: absolute;\n    right: 1%;\n    line-height: 0.8;\n    font-size: normal !important;\n    cursor: pointer\n  }\n\n.mat-toolbar {\n    background: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtHQUNUOztBQUVIO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGVBQWU7R0FDaEI7O0FBRUg7SUFDSSx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIlXG4gIH1cblxuLmhlYWRlci1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxJTtcbiAgICBsaW5lLWhlaWdodDogMC44O1xuICAgIGZvbnQtc2l6ZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyXG4gIH1cblxuLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"alert\" class=\"d-flex justify-content-between alert alert-warning alert-dismissible fade position-absolute hide\" style=\"top: 0; z-index: 99999999; width: 100%;\" role=\"alert\">\n    <strong>Change Detected!</strong> Please submit query again to link applied filters.\n    <button (click)=\"removeAlert()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div> -->\n<mat-toolbar class=\"example-header\" style=\"margin-top: 10px; width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center;\">\n  <div class=\"header-left\" style=\"display: flex; flex-direction: column;\">\n    <h3 style=\"font-size: 30px;\">Search Hawai‘i Microbial Water Dataset</h3>\n    <span style=\"font-size: 16px\">Move and Zoom the map to find data by location. Hover over the GPS point for more information.</span>\n  </div>\n  <div class=\"header-right\" (click)=\"tempLogout()\" style=\"font-size: 16px\">Sign out</div>\n</mat-toolbar>\n<app-map></app-map>\n<div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router) {
        this.route = route;
        this.router = router;
        this.users = [];
    }
    HomeComponent.prototype.removeAlert = function () {
        document.getElementById('alert').className = "d-flex justify-content-between alert alert-warning alert-dismissible fade position-absolute hide";
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.tempLogout = function () {
        alert('bypass auth for development');
        localStorage.removeItem('user');
        return this.router.navigate(['/']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>Agave Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");






//import { AuthenticationService } from '@/_services';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm.value.username === "tester" && this.loginForm.value.password === "tester") { // remove this for prod
            alert('bypass auth for development');
            localStorage.user = true;
            this.router.navigate([this.returnUrl]);
            return this.loading = false;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            _this.loading = false;
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.map {\n    width: 100%;\n    height: 500px;\n}\n\n.mapZoomed {\n    width: 100%;\n    height: 250px;\n}\n\n.header {\n    position:-webkit-sticky;\n    position:sticky;\n    top: 0 ;\n    background-color: gray;\n}\n\n.btn-primary:focus {\n    background-color: forestgreen;\n}\n\n::ng-deep .marker-cluster-small-sites {\n    background-color: rgba(252,146,114, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-small-sites div {\n    background-color: rgba(251,106,74, 0.8) !important;\n}\n\n::ng-deep .marker-cluster-medium-sites {\n    background-color: rgba(239,59,44, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-medium-sites div {\n    background-color: rgba(203,24,29, 0.8) !important;\n}\n\n::ng-deep .marker-cluster-large-sites {\n    background-color: rgba(165,15,21, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-large-sites div {\n    background-color: rgba(103,0,13, 0.8) !important;\n}\n\n::ng-deep .marker-cluster-small-microbes {\n    background-color: rgba(158, 202, 225, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-small-microbes div {\n    background-color: rgba(107, 174, 214, 0.8) !important;\n}\n\n::ng-deep .marker-cluster-medium-microbes {\n    background-color: rgba(66, 146, 198, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-medium-microbes div {\n    background-color: rgba(33, 113, 181, 0.8) !important;\n}\n\n::ng-deep .marker-cluster-large-microbes {\n    background-color: rgba(8, 81, 156, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-large-microbes div {\n    background-color: rgba(8, 48, 107, 0.8) !important;\n}\n\n::ng-deep .marker-cluster-small-waterQualitySites {\n    background-color: rgba(161,217,155, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-small-waterQualitySites div {\n    background-color: rgba(116,196,118, 0.8) !important;\n}\n\n::ng-deep .marker-cluster-medium-waterQualitySites {\n    background-color: rgba(65,171,93, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-medium-waterQualitySites div {\n    background-color: rgba(35,139,69, 0.8) !important;\n}\n\n::ng-deep .marker-cluster-large-waterQualitySites {\n    background-color: rgba(0,109,44, 0.8) !important;\n    color: white !important;\n}\n\n::ng-deep .marker-cluster-large-waterQualitySites div {\n    background-color: rgba(0,68,27, 0.8) !important;\n}\n\n::ng-deep .entry-link {\n    color: #0000EE;\n    text-decoration: underline;\n    cursor: pointer;\n    z-index: 10000;\n}\n\n.highlight {\n    background-color: #ccff00;\n}\n\n::ng-deep .grid {\n    display: grid;\n    grid-template-areas:\n    \"bl bl bl ht ht ht ht\"\n    \"bl bl bl s1 s2 s2 s3\"\n    \"hl t1 t1 c1 c2 c2 c3\"\n    \"hl t2 t2 c4 c5 c5 c6\"\n    \"hl t3 t3 c7 c8 c8 c9\";\n    grid-gap: 1px;\n    padding: 5px 20px 5px 5px;\n    width: 200px;\n    height: 125px;\n    border-radius: 10%;\n    /* grid-auto-rows: 6%;\n    grid-auto-columns: 8%; */\n    grid-auto-rows: 16%;\n    grid-auto-columns: 14%;\n    background-color: rgba(0, 0, 0, 0.15);\n    text-shadow: -1px 0 5px white, 0 1px 5px white,\n    1px 0 5px white, 0 -1px 5px white;\n    font-weight: bold;\n    color: black;\n}\n\n::ng-deep .grid > div {\n    /* background-color: rgba(255, 255, 255, 0.8); */\n    text-align: center;\n    line-height: 12px;\n    padding: 0px;\n    font-size: 14px;\n    /* width: 70px;\n    height: 70px; */\n}\n\n::ng-deep .color-circle {\n    border-radius: 50%;\n    height: 14px;\n    width: 14px;\n    margin: 0 auto;\n    box-shadow: -1px 0 5px white, 0 1px 5px white,\n    1px 0 5px white, 0 -1px 5px white;\n}\n\n::ng-deep .color-1 {\n    background-color: rgba(107, 174, 214,1);\n}\n\n::ng-deep .color-2 {\n    background-color: rgba(33, 113, 181, 1);\n}\n\n::ng-deep .color-3 {\n    background-color: rgba(8, 48, 107, 1)\n}\n\n::ng-deep .color-4 {\n    background-color: rgba(251,106,74, 1);\n}\n\n::ng-deep .color-5 {\n    background-color: rgba(203,24,29, 1);\n}\n\n::ng-deep .color-6 {\n    background-color: rgba(103,0,13, 1);\n}\n\n::ng-deep .color-7 {\n    background-color: rgba(116,196,118, 1);\n}\n\n::ng-deep .color-8 {\n    background-color: rgba(35,139,69, 1);\n}\n\n::ng-deep .color-9 {\n    background-color: rgba(0,68,27, 1);\n}\n\n::ng-deep .bl {\n    grid-area: bl;\n    font-size: 16px !important;\n    text-shadow: -1px 0 5px black, 0 1px 5px black,\n    1px 0 5px black, 0 -1px 5px black !important;\n    color: white !important;\n}\n\n::ng-deep .ht {\n    grid-area: ht;\n}\n\n::ng-deep .hl {\n    grid-area: hl;\n    -webkit-writing-mode: vertical-rl;\n        -ms-writing-mode: tb-rl;\n            writing-mode: vertical-rl;\n}\n\n::ng-deep .t1 {\n    grid-area: t1;\n}\n\n::ng-deep .t2 {\n    grid-area: t2;\n}\n\n::ng-deep .t3 {\n    grid-area: t3;\n}\n\n::ng-deep .s1 {\n    grid-area: s1;\n}\n\n::ng-deep .s2 {\n    grid-area: s2;\n}\n\n::ng-deep .s3 {\n    grid-area: s3;\n}\n\n::ng-deep .c1 {\n    grid-area: c1;\n}\n\n::ng-deep .c2 {\n    grid-area: c2;\n}\n\n::ng-deep .c3 {\n    grid-area: c3;\n}\n\n::ng-deep .c4 {\n    grid-area: c4;\n}\n\n::ng-deep .c5 {\n    grid-area: c5;\n}\n\n::ng-deep .c6 {\n    grid-area: c6;\n}\n\n::ng-deep .c7 {\n    grid-area: c7;\n    margin-top: 15px;\n}\n\n::ng-deep .c8 {\n    grid-area: c8;\n    margin-top: 15px;\n}\n\n::ng-deep .c9 {\n    grid-area: c9;\n    margin-top: 15px;\n}\n\n.animated {\n    padding-top:95px;\n    margin-bottom:60px;\n    -webkit-animation-duration: 2s;\n    animation-duration: 2s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n }\n\n@-webkit-keyframes fadeInLeft {\n    0% {\n       opacity: 0;\n       -webkit-transform: translateX(-20px);\n    }\n    100% {\n       opacity: 1;\n       -webkit-transform: translateX(0);\n    }\n }\n\n@keyframes fadeInLeft {\n    0% {\n       opacity: 0;\n       -webkit-transform: translateX(-20px);\n               transform: translateX(-20px);\n    }\n    100% {\n       opacity: 1;\n       -webkit-transform: translateX(0);\n               transform: translateX(0);\n    }\n }\n\n.fadeInLeft {\n -webkit-animation-name: fadeInLeft;\n animation-name: fadeInLeft;\n }\n\n.lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n\n.lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid #000;\n    border-radius: 50%;\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: rgb(161, 72, 72) transparent transparent transparent;\n  }\n\n.lds-ring div:nth-child(1) {\n    -webkit-animation-delay: -0.45s;\n            animation-delay: -0.45s;\n  }\n\n.lds-ring div:nth-child(2) {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s;\n  }\n\n.lds-ring div:nth-child(3) {\n    -webkit-animation-delay: -0.15s;\n            animation-delay: -0.15s;\n  }\n\n@-webkit-keyframes lds-ring {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n\n@keyframes lds-ring {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxvREFBb0Q7SUFDcEQsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksbURBQW1EO0NBQ3REOztBQUVEO0lBQ0ksa0RBQWtEO0lBQ2xELHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGtEQUFrRDtDQUNyRDs7QUFFRDtJQUNJLGtEQUFrRDtJQUNsRCx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxpREFBaUQ7Q0FDcEQ7O0FBSUQ7SUFDSSxzREFBc0Q7SUFDdEQsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksc0RBQXNEO0NBQ3pEOztBQUVEO0lBQ0kscURBQXFEO0lBQ3JELHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLHFEQUFxRDtDQUN4RDs7QUFFRDtJQUNJLG1EQUFtRDtJQUNuRCx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxtREFBbUQ7Q0FDdEQ7O0FBSUQ7SUFDSSxvREFBb0Q7SUFDcEQsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksb0RBQW9EO0NBQ3ZEOztBQUVEO0lBQ0ksa0RBQWtEO0lBQ2xELHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGtEQUFrRDtDQUNyRDs7QUFFRDtJQUNJLGlEQUFpRDtJQUNqRCx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxnREFBZ0Q7Q0FDbkQ7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksY0FBYztJQUNkOzs7OzsyQkFLdUI7SUFDdkIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQjs2QkFDeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEM7c0NBQ2tDO0lBQ2xDLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaURBQWlEO0lBQ2pELG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQjtvQkFDZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Y7c0NBQ2tDO0NBQ3JDOztBQUVEO0lBQ0ksd0NBQXdDO0NBQzNDOztBQUNEO0lBQ0ksd0NBQXdDO0NBQzNDOztBQUNEO0lBQ0kscUNBQXFDO0NBQ3hDOztBQUNEO0lBQ0ksc0NBQXNDO0NBQ3pDOztBQUNEO0lBQ0kscUNBQXFDO0NBQ3hDOztBQUNEO0lBQ0ksb0NBQW9DO0NBQ3ZDOztBQUNEO0lBQ0ksdUNBQXVDO0NBQzFDOztBQUNEO0lBQ0kscUNBQXFDO0NBQ3hDOztBQUNEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQjtpREFDNkM7SUFDN0Msd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxrQ0FBMEI7UUFBMUIsd0JBQTBCO1lBQTFCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtDQUNwQjs7QUFFQTtJQUNHLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsMEJBQTBCO0VBQzVCOztBQUVEO0lBQ0c7T0FDRyxXQUFXO09BQ1gscUNBQXFDO0tBQ3ZDO0lBQ0Q7T0FDRyxXQUFXO09BQ1gsaUNBQWlDO0tBQ25DO0VBQ0g7O0FBRUQ7SUFDRztPQUNHLFdBQVc7T0FDWCxxQ0FBNkI7ZUFBN0IsNkJBQTZCO0tBQy9CO0lBQ0Q7T0FDRyxXQUFXO09BQ1gsaUNBQXlCO2VBQXpCLHlCQUF5QjtLQUMzQjtFQUNIOztBQUVEO0NBQ0EsbUNBQW1DO0NBQ25DLDJCQUEyQjtFQUMxQjs7QUFFRDtJQUNHLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7R0FDZDs7QUFDRDtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUVBQStEO1lBQS9ELCtEQUErRDtJQUMvRCxtRUFBbUU7R0FDcEU7O0FBQ0Q7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0dBQ3pCOztBQUNEO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtHQUN4Qjs7QUFDRDtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7R0FDekI7O0FBQ0Q7SUFDRTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7S0FDekI7SUFDRDtNQUNFLGtDQUEwQjtjQUExQiwwQkFBMEI7S0FDM0I7R0FDRjs7QUFQRDtJQUNFO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtLQUN6QjtJQUNEO01BQ0Usa0NBQTBCO2NBQTFCLDBCQUEwQjtLQUMzQjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4ubWFwWm9vbWVkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBwb3NpdGlvbjpzdGlja3k7XG4gICAgdG9wOiAwIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xufVxuXG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLXNtYWxsLXNpdGVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwxNDYsMTE0LCAwLjgpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItc21hbGwtc2l0ZXMgZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MSwxMDYsNzQsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXJrZXItY2x1c3Rlci1tZWRpdW0tc2l0ZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LDU5LDQ0LCAwLjgpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItbWVkaXVtLXNpdGVzIGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDMsMjQsMjksIDAuOCkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXJrZXItY2x1c3Rlci1sYXJnZS1zaXRlcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsMTUsMjEsIDAuOCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXJrZXItY2x1c3Rlci1sYXJnZS1zaXRlcyBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAzLDAsMTMsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuXG5cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItc21hbGwtbWljcm9iZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAyMDIsIDIyNSwgMC44KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLXNtYWxsLW1pY3JvYmVzIGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDE3NCwgMjE0LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItbWVkaXVtLW1pY3JvYmVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCAxNDYsIDE5OCwgMC44KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLW1lZGl1bS1taWNyb2JlcyBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDExMywgMTgxLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItbGFyZ2UtbWljcm9iZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgODEsIDE1NiwgMC44KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLWxhcmdlLW1pY3JvYmVzIGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA0OCwgMTA3LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cblxuXG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLXNtYWxsLXdhdGVyUXVhbGl0eVNpdGVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwyMTcsMTU1LCAwLjgpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItc21hbGwtd2F0ZXJRdWFsaXR5U2l0ZXMgZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNiwxOTYsMTE4LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItbWVkaXVtLXdhdGVyUXVhbGl0eVNpdGVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LDE3MSw5MywgMC44KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLW1lZGl1bS13YXRlclF1YWxpdHlTaXRlcyBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsMTM5LDY5LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItbGFyZ2Utd2F0ZXJRdWFsaXR5U2l0ZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwxMDksNDQsIDAuOCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXJrZXItY2x1c3Rlci1sYXJnZS13YXRlclF1YWxpdHlTaXRlcyBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCw2OCwyNywgMC44KSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmVudHJ5LWxpbmsge1xuICAgIGNvbG9yOiAjMDAwMEVFO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLmhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmYwMDtcbn1cblxuOjpuZy1kZWVwIC5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJibCBibCBibCBodCBodCBodCBodFwiXG4gICAgXCJibCBibCBibCBzMSBzMiBzMiBzM1wiXG4gICAgXCJobCB0MSB0MSBjMSBjMiBjMiBjM1wiXG4gICAgXCJobCB0MiB0MiBjNCBjNSBjNSBjNlwiXG4gICAgXCJobCB0MyB0MyBjNyBjOCBjOCBjOVwiO1xuICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgLyogZ3JpZC1hdXRvLXJvd3M6IDYlO1xuICAgIGdyaWQtYXV0by1jb2x1bW5zOiA4JTsgKi9cbiAgICBncmlkLWF1dG8tcm93czogMTYlO1xuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxNCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAwIDVweCB3aGl0ZSwgMCAxcHggNXB4IHdoaXRlLFxuICAgIDFweCAwIDVweCB3aGl0ZSwgMCAtMXB4IDVweCB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbjo6bmctZGVlcCAuZ3JpZCA+IGRpdiB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8qIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDsgKi9cbn1cblxuOjpuZy1kZWVwIC5jb2xvci1jaXJjbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm94LXNoYWRvdzogLTFweCAwIDVweCB3aGl0ZSwgMCAxcHggNXB4IHdoaXRlLFxuICAgIDFweCAwIDVweCB3aGl0ZSwgMCAtMXB4IDVweCB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5jb2xvci0xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNywgMTc0LCAyMTQsMSk7XG59XG46Om5nLWRlZXAgLmNvbG9yLTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDExMywgMTgxLCAxKTtcbn1cbjo6bmctZGVlcCAuY29sb3ItMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA0OCwgMTA3LCAxKVxufVxuOjpuZy1kZWVwIC5jb2xvci00IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MSwxMDYsNzQsIDEpO1xufVxuOjpuZy1kZWVwIC5jb2xvci01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMywyNCwyOSwgMSk7XG59XG46Om5nLWRlZXAgLmNvbG9yLTYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAzLDAsMTMsIDEpO1xufVxuOjpuZy1kZWVwIC5jb2xvci03IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNiwxOTYsMTE4LCAxKTtcbn1cbjo6bmctZGVlcCAuY29sb3ItOCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwxMzksNjksIDEpO1xufVxuOjpuZy1kZWVwIC5jb2xvci05IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsNjgsMjcsIDEpO1xufVxuXG46Om5nLWRlZXAgLmJsIHtcbiAgICBncmlkLWFyZWE6IGJsO1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgNXB4IGJsYWNrLCAwIDFweCA1cHggYmxhY2ssXG4gICAgMXB4IDAgNXB4IGJsYWNrLCAwIC0xcHggNXB4IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuaHQge1xuICAgIGdyaWQtYXJlYTogaHQ7XG59XG5cbjo6bmctZGVlcCAuaGwge1xuICAgIGdyaWQtYXJlYTogaGw7XG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbn1cblxuOjpuZy1kZWVwIC50MSB7XG4gICAgZ3JpZC1hcmVhOiB0MTtcbn1cblxuOjpuZy1kZWVwIC50MiB7XG4gICAgZ3JpZC1hcmVhOiB0Mjtcbn1cblxuOjpuZy1kZWVwIC50MyB7XG4gICAgZ3JpZC1hcmVhOiB0Mztcbn1cblxuOjpuZy1kZWVwIC5zMSB7XG4gICAgZ3JpZC1hcmVhOiBzMTtcbn1cblxuOjpuZy1kZWVwIC5zMiB7XG4gICAgZ3JpZC1hcmVhOiBzMjtcbn1cblxuOjpuZy1kZWVwIC5zMyB7XG4gICAgZ3JpZC1hcmVhOiBzMztcbn1cblxuOjpuZy1kZWVwIC5jMSB7XG4gICAgZ3JpZC1hcmVhOiBjMTtcbn1cblxuOjpuZy1kZWVwIC5jMiB7XG4gICAgZ3JpZC1hcmVhOiBjMjtcbn1cblxuOjpuZy1kZWVwIC5jMyB7XG4gICAgZ3JpZC1hcmVhOiBjMztcbn1cblxuOjpuZy1kZWVwIC5jNCB7XG4gICAgZ3JpZC1hcmVhOiBjNDtcbn1cblxuOjpuZy1kZWVwIC5jNSB7XG4gICAgZ3JpZC1hcmVhOiBjNTtcbn1cblxuOjpuZy1kZWVwIC5jNiB7XG4gICAgZ3JpZC1hcmVhOiBjNjtcbn1cblxuOjpuZy1kZWVwIC5jNyB7XG4gICAgZ3JpZC1hcmVhOiBjNztcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG46Om5nLWRlZXAgLmM4IHtcbiAgICBncmlkLWFyZWE6IGM4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbjo6bmctZGVlcCAuYzkge1xuICAgIGdyaWQtYXJlYTogYzk7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuIC5hbmltYXRlZCB7XG4gICAgcGFkZGluZy10b3A6OTVweDtcbiAgICBtYXJnaW4tYm90dG9tOjYwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gfVxuIFxuIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuIH1cbiBcbiBAa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xuICAgIDAlIHtcbiAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiB9XG4gXG4gLmZhZGVJbkxlZnQge1xuIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XG4gYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XG4gfSBcblxuIC5sZHMtcmluZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLmxkcy1yaW5nIGRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE2MSwgNzIsIDcyKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgfVxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XG4gIH1cbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gIH1cbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJpbmcge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"globalLoading\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 90%; position: absolute; z-index: 99999; overflow-y: hidden\"><div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div></div>\n<div class=\"container-fluid\">\n<div class=\"row\">\n    <div class=\"col-md-6\">\n      <div leaflet class=\"map pull-left\"\n        [leafletOptions]=\"options\"\n        (leafletMapMoveEnd)=\"onMove($event)\"\n        (leafletMapReady)=\"onMapReady($event)\" >\n      </div>\n    </div>\n    <div *ngIf=\"samplesFilterToggled\" class=\"col-md-6\">\n    <div *ngIf=\"metadata.length == 0 && !loading\" style=\"height:500px;\">\n      <h5>No Sample Site Results For Current Area.</h5>\n    </div>\n    <div *ngIf=\"metadata.length == 0 && loading\" style=\"height:500px;\">\n      <h5>Loading...</h5>\n    </div>\n    <div *ngIf=\"metadata.length > 0\" style=\"height:500px;\">\n    <h5>Sample Site Results {{filterData.length}}</h5>\n    <div style=\"overflow: auto; height:468px;\" class=\"table-responsive\">\n    <table  class=\"table row-border hover table-striped\">\n      <tr >\n          <th class='header'></th>\n          <th class='header'></th>\n          <th class='header'>Name</th>\n          <th class='header'>Watershed</th>\n          <th class='header'>Select</th>\n      </tr>\n      <tr *ngFor=\"let metadatum of filterData\">\n          <td >\n            <button id=\"linked-{{metadatum.value.microGPS_ID}}\" class=\"btn btn-primary\" type=\"button\" (click)=\"openLinkedPopup(metadatum)\">Find</button>\n          </td>\n          <td >\n            <button id=\"{{metadatum.value.microGPS_ID}}\" class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#location-modal\" (click)=\"openModalSite(metadatum)\">View</button>\n          </td>\n          <td width=\"40%\">\n            <span #entries>{{metadatum.value.location}}</span>\n          </td>\n          <td width=\"40%\">\n            <span #entries>{{metadatum.value.watershed}}</span>\n          </td>\n          <td width=\"5%\" style=\"text-align: center\">\n            <input (click)=\"selectSample($event, metadatum)\" type=\"checkbox\" [checked]=\"samplesMap[metadatum.value.id].checked\">\n          </td>\n        </tr>\n      </table>\n      </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"microbesFilterToggled\" class=\"col-md-6\">\n      <div *ngIf=\"microbeMetadata.length == 0\" style=\"height:500px;\">\n        <h5>No Microbe Results For Current Area.</h5>\n      </div>\n      <div *ngIf=\"microbeMetadata.length > 0\" style=\"height:500px;\">\n      <h5>Microbe Results {{microbeMetadata.length}}</h5>\n      <div style=\"overflow: auto; height:468px;\" class=\"table-responsive\">\n      <table  class=\"table row-border hover table-striped\">\n        <tr >\n            <th class='header'></th>\n            <th class='header'></th>\n            <th class='header'>Name</th>\n            <th class='header'>Site</th>\n            <th class='header'>Select</th>\n        </tr>\n        <tr *ngFor=\"let metadatum of microbeMetadata\">\n            <td >\n              <button id=\"linked-{{metadatum.value.microGPS_ID}}\" class=\"btn btn-primary\" type=\"button\" (click)=\"openLinkedPopup(metadatum)\">Find</button>\n            </td>\n            <td >\n              <button id=\"{{metadatum.value.microGPS_ID}}\" class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#location-modal\" (click)=\"openModalSite(metadatum)\">View</button>\n            </td>\n            <td width=\"40%\">\n              <span #entries>{{metadatum.value.sample_replicate}}</span>\n            </td>\n            <td width=\"40%\">\n              <span #entries>{{metadatum.value.site}}</span>\n            </td>\n            <td width=\"5%\" style=\"text-align: center\">\n              <input (click)=\"selectSample($event, metadatum)\" type=\"checkbox\" [checked]=\"samplesMap[metadatum.value.id].checked\">\n            </td>\n          </tr>\n        </table>\n        </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"cfuFilterToggled\" class=\"col-md-6\">\n      <div *ngIf=\"cfuMetadata.length == 0\" style=\"height:500px;\">\n        <h5>No Cultured Bacteria Results For Current Area.</h5>\n      </div>\n      <div *ngIf=\"cfuMetadata.length > 0\" style=\"height:500px;\">\n      <h5>Cultured Bacteria Results {{cfuMetadata.length}}</h5>\n      <div style=\"overflow: auto; height:468px;\" class=\"table-responsive\">\n      <table  class=\"table row-border hover table-striped\">\n        <tr >\n            <th class='header'></th>\n            <th class='header'></th>\n            <th class='header'>Sample</th>\n            <th class='header'>Agar Type</th>\n            <th class='header'>Select</th>\n        </tr>\n        <tr *ngFor=\"let metadatum of cfuMetadata\">\n            <td >\n              <button id=\"linked-{{metadatum.value.microGPS_ID}}\" class=\"btn btn-primary\" type=\"button\" (click)=\"openLinkedPopup(metadatum)\">Find</button>\n            </td>\n            <td >\n              <button id=\"{{metadatum.value.microGPS_ID}}\" class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#location-modal\" (click)=\"openModalSite(metadatum)\">View</button>\n            </td>\n            <td width=\"40%\">\n              <span #entries>{{metadatum.value.id}}</span>\n            </td>\n            <td width=\"40%\">\n              <span #entries>{{metadatum.value.agar_type}}</span>\n            </td>\n            <td width=\"5%\" style=\"text-align: center\">\n              <input (click)=\"selectSample($event, metadatum)\" type=\"checkbox\" [checked]=\"samplesMap[metadatum.value.id].checked\">\n            </td>\n          </tr>\n        </table>\n        </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"qpcrFilterToggled\" class=\"col-md-6\">\n      <div *ngIf=\"qpcrMetadata.length == 0\" style=\"height:500px;\">\n        <h5>No qPCR Bacteria Results For Current Area.</h5>\n      </div>\n      <div *ngIf=\"qpcrMetadata.length > 0\" style=\"height:500px;\">\n      <h5>qPCR Bacteria Results {{qpcrMetadata.length}}</h5>\n      <div style=\"overflow: auto; height:468px;\" class=\"table-responsive\">\n      <table  class=\"table row-border hover table-striped\">\n        <tr >\n            <th class='header'></th>\n            <th class='header'></th>\n            <th class='header'>Replicate</th>\n            <th class='header'>femA 100ml</th>\n            <th class='header'>Select</th>\n        </tr>\n        <tr *ngFor=\"let metadatum of qpcrMetadata\">\n            <td >\n              <button id=\"linked-{{metadatum.value.microGPS_ID}}\" class=\"btn btn-primary\" type=\"button\" (click)=\"openLinkedPopup(metadatum)\">Find</button>\n            </td>\n            <td >\n              <button id=\"{{metadatum.value.microGPS_ID}}\" class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#location-modal\" (click)=\"openModalSite(metadatum)\">View</button>\n            </td>\n            <td width=\"40%\">\n              <span #entries>{{metadatum.value.sample_replicate}}</span>\n            </td>\n            <td width=\"40%\">\n              <span #entries>{{metadatum.value.fema_100ml}}</span>\n            </td>\n            <td width=\"5%\" style=\"text-align: center\">\n              <input (click)=\"selectSample($event, metadatum)\" type=\"checkbox\" [checked]=\"samplesMap[metadatum.value.id].checked\">\n            </td>\n          </tr>\n        </table>\n        </div>\n        </div>\n    </div>\n\n    <div style=\"width: 100%; margin-bottom: 5px\" class=\"row flex-nowrap\">\n      <div style=\"padding-top: 10px;\" class=\"row flex-nowrap\" [ngStyle]=\"{'width': showFilterBar ? '75%' : '100%'}\">\n        <div *ngIf=\"samplesFilterToggled\">\n          <div>\n            <button style=\"margin-bottom: 10px\" class=\"btn btn-primary center\" type=\"button\">Sample Filter</button>\n            <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleMicrobes()\">Microbe Filter</button>\n            <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleCFU()\">Cultured Bacteria Filter</button>\n            <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleQPCR()\">qPCR Bacteria Filter</button>\n            <button style=\"position: absolute; margin-bottom: 10px; margin-left: 315px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"requestSamples('samples')\">Request Samples</button>\n            <button style=\"position: absolute; margin-bottom: 10px; margin-left: 475px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"selectAllSamples('samples')\"> {{!allSamplesSelected ? 'Select All Samples' : 'Unselect All Samples'}} </button>\n          </div>\n          <h5>Sample Filter</h5>\n          <query-builder [(ngModel)]='sampleQuery' [config]='sampleConfig' [formControl]='sampleQueryCtrl'>\n          </query-builder>\n          <div class=\"container\" style=\"margin-top: 10px; margin-bottom: 10px\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <button class=\"btn btn-primary center\" type=\"button\" (click)=\"sampleQueryFilter()\">Query</button>\n                <button style=\"margin-left: 5px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"resetSampleQuery()\">Reset</button>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div *ngIf=\"microbesFilterToggled\">\n        <div>\n          <button style=\"margin-bottom: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleSamples()\">Sample Filter</button>\n          <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\">Microbe Filter</button>\n          <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleCFU()\">Cultured Bacteria Filter</button>\n          <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleQPCR()\">qPCR Bacteria Filter</button>\n          <button style=\"position: absolute; margin-bottom: 10px; margin-left: 315px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"requestSamples('microbes')\">Request Samples</button>\n          <button style=\"position: absolute; margin-bottom: 10px; margin-left: 475px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"selectAllSamples('microbes')\"> {{!allMicrobesSelected ? 'Select All Microbes' : 'Unselect All Microbes'}} </button>\n        </div>\n        <h5>Microbes Filter</h5>\n        <query-builder [(ngModel)]='microbeQuery' [config]='microbeConfig' [formControl]='microbeQueryCtrl'>\n        </query-builder>\n        <div class=\"container\" style=\"margin-top: 10px; margin-bottom: 10px\">\n          <div class=\"row\">\n            <div class=\"col text-center mx-auto\">\n              <button class=\"btn btn-primary center\" type=\"button\" (click)=\"microbeQueryFilter()\">Query</button>\n              <button style=\"margin-left: 5px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"resetMicrobeQuery()\">Reset</button>\n            </div>\n          </div>\n        </div>\n    </div>\n    <div *ngIf=\"cfuFilterToggled\">\n      <div>\n        <button style=\"margin-bottom: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleSamples()\">Sample Filter</button>\n        <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleMicrobes()\">Microbe Filter</button>\n        <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\">Cultured Bacteria Filter</button>\n        <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleQPCR()\">qPCR Bacteria Filter</button>\n        <button style=\"position: absolute; margin-bottom: 10px; margin-left: 315px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"requestSamples('cfu')\">Request Samples</button>\n        <button style=\"position: absolute; margin-bottom: 10px; margin-left: 475px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"selectAllSamples('cfu')\"> {{!allCFUSelected ? 'Select All Cultured Bacteria' : 'Unselect All Cultured Bacteria'}} </button>\n      </div>\n      <h5>Cultured Bacteria Filter</h5>\n      <query-builder [(ngModel)]='cfuQuery' [config]='cfuConfig' [formControl]='cfuQueryCtrl'>\n      </query-builder>\n      <div class=\"container\" style=\"margin-top: 10px; margin-bottom: 10px\">\n        <div class=\"row\">\n          <div class=\"col text-center mx-auto\">\n            <button class=\"btn btn-primary center\" type=\"button\" (click)=\"cfuQueryFilter()\">Query</button>\n            <button style=\"margin-left: 5px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"resetCFUQuery()\">Reset</button>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div *ngIf=\"qpcrFilterToggled\">\n    <div>\n      <button style=\"margin-bottom: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleSamples()\">Sample Filter</button>\n      <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleMicrobes()\">Microbe Filter</button>\n      <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"toggleCFU()\">Cultured Bacteria Filter</button>\n      <button style=\"margin-bottom: 10px; margin-left: 10px\" class=\"btn btn-primary center\" type=\"button\">qPCR Bacteria Filter</button>\n      <button style=\"position: absolute; margin-bottom: 10px; margin-left: 315px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"requestSamples('qpcr')\">Request Samples</button>\n      <button style=\"position: absolute; margin-bottom: 10px; margin-left: 475px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"selectAllSamples('qpcr')\"> {{!allQPCRSelected ? 'Select All qPCR Bacteria' : 'Unselect All qPCR Bacteria'}} </button>\n    </div>\n    <h5>qPCR Bacteria Filter</h5>\n    <query-builder [(ngModel)]='qpcrQuery' [config]='qpcrConfig' [formControl]='qpcrQueryCtrl'>\n    </query-builder>\n    <div class=\"container\" style=\"margin-top: 10px; margin-bottom: 10px\">\n      <div class=\"row\">\n        <div class=\"col text-center mx-auto\">\n          <button class=\"btn btn-primary center\" type=\"button\" (click)=\"qpcrQueryFilter()\">Query</button>\n          <button style=\"margin-left: 5px\" class=\"btn btn-primary center\" type=\"button\" (click)=\"resetQPCRQuery()\">Reset</button>\n        </div>\n      </div>\n    </div>\n</div>\n  </div>\n  <div class=\"p-20 animated fadeInLeft\" [ngClass]=\"{'d-none': !showFilterBar, 'd-block': showFilterBar}\" style=\"padding-top: 57px; width: 30%\">\n    <h5>Applied Filters</h5>\n    <div style=\"padding-left: 5px; padding-top: 5px\">\n      \n      <h6 *ngIf=\"samplesFlattenedQueryArr.length\">Samples</h6>\n      <div *ngIf=\"samplesFlattenedQueryArr.length\" class=\"d-flex flex-wrap\" style=\"margin-bottom: 5px\">\n        <div id=\"sample-{{squery.index}}\" class=\"d-flex flex-wrap\" *ngFor=\"let squery of samplesFlattenedQueryArr\" style=\"width: fit-content\">\n          <div (click)=\"highlightRowSamples($event, squery.index)\" style=\"position: relative; float: left; margin: 5px 10px 5px 5px; padding: 12px 22px 12px 22px; border-radius: 10px; cursor: pointer\" [ngStyle]=\"{'background': squery.subjectCondition === 'AND' ? 'rgb(24, 103, 88)' : '#0d6efd'}\">\n            <span *ngIf=\"squery.level\" style=\"position: absolute; top: 38px; left: 50%; font-size: 10px; line-height: 0.3; color: rgba(255,255,255,0.8)\">Level {{squery.level}}</span>\n            <span style=\"position: absolute; top: 32px; left: 27px; font-size: 10px; color: white\" >{{squery.subjectCondition}}</span>\n            <div style=\"color: white\">\n              <span>{{squery.field}} {{squery.operator}} {{squery.value}}</span>\n              <span (click)=\"removeSampleFilter(samplesFlattenedQueryArr, squery.index)\" style=\"position: relative; left: 10px; color: #FF7F7F\">x</span>\n            </div>\n          </div>\n\n      </div>  \n    </div>\n      <!-- <p *ngIf=\"microbesFilterToggled\">{{this.currentMicrobeReadableQuery}}</p> -->\n      <h6 *ngIf=\"microbesFlattenedQueryArr.length && (microbesFilterToggled || qpcrFilterToggled)\">Microbes</h6>\n      <div *ngIf=\"microbesFlattenedQueryArr.length && (microbesFilterToggled || qpcrFilterToggled)\" class=\"d-flex flex-wrap\">\n        <div id=\"microbe-{{query.index}}\" class=\"d-flex flex-wrap\" *ngFor=\"let query of microbesFlattenedQueryArr\" style=\"width: fit-content\">\n          <div (click)=\"highlightRowMicrobes($event, query.index)\" style=\"position: relative; float: left; margin: 5px 10px 5px 5px; padding: 12px 22px 12px 22px; border-radius: 10px; cursor: pointer\" [ngStyle]=\"{'background': query.subjectCondition === 'AND' ? 'rgb(24, 103, 88)' : '#0d6efd'}\">\n            <span *ngIf=\"query.level\" style=\"position: absolute; top: 38px; left: 50%; font-size: 10px; line-height: 0.3; color: rgba(255,255,255,0.8)\">Level {{query.level}}</span>\n            <span style=\"position: absolute; top: 32px; left: 27px; font-size: 10px; color: white\" >{{query.subjectCondition}}</span>\n            <div style=\"color: white\">\n              <span>{{query.field}} {{query.operator}} {{query.value}}</span>\n              <span (click)=\"removeMicrobeFilter(microbesFlattenedQueryArr, query.index)\" style=\"position: relative; left: 10px; color: #FF7F7F\">x</span>\n            </div>\n          </div>\n\n      </div>  \n    </div>\n\n    <h6 *ngIf=\"cfuFlattenedQueryArr.length && cfuFilterToggled\">Cultured Bacteria</h6>\n    <div *ngIf=\"cfuFlattenedQueryArr.length && cfuFilterToggled\" class=\"d-flex flex-wrap\">\n      <div id=\"cfu-{{query.index}}\" class=\"d-flex flex-wrap\" *ngFor=\"let query of cfuFlattenedQueryArr\" style=\"width: fit-content\">\n        <div (click)=\"highlightRowCFU($event, query.index)\" style=\"position: relative; float: left; margin: 5px 10px 5px 5px; padding: 12px 22px 12px 22px; border-radius: 10px; cursor: pointer\" [ngStyle]=\"{'background': query.subjectCondition === 'AND' ? 'rgb(24, 103, 88)' : '#0d6efd'}\">\n          <span *ngIf=\"query.level\" style=\"position: absolute; top: 38px; left: 50%; font-size: 10px; line-height: 0.3; color: rgba(255,255,255,0.8)\">Level {{query.level}}</span>\n          <span style=\"position: absolute; top: 32px; left: 27px; font-size: 10px; color: white\" >{{query.subjectCondition}}</span>\n          <div style=\"color: white\">\n            <span>{{query.field}} {{query.operator}} {{query.value}}</span>\n            <span (click)=\"removeCFUFilter(cfuFlattenedQueryArr, query.index)\" style=\"position: relative; left: 10px; color: #FF7F7F\">x</span>\n          </div>\n        </div>\n    </div>  \n  </div>\n\n  <h6 *ngIf=\"qpcrFlattenedQueryArr.length && qpcrFilterToggled\" style=\"margin-top: 5px\">qPCR Bacteria</h6>\n  <div *ngIf=\"qpcrFlattenedQueryArr.length && qpcrFilterToggled\" class=\"d-flex flex-wrap\">\n    <div id=\"qpcr-{{query.index}}\" class=\"d-flex flex-wrap\" *ngFor=\"let query of qpcrFlattenedQueryArr\" style=\"width: fit-content\">\n      <div (click)=\"highlightRowQPCR($event, query.index)\" style=\"position: relative; float: left; margin: 5px 10px 5px 5px; padding: 12px 22px 12px 22px; border-radius: 10px; cursor: pointer\" [ngStyle]=\"{'background': query.subjectCondition === 'AND' ? 'rgb(24, 103, 88)' : '#0d6efd'}\">\n        <span *ngIf=\"query.level\" style=\"position: absolute; top: 38px; left: 50%; font-size: 10px; line-height: 0.3; color: rgba(255,255,255,0.8)\">Level {{query.level}}</span>\n        <span style=\"position: absolute; top: 32px; left: 27px; font-size: 10px; color: white\" >{{query.subjectCondition}}</span>\n        <div style=\"color: white\">\n          <span>{{query.field}} {{query.operator}} {{query.value}}</span>\n          <span (click)=\"removeQPCRFilter(qpcrFlattenedQueryArr, query.index)\" style=\"position: relative; left: 10px; color: #FF7F7F\">x</span>\n        </div>\n      </div>\n  </div>  \n</div>\n\n  </div>\n</div>\n</div>\n\n\n<!-- modal -->\n<div id=\"location-modal\" class=\"modal\" tabindex=\"-1\">\n  <!-- modal-dialog -->\n  <div id=\"location-dialog\" class=\"modal-dialog modal-xl\">\n    <!-- modal-content -->\n    <div *ngIf=\"selectedMetadata\"  class=\"modal-content\">\n      <!-- modal-header -->\n      <div class=\"modal-header\">\n        <h3>{{selectedMetadata.value.location}}</h3>\n         <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        <!-- <h4 class=\"modal-title\">Login</h4> -->\n      </div>\n\n\n      <!-- modal-body -->\n      <div class=\"modal-body\">\n        <div>\n          <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div leaflet class=\"mapZoomed pull-left\" id=\"mapZoomedHolder\"\n                [leafletOptions]=\"optionsZoomed\" \n                (leafletMapReady)=\"onMapZoomedReady($event)\" >\n              </div>\n            </div>\n              <div *ngIf=\"selectedMetadata.name === 'TEST_Site_Date_Geochem'\" class=\"col-md-4 overflow-auto\" style=\"height: 250px; width: 50%\">\n                <div *ngIf=\"!ahupuaaToggled\">\n                  <b>Location:</b>&nbsp;{{selectedMetadata.value.location}}<br/>\n                  <b>Watershed :</b>&nbsp;<a class=\"link-primary\" (click)=\"toggleAhupuaa()\">{{selectedMetadata.value.watershed}}</a><br/>\n                  <span *ngIf=\"selectedMetadata.value.time\"><b>Time :</b>&nbsp;{{selectedMetadata.value.time}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.date\"><b>Date :</b>&nbsp;{{selectedMetadata.value.date}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.season\"><b>Season :</b>&nbsp;{{selectedMetadata.value.season}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.year\"><b>Year :</b>&nbsp;{{selectedMetadata.value.year}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.temp_c\"><b>Temperature :</b>&nbsp;{{selectedMetadata.value.temp_c}} °C<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.ph\"><b>pH :</b>&nbsp;{{selectedMetadata.value.ph}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.water_level_cm\"><b>Water Level :</b>&nbsp;{{selectedMetadata.value.water_level_cm}} cm<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.do_percent\"><b>DO_Percent :</b>&nbsp;{{selectedMetadata.value.do_percent}} %<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.do_mg_l\"><b>DO_mg.L :</b>&nbsp;{{selectedMetadata.value.do_mg_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.spc_us\"><b>SPC_US :</b>&nbsp;{{selectedMetadata.value.spc_us}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.sal_ppt\"><b>Sal_ppt :</b>&nbsp;{{selectedMetadata.value.sal_ppt}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.turbidity\"><b>Turbidity :</b>&nbsp;{{selectedMetadata.value.turbidity}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.tdn_umol_l\"><b>TDN.umol.L :</b>&nbsp;{{selectedMetadata.value.tdn_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.tdp_umol_l\"><b>TDP.umol.L :</b>&nbsp;{{selectedMetadata.value.tdp_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.PO4_umol_l\"><b>PO4.umol.L :</b>&nbsp;{{selectedMetadata.value.PO4_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.si_umol_l\"><b>SI.umol.L :</b>&nbsp;{{selectedMetadata.value.si_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.nox_umol_l\"><b>NOX.umol.L :</b>&nbsp;{{selectedMetadata.value.nox_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.nh4_umol_l\"><b>NH4.umol.L :</b>&nbsp;{{selectedMetadata.value.nh4_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.toc_umol_l\"><b>TOC.umol.L :</b>&nbsp;{{selectedMetadata.value.toc_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.cor_tdn_umol_l\"><b>COR TDN.umol.L :</b>&nbsp;{{selectedMetadata.value.cor_tdn_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.cor_tdp_umol_l\"><b>COR TDP.umol.L :</b>&nbsp;{{selectedMetadata.value.cor_tdp_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.cor_PO4_umol_l\"><b>COR PO4.umol.L :</b>&nbsp;{{selectedMetadata.value.cor_PO4_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.cor_nox_umol_l\"><b>COR NOX.umol.L :</b>&nbsp;{{selectedMetadata.value.cor_nox_umol_l}}<br/></span>\n                  <span *ngIf=\"selectedMetadata.value.cor_nh4_umol_l\"><b>COR NH4.umol.L :</b>&nbsp;{{selectedMetadata.value.cor_nh4_umol_l}}<br/></span>\n                </div>\n                <div *ngIf=\"ahupuaaToggled\">\n                  <span style=\"font-size: 11px\" class=\"d-flex justify-content-between\"><b>Corresponding Ahupua'a Data</b><a class=\"link-primary\" (click)=\"toggleAhupuaa()\">Back to Sample Data</a></span><br/>\n                  <b>Ahupua'a: </b>&nbsp;{{selectedAhupuaa.value.ahupuaa}}<br/>\n                  <b>Watershed: </b>&nbsp;{{selectedAhupuaa.value.watershed}}<br/>\n                  <span *ngIf=\"selectedAhupuaa.value.island\"><b>Island: </b>&nbsp;{{selectedAhupuaa.value.island}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.pcaref\"><b>Pcaref: </b>&nbsp;{{selectedAhupuaa.value.pcaref}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.area_watershed_sqkm\"><b>Area: </b>&nbsp;{{selectedAhupuaa.value.area_watershed_sqkm}} square km<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.max_elevation_watershed-m\"><b>Max Elevation Watershed: </b>&nbsp;{{selectedAhupuaa.value.max_elevation_watershed-m}} m<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.dar_cluster_code\"><b>Dar Cluster Code: </b>&nbsp;{{selectedAhupuaa.value.dar_cluster_code}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.agricultural_percent\"><b>Agricultural Percent: </b>&nbsp;{{selectedAhupuaa.value.agricultural_percent}}%<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.conservation_percent\"><b>Conservation Percent: </b>&nbsp;{{selectedAhupuaa.value.conservation_percent}}%<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.rural_percent\"><b>Rural Percent: </b>&nbsp;{{selectedAhupuaa.value.rural_percent}}%<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.urban_percent\"><b>Urban Percent: </b>&nbsp;{{selectedAhupuaa.value.urban_percent}}%<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.land_cover_rating\"><b>Land Cover Rating: </b>&nbsp;{{selectedAhupuaa.value.land_cover_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.shallow_waters_rating\"><b>Shallow Waters Rating: </b>&nbsp;{{selectedAhupuaa.value.shallow_waters_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.stewardship_rating\"><b>Stewardship Rating: </b>&nbsp;{{selectedAhupuaa.value.stewardship_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.size_rating\"><b>Size Rating: </b>&nbsp;{{selectedAhupuaa.value.size_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.wetness_rating\"><b>Wetness Rating: </b>&nbsp;{{selectedAhupuaa.value.wetness_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.reach_diversity_rating\"><b>Reach Diversity Rating: </b>&nbsp;{{selectedAhupuaa.value.reach_diversity_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.total_watershed_rating\"><b>Total Watershed Rating: </b>&nbsp;{{selectedAhupuaa.value.total_watershed_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.native_species_rating\"><b>Native Species Rating: </b>&nbsp;{{selectedAhupuaa.value.native_species_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.introduced_genera_rating\"><b>Introduced Genera Rating: </b>&nbsp;{{selectedAhupuaa.value.introduced_genera_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.all_species_score_rating\"><b>All Species Score Rating: </b>&nbsp;{{selectedAhupuaa.value.all_species_score_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.total_biological_rating\"><b>Total Biological Rating: </b>&nbsp;{{selectedAhupuaa.value.total_biological_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.overall_rating\"><b>Overall Rating: </b>&nbsp;{{selectedAhupuaa.value.overall_rating}}<br/></span>\n                  <span *ngIf=\"selectedAhupuaa.value.raiting_strength\"><b>Raiting Strength: </b>&nbsp;{{selectedAhupuaa.value.raiting_strength}}<br/></span>\n                </div>\n              </div>\n              <div *ngIf=\"selectedMetadata.name === 'TEST_Microbes'\" class=\"col-md-4\">\n                <b>ID:</b>&nbsp;{{selectedMetadata.value.id}}<br/>\n                <b>Date:</b>&nbsp;{{selectedMetadata.value.date}}<br/>\n                <b>Site:</b>&nbsp;{{selectedMetadata.value.site}}<br/>\n                <span *ngIf=\"selectedMetadata.value.filter_size_um\"><b>Filter Size UM: </b>&nbsp;{{selectedMetadata.value.filter_size_um}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.volume_l\"><b>Volume L: </b>&nbsp;{{selectedMetadata.value.volume_l}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.lifestyle\"><b>Lifestyle: </b>&nbsp;{{selectedMetadata.value.lifestyle}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.collection_time\"><b>Collection Time: </b>&nbsp;{{selectedMetadata.value.collection_time}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.sequencing_facility\"><b>Sequencing Facility: </b>&nbsp;{{selectedMetadata.value.sequencing_facility}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.sample_type\"><b>Sample Type: </b>&nbsp;{{selectedMetadata.value.sample_type}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.sample_replicate\"><b>Sample Replicate: </b>&nbsp;{{selectedMetadata.value.sample_replicate}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.sample_no\"><b>Sample No: </b>&nbsp;{{selectedMetadata.value.sample_no}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.library\"><b>Library: </b>&nbsp;{{selectedMetadata.value.library}}<br/></span>\n              </div>\n              <div *ngIf=\"selectedMetadata.name === 'TEST_CFU'\" class=\"col-md-4\">\n                <b>ID:</b>&nbsp;{{selectedMetadata.value.id}}<br/>\n                <b>Date:</b>&nbsp;{{selectedMetadata.value.date}}<br/>\n                <span *ngIf=\"selectedMetadata.value.agar_type\"><b>Agar Type: </b>&nbsp;{{selectedMetadata.value.agar_type}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.location\"><b>Location: </b>&nbsp;{{selectedMetadata.value.location}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.cfu_100ml\"><b>CFU 100ml: </b>&nbsp;{{selectedMetadata.value.cfu_100ml}}<br/></span>\n              </div>\n              <div *ngIf=\"selectedMetadata.name === 'TEST_Fem_A'\" class=\"col-md-4\">\n                <b>ID:</b>&nbsp;{{selectedMetadata.value.id}}<br/>\n                <b>Date:</b>&nbsp;{{selectedMetadata.value.date}}<br/>\n                <span *ngIf=\"selectedMetadata.value.sample_no\"><b>Sample Number: </b>&nbsp;{{selectedMetadata.value.sample_no}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.sample_replicate\"><b>Sample Replicate: </b>&nbsp;{{selectedMetadata.value.sample_replicate}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.target_name\"><b>Target Name: </b>&nbsp;{{selectedMetadata.value.target_name}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.fema_100ml\"><b>Fem A 100ml: </b>&nbsp;{{selectedMetadata.value.fema_100ml}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.fema_g\"><b>Fem A grams: </b>&nbsp;{{selectedMetadata.value.fema_g}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.log_fema_100ml\"><b>Log Fem A 100ml: </b>&nbsp;{{selectedMetadata.value.log_fema_100ml}}<br/></span>\n                <span *ngIf=\"selectedMetadata.value.log_fema_g\"><b>Log Fem A grams: </b>&nbsp;{{selectedMetadata.value.log_fema_g}}<br/></span>\n              </div>\n            </div>\n          </div>\n<!--\ndraft_mgd: null\ndraft_mgy: null\ndraft_yr: null\ndriller: null\ngps: false\nhead_feet: null\ninit_cl: null\ninit_head: null\ninit_head2: null\ninit_head3: null\nland_owner: null\nlat83dd: 21.70361111\nlatest_hd: null\nlatitude: 21.70361111\nloc: {type: \"Point\", coordinates: Array(2)}\nlong83dd: -157.9647222\nlongitude: -157.9647222\nmax_chlor: null\nmin_chlor: null\nold_name: null\nold_number: null\nperf_case: 108\npir: null\npublished: \"True\"\npump_depth: null\npump_elev: null\npump_gpm: 150\npump_installer: null\npump_mgd: 0.216\npump_yr: null\nquad_map: 7\nsalinity: null\nspec_capac: null\nsurveyor: null\nt: null\ntemp_c: null\ntemp_f: null\ntest_chlor: null\ntest_date: null\ntest_ddown: null\ntest_gpm: null\ntest_temp: null\ntest_unit: null\ntmk: \"(1) 5-6-002:009\"\nuse_year: null\nutm: true\nwcr: \"1980-01-01T00:00:00\" -->\n\n        </div>\n      </div>\n\n      <!-- modal-footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-bs-dismiss=\"modal\" (click)=\"hideModal()\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--\n  Below code is just template code for me to understand data binding in angular for dialog components\n-->\n<!-- <ol>\n  <li>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol> -->\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_query_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/query-handler.service */ "./src/app/_services/query-handler.service.ts");
/* harmony import */ var _services_filter_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/filter-manager.service */ "./src/app/_services/filter-manager.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
// breaking changes: banner notification no longer working
// implement: banner queue?













var MapComponent = /** @class */ (function () {
    function MapComponent(renderer, queryHandler, filters, http, sanitizer, dialog) {
        this.renderer = renderer;
        this.queryHandler = queryHandler;
        this.filters = filters;
        this.http = http;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.sampleQueryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.microbeQueryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.cfuQueryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.qpcrQueryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.currentSampleQuery = '';
        this.currentMicrobeQuery = ''; // state of current microbe query
        this.currentCFUQuery = ''; // state of current CFU query
        this.currentQPCRQuery = ''; // state of the current QPCR query
        this.currentSampleReadableQuery = '';
        this.currentMicrobeReadableQuery = '';
        this.currentCFUReadableQuery = '';
        this.currentQPCRReadableQuery = '';
        /***
         * Loading Variables
         *
         * Since data flows down like a waterfall, these loading states
         * reflect whether the user can toggle to the microbes view,
         * cultured bacteria view, and the qPCR bacteria view respectively.
         *
         * To illustrate my point of view, an example is when the user
         * moves the map view. When the map is moved, findData() is triggered
         * to find Micro_GPS data. Site_Date data relies on the specific Micro_GPS
         * results that comes back from the database. Likewise, the microbe query
         * depends on Site_Date_Geochem data, and qPCR relies on microbes.
         *
         * Therefore, the user must wait until parent data is queried in the
         * waterfall prior to making any state changes within a specific view.
         *
         * Better approach: A better approach may be to flatten the data in a way
         * where all child data inherently contains it's parent data. In this way,
         * I could query GPS data directly from a child's table.
         *
         ***/
        this.loading = false;
        this.globalLoading = false;
        this.microbesLoading = false;
        this.cfuLoading = false;
        this.qpcrLoading = false;
        this.currentSampleLayer = null;
        this.currentMicrobeLayer = null;
        this.allAhupuaaData = null;
        this.ahupuaaToggled = false;
        this.selectedAhupuaa = null;
        this.focusedFilterRow = null;
        this.samplesFlattenedQueryArr = [];
        this.microbesFlattenedQueryArr = [];
        this.cfuFlattenedQueryArr = [];
        this.qpcrFlattenedQueryArr = [];
        this.filterToDisplayFilterChainSamples = false;
        this.filterToDisplayFilterChainMicrobes = false;
        this.filterToDisplayFilterChainCFU = false;
        this.filterToDisplayFilterChainQPCR = false;
        this.flagShown = false;
        this.gpsStream = null;
        this.sampleStream = null;
        this.microbeStream = null; // state of current microbe query
        this.cfuStream = null; // state of current cfu query
        this.qpcrStream = null; // state of current qpcr query
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.highlightEntries = [];
        this.samplesMap = {}; // Map created from current metadata2/samples state
        this.allSamplesSelected = false;
        this.allMicrobesSelected = false;
        this.allCFUSelected = false;
        this.allQPCRSelected = false;
        this.options = {
            layers: [
                // tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('http://www.google.com/maps/vt?lyrs=y@189&gl=en&x={x}&y={y}&z={z}', {
                    maxZoom: 18,
                    attribution: '...',
                }),
            ],
            zoom: 10,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(21.48, -157.9104),
            attributionControl: false,
            scrollWheelZoom: false,
        };
        this.optionsZoomed = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('http://www.google.com/maps/vt?lyrs=y@189&gl=en&x={x}&y={y}&z={z}', {
                    maxZoom: 18,
                    attribution: '...',
                }),
            ],
            zoom: 12,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(21.48, -157.9104),
            attributionControl: false,
            zoomControl: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            zoomDelta: 0,
            dragging: false,
        };
        this.drawnItems = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"]();
        this.drawOptions = {
            position: 'topleft',
            draw: {
                polyline: false,
                circle: false,
                marker: false,
                circlemarker: false,
            },
            edit: {
                featureGroup: this.drawnItems,
            },
        };
        this.controlOptions = {
            attributionControl: false,
        };
        /***
         * Front-end (map.component.html) States
         *
         * These variables control what state to show
         * The four possible states are samples,
         * microbes, cfu, and qPCR.
         *
         ***/
        this.samplesFilterToggled = true;
        this.microbesFilterToggled = false;
        this.cfuFilterToggled = false;
        this.qpcrFilterToggled = false;
        this.showFilterBar = false;
        /***
         * Default filter query states
         *
         * These variables control what the default
         * state of what the filters look like on
         * initial load. The user will ultimately
         * control the query states.
         *
         * A possible functionality could be to
         * allow the users to save previous query states.
         *
         ***/
        this.sampleQuery = {
            condition: 'and',
            rules: [
                { field: 'id', operator: '=', value: 'Sumida.Middle_Spring_43362', type: 'string' },
            ],
        };
        this.microbeQuery = {
            condition: 'and',
            rules: [{ field: 'sequencing_facility', operator: '=', value: 'UCI', type: 'string' }, {
                    condition: 'or',
                    rules: [{ field: 'lifestyle', operator: '=', value: 'Particle Bound', type: 'string' }, {
                            condition: 'or',
                            rules: [{ field: 'library', operator: '=', value: 1, type: 'number' }, { field: 'library', operator: '=', value: 2, type: 'number' }]
                        }]
                }, { field: 'volume_l', operator: '=', value: 0.25, type: 'number' }],
        };
        this.cfuQuery = {
            condition: 'and',
            rules: [{ field: 'cfu_100ml', operator: '>', value: 0, type: 'number' }]
        };
        this.qpcrQuery = {
            condition: 'and',
            rules: [{ field: 'fema_100ml', operator: '>', value: 0, type: 'number' }]
        };
        this.sampleConfig = {
            fields: {
                id: { name: 'Id', type: 'string' },
                location: { name: 'Location', type: 'string' },
                date: { name: 'Date', type: 'date' },
                season: {
                    name: 'Season',
                    type: 'category',
                    options: [
                        { name: 'Summer', value: 'SUMMER' },
                        { name: 'Fall', value: 'FALL' },
                        { name: 'Winter', value: 'WINTER' },
                        { name: 'Spring', value: 'SPRING' },
                    ],
                },
                watershed: { name: 'Watershed', type: 'string' },
                year: { name: 'Year', type: 'number' },
                time: { name: 'Time', type: 'time' },
                temp_c: { name: 'TEMP_C', type: 'number' },
                do_percent: { name: 'DO_percent', type: 'number' },
                do_mg_l: { name: 'DO_mg_L', type: 'number' },
                spc_us: { name: 'SPC_us', type: 'number' },
                sal_ppt: { name: 'SAL_ppt', type: 'number' },
                ph: { name: 'pH', type: 'number' },
                water_level_cm: { name: 'WATER_LEVEL_cm', type: 'number' },
                turbidity: { name: 'Turbidity', type: 'number' },
                tdn_umol_l: { name: 'TDN_umol.L', type: 'number' },
                tdp_umol_l: { name: 'TDP_umol.L', type: 'number' },
                po4_umol_l: { name: 'PO4_umol.L', type: 'number' },
                si_umol_l: { name: 'Si_umol.L', type: 'number' },
                nox_umol_l: { name: 'NOX_umol.L', type: 'number' },
                nh4_umol_l: { name: 'NH4_umol.L', type: 'number' },
                toc_umol_l: { name: 'TOC_umol.L', type: 'number' },
                cor_tdn_umol_l: { name: 'COR_TDN_umol.L', type: 'number' },
                cor_tdp_umol_l: { name: 'COR_TDP_umol.L', type: 'number' },
                cor_po4_umol_l: { name: 'COR_PO4_umol.L', type: 'number' },
                cor_nox_umol_l: { name: 'COR_NOX_umol.L', type: 'number' },
                cor_nh4_umol_l: { name: 'COR_NH4_umol.L', type: 'number' },
            },
        };
        this.microbeConfig = {
            fields: {
                sequencing_facility: {
                    name: 'Sequencing Facility',
                    type: 'category',
                    options: [
                        { name: 'UCI', value: 'UCI' },
                        { name: 'HIMB', value: 'HIMB' },
                        { name: '0', value: '0' },
                    ],
                },
                library: { name: 'Library', type: 'number' },
                date: { name: 'Date', type: 'date' },
                collection_time: { name: 'Collection Time', type: 'time' },
                site: { name: 'Site', type: 'string' },
                id: { name: 'Name', type: 'string' },
                volume_l: { name: 'Volume', type: 'number' },
                lifestyle: {
                    name: 'Lifestyle',
                    type: 'category',
                    options: [
                        { name: 'Free Living', value: 'Free_Living' },
                        { name: 'Particle Bound', value: 'Particle_Bound' },
                        { name: 'Mud', value: 'Mud' },
                    ],
                },
                sample_type: {
                    name: 'Sample Type',
                    type: 'category',
                    options: [
                        { name: 'Water', value: 'Water' },
                        { name: 'Mud', value: 'Mud' },
                    ],
                },
                filter_size_um: {
                    name: 'Filter Size',
                    type: 'category',
                    options: [
                        { name: '0.2 - Free living organisms', value: '0.2' },
                        { name: '0.45 - EPA cutoff for pathogens', value: '0.45' },
                        { name: '0.8 - Particle bound organisms', value: '0.8' },
                        { name: 'Mud', value: 'Mud' },
                    ],
                },
                sample_no: { name: 'Sample No', type: 'string' },
                sample_replicate: { name: 'Sample Replicate', type: 'string' },
            },
        };
        this.cfuConfig = {
            fields: {
                id: { name: 'Id', type: 'string' },
                location: { name: 'Location', type: 'string' },
                agar_type: {
                    name: 'agar_type',
                    type: 'category',
                    options: [
                        { name: 'CHROM - Staphylococcus', value: 'CHROM' },
                        { name: 'mEI - enterococus', value: 'mEI' },
                        { name: 'MI - Eschericia coli>', value: 'MI' },
                        { name: 'MI_UV - total coliform', value: 'MI_UV' },
                        { name: 'LB - Heterotrophs', value: 'LB' },
                    ],
                },
                cfu_100ml: { name: 'cfu_100ml', type: 'number' },
            }
        };
        this.qpcrConfig = {
            fields: {
                sample_no: { name: 'Sample Number', type: 'string' },
                sample_replicate: { name: 'Sample Replicate', type: 'string' },
                target_name: {
                    name: 'target name',
                    type: 'category',
                    options: [
                        { name: 'femA', value: 'femA' },
                    ],
                },
                fema_100ml: { name: 'femA_100ml', type: 'number' },
                fema_g: { name: 'femA_g', type: 'number' },
                log_fema_100ml: { name: 'log_femA_100ml', type: 'number' },
                log_fema_g: { name: 'log_femA_G', type: 'number' },
            }
        };
        //currentUser: localStorage.getItem('currentUser');
    }
    MapComponent.prototype.requestSamples = function () {
        var data = this.metadata2.filter(function (item) { return item.value.checked; });
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogOverviewExampleDialog"], {
            width: data.length ? '75%' : '20%',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    MapComponent.prototype.resetSelected = function () {
        this.allSamplesSelected = false;
        this.allMicrobesSelected = false;
        this.allCFUSelected = false;
        this.allQPCRSelected = false;
    };
    MapComponent.prototype.clearMapLayers = function () {
        this.dataGroups.MicroGPS.clearLayers();
        this.dataGroups.microbes.clearLayers();
        this.dataGroups.cfu.clearLayers();
        this.dataGroups.qpcr.clearLayers();
    };
    MapComponent.prototype.toggleAhupuaa = function () {
        this.ahupuaaToggled = !this.ahupuaaToggled;
    };
    MapComponent.prototype.toggleAhupuaaClosed = function () {
        this.ahupuaaToggled = false;
    };
    MapComponent.prototype.flattenQuery = function (queryArray, level, condition, filterTable, num, resultArr) {
        if (level === 0)
            resultArr = [];
        for (var i = 0; i < queryArray.length; i++) {
            var querySubject = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, queryArray[i]);
            if (querySubject.condition) {
                this.flattenQuery(querySubject.rules, level + 1, querySubject.condition, filterTable, num + 2, resultArr);
            }
            else {
                querySubject.level = level;
                querySubject.subjectCondition = condition.toUpperCase();
                querySubject.table = filterTable;
                if (resultArr.length) {
                    querySubject.index = Math.max(num + i, resultArr[resultArr.length - 1].index + 1);
                }
                else {
                    querySubject.index = num + i;
                }
                resultArr.push(querySubject);
            }
        }
        return resultArr;
    };
    MapComponent.prototype.removeSampleFilter = function (filterTable, indexToRemove) {
        if (this.filterToDisplayFilterChainSamples) {
            if (!this.samplesFilterToggled) {
                this.microbesFilterToggled = false;
                this.samplesFilterToggled = true;
            }
            var button = document.getElementsByClassName('q-button q-remove-button')[indexToRemove];
            this.removeSampleElement(indexToRemove);
            button.click();
        }
        else {
            this.removeSampleElement(indexToRemove);
        }
    };
    MapComponent.prototype.removeMicrobeFilter = function (filterTable, indexToRemove) {
        if (this.filterToDisplayFilterChainMicrobes) {
            var button = document.getElementsByClassName('q-button q-remove-button')[indexToRemove];
            this.removeMicrobeElement(indexToRemove);
            button.click();
        }
        else {
            this.removeMicrobeElement(indexToRemove);
        }
    };
    MapComponent.prototype.removeCFUFilter = function (filterTable, indexToRemove) {
        if (this.filterToDisplayFilterChainCFU) {
            var button = document.getElementsByClassName('q-button q-remove-button')[indexToRemove];
            this.removeCFUElement(indexToRemove);
            button.click();
        }
        else {
            this.removeCFUElement(indexToRemove);
        }
    };
    MapComponent.prototype.removeQPCRFilter = function (filterTable, indexToRemove) {
        if (this.filterToDisplayFilterChainQPCR) {
            var button = document.getElementsByClassName('q-button q-remove-button')[indexToRemove];
            this.removeQPCRElement(indexToRemove);
            button.click();
        }
        else {
            this.removeQPCRElement(indexToRemove);
        }
    };
    MapComponent.prototype.removeSampleElement = function (indexToRemove) {
        var copy = this.samplesFlattenedQueryArr.slice();
        this.samplesFlattenedQueryArr = copy.filter(function (element) { return element.index !== indexToRemove; });
        for (var i = 0; i < copy.length; i++) {
            if (copy[i].index > indexToRemove) {
                copy[i].index--;
            }
        }
    };
    MapComponent.prototype.removeMicrobeElement = function (indexToRemove) {
        var copy = this.microbesFlattenedQueryArr.slice();
        this.microbesFlattenedQueryArr = copy.filter(function (element) { return element.index !== indexToRemove; });
        for (var i = 0; i < copy.length; i++) {
            if (copy[i].index > indexToRemove) {
                copy[i].index--;
            }
        }
    };
    MapComponent.prototype.removeCFUElement = function (indexToRemove) {
        var copy = this.cfuFlattenedQueryArr.slice();
        this.cfuFlattenedQueryArr = copy.filter(function (element) { return element.index !== indexToRemove; });
        for (var i = 0; i < copy.length; i++) {
            if (copy[i].index > indexToRemove) {
                copy[i].index--;
            }
        }
    };
    MapComponent.prototype.removeQPCRElement = function (indexToRemove) {
        var copy = this.qpcrFlattenedQueryArr.slice();
        this.qpcrFlattenedQueryArr = copy.filter(function (element) { return element.index !== indexToRemove; });
        for (var i = 0; i < copy.length; i++) {
            if (copy[i].index > indexToRemove) {
                copy[i].index--;
            }
        }
    };
    MapComponent.prototype.highlightRowSamples = function (e, indexToHighlight) {
        if (e.stopPropagation)
            e.stopPropagation();
        if (!this.filterToDisplayFilterChainSamples)
            return;
        if (!this.samplesFilterToggled) {
            this.microbesFilterToggled = false;
            this.samplesFilterToggled = true;
        }
        var lol = document.getElementsByClassName('q-row')[indexToHighlight];
        if (lol) {
            this.focusedFilterRow ? this.focusedFilterRow.style.background = 'none' : null;
            this.focusedFilterRow = lol;
            lol.style.background = 'pink';
        }
    };
    MapComponent.prototype.highlightRowMicrobes = function (e, indexToHighlight) {
        if (e.stopPropagation)
            e.stopPropagation();
        if (!this.filterToDisplayFilterChainMicrobes)
            return;
        var lol = document.getElementsByClassName('q-row')[indexToHighlight];
        if (lol) {
            this.focusedFilterRow ? this.focusedFilterRow.style.background = 'none' : null;
            this.focusedFilterRow = lol;
            lol.style.background = 'pink';
        }
    };
    MapComponent.prototype.highlightRowCFU = function (e, indexToHighlight) {
        if (e.stopPropagation)
            e.stopPropagation();
        if (!this.filterToDisplayFilterChainCFU)
            return;
        var lol = document.getElementsByClassName('q-row')[indexToHighlight];
        if (lol) {
            this.focusedFilterRow ? this.focusedFilterRow.style.background = 'none' : null;
            this.focusedFilterRow = lol;
            lol.style.background = 'pink';
        }
    };
    MapComponent.prototype.highlightRowQPCR = function (e, indexToHighlight) {
        if (e.stopPropagation)
            e.stopPropagation();
        if (!this.filterToDisplayFilterChainQPCR)
            return;
        var lol = document.getElementsByClassName('q-row')[indexToHighlight];
        if (lol) {
            this.focusedFilterRow ? this.focusedFilterRow.style.background = 'none' : null;
            this.focusedFilterRow = lol;
            lol.style.background = 'pink';
        }
    };
    MapComponent.prototype.checkIfChangesWereMade = function (changes, currentState) {
        if (!currentState.length) {
            return;
        }
        else {
            var changesArr = this.flattenQuery(changes.rules, 0, changes.condition, 'microbes', 0, []);
            for (var i = 0; i < changesArr.length; i++) {
                if (changesArr[i].field !== currentState[i].field ||
                    changesArr[i].index !== currentState[i].index ||
                    changesArr[i].operator !== currentState[i].operator ||
                    changesArr[i].subjectCondition !== currentState[i].subjectCondition ||
                    changesArr[i].value !== currentState[i].value) {
                    changesArr[i].table === 'microbes' ? (this.filterToDisplayFilterChainMicrobes = false) : (this.filterToDisplayFilterChainSamples = false);
                    if (this.focusedFilterRow)
                        this.focusedFilterRow.style.background = 'none';
                    return this.showAlertFlag();
                }
            }
        }
    };
    MapComponent.prototype.showAlertFlag = function () {
        if (!this.flagShown) {
            document.getElementById('alert').className = 'd-flex justify-content-between alert alert-warning alert-dismissible fade position-sticky show';
        }
    };
    MapComponent.prototype.toggleFilterBar = function () {
        if (this.samplesFilterToggled) {
            this.currentSampleQuery !== "" ? this.showFilterBar = true : this.showFilterBar = false;
        }
        if (this.microbesFilterToggled) {
            this.currentSampleQuery !== "" || this.currentMicrobeQuery !== "" ? this.showFilterBar = true : this.showFilterBar = false;
        }
        if (this.cfuFilterToggled) {
            this.currentSampleQuery !== "" || this.currentCFUQuery !== "" ? this.showFilterBar = true : this.showFilterBar = false;
        }
        if (this.qpcrFilterToggled) {
            this.currentSampleQuery !== "" || this.currentMicrobeQuery !== "" || this.currentQPCRQuery !== "" ? this.showFilterBar = true : this.showFilterBar = false;
        }
    };
    MapComponent.prototype.toggleSamples = function () {
        this.clearMapLayers();
        this.microGPSData = this.microGPSData.filter(function (item) { return item.value.siteDateGeochem && item.value.siteDateGeochem.length; });
        this.drawMapPoints();
        this.microbesFilterToggled = false;
        this.cfuFilterToggled = false;
        this.qpcrFilterToggled = false;
        this.samplesFilterToggled = true;
        this.toggleFilterBar();
    };
    MapComponent.prototype.toggleMicrobes = function () {
        if (this.microbesLoading) {
            return alert("Still loading microbes. Please try again in a few seconds.");
        }
        this.clearMapLayers();
        this.drawMicrobes();
        this.samplesFilterToggled = false;
        this.cfuFilterToggled = false;
        this.qpcrFilterToggled = false;
        this.microbesFilterToggled = true;
        this.toggleFilterBar();
    };
    MapComponent.prototype.toggleCFU = function () {
        if (this.cfuLoading) {
            return alert("Still loading cultured bacteria. Please try again in a few seconds.");
        }
        this.clearMapLayers();
        this.drawCFU();
        this.microbesFilterToggled = false;
        this.samplesFilterToggled = false;
        this.qpcrFilterToggled = false;
        this.cfuFilterToggled = true;
        this.toggleFilterBar(); // controls the state of the filters showing
        // ^ dependent on parent state as well
    };
    MapComponent.prototype.toggleQPCR = function () {
        if (this.qpcrLoading) {
            return alert("Still loading qPCR bacteria. Please try again in a few seconds.");
        }
        this.clearMapLayers();
        this.drawQPCR();
        this.microbesFilterToggled = false;
        this.samplesFilterToggled = false;
        this.cfuFilterToggled = false;
        this.qpcrFilterToggled = true;
        this.toggleFilterBar(); // controls the state of the filters showing
        // ^ dependent on parent state as well
    };
    MapComponent.prototype.sampleQueryFilter = function () {
        if (this.qpcrLoading) {
            return alert("Still loading qPCR. Please try again in a few seconds.");
        }
        if (!this.sampleQuery.rules.length) {
            this.currentSampleQuery = '';
            this.currentSampleReadableQuery = '';
        }
        else {
            this.filterToDisplayFilterChainSamples = true;
            this.samplesFlattenedQueryArr = this.flattenQuery(this.sampleQuery.rules, 0, this.sampleQuery.condition, 'samples', 0, this.samplesFlattenedQueryArr);
            this.metadata2 = [];
            /* logical 'or' operator */
            var result = ['', ''];
            var condition = this.sampleQuery.condition === 'and' ? " {'$and': [" : " {'$or':  [";
            var readableCondition = this.sampleQuery.condition === 'and'
                ? 'Where all samples meet each criteria: '
                : 'Where all samples meet one of these criteria: ';
            var readableCondition2 = this.sampleQuery.condition === 'and' ? ' and ' : ' or ';
            result[0] += condition;
            result[1] += readableCondition;
            for (var i = 0; i < this.sampleQuery.rules.length; i++) {
                if (this.sampleQuery.rules[i].field) {
                    var _a = this.sampleQuery.rules[i], field = _a.field, operator = _a.operator, value = _a.value;
                    var type = void 0;
                    if (field !== 'season' && field !== 'date' && field !== 'time' && field !== 'id' && field !== 'location') {
                        type = 'number';
                    }
                    else {
                        type = 'string';
                    }
                    var statement = this.evaluateOperation(operator, value, type);
                    var readable = this.parseReadable(operator, value, type);
                    result[0] += "{'value." + field + "'" + statement + "}";
                    i <= this.sampleQuery.rules.length - 1 && i !== 0 ? (result[1] += readableCondition2) : null;
                    result[1] += field + " " + readable;
                    i === 0 ? (result[1] += readableCondition2) : null;
                }
                var queryObject = this.sampleQuery.rules[i];
                if (queryObject.condition) {
                    this.sampleQueryFilterRecursive(this.sampleQuery.rules[i], result);
                }
                i !== this.sampleQuery.rules.length - 1 ? (result[0] += ', ') : null;
            }
            result[0] += ']}';
            this.currentSampleQuery = ', ' + result[0];
            this.currentSampleReadableQuery = result[1];
            /* END previous attempt to create a front end filter */
        }
        this.findData();
        this.toggleFilterBar();
    };
    MapComponent.prototype.microbeQueryFilter = function () {
        if (this.qpcrLoading) {
            return alert("Still loading qPCR. Please try again in a few seconds.");
        }
        if (!this.microbeQuery.rules.length) {
            this.currentMicrobeQuery = '';
            this.currentMicrobeReadableQuery = '';
        }
        else {
            this.filterToDisplayFilterChainMicrobes = true;
            this.microbesFlattenedQueryArr = this.flattenQuery(this.microbeQuery.rules, 0, this.microbeQuery.condition, 'microbes', 0, this.microbesFlattenedQueryArr);
            this.microbeMetadata = [];
            /* logical 'or' operator */
            var result = ['', ''];
            var condition = this.microbeQuery.condition === 'and' ? " {'$and': [" : " {'$or':  [";
            var readableCondition = this.microbeQuery.condition === 'and'
                ? 'Where all microbes meet each criteria: '
                : 'Where all microbes meet one of these criteria: ';
            var readableCondition2 = this.microbeQuery.condition === 'and' ? ' and ' : ' or ';
            result[0] += condition;
            result[1] += readableCondition;
            for (var i = 0; i < this.microbeQuery.rules.length; i++) {
                if (this.microbeQuery.rules[i].field) {
                    var _a = this.microbeQuery.rules[i], field = _a.field, operator = _a.operator, value = _a.value;
                    var val = value;
                    var type = void 0;
                    if (field !== 'library' && field !== 'volume_l') {
                        type = 'string';
                    }
                    else {
                        type = 'number';
                    }
                    var statement = this.evaluateOperation(operator, val, type);
                    var readable = this.parseReadable(operator, val, type);
                    result[0] += "{'value." + field + "'" + statement + "}";
                    i <= this.microbeQuery.rules.length - 1 && i !== 0 ? (result[1] += readableCondition2) : null;
                    result[1] += field + " " + readable;
                    i === 0 ? (result[1] += readableCondition2) : null;
                }
                var queryObject = this.microbeQuery.rules[i];
                if (queryObject.condition) {
                    this.microbeQueryFilterRecursive(this.microbeQuery.rules[i], result);
                }
                i !== this.microbeQuery.rules.length - 1 ? (result[0] += ', ') : null;
            }
            result[0] += ']}';
            this.currentMicrobeQuery = ', ' + result[0];
            this.currentMicrobeReadableQuery = result[1];
            /* END previous attempt to create a front end filter */
        }
        this.toggleFilterBar();
        this.findData();
    };
    MapComponent.prototype.cfuQueryFilter = function () {
        if (this.qpcrLoading) {
            return alert("Still loading cultured bacteria. Please try again in a few seconds.");
        }
        if (!this.cfuQuery.rules.length) {
            this.currentCFUQuery = '';
            this.currentCFUReadableQuery = '';
        }
        else {
            this.filterToDisplayFilterChainCFU = true;
            this.cfuFlattenedQueryArr = this.flattenQuery(this.cfuQuery.rules, 0, this.cfuQuery.condition, 'cfu', 0, this.cfuFlattenedQueryArr);
            this.cfuMetadata = [];
            /* logical 'or' operator */
            var result = ['', ''];
            var condition = this.cfuQuery.condition === 'and' ? " {'$and': [" : " {'$or':  [";
            var readableCondition = this.cfuQuery.condition === 'and'
                ? 'Where all cultured bacteria meet each criteria: '
                : 'Where all cultured bacteria meet one of these criteria: ';
            var readableCondition2 = this.cfuQuery.condition === 'and' ? ' and ' : ' or ';
            result[0] += condition;
            result[1] += readableCondition;
            for (var i = 0; i < this.cfuQuery.rules.length; i++) {
                if (this.cfuQuery.rules[i].field) {
                    var _a = this.cfuQuery.rules[i], field = _a.field, operator = _a.operator, value = _a.value;
                    var val = value;
                    var type = void 0;
                    if (field !== 'cfu_100ml') {
                        type = 'string';
                    }
                    else {
                        type = 'number';
                    }
                    var statement = this.evaluateOperation(operator, val, type);
                    var readable = this.parseReadable(operator, val, type);
                    result[0] += "{'value." + field + "'" + statement + "}";
                    i <= this.cfuQuery.rules.length - 1 && i !== 0 ? (result[1] += readableCondition2) : null;
                    result[1] += field + " " + readable;
                    i === 0 ? (result[1] += readableCondition2) : null;
                }
                var queryObject = this.cfuQuery.rules[i];
                if (queryObject.condition) {
                    this.cfuQueryFilterRecursive(this.cfuQuery.rules[i], result);
                }
                i !== this.cfuQuery.rules.length - 1 ? (result[0] += ', ') : null;
            }
            result[0] += ']}';
            this.currentCFUQuery = ', ' + result[0];
            this.currentCFUReadableQuery = result[1];
            /* END previous attempt to create a front end filter */
        }
        this.toggleFilterBar();
        this.findData();
    };
    MapComponent.prototype.qpcrQueryFilter = function () {
        if (this.qpcrLoading) {
            return alert("Still loading qPCR bacteria. Please try again in a few seconds.");
        }
        if (!this.qpcrQuery.rules.length) {
            this.currentQPCRQuery = '';
            this.currentQPCRReadableQuery = '';
        }
        else {
            this.filterToDisplayFilterChainQPCR = true;
            this.qpcrFlattenedQueryArr = this.flattenQuery(this.qpcrQuery.rules, 0, this.qpcrQuery.condition, 'qpcr', 0, this.qpcrFlattenedQueryArr);
            this.qpcrMetadata = [];
            /* logical 'or' operator */
            var result = ['', ''];
            var condition = this.qpcrQuery.condition === 'and' ? " {'$and': [" : " {'$or':  [";
            var readableCondition = this.qpcrQuery.condition === 'and'
                ? 'Where all qPCR bacteria meet each criteria: '
                : 'Where all qPCR bacteria meet one of these criteria: ';
            var readableCondition2 = this.qpcrQuery.condition === 'and' ? ' and ' : ' or ';
            result[0] += condition;
            result[1] += readableCondition;
            for (var i = 0; i < this.qpcrQuery.rules.length; i++) {
                if (this.qpcrQuery.rules[i].field) {
                    var _a = this.qpcrQuery.rules[i], field = _a.field, operator = _a.operator, value = _a.value;
                    var val = value;
                    var type = void 0;
                    if (field === 'sample_no' || field === 'sample_replicate' || field === 'target_name') {
                        type = 'string';
                    }
                    else {
                        type = 'number';
                    }
                    var statement = this.evaluateOperation(operator, val, type);
                    var readable = this.parseReadable(operator, val, type);
                    result[0] += "{'value." + field + "'" + statement + "}";
                    i <= this.qpcrQuery.rules.length - 1 && i !== 0 ? (result[1] += readableCondition2) : null;
                    result[1] += field + " " + readable;
                    i === 0 ? (result[1] += readableCondition2) : null;
                }
                var queryObject = this.qpcrQuery.rules[i];
                if (queryObject.condition) {
                    this.qpcrQueryFilterRecursive(this.qpcrQuery.rules[i], result);
                }
                i !== this.qpcrQuery.rules.length - 1 ? (result[0] += ', ') : null;
            }
            result[0] += ']}';
            this.currentQPCRQuery = ', ' + result[0];
            this.currentQPCRReadableQuery = result[1];
            /* END previous attempt to create a front end filter */
        }
        this.toggleFilterBar();
        this.findData();
    };
    MapComponent.prototype.sampleQueryFilterRecursive = function (query, result) {
        var nestedQuery = ['', ''];
        var condition = query.condition === 'and' ? " {'$and': [" : " {'$or': [";
        var readableCondition = query.condition === 'and' ? ' and ' : ' or ';
        result[0] += condition;
        result[1] += '(';
        for (var i = 0; i < query.rules.length; i++) {
            if (query.rules[i].field) {
                var _a = query.rules[i], field = _a.field, operator = _a.operator, value = _a.value;
                var type = void 0;
                if (field !== 'season' && field !== 'date' && field !== 'time' && field !== 'id' && field !== 'location') {
                    type = 'number';
                }
                else {
                    type = 'string';
                }
                var statement = this.evaluateOperation(operator, value, type);
                var readable = this.parseReadable(operator, value, type);
                nestedQuery[0] += "{'value." + field + "'" + statement + "}";
                nestedQuery[1] += field + " " + readable;
                i !== query.rules.length - 1 ? (nestedQuery[0] += ', ') : null;
                i !== query.rules.length - 1 ? (nestedQuery[1] += readableCondition) : null;
            }
            if (query.rules[i].condition) {
                this.sampleQueryFilterRecursive(query.rules[i], nestedQuery);
            }
        }
        result[0] += nestedQuery[0];
        result[0] += ']}';
        result[1] += nestedQuery[1];
        result[1] += ')';
    };
    MapComponent.prototype.microbeQueryFilterRecursive = function (query, result) {
        var nestedQuery = ['', ''];
        var condition = query.condition === 'and' ? " {'$and': [" : " {'$or': [";
        var readableCondition = query.condition === 'and' ? ' and ' : ' or ';
        result[0] += condition;
        result[1] += '(';
        for (var i = 0; i < query.rules.length; i++) {
            if (query.rules[i].field) {
                var _a = query.rules[i], field = _a.field, operator = _a.operator, value = _a.value;
                var type = void 0;
                if (field !== 'library' && field !== 'volume_l') {
                    type = 'string';
                }
                else {
                    type = 'number';
                }
                var statement = this.evaluateOperation(operator, value, type);
                var readable = this.parseReadable(operator, value, type);
                nestedQuery[0] += "{'value." + field + "'" + statement + "}";
                nestedQuery[1] += field + " " + readable;
                i !== query.rules.length - 1 ? (nestedQuery[0] += ', ') : null;
                i !== query.rules.length - 1 ? (nestedQuery[1] += readableCondition) : null;
            }
            if (query.rules[i].condition) {
                this.microbeQueryFilterRecursive(query.rules[i], nestedQuery);
            }
        }
        result[0] += nestedQuery[0];
        result[0] += ']}';
        result[1] += nestedQuery[1];
        result[1] += ')';
    };
    MapComponent.prototype.cfuQueryFilterRecursive = function (query, result) {
        var nestedQuery = ['', ''];
        var condition = query.condition === 'and' ? " {'$and': [" : " {'$or': [";
        var readableCondition = query.condition === 'and' ? ' and ' : ' or ';
        result[0] += condition;
        result[1] += '(';
        for (var i = 0; i < query.rules.length; i++) {
            if (query.rules[i].field) {
                var _a = query.rules[i], field = _a.field, operator = _a.operator, value = _a.value;
                var type = void 0;
                if (field !== 'cfu_100ml') {
                    type = 'string';
                }
                else {
                    type = 'number';
                }
                var statement = this.evaluateOperation(operator, value, type);
                var readable = this.parseReadable(operator, value, type);
                nestedQuery[0] += "{'value." + field + "'" + statement + "}";
                nestedQuery[1] += field + " " + readable;
                i !== query.rules.length - 1 ? (nestedQuery[0] += ', ') : null;
                i !== query.rules.length - 1 ? (nestedQuery[1] += readableCondition) : null;
            }
            if (query.rules[i].condition) {
                this.cfuQueryFilterRecursive(query.rules[i], nestedQuery);
            }
        }
        result[0] += nestedQuery[0];
        result[0] += ']}';
        result[1] += nestedQuery[1];
        result[1] += ')';
    };
    MapComponent.prototype.qpcrQueryFilterRecursive = function (query, result) {
        var nestedQuery = ['', ''];
        var condition = query.condition === 'and' ? " {'$and': [" : " {'$or': [";
        var readableCondition = query.condition === 'and' ? ' and ' : ' or ';
        result[0] += condition;
        result[1] += '(';
        for (var i = 0; i < query.rules.length; i++) {
            if (query.rules[i].field) {
                var _a = query.rules[i], field = _a.field, operator = _a.operator, value = _a.value;
                var type = void 0;
                if (field === 'sample_no' || field === 'sample_replicate' || field === 'target_name') {
                    type = 'string';
                }
                else {
                    type = 'number';
                }
                var statement = this.evaluateOperation(operator, value, type);
                var readable = this.parseReadable(operator, value, type);
                nestedQuery[0] += "{'value." + field + "'" + statement + "}";
                nestedQuery[1] += field + " " + readable;
                i !== query.rules.length - 1 ? (nestedQuery[0] += ', ') : null;
                i !== query.rules.length - 1 ? (nestedQuery[1] += readableCondition) : null;
            }
            if (query.rules[i].condition) {
                this.qpcrQueryFilterRecursive(query.rules[i], nestedQuery);
            }
        }
        result[0] += nestedQuery[0];
        result[0] += ']}';
        result[1] += nestedQuery[1];
        result[1] += ')';
    };
    MapComponent.prototype.evaluateOperation = function (operator, value, type) {
        if (type !== 'number') { /* matches a string in database */
            switch (operator) {
                case '=':
                    return ": '" + value + "'";
                case '>':
                    return ": {'$gt': '" + value + "'}";
                case '<':
                    return ": {'$lt': '" + value + "'}";
                case '>=':
                    return ": {'$gte': '" + value + "'}";
                case '<=':
                    return ": {'$lte': '" + value + "'}";
                case '!=':
                    return ": {'$ne': '" + value + "'}";
                default:
                    console.error('No such operator exists!');
                    break;
            }
        }
        else { /* equals a number in the database (no quotes around the value) */
            switch (operator) {
                case '=':
                    return ": " + value;
                case '>':
                    return ": {'$gt': " + value + "}";
                case '<':
                    return ": {'$lt': " + value + "}";
                case '>=':
                    return ": {'$gte': " + value + "}";
                case '<=':
                    return ": {'$lte': " + value + "}";
                case '!=':
                    return ": {'$ne': " + value + "}";
                default:
                    console.error('No such operator exists!');
                    break;
            }
        }
    };
    MapComponent.prototype.resetSampleQuery = function () {
        this.currentSampleQuery = '';
        this.currentSampleReadableQuery = '';
        this.samplesFlattenedQueryArr = [];
        if (this.focusedFilterRow)
            this.focusedFilterRow.style.background = 'none';
        this.findData();
        this.toggleFilterBar();
    };
    MapComponent.prototype.resetMicrobeQuery = function () {
        this.currentMicrobeQuery = '';
        this.currentMicrobeReadableQuery = '';
        this.microbesFlattenedQueryArr = [];
        if (this.focusedFilterRow)
            this.focusedFilterRow.style.background = 'none';
        this.findData();
        this.toggleFilterBar();
    };
    MapComponent.prototype.resetCFUQuery = function () {
        this.currentCFUQuery = '';
        this.currentCFUReadableQuery = '';
        this.cfuFlattenedQueryArr = [];
        if (this.focusedFilterRow)
            this.focusedFilterRow.style.background = 'none';
        this.findData();
        this.toggleFilterBar();
    };
    MapComponent.prototype.resetQPCRQuery = function () {
        this.currentQPCRQuery = '';
        this.currentQPCRReadableQuery = '';
        this.qpcrFlattenedQueryArr = [];
        if (this.focusedFilterRow)
            this.focusedFilterRow.style.background = 'none';
        this.findData();
        this.toggleFilterBar();
    };
    MapComponent.prototype.selectSample = function (e, metadata) {
        console.log(metadata, 'I NOT USING THE RIGHT ID?');
        this.samplesMap[metadata.value.id].checked = e.target.checked;
    };
    MapComponent.prototype.selectAllSamples = function (type) {
        var _this = this;
        // all current samples
        if (type === 'samples') {
            for (var sample in this.samplesMap) {
                this.samplesMap[sample].checked = !this.allSamplesSelected;
            }
            this.allSamplesSelected = !this.allSamplesSelected;
            this.allMicrobesSelected = this.allSamplesSelected;
            this.allCFUSelected = this.allSamplesSelected;
            this.allQPCRSelected = this.allSamplesSelected;
        }
        // all current microbes
        if (type === 'microbes') {
            this.microbeMetadata.map(function (item) {
                var id = item.value.id;
                _this.samplesMap[id].checked = !_this.allMicrobesSelected;
            });
            this.allMicrobesSelected = !this.allMicrobesSelected;
            this.allQPCRSelected = this.allMicrobesSelected;
        }
        // all current cfu
        if (type === 'cfu') {
            this.cfuMetadata.map(function (item) {
                var id = item.value.id;
                _this.samplesMap[id].checked = !_this.allCFUSelected;
            });
            this.allCFUSelected = !this.allCFUSelected;
        }
        // all current qpcr
        if (type === 'qpcr') {
            this.qpcrMetadata.map(function (item) {
                var id = item.value.id;
                _this.samplesMap[id].checked = !_this.allQPCRSelected;
            });
            this.allQPCRSelected = !this.allQPCRSelected;
        }
    };
    MapComponent.prototype.parseReadable = function (operator, value, type) {
        switch (operator) {
            case '=':
                return "is equal to " + value;
            case '>':
                return "is greater than " + value;
            case '<':
                return "is less than " + value;
            case '>=':
                return "is greater than or equal to " + value;
            case '<=':
                return "is less than or equal to " + value;
            case '!=':
                return "does not equal " + value;
            default:
                console.error('No such operator exists!');
                break;
        }
    };
    MapComponent.prototype.onMapReady = function (map) {
        var _this = this;
        this.metadata = [];
        this.map = map;
        var legendControl = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Control"]({ position: 'bottomleft' });
        legendControl.onAdd = function (map) {
            var legend = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div', 'legend');
            legend.innerHTML =
                '<div class="grid">' +
                    '<div class="bl">Legend</div>' +
                    '<div class="ht">Cluster Size</div>' +
                    '<div class="s1">2-9</div>' +
                    '<div class="s2">10-100</div>' +
                    '<div class="s3">100+</div>' +
                    '<div class="t1">Wells</div>' +
                    '<div class="c1"><div class="color-circle color-1"></div></div>' +
                    '<div class="c2"><div class="color-circle color-2"></div></div>' +
                    '<div class="c3"><div class="color-circle color-3"></div></div>' +
                    '</div>';
            return legend;
        };
        var iconCreateFunction = function (group) {
            return function (cluster) {
                var childCount = cluster.getChildCount();
                var markerClass = 'marker-cluster ';
                var clusterSize = 'marker-cluster-';
                if (childCount < 10) {
                    clusterSize += 'small';
                }
                else if (childCount < 100) {
                    clusterSize += 'medium';
                }
                else {
                    clusterSize += 'large';
                }
                markerClass += clusterSize + '-' + group;
                return new leaflet__WEBPACK_IMPORTED_MODULE_2__["DivIcon"]({
                    html: '<div><span>' + childCount + '</span></div>',
                    className: markerClass,
                    iconSize: new leaflet__WEBPACK_IMPORTED_MODULE_2__["Point"](40, 40),
                });
            };
        };
        this.dataGroups = {
            sites: leaflet__WEBPACK_IMPORTED_MODULE_2__["markerClusterGroup"]({ iconCreateFunction: iconCreateFunction('sites'), disableClusteringAtZoom: 4 }),
            MicroGPS: leaflet__WEBPACK_IMPORTED_MODULE_2__["markerClusterGroup"]({
                iconCreateFunction: iconCreateFunction('MicroGPS'),
                disableClusteringAtZoom: 4,
            }),
            microbes: leaflet__WEBPACK_IMPORTED_MODULE_2__["markerClusterGroup"]({
                iconCreateFunction: iconCreateFunction('Microbes'),
                disableClusteringAtZoom: 4,
            }),
            cfu: leaflet__WEBPACK_IMPORTED_MODULE_2__["markerClusterGroup"]({
                iconCreateFunction: iconCreateFunction('CFU'),
                disableClusteringAtZoom: 4,
            }),
            qpcr: leaflet__WEBPACK_IMPORTED_MODULE_2__["markerClusterGroup"]({
                iconCreateFunction: iconCreateFunction('qPCR'),
                disableClusteringAtZoom: 4,
            }),
            wells: leaflet__WEBPACK_IMPORTED_MODULE_2__["markerClusterGroup"]({ iconCreateFunction: iconCreateFunction('wells'), disableClusteringAtZoom: 12 }),
            waterQualitySites: leaflet__WEBPACK_IMPORTED_MODULE_2__["markerClusterGroup"]({ iconCreateFunction: iconCreateFunction('waterQualitySites') }),
        };
        var controlGroups = {};
        Object.keys(this.dataGroups).forEach(function (key) {
            var dataGroup = _this.dataGroups[key];
            dataGroup.addTo(_this.map);
            // console.log(key);
            controlGroups[GroupLabelMap[key]] = dataGroup;
        });
        leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].layers(null, controlGroups).addTo(this.map);
        this.drawnItems.addTo(this.map);
    };
    MapComponent.prototype.onMapZoomedReady = function (mapZoomed) {
        // small map for modal screen
        this.mapZoomed = mapZoomed;
        if (this.mapZoomedLatLng) {
            // if Lat Lon is cached, then the map hasn't been drawn for the clicked on location
            this.drawMapZoomedPoint();
        }
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var ahupuaaData = this.queryHandler.ahupuaaSearch();
        ahupuaaData.getQueryObserver().subscribe(function (ahupuaaData) {
            _this.allAhupuaaData = ahupuaaData.data;
        });
        this.findData();
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 2,
        };
        //should change this to get observable from filter manager
        //this.queryHandler.initFilterListener(this.filters.filterMonitor);
        this.defaultFilterHandle = this.filters.registerFilter();
        this.cfuQueryCtrl.valueChanges.subscribe(function (selectedValue) { return _this.checkIfChangesWereMade(selectedValue, _this.cfuFlattenedQueryArr); });
        this.microbeQueryCtrl.valueChanges.subscribe(function (selectedValue) { return _this.checkIfChangesWereMade(selectedValue, _this.microbesFlattenedQueryArr); });
        this.sampleQueryCtrl.valueChanges.subscribe(function (selectedValue) { return _this.checkIfChangesWereMade(selectedValue, _this.samplesFlattenedQueryArr); });
        //this.findData()
        //console.log(this.defaultFilterHandle);
        //this.defaultFilterSource = this.queryHandler.getFilterObserver(this.defaultFilterHandle);
        // this.defaultFilterSource.subscribe((data: Metadata[]) => {
        //   console.log(data);
        //   //this.testData = data;
        // });
        //set marker images to generated image location to work around 404 bug
        // Marker.prototype.options.icon.options.iconUrl = "assets/markers/marker-icon-red.png";
        // Marker.prototype.options.icon.options.shadowUrl = "assets/marker-shadow.png";
        // Marker.prototype.options.icon.options.iconRetinaUrl = "assets/marker-icon-2x.png";
    };
    MapComponent.prototype.onMove = function (e) {
        this.findData();
    };
    MapComponent.prototype.findData = function () {
        /* cancel any previous queries */
        // this.gpsStream && this.gpsStream.cancel();
        // this.sampleStream && this.sampleStream.cancel();
        // this.microbeStream && this.microbeStream.cancel();
        /* cancel any previous queries END (see microbes line 705) */
        var _this = this;
        /* clear map layers */
        this.resetSelected();
        this.clearMapLayers();
        this.globalLoading = true;
        this.microbesLoading = true;
        this.cfuLoading = true;
        this.qpcrLoading = true;
        this.metadata = [];
        this.metadata2 = [];
        this.filterData = [];
        this.microGPSData = [];
        this.samplesMap = {};
        this.loading = true;
        var bounds = this.map.getBounds(); //  e.layer.getBounds();
        var box = {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [bounds.getSouthWest().lng, bounds.getNorthEast().lat],
                        [bounds.getNorthEast().lng, bounds.getNorthEast().lat],
                        [bounds.getNorthEast().lng, bounds.getSouthWest().lat],
                        [bounds.getSouthWest().lng, bounds.getSouthWest().lat],
                        [bounds.getSouthWest().lng, bounds.getNorthEast().lat],
                    ],
                ],
            },
        };
        var customCircleMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["CircleMarker"].extend({
            options: {
                datum: {},
            },
        });
        var customMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"].extend({
            options: {
                datum: {},
            },
        });
        Object.keys(this.dataGroups).forEach(function (key) {
            var dataGroup = _this.dataGroups[key];
            dataGroup.clearLayers();
        });
        var dataStream = this.queryHandler.spatialSearch([box]);
        if (dataStream.data) {
            this.microGPSData = dataStream.data.slice();
            this.querySamples();
        }
        else {
            this.gpsStream = dataStream;
            dataStream.getQueryObserver().subscribe(function (microGPSData) {
                _this.microGPSData = microGPSData.data;
                if (_this.microGPSData == null) {
                    return;
                }
                _this.querySamples();
            });
        }
    };
    MapComponent.prototype.querySamples = function () {
        var _this = this;
        /* create a hashmap to detect gps location to nest sitedategeo without using a nested for loop (chaz) */
        var locationHashmap = {};
        var watershedHashmap = {};
        this.microGPSData.map(function (microGPS) {
            if (!locationHashmap[microGPS.value.location]) {
                locationHashmap[microGPS.value.location] = microGPS.value;
                locationHashmap[microGPS.value.location].microGPS_ID = microGPS.uuid;
                locationHashmap[microGPS.value.location].siteDateGeochem = [];
            }
            else {
                console.error('duplicate location found in microGPS - ' + microGPS.value.location);
            }
        });
        /* Issue: duplicate waikolu found in microGPS */
        /* END create a hashmap to detect gps location to nest sitedategeo without using a nested for loop (chaz) */
        var sampleStream = this.queryHandler.siteDateSearch(this.microGPSData.map(function (item) { return item.value.location; }), this.currentSampleQuery);
        if (sampleStream.data) {
            /* fix for preventing duplicate API calls */
            this.metadata2 = sampleStream.data.slice();
            this.metadata2.map(function (siteDateGeochem) {
                if (locationHashmap[siteDateGeochem.value.location]) {
                    locationHashmap[siteDateGeochem.value.location].siteDateGeochem.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, siteDateGeochem.value));
                }
            });
            /* clean map to represent the filtered data */
            this.microGPSData = this.microGPSData.filter(function (item) { return item.value.siteDateGeochem && item.value.siteDateGeochem.length; });
            if (this.samplesFilterToggled) { /* only draw points if it's necessary */
                this.drawMapPoints();
            }
            this.queryMicrobes();
            this.queryCFU();
        }
        else {
            this.sampleStream = sampleStream;
            sampleStream.getQueryObserver().subscribe(function (siteDateData) {
                var asyncStatus = siteDateData.status;
                siteDateData = siteDateData.data;
                if (siteDateData == null) {
                    return;
                }
                siteDateData.map(function (siteDateGeochem) {
                    if (locationHashmap[siteDateGeochem.value.location]) {
                        siteDateGeochem.value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, siteDateGeochem.value, locationHashmap[siteDateGeochem.value.location], { checked: false });
                        locationHashmap[siteDateGeochem.value.location].siteDateGeochem.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, siteDateGeochem.value));
                    }
                    else {
                        console.log('No matching location for ' + siteDateGeochem.value.location + ' inside siteDateGeochem document');
                    }
                    _this.metadata2.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, siteDateGeochem));
                });
                if (asyncStatus.finished) {
                    _this.microGPSData = _this.microGPSData.filter(function (item) { return item.value.siteDateGeochem && item.value.siteDateGeochem.length; });
                    if (_this.samplesFilterToggled) {
                        /* clean map to represent the filtered data */
                        _this.drawMapPoints();
                    }
                    _this.queryMicrobes();
                    _this.queryCFU();
                }
            });
        }
    };
    MapComponent.prototype.queryMicrobes = function () {
        var _this = this;
        /* create a hashmap to detect id to nest microbes without using a nested for loop (chaz) */
        this.metadata2.map(function (siteDateGeo) {
            if (!_this.samplesMap[siteDateGeo.value.id]) {
                _this.samplesMap[siteDateGeo.value.id] = siteDateGeo.value;
                _this.samplesMap[siteDateGeo.value.id].microbes = [];
                _this.samplesMap[siteDateGeo.value.id].cfu = []; // create cfu array for upcoming cfu query
            }
            else {
                console.error('duplicate ID found in siteDateGeochem - ' + siteDateGeo.value.id);
            }
        });
        this.microbeMetadata = [];
        var microbeStream = this.queryHandler.microbeSearch(this.metadata2.map(function (item) { return item.value.id; }), this.currentMicrobeQuery);
        if (microbeStream.data) {
            /* look for a better to fix this within query handler */
            this.microbeMetadata = microbeStream.data.slice();
            if (this.microbesFilterToggled) {
                this.drawMicrobes();
            }
            this.microbesLoading = false;
            this.queryQPCR();
        }
        else {
            this.microbeStream = microbeStream;
            microbeStream.getQueryObserver().subscribe(function (microbeData) {
                var asyncStatus = microbeData.status;
                microbeData = microbeData.data;
                if (microbeData == null) {
                    return;
                }
                microbeData.map(function (microbes) {
                    if (_this.samplesMap[microbes.value.id]) {
                        microbes.value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, microbes.value, _this.samplesMap[microbes.value.id]);
                        _this.samplesMap[microbes.value.id].microbes.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, microbes.value));
                    }
                    else {
                        console.log('No matching Site_Date_Geochem for ' + microbes.value.id + ' inside Microbes document');
                    }
                    _this.microbeMetadata.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, microbes));
                });
                if (asyncStatus.finished) {
                    /* I tried to cancel data that is being fetched when a new
                     * findData() instance is called, however, when I cancel, this causes incomplete
                     * data to be cached. Because of race conditions with UI loading and the query component,
                     * I have opted to use a simple UI blocker in the meantime
                     */
                    // this.globalLoading = false;
                    _this.microbesLoading = false;
                    if (_this.microbesFilterToggled) {
                        _this.drawMicrobes();
                    }
                    _this.queryQPCR();
                }
            });
        }
    };
    MapComponent.prototype.drawMicrobes = function () {
        /* END make another query using query handler (Chaz) */
        var _this = this;
        var indices = Object.keys(this.microbeMetadata);
        var i;
        var _loop_1 = function () {
            var index = Number(indices[i]);
            var datum = this_1.microbeMetadata[index]; // need to specify type
            //  if((datum.name=="Water_Quality_Site" && datum.value.resultCount > 0)) || datum._links.associationIds.length > 0){
            this_1.metadata.push(datum);
            var group = NameGroupMap[datum.name];
            //console.log(datum.value.loc);
            var geod = datum.value.loc;
            //console.log(geod)
            var prop = {};
            prop['uuid'] = datum.uuid;
            geod.properties = prop;
            var geojson = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](geod, {
                style: this_1.getStyleByGroup(group),
                pointToLayer: function (feature, latlng) {
                    var icon = _this.getIconByGroup(group);
                    return leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"](latlng, { radius: 5, opacity: 1, fillOpacity: 0.9, color: 'pink' });
                    //return L.marker(latlng, {icon: icon});
                },
                onEachFeature: function (feature, layer) {
                    //  let header = L.DomUtil.create("h6")
                    var wrapper = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var details = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var download = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var goto = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('span', 'entry-link');
                    //details.innerText = JSON.stringify(datum.value);
                    //header.innerText=datum.name.replace(/_/g, ' ');
                    if (datum.name == 'Water_Quality_Site' && datum.value.resultCount > 0) {
                        details.innerHTML =
                            '<br/>Name: ' +
                                datum.value.name +
                                '<br/>ID: ' +
                                datum.value.MonitoringLocationIdentifier +
                                '<br/>Provider: ' +
                                datum.value.ProviderName +
                                '<br/>' +
                                datum.value.description +
                                '<br/>Latitude: ' +
                                datum.value.latitude +
                                '<br/>Longitude: ' +
                                datum.value.longitude +
                                "<br/><a target='_blank' href='" +
                                datum.value.siteUrl +
                                "'>More Details</a>";
                        download.innerHTML =
                            "<br/><a class='btn btn-success' href='https://www.waterqualitydata.us/Result/search?siteid=" +
                                datum.value.MonitoringLocationIdentifier +
                                "&mimeType=csv&zip=yes&sorted=no' target='_blank' > Download " +
                                datum.value.resultCount +
                                ' Measurements</a></br>';
                    }
                    if (datum.name == 'TEST_Microbes') {
                        details.innerHTML =
                            '<br/>Location: ' +
                                datum.value.location +
                                '<br/>Watershed: ' +
                                datum.value.watershed +
                                '<br/>Site_Enviro: ' +
                                datum.value.site_enviro;
                    }
                    var popup = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"]({ autoPan: false });
                    //  wrapper.append(header)
                    wrapper.append(details);
                    //  wrapper.append(download);
                    //  wrapper.append(goto);
                    //  let linkDiv = wrapper.getElementsByClassName("entry-link");
                    var gotoWrapper = function () {
                        console.log('click');
                    };
                    //linkDiv[0].addEventListener("click", gotoWrapper);
                    popup.setContent(wrapper);
                    layer.bindPopup(popup);
                    layer.on('mouseover', function () {
                        layer.openPopup();
                    });
                    layer.on('click', _this.markerClick.bind(_this));
                    // function(){ {
                    //   openModalDialog(datum);
                    //   console.log(this.selectedMetadata);
                    //   (function ($) {
                    //       $('#location-dialog').modal('show');
                    //       //$('#location-dialog').modal('show');
                    //     })(jQuery);
                    //document.getElementById('location-modal').style.display = 'block';
                    //$("#location-modal").modal('show');
                    //}})
                    if (_this.dataGroups[group] != undefined) {
                        _this.currentMicrobeLayer = layer;
                        _this.dataGroups[group].addLayer(layer);
                    }
                },
            });
            this_1.filterData = this_1.metadata2;
            this_1.dtTrigger.next();
        };
        var this_1 = this;
        for (i = 0; i < indices.length; i++) {
            _loop_1();
        }
        this.loading = false;
        this.globalLoading = false;
    };
    MapComponent.prototype.queryCFU = function () {
        var _this = this;
        this.cfuMetadata = [];
        var cfuStream = this.queryHandler.cfuSearch(this.metadata2.map(function (item) { return item.value.id; }), this.currentCFUQuery);
        if (cfuStream.data) {
            this.cfuMetadata = cfuStream.data.slice();
            if (this.cfuFilterToggled) {
                this.drawCFU(); /* draw cfu points  - should be able to reuse function */
            }
            this.cfuLoading = false;
        }
        else {
            this.cfuStream = cfuStream;
            cfuStream.getQueryObserver().subscribe(function (cfuData) {
                var asyncStatus = cfuData.status;
                cfuData = cfuData.data;
                if (cfuData == null) {
                    return;
                }
                cfuData.map(function (cfu) {
                    if (_this.samplesMap[cfu.value.id]) {
                        cfu.value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cfu.value, _this.samplesMap[cfu.value.id]);
                        _this.samplesMap[cfu.value.id].cfu.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cfu.value));
                    }
                    else {
                        //console.log('No matching Site_Date_Geochem for ' + cfu.value.id + ' inside CFU document');
                    }
                    _this.cfuMetadata.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cfu));
                });
                if (asyncStatus.finished) {
                    _this.cfuLoading = false;
                    if (_this.cfuFilterToggled) {
                        _this.drawCFU();
                    }
                }
            });
        }
    };
    MapComponent.prototype.queryQPCR = function () {
        var _this = this;
        this.qpcrMetadata = [];
        var microbesMap = {};
        this.microbeMetadata.map(function (microbe) {
            if (!(microbe.value.sample_replicate in microbesMap)) {
                microbesMap[microbe.value.sample_replicate] = microbe.value;
                microbesMap[microbe.value.sample_replicate].qpcr = [];
            }
            else {
                // duplicate found - currently disabled to not flood console:
                // console.error('duplicate ID found in microbe - ' + microbe.value.id);
            }
        });
        var qpcrStream = this.queryHandler.qpcrSearch(this.microbeMetadata.map(function (item) { return item.value.sample_replicate; }), this.currentQPCRQuery);
        if (qpcrStream.length) {
            var newMap_1 = [];
            qpcrStream.map(function (item) { return item.data.map(function (qpcrItem) { return newMap_1.push(qpcrItem); }); });
            this.qpcrMetadata = newMap_1;
            if (this.qpcrFilterToggled) {
                this.drawQPCR(); /* draw qcpr points  - should be able to reuse function */
            }
        }
        else {
            this.qpcrStream = qpcrStream;
            qpcrStream.getQueryObserver().subscribe(function (qcprData) {
                var asyncStatus = qcprData.status;
                qcprData = qcprData.data;
                if (qcprData == null) {
                    return;
                }
                qcprData.map(function (qcpr) {
                    if (microbesMap[qcpr.value.sample_replicate]) {
                        qcpr.value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, qcpr.value, microbesMap[qcpr.value.sample_replicate]);
                        // microbesMap[qcpr.value.sample_replicate].qcpr.push({ ...qcpr.value }); // undefined issue
                    }
                    else {
                        //console.log('No matching microbe for ' + qcpr.value.sample_replicate + ' inside qcpr document');
                    }
                    _this.qpcrMetadata.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, qcpr));
                });
                if (asyncStatus.finished) {
                    if (_this.qpcrFilterToggled) {
                        _this.drawQPCR();
                    }
                }
            });
        }
        this.qpcrLoading = false;
    };
    MapComponent.prototype.drawCFU = function () {
        var _this = this;
        var indices = Object.keys(this.cfuMetadata);
        var i;
        var _loop_2 = function () {
            var index = Number(indices[i]);
            var datum = this_2.cfuMetadata[index];
            this_2.metadata.push(datum);
            var group = NameGroupMap[datum.name];
            //console.log(datum.value.loc);
            var geod = datum.value.loc;
            //console.log(geod)
            var prop = {};
            prop['uuid'] = datum.uuid;
            geod.properties = prop;
            var geojson = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](geod, {
                style: this_2.getStyleByGroup(group),
                pointToLayer: function (feature, latlng) {
                    var icon = _this.getIconByGroup(group);
                    return leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"](latlng, { radius: 5, opacity: 1, fillOpacity: 0.9, color: 'purple' });
                    //return L.marker(latlng, {icon: icon});
                },
                onEachFeature: function (feature, layer) {
                    //  let header = L.DomUtil.create("h6")
                    var wrapper = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var details = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var download = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var goto = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('span', 'entry-link');
                    if (datum.name == 'TEST_CFU') {
                        details.innerHTML =
                            '<br/>Location: ' +
                                datum.value.location +
                                '<br/>Watershed: ' +
                                datum.value.watershed +
                                '<br/>Site_Enviro: ' +
                                datum.value.site_enviro;
                    }
                    var popup = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"]({ autoPan: false });
                    wrapper.append(details);
                    popup.setContent(wrapper);
                    layer.bindPopup(popup);
                    layer.on('mouseover', function () {
                        layer.openPopup();
                    });
                    layer.on('click', _this.markerClick.bind(_this));
                    if (_this.dataGroups[group] != undefined) {
                        _this.currentMicrobeLayer = layer;
                        _this.dataGroups[group].addLayer(layer);
                    }
                },
            });
            this_2.filterData = this_2.metadata2;
            this_2.dtTrigger.next();
        };
        var this_2 = this;
        for (i = 0; i < indices.length; i++) {
            _loop_2();
        }
        this.loading = false;
        this.globalLoading = false;
    };
    MapComponent.prototype.drawQPCR = function () {
        var _this = this;
        var indices = Object.keys(this.qpcrMetadata);
        var i;
        var _loop_3 = function () {
            var index = Number(indices[i]);
            var datum = this_3.qpcrMetadata[index];
            this_3.metadata.push(datum);
            var group = NameGroupMap[datum.name];
            var geod = datum.value.loc;
            var prop = {};
            prop['uuid'] = datum.uuid;
            geod.properties = prop;
            var geojson = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](geod, {
                style: this_3.getStyleByGroup(group),
                pointToLayer: function (feature, latlng) {
                    var icon = _this.getIconByGroup(group);
                    return leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"](latlng, { radius: 5, opacity: 1, fillOpacity: 0.9, color: 'yellow' });
                    //return L.marker(latlng, {icon: icon});
                },
                onEachFeature: function (feature, layer) {
                    //  let header = L.DomUtil.create("h6")
                    var wrapper = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var details = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var download = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var goto = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('span', 'entry-link');
                    if (datum.name == 'TEST_Fem_A') {
                        details.innerHTML =
                            '<br/>Location: ' +
                                datum.value.location +
                                '<br/>Watershed: ' +
                                datum.value.watershed +
                                '<br/>Site_Enviro: ' +
                                datum.value.site_enviro;
                    }
                    var popup = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"]({ autoPan: false });
                    wrapper.append(details);
                    popup.setContent(wrapper);
                    layer.bindPopup(popup);
                    layer.on('mouseover', function () {
                        layer.openPopup();
                    });
                    layer.on('click', _this.markerClick.bind(_this));
                    if (_this.dataGroups[group] != undefined) {
                        _this.currentMicrobeLayer = layer;
                        _this.dataGroups[group].addLayer(layer);
                    }
                },
            });
            this_3.filterData = this_3.metadata2;
            this_3.dtTrigger.next();
        };
        var this_3 = this;
        for (i = 0; i < indices.length; i++) {
            _loop_3();
        }
        this.loading = false;
        this.globalLoading = false;
    };
    MapComponent.prototype.drawMapPoints = function () {
        /* END make another query using query handler (Chaz) */
        var _this = this;
        var indices = Object.keys(this.microGPSData);
        var i;
        var _loop_4 = function () {
            var index = Number(indices[i]);
            var datum = this_4.microGPSData[index]; // need to specify type
            //  if((datum.name=="Water_Quality_Site" && datum.value.resultCount > 0)) || datum._links.associationIds.length > 0){
            this_4.metadata.push(datum);
            var group = NameGroupMap[datum.name];
            //console.log(datum.value.loc);
            var geod = datum.value.loc;
            //console.log(geod)
            var prop = {};
            prop['uuid'] = datum.uuid;
            geod.properties = prop;
            var geojson = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](geod, {
                style: this_4.getStyleByGroup(group),
                pointToLayer: function (feature, latlng) {
                    var icon = _this.getIconByGroup(group);
                    return leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"](latlng, { radius: 5, opacity: 1, fillOpacity: 0.9, color: 'gray' });
                    //return L.marker(latlng, {icon: icon});
                },
                onEachFeature: function (feature, layer) {
                    //  let header = L.DomUtil.create("h6")
                    var wrapper = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var details = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var download = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                    var goto = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('span', 'entry-link');
                    //details.innerText = JSON.stringify(datum.value);
                    //header.innerText=datum.name.replace(/_/g, ' ');
                    if (datum.name == 'Water_Quality_Site' && datum.value.resultCount > 0) {
                        details.innerHTML =
                            '<br/>Name: ' +
                                datum.value.name +
                                '<br/>ID: ' +
                                datum.value.MonitoringLocationIdentifier +
                                '<br/>Provider: ' +
                                datum.value.ProviderName +
                                '<br/>' +
                                datum.value.description +
                                '<br/>Latitude: ' +
                                datum.value.latitude +
                                '<br/>Longitude: ' +
                                datum.value.longitude +
                                "<br/><a target='_blank' href='" +
                                datum.value.siteUrl +
                                "'>More Details</a>";
                        download.innerHTML =
                            "<br/><a class='btn btn-success' href='https://www.waterqualitydata.us/Result/search?siteid=" +
                                datum.value.MonitoringLocationIdentifier +
                                "&mimeType=csv&zip=yes&sorted=no' target='_blank' > Download " +
                                datum.value.resultCount +
                                ' Measurements</a></br>';
                    }
                    if (datum.name == 'TEST_Micro_GPS') {
                        details.innerHTML =
                            '<br/>Location: ' +
                                datum.value.location +
                                '<br/>Watershed: ' +
                                datum.value.watershed +
                                '<br/>Site_Enviro: ' +
                                datum.value.site_enviro;
                    }
                    var popup = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"]({ autoPan: false });
                    //  wrapper.append(header)
                    wrapper.append(details);
                    //  wrapper.append(download);
                    //  wrapper.append(goto);
                    //  let linkDiv = wrapper.getElementsByClassName("entry-link");
                    //linkDiv[0].addEventListener("click", gotoWrapper);
                    popup.setContent(wrapper);
                    layer.bindPopup(popup);
                    layer.on('mouseover', function () {
                        layer.openPopup();
                    });
                    layer.on('click', _this.markerClick.bind(_this));
                    // function(){ {
                    //   openModalDialog(datum);
                    //   console.log(this.selectedMetadata);
                    //   (function ($) {
                    //       $('#location-dialog').modal('show');
                    //       //$('#location-dialog').modal('show');
                    //     })(jQuery);
                    //document.getElementById('location-modal').style.display = 'block';
                    //$("#location-modal").modal('show');
                    //}})
                    if (_this.dataGroups[group] != undefined) {
                        _this.currentSampleLayer = layer;
                        _this.dataGroups[group].addLayer(layer);
                    }
                },
            });
            this_4.filterData = this_4.metadata2; // contains state of water samples in UI
            this_4.dtTrigger.next();
        };
        var this_4 = this;
        for (i = 0; i < indices.length; i++) {
            _loop_4();
        }
        this.loading = false;
        this.globalLoading = false;
    };
    MapComponent.prototype.onDrawCreated = function (e) {
        // tslint:disable-next-line:no-console
        var _this = this;
        console.log('is this getting hit at all?\n\n\n\n');
        this.metadata = [];
        this.metadata2 = [];
        console.log('Draw Created Event!');
        this.drawnItems.clearLayers();
        this.drawnItems.addLayer(e.layer);
        var bounds = e.layer.getBounds();
        this.map.fitBounds(bounds);
        Object.keys(this.dataGroups).forEach(function (key) {
            var dataGroup = _this.dataGroups[key];
            dataGroup.clearLayers();
        });
        var dataStream = this.queryHandler.spatialSearch([e.layer.toGeoJSON()]);
        //this.queryHandler.requestData(this.defaultFilterHandle, 0, MapComponent.DEFAULT_RESULTS).then((data) => console.log(data));
        // setTimeout(() => {
        //   this.queryHandler.next(this.defaultFilterHandle).then((data) => console.log(data));
        //   setTimeout(() => {
        //     this.queryHandler.previous(this.defaultFilterHandle).then((data) => console.log(data));
        //     this.queryHandler.previous(this.defaultFilterHandle).then((data) => console.log(data));
        //     setTimeout(() => {
        //       this.queryHandler.next(this.defaultFilterHandle).then((data) => console.log(data));
        //       this.queryHandler.next(this.defaultFilterHandle).then((data) => console.log(data));
        //     }, 2000);
        //   }, 2000);
        // }, 2000);
        //this.queryHandler.getDataStreamObserver(this.defaultFilterHandle).subscribe((data: IndexMetadataMap) => {
        dataStream.getQueryObserver().subscribe(function (microGPSData) {
            _this.microGPSData = microGPSData.data;
            //data;
            if (_this.microGPSData == null) {
                return;
            }
            // console.log(data);
            /* create a hashmap to detect gps location to nest sitedategeo without using a nested for loop (chaz) */
            var locationHashmap = {};
            _this.microGPSData.map(function (microGPS) {
                if (!locationHashmap[microGPS.value.location]) {
                    locationHashmap[microGPS.value.location] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, microGPS.value, { microGPS_ID: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, microGPS) });
                }
                else {
                    console.error('duplicate location found in microGPS - ' + microGPS.value.location);
                }
            });
            /* Issue: duplicate waikolu found in microGPS */
            /* END create a hashmap to detect gps location to nest sitedategeo without using a nested for loop (chaz) */
            /* make another query using query handler (Chaz) */
            var sampleStream = _this.queryHandler.siteDateSearch(_this.microGPSData.map(function (item) { return item.value.location; }), _this.currentSampleQuery);
            sampleStream.getQueryObserver().subscribe(function (siteDateData) {
                siteDateData = siteDateData.data;
                if (siteDateData == null) {
                    return;
                }
                siteDateData.map(function (siteDateGeochem) {
                    if (locationHashmap[siteDateGeochem.value.location]) {
                        siteDateGeochem.value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, siteDateGeochem.value, locationHashmap[siteDateGeochem.value.location]);
                    }
                    else {
                        console.log('No matching location for ' + siteDateGeochem.value.location + ' inside siteDateGeochem document');
                    }
                    _this.metadata2.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, siteDateGeochem));
                });
            });
            /* END make another query using query handler (Chaz) */
            var indices = Object.keys(_this.microGPSData);
            var i;
            var _loop_5 = function () {
                var index = Number(indices[i]);
                var datum = _this.microGPSData[index]; // need to specify type
                //  if((datum.name=="Water_Quality_Site" && datum.value.resultCount > 0)) || datum._links.associationIds.length > 0){
                _this.metadata.push(datum);
                var group = NameGroupMap[datum.name];
                //console.log(datum.value.loc);
                var geojson = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](datum.value.loc, {
                    style: _this.getStyleByGroup(group),
                    pointToLayer: function (feature, latlng) {
                        var icon = _this.getIconByGroup(group);
                        return leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"](latlng, { icon: icon });
                    },
                    onEachFeature: function (feature, layer) {
                        var header = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('h6');
                        var wrapper = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                        var details = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                        var download = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                        var goto = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('span', 'entry-link');
                        //details.innerText = JSON.stringify(datum.value);
                        header.innerText = datum.name.replace(/_/g, ' ');
                        if (datum.name == 'Water_Quality_Site' && datum.value.resultCount > 0) {
                            details.innerHTML =
                                '<br/>Name: ' +
                                    datum.value.name +
                                    '<br/>ID: ' +
                                    datum.value.MonitoringLocationIdentifier +
                                    '<br/>Provider: ' +
                                    datum.value.ProviderName +
                                    '<br/>' +
                                    datum.value.description +
                                    '<br/>Latitude: ' +
                                    datum.value.latitude +
                                    '<br/>Longitude: ' +
                                    datum.value.longitude +
                                    "<br/><a target='_blank' href='" +
                                    datum.value.siteUrl +
                                    "'>More Details</a>";
                            download.innerHTML =
                                "<br/><a class='btn btn-success' href='https://www.waterqualitydata.us/Result/search?siteid=" +
                                    datum.value.MonitoringLocationIdentifier +
                                    "&mimeType=csv&zip=yes&sorted=no' target='_blank' > Download " +
                                    datum.value.resultCount +
                                    ' Measurements</a></br>';
                        }
                        if (datum.name == 'TEST_Micro_GPS') {
                            details.innerHTML =
                                '<br/>Location: ' +
                                    datum.value.location +
                                    '<br/>Watershed: ' +
                                    datum.value.Watershed +
                                    '<br/>Latitude: ' +
                                    datum.value.latitude +
                                    '<br/>Longitude: ' +
                                    datum.value.longitude +
                                    '<br/><button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#location-modal" (click)="openModalSite(' +
                                    datum +
                                    ')">View</button>';
                        }
                        var popup = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"]();
                        wrapper.append(details);
                        wrapper.append(download);
                        wrapper.append(goto);
                        var linkDiv = wrapper.getElementsByClassName('entry-link');
                        var gotoWrapper = function () {
                        };
                        linkDiv[0].addEventListener('click', gotoWrapper);
                        popup.setContent(wrapper);
                        layer.bindPopup(popup);
                        if (_this.dataGroups[group] != undefined) {
                            _this.dataGroups[group].addLayer(layer);
                        }
                    },
                });
                _this.filterData = _this.metadata2;
            };
            for (i = 0; i < indices.length; i++) {
                _loop_5();
            }
        });
    };
    MapComponent.prototype.getStyleByGroup = function (group) {
        var style;
        switch (group) {
            case 'waterQualitySites': {
                style = {
                    color: '#238B45',
                    weight: 3,
                    opacity: 0.3,
                };
                break;
            }
            case 'sites': {
                style = {
                    color: '#CB181D',
                    weight: 3,
                    opacity: 0.3,
                };
                break;
            }
            case 'wells': {
                style = {
                    color: '#2171B5',
                    weight: 3,
                    opacity: 0.3,
                };
                break;
            }
            case 'MicroGPS': {
                style = {
                    color: '#2171B5',
                    weight: 3,
                    opacity: 0.3,
                };
                break;
            }
        }
        return style;
    };
    MapComponent.prototype.getIconByGroup = function (group) {
        var icon;
        switch (group) {
            case 'waterQualitySites': {
                icon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
                    iconUrl: 'assets/markers/marker-icon-green.png',
                    iconRetinaUrl: 'assets/markers/marker-icon-2x-green.png',
                    shadowUrl: 'assets/marker-shadow.png',
                });
                break;
            }
            case 'sites': {
                icon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
                    iconUrl: 'assets/markers/marker-icon-red.png',
                    iconRetinaUrl: 'assets/markers/marker-icon-2x-red.png',
                    shadowUrl: 'assets/marker-shadow.png',
                });
                break;
            }
            case 'wells': {
                icon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
                    iconUrl: 'assets/marker-icon.png',
                    iconRetinaUrl: 'assets/marker-icon-2x.png',
                    //shadowUrl: "assets/marker-shadow.png",
                    iconSize: [15, 25],
                });
                break;
            }
            case 'MicroGPS': {
                icon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
                    iconUrl: 'assets/marker-icon.png',
                    iconRetinaUrl: 'assets/marker-icon-2x.png',
                    //shadowUrl: "assets/marker-shadow.png",
                    iconSize: [15, 25],
                });
                break;
            }
        }
        return icon;
    };
    MapComponent.prototype.markerClick = function (e) {
    };
    MapComponent.prototype.openModalSite = function (site) {
        this.toggleAhupuaaClosed();
        this.selectedMetadata = site;
        this.selectedAhupuaa = this.allAhupuaaData.find(function (element) {
            if (element.value.watershed === site.value.watershed) {
                return element;
            }
            element.watershed === site.value.watersehd;
        });
        this.openMapZoomed(site); // small map on modal screen
    };
    MapComponent.prototype.openLinkedPopup = function (site) {
        //var tempLL = L.latLng([site.value.latitude,site.value.longitude]);
        var tempLL = leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]([site.value.latitude, site.value.longitude]);
        var details = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
        if (site.name == 'TEST_Site_Date_Geochem') {
            details.innerHTML =
                '<br/>Name: ' +
                    site.value.location +
                    '<br/>Watershed: ' +
                    site.value.watershed +
                    '<br/>Site_Enviro: ' +
                    site.value.site_enviro;
        }
        if (site.name == 'TEST_Microbes') {
            details.innerHTML =
                '<br/>Name: ' +
                    site.value.location +
                    '<br/>Watershed: ' +
                    site.value.watershed +
                    '<br/>Site_Enviro: ' +
                    site.value.site_enviro;
        }
        if (site.name == 'TEST_CFU') {
            details.innerHTML =
                '<br/>Name: ' +
                    site.value.location +
                    '<br/>Watershed: ' +
                    site.value.watershed +
                    '<br/>Site_Enviro: ' +
                    site.value.site_enviro;
        }
        if (site.name == 'TEST_Fem_A') {
            details.innerHTML =
                '<br/>Name: ' +
                    site.value.location +
                    '<br/>Watershed: ' +
                    site.value.watershed +
                    '<br/>Site_Enviro: ' +
                    site.value.site_enviro;
        }
        leaflet__WEBPACK_IMPORTED_MODULE_2__["popup"]().setLatLng(tempLL).setContent(details).openOn(this.map);
    };
    MapComponent.prototype.openMapZoomed = function (site) {
        // cache current Lat Lon. when map is ready it will call drawMapZoomedPoint (onMapZoomedReady())
        this.mapZoomedLatLng = leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]([site.value.latitude, site.value.longitude]);
        if (this.mapZoomed) {
            // because small map is on the modal screen, map may not be ready yet. only draw circle if map is ready
            this.drawMapZoomedPoint();
        }
    };
    MapComponent.prototype.drawMapZoomedPoint = function () {
        // move to the clicked location and draw a circle
        this.mapZoomed.setView(this.mapZoomedLatLng, 12);
        if (this.mapZoomedCircle) {
            // remove previous circle
            this.mapZoomed.removeLayer(this.mapZoomedCircle);
            this.mapZoomedCircle = null;
        }
        var icon = this.getIconByGroup('wells');
        // this.mapZoomedCircle = L.circleMarker(latlng, {radius:5,opacity: 1,fillOpacity: 0.9,color:'gray'})
        // this.mapZoomedCircle = L.circle(this.mapZoomedLatLng, {fillOpacity: 1, radius: 100}).addTo(this.mapZoomed);
        this.mapZoomedCircle = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"](this.mapZoomedLatLng, { icon: icon }).addTo(this.mapZoomed);
        // remove Lat Lon cache
        this.mapZoomedLatLng = null;
    };
    MapComponent.prototype.hideModal = function () {
        // this interferes with the small map.
        // this.selectedMetadata = null;
        //$("#location-modal").modal('hide');
    };
    MapComponent.DEFAULT_RESULTS = 10;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('entries'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], MapComponent.prototype, "entries", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_query_handler_service__WEBPACK_IMPORTED_MODULE_4__["QueryHandlerService"],
            _services_filter_manager_service__WEBPACK_IMPORTED_MODULE_5__["FilterManagerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])
    ], MapComponent);
    return MapComponent;
}());

var NameGroupMap;
(function (NameGroupMap) {
    NameGroupMap["Water_Quality_Site"] = "waterQualitySites";
    NameGroupMap["Site"] = "sites";
    NameGroupMap["Well"] = "wells";
    NameGroupMap["TEST_Micro_GPS"] = "MicroGPS";
    NameGroupMap["TEST_Microbes"] = "microbes";
    NameGroupMap["TEST_CFU"] = "cfu";
    NameGroupMap["TEST_Fem_A"] = "qpcr";
})(NameGroupMap || (NameGroupMap = {}));
var GroupLabelMap;
(function (GroupLabelMap) {
    GroupLabelMap["waterQualitySites"] = "Water Quality Sites";
    GroupLabelMap["sites"] = "Sites";
    GroupLabelMap["wells"] = "Wells";
    GroupLabelMap["TEST_Micro_GPS"] = "MicroGPS";
    GroupLabelMap["TEST_Microbes"] = "microbes";
    GroupLabelMap["TEST_CFU"] = "cfu";
    GroupLabelMap["TEST_Fem_A"] = "qpcr";
})(GroupLabelMap || (GroupLabelMap = {}));


/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    position: absolute;\n    top: 60px;\n    bottom: 60px;\n    left: 0;\n    right: 0;\n  }\n  \n  .example-sidenav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 200px;\n    background: rgba(255, 0, 0, 0.5);\n  }\n  \n  .example-header {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  .header-right {\n    position: absolute;\n    right: 1%;\n    line-height: 0.8;\n    font-size: normal !important;\n    cursor: pointer\n  }\n  \n  .header-left {\n    position: absolute;\n    left: 1%\n  }\n  \n  .example-footer {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    font-size: smaller;\n    font-weight: normal;\n    letter-spacing: 1.2;\n  }\n  \n  .nav-links {\n    font-weight: 200;\n    line-height: 0.8;\n    font-size: normal;\n  }\n  \n  .nav-links:hover {\n    text-decoration: underline;\n    color: blue\n  }\n  \n  .nav-link-container {\n    padding-top: 70%;\n    padding-bottom: 70%;\n    padding-left: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: left;\n    width: 100%; height: 80%; margin-top: 40%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztHQUNWOztFQUVEO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGlDQUFpQztHQUNsQzs7RUFFRDtJQUNFLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7R0FDVjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLFFBQVE7R0FDVDs7RUFFRDtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7R0FDWjs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixZQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQjtHQUMzQyIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIGJvdHRvbTogNjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMSU7XG4gICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICBmb250LXNpemU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlclxuICB9XG5cbiAgLmhlYWRlci1sZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMSVcbiAgfVxuICBcbiAgLmV4YW1wbGUtZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMjtcbiAgfVxuXG4gIC5uYXYtbGlua3Mge1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICBmb250LXNpemU6IG5vcm1hbDtcbiAgfVxuXG4gIC5uYXYtbGlua3M6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiBibHVlXG4gIH1cbiAgXG4gIC5uYXYtbGluay1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA3MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDcwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogODAlOyBtYXJnaW4tdG9wOiA0MCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <mat-toolbar class=\"example-header\" style=\"width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center;\">\n      <div class=\"header-left\">Admin Dashboard</div>\n      <div class=\"header-right\" (click)=\"tempLogout()\">Sign out</div>\n    </mat-toolbar>\n\n    <mat-sidenav-container class=\"example-container\">\n      <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\n                   [fixedInViewport]=0 [fixedTopGap]=0\n                   [fixedBottomGap]=0>\n\n        <div class=\"nav-link-container\">\n          <a><h5 class=\"nav-links\">Requests</h5></a>\n          <a><h5 class=\"nav-links\">Request History</h5></a>\n          <a href=\"https://chazkondo.github.io/ikewai-admin-gh/map\"><h5 class=\"nav-links\">Map</h5></a>\n        </div>\n      </mat-sidenav>\n      <h3 class=\"p-3 text-center\">Sample Requests</h3>\n      <div class=\"container\">\n          <table class=\"table table-striped table-bordered\">\n              <thead>\n                  <tr>\n                      <th>Name</th>\n                      <th>Email</th>\n                      <th>Affiliation</th>\n                      <th>Reason</th>\n                      <th>Sample Specifications</th>\n                      <th>Sample Ids</th>\n                      <th>Approve</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let item of fakeData\">\n                      <td>{{item.firstName}} {{item.lastName}}</td>\n                      <td>{{item.email}}</td>\n                      <td>{{item.affiliation}}</td>\n                      <td>{{item.reason}}</td>\n                      <td>{{item.sampleSpecifications}}</td>\n                      <td>{{item.sampleIds}}</td>\n                      <td>{{item.approved ? null : '✅ ❌'}}</td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n    </mat-sidenav-container>\n    <mat-toolbar class=\"example-footer\">Ike Wai - Microbial Samples</mat-toolbar>\n  </ng-container>\n\n\n  \n  \n  <!-- Copyright 2019 Google Inc. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_query_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/query-handler.service */ "./src/app/_services/query-handler.service.ts");





/** @title Responsive sidenav */
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(fb, queryHandler, route, router) {
        this.queryHandler = queryHandler;
        this.route = route;
        this.router = router;
        this.fakeData = [{
                "id": 1,
                "firstName": "Nert",
                "lastName": "Wavish",
                "affiliation": "Trilia",
                "email": "nwavish0@cmu.edu",
                "reason": "consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 2,
                "firstName": "Heywood",
                "lastName": "O'Feeny",
                "affiliation": "Wikivu",
                "email": "hofeeny1@whitehouse.gov",
                "reason": "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 3,
                "firstName": "Linnet",
                "lastName": "Witchard",
                "affiliation": "Fadeo",
                "email": "lwitchard2@clickbank.net",
                "reason": "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 4,
                "firstName": "Horacio",
                "lastName": "Windebank",
                "affiliation": "Yata",
                "email": "hwindebank3@java.com",
                "reason": "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 5,
                "firstName": "Tiena",
                "lastName": "Dayment",
                "affiliation": "Skiba",
                "email": "tdayment4@mapquest.com",
                "reason": "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 6,
                "firstName": "Marianna",
                "lastName": "Attawell",
                "affiliation": "Blogpad",
                "email": "mattawell5@multiply.com",
                "reason": "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 7,
                "firstName": "Owen",
                "lastName": "Balwin",
                "affiliation": "Plambee",
                "email": "obalwin6@reference.com",
                "reason": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 8,
                "firstName": "Wendell",
                "lastName": "Langmaid",
                "affiliation": "Zoovu",
                "email": "wlangmaid7@geocities.com",
                "reason": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 9,
                "firstName": "Christy",
                "lastName": "Elvy",
                "affiliation": "Jabbertype",
                "email": "celvy8@aol.com",
                "reason": "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 10,
                "firstName": "Mordy",
                "lastName": "Crepin",
                "affiliation": "Tazzy",
                "email": "mcrepin9@yandex.ru",
                "reason": "lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 11,
                "firstName": "Lyle",
                "lastName": "Thickin",
                "affiliation": "Yakijo",
                "email": "lthickina@cbslocal.com",
                "reason": "id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 12,
                "firstName": "Bernelle",
                "lastName": "Boughen",
                "affiliation": "JumpXS",
                "email": "bboughenb@sbwire.com",
                "reason": "convallis nunc proin at turpis a pede posuere nonummy integer non",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 13,
                "firstName": "Bamby",
                "lastName": "Rendell",
                "affiliation": "Zazio",
                "email": "brendellc@t-online.de",
                "reason": "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 14,
                "firstName": "Caroline",
                "lastName": "Gilluley",
                "affiliation": "Realbuzz",
                "email": "cgilluleyd@geocities.com",
                "reason": "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 15,
                "firstName": "Celestyna",
                "lastName": "Vasyanin",
                "affiliation": "Rhyzio",
                "email": "cvasyanine@yellowbook.com",
                "reason": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 16,
                "firstName": "Tad",
                "lastName": "Stolte",
                "affiliation": "Janyx",
                "email": "tstoltef@cbc.ca",
                "reason": "lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 17,
                "firstName": "Perri",
                "lastName": "France",
                "affiliation": "Jaxbean",
                "email": "pfranceg@indiatimes.com",
                "reason": "felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 18,
                "firstName": "Pearce",
                "lastName": "Arnault",
                "affiliation": "JumpXS",
                "email": "parnaulth@nsw.gov.au",
                "reason": "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 19,
                "firstName": "Cassaundra",
                "lastName": "Heild",
                "affiliation": "Tagcat",
                "email": "cheildi@skype.com",
                "reason": "dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 20,
                "firstName": "Othella",
                "lastName": "Benasik",
                "affiliation": "Flipbug",
                "email": "obenasikj@newsvine.com",
                "reason": "vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 21,
                "firstName": "Lamar",
                "lastName": "Kleimt",
                "affiliation": "Jatri",
                "email": "lkleimtk@blogger.com",
                "reason": "ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 22,
                "firstName": "Donielle",
                "lastName": "Cluitt",
                "affiliation": "Jaxspan",
                "email": "dcluittl@goodreads.com",
                "reason": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 23,
                "firstName": "Reeva",
                "lastName": "Geraudy",
                "affiliation": "Gabvine",
                "email": "rgeraudym@etsy.com",
                "reason": "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 24,
                "firstName": "Juliet",
                "lastName": "Impy",
                "affiliation": "Thoughtworks",
                "email": "jimpyn@census.gov",
                "reason": "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 25,
                "firstName": "Pammi",
                "lastName": "Pedlingham",
                "affiliation": "Topdrive",
                "email": "ppedlinghamo@cornell.edu",
                "reason": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 26,
                "firstName": "Rafael",
                "lastName": "Plessing",
                "affiliation": "Brainverse",
                "email": "rplessingp@army.mil",
                "reason": "eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 27,
                "firstName": "Barbara",
                "lastName": "Woolway",
                "affiliation": "Jabbersphere",
                "email": "bwoolwayq@thetimes.co.uk",
                "reason": "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 28,
                "firstName": "Rae",
                "lastName": "Rockwill",
                "affiliation": "Cogidoo",
                "email": "rrockwillr@csmonitor.com",
                "reason": "egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 29,
                "firstName": "Sena",
                "lastName": "Bambury",
                "affiliation": "Wikido",
                "email": "sbamburys@constantcontact.com",
                "reason": "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 30,
                "firstName": "Otes",
                "lastName": "Sawley",
                "affiliation": "Thoughtblab",
                "email": "osawleyt@omniture.com",
                "reason": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 31,
                "firstName": "Shani",
                "lastName": "Polin",
                "affiliation": "Quatz",
                "email": "spolinu@amazon.co.uk",
                "reason": "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 32,
                "firstName": "Adolphe",
                "lastName": "Caveau",
                "affiliation": "Jayo",
                "email": "acaveauv@cocolog-nifty.com",
                "reason": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 33,
                "firstName": "Ode",
                "lastName": "Siddele",
                "affiliation": "Yakidoo",
                "email": "osiddelew@wp.com",
                "reason": "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 34,
                "firstName": "Derek",
                "lastName": "Keegan",
                "affiliation": "Kazu",
                "email": "dkeeganx@amazon.co.jp",
                "reason": "vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 35,
                "firstName": "Maxie",
                "lastName": "Greiswood",
                "affiliation": "Realbuzz",
                "email": "mgreiswoody@smh.com.au",
                "reason": "ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 36,
                "firstName": "Oralla",
                "lastName": "Baterip",
                "affiliation": "Trilia",
                "email": "obateripz@gravatar.com",
                "reason": "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 37,
                "firstName": "Rowan",
                "lastName": "Behrend",
                "affiliation": "Riffpath",
                "email": "rbehrend10@mapy.cz",
                "reason": "sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 38,
                "firstName": "Darcie",
                "lastName": "Geck",
                "affiliation": "Skynoodle",
                "email": "dgeck11@wordpress.com",
                "reason": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 39,
                "firstName": "Ianthe",
                "lastName": "Luparti",
                "affiliation": "Jetwire",
                "email": "iluparti12@army.mil",
                "reason": "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 40,
                "firstName": "Weber",
                "lastName": "Zanetti",
                "affiliation": "Skinix",
                "email": "wzanetti13@jalbum.net",
                "reason": "consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 41,
                "firstName": "Dorian",
                "lastName": "Mathe",
                "affiliation": "Pixoboo",
                "email": "dmathe14@liveinternet.ru",
                "reason": "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 42,
                "firstName": "Jeri",
                "lastName": "Angier",
                "affiliation": "Twitterbridge",
                "email": "jangier15@usatoday.com",
                "reason": "ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 43,
                "firstName": "Tess",
                "lastName": "Shillabeer",
                "affiliation": "Rhynoodle",
                "email": "tshillabeer16@nps.gov",
                "reason": "in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 44,
                "firstName": "Britt",
                "lastName": "Dunkinson",
                "affiliation": "Eare",
                "email": "bdunkinson17@xing.com",
                "reason": "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 45,
                "firstName": "Aguie",
                "lastName": "Seifenmacher",
                "affiliation": "Jabbersphere",
                "email": "aseifenmacher18@techcrunch.com",
                "reason": "suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 46,
                "firstName": "Carmelita",
                "lastName": "Bockin",
                "affiliation": "Browsetype",
                "email": "cbockin19@usa.gov",
                "reason": "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 47,
                "firstName": "Mandel",
                "lastName": "Rawsthorne",
                "affiliation": "Viva",
                "email": "mrawsthorne1a@indiegogo.com",
                "reason": "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 48,
                "firstName": "Dionysus",
                "lastName": "Tersay",
                "affiliation": "Rooxo",
                "email": "dtersay1b@gizmodo.com",
                "reason": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 49,
                "firstName": "Suki",
                "lastName": "Paulat",
                "affiliation": "Photofeed",
                "email": "spaulat1c@intel.com",
                "reason": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 50,
                "firstName": "Aleksandr",
                "lastName": "Golsby",
                "affiliation": "Wikibox",
                "email": "agolsby1d@qq.com",
                "reason": "morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 51,
                "firstName": "Paige",
                "lastName": "Hanburry",
                "affiliation": "Gigazoom",
                "email": "phanburry1e@va.gov",
                "reason": "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 52,
                "firstName": "Denver",
                "lastName": "Demogeot",
                "affiliation": "Yodel",
                "email": "ddemogeot1f@skyrock.com",
                "reason": "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 53,
                "firstName": "Ashleigh",
                "lastName": "Attfield",
                "affiliation": "Photojam",
                "email": "aattfield1g@google.ca",
                "reason": "at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 54,
                "firstName": "Maje",
                "lastName": "Phillippo",
                "affiliation": "Skyble",
                "email": "mphillippo1h@independent.co.uk",
                "reason": "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 55,
                "firstName": "Faye",
                "lastName": "Polden",
                "affiliation": "Photospace",
                "email": "fpolden1i@woothemes.com",
                "reason": "ut nunc vestibulum ante ipsum primis in faucibus orci luctus et",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 56,
                "firstName": "Gan",
                "lastName": "Dearsley",
                "affiliation": "Camimbo",
                "email": "gdearsley1j@telegraph.co.uk",
                "reason": "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 57,
                "firstName": "Nancey",
                "lastName": "Boc",
                "affiliation": "Jatri",
                "email": "nboc1k@rambler.ru",
                "reason": "varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 58,
                "firstName": "Barclay",
                "lastName": "Tassell",
                "affiliation": "Realcube",
                "email": "btassell1l@dailymotion.com",
                "reason": "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 59,
                "firstName": "Juanita",
                "lastName": "Jan",
                "affiliation": "Ozu",
                "email": "jjan1m@yandex.ru",
                "reason": "laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 60,
                "firstName": "Ada",
                "lastName": "Mordy",
                "affiliation": "Twinte",
                "email": "amordy1n@ehow.com",
                "reason": "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 61,
                "firstName": "Bennie",
                "lastName": "Szubert",
                "affiliation": "Voomm",
                "email": "bszubert1o@seesaa.net",
                "reason": "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 62,
                "firstName": "Jarrid",
                "lastName": "Crosi",
                "affiliation": "Dynabox",
                "email": "jcrosi1p@japanpost.jp",
                "reason": "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 63,
                "firstName": "Nissa",
                "lastName": "Pitcock",
                "affiliation": "Skimia",
                "email": "npitcock1q@soundcloud.com",
                "reason": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 64,
                "firstName": "Rebbecca",
                "lastName": "Hissie",
                "affiliation": "Devcast",
                "email": "rhissie1r@tripod.com",
                "reason": "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 65,
                "firstName": "Cayla",
                "lastName": "Clayton",
                "affiliation": "Twitterwire",
                "email": "cclayton1s@mlb.com",
                "reason": "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 66,
                "firstName": "Alane",
                "lastName": "Dowbakin",
                "affiliation": "Browsecat",
                "email": "adowbakin1t@tinyurl.com",
                "reason": "ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 67,
                "firstName": "Shelia",
                "lastName": "Froude",
                "affiliation": "Yamia",
                "email": "sfroude1u@hp.com",
                "reason": "sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 68,
                "firstName": "Augustine",
                "lastName": "Morat",
                "affiliation": "Vitz",
                "email": "amorat1v@youtu.be",
                "reason": "est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 69,
                "firstName": "Meggy",
                "lastName": "Woodroofe",
                "affiliation": "Nlounge",
                "email": "mwoodroofe1w@cornell.edu",
                "reason": "ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 70,
                "firstName": "Cody",
                "lastName": "Brumfitt",
                "affiliation": "Blogpad",
                "email": "cbrumfitt1x@marketwatch.com",
                "reason": "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 71,
                "firstName": "Arlan",
                "lastName": "Binnall",
                "affiliation": "Tekfly",
                "email": "abinnall1y@jiathis.com",
                "reason": "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 72,
                "firstName": "Dalt",
                "lastName": "Bloys",
                "affiliation": "Roodel",
                "email": "dbloys1z@live.com",
                "reason": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 73,
                "firstName": "Lexie",
                "lastName": "Elphey",
                "affiliation": "Youspan",
                "email": "lelphey20@is.gd",
                "reason": "nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 74,
                "firstName": "Dougy",
                "lastName": "Rothman",
                "affiliation": "Myworks",
                "email": "drothman21@netvibes.com",
                "reason": "eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 75,
                "firstName": "Jenica",
                "lastName": "Egginson",
                "affiliation": "Flipopia",
                "email": "jegginson22@pcworld.com",
                "reason": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 76,
                "firstName": "Leigh",
                "lastName": "Ricardon",
                "affiliation": "Voolia",
                "email": "lricardon23@artisteer.com",
                "reason": "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 77,
                "firstName": "Steffie",
                "lastName": "Frewer",
                "affiliation": "Flipopia",
                "email": "sfrewer24@quantcast.com",
                "reason": "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 78,
                "firstName": "Cosette",
                "lastName": "Gounel",
                "affiliation": "Oyope",
                "email": "cgounel25@jiathis.com",
                "reason": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 79,
                "firstName": "Fransisco",
                "lastName": "Corbin",
                "affiliation": "Oyope",
                "email": "fcorbin26@sohu.com",
                "reason": "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 80,
                "firstName": "Robin",
                "lastName": "Alyonov",
                "affiliation": "Brightdog",
                "email": "ralyonov27@msu.edu",
                "reason": "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 81,
                "firstName": "Budd",
                "lastName": "Broadbere",
                "affiliation": "Omba",
                "email": "bbroadbere28@cloudflare.com",
                "reason": "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 82,
                "firstName": "Garvy",
                "lastName": "Acey",
                "affiliation": "Yakitri",
                "email": "gacey29@freewebs.com",
                "reason": "duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 83,
                "firstName": "Kissee",
                "lastName": "Lerigo",
                "affiliation": "Feedfire",
                "email": "klerigo2a@drupal.org",
                "reason": "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 84,
                "firstName": "Sofia",
                "lastName": "Beeckx",
                "affiliation": "Skipstorm",
                "email": "sbeeckx2b@usa.gov",
                "reason": "ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 85,
                "firstName": "Jodie",
                "lastName": "Mebius",
                "affiliation": "Janyx",
                "email": "jmebius2c@devhub.com",
                "reason": "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 86,
                "firstName": "Lulu",
                "lastName": "Cersey",
                "affiliation": "Kamba",
                "email": "lcersey2d@nydailynews.com",
                "reason": "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 87,
                "firstName": "Enid",
                "lastName": "Boole",
                "affiliation": "Eidel",
                "email": "eboole2e@mysql.com",
                "reason": "nunc proin at turpis a pede posuere nonummy integer non velit",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 88,
                "firstName": "Fara",
                "lastName": "Petticrow",
                "affiliation": "Aimbu",
                "email": "fpetticrow2f@123-reg.co.uk",
                "reason": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 89,
                "firstName": "Niven",
                "lastName": "Chsteney",
                "affiliation": "Mudo",
                "email": "nchsteney2g@nyu.edu",
                "reason": "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 90,
                "firstName": "Marlene",
                "lastName": "McQuilliam",
                "affiliation": "Brainsphere",
                "email": "mmcquilliam2h@wordpress.com",
                "reason": "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 91,
                "firstName": "Land",
                "lastName": "Darton",
                "affiliation": "Meedoo",
                "email": "ldarton2i@vkontakte.ru",
                "reason": "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 92,
                "firstName": "Essie",
                "lastName": "Sheehan",
                "affiliation": "Photojam",
                "email": "esheehan2j@over-blog.com",
                "reason": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 93,
                "firstName": "Nadine",
                "lastName": "Middlemiss",
                "affiliation": "Meedoo",
                "email": "nmiddlemiss2k@rediff.com",
                "reason": "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 94,
                "firstName": "Hakim",
                "lastName": "Josefer",
                "affiliation": "Miboo",
                "email": "hjosefer2l@multiply.com",
                "reason": "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 95,
                "firstName": "Brander",
                "lastName": "Nuzzti",
                "affiliation": "Jabbersphere",
                "email": "bnuzzti2m@newyorker.com",
                "reason": "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 96,
                "firstName": "Elaine",
                "lastName": "Klimkin",
                "affiliation": "Mudo",
                "email": "eklimkin2n@fema.gov",
                "reason": "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 97,
                "firstName": "Thayne",
                "lastName": "Grishankov",
                "affiliation": "Trunyx",
                "email": "tgrishankov2o@theglobeandmail.com",
                "reason": "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 98,
                "firstName": "Vanda",
                "lastName": "Newis",
                "affiliation": "Fatz",
                "email": "vnewis2p@howstuffworks.com",
                "reason": "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 99,
                "firstName": "Maurie",
                "lastName": "Heinrici",
                "affiliation": "Izio",
                "email": "mheinrici2q@vk.com",
                "reason": "lectus in quam fringilla rhoncus mauris enim leo rhoncus sed",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }, {
                "id": 100,
                "firstName": "Cindra",
                "lastName": "Evans",
                "affiliation": "Mudo",
                "email": "cevans2r@npr.org",
                "reason": "et tempus semper est quam pharetra magna ac consequat metus sapien",
                "sampleSpecifications": [
                    {},
                    {},
                    {},
                    {}
                ],
                "sampleIds": null
            }];
        this.options = fb.group({
            bottom: 0,
            fixed: true,
            top: 0
        });
    }
    SidenavComponent.prototype.ngAfterViewInit = function () {
        var recordData = this.queryHandler.getAllRecords();
        recordData.getQueryObserver().subscribe(function (recordData) {
            console.log(recordData.data);
        });
    };
    SidenavComponent.prototype.tempLogout = function () {
        alert('bypass auth for development');
        localStorage.removeItem('user');
        return this.router.navigate(['/']);
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_query_handler_service__WEBPACK_IMPORTED_MODULE_4__["QueryHandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    name: 'dev'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';


/**
 * If the application will be indexed by Google Search, the following is required.
 * Googlebot uses a renderer based on Chrome 41.
 * https://developers.google.com/search/docs/guides/rendering
 **/
// import 'core-js/es6/array';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chazkondo/Desktop/code/javascript - html/ikewai-micro-ui-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map