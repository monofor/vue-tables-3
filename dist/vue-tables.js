<<<<<<< HEAD
var VueTables=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=27)}([function(t,e,r){(function(t){!function(e){var r=function(t){return i(!0===t,!1,arguments)};function n(t,e){if("object"!==o(t))return e;for(var r in e)"object"===o(t[r])&&"object"===o(e[r])?t[r]=n(t[r],e[r]):t[r]=e[r];return t}function i(t,e,i){var s=i[0],a=i.length;(t||"object"!==o(s))&&(s={});for(var u=0;u<a;++u){var c=i[u];if("object"===o(c))for(var l in c)if("__proto__"!==l){var f=t?r.clone(c[l]):c[l];s[l]=e?n(s[l],f):f}}return s}function o(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}r.recursive=function(t){return i(!0===t,!0,arguments)},r.clone=function(t){var e,n,i=t,s=o(t);if("array"===s)for(i=[],n=t.length,e=0;e<n;++e)i[e]=r.clone(t[e]);else if("object"===s)for(e in i={},t)i[e]=r.clone(t[e]);return i},e?t.exports=r:window.merge=r}(t&&"object"==typeof t.exports&&t.exports)}).call(this,r(31)(t))},function(t,e,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=new(((n=r(28))&&n.__esModule?n:{default:n}).default);e.default=i},function(t,e){
=======
var VueTables =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(8);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bus = new _vue2.default();

exports.default = bus;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
<<<<<<< HEAD
t.exports=function(t){return"string"==typeof t&&/[@?!+*]\(/.test(t)}},function(t,e,r){
=======

module.exports = function isExtglob(str) {
  return typeof str === 'string'
    && /[@?!+*]\(/.test(str);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
<<<<<<< HEAD
var n=r(2);t.exports=function(t){return"string"==typeof t&&(/[*!?{}(|)[\]]/.test(t)||n(t))}},function(t,e,r){"use strict";(function(e){var n=e&&"win32"===e.platform,i=r(6),o=r(71),s=t.exports;s.diff=r(72),s.unique=r(74),s.braces=r(75),s.brackets=r(86),s.extglob=r(88),s.isExtglob=r(2),s.isGlob=r(3),s.typeOf=r(89),s.normalize=r(90),s.omit=r(92),s.parseGlob=r(95),s.cache=r(99),s.filename=function(t){var e=t.match(o());return e&&e[0]},s.isPath=function(t,e){return e=e||{},function(r){var n=s.unixify(r,e);return e.nocase?t.toLowerCase()===n.toLowerCase():t===n}},s.hasPath=function(t,e){return function(r){return-1!==s.unixify(t,e).indexOf(r)}},s.matchPath=function(t,e){return e&&e.contains?s.hasPath(t,e):s.isPath(t,e)},s.hasFilename=function(t){return function(e){var r=s.filename(e);return r&&t.test(r)}},s.arrayify=function(t){return Array.isArray(t)?t:[t]},s.unixify=function(t,e){return e&&!1===e.unixify?t:e&&!0===e.unixify||n||"\\"===i.sep?s.normalize(t,!1):e&&!0===e.unescape?t?t.toString().replace(/\\(\w)/g,"$1"):"":t},s.escapePath=function(t){return t.replace(/[\\.]/g,"\\$&")},s.unescapeGlob=function(t){return t.replace(/[\\"']/g,"")},s.escapeRe=function(t){return t.replace(/[-[\\$*+?.#^\s{}(|)\]]/g,"\\$&")},t.exports=s}).call(this,r(5))},function(t,e){var r,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var t=a(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new d(t,e)),1!==c.length||l||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return n.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var s=i>=0?arguments[i]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,n="/"===s.charAt(0))}return(n?"/":"")+(e=r(o(e.split("/"),function(t){return!!t}),!n).join("/"))||"."},e.normalize=function(t){var n=e.isAbsolute(t),i="/"===s(t,-1);return(t=r(o(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&i&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),s=Math.min(i.length,o.length),a=s,u=0;u<s;u++)if(i[u]!==o[u]){a=u;break}var c=[];for(u=a;u<i.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=i(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return i(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(5))},function(t,e){function r(t,e,r){var n,i,o,s,a;function u(){var c=Date.now()-s;c<e&&c>=0?n=setTimeout(u,e-c):(n=null,r||(a=t.apply(o,i),o=i=null))}null==e&&(e=100);var c=function(){o=this,i=arguments,s=Date.now();var c=r&&!n;return n||(n=setTimeout(u,e)),c&&(a=t.apply(o,i),o=i=null),a};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(a=t.apply(o,i),o=i=null,clearTimeout(n),n=null)},c}r.debounce=r,t.exports=r},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=s(r(30)),o=s(r(0));function s(t){return t&&t.__esModule?t:{default:t}}var a=r(32);t.exports={render:a.call(void 0),model:{prop:"page",event:"paginate"},props:{page:{type:Number,required:!0},for:{type:String,required:!1},records:{type:Number,required:!0},perPage:{type:Number,default:25},vuex:{type:Boolean},options:{type:Object}},data:function(){return{firstPage:this.page}},watch:{page:function(t){"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&(this.firstPage=t)}},computed:{opts:function(){return(0,o.default)((0,i.default)(),this.options)},Theme:function(){if("object"===n(this.opts.theme))return this.opts.theme;var t={bootstrap3:r(33),bootstrap4:r(34),bulma:r(35)};if(void 0===n(t[this.opts.theme]))throw"vue-pagination-2: the theme "+this.opts.theme+" does not exist";return t[this.opts.theme]},pages:function(){return this.records?(t=this.paginationStart,e=this.pagesInCurrentChunk,Array.apply(0,Array(e)).map(function(e,r){return r+t})):[];var t,e},totalPages:function(){return this.records?Math.ceil(this.records/this.perPage):1},totalChunks:function(){return Math.ceil(this.totalPages/this.opts.chunk)},currentChunk:function(){return Math.ceil(this.page/this.opts.chunk)},paginationStart:function(){return"scroll"===this.opts.chunksNavigation?this.firstPage:(this.currentChunk-1)*this.opts.chunk+1},pagesInCurrentChunk:function(){return this.paginationStart+this.opts.chunk<=this.totalPages?this.opts.chunk:this.totalPages-this.paginationStart+1},count:function(){if(/{page}/.test(this.opts.texts.count))return this.totalPages<=1?"":this.opts.texts.count.replace("{page}",this.page).replace("{pages}",this.totalPages);var t=this.opts.texts.count.split("|"),e=(this.page-1)*this.perPage+1,r=this.page==this.totalPages?this.records:e+this.perPage-1;return t[Math.min(1==this.records?2:1==this.totalPages?1:0,t.length-1)].replace("{count}",this.formatNumber(this.records)).replace("{from}",this.formatNumber(e)).replace("{to}",this.formatNumber(r))}},methods:{setPage:function(t){this.allowedPage(t)&&this.paginate(t)},paginate:function(t){this.$emit("paginate",t)},next:function(){var t=this.page+1;return"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&this.firstPage++,this.setPage(t)},prev:function(){var t=this.page-1;return"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&this.firstPage--,this.setPage(t)},inDisplay:function(t){var e=this.firstPage,r=e+this.opts.chunk-1;return t>=e&&t<=r},nextChunk:function(){return this.setChunk(1)},prevChunk:function(){return this.setChunk(-1)},setChunk:function(t){this.setPage((this.currentChunk-1+t)*this.opts.chunk+1)},allowedPage:function(t){return t>=1&&t<=this.totalPages},allowedChunk:function(t){return 1==t&&this.currentChunk<this.totalChunks||-1==t&&this.currentChunk>1},allowedPageClass:function(t){return this.allowedPage(t)?"":this.Theme.disabled},allowedChunkClass:function(t){return this.allowedChunk(t)?"":this.Theme.disabled},activeClass:function(t){return this.page==t?this.Theme.active:""},formatNumber:function(t){return this.opts.format?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):t}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e="server"==t?{methods:{setData:function(t){this.commit("SET_DATA",t),setTimeout(function(){this.dispatch("loaded",t)}.bind(this),0)}}}:{};return i.default.recursive(!0,{props:{name:{type:String,required:!0}},computed:{state:function(){return this.$store.state[this.name]},Page:function(){return this.state.page},count:function(){return this.state.count},Columns:function(){return this.state.columns},tableData:function(){return this.state.data},page:function(){return this.state.page},limit:function(){return this.state.limit},customQueries:function(){return this.state.customQueries},query:function(){return this.state.query},orderBy:function(){return{column:this.state.sortBy,ascending:this.state.ascending}}},methods:{commit:function(t,e){return this.$store.commit("".concat(this.name,"/").concat(t),e)},orderByColumn:function(t,e){if(this.sortable(t))if(e.shiftKey&&this.orderBy.column&&this.hasMultiSort)this.setUserMultiSort(t);else{var r=this.orderBy.column===t?!this.orderBy.ascending:this._initialOrderAscending(t),n={column:t,ascending:r};this.updateState("orderBy",n),this.commit("SORT",n),this.dispatch("sorted",n)}},setLimit:function(t){var e="object"===o(t)?parseInt(t.target.value):t;this.updateState("perPage",e),this.commit("SET_LIMIT",e),this.dispatch("limit",e)},setOrder:function(t,e){this.updateState("orderBy",{column:t,ascending:e}),this.commit("SORT",{column:t,ascending:e})},setPage:function(t){t||(t=this.$refs.page.value),this.opts.pagination.dropdown||(this.$refs.pagination.Page=t),this.commit("PAGINATE",t)}}},e)};var n,i=(n=r(0))&&n.__esModule?n:{default:n};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{computed:{Columns:function(){return this.columns}}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{methods:n,computed:i,directives:o,beforeDestroy:s}};var n=r(36),i=r(141),o=r(153),s=r(156)},function(t,e,r){"use strict";t.exports=function(t,e){var r=this.vuex?JSON.parse(JSON.stringify(this.query)):this.query;if("Object"==Object.prototype.toString.call(t).slice(8,-1)){r=this.vuex?JSON.parse(JSON.stringify(t)):t,this.vuex||(this.query=r);var n=e.target.name,i=e.target.value;n?(this.dispatch("filter",{name:n,value:i}),this.dispatch("filter::".concat(n),i)):this.dispatch("filter",i),this.updateState("query",r)}else if(t){var o=this.getName(t.target.name),s=t.target.value;o?r[o]=s:r=s,this.vuex||(this.query=r),o?(this.dispatch("filter",{name:o,value:s}),this.dispatch("filter::".concat(o),s)):this.dispatch("filter",s),this.updateState("query",r)}return function(t,e){t.vuex?t.commit("SET_FILTER",e):(t.initPagination(),t.opts.pagination.dropdown&&t.getData())}(this,r)}},function(t,e,r){"use strict";t.exports=function(t){return t&&"function"==typeof t.isValid&&t.isValid()}},function(t,e,r){"use strict";(function(t){
/*!
=======

var isExtglob = __webpack_require__(2);

module.exports = function isGlob(str) {
  return typeof str === 'string'
    && (/[*!?{}(|)[\]]/.test(str)
     || isExtglob(str));
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var win32 = process && process.platform === 'win32';
var path = __webpack_require__(6);
var fileRe = __webpack_require__(73);
var utils = module.exports;

/**
 * Module dependencies
 */

utils.diff = __webpack_require__(74);
utils.unique = __webpack_require__(76);
utils.braces = __webpack_require__(77);
utils.brackets = __webpack_require__(89);
utils.extglob = __webpack_require__(91);
utils.isExtglob = __webpack_require__(2);
utils.isGlob = __webpack_require__(3);
utils.typeOf = __webpack_require__(18);
utils.normalize = __webpack_require__(92);
utils.omit = __webpack_require__(94);
utils.parseGlob = __webpack_require__(97);
utils.cache = __webpack_require__(101);

/**
 * Get the filename of a filepath
 *
 * @param {String} `string`
 * @return {String}
 */

utils.filename = function filename(fp) {
  var seg = fp.match(fileRe());
  return seg && seg[0];
};

/**
 * Returns a function that returns true if the given
 * pattern is the same as a given `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.isPath = function isPath(pattern, opts) {
  opts = opts || {};
  return function(fp) {
    var unixified = utils.unixify(fp, opts);
    if(opts.nocase){
      return pattern.toLowerCase() === unixified.toLowerCase();
    }
    return pattern === unixified;
  };
};

/**
 * Returns a function that returns true if the given
 * pattern contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.hasPath = function hasPath(pattern, opts) {
  return function(fp) {
    return utils.unixify(pattern, opts).indexOf(fp) !== -1;
  };
};

/**
 * Returns a function that returns true if the given
 * pattern matches or contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.matchPath = function matchPath(pattern, opts) {
  var fn = (opts && opts.contains)
    ? utils.hasPath(pattern, opts)
    : utils.isPath(pattern, opts);
  return fn;
};

/**
 * Returns a function that returns true if the given
 * regex matches the `filename` of a file path.
 *
 * @param {RegExp} `re`
 * @return {Boolean}
 */

utils.hasFilename = function hasFilename(re) {
  return function(fp) {
    var name = utils.filename(fp);
    return name && re.test(name);
  };
};

/**
 * Coerce `val` to an array
 *
 * @param  {*} val
 * @return {Array}
 */

utils.arrayify = function arrayify(val) {
  return !Array.isArray(val)
    ? [val]
    : val;
};

/**
 * Normalize all slashes in a file path or glob pattern to
 * forward slashes.
 */

utils.unixify = function unixify(fp, opts) {
  if (opts && opts.unixify === false) return fp;
  if (opts && opts.unixify === true || win32 || path.sep === '\\') {
    return utils.normalize(fp, false);
  }
  if (opts && opts.unescape === true) {
    return fp ? fp.toString().replace(/\\(\w)/g, '$1') : '';
  }
  return fp;
};

/**
 * Escape/unescape utils
 */

utils.escapePath = function escapePath(fp) {
  return fp.replace(/[\\.]/g, '\\$&');
};

utils.unescapeGlob = function unescapeGlob(fp) {
  return fp.replace(/[\\"']/g, '');
};

utils.escapeRe = function escapeRe(str) {
  return str.replace(/[-[\\$*+?.#^\s{}(|)\]]/g, '\\$&');
};

/**
 * Expose `utils`
 */

module.exports = utils;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Pagination = __webpack_require__(30);
var PaginationEvent = __webpack_require__(10);

module.exports = {
  Pagination:Pagination,
  PaginationEvent:PaginationEvent
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(8);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bus = new _vue2.default();

module.exports = bus;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (source) {

  var extra = source == 'server' ? serverExtra() : clientExtra();

  return _merge2.default.recursive(true, {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      state: function state() {
        return this.$store.state[this.name];
      },
      Page: function Page() {
        return this.state.page;
      },
      count: function count() {
        return this.state.count;
      },
      Columns: function Columns() {
        return this.state.columns;
      },
      tableData: function tableData() {
        return this.state.data;
      },
      page: function page() {
        return this.state.page;
      },
      limit: function limit() {
        return this.state.limit;
      },
      customQueries: function customQueries() {
        return this.state.customQueries;
      },
      query: function query() {
        return this.state.query;
      },
      orderBy: function orderBy() {
        return {
          column: this.state.sortBy,
          ascending: this.state.ascending
        };
      }
    },
    methods: {
      commit: function commit(action, payload) {
        return this.$store.commit(this.name + '/' + action, payload);
      },
      orderByColumn: function orderByColumn(column, ev) {

        if (!this.sortable(column)) return;

        if (ev.shiftKey && this.orderBy.column && this.hasMultiSort) {
          this.setUserMultiSort(column);
        } else {
          var ascending = this.orderBy.column === column ? !this.orderBy.ascending : this._initialOrderAscending(column);
          var orderBy = { column: column, ascending: ascending };
          this.updateState('orderBy', orderBy);
          this.commit('SORT', orderBy);
          this.dispatch('sorted', orderBy);
        }
      },
      setLimit: function setLimit(e) {
        var limit = (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' ? parseInt(e.target.value) : e;
        this.updateState('perPage', limit);
        this.commit('SET_LIMIT', limit);
        this.dispatch('limit', limit);
      },
      setOrder: function setOrder(column, ascending) {
        this.updateState('orderBy', { column: column, ascending: ascending });
        this.commit('SORT', { column: column, ascending: ascending });
      },
      setPage: function setPage(page) {

        if (!page) {
          page = this.$refs.page.value;
        }

        if (!this.opts.pagination.dropdown) this.$refs.pagination.Page = page;

        this.commit('PAGINATE', page);
      }

    }
  }, extra);
};

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serverExtra() {
  return {
    methods: {
      setData: function setData(data) {
        this.commit('SET_DATA', data);

        setTimeout(function () {
          this.dispatch('loaded', data);
        }.bind(this), 0);
      }
    }
  };
}

function clientExtra() {
  return {};
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    computed: {
      Columns: function Columns() {
        return this.columns;
      }
    }
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return { methods: methods, computed: computed, directives: directives, beforeDestroy: beforeDestroy };
};

var methods = __webpack_require__(37);
var computed = __webpack_require__(143);
var directives = __webpack_require__(155);
var beforeDestroy = __webpack_require__(158);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (e, dateEvent) {

  // we need to handle the store this.query to make sure we're not mutating outside of it
  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;

  // in case we pass an object manually (mostly used for init-date-filters should refactor
  if (Object.prototype.toString.call(e).slice(8, -1) == 'Object') {
    query = this.vuex ? JSON.parse(JSON.stringify(e)) : e;

    if (!this.vuex) this.query = query;

    var name = dateEvent.target.name;
    var value = dateEvent.target.value;

    if (name) {
      this.dispatch('filter', { name: name, value: value });
      this.dispatch('filter::' + name, value);
    } else {
      this.dispatch('filter', value);
    }

    this.updateState('query', query);
  } else if (e) {
    var _name = this.getName(e.target.name);
    var _value = e.target.value;

    if (_name) {
      query[_name] = _value;
    } else {
      query = _value;
    }

    if (!this.vuex) this.query = query;

    if (_name) {
      this.dispatch('filter', { name: _name, value: _value });
      this.dispatch('filter::' + _name, _value);
    } else {
      this.dispatch('filter', _value);
    }

    this.updateState('query', query);
  }

  return search(this, query);
};

function search(that, query) {

  if (that.vuex) {
    that.commit('SET_FILTER', query);
  } else {
    that.initPagination();

    if (that.opts.pagination.dropdown) {
      that.getData();
    }
  }
}

function noDebounce(e, name, opts) {
  return !e || name && (opts.dateColumns.indexOf(name) > -1 || Object.keys(opts.listColumns).indexOf(name) > -1);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (val) {
  return val && typeof val.isValid == 'function' && val.isValid();
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
<<<<<<< HEAD
var n=r(65),i=r(66),o=r(15);function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return c(this,t,e,r)}function c(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=p(t,e);return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8");if(!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r),i=(t=a(t,n)).write(e,r);i!==n&&(t=t.slice(0,i));return t}(t,e,r):function(t,e){if(u.isBuffer(e)){var r=0|h(e.length);return 0===(t=a(t,r)).length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):p(t,e);if("Buffer"===e.type&&o(e.data))return p(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e){if(l(e),t=a(t,e<0?0:0|h(e)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function p(t,e){var r=e.length<0?0:0|h(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function h(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function d(t,e){if(u.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(t).length;default:if(n)return N(t).length;e=(""+e).toLowerCase(),n=!0}}function g(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function y(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,i);if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,i){var o,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,r/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var l=-1;for(o=r;o<a;o++)if(c(t,o)===c(e,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*s}else-1!==l&&(o-=o-l),l=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){for(var f=!0,p=0;p<u;p++)if(c(t,o+p)!==c(e,p)){f=!1;break}if(f)return o}return-1}function b(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[r+s]=a}return s}function v(t,e,r,n){return U(N(e,t.length-r),t,r,n)}function _(t,e,r,n){return U(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function w(t,e,r,n){return _(t,e,r,n)}function x(t,e,r,n){return U(q(e),t,r,n)}function S(t,e,r,n){return U(function(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function C(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function P(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,s,a,u,c=t[i],l=null,f=c>239?4:c>223?3:c>191?2:1;if(i+f<=r)switch(f){case 1:c<128&&(l=c);break;case 2:128==(192&(o=t[i+1]))&&(u=(31&c)<<6|63&o)>127&&(l=u);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(u=(15&c)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(l=u);break;case 4:o=t[i+1],s=t[i+2],a=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(l=u)}null===l?(l=65533,f=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),i+=f}return function(t){var e=t.length;if(e<=T)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=T));return r}(n)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,r){return c(null,t,e,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,r){return function(t,e,r,n){return l(e),e<=0?a(t,e):void 0!==r?"string"==typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},u.allocUnsafe=function(t){return f(null,t)},u.allocUnsafeSlow=function(t){return f(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=u.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var s=t[r];if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},u.byteLength=d,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):function(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,r);case"utf8":case"utf-8":return P(this,e,r);case"ascii":return E(this,e,r);case"latin1":case"binary":return A(this,e,r);case"base64":return C(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,r,n,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),a=Math.min(o,s),c=this.slice(n,i),l=t.slice(e,r),f=0;f<a;++f)if(c[f]!==l[f]){o=c[f],s=l[f];break}return o<s?-1:s<o?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return y(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return y(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return v(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return w(this,t,e,r);case"base64":return x(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function E(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function A(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function O(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=L(t[o]);return i}function B(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function j(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function k(t,e,r,n,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function R(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function M(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function D(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function F(t,e,r,n,o){return o||D(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function $(t,e,r,n,o){return o||D(t,0,r,8),i.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=u.prototype;else{var i=e-t;r=new u(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},u.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||j(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},u.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||j(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},u.prototype.readUInt8=function(t,e){return e||j(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||j(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||j(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||j(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||j(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||j(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||j(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return e||j(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||j(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){e||j(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return e||j(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||j(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||j(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||j(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||j(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||j(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||k(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},u.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||k(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},u.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):R(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):R(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):M(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);k(this,t,e,r,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);k(this,t,e,r,i-1,-i)}var o=r-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):R(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):R(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):M(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,r){return F(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return F(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return $(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return $(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=u.isBuffer(t)?t:N(new u(t,n).toString()),a=s.length;for(o=0;o<r-e;++o)this[o+e]=s[o%a]}return this};var I=/[^+\/0-9A-Za-z-_]/g;function L(t){return t<16?"0"+t.toString(16):t.toString(16)}function N(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function q(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(I,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function U(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}}).call(this,r(64))},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){var r=Object.prototype.toString;function n(t){return t.constructor?t.constructor.name:null}t.exports=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var e=typeof t;if("boolean"===e)return"boolean";if("string"===e)return"string";if("number"===e)return"number";if("symbol"===e)return"symbol";if("function"===e)return"GeneratorFunction"===n(t)?"generatorfunction":"function";if(function(t){return Array.isArray?Array.isArray(t):t instanceof Array}(t))return"array";if(function(t){if(t.constructor&&"function"==typeof t.constructor.isBuffer)return t.constructor.isBuffer(t);return!1}(t))return"buffer";if(function(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}(t))return"arguments";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";if(function(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}(t))return"regexp";switch(n(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(t){return"function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}(t))return"generator";switch(e=r.call(t)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return e.slice(8,-1).toLowerCase().replace(/\s/g,"")}},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,r){"use strict";
/*!
 * repeat-element <https://github.com/jonschlinkert/repeat-element>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Licensed under the MIT license.
 */t.exports=function(t,e){for(var r=new Array(e),n=0;n<e;n++)r[n]=t;return r}},function(t,e,r){"use strict";
=======
/* eslint-disable no-proto */



var base64 = __webpack_require__(66)
var ieee754 = __webpack_require__(67)
var isArray = __webpack_require__(17)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(65)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(82);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-element <https://github.com/jonschlinkert/repeat-element>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Licensed under the MIT license.
 */



module.exports = function repeat(ele, num) {
  var arr = new Array(num);

  for (var i = 0; i < num; i++) {
    arr[i] = ele;
  }

  return arr;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */var n=r(94),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){n(t,function(n,o){if(i.call(t,o))return e.call(r,t[o],o,t)})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n={vuex:!0,activeState:!1,userColumnsDisplay:[],userControlsColumns:!1,displayColumnsDropdown:!1,collapsedGroups:[]};if(t)return n;n=(0,i.default)(n,{vuex:!1,count:0,customQueries:{},query:null,page:r,limit:10,windowWidth:"undefined"!=typeof window?window.innerWidth:null,orderBy:{column:!1,ascending:!0}}),"server"==e&&(n.data=[]);return n};var n,i=(n=r(0))&&n.__esModule?n:{default:n}},function(t,e,r){"use strict";function n(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<5;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}t.exports=function(){return{id:n(),allFilteredData:[],openChildRows:[],windowWidth:"undefined"!=typeof window?window.innerWidth:null,userMultiSorting:{}}}},function(t,e,r){"use strict";var n=r(157),i=r(158);function o(t,e){var r={desktop:[1024,null],tablet:[480,1024],mobile:[0,480],tabletL:[768,1024],tabletP:[480,768],mobileL:[320,480],mobileP:[0,320]};switch(e){case"min":return[r[t][0],null];case"max":return[0,r[t][1]];default:return r[t]}}function s(t){var e=t.split("_");return["not","min","max"].indexOf(e[0])>-1&&e[0]}t.exports=function(t){t.vuex?i(t):t.limit=t.opts.perPage,n(t.opts.columnsDisplay)||"undefined"==typeof window||(t.columnsDisplay=function(t){var e,r,n,i={};for(var a in t){n=s(t[a]);try{u=t[a],c=void 0,c=u.split("_"),r=c.length>1?c[1]:c[0],e=o(r,n),i[a]=e.concat([n])}catch(t){console.warn("Unknown device "+r)}}var u,c;return i}(t.opts.columnsDisplay),window.addEventListener("resize",function(){t.windowWidth=window.innerWidth}.bind(t)))}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t,e){var i={bootstrap3:r(161)(),bootstrap4:r(162)(),bulma:r(163)()},o={default:r(164),footerPagination:r(165)};return function(s){var a={rows:r(166).call(this,s),normalFilter:r(167).call(this,s),dropdownPagination:r(168).call(this,s),dropdownPaginationCount:r(169).call(this,s),columnFilters:r(170).call(this,s),pagination:r(174).call(this,s),headings:r(175).call(this,s),perPage:r(177).call(this,s),columnsDropdown:r(178).call(this,s)};if("string"==typeof t&&(!o[t]||"function"!=typeof o[t]))throw'vue-tables-2: Template "'.concat(t,'" does not exist');if("string"==typeof e&&(!i[e]||"object"!==n(i[e])))throw'vue-tables-2: Theme "'.concat(e,'" does not exist');var u="string"==typeof t?o[t]:t,c="string"==typeof e?i[e]:e(),l=r(181).call(this);return u.call(this,s,a,c,l)}}},function(t,e,r){"use strict";t.exports=function(t){var e=this,r=[];return this.opts.perPageValues.every(function(n){var i=n>=e.count,o=e.limit==n||i&&e.limit>n;return r.push(t("option",{domProps:{value:n,selected:o}},[n])),!i}),r}},function(t,e,r){"use strict";t.exports=function(){return Math.ceil(this.count/this.limit)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=r(185),o=r(13),s=r(186);t.exports=function(t,e){if(e){var r=this.query;this.setPage(1,!0);var a=this.getName(e.target.name),u="object"===n(e.target.value)?e.target.value:""+e.target.value;a?r[a]=u:r=u,this.vuex?this.commit("SET_FILTER",r):this.query=r,this.updateState("query",r),a?(this.dispatch("filter",{name:a,value:u}),this.dispatch("filter::".concat(a),u)):this.dispatch("filter",u)}var c,l,f,p,h,d=this.query,g=d?1:0;if(!this.opts)return t;this.opts.filterByColumn&&(g=i(d));t=s(t,this.opts.customFilters,this.customQueries);return g?t.filter(function(t,e){return c=0,this.filterableColumns.forEach(function(e){p=this.opts.dateColumns.indexOf(e)>-1&&this.opts.filterByColumn,h=this.isListFilter(e)&&this.opts.filterByColumn,f=this.dateFormat(e),u=this._getValue(t,e),o(u)&&!p&&(u=u.format(f)),(l=function(t){return t?"string"==typeof t?t.toLowerCase():t:""}(l=this.opts.filterByColumn?d[e]:d))&&function t(e,r,i){["string","number","boolean"].indexOf(n(r))>-1&&(r=String(r).toLowerCase());if(i)return r==e;if("string"==typeof r)return r.indexOf(e)>-1;if(o(r)){var s=moment(e.start,"YYYY-MM-DD HH:mm:ss"),a=moment(e.end,"YYYY-MM-DD HH:mm:ss");return r>=s&&r<=a}if("object"===n(r)){for(var u in r)if(t(e,r[u]))return!0;return!1}return r>=s&&r<=a}(l,u,h)&&c++}.bind(this)),c>=g}.bind(this)):t}},function(t,e,r){"use strict";var n,i=(n=r(1))&&n.__esModule?n:{default:n};var o=r(29),s=r(192);t.exports={ClientTable:o,ServerTable:s,Event:i.default}},function(t,e){t.exports=Vue},function(t,e,r){"use strict";var n=r(8),i=c(r(9)),o=c(r(10)),s=c(r(0)),a=c(r(11)),u=c(r(20));function c(t){return t&&t.__esModule?t:{default:t}}var l=r(21),f=r(22),p=r(23);e.install=function(t,e,c){var h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"bootstrap3",d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",g=s.default.recursive(!0,(0,a.default)(),{name:"client-table",components:{Pagination:n.Pagination},render:p.call(this,d,h),props:{columns:{type:Array,required:!0},data:{type:Array,required:!0},name:{type:String,required:!1},options:{type:Object,required:!1,default:function(){return{}}}},created:function(){f(this),this.opts.toMomentFormat&&this.transformDateStringsToMoment(),this.vuex||(this.initOrderBy(),this.query=this.initQuery(),this.customQueries=this.initCustomFilters())},mounted:function(){this._setColumnsDropdownCloseListener(),this.vuex||(this.registerClientFilters(),this.options.initialPage&&this.setPage(this.options.initialPage)),this.opts.groupBy&&!this.opts.orderBy&&(this.orderBy.column=this.opts.groupBy),this.loadState(),this.hasDateFilters()&&this.initDateFilters()},data:function(){return s.default.recursive(l(),{source:"client",globalOptions:e,currentlySorting:{},time:Date.now()},(0,u.default)(c,"client",this.options.initialPage))},computed:{q:r(182),customQ:r(183),totalPages:r(25),filteredData:r(184),hasMultiSort:function(){return this.opts.clientMultiSorting}},methods:{transformDateStringsToMoment:r(188),registerClientFilters:r(189),search:r(26),defaultSort:r(190),getGroupSlot:r(191),toggleGroup:function(t,e){e.stopPropagation();var r=this.collapsedGroups.indexOf(t);r>=0?this.collapsedGroups.splice(r,1):this.collapsedGroups.push(t)},groupToggleIcon:function(t){var e=this.opts.sortIcon.base+" ";return e+=this.collapsedGroups.indexOf(t)>-1?this.opts.sortIcon.down:this.opts.sortIcon.up},loadState:function(){if(this.opts.saveState){if(!this.storage.getItem(this.stateKey))return this.initState(),void(this.activeState=!0);var t=JSON.parse(this.storage.getItem(this.stateKey));this.opts.filterable&&this.setFilter(t.query),this.setOrder(t.orderBy.column,t.orderBy.ascending),this.vuex?this.commit("SET_LIMIT",t.perPage):this.limit=t.perPage,this.setPage(t.page),this.activeState=!0,t.userControlsColumns&&(this.userColumnsDisplay=t.userColumnsDisplay,this.userControlsColumns=t.userControlsColumns)}}}}),y=c?(0,i.default)():(0,o.default)();return g=s.default.recursive(g,y),t.component("v-client-table",g),g}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{format:!0,chunk:10,chunksNavigation:"fixed",edgeNavigation:!1,theme:"bootstrap3",texts:{count:"Showing {from} to {to} of {count} records|{count} records|One record",first:"First",last:"Last"}}}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";t.exports=function(){return function(t){var e=this.Theme,r=[],n="",i="",o="",s="";return this.opts.edgeNavigation&&this.totalChunks>1&&(o=t("li",{class:"VuePagination__pagination-item "+e.item+" "+(1===this.page?e.disabled:"")+" VuePagination__pagination-item-prev-chunk"},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:1===this.page},on:{click:this.setPage.bind(this,1)}},[this.opts.texts.first])]),s=t("li",{class:"VuePagination__pagination-item "+e.item+" "+(this.page===this.totalPages?e.disabled:"")+" VuePagination__pagination-item-prev-chunk"},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:this.page===this.totalPages},on:{click:this.setPage.bind(this,this.totalPages)}},[this.opts.texts.last])])),"fixed"===this.opts.chunksNavigation&&(n=t("li",{class:"VuePagination__pagination-item "+e.item+" "+e.prev+" VuePagination__pagination-item-prev-chunk "+this.allowedChunkClass(-1)},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedChunkClass(-1)},on:{click:this.setChunk.bind(this,-1)}},["<<"])]),i=t("li",{class:"VuePagination__pagination-item "+e.item+" "+e.next+" VuePagination__pagination-item-next-chunk "+this.allowedChunkClass(1)},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedChunkClass(1)},on:{click:this.setChunk.bind(this,1)}},[">>"])])),this.pages.map(function(n){r.push(t("li",{class:"VuePagination__pagination-item "+e.item+" "+this.activeClass(n)},[t("a",{class:e.link+" "+this.activeClass(n),attrs:{href:"javascript:void(0)",role:"button"},on:{click:this.setPage.bind(this,n)}},[n])]))}.bind(this)),t("div",{class:"VuePagination "+e.wrapper},[t("nav",{class:""+e.nav},[t("ul",{directives:[{name:"show",value:this.totalPages>1}],class:e.list+" VuePagination__pagination"},[o,n,t("li",{class:"VuePagination__pagination-item "+e.item+" "+e.prev+" VuePagination__pagination-item-prev-page "+this.allowedPageClass(this.page-1)},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedPageClass(this.page-1)},on:{click:this.prev.bind(this)}},["<"])]),r,t("li",{class:"VuePagination__pagination-item "+e.item+" "+e.next+" VuePagination__pagination-item-next-page "+this.allowedPageClass(this.page+1)},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedPageClass(this.page+1)},on:{click:this.next.bind(this)}},[">"])]),i,s]),t("p",{directives:[{name:"show",value:parseInt(this.records)}],class:"VuePagination__count "+e.count},[this.count])])])}}},function(t,e,r){"use strict";t.exports={nav:"",count:"",wrapper:"",list:"pagination",item:"page-item",link:"page-link",next:"",prev:"",active:"active",disabled:"disabled"}},function(t,e,r){"use strict";t.exports={nav:"",count:"",wrapper:"",list:"pagination",item:"page-item",link:"page-link",next:"",prev:"",active:"active",disabled:"disabled"}},function(t,e,r){"use strict";t.exports={nav:"",count:"",wrapper:"pagination",list:"pagination-list",item:"",link:"pagination-link",next:"",prev:"",active:"is-current",disabled:""}},function(t,e,r){"use strict";t.exports={initQuery:r(37),initCustomFilters:r(38),initOptions:r(39),sortableClass:r(40),sortableChevronClass:r(41),display:r(42),orderByColumn:r(43),getHeading:r(44),getHeadingTooltip:r(46),sortable:r(47),serverSearch:r(12),initOrderBy:r(48),initDateFilters:r(49),setFilter:r(50),setPage:r(51),setOrder:r(52),initPagination:r(53),filterable:r(54),isTextFilter:r(55),isDateFilter:r(56),isListFilter:r(57),highlightMatch:r(58),formatDate:r(59),hasDateFilters:r(60),applyFilters:r(109),optionText:r(110),render:r(111),rowWasClicked:r(112),setLimit:r(113),getOpenChildRows:r(114),dispatch:r(115),toggleChildRow:r(116),childRowTogglerClass:r(117),sendRequest:r(118),getResponseData:r(119),getSortFn:r(120),initState:r(121),updateState:r(122),columnClass:r(123),getName:r(124),toggleColumn:r(125),setUserMultiSort:r(126),_setFiltersDOM:r(127),_currentlySorted:r(128),_getChildRowTemplate:r(129),_toggleColumnsDropdown:r(130),_onlyColumn:r(131),_onPagination:r(132),_toggleGroupDirection:r(133),_getInitialDateRange:r(134),_setDatepickerText:r(135),_initialOrderAscending:r(136),dateFormat:r(137),_setColumnsDropdownCloseListener:r(138),_getValue:r(139),_getColumnName:r(140)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(){var t=this.opts.initFilters;if(!this.opts.filterByColumn)return t.hasOwnProperty("GENERIC")?t.GENERIC:"";var e={};return(this.opts.filterable&&"object"==n(this.opts.filterable)?this.opts.filterable:this.columns).forEach(function(r){e[r]=function(t,e){return t.hasOwnProperty(e)?void 0===t[e].start?t[e]:{start:t[e].start.format("YYYY-MM-DD HH:mm:ss"),end:t[e].end.format("YYYY-MM-DD HH:mm:ss")}:""}(t,r)}.bind(this)),e}},function(t,e,r){"use strict";t.exports=function(){var t,e={},r=this.opts.initFilters;return this.opts.customFilters.forEach(function(n){t="client"==this.source?n.name:n,e[t]=r.hasOwnProperty(t)?r[t]:""}.bind(this)),e}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e,r){return e&&(t=n.recursive(t,e)),r=n.recursive(t,r)}},function(t,e,r){"use strict";t.exports=function(t){var e=this.sortable(t)?"VueTables__sortable ":"";return e+=this.columnClass(t)}},function(t,e,r){"use strict";t.exports=function(t){var e=this.opts.sortIcon.base+" ";if(this.sortable(t)){if(this.opts.sortIcon.is&&!this._currentlySorted(t)&&(e+=this.opts.sortIcon.is+" "),this.hasMultiSort&&this.orderBy.column&&this.userMultiSorting[this.orderBy.column]){var r=this.userMultiSorting[this.orderBy.column].filter(function(e){return e.column===t})[0];r&&(e+=r.ascending?this.opts.sortIcon.up:this.opts.sortIcon.down)}return t==this.orderBy.column&&(e+=1==this.orderBy.ascending?this.opts.sortIcon.up:this.opts.sortIcon.down),e}}},function(t,e,r){"use strict";t.exports=function(t,e){if(!this.opts.texts)return"";t=this.opts.texts[t];if(e)for(var r in e)t=t.replace("{"+r+"}",e[r]);return t}},function(t,e,r){"use strict";t.exports=function(t,e){this.sortable(t)&&(e.shiftKey&&this.orderBy.column&&this.hasMultiSort?this.setUserMultiSort(t):(this.userMultiSorting={},this.orderBy.ascending=t==this.orderBy.column?!this.orderBy.ascending:this._initialOrderAscending(t),this.orderBy.column=t,this.updateState("orderBy",this.orderBy),this.dispatch("sorted",JSON.parse(JSON.stringify(this.orderBy)))),"server"==this.source&&this.getData())}},function(t,e,r){"use strict";var n,i=(n=r(45))&&n.__esModule?n:{default:n};t.exports=function(t,e){if("string"!=typeof t)return"";if(void 0!==this.$slots["h__".concat(t)])return this.$slots["h__".concat(t)];var r=(0,i.default)(t.split("_").join(" "));return this.opts.headings.hasOwnProperty(t)?"function"==typeof this.opts.headings[t]?e?this.opts.headings[t].call(this.$parent,e):r:this.opts.headings[t]:r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},function(t,e,r){"use strict";t.exports=function(t,e){if("string"!=typeof t)return"";return this.opts.headingsTooltips.hasOwnProperty(t)?"function"==typeof this.opts.headingsTooltips[t]?e?this.opts.headingsTooltips[t].call(this.$parent,e):"":this.opts.headingsTooltips[t]:""}},function(t,e,r){"use strict";t.exports=function(t){return!("boolean"!=typeof this.opts.sortable||!this.opts.sortable)||this.opts.sortable.indexOf(t)>-1}},function(t,e,r){"use strict";t.exports=function(){this.opts.orderBy&&(this.orderBy.column=this.opts.orderBy.column,this.orderBy.ascending=!this.opts.orderBy.hasOwnProperty("ascending")||this.opts.orderBy.ascending)}},function(t,e,r){"use strict";var n=r(0);t.exports=function(){if("undefined"!=typeof $&&void 0!==$(this.$el).daterangepicker){var t,e,r,i=this,o=this.vuex?JSON.parse(JSON.stringify(this.query)):this.query,s=function(t,e){return"client"==i.source?i.search(i.data,e):i.serverSearch(t,e)},a=n.recursive(this.opts.datepickerOptions,{autoUpdateInput:!1,singleDatePicker:!1});i.opts.dateColumns.forEach(function(u){var c=i._getInitialDateRange(u);c?(i._setDatepickerText(u,c.start,c.end),c={startDate:c.start,endDate:c.end}):c={},t=$(i.$el).find("#VueTables__"+u+"-filter"),e=void 0!==i.opts.datepickerPerColumnOptions[u]?i.opts.datepickerPerColumnOptions[u]:{},e=n.recursive(e,{locale:{format:i.dateFormat(u)}}),r=n(!0,a),!1===e.ranges&&(r.ranges={}),t.daterangepicker(n.recursive(r,e,c)),t.on("apply.daterangepicker",function(t,e){o[u]={start:e.startDate.format("YYYY-MM-DD HH:mm:ss"),end:e.endDate.format("YYYY-MM-DD HH:mm:ss")},i.vuex||(i.query=o),i._setDatepickerText(u,e.startDate,e.endDate),i.updateState("query",o),s(o,{target:{name:i._getColumnName(u),value:o[u]}})}),t.on("cancel.daterangepicker",function(t,e){o[u]="",i.vuex||(i.query=o),e.setStartDate(moment()),e.setEndDate(moment()),i.updateState("query",o),$(this).html("<span class='VueTables__filter-placeholder'>"+i.display("filterBy",{column:i.getHeading(u)})+"</span>"),s(o,{target:{name:i._getColumnName(u),value:o[u]}})})})}else console.error("Date filters require jquery and daterangepicker")}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){if(this.opts.filterable)if(this.opts.filterByColumn&&"string"==typeof t)console.warn("vue-tables-2: Unable to set filter. Filter value must be an object (`filterByColumn` is set to `true`)");else if(this.opts.filterByColumn||"string"==typeof t){var e=this.opts.filterByColumn?n(this.query,t):t;this.vuex?this.commit("SET_FILTER",e):(this.query=e,this.setPage(1,!0)),this.updateState("query",e),this._setFiltersDOM(t),"server"==this.source&&this.getData()}else console.warn("vue-tables-2: Unable to set filter. Filter value must be a string (`filterByColumn` is set to `false`)");else console.warn("vue-tables-2: Unable to set filter. Filtering is disabled (filterable: false)")}},function(t,e,r){"use strict";t.exports=function(t,e){t=t||this.$refs.page.value,this.opts.pagination.dropdown||(this.$refs.pagination.Page=t),this.page=t,this.updateState("page",t),"server"!=this.source||e||this.getData()}},function(t,e,r){"use strict";t.exports=function(t,e){this.orderBy.column=t,this.orderBy.ascending=e,this.updateState("orderBy",{column:t,ascending:e}),"server"==this.source&&this.getData()}},function(t,e,r){"use strict";t.exports=function(){this.page=1,this.opts.pagination.dropdown||this.$refs.pagination.setPage(1)}},function(t,e,r){"use strict";t.exports=function(t){return!!this.opts.filterable&&("boolean"==typeof this.opts.filterable&&this.opts.filterable||this.opts.filterable.indexOf(t)>-1)}},function(t,e,r){"use strict";t.exports=function(t){return this.query.hasOwnProperty(t)&&-1==this.opts.dateColumns.indexOf(t)&&!this.opts.listColumns.hasOwnProperty(t)}},function(t,e,r){"use strict";t.exports=function(t){return this.query.hasOwnProperty(t)&&this.opts.dateColumns.indexOf(t)>-1}},function(t,e,r){"use strict";t.exports=function(t){return this.query.hasOwnProperty(t)&&this.opts.listColumns.hasOwnProperty(t)}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n,i=this.opts.filterByColumn?this.query[e]:this.query;return i?r("span",{class:"VueTables__highlight"},function(t,e,r){return String(t).split(e).map(function(t){return e.test(t)?r("b",{},t):t})}(t,i=new RegExp("("+("string"==typeof(n=i)?n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):n)+")","i"),r)):t}},function(t,e,r){"use strict";var n=r(13);t.exports=function(t,e){return n(t)?t.format(e):t}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=r(61);t.exports=function(){var t=this.opts;return t.dateColumns.length&&t.filterByColumn&&("boolean"==typeof t.filterable&&t.filterable||"object"==n(t.filterable)&&i(t.filterable,t.dateColumns).length)}},function(t,e,r){"use strict";
=======
 */



var forIn = __webpack_require__(96);
var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function forOwn(obj, fn, thisArg) {
  forIn(obj, function(val, key) {
    if (hasOwn.call(obj, key)) {
      return fn.call(thisArg, obj[key], key, obj);
    }
  });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (useVuex, source) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;


  var data = {
    vuex: true,
    activeState: false,
    userColumnsDisplay: [],
    userControlsColumns: false,
    displayColumnsDropdown: false,
    collapsedGroups: []
  };

  if (useVuex) return data;

  data = (0, _merge2.default)(data, {
    vuex: false,
    count: 0,
    customQueries: {},
    query: null,
    page: page,
    limit: 10,
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,
    orderBy: {
      column: false,
      ascending: true
    }
  });

  if (source == 'server') data.data = [];

  return data;
};

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    id: makeId(),
    allFilteredData: [],
    openChildRows: [],
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,
    userMultiSorting: {}
  };
};

function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }return text;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is_empty = __webpack_require__(159);

var registerVuexModule = __webpack_require__(160);

module.exports = function (self) {

  if (self.vuex) {
    registerVuexModule(self);
  } else {
    self.limit = self.opts.perPage;
  }

  if (is_empty(self.opts.columnsDisplay) || typeof window === 'undefined') return;

  self.columnsDisplay = getColumnsDisplay(self.opts.columnsDisplay);

  window.addEventListener('resize', function () {
    self.windowWidth = window.innerWidth;
  }.bind(self));
};

function getColumnsDisplay(columnsDisplay) {
  var res = {};
  var range;
  var device;
  var operator;

  for (var column in columnsDisplay) {
    operator = getOperator(columnsDisplay[column]);
    try {
      device = getDevice(columnsDisplay[column]);
      range = getRange(device, operator);
      res[column] = range.concat([operator]);
    } catch (err) {
      console.warn('Unknown device ' + device);
    }
  }

  return res;
}

function getRange(device, operator) {

  var devices = {
    desktop: [1024, null],
    tablet: [480, 1024],
    mobile: [0, 480],
    tabletL: [768, 1024],
    tabletP: [480, 768],
    mobileL: [320, 480],
    mobileP: [0, 320]
  };

  switch (operator) {
    case 'min':
      return [devices[device][0], null];
    case 'max':
      return [0, devices[device][1]];
    default:
      return devices[device];
  }
}

function getOperator(val) {

  var pieces = val.split('_');

  if (['not', 'min', 'max'].indexOf(pieces[0]) > -1) return pieces[0];

  return false;
}

function getDevice(val) {
  var pieces = val.split('_');
  return pieces.length > 1 ? pieces[1] : pieces[0];
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (template, theme) {

    var themes = {
        bootstrap3: __webpack_require__(163)(),
        bootstrap4: __webpack_require__(164)(),
        bulma: __webpack_require__(165)()
    };

    var templates = {
        default: __webpack_require__(166),
        footerPagination: __webpack_require__(167)
    };

    return function (h) {

        var modules = {
            rows: __webpack_require__(168).call(this, h),
            normalFilter: __webpack_require__(169).call(this, h),
            dropdownPagination: __webpack_require__(170).call(this, h),
            dropdownPaginationCount: __webpack_require__(171).call(this, h),
            columnFilters: __webpack_require__(172).call(this, h),
            pagination: __webpack_require__(176).call(this, h),
            headings: __webpack_require__(177).call(this, h),
            perPage: __webpack_require__(179).call(this, h),
            columnsDropdown: __webpack_require__(180).call(this, h)
        };

        if (typeof template === 'string' && (!templates[template] || typeof templates[template] !== 'function')) {
            throw 'vue-tables-3: Template "' + template + '" does not exist';
        }

        if (typeof theme === 'string' && (!themes[theme] || _typeof(themes[theme]) !== 'object')) {
            throw 'vue-tables-3: Theme "' + theme + '" does not exist';
        }

        var tpl = typeof template === 'string' ? templates[template] : template;
        var thm = typeof theme === 'string' ? themes[theme] : theme();
        var slots = __webpack_require__(183).call(this);

        return tpl.call(this, h, modules, thm, slots);
    };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  var perpageValues = [];

  this.opts.perPageValues.every(function (value) {
    var isLastEntry = value >= _this.count;
    var selected = _this.limit == value || isLastEntry && _this.limit > value;
    perpageValues.push(h(
      "option",
      {
        domProps: {
          "value": value,
          "selected": selected
        }
      },
      [value]
    ));
    return !isLastEntry;
  });

  return perpageValues;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return Math.ceil(this.count / this.limit);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var object_filled_keys_count = __webpack_require__(187);
var is_valid_moment_object = __webpack_require__(15);
var filterByCustomFilters = __webpack_require__(188);

module.exports = function (data, e) {

  if (e) {

    var _query = this.query;

    this.setPage(1, true);

    var name = this.getName(e.target.name);
    var value = _typeof(e.target.value) === 'object' ? e.target.value : '' + e.target.value;

    if (name) {
      _query[name] = value;
    } else {
      _query = value;
    }

    this.vuex ? this.commit('SET_FILTER', _query) : this.query = _query;

    this.updateState('query', _query);

    if (name) {
      this.dispatch('filter', { name: name, value: value });
      this.dispatch('filter::' + name, value);
    } else {
      this.dispatch('filter', value);
    }
  }

  var query = this.query;

  var totalQueries = !query ? 0 : 1;

  if (!this.opts) return data;

  if (this.opts.filterByColumn) {
    totalQueries = object_filled_keys_count(query);
  }

  var value;
  var found;
  var currentQuery;
  var dateFormat;
  var filterByDate;
  var isListFilter;

  var data = filterByCustomFilters(data, this.opts.customFilters, this.customQueries);

  if (!totalQueries) return data;

  return data.filter(function (row, index) {

    found = 0;

    this.filterableColumns.forEach(function (column) {

      filterByDate = this.opts.dateColumns.indexOf(column) > -1 && this.opts.filterByColumn;
      isListFilter = this.isListFilter(column) && this.opts.filterByColumn;
      dateFormat = this.dateFormat(column);

      value = this._getValue(row, column);

      if (is_valid_moment_object(value) && !filterByDate) {
        value = value.format(dateFormat);
      }

      currentQuery = this.opts.filterByColumn ? query[column] : query;

      currentQuery = setCurrentQuery(currentQuery);

      if (currentQuery && foundMatch(currentQuery, value, isListFilter)) found++;
    }.bind(this));

    return found >= totalQueries;
  }.bind(this));
};

function setCurrentQuery(query) {

  if (!query) return '';

  if (typeof query == 'string') return query.toLowerCase();

  // Date Range

  return query;
}

function foundMatch(query, value, isListFilter) {

  if (['string', 'number', 'boolean'].indexOf(typeof value === 'undefined' ? 'undefined' : _typeof(value)) > -1) {
    value = String(value).toLowerCase();
  }

  // List Filter
  if (isListFilter) {
    return value == query;
  }

  //Text Filter
  if (typeof value === 'string') {
    return value.indexOf(query) > -1;
  }

  // Date range

  if (is_valid_moment_object(value)) {
    var start = moment(query.start, 'YYYY-MM-DD HH:mm:ss');
    var end = moment(query.end, 'YYYY-MM-DD HH:mm:ss');

    return value >= start && value <= end;
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {

    for (var key in value) {
      if (foundMatch(query, value[key])) return true;
    }

    return false;
  }

  return value >= start && value <= end;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = __webpack_require__(1);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientTable = __webpack_require__(29);
var ServerTable = __webpack_require__(194);


module.exports = {
  ClientTable: ClientTable,
  ServerTable: ServerTable,
  Event: _bus2.default
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vuePagination = __webpack_require__(9);

var _vuex = __webpack_require__(11);

var _vuex2 = _interopRequireDefault(_vuex);

var _normal = __webpack_require__(12);

var _normal2 = _interopRequireDefault(_normal);

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

var _table = __webpack_require__(13);

var _table2 = _interopRequireDefault(_table);

var _data2 = __webpack_require__(21);

var _data3 = _interopRequireDefault(_data2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = __webpack_require__(22);
var _created = __webpack_require__(23);

var templateCompiler = __webpack_require__(24);

exports.install = function (Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bootstrap3';
  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'default';


  var client = _merge2.default.recursive(true, (0, _table2.default)(), {
    name: 'client-table',
    components: {
      Pagination: _vuePagination.Pagination
    },
    render: templateCompiler.call(this, template, theme),
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      }
    },

    created: function created() {

      _created(this);

      if (this.opts.toMomentFormat) this.transformDateStringsToMoment();

      if (!this.vuex) {

        this.initOrderBy();

        this.query = this.initQuery();

        this.customQueries = this.initCustomFilters();
      }
    },

    mounted: function mounted() {

      this._setColumnsDropdownCloseListener();

      if (!this.vuex) {
        this.registerClientFilters();

        if (this.options.initialPage) this.setPage(this.options.initialPage);
      }

      if (this.opts.groupBy && !this.opts.orderBy) {
        this.orderBy.column = this.opts.groupBy;
      }

      this.loadState();

      if (this.hasDateFilters()) {
        this.initDateFilters();
      }
    },

    data: function data() {
      return _merge2.default.recursive(_data(), {
        source: 'client',
        globalOptions: globalOptions,
        currentlySorting: {},
        time: Date.now()
      }, (0, _data3.default)(useVuex, 'client', this.options.initialPage));
    },
    computed: {
      q: __webpack_require__(184),
      customQ: __webpack_require__(185),
      totalPages: __webpack_require__(26),
      filteredData: __webpack_require__(186),
      hasMultiSort: function hasMultiSort() {
        return this.opts.clientMultiSorting;
      }
    },
    methods: {
      transformDateStringsToMoment: __webpack_require__(190),
      registerClientFilters: __webpack_require__(191),
      search: __webpack_require__(27),
      defaultSort: __webpack_require__(192),
      getGroupSlot: __webpack_require__(193),
      toggleGroup: function toggleGroup(group, e) {

        e.stopPropagation();

        var i = this.collapsedGroups.indexOf(group);
        if (i >= 0) {
          this.collapsedGroups.splice(i, 1);
        } else {
          this.collapsedGroups.push(group);
        }
      },
      groupToggleIcon: function groupToggleIcon(group) {
        var cls = this.opts.sortIcon.base + ' ';
        cls += this.collapsedGroups.indexOf(group) > -1 ? this.opts.sortIcon.down : this.opts.sortIcon.up;

        return cls;
      },
      loadState: function loadState() {

        if (!this.opts.saveState) return;

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.opts.filterable) this.setFilter(state.query);

        this.setOrder(state.orderBy.column, state.orderBy.ascending);

        if (this.vuex) {
          this.commit('SET_LIMIT', state.perPage);
        } else {
          this.limit = state.perPage;
        }

        this.setPage(state.page);

        this.activeState = true;

        if (state.userControlsColumns) {
          this.userColumnsDisplay = state.userColumnsDisplay;
          this.userControlsColumns = state.userControlsColumns;
        }

        // TODO: Custom Queries
      }
    }

  });

  var state = useVuex ? (0, _vuex2.default)() : (0, _normal2.default)();

  client = _merge2.default.recursive(client, state);

  Vue.component('v-client-table', client);

  return client;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _config = __webpack_require__(31);

var _config2 = _interopRequireDefault(_config);

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var template = __webpack_require__(33);
var bus = __webpack_require__(10);


module.exports = {
  render: template.call(undefined),
  props: {
    for: {
      type: String,
      required: false
    },
    records: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 25
    },
    vuex: {
      type: Boolean
    },
    options: {
      type: Object
    }
  },
  created: function created() {

    if (!this.vuex) return;

    if (!this.for) {
      throw new Error('vue-pagination-2: The "for" prop is required when using vuex');
    }

    var name = this.for;

    if (this.$store.state[name]) return;

    this.$store.registerModule(this.for, {
      state: {
        page: 1
      },
      mutations: _defineProperty({}, name + '/PAGINATE', function undefined(state, page) {
        state.page = page;
      })
    });
  },
  data: function data() {
    return {
      Page: 1,
      firstPage: 1
    };
  },
  computed: {
    opts: function opts() {
      return (0, _merge2.default)((0, _config2.default)(), this.options);
    },
    Theme: function Theme() {

      if (_typeof(this.opts.theme) === 'object') {
        return this.opts.theme;
      }

      var themes = {
        bootstrap3: __webpack_require__(34),
        bootstrap4: __webpack_require__(35),
        bulma: __webpack_require__(36)
      };

      if (_typeof(themes[this.opts.theme]) === undefined) {
        throw 'vue-pagination-2: the theme ' + this.opts.theme + ' does not exist';
      }

      return themes[this.opts.theme];
    },
    page: function page() {
      return this.vuex ? this.$store.state[this.for].page : this.Page;
    },

    pages: function pages() {
      if (!this.records) return [];

      return range(this.paginationStart, this.pagesInCurrentChunk);
    },
    totalPages: function totalPages() {
      return this.records ? Math.ceil(this.records / this.perPage) : 1;
    },
    totalChunks: function totalChunks() {
      return Math.ceil(this.totalPages / this.opts.chunk);
    },
    currentChunk: function currentChunk() {
      return Math.ceil(this.page / this.opts.chunk);
    },
    paginationStart: function paginationStart() {

      if (this.opts.chunksNavigation === 'scroll') {
        return this.firstPage;
      }

      return (this.currentChunk - 1) * this.opts.chunk + 1;
    },
    pagesInCurrentChunk: function pagesInCurrentChunk() {
      return this.paginationStart + this.opts.chunk <= this.totalPages ? this.opts.chunk : this.totalPages - this.paginationStart + 1;
    },
    count: function count() {

      if (/{page}/.test(this.opts.texts.count)) {

        if (this.totalPages <= 1) return '';

        return this.opts.texts.count.replace('{page}', this.page).replace('{pages}', this.totalPages);
      }

      var parts = this.opts.texts.count.split('|');
      var from = (this.page - 1) * this.perPage + 1;
      var to = this.page == this.totalPages ? this.records : from + this.perPage - 1;
      var i = Math.min(this.records == 1 ? 2 : this.totalPages == 1 ? 1 : 0, parts.length - 1);

      return parts[i].replace('{count}', this.formatNumber(this.records)).replace('{from}', this.formatNumber(from)).replace('{to}', this.formatNumber(to));
    }
  },
  methods: {
    setPage: function setPage(page) {
      if (this.allowedPage(page)) {
        this.paginate(page);
      }
    },
    paginate: function paginate(page) {
      if (this.vuex) {
        this.$store.commit(this.for + '/PAGINATE', page);
      } else {
        this.Page = page;
      }

      this.$emit('paginate', page);

      if (this.for) {
        bus.$emit('vue-pagination::' + this.for, page);
      }
    },

    next: function next() {
      var page = this.page + 1;
      if (this.opts.chunksNavigation === 'scroll' && this.allowedPage(page) && !this.inDisplay(page)) {
        this.firstPage++;
      }
      return this.setPage(page);
    },
    prev: function prev() {
      var page = this.page - 1;

      if (this.opts.chunksNavigation === 'scroll' && this.allowedPage(page) && !this.inDisplay(page)) {
        this.firstPage--;
      }

      return this.setPage(page);
    },
    inDisplay: function inDisplay(page) {

      var start = this.firstPage;
      var end = start + this.opts.chunk - 1;

      return page >= start && page <= end;
    },

    nextChunk: function nextChunk() {
      return this.setChunk(1);
    },
    prevChunk: function prevChunk() {
      return this.setChunk(-1);
    },
    setChunk: function setChunk(direction) {
      this.setPage((this.currentChunk - 1 + direction) * this.opts.chunk + 1);
    },
    allowedPage: function allowedPage(page) {
      return page >= 1 && page <= this.totalPages;
    },
    allowedChunk: function allowedChunk(direction) {
      return direction == 1 && this.currentChunk < this.totalChunks || direction == -1 && this.currentChunk > 1;
    },
    allowedPageClass: function allowedPageClass(direction) {
      return this.allowedPage(direction) ? '' : this.Theme.disabled;
    },
    allowedChunkClass: function allowedChunkClass(direction) {
      return this.allowedChunk(direction) ? '' : this.Theme.disabled;
    },
    activeClass: function activeClass(page) {
      return this.page == page ? this.Theme.active : '';
    },
    formatNumber: function formatNumber(num) {

      if (!this.opts.format) return num;

      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  beforeDestroy: function beforeDestroy() {
    bus.$off();
    bus.$destroy();
  }
};

function range(start, count) {
  return Array.apply(0, Array(count)).map(function (element, index) {
    return index + start;
  });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        format: true,
        chunk: 10,
        chunksNavigation: 'fixed',
        edgeNavigation: false,
        theme: 'bootstrap3',
        texts: {
            count: 'Showing {from} to {to} of {count} records|{count} records|One record',
            first: 'First',
            last: 'Last'
        }
    };
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  return function (h) {

    var theme = this.Theme;
    var prevChunk = '';
    var nextChunk = '';
    var firstPage = '';
    var lastPage = '';
    var items = this.pages.map(function (page) {

      return h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(page),
          on: {
            'click': this.setPage.bind(this, page)
          }
        },
        [h(
          'a',
          { 'class': theme.link + ' ' + this.activeClass(page),
            attrs: { href: 'javascript:void(0)',
              role: 'button' }
          },
          [page]
        )]
      );
    }.bind(this));

    if (this.opts.edgeNavigation && this.totalChunks > 1) {
      firstPage = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === 1 ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk',
          on: {
            'click': this.setPage.bind(this, 1)
          }
        },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: this.page === 1 }
          },
          [this.opts.texts.first]
        )]
      );

      lastPage = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === this.totalPages ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk',
          on: {
            'click': this.setPage.bind(this, this.totalPages)
          }
        },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: this.page === this.totalPages }
          },
          [this.opts.texts.last]
        )]
      );
    }

    if (this.opts.chunksNavigation === 'fixed') {

      prevChunk = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-chunk ' + this.allowedChunkClass(-1),
          on: {
            'click': this.setChunk.bind(this, -1)
          }
        },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: !!this.allowedChunkClass(-1) }
          },
          ['<<']
        )]
      );

      nextChunk = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-chunk ' + this.allowedChunkClass(1),
          on: {
            'click': this.setChunk.bind(this, 1)
          }
        },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: !!this.allowedChunkClass(1) }
          },
          ['>>']
        )]
      );
    }

    return h(
      'div',
      { 'class': 'VuePagination ' + theme.wrapper },
      [h(
        'nav',
        { 'class': '' + theme.nav },
        [h(
          'ul',
          {
            directives: [{
              name: 'show',
              value: this.totalPages > 1
            }],

            'class': theme.list + ' VuePagination__pagination' },
          [firstPage, prevChunk, h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-page ' + this.allowedPageClass(this.page - 1),
              on: {
                'click': this.prev.bind(this)
              }
            },
            [h(
              'a',
              { 'class': theme.link,
                attrs: { href: 'javascript:void(0);',
                  disabled: !!this.allowedPageClass(this.page - 1)
                }
              },
              ['<']
            )]
          ), items, h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-page ' + this.allowedPageClass(this.page + 1),
              on: {
                'click': this.next.bind(this)
              }
            },
            [h(
              'a',
              { 'class': theme.link,
                attrs: { href: 'javascript:void(0);',
                  disabled: !!this.allowedPageClass(this.page + 1)
                }
              },
              ['>']
            )]
          ), nextChunk, lastPage]
        ), h(
          'p',
          {
            directives: [{
              name: 'show',
              value: parseInt(this.records)
            }],

            'class': 'VuePagination__count ' + theme.count },
          [this.count]
        )]
      )]
    );
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: '',
    list: 'pagination',
    item: 'page-item',
    link: 'page-link',
    next: '',
    prev: '',
    active: 'active',
    disabled: 'disabled'
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: '',
    list: 'pagination',
    item: 'page-item',
    link: 'page-link',
    next: '',
    prev: '',
    active: 'active',
    disabled: 'disabled'
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: 'pagination',
    list: 'pagination-list',
    item: '',
    link: 'pagination-link',
    next: '',
    prev: '',
    active: 'is-current',
    disabled: '' // uses the disabled HTML attirbute
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
      initQuery: __webpack_require__(38),
      initCustomFilters: __webpack_require__(39),
      initOptions: __webpack_require__(40),
      sortableClass: __webpack_require__(41),
      sortableChevronClass: __webpack_require__(42),
      display: __webpack_require__(43),
      orderByColumn: __webpack_require__(44),
      getHeading: __webpack_require__(45),
      getHeadingTooltip: __webpack_require__(47),
      sortable: __webpack_require__(48),
      serverSearch: __webpack_require__(14),
      initOrderBy: __webpack_require__(49),
      initDateFilters: __webpack_require__(50),
      setFilter: __webpack_require__(51),
      setPage: __webpack_require__(52),
      setOrder: __webpack_require__(53),
      initPagination: __webpack_require__(54),
      filterable: __webpack_require__(55),
      isTextFilter: __webpack_require__(56),
      isDateFilter: __webpack_require__(57),
      isListFilter: __webpack_require__(58),
      highlightMatch: __webpack_require__(59),
      formatDate: __webpack_require__(60),
      hasDateFilters: __webpack_require__(61),
      applyFilters: __webpack_require__(111),
      optionText: __webpack_require__(112),
      render: __webpack_require__(113),
      rowWasClicked: __webpack_require__(114),
      setLimit: __webpack_require__(115),
      getOpenChildRows: __webpack_require__(116),
      dispatch: __webpack_require__(117),
      toggleChildRow: __webpack_require__(118),
      childRowTogglerClass: __webpack_require__(119),
      sendRequest: __webpack_require__(120),
      getResponseData: __webpack_require__(121),
      getSortFn: __webpack_require__(122),
      initState: __webpack_require__(123),
      updateState: __webpack_require__(124),
      columnClass: __webpack_require__(125),
      getName: __webpack_require__(126),
      toggleColumn: __webpack_require__(127),
      setUserMultiSort: __webpack_require__(128),
      _setFiltersDOM: __webpack_require__(129),
      _currentlySorted: __webpack_require__(130),
      _getChildRowTemplate: __webpack_require__(131),
      _toggleColumnsDropdown: __webpack_require__(132),
      _onlyColumn: __webpack_require__(133),
      _onPagination: __webpack_require__(134),
      _toggleGroupDirection: __webpack_require__(135),
      _getInitialDateRange: __webpack_require__(136),
      _setDatepickerText: __webpack_require__(137),
      _initialOrderAscending: __webpack_require__(138),
      dateFormat: __webpack_require__(139),
      _setColumnsDropdownCloseListener: __webpack_require__(140),
      _getValue: __webpack_require__(141),
      _getColumnName: __webpack_require__(142)
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function () {

  var init = this.opts.initFilters;

  if (!this.opts.filterByColumn) return init.hasOwnProperty('GENERIC') ? init.GENERIC : '';

  var query = {};

  var filterable = this.opts.filterable && _typeof(this.opts.filterable) == 'object' ? this.opts.filterable : this.columns;

  filterable.forEach(function (column) {
    query[column] = getInitialValue(init, column);
  }.bind(this));

  return query;
};

function getInitialValue(init, column) {

  if (!init.hasOwnProperty(column)) return '';

  if (typeof init[column].start == 'undefined') return init[column];

  return {
    start: init[column].start.format('YYYY-MM-DD HH:mm:ss'),
    end: init[column].end.format('YYYY-MM-DD HH:mm:ss')
  };
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  var customQueries = {};

  var init = this.opts.initFilters;
  var key = void 0;

  this.opts.customFilters.forEach(function (filter) {

    key = this.source == 'client' ? filter.name : filter;

    customQueries[key] = init.hasOwnProperty(key) ? init[key] : '';
  }.bind(this));

  return customQueries;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(0);

module.exports = function (defaults, globalOptions, localOptions) {

  if (globalOptions) defaults = merge.recursive(defaults, globalOptions);

  localOptions = merge.recursive(defaults, localOptions);

  return localOptions;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {

  var c = this.sortable(column) ? 'VueTables__sortable ' : '';

  c += this.columnClass(column);

  return c;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {

  var cls = this.opts.sortIcon.base + ' ';

  if (!this.sortable(column)) return;

  if (this.opts.sortIcon.is && !this._currentlySorted(column)) {
    cls += this.opts.sortIcon.is + ' ';
  }

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    var col = this.userMultiSorting[this.orderBy.column].filter(function (c) {
      return c.column === column;
    })[0];
    if (col) cls += col.ascending ? this.opts.sortIcon.up : this.opts.sortIcon.down;
  }

  if (column == this.orderBy.column) {
    cls += this.orderBy.ascending == 1 ? this.opts.sortIcon.up : this.opts.sortIcon.down;
  }

  return cls;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (text, replacements) {

  if (!this.opts.texts) return '';

  var text = this.opts.texts[text];

  if (replacements) for (var key in replacements) {
    // console.log(key)
    text = text.replace('{' + key + '}', replacements[key]);
  }

  return text;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (colName, ev) {

  if (!this.sortable(colName)) return;

  if (ev.shiftKey && this.orderBy.column && this.hasMultiSort) {
    this.setUserMultiSort(colName);
  } else {
    this.userMultiSorting = {};
    this.orderBy.ascending = colName == this.orderBy.column ? !this.orderBy.ascending : this._initialOrderAscending(colName);
    this.orderBy.column = colName;

    this.updateState('orderBy', this.orderBy);
    this.dispatch('sorted', JSON.parse(JSON.stringify(this.orderBy)));
  }

  if (this.source == 'server') {
    this.getData();
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ucfirst = __webpack_require__(46);

var _ucfirst2 = _interopRequireDefault(_ucfirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (value, h) {

	if (typeof value !== 'string') return '';

	if (typeof this.$slots['h__' + value] !== 'undefined') {
		return this.$slots['h__' + value];
	}

	var derivedHeading = (0, _ucfirst2.default)(value.split("_").join(" "));

	if (!this.opts.headings.hasOwnProperty(value)) return derivedHeading;

	if (typeof this.opts.headings[value] === 'function') {
		if (h) return this.opts.headings[value].call(this.$parent, h);

		return derivedHeading;
	}

	return this.opts.headings[value];
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value, h) {

	if (typeof value !== 'string') return '';

	var derivedHeadingTooltip = '';

	if (!this.opts.headingsTooltips.hasOwnProperty(value)) return derivedHeadingTooltip;

	if (typeof this.opts.headingsTooltips[value] === 'function') {
		if (h) return this.opts.headingsTooltips[value].call(this.$parent, h);

		return derivedHeadingTooltip;
	}

	return this.opts.headingsTooltips[value];
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {

    var sortAll = typeof this.opts.sortable == 'boolean' && this.opts.sortable;

    if (sortAll) return true;

    return this.opts.sortable.indexOf(column) > -1;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  if (!this.opts.orderBy) return;

  this.orderBy.column = this.opts.orderBy.column;
  this.orderBy.ascending = this.opts.orderBy.hasOwnProperty('ascending') ? this.opts.orderBy.ascending : true;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(0);

module.exports = function () {

  if (typeof $ === 'undefined' || typeof $(this.$el).daterangepicker === 'undefined') {
    console.error('Date filters require jquery and daterangepicker');
    return;
  }

  var el;
  var that = this;
  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;
  var columnOptions;
  var dpOptions;

  var search = function search(query, e) {
    return that.source == 'client' ? that.search(that.data, e) : that.serverSearch(query, e);
  };

  var datepickerOptions = merge.recursive(this.opts.datepickerOptions, {
    autoUpdateInput: false,
    singleDatePicker: false
  });

  that.opts.dateColumns.forEach(function (column) {

    var range = that._getInitialDateRange(column);

    if (range) {

      that._setDatepickerText(column, range.start, range.end);

      range = {
        startDate: range.start,
        endDate: range.end
      };
    } else {
      range = {};
    }

    el = $(that.$el).find("#VueTables__" + column + "-filter");

    columnOptions = typeof that.opts.datepickerPerColumnOptions[column] !== 'undefined' ? that.opts.datepickerPerColumnOptions[column] : {};

    columnOptions = merge.recursive(columnOptions, {
      locale: {
        format: that.dateFormat(column)
      }
    });

    dpOptions = merge(true, datepickerOptions);

    if (columnOptions.ranges === false) {
      dpOptions.ranges = {};
    }

    el.daterangepicker(merge.recursive(dpOptions, columnOptions, range));

    el.on('apply.daterangepicker', function (ev, picker) {

      query[column] = {
        start: picker.startDate.format('YYYY-MM-DD HH:mm:ss'),
        end: picker.endDate.format('YYYY-MM-DD HH:mm:ss')
      };

      if (!that.vuex) that.query = query;

      that._setDatepickerText(column, picker.startDate, picker.endDate);

      that.updateState('query', query);

      search(query, { target: { name: that._getColumnName(column), value: query[column] } });
    });

    el.on('cancel.daterangepicker', function (ev, picker) {

      query[column] = '';

      if (!that.vuex) that.query = query;

      picker.setStartDate(moment());
      picker.setEndDate(moment());

      that.updateState('query', query);

      $(this).html("<span class='VueTables__filter-placeholder'>" + that.display('filterBy', { column: that.getHeading(column) }) + "</span>");

      search(query, { target: { name: that._getColumnName(column), value: query[column] } });
    });
  });
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(0);

module.exports = function (filter) {

  if (!this.opts.filterable) {
    console.warn("vue-tables-3: Unable to set filter. Filtering is disabled (filterable: false)");
    return;
  };

  if (this.opts.filterByColumn && typeof filter === 'string') {
    console.warn("vue-tables-3: Unable to set filter. Filter value must be an object (`filterByColumn` is set to `true`)");
    return;
  };

  if (!this.opts.filterByColumn && typeof filter !== 'string') {
    console.warn("vue-tables-3: Unable to set filter. Filter value must be a string (`filterByColumn` is set to `false`)");
    return;
  };

  var mergedFilter = this.opts.filterByColumn ? merge(this.query, filter) : filter;

  if (this.vuex) {
    this.commit('SET_FILTER', mergedFilter);
  } else {
    this.query = mergedFilter;
    this.setPage(1, true);
  }

  this.updateState('query', mergedFilter);

  this._setFiltersDOM(filter);

  if (this.source == 'server') {
    this.getData();
  }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (page, preventRequest) {

  page = page ? page : this.$refs.page.value;

  if (!this.opts.pagination.dropdown) this.$refs.pagination.Page = page;

  this.page = page;

  this.updateState('page', page);

  if (this.source == 'server' && !preventRequest) this.getData();
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column, ascending) {

  this.orderBy.column = column;
  this.orderBy.ascending = ascending;

  this.updateState('orderBy', { column: column, ascending: ascending });

  if (this.source == 'server') {
    this.getData();
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  this.page = 1;

  if (!this.opts.pagination.dropdown) {
    this.$refs.pagination.setPage(1);
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {

  if (!this.opts.filterable) return false;

  return typeof this.opts.filterable == 'boolean' && this.opts.filterable || this.opts.filterable.indexOf(column) > -1;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {

  return this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) == -1 && !this.opts.listColumns.hasOwnProperty(column);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  return this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) > -1;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  return this.query.hasOwnProperty(column) && this.opts.listColumns.hasOwnProperty(column);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value, column, h) {

  var query = this.opts.filterByColumn ? this.query[column] : this.query;

  if (!query) return value;

  query = new RegExp("(" + escapeRegex(query) + ")", "i");

  return h("span", { class: 'VueTables__highlight' }, matches(value, query, h));
};

function matches(value, query, h) {
  var pieces = String(value).split(query);

  return pieces.map(function (piece) {
    if (query.test(piece)) {
      return h("b", {}, piece);
    }

    return piece;
  });
}

function escapeRegex(s) {
  return typeof s === 'string' ? s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') : s;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validMoment = __webpack_require__(15);

module.exports = function (value, dateFormat) {

  if (!validMoment(value)) return value;

  return value.format(dateFormat);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var intersection = __webpack_require__(62);

module.exports = function () {

  var opts = this.opts;

  return opts.dateColumns.length && opts.filterByColumn && (typeof opts.filterable == 'boolean' && opts.filterable || _typeof(opts.filterable) == 'object' && intersection(opts.filterable, opts.dateColumns).length);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * array-intersection <https://github.com/jonschlinkert/array-intersection>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
<<<<<<< HEAD
 */var n=r(62),i=r(104),o=r(106),s=r(107),a=r(108);t.exports=function(t){if(null==t)return[];if(1===arguments.length)return o(t);var e=s(arguments,1);return n(o(t),function(t){return i(e,function(e){return-1!==a(e,t)})})}},function(t,e,r){"use strict";
=======
 */



var filter = __webpack_require__(63);
var every = __webpack_require__(106);
var unique = __webpack_require__(108);
var slice = __webpack_require__(109);
var indexOf = __webpack_require__(110);

module.exports = function intersection(arr) {
  if (arr == null) {
    return [];
  }

  if (arguments.length === 1) {
    return unique(arr);
  }

  var arrays = slice(arguments, 1);

  return filter(unique(arr), function (ele) {
    return every(arrays, function (cur) {
      return indexOf(cur, ele) !== -1;
    });
  });
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * filter-array <https://github.com/jonschlinkert/filter-array>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
 * Licensed under the MIT License
<<<<<<< HEAD
 */var n=r(63),i=r(67),o=r(69);t.exports=function(t,e,r){if(0===t.length)return[];if("function"===n(e)||"regexp"===n(e)){var s=o.matcher(e,r);return i(t,function(t){return s(t)})}return"string"===n(e)||"array"===n(e)?i(t,o.filter(e,r)):[]}},function(t,e,r){(function(e){var r=Object.prototype.toString;t.exports=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if(!0===t||!1===t||t instanceof Boolean)return"boolean";if("object"!=typeof t)return typeof t;if(Array.isArray(t))return"array";var n=r.call(t);return t instanceof RegExp||"[object RegExp]"===n?"regexp":t instanceof Date||"[object Date]"===n?"date":"[object Function]"===n?"function":"[object Arguments]"===n?"arguments":void 0!==e&&e.isBuffer(t)?"buffer":n.slice(8,-1).toLowerCase()}}).call(this,r(14).Buffer)},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";e.byteLength=function(t){var e=c(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){for(var e,r=c(t),n=r[0],s=r[1],a=new o(function(t,e,r){return 3*(e+r)/4-r}(0,n,s)),u=0,l=s>0?n-4:n,f=0;f<l;f+=4)e=i[t.charCodeAt(f)]<<18|i[t.charCodeAt(f+1)]<<12|i[t.charCodeAt(f+2)]<<6|i[t.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=255&e;2===s&&(e=i[t.charCodeAt(f)]<<2|i[t.charCodeAt(f+1)]>>4,a[u++]=255&e);1===s&&(e=i[t.charCodeAt(f)]<<10|i[t.charCodeAt(f+1)]<<4|i[t.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=255&e);return a},e.fromByteArray=function(t){for(var e,r=t.length,i=r%3,o=[],s=0,a=r-i;s<a;s+=16383)o.push(l(t,s,s+16383>a?a:s+16383));1===i?(e=t[r-1],o.push(n[e>>2]+n[e<<4&63]+"==")):2===i&&(e=(t[r-2]<<8)+t[r-1],o.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)n[a]=s[a],i[s.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function l(t,e,r){for(var i,o,s=[],a=e;a<r;a+=3)i=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,c=u>>1,l=-7,f=r?i-1:0,p=r?-1:1,h=t[e+f];for(f+=p,o=h&(1<<-l)-1,h>>=-l,l+=a;l>0;o=256*o+t[e+f],f+=p,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=n;l>0;s=256*s+t[e+f],f+=p,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,n),o-=c}return(h?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+f>=1?p/u:p*Math.pow(2,1-f))*u>=2&&(s++,u/=2),s+f>=l?(a=0,s=l):s+f>=1?(a=(e*u-1)*Math.pow(2,i),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[r+h]=255&a,h+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[r+h]=255&s,h+=d,s/=256,c-=8);t[r+h-d]|=128*g}},function(t,e,r){"use strict";
=======
 */



var typeOf = __webpack_require__(64);
var filter = __webpack_require__(68);
var mm = __webpack_require__(71);

/**
 * Filter array against given glob
 * patterns, regex or given function.
 *
 * ```js
 * var filter = require('filter-array');
 *
 * filter(['a', 'b', 'c', 'b', 'c', 'e'], function(ele) {
 *   return ele === 'a' || ele === 'b';
 * });
 *
 * //=> ['a', 'b', 'b']
 * ```
 *
 * @name   filterArray
 * @param  {Array} `arr` array to filter
 * @param  {Array|String|Function|RegExp} `filters`
 * @param  {Object} `opts` options to pass to [micromatch]
 * @return {Array}
 * @api public
 */

module.exports = function filterArray(arr, filters, opts) {
  if (arr.length === 0) {
    return [];
  }

  if (typeOf(filters) === 'function' || typeOf(filters) === 'regexp') {
    var isMatch = mm.matcher(filters, opts);

    return filter(arr, function _filter(val) {
      return isMatch(val);
    });
  }

  if (typeOf(filters) === 'string' || typeOf(filters) === 'array') {
    return filter(arr, mm.filter(filters, opts));
  }

  return [];
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  if (val === undefined) {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val !== 'object') {
    return typeof val;
  }
  if (Array.isArray(val)) {
    return 'array';
  }

  var type = toString.call(val);

  if (val instanceof RegExp || type === '[object RegExp]') {
    return 'regexp';
  }
  if (val instanceof Date || type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Function]') {
    return 'function';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(val)) {
    return 'buffer';
  }
  return type.slice(8, -1).toLowerCase();
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16).Buffer))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 67 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * arr-filter <https://github.com/jonschlinkert/arr-filter>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */var n=r(68);t.exports=function(t,e,r){if(null==t)return[];if("function"!=typeof e)throw new TypeError("expected callback to be a function");for(var i=n(e,r),o=t.length,s=t.slice(),a=-1;o--;)i(t[o],a++)||s.splice(o,1);return s}},function(t,e,r){"use strict";
=======
 */



var makeIterator = __webpack_require__(69);

module.exports = function filter(arr, fn, thisArg) {
  if (arr == null) {
    return [];
  }

  if (typeof fn !== 'function') {
    throw new TypeError('expected callback to be a function');
  }

  var iterator = makeIterator(fn, thisArg);
  var len = arr.length;
  var res = arr.slice();
  var i = -1;

  while (len--) {
    if (!iterator(arr[len], i++)) {
      res.splice(len, 1);
    }
  }
  return res;
};



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * make-iterator <https://github.com/jonschlinkert/make-iterator>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */var n=r(16);function i(t,e){for(var r=t.length,n=-1;++n<r;)if(o(t[n],e))return!0;return!1}function o(t,e){return"object"===n(t)?Array.isArray(t)&&Array.isArray(e)?function(t,e){for(var r=e.length,n=-1;++n<r;)if(!i(t,e[n]))return!1;return!0}(t,e):function(t,e){for(var r in e)if(e.hasOwnProperty(r)&&!1===o(t[r],e[r]))return!1;return!0}(t,e):t===e}function s(t){return t}t.exports=function(t,e){switch(n(t)){case"undefined":case"null":return s;case"function":return void 0!==e?function(r,n,i){return t.call(e,r,n,i)}:t;case"object":return function(e){return o(e,t)};case"regexp":return function(e){return t.test(e)};case"string":case"number":default:return r=t,function(t){return t[r]}}var r}},function(t,e,r){"use strict";
=======
 */



var typeOf = __webpack_require__(70);

module.exports = function makeIterator(target, thisArg) {
  switch (typeOf(target)) {
    case 'undefined':
    case 'null':
      return noop;
    case 'function':
      // function is the first to improve perf (most common case)
      // also avoid using `Function#call` if not needed, which boosts
      // perf a lot in some cases
      return (typeof thisArg !== 'undefined') ? function(val, i, arr) {
        return target.call(thisArg, val, i, arr);
      } : target;
    case 'object':
      return function(val) {
        return deepMatches(val, target);
      };
    case 'regexp':
      return function(str) {
        return target.test(str);
      };
    case 'string':
    case 'number':
    default: {
      return prop(target);
    }
  }
};

function containsMatch(array, value) {
  var len = array.length;
  var i = -1;

  while (++i < len) {
    if (deepMatches(array[i], value)) {
      return true;
    }
  }
  return false;
}

function matchArray(arr, value) {
  var len = value.length;
  var i = -1;

  while (++i < len) {
    if (!containsMatch(arr, value[i])) {
      return false;
    }
  }
  return true;
}

function matchObject(obj, value) {
  for (var key in value) {
    if (value.hasOwnProperty(key)) {
      if (deepMatches(obj[key], value[key]) === false) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Recursively compare objects
 */

function deepMatches(val, value) {
  if (typeOf(val) === 'object') {
    if (Array.isArray(val) && Array.isArray(value)) {
      return matchArray(val, value);
    } else {
      return matchObject(val, value);
    }
  } else {
    return val === value;
  }
}

function prop(name) {
  return function(obj) {
    return obj[name];
  };
}

function noop(val) {
  return val;
}


/***/ }),
/* 70 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * micromatch <https://github.com/jonschlinkert/micromatch>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n=r(70),i=r(4);function o(t,e,r){if(!t||!e)return[];if(void 0===(r=r||{}).cache&&(r.cache=!0),!Array.isArray(e))return s(t,e,r);for(var n=e.length,o=0,a=[],u=[];n--;){var c=e[o++];"string"==typeof c&&33===c.charCodeAt(0)?a.push.apply(a,s(t,c.slice(1),r)):u.push.apply(u,s(t,c,r))}return i.diff(u,a)}function s(t,e,r){if("string"!==i.typeOf(t)&&!Array.isArray(t))throw new Error(l("match","files","a string or array"));t=i.arrayify(t);var n=(r=r||{}).negate||!1,s=e;"string"==typeof e&&((n="!"===e.charAt(0))&&(e=e.slice(1)),!0===r.nonegate&&(n=!1));for(var u=a(e,r),c=t.length,f=0,p=[];f<c;){var h=t[f++],d=i.unixify(h,r);u(d)&&p.push(d)}if(0===p.length){if(!0===r.failglob)throw new Error('micromatch.match() found no matches for: "'+s+'".');(r.nonull||r.nullglob)&&p.push(i.unescapeGlob(s))}return n&&(p=i.diff(t,p)),r.ignore&&r.ignore.length&&(e=r.ignore,r=i.omit(r,["ignore"]),p=i.diff(p,o(p,e,r))),r.nodupes?i.unique(p):p}function a(t,e){if("function"==typeof t)return t;if(t instanceof RegExp)return function(e){return t.test(e)};if("string"!=typeof t)throw new TypeError(l("matcher","pattern","a string, regex, or function"));if(t=i.unixify(t,e),!i.isGlob(t))return i.matchPath(t,e);var r=c(t,e);return e&&e.matchBase?i.hasFilename(r,e):function(t){return t=i.unixify(t,e),r.test(t)}}function u(t,e){var r=Object.create(e||{}),i=r.flags||"";r.nocase&&-1===i.indexOf("i")&&(i+="i");var o,s=n(t,r);r.negated=r.negated||s.negated,r.negate=r.negated,t=function(t,e){var r=e&&!e.contains?"^":"",n=e&&!e.contains?"$":"";if(t="(?:"+t+")"+n,e&&e.negate)return r+"(?!^"+t+").*$";return r+t}(s.pattern,r);try{return o=new RegExp(t,i)}catch(t){if(t.reason="micromatch invalid regex: ("+o+")",r.strict)throw new SyntaxError(t)}return/$^/}function c(t,e){if("string"!==i.typeOf(t))throw new Error(l("makeRe","glob","a string"));return i.cache(u,t,e)}function l(t,e,r){return"micromatch."+t+"(): "+e+" should be "+r+"."}o.any=function(t,e,r){if(!Array.isArray(e)&&"string"!=typeof e)throw new TypeError(l("any","patterns","a string or array"));var n=(e=i.arrayify(e)).length;for(t=i.unixify(t,r);n--;)if(a(e[n],r)(t))return!0;return!1},o.braces=o.braceExpand=i.braces,o.contains=function(t,e,r){if("string"!=typeof t)throw new TypeError(l("contains","pattern","a string"));return(r=r||{}).contains=""!==e,t=i.unixify(t,r),r.contains&&!i.isGlob(e)?-1!==t.indexOf(e):a(e,r)(t)},o.expand=n,o.filter=function(t,e){if(!Array.isArray(t)&&"string"!=typeof t)throw new TypeError(l("filter","patterns","a string or array"));for(var r=(t=i.arrayify(t)).length,n=0,o=Array(r);n<r;)o[n]=a(t[n++],e);return function(t){if(null==t)return[];var r=o.length,n=0,s=!0;for(t=i.unixify(t,e);n<r;)if(!(0,o[n++])(t)){s=!1;break}return s}},o.isMatch=function(t,e,r){if("string"!=typeof t)throw new TypeError(l("isMatch","filepath","a string"));return t=i.unixify(t,r),"object"===i.typeOf(e)?a(t,e):a(e,r)(t)},o.makeRe=c,o.match=s,o.matcher=a,o.matchKeys=function(t,e,r){if("object"!==i.typeOf(t))throw new TypeError(l("matchKeys","first argument","an object"));var n=a(e,r),o={};for(var s in t)t.hasOwnProperty(s)&&n(s)&&(o[s]=t[s]);return o},t.exports=o},function(t,e,r){"use strict";
=======
 */



var expand = __webpack_require__(72);
var utils = __webpack_require__(4);

/**
 * The main function. Pass an array of filepaths,
 * and a string or array of glob patterns
 *
 * @param  {Array|String} `files`
 * @param  {Array|String} `patterns`
 * @param  {Object} `opts`
 * @return {Array} Array of matches
 */

function micromatch(files, patterns, opts) {
  if (!files || !patterns) return [];
  opts = opts || {};

  if (typeof opts.cache === 'undefined') {
    opts.cache = true;
  }

  if (!Array.isArray(patterns)) {
    return match(files, patterns, opts);
  }

  var len = patterns.length, i = 0;
  var omit = [], keep = [];

  while (len--) {
    var glob = patterns[i++];
    if (typeof glob === 'string' && glob.charCodeAt(0) === 33 /* ! */) {
      omit.push.apply(omit, match(files, glob.slice(1), opts));
    } else {
      keep.push.apply(keep, match(files, glob, opts));
    }
  }
  return utils.diff(keep, omit);
}

/**
 * Return an array of files that match the given glob pattern.
 *
 * This function is called by the main `micromatch` function If you only
 * need to pass a single pattern you might get very minor speed improvements
 * using this function.
 *
 * @param  {Array} `files`
 * @param  {String} `pattern`
 * @param  {Object} `options`
 * @return {Array}
 */

function match(files, pattern, opts) {
  if (utils.typeOf(files) !== 'string' && !Array.isArray(files)) {
    throw new Error(msg('match', 'files', 'a string or array'));
  }

  files = utils.arrayify(files);
  opts = opts || {};

  var negate = opts.negate || false;
  var orig = pattern;

  if (typeof pattern === 'string') {
    negate = pattern.charAt(0) === '!';
    if (negate) {
      pattern = pattern.slice(1);
    }

    // we need to remove the character regardless,
    // so the above logic is still needed
    if (opts.nonegate === true) {
      negate = false;
    }
  }

  var _isMatch = matcher(pattern, opts);
  var len = files.length, i = 0;
  var res = [];

  while (i < len) {
    var file = files[i++];
    var fp = utils.unixify(file, opts);

    if (!_isMatch(fp)) { continue; }
    res.push(fp);
  }

  if (res.length === 0) {
    if (opts.failglob === true) {
      throw new Error('micromatch.match() found no matches for: "' + orig + '".');
    }

    if (opts.nonull || opts.nullglob) {
      res.push(utils.unescapeGlob(orig));
    }
  }

  // if `negate` was defined, diff negated files
  if (negate) { res = utils.diff(files, res); }

  // if `ignore` was defined, diff ignored filed
  if (opts.ignore && opts.ignore.length) {
    pattern = opts.ignore;
    opts = utils.omit(opts, ['ignore']);
    res = utils.diff(res, micromatch(res, pattern, opts));
  }

  if (opts.nodupes) {
    return utils.unique(res);
  }
  return res;
}

/**
 * Returns a function that takes a glob pattern or array of glob patterns
 * to be used with `Array#filter()`. (Internally this function generates
 * the matching function using the [matcher] method).
 *
 * ```js
 * var fn = mm.filter('[a-c]');
 * ['a', 'b', 'c', 'd', 'e'].filter(fn);
 * //=> ['a', 'b', 'c']
 * ```
 * @param  {String|Array} `patterns` Can be a glob or array of globs.
 * @param  {Options} `opts` Options to pass to the [matcher] method.
 * @return {Function} Filter function to be passed to `Array#filter()`.
 */

function filter(patterns, opts) {
  if (!Array.isArray(patterns) && typeof patterns !== 'string') {
    throw new TypeError(msg('filter', 'patterns', 'a string or array'));
  }

  patterns = utils.arrayify(patterns);
  var len = patterns.length, i = 0;
  var patternMatchers = Array(len);
  while (i < len) {
    patternMatchers[i] = matcher(patterns[i++], opts);
  }

  return function(fp) {
    if (fp == null) return [];
    var len = patternMatchers.length, i = 0;
    var res = true;

    fp = utils.unixify(fp, opts);
    while (i < len) {
      var fn = patternMatchers[i++];
      if (!fn(fp)) {
        res = false;
        break;
      }
    }
    return res;
  };
}

/**
 * Returns true if the filepath contains the given
 * pattern. Can also return a function for matching.
 *
 * ```js
 * isMatch('foo.md', '*.md', {});
 * //=> true
 *
 * isMatch('*.md', {})('foo.md')
 * //=> true
 * ```
 * @param  {String} `fp`
 * @param  {String} `pattern`
 * @param  {Object} `opts`
 * @return {Boolean}
 */

function isMatch(fp, pattern, opts) {
  if (typeof fp !== 'string') {
    throw new TypeError(msg('isMatch', 'filepath', 'a string'));
  }

  fp = utils.unixify(fp, opts);
  if (utils.typeOf(pattern) === 'object') {
    return matcher(fp, pattern);
  }
  return matcher(pattern, opts)(fp);
}

/**
 * Returns true if the filepath matches the
 * given pattern.
 */

function contains(fp, pattern, opts) {
  if (typeof fp !== 'string') {
    throw new TypeError(msg('contains', 'pattern', 'a string'));
  }

  opts = opts || {};
  opts.contains = (pattern !== '');
  fp = utils.unixify(fp, opts);

  if (opts.contains && !utils.isGlob(pattern)) {
    return fp.indexOf(pattern) !== -1;
  }
  return matcher(pattern, opts)(fp);
}

/**
 * Returns true if a file path matches any of the
 * given patterns.
 *
 * @param  {String} `fp` The filepath to test.
 * @param  {String|Array} `patterns` Glob patterns to use.
 * @param  {Object} `opts` Options to pass to the `matcher()` function.
 * @return {String}
 */

function any(fp, patterns, opts) {
  if (!Array.isArray(patterns) && typeof patterns !== 'string') {
    throw new TypeError(msg('any', 'patterns', 'a string or array'));
  }

  patterns = utils.arrayify(patterns);
  var len = patterns.length;

  fp = utils.unixify(fp, opts);
  while (len--) {
    var isMatch = matcher(patterns[len], opts);
    if (isMatch(fp)) {
      return true;
    }
  }
  return false;
}

/**
 * Filter the keys of an object with the given `glob` pattern
 * and `options`
 *
 * @param  {Object} `object`
 * @param  {Pattern} `object`
 * @return {Array}
 */

function matchKeys(obj, glob, options) {
  if (utils.typeOf(obj) !== 'object') {
    throw new TypeError(msg('matchKeys', 'first argument', 'an object'));
  }

  var fn = matcher(glob, options);
  var res = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && fn(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}

/**
 * Return a function for matching based on the
 * given `pattern` and `options`.
 *
 * @param  {String} `pattern`
 * @param  {Object} `options`
 * @return {Function}
 */

function matcher(pattern, opts) {
  // pattern is a function
  if (typeof pattern === 'function') {
    return pattern;
  }
  // pattern is a regex
  if (pattern instanceof RegExp) {
    return function(fp) {
      return pattern.test(fp);
    };
  }

  if (typeof pattern !== 'string') {
    throw new TypeError(msg('matcher', 'pattern', 'a string, regex, or function'));
  }

  // strings, all the way down...
  pattern = utils.unixify(pattern, opts);

  // pattern is a non-glob string
  if (!utils.isGlob(pattern)) {
    return utils.matchPath(pattern, opts);
  }
  // pattern is a glob string
  var re = makeRe(pattern, opts);

  // `matchBase` is defined
  if (opts && opts.matchBase) {
    return utils.hasFilename(re, opts);
  }
  // `matchBase` is not defined
  return function(fp) {
    fp = utils.unixify(fp, opts);
    return re.test(fp);
  };
}

/**
 * Create and cache a regular expression for matching
 * file paths.
 *
 * If the leading character in the `glob` is `!`, a negation
 * regex is returned.
 *
 * @param  {String} `glob`
 * @param  {Object} `options`
 * @return {RegExp}
 */

function toRegex(glob, options) {
  // clone options to prevent  mutating the original object
  var opts = Object.create(options || {});
  var flags = opts.flags || '';
  if (opts.nocase && flags.indexOf('i') === -1) {
    flags += 'i';
  }

  var parsed = expand(glob, opts);

  // pass in tokens to avoid parsing more than once
  opts.negated = opts.negated || parsed.negated;
  opts.negate = opts.negated;
  glob = wrapGlob(parsed.pattern, opts);
  var re;

  try {
    re = new RegExp(glob, flags);
    return re;
  } catch (err) {
    err.reason = 'micromatch invalid regex: (' + re + ')';
    if (opts.strict) throw new SyntaxError(err);
  }

  // we're only here if a bad pattern was used and the user
  // passed `options.silent`, so match nothing
  return /$^/;
}

/**
 * Create the regex to do the matching. If the leading
 * character in the `glob` is `!` a negation regex is returned.
 *
 * @param {String} `glob`
 * @param {Boolean} `negate`
 */

function wrapGlob(glob, opts) {
  var prefix = (opts && !opts.contains) ? '^' : '';
  var after = (opts && !opts.contains) ? '$' : '';
  glob = ('(?:' + glob + ')' + after);
  if (opts && opts.negate) {
    return prefix + ('(?!^' + glob + ').*$');
  }
  return prefix + glob;
}

/**
 * Create and cache a regular expression for matching file paths.
 * If the leading character in the `glob` is `!`, a negation
 * regex is returned.
 *
 * @param  {String} `glob`
 * @param  {Object} `options`
 * @return {RegExp}
 */

function makeRe(glob, opts) {
  if (utils.typeOf(glob) !== 'string') {
    throw new Error(msg('makeRe', 'glob', 'a string'));
  }
  return utils.cache(toRegex, glob, opts);
}

/**
 * Make error messages consistent. Follows this format:
 *
 * ```js
 * msg(methodName, argNumber, nativeType);
 * // example:
 * msg('matchKeys', 'first', 'an object');
 * ```
 *
 * @param  {String} `method`
 * @param  {String} `num`
 * @param  {String} `type`
 * @return {String}
 */

function msg(method, what, type) {
  return 'micromatch.' + method + '(): ' + what + ' should be ' + type + '.';
}

/**
 * Public methods
 */

/* eslint no-multi-spaces: 0 */
micromatch.any       = any;
micromatch.braces    = micromatch.braceExpand = utils.braces;
micromatch.contains  = contains;
micromatch.expand    = expand;
micromatch.filter    = filter;
micromatch.isMatch   = isMatch;
micromatch.makeRe    = makeRe;
micromatch.match     = match;
micromatch.matcher   = matcher;
micromatch.matchKeys = matchKeys;

/**
 * Expose `micromatch`
 */

module.exports = micromatch;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * micromatch <https://github.com/jonschlinkert/micromatch>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n=r(4),i=r(102);function o(t,e){var r=t.split(e),n=""===r[0],i=""===r[r.length-1];return r=r.filter(Boolean),n&&r.unshift(""),i&&r.push(""),r.join(e)}t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("micromatch.expand(): argument should be a string.");var r=new i(t,e||{}),c=r.options;if(!n.isGlob(t))return r.pattern=r.pattern.replace(/([\/.])/g,"\\$1"),r;r.pattern=r.pattern.replace(/(\+)(?!\()/g,"\\$1"),r.pattern=r.pattern.split("$").join("\\$"),"boolean"!=typeof c.braces&&"boolean"!=typeof c.nobraces&&(c.braces=!0);if(".*"===r.pattern)return{pattern:"\\."+a,tokens:f,options:c};if("*"===r.pattern)return{pattern:p(c.dot),tokens:f,options:c};r.parse();var f=r.tokens;f.is.negated=c.negated,!0!==c.dotfiles&&!f.is.dotfile||!1===c.dot||(c.dotfiles=!0,c.dot=!0);!0!==c.dotdirs&&!f.is.dotdir||!1===c.dot||(c.dotdirs=!0,c.dot=!0);/[{,]\./.test(r.pattern)&&(c.makeRe=!1,c.dot=!0);!0!==c.nonegate&&(c.negated=r.negated);"."===r.pattern.charAt(0)&&"/"!==r.pattern.charAt(1)&&(r.pattern="\\"+r.pattern);r.track("before braces"),f.is.braces&&r.braces();r.track("after braces"),r.track("before extglob"),f.is.extglob&&r.extglob();r.track("after extglob"),r.track("before brackets"),f.is.brackets&&r.brackets();r.track("after brackets"),r._replace("[!","[^"),r._replace("(?","(%~"),r._replace(/\[\]/,"\\[\\]"),r._replace("/[","/"+(c.dot?l:u)+"[",!0),r._replace("/?","/"+(c.dot?l:u)+"[^/]",!0),r._replace("/.","/(?=.)\\.",!0),r._replace(/^(\w):([\\\/]+?)/gi,"(?=.)$1:$2",!0),-1!==r.pattern.indexOf("[^")&&(r.pattern=r.pattern.replace(/\[\^([^\]]*?)\]/g,function(t,e){return-1===e.indexOf("/")&&(e="\\/"+e),"[^"+e+"]"}));!1!==c.globstar&&"**"===r.pattern?r.pattern=h(c.dot):(r.pattern=function(t,e,r){var n=t.split(e),i=n.join("").length,o=t.split(r).join("").length;if(i!==o)return(t=n.join("\\"+e)).split(r).join("\\"+r);return t}(r.pattern,"[","]"),r.escape(r.pattern),f.is.globstar&&(r.pattern=o(r.pattern,"/**"),r.pattern=o(r.pattern,"**/"),r._replace("/**/","(?:/"+h(c.dot)+"/|/)",!0),r._replace(/\*{2,}/g,"**"),r._replace(/(\w+)\*(?!\/)/g,"$1[^/]*?",!0),r._replace(/\*\*\/\*(\w)/g,h(c.dot)+"\\/"+(c.dot?l:u)+"[^/]*?$1",!0),!0!==c.dot&&r._replace(/\*\*\/(.)/g,"(?:**\\/|)$1"),(""!==f.path.dirname||/,\*\*|\*\*,/.test(r.orig))&&r._replace("**",h(c.dot),!0)),r._replace(/\/\*$/,"\\/"+p(c.dot),!0),r._replace(/(?!\/)\*$/,a,!0),r._replace(/([^\/]+)\*/,"$1"+p(!0),!0),r._replace("*",p(c.dot),!0),r._replace("?.","?\\.",!0),r._replace("?:","?:",!0),r._replace(/\?+/g,function(t){var e=t.length;return 1===e?s:s+"{"+e+"}"}),r._replace(/\.([*\w]+)/g,"\\.$1"),r._replace(/\[\^[\\\/]+\]/g,s),r._replace(/\/+/g,"\\/"),r._replace(/\\{2,}/g,"\\"));r.unescape(r.pattern),r._replace("__UNESC_STAR__","*"),r._replace("?.","?\\."),r._replace("[^\\/]",s),r.pattern.length>1&&/^[\[?*]/.test(r.pattern)&&(r.pattern=(c.dot?l:u)+r.pattern);return r};var s="[^/]",a=s+"*?",u="(?!\\.)(?=.)",c="(?:\\/|^)\\.{1,2}($|\\/)",l="(?!"+c+")(?=.)",f="(?:(?!"+c+").)*?";function p(t){return t?"(?!"+c+")(?=.)"+a:u+a}function h(t){return t?f:"(?:(?!(?:\\/|^)\\.).)*?"}},function(t,e){
=======
 */



var utils = __webpack_require__(4);
var Glob = __webpack_require__(104);

/**
 * Expose `expand`
 */

module.exports = expand;

/**
 * Expand a glob pattern to resolve braces and
 * similar patterns before converting to regex.
 *
 * @param  {String|Array} `pattern`
 * @param  {Array} `files`
 * @param  {Options} `opts`
 * @return {Array}
 */

function expand(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('micromatch.expand(): argument should be a string.');
  }

  var glob = new Glob(pattern, options || {});
  var opts = glob.options;

  if (!utils.isGlob(pattern)) {
    glob.pattern = glob.pattern.replace(/([\/.])/g, '\\$1');
    return glob;
  }

  glob.pattern = glob.pattern.replace(/(\+)(?!\()/g, '\\$1');
  glob.pattern = glob.pattern.split('$').join('\\$');

  if (typeof opts.braces !== 'boolean' && typeof opts.nobraces !== 'boolean') {
    opts.braces = true;
  }

  if (glob.pattern === '.*') {
    return {
      pattern: '\\.' + star,
      tokens: tok,
      options: opts
    };
  }

  if (glob.pattern === '*') {
    return {
      pattern: oneStar(opts.dot),
      tokens: tok,
      options: opts
    };
  }

  // parse the glob pattern into tokens
  glob.parse();
  var tok = glob.tokens;
  tok.is.negated = opts.negated;

  // dotfile handling
  if ((opts.dotfiles === true || tok.is.dotfile) && opts.dot !== false) {
    opts.dotfiles = true;
    opts.dot = true;
  }

  if ((opts.dotdirs === true || tok.is.dotdir) && opts.dot !== false) {
    opts.dotdirs = true;
    opts.dot = true;
  }

  // check for braces with a dotfile pattern
  if (/[{,]\./.test(glob.pattern)) {
    opts.makeRe = false;
    opts.dot = true;
  }

  if (opts.nonegate !== true) {
    opts.negated = glob.negated;
  }

  // if the leading character is a dot or a slash, escape it
  if (glob.pattern.charAt(0) === '.' && glob.pattern.charAt(1) !== '/') {
    glob.pattern = '\\' + glob.pattern;
  }

  /**
   * Extended globs
   */

  // expand braces, e.g `{1..5}`
  glob.track('before braces');
  if (tok.is.braces) {
    glob.braces();
  }
  glob.track('after braces');

  // expand extglobs, e.g `foo/!(a|b)`
  glob.track('before extglob');
  if (tok.is.extglob) {
    glob.extglob();
  }
  glob.track('after extglob');

  // expand brackets, e.g `[[:alpha:]]`
  glob.track('before brackets');
  if (tok.is.brackets) {
    glob.brackets();
  }
  glob.track('after brackets');

  // special patterns
  glob._replace('[!', '[^');
  glob._replace('(?', '(%~');
  glob._replace(/\[\]/, '\\[\\]');
  glob._replace('/[', '/' + (opts.dot ? dotfiles : nodot) + '[', true);
  glob._replace('/?', '/' + (opts.dot ? dotfiles : nodot) + '[^/]', true);
  glob._replace('/.', '/(?=.)\\.', true);

  // windows drives
  glob._replace(/^(\w):([\\\/]+?)/gi, '(?=.)$1:$2', true);

  // negate slashes in exclusion ranges
  if (glob.pattern.indexOf('[^') !== -1) {
    glob.pattern = negateSlash(glob.pattern);
  }

  if (opts.globstar !== false && glob.pattern === '**') {
    glob.pattern = globstar(opts.dot);

  } else {
    glob.pattern = balance(glob.pattern, '[', ']');
    glob.escape(glob.pattern);

    // if the pattern has `**`
    if (tok.is.globstar) {
      glob.pattern = collapse(glob.pattern, '/**');
      glob.pattern = collapse(glob.pattern, '**/');
      glob._replace('/**/', '(?:/' + globstar(opts.dot) + '/|/)', true);
      glob._replace(/\*{2,}/g, '**');

      // 'foo/*'
      glob._replace(/(\w+)\*(?!\/)/g, '$1[^/]*?', true);
      glob._replace(/\*\*\/\*(\w)/g, globstar(opts.dot) + '\\/' + (opts.dot ? dotfiles : nodot) + '[^/]*?$1', true);

      if (opts.dot !== true) {
        glob._replace(/\*\*\/(.)/g, '(?:**\\/|)$1');
      }

      // 'foo/**' or '{**,*}', but not 'foo**'
      if (tok.path.dirname !== '' || /,\*\*|\*\*,/.test(glob.orig)) {
        glob._replace('**', globstar(opts.dot), true);
      }
    }

    // ends with /*
    glob._replace(/\/\*$/, '\\/' + oneStar(opts.dot), true);
    // ends with *, no slashes
    glob._replace(/(?!\/)\*$/, star, true);
    // has 'n*.' (partial wildcard w/ file extension)
    glob._replace(/([^\/]+)\*/, '$1' + oneStar(true), true);
    // has '*'
    glob._replace('*', oneStar(opts.dot), true);
    glob._replace('?.', '?\\.', true);
    glob._replace('?:', '?:', true);

    glob._replace(/\?+/g, function(match) {
      var len = match.length;
      if (len === 1) {
        return qmark;
      }
      return qmark + '{' + len + '}';
    });

    // escape '.abc' => '\\.abc'
    glob._replace(/\.([*\w]+)/g, '\\.$1');
    // fix '[^\\\\/]'
    glob._replace(/\[\^[\\\/]+\]/g, qmark);
    // '///' => '\/'
    glob._replace(/\/+/g, '\\/');
    // '\\\\\\' => '\\'
    glob._replace(/\\{2,}/g, '\\');
  }

  // unescape previously escaped patterns
  glob.unescape(glob.pattern);
  glob._replace('__UNESC_STAR__', '*');

  // escape dots that follow qmarks
  glob._replace('?.', '?\\.');

  // remove unnecessary slashes in character classes
  glob._replace('[^\\/]', qmark);

  if (glob.pattern.length > 1) {
    if (/^[\[?*]/.test(glob.pattern)) {
      // only prepend the string if we don't want to match dotfiles
      glob.pattern = (opts.dot ? dotfiles : nodot) + glob.pattern;
    }
  }

  return glob;
}

/**
 * Collapse repeated character sequences.
 *
 * ```js
 * collapse('a/../../../b', '../');
 * //=> 'a/../b'
 * ```
 *
 * @param  {String} `str`
 * @param  {String} `ch` Character sequence to collapse
 * @return {String}
 */

function collapse(str, ch) {
  var res = str.split(ch);
  var isFirst = res[0] === '';
  var isLast = res[res.length - 1] === '';
  res = res.filter(Boolean);
  if (isFirst) res.unshift('');
  if (isLast) res.push('');
  return res.join(ch);
}

/**
 * Negate slashes in exclusion ranges, per glob spec:
 *
 * ```js
 * negateSlash('[^foo]');
 * //=> '[^\\/foo]'
 * ```
 *
 * @param  {String} `str` glob pattern
 * @return {String}
 */

function negateSlash(str) {
  return str.replace(/\[\^([^\]]*?)\]/g, function(match, inner) {
    if (inner.indexOf('/') === -1) {
      inner = '\\/' + inner;
    }
    return '[^' + inner + ']';
  });
}

/**
 * Escape imbalanced braces/bracket. This is a very
 * basic, naive implementation that only does enough
 * to serve the purpose.
 */

function balance(str, a, b) {
  var aarr = str.split(a);
  var alen = aarr.join('').length;
  var blen = str.split(b).join('').length;

  if (alen !== blen) {
    str = aarr.join('\\' + a);
    return str.split(b).join('\\' + b);
  }
  return str;
}

/**
 * Special patterns to be converted to regex.
 * Heuristics are used to simplify patterns
 * and speed up processing.
 */

/* eslint no-multi-spaces: 0 */
var qmark       = '[^/]';
var star        = qmark + '*?';
var nodot       = '(?!\\.)(?=.)';
var dotfileGlob = '(?:\\/|^)\\.{1,2}($|\\/)';
var dotfiles    = '(?!' + dotfileGlob + ')(?=.)';
var twoStarDot  = '(?:(?!' + dotfileGlob + ').)*?';

/**
 * Create a regex for `*`.
 *
 * If `dot` is true, or the pattern does not begin with
 * a leading star, then return the simpler regex.
 */

function oneStar(dotfile) {
  return dotfile ? '(?!' + dotfileGlob + ')(?=.)' + star : (nodot + star);
}

function globstar(dotfile) {
  if (dotfile) { return twoStarDot; }
  return '(?:(?!(?:\\/|^)\\.).)*?';
}


/***/ }),
/* 73 */
/***/ (function(module, exports) {

>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * filename-regex <https://github.com/regexps/filename-regex>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert
 * Licensed under the MIT license.
 */
<<<<<<< HEAD
t.exports=function(){return/([^\\\/]+)$/}},function(t,e,r){"use strict";
=======

module.exports = function filenameRegex() {
  return /([^\\\/]+)$/;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * arr-diff <https://github.com/jonschlinkert/arr-diff>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
<<<<<<< HEAD
 */var n=r(73),i=[].slice;t.exports=function(t,e){var r=arguments.length,o=t.length,s=-1,a=[];if(1===r)return t;for(r>2&&(e=n(i.call(arguments,1)));++s<o;)~e.indexOf(t[s])||a.push(t[s]);return a}},function(t,e,r){"use strict";
=======
 */



var flatten = __webpack_require__(75);
var slice = [].slice;

/**
 * Return the difference between the first array and
 * additional arrays.
 *
 * ```js
 * var diff = require('{%= name %}');
 *
 * var a = ['a', 'b', 'c', 'd'];
 * var b = ['b', 'c'];
 *
 * console.log(diff(a, b))
 * //=> ['a', 'd']
 * ```
 *
 * @param  {Array} `a`
 * @param  {Array} `b`
 * @return {Array}
 * @api public
 */

function diff(arr, arrays) {
  var argsLen = arguments.length;
  var len = arr.length, i = -1;
  var res = [], arrays;

  if (argsLen === 1) {
    return arr;
  }

  if (argsLen > 2) {
    arrays = flatten(slice.call(arguments, 1));
  }

  while (++i < len) {
    if (!~arrays.indexOf(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

/**
 * Expose `diff`
 */

module.exports = diff;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */t.exports=function(t){return function t(e,r){var n,i=0;var o=e.length;for(;i<o;i++)n=e[i],Array.isArray(n)?t(n,r):r.push(n);return r}(t,[])}},function(t,e,r){"use strict";
=======
 */



module.exports = function (arr) {
  return flat(arr, []);
};

function flat(arr, res) {
  var i = 0, cur;
  var len = arr.length;
  for (; i < len; i++) {
    cur = arr[i];
    Array.isArray(cur) ? flat(cur, res) : res.push(cur);
  }
  return res;
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * array-unique <https://github.com/jonschlinkert/array-unique>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */t.exports=function(t){if(!Array.isArray(t))throw new TypeError("array-unique expects an array.");for(var e=t.length,r=-1;r++<e;)for(var n=r+1;n<t.length;++n)t[r]===t[n]&&t.splice(n--,1);return t}},function(t,e,r){"use strict";
=======
 */



module.exports = function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  var len = arr.length;
  var i = -1;

  while (i++ < len) {
    var j = i + 1;

    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * braces <https://github.com/jonschlinkert/braces>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
<<<<<<< HEAD
 */var n,i,o=r(76),s=r(18),a=r(85);function u(t,e,r){if(""===t)return[];Array.isArray(e)||(r=e,e=[]);var h=r||{};e=e||[],void 0===h.nodupes&&(h.nodupes=!0);var d,g=h.fn;switch("function"==typeof h&&(g=h,h={}),i instanceof RegExp||(i=/\${|( (?=[{,}])|(?=[{,}]) )|{}|{,}|\\,(?=.*[{}])|\/\.(?=.*[{}])|\\\.(?={)|\\{|\\}/),(t.match(i)||[])[0]){case"\\,":return function(t,e,r){return/\w,/.test(t)?p(u(t=t.split("\\,").join("__ESC_COMMA__"),e,r),function(t){return t.split("__ESC_COMMA__").join(",")}):e.concat(t.split("\\").join(""))}(t,e,h);case"\\.":return function(t,e,r){return/[^\\]\..+\\\./.test(t)?p(u(t=t.split("\\.").join("__ESC_DOT__"),e,r),function(t){return t.split("__ESC_DOT__").join(".")}):e.concat(t.split("\\").join(""))}(t,e,h);case"/.":return function(t,e,r){return p(u(t=t.split("/.").join("__ESC_PATH__"),e,r),function(t){return t.split("__ESC_PATH__").join("/.")})}(t,e,h);case" ":return function(t){var e=t.split(" "),r=e.length,n=[],i=0;for(;r--;)n.push.apply(n,u(e[i++]));return n}(t);case"{,}":return function(t,e,r){"function"==typeof e&&(r=e,e=null);var n,i=e||{},o="__ESC_EXP__",a=0,u=t.split("{,}");if(i.nodupes)return r(u.join(""),i);a=u.length-1;var c=(n=r(u.join(o),i)).length,l=[],f=0;for(;c--;){var p=n[f++],h=p.indexOf(o);if(-1===h)l.push(p);else if((p=p.split("__ESC_EXP__").join(""))&&!1!==i.nodupes)l.push(p);else{var d=Math.pow(2,a);l.push.apply(l,s(p,d))}}return l}(t,h,u);case"{}":return function(t,e,r){return u(t.split("{}").join("\\{\\}"),e,r)}(t,e,h);case"\\{":case"\\}":return function(t,e,r){return/\{[^{]+\{/.test(t)?p(u(t=(t=t.split("\\{").join("__LT_BRACE__")).split("\\}").join("__RT_BRACE__"),e,r),function(t){return(t=t.split("__LT_BRACE__").join("{")).split("__RT_BRACE__").join("}")}):e.concat(t.split("\\").join(""))}(t,e,h);case"${":if(!/\{[^{]+\{/.test(t))return e.concat(t);d=!0,t=a.before(t,/\$\{([^}]+)\}/)}n instanceof RegExp||(n=/.*(\\?\{([^}]+)\})/);var y=n.exec(t);if(null==y)return[t];var m,b,v=y[1],_=y[2];if(""===_)return[t];if(-1!==_.indexOf(".."))b=(m=o(_,h,g)||_.split(",")).length;else{if('"'===_[0]||"'"===_[0])return e.concat(t.split(/['"]/).join(""));if(m=_.split(","),h.makeRe)return u(t.replace(v,c(m,"|")),h);1===(b=m.length)&&h.bash&&(m[0]=c(m[0],"\\"))}for(var w,x=m.length,S=0;x--;){var C=m[S++];if(/(\.[^.\/])/.test(C))return b>1?m:[t];if(w=f(t,v,C),/\{[^{}]+?\}/.test(w))e=u(w,e,h);else if(""!==w){if(h.nodupes&&-1!==e.indexOf(w))continue;e.push(d?a.after(w):w)}}return h.strict?function(t,e){if(null==t)return[];if("function"!=typeof e)throw new TypeError("braces: filter expects a callback function.");var r=t.length,n=t.slice(),i=0;for(;r--;)e(t[r],i++)||n.splice(r,1);return n}(e,l):e}function c(t,e){return"|"===e?"("+t.join(e)+")":","===e?"{"+t.join(e)+"}":"-"===e?"["+t.join(e)+"]":"\\"===e?"\\{"+t+"\\}":void 0}function l(t){return!!t&&"\\"!==t}function f(t,e,r){var n=t.indexOf(e);return t.substr(0,n)+r+t.substr(n+e.length)}function p(t,e){if(null==t)return[];for(var r=t.length,n=new Array(r),i=-1;++i<r;)n[i]=e(t[i],i,t);return n}t.exports=function(t,e){if("string"!=typeof t)throw new Error("braces expects a string");return u(t,e)}},function(t,e,r){"use strict";
=======
 */



/**
 * Module dependencies
 */

var expand = __webpack_require__(78);
var repeat = __webpack_require__(19);
var tokens = __webpack_require__(88);

/**
 * Expose `braces`
 */

module.exports = function(str, options) {
  if (typeof str !== 'string') {
    throw new Error('braces expects a string');
  }
  return braces(str, options);
};

/**
 * Expand `{foo,bar}` or `{1..5}` braces in the
 * given `string`.
 *
 * @param  {String} `str`
 * @param  {Array} `arr`
 * @param  {Object} `options`
 * @return {Array}
 */

function braces(str, arr, options) {
  if (str === '') {
    return [];
  }

  if (!Array.isArray(arr)) {
    options = arr;
    arr = [];
  }

  var opts = options || {};
  arr = arr || [];

  if (typeof opts.nodupes === 'undefined') {
    opts.nodupes = true;
  }

  var fn = opts.fn;
  var es6;

  if (typeof opts === 'function') {
    fn = opts;
    opts = {};
  }

  if (!(patternRe instanceof RegExp)) {
    patternRe = patternRegex();
  }

  var matches = str.match(patternRe) || [];
  var m = matches[0];

  switch(m) {
    case '\\,':
      return escapeCommas(str, arr, opts);
    case '\\.':
      return escapeDots(str, arr, opts);
    case '\/.':
      return escapePaths(str, arr, opts);
    case ' ':
      return splitWhitespace(str);
    case '{,}':
      return exponential(str, opts, braces);
    case '{}':
      return emptyBraces(str, arr, opts);
    case '\\{':
    case '\\}':
      return escapeBraces(str, arr, opts);
    case '${':
      if (!/\{[^{]+\{/.test(str)) {
        return arr.concat(str);
      } else {
        es6 = true;
        str = tokens.before(str, es6Regex());
      }
  }

  if (!(braceRe instanceof RegExp)) {
    braceRe = braceRegex();
  }

  var match = braceRe.exec(str);
  if (match == null) {
    return [str];
  }

  var outter = match[1];
  var inner = match[2];
  if (inner === '') { return [str]; }

  var segs, segsLength;

  if (inner.indexOf('..') !== -1) {
    segs = expand(inner, opts, fn) || inner.split(',');
    segsLength = segs.length;

  } else if (inner[0] === '"' || inner[0] === '\'') {
    return arr.concat(str.split(/['"]/).join(''));

  } else {
    segs = inner.split(',');
    if (opts.makeRe) {
      return braces(str.replace(outter, wrap(segs, '|')), opts);
    }

    segsLength = segs.length;
    if (segsLength === 1 && opts.bash) {
      segs[0] = wrap(segs[0], '\\');
    }
  }

  var len = segs.length;
  var i = 0, val;

  while (len--) {
    var path = segs[i++];

    if (/(\.[^.\/])/.test(path)) {
      if (segsLength > 1) {
        return segs;
      } else {
        return [str];
      }
    }

    val = splice(str, outter, path);

    if (/\{[^{}]+?\}/.test(val)) {
      arr = braces(val, arr, opts);
    } else if (val !== '') {
      if (opts.nodupes && arr.indexOf(val) !== -1) { continue; }
      arr.push(es6 ? tokens.after(val) : val);
    }
  }

  if (opts.strict) { return filter(arr, filterEmpty); }
  return arr;
}

/**
 * Expand exponential ranges
 *
 *   `a{,}{,}` => ['a', 'a', 'a', 'a']
 */

function exponential(str, options, fn) {
  if (typeof options === 'function') {
    fn = options;
    options = null;
  }

  var opts = options || {};
  var esc = '__ESC_EXP__';
  var exp = 0;
  var res;

  var parts = str.split('{,}');
  if (opts.nodupes) {
    return fn(parts.join(''), opts);
  }

  exp = parts.length - 1;
  res = fn(parts.join(esc), opts);
  var len = res.length;
  var arr = [];
  var i = 0;

  while (len--) {
    var ele = res[i++];
    var idx = ele.indexOf(esc);

    if (idx === -1) {
      arr.push(ele);

    } else {
      ele = ele.split('__ESC_EXP__').join('');
      if (!!ele && opts.nodupes !== false) {
        arr.push(ele);

      } else {
        var num = Math.pow(2, exp);
        arr.push.apply(arr, repeat(ele, num));
      }
    }
  }
  return arr;
}

/**
 * Wrap a value with parens, brackets or braces,
 * based on the given character/separator.
 *
 * @param  {String|Array} `val`
 * @param  {String} `ch`
 * @return {String}
 */

function wrap(val, ch) {
  if (ch === '|') {
    return '(' + val.join(ch) + ')';
  }
  if (ch === ',') {
    return '{' + val.join(ch) + '}';
  }
  if (ch === '-') {
    return '[' + val.join(ch) + ']';
  }
  if (ch === '\\') {
    return '\\{' + val + '\\}';
  }
}

/**
 * Handle empty braces: `{}`
 */

function emptyBraces(str, arr, opts) {
  return braces(str.split('{}').join('\\{\\}'), arr, opts);
}

/**
 * Filter out empty-ish values
 */

function filterEmpty(ele) {
  return !!ele && ele !== '\\';
}

/**
 * Handle patterns with whitespace
 */

function splitWhitespace(str) {
  var segs = str.split(' ');
  var len = segs.length;
  var res = [];
  var i = 0;

  while (len--) {
    res.push.apply(res, braces(segs[i++]));
  }
  return res;
}

/**
 * Handle escaped braces: `\\{foo,bar}`
 */

function escapeBraces(str, arr, opts) {
  if (!/\{[^{]+\{/.test(str)) {
    return arr.concat(str.split('\\').join(''));
  } else {
    str = str.split('\\{').join('__LT_BRACE__');
    str = str.split('\\}').join('__RT_BRACE__');
    return map(braces(str, arr, opts), function(ele) {
      ele = ele.split('__LT_BRACE__').join('{');
      return ele.split('__RT_BRACE__').join('}');
    });
  }
}

/**
 * Handle escaped dots: `{1\\.2}`
 */

function escapeDots(str, arr, opts) {
  if (!/[^\\]\..+\\\./.test(str)) {
    return arr.concat(str.split('\\').join(''));
  } else {
    str = str.split('\\.').join('__ESC_DOT__');
    return map(braces(str, arr, opts), function(ele) {
      return ele.split('__ESC_DOT__').join('.');
    });
  }
}

/**
 * Handle escaped dots: `{1\\.2}`
 */

function escapePaths(str, arr, opts) {
  str = str.split('\/.').join('__ESC_PATH__');
  return map(braces(str, arr, opts), function(ele) {
    return ele.split('__ESC_PATH__').join('\/.');
  });
}

/**
 * Handle escaped commas: `{a\\,b}`
 */

function escapeCommas(str, arr, opts) {
  if (!/\w,/.test(str)) {
    return arr.concat(str.split('\\').join(''));
  } else {
    str = str.split('\\,').join('__ESC_COMMA__');
    return map(braces(str, arr, opts), function(ele) {
      return ele.split('__ESC_COMMA__').join(',');
    });
  }
}

/**
 * Regex for common patterns
 */

function patternRegex() {
  return /\${|( (?=[{,}])|(?=[{,}]) )|{}|{,}|\\,(?=.*[{}])|\/\.(?=.*[{}])|\\\.(?={)|\\{|\\}/;
}

/**
 * Braces regex.
 */

function braceRegex() {
  return /.*(\\?\{([^}]+)\})/;
}

/**
 * es6 delimiter regex.
 */

function es6Regex() {
  return /\$\{([^}]+)\}/;
}

var braceRe;
var patternRe;

/**
 * Faster alternative to `String.replace()` when the
 * index of the token to be replaces can't be supplied
 */

function splice(str, token, replacement) {
  var i = str.indexOf(token);
  return str.substr(0, i) + replacement
    + str.substr(i + token.length);
}

/**
 * Fast array map
 */

function map(arr, fn) {
  if (arr == null) {
    return [];
  }

  var len = arr.length;
  var res = new Array(len);
  var i = -1;

  while (++i < len) {
    res[i] = fn(arr[i], i, arr);
  }

  return res;
}

/**
 * Fast array filter
 */

function filter(arr, cb) {
  if (arr == null) return [];
  if (typeof cb !== 'function') {
    throw new TypeError('braces: filter expects a callback function.');
  }

  var len = arr.length;
  var res = arr.slice();
  var i = 0;

  while (len--) {
    if (!cb(arr[len], i++)) {
      res.splice(len, 1);
    }
  }
  return res;
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * expand-range <https://github.com/jonschlinkert/expand-range>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */var n=r(77);t.exports=function(t,e,r){if("string"!=typeof t)throw new TypeError("expand-range expects a string.");"function"==typeof e&&(r=e,e={}),"boolean"==typeof e&&((e={}).makeRe=!0);var i=e||{},o=t.split(".."),s=o.length;return s>3?t:1===s?o:("boolean"==typeof r&&!0===r&&(i.makeRe=!0),o.push(i),n.apply(null,o.concat(r)))}},function(t,e,r){"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */var n=r(78),i=r(79),o=r(81),s=r(84),a=r(18);function u(t,e,r){"~"===e&&(e="-");var n=t.join(e),i=r&&r.regexPrefix;return"|"===e&&(n="("+(n=i?i+n:n)+")"),"-"===e&&(n="["+(n=i&&"^"===i?i+n:n)+"]"),[n]}function c(t,e,r,n,i){return function(t,e,r,n,i){return!i&&(n?t<=9&&e<=9:t<e&&1===r)}(t,e,r,n,i)?"~":"|"}function l(t,e){var r=e?e+t:t;return e&&"-"===t.toString().charAt(0)&&(r="-"+e+t.toString().substr(1)),r.toString()}function f(t){return/[a-z0-9]/i.test(t)}function p(t){return/[a-z][0-9]|[0-9][a-z]/i.test(t)}function h(t){return/^-*0+$/.test(t.toString())?"0":t}function d(t){return/[^.]\.|^-*0+[0-9]/.test(t)}function g(t){return t.toString().length}t.exports=function(t,e,r,y,m){if(null==t||null==e)throw new Error("fill-range expects the first and second args to be strings.");"function"==typeof r&&(m=r,y={},r=null);"function"==typeof y&&(m=y,y={});n(r)&&(y=r,r="");var b,v=!1,_="",w=y||{};void 0===w.silent&&(w.silent=!0);r=r||w.step;var x=t,S=e;e="-0"===e.toString()?0:e,(w.optimize||w.makeRe)&&(r=r?r+="~":r,b=!0,v=!0,_="~");if("string"==typeof r){var C=/\?|>|\||\+|\~/g.exec(r);if(C){var P=C.index,T=C[0];if("+"===T)return a(t,e);if("?"===T)return[o(t,e)];">"===T?(r=r.substr(0,P)+r.substr(P+1),b=!0):"|"===T?(r=r.substr(0,P)+r.substr(P+1),b=!0,v=!0,_=T):"~"===T&&(r=r.substr(0,P)+r.substr(P+1),b=!0,v=!0,_=T)}else if(!i(r)){if(!w.silent)throw new TypeError("fill-range: invalid step.");return null}}if(/[.&*()[\]^%$#@!]/.test(t)||/[.&*()[\]^%$#@!]/.test(e)){if(!w.silent)throw new RangeError("fill-range: invalid range arguments.");return null}if(!f(t)||!f(e)||p(t)||p(e)){if(!w.silent)throw new RangeError("fill-range: invalid range arguments.");return null}var E=i(h(t)),A=i(h(e));if(!E&&A||E&&!A){if(!w.silent)throw new TypeError("fill-range: first range argument is incompatible with second.");return null}var O=E,B=function(t){return Math.abs(t>>0)||1}(r);O?(t=+t,e=+e):(t=t.charCodeAt(0),e=e.charCodeAt(0));var j=t>e;(t<0||e<0)&&(b=!1,v=!1);var k,R,M=function(t,e){if(d(t)||d(e)){var r=g(t),n=g(e),i=r>=n?r:n;return function(t){return s("0",i-g(t))}}return!1}(x,S),D=[],F=0;if(v&&function(t,e,r,n,i,o){if(n&&(t>9||e>9))return!1;return!i&&1===r&&t<e}(t,e,B,O,M))return"|"!==_&&"~"!==_||(_=c(t,e,B,O,j)),u([x,S],_,w);for(;j?t>=e:t<=e;)M&&O&&(R=M(t)),null!==(k="function"==typeof m?m(t,O,R,F++):O?l(t,R):v&&($=void 0,"\\"===($=function(t){return String.fromCharCode(t)}(t))||"["===$||"]"===$||"^"===$||"("===$||")"===$||"`"===$)?null:String.fromCharCode(t))&&D.push(k),j?t-=B:t+=B;var $;if((v||b)&&!w.noexpand)return"|"!==_&&"~"!==_||(_=c(t,e,B,O,j)),1===D.length||t<0||e<0?D:u(D,_,w);return D}},function(t,e,r){"use strict";
=======
 */



var isObject = __webpack_require__(80);
var isNumber = __webpack_require__(81);
var randomize = __webpack_require__(83);
var repeatStr = __webpack_require__(87);
var repeat = __webpack_require__(19);

/**
 * Expose `fillRange`
 */

module.exports = fillRange;

/**
 * Return a range of numbers or letters.
 *
 * @param  {String} `a` Start of the range
 * @param  {String} `b` End of the range
 * @param  {String} `step` Increment or decrement to use.
 * @param  {Function} `fn` Custom function to modify each element in the range.
 * @return {Array}
 */

function fillRange(a, b, step, options, fn) {
  if (a == null || b == null) {
    throw new Error('fill-range expects the first and second args to be strings.');
  }

  if (typeof step === 'function') {
    fn = step; options = {}; step = null;
  }

  if (typeof options === 'function') {
    fn = options; options = {};
  }

  if (isObject(step)) {
    options = step; step = '';
  }

  var expand, regex = false, sep = '';
  var opts = options || {};

  if (typeof opts.silent === 'undefined') {
    opts.silent = true;
  }

  step = step || opts.step;

  // store a ref to unmodified arg
  var origA = a, origB = b;

  b = (b.toString() === '-0') ? 0 : b;

  if (opts.optimize || opts.makeRe) {
    step = step ? (step += '~') : step;
    expand = true;
    regex = true;
    sep = '~';
  }

  // handle special step characters
  if (typeof step === 'string') {
    var match = stepRe().exec(step);

    if (match) {
      var i = match.index;
      var m = match[0];

      // repeat string
      if (m === '+') {
        return repeat(a, b);

      // randomize a, `b` times
      } else if (m === '?') {
        return [randomize(a, b)];

      // expand right, no regex reduction
      } else if (m === '>') {
        step = step.substr(0, i) + step.substr(i + 1);
        expand = true;

      // expand to an array, or if valid create a reduced
      // string for a regex logic `or`
      } else if (m === '|') {
        step = step.substr(0, i) + step.substr(i + 1);
        expand = true;
        regex = true;
        sep = m;

      // expand to an array, or if valid create a reduced
      // string for a regex range
      } else if (m === '~') {
        step = step.substr(0, i) + step.substr(i + 1);
        expand = true;
        regex = true;
        sep = m;
      }
    } else if (!isNumber(step)) {
      if (!opts.silent) {
        throw new TypeError('fill-range: invalid step.');
      }
      return null;
    }
  }

  if (/[.&*()[\]^%$#@!]/.test(a) || /[.&*()[\]^%$#@!]/.test(b)) {
    if (!opts.silent) {
      throw new RangeError('fill-range: invalid range arguments.');
    }
    return null;
  }

  // has neither a letter nor number, or has both letters and numbers
  // this needs to be after the step logic
  if (!noAlphaNum(a) || !noAlphaNum(b) || hasBoth(a) || hasBoth(b)) {
    if (!opts.silent) {
      throw new RangeError('fill-range: invalid range arguments.');
    }
    return null;
  }

  // validate arguments
  var isNumA = isNumber(zeros(a));
  var isNumB = isNumber(zeros(b));

  if ((!isNumA && isNumB) || (isNumA && !isNumB)) {
    if (!opts.silent) {
      throw new TypeError('fill-range: first range argument is incompatible with second.');
    }
    return null;
  }

  // by this point both are the same, so we
  // can use A to check going forward.
  var isNum = isNumA;
  var num = formatStep(step);

  // is the range alphabetical? or numeric?
  if (isNum) {
    // if numeric, coerce to an integer
    a = +a; b = +b;
  } else {
    // otherwise, get the charCode to expand alpha ranges
    a = a.charCodeAt(0);
    b = b.charCodeAt(0);
  }

  // is the pattern descending?
  var isDescending = a > b;

  // don't create a character class if the args are < 0
  if (a < 0 || b < 0) {
    expand = false;
    regex = false;
  }

  // detect padding
  var padding = isPadded(origA, origB);
  var res, pad, arr = [];
  var ii = 0;

  // character classes, ranges and logical `or`
  if (regex) {
    if (shouldExpand(a, b, num, isNum, padding, opts)) {
      // make sure the correct separator is used
      if (sep === '|' || sep === '~') {
        sep = detectSeparator(a, b, num, isNum, isDescending);
      }
      return wrap([origA, origB], sep, opts);
    }
  }

  while (isDescending ? (a >= b) : (a <= b)) {
    if (padding && isNum) {
      pad = padding(a);
    }

    // custom function
    if (typeof fn === 'function') {
      res = fn(a, isNum, pad, ii++);

    // letters
    } else if (!isNum) {
      if (regex && isInvalidChar(a)) {
        res = null;
      } else {
        res = String.fromCharCode(a);
      }

    // numbers
    } else {
      res = formatPadding(a, pad);
    }

    // add result to the array, filtering any nulled values
    if (res !== null) arr.push(res);

    // increment or decrement
    if (isDescending) {
      a -= num;
    } else {
      a += num;
    }
  }

  // now that the array is expanded, we need to handle regex
  // character classes, ranges or logical `or` that wasn't
  // already handled before the loop
  if ((regex || expand) && !opts.noexpand) {
    // make sure the correct separator is used
    if (sep === '|' || sep === '~') {
      sep = detectSeparator(a, b, num, isNum, isDescending);
    }
    if (arr.length === 1 || a < 0 || b < 0) { return arr; }
    return wrap(arr, sep, opts);
  }

  return arr;
}

/**
 * Wrap the string with the correct regex
 * syntax.
 */

function wrap(arr, sep, opts) {
  if (sep === '~') { sep = '-'; }
  var str = arr.join(sep);
  var pre = opts && opts.regexPrefix;

  // regex logical `or`
  if (sep === '|') {
    str = pre ? pre + str : str;
    str = '(' + str + ')';
  }

  // regex character class
  if (sep === '-') {
    str = (pre && pre === '^')
      ? pre + str
      : str;
    str = '[' + str + ']';
  }
  return [str];
}

/**
 * Check for invalid characters
 */

function isCharClass(a, b, step, isNum, isDescending) {
  if (isDescending) { return false; }
  if (isNum) { return a <= 9 && b <= 9; }
  if (a < b) { return step === 1; }
  return false;
}

/**
 * Detect the correct separator to use
 */

function shouldExpand(a, b, num, isNum, padding, opts) {
  if (isNum && (a > 9 || b > 9)) { return false; }
  return !padding && num === 1 && a < b;
}

/**
 * Detect the correct separator to use
 */

function detectSeparator(a, b, step, isNum, isDescending) {
  var isChar = isCharClass(a, b, step, isNum, isDescending);
  if (!isChar) {
    return '|';
  }
  return '~';
}

/**
 * Correctly format the step based on type
 */

function formatStep(step) {
  return Math.abs(step >> 0) || 1;
}

/**
 * Format padding, taking leading `-` into account
 */

function formatPadding(ch, pad) {
  var res = pad ? pad + ch : ch;
  if (pad && ch.toString().charAt(0) === '-') {
    res = '-' + pad + ch.toString().substr(1);
  }
  return res.toString();
}

/**
 * Check for invalid characters
 */

function isInvalidChar(str) {
  var ch = toStr(str);
  return ch === '\\'
    || ch === '['
    || ch === ']'
    || ch === '^'
    || ch === '('
    || ch === ')'
    || ch === '`';
}

/**
 * Convert to a string from a charCode
 */

function toStr(ch) {
  return String.fromCharCode(ch);
}


/**
 * Step regex
 */

function stepRe() {
  return /\?|>|\||\+|\~/g;
}

/**
 * Return true if `val` has either a letter
 * or a number
 */

function noAlphaNum(val) {
  return /[a-z0-9]/i.test(val);
}

/**
 * Return true if `val` has both a letter and
 * a number (invalid)
 */

function hasBoth(val) {
  return /[a-z][0-9]|[0-9][a-z]/i.test(val);
}

/**
 * Normalize zeros for checks
 */

function zeros(val) {
  if (/^-*0+$/.test(val.toString())) {
    return '0';
  }
  return val;
}

/**
 * Return true if `val` has leading zeros,
 * or a similar valid pattern.
 */

function hasZeros(val) {
  return /[^.]\.|^-*0+[0-9]/.test(val);
}

/**
 * If the string is padded, returns a curried function with
 * the a cached padding string, or `false` if no padding.
 *
 * @param  {*} `origA` String or number.
 * @return {String|Boolean}
 */

function isPadded(origA, origB) {
  if (hasZeros(origA) || hasZeros(origB)) {
    var alen = length(origA);
    var blen = length(origB);

    var len = alen >= blen
      ? alen
      : blen;

    return function (a) {
      return repeatStr('0', len - length(a));
    };
  }
  return false;
}

/**
 * Get the string length of `val`
 */

function length(val) {
  return val.toString().length;
}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n=r(15);t.exports=function(t){return null!=t&&"object"==typeof t&&!1===n(t)}},function(t,e,r){"use strict";
=======
 */



var isArray = __webpack_require__(17);

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n=r(80);t.exports=function(t){var e=n(t);if("number"!==e&&"string"!==e)return!1;var r=+t;return r-r+1>=0&&""!==t}},function(t,e,r){var n=r(17),i=Object.prototype.toString;t.exports=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if(!0===t||!1===t||t instanceof Boolean)return"boolean";if("string"==typeof t||t instanceof String)return"string";if("number"==typeof t||t instanceof Number)return"number";if("function"==typeof t||t instanceof Function)return"function";if(void 0!==Array.isArray&&Array.isArray(t))return"array";if(t instanceof RegExp)return"regexp";if(t instanceof Date)return"date";var e=i.call(t);return"[object RegExp]"===e?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":n(t)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object"}},function(t,e,r){"use strict";
=======
 */



var typeOf = __webpack_require__(18);

module.exports = function isNumber(num) {
  var type = typeOf(num);
  if (type !== 'number' && type !== 'string') {
    return false;
  }
  var n = +num;
  return (n - n + 1) >= 0 && num !== '';
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * randomatic <https://github.com/jonschlinkert/randomatic>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */var n=r(82),i=r(16),o=r(83);t.exports=function(t,e,r){if(void 0===t)throw new Error("randomatic expects a string or number.");var a=!1;1===arguments.length&&("string"==typeof t?e=t.length:n(t)&&(r={},e=t,t="*"));"object"===i(e)&&e.hasOwnProperty("chars")&&(t=(r=e).chars,e=t.length,a=!0);var u=r||{},c="",l="";-1!==t.indexOf("?")&&(c+=u.chars);-1!==t.indexOf("a")&&(c+=s.lower);-1!==t.indexOf("A")&&(c+=s.upper);-1!==t.indexOf("0")&&(c+=s.number);-1!==t.indexOf("!")&&(c+=s.special);-1!==t.indexOf("*")&&(c+=s.all);a&&(c+=t);if(u.exclude){var f="string"===i(u.exclude)?u.exclude:u.exclude.join("");f=f.replace(new RegExp("[\\]]+","g"),""),c=c.replace(new RegExp("["+f+"]+","g"),""),-1!==u.exclude.indexOf("]")&&(c=c.replace(new RegExp("[\\]]+","g"),""))}for(;e--;)l+=c.charAt(parseInt(o()*c.length,10));return l},t.exports.isCrypto=!!o.cryptographic;var s={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",special:"~!@#$%^&()_+-={}[];',."};s.all=s.lower+s.upper+s.number+s.special},function(t,e,r){"use strict";
=======
 */



var isNumber = __webpack_require__(84);
var typeOf = __webpack_require__(85);
var mathRandom = __webpack_require__(86);

/**
 * Expose `randomatic`
 */

module.exports = randomatic;
module.exports.isCrypto = !!mathRandom.cryptographic;

/**
 * Available mask characters
 */

var type = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  special: '~!@#$%^&()_+-={}[];\',.'
};

type.all = type.lower + type.upper + type.number + type.special;

/**
 * Generate random character sequences of a specified `length`,
 * based on the given `pattern`.
 *
 * @param {String} `pattern` The pattern to use for generating the random string.
 * @param {String} `length` The length of the string to generate.
 * @param {String} `options`
 * @return {String}
 * @api public
 */

function randomatic(pattern, length, options) {
  if (typeof pattern === 'undefined') {
    throw new Error('randomatic expects a string or number.');
  }

  var custom = false;
  if (arguments.length === 1) {
    if (typeof pattern === 'string') {
      length = pattern.length;

    } else if (isNumber(pattern)) {
      options = {};
      length = pattern;
      pattern = '*';
    }
  }

  if (typeOf(length) === 'object' && length.hasOwnProperty('chars')) {
    options = length;
    pattern = options.chars;
    length = pattern.length;
    custom = true;
  }

  var opts = options || {};
  var mask = '';
  var res = '';

  // Characters to be used
  if (pattern.indexOf('?') !== -1) mask += opts.chars;
  if (pattern.indexOf('a') !== -1) mask += type.lower;
  if (pattern.indexOf('A') !== -1) mask += type.upper;
  if (pattern.indexOf('0') !== -1) mask += type.number;
  if (pattern.indexOf('!') !== -1) mask += type.special;
  if (pattern.indexOf('*') !== -1) mask += type.all;
  if (custom) mask += pattern;

  // Characters to exclude
  if (opts.exclude) {
    var exclude = typeOf(opts.exclude) === 'string' ? opts.exclude : opts.exclude.join('');
    exclude = exclude.replace(new RegExp('[\\]]+', 'g'), '');
    mask = mask.replace(new RegExp('[' + exclude + ']+', 'g'), '');
    
    if(opts.exclude.indexOf(']') !== -1) mask = mask.replace(new RegExp('[\\]]+', 'g'), '');
  }

  while (length--) {
    res += mask.charAt(parseInt(mathRandom() * mask.length, 10));
  }
  return res;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */t.exports=function(t){var e=typeof t;if("string"===e||t instanceof String){if(!t.trim())return!1}else if("number"!==e&&!(t instanceof Number))return!1;return t-t+1>=0}},function(t,e){t.exports=function(t){var e="Uint32Array"in t,r=t.crypto||t.msCrypto,n=r&&"function"==typeof r.getRandomValues;if(!(e&&n))return Math.random;var i=new Uint32Array(1),o=Math.pow(2,32);function s(){return r.getRandomValues(i),i[0]/o}return s.cryptographic=!0,s}("undefined"!=typeof self?self:window)},function(t,e,r){"use strict";
=======
 */



module.exports = function isNumber(num) {
  var type = typeof num;

  if (type === 'string' || num instanceof String) {
    // an empty string would be coerced to true with the below logic
    if (!num.trim()) return false;
  } else if (type !== 'number' && !(num instanceof Number)) {
    return false;
  }

  return (num - num + 1) >= 0;
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = (function (global) {
  var uint32 = 'Uint32Array' in global
  var crypto = global.crypto || global.msCrypto
  var rando = crypto && typeof crypto.getRandomValues === 'function'
  var good = uint32 && rando
  if (!good) return Math.random

  var arr = new Uint32Array(1)
  var max = Math.pow(2, 32)
  function random () {
    crypto.getRandomValues(arr)
    return arr[0] / max
  }

  random.cryptographic = true
  return random
})(typeof self !== 'undefined' ? self : window)


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n,i="";t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");if(1===e)return t;if(2===e)return t+t;var r=t.length*e;if(n!==t||void 0===n)n=t,i="";else if(i.length>=r)return i.substr(0,r);for(;r>i.length&&e>1;)1&e&&(i+=t),e>>=1,t+=t;return i=(i+=t).substr(0,r)}},function(t,e,r){"use strict";
=======
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * preserve <https://github.com/jonschlinkert/preserve>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
<<<<<<< HEAD
 */e.before=function(t,e){return t.replace(e,function(t){var e=Math.random().toString().slice(2,7);return n[e]=t,"__ID"+e+"__"})},e.after=function(t){return t.replace(/__ID(.{5})__/g,function(t,e){return n[e]})};var n={}},function(t,e,r){"use strict";
=======
 */



/**
 * Replace tokens in `str` with a temporary, heuristic placeholder.
 *
 * ```js
 * tokens.before('{a\\,b}');
 * //=> '{__ID1__}'
 * ```
 *
 * @param  {String} `str`
 * @return {String} String with placeholders.
 * @api public
 */

exports.before = function before(str, re) {
  return str.replace(re, function (match) {
    var id = randomize();
    cache[id] = match;
    return '__ID' + id + '__';
  });
};

/**
 * Replace placeholders in `str` with original tokens.
 *
 * ```js
 * tokens.after('{__ID1__}');
 * //=> '{a\\,b}'
 * ```
 *
 * @param  {String} `str` String with placeholders
 * @return {String} `str` String with original tokens.
 * @api public
 */

exports.after = function after(str) {
  return str.replace(/__ID(.{5})__/g, function (_, id) {
    return cache[id];
  });
};

function randomize() {
  return Math.random().toString().slice(2, 7);
}

var cache = {};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * expand-brackets <https://github.com/jonschlinkert/expand-brackets>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
<<<<<<< HEAD
 */var n=r(87),i={alnum:"a-zA-Z0-9",alpha:"a-zA-Z",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E",punct:"-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"};function o(t){if(!n(t))return t;var e=!1;-1!==t.indexOf("[^")&&(e=!0,t=t.split("[^").join("[")),-1!==t.indexOf("[!")&&(e=!0,t=t.split("[!").join("["));for(var r=t.split("["),o=t.split("]"),s=r.length!==o.length,a=t.split(/(?::\]\[:|\[?\[:|:\]\]?)/),u=a.length,c=0,l="",f="",p=[];u--;){var h=a[c++];"^[!"!==h&&"[!"!==h||(h="",e=!0);var d=e?"^":"",g=i[h];g?p.push("["+d+g+"]"):h&&(/^\[?\w-\w\]?$/.test(h)?c===a.length?p.push("["+d+h):1===c?p.push(d+h+"]"):p.push(d+h):1===c?f+=h:c===a.length?l+=h:p.push("["+d+h+"]"))}var y=p.join("|"),m=p.length||1;return m>1&&(y="(?:"+y+")",m=1),f&&(m++,"["===f.charAt(0)&&(s?f="\\["+f.slice(1):f+="]"),y=f+y),l&&(m++,"]"===l.slice(-1)&&(l=s?l.slice(0,l.length-1)+"\\]":"["+l),y+=l),m>1&&(-1===(y=y.split("][").join("]|[")).indexOf("|")||/\(\?/.test(y)||(y="(?:"+y+")")),y=y.replace(/\[+=|=\]+/g,"\\b")}t.exports=o,o.makeRe=function(t){try{return new RegExp(o(t))}catch(t){}},o.isMatch=function(t,e){try{return o.makeRe(e).test(t)}catch(t){return!1}},o.match=function(t,e){for(var r=t.length,n=0,i=t.slice(),s=o.makeRe(e);n<r;){var a=t[n++];s.test(a)&&i.splice(n,1)}return i}},function(t,e){
=======
 */



var isPosixBracket = __webpack_require__(90);

/**
 * POSIX character classes
 */

var POSIX = {
  alnum: 'a-zA-Z0-9',
  alpha: 'a-zA-Z',
  blank: ' \\t',
  cntrl: '\\x00-\\x1F\\x7F',
  digit: '0-9',
  graph: '\\x21-\\x7E',
  lower: 'a-z',
  print: '\\x20-\\x7E',
  punct: '-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
  space: ' \\t\\r\\n\\v\\f',
  upper: 'A-Z',
  word:  'A-Za-z0-9_',
  xdigit: 'A-Fa-f0-9',
};

/**
 * Expose `brackets`
 */

module.exports = brackets;

function brackets(str) {
  if (!isPosixBracket(str)) {
    return str;
  }

  var negated = false;
  if (str.indexOf('[^') !== -1) {
    negated = true;
    str = str.split('[^').join('[');
  }
  if (str.indexOf('[!') !== -1) {
    negated = true;
    str = str.split('[!').join('[');
  }

  var a = str.split('[');
  var b = str.split(']');
  var imbalanced = a.length !== b.length;

  var parts = str.split(/(?::\]\[:|\[?\[:|:\]\]?)/);
  var len = parts.length, i = 0;
  var end = '', beg = '';
  var res = [];

  // start at the end (innermost) first
  while (len--) {
    var inner = parts[i++];
    if (inner === '^[!' || inner === '[!') {
      inner = '';
      negated = true;
    }

    var prefix = negated ? '^' : '';
    var ch = POSIX[inner];

    if (ch) {
      res.push('[' + prefix + ch + ']');
    } else if (inner) {
      if (/^\[?\w-\w\]?$/.test(inner)) {
        if (i === parts.length) {
          res.push('[' + prefix + inner);
        } else if (i === 1) {
          res.push(prefix + inner + ']');
        } else {
          res.push(prefix + inner);
        }
      } else {
        if (i === 1) {
          beg += inner;
        } else if (i === parts.length) {
          end += inner;
        } else {
          res.push('[' + prefix + inner + ']');
        }
      }
    }
  }

  var result = res.join('|');
  var rlen = res.length || 1;
  if (rlen > 1) {
    result = '(?:' + result + ')';
    rlen = 1;
  }
  if (beg) {
    rlen++;
    if (beg.charAt(0) === '[') {
      if (imbalanced) {
        beg = '\\[' + beg.slice(1);
      } else {
        beg += ']';
      }
    }
    result = beg + result;
  }
  if (end) {
    rlen++;
    if (end.slice(-1) === ']') {
      if (imbalanced) {
        end = end.slice(0, end.length - 1) + '\\]';
      } else {
        end = '[' + end;
      }
    }
    result += end;
  }

  if (rlen > 1) {
    result = result.split('][').join(']|[');
    if (result.indexOf('|') !== -1 && !/\(\?/.test(result)) {
      result = '(?:' + result + ')';
    }
  }

  result = result.replace(/\[+=|=\]+/g, '\\b');
  return result;
}

brackets.makeRe = function(pattern) {
  try {
    return new RegExp(brackets(pattern));
  } catch (err) {}
};

brackets.isMatch = function(str, pattern) {
  try {
    return brackets.makeRe(pattern).test(str);
  } catch (err) {
    return false;
  }
};

brackets.match = function(arr, pattern) {
  var len = arr.length, i = 0;
  var res = arr.slice();

  var re = brackets.makeRe(pattern);
  while (i < len) {
    var ele = arr[i++];
    if (!re.test(ele)) {
      continue;
    }
    res.splice(i, 1);
  }
  return res;
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-posix-bracket <https://github.com/jonschlinkert/is-posix-bracket>
 *
 * Copyright (c) 2015-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
<<<<<<< HEAD
t.exports=function(t){return"string"==typeof t&&/\[([:.=+])(?:[^\[\]]|)+\1\]/.test(t)}},function(t,e,r){"use strict";
=======

module.exports = function isPosixBracket(str) {
  return typeof str === 'string' && /\[([:.=+])(?:[^\[\]]|)+\1\]/.test(str);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * extglob <https://github.com/jonschlinkert/extglob>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */r(2);var n,i={};function o(t,e,r){switch(r&&(t=s(t)),e){case"!":return"(?!"+t+")[^/]"+(r?"%%%~":"*?");case"@":return"(?:"+t+")";case"+":return"(?:"+t+")+";case"*":return"(?:"+t+")"+(r?"%%":"*");case"?":return"(?:"+t+"|)";default:return t}}function s(t){return t=(t=t.split("*").join("[^/]%%%~")).split(".").join("\\.")}t.exports=function(t,e){e=e||{};var r,a={},u=0,c=(t=(t=t.replace(/!\(([^\w*()])/g,"$1!(")).replace(/([*\/])\.!\([*]\)/g,function(t,e){return s("/"===e?"\\/[^.]+":"[^.]+")}))+String(!!e.regex)+String(!!e.contains)+String(!!e.escape);if(i.hasOwnProperty(c))return i[c];n instanceof RegExp||(n=/(\\?[@?!+*$]\\?)(\(([^()]*?)\))/);e.negate=!1;for(;r=n.exec(t);){var l=r[1],f=r[3];"!"===l&&(e.negate=!0);var p="__EXTGLOB_"+u+++"__";a[p]=o(f,l,e.escape),t=t.split(r[0]).join(p)}var h=Object.keys(a),d=h.length;for(;d--;){var g=h[d];t=t.split(g).join(a[g])}var y=e.regex?function(t,e,r){var n=e?"^":"";t="(?:"+t+")"+(e?"$":""),r&&(t=n+("(?!^"+t+").*$"));return new RegExp(n+t)}(t,e.contains,e.negate):t;return y=y.split(".").join("\\."),i[c]=y}},function(t,e,r){var n=r(17),i=Object.prototype.toString;t.exports=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if(!0===t||!1===t||t instanceof Boolean)return"boolean";if("string"==typeof t||t instanceof String)return"string";if("number"==typeof t||t instanceof Number)return"number";if("function"==typeof t||t instanceof Function)return"function";if(void 0!==Array.isArray&&Array.isArray(t))return"array";if(t instanceof RegExp)return"regexp";if(t instanceof Date)return"date";var e=i.call(t);return"[object RegExp]"===e?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":n(t)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object"}},function(t,e,r){
=======
 */



/**
 * Module dependencies
 */

var isExtglob = __webpack_require__(2);
var re, cache = {};

/**
 * Expose `extglob`
 */

module.exports = extglob;

/**
 * Convert the given extglob `string` to a regex-compatible
 * string.
 *
 * ```js
 * var extglob = require('extglob');
 * extglob('!(a?(b))');
 * //=> '(?!a(?:b)?)[^/]*?'
 * ```
 *
 * @param {String} `str` The string to convert.
 * @param {Object} `options`
 *   @option {Boolean} [options] `esc` If `false` special characters will not be escaped. Defaults to `true`.
 *   @option {Boolean} [options] `regex` If `true` a regular expression is returned instead of a string.
 * @return {String}
 * @api public
 */


function extglob(str, opts) {
  opts = opts || {};
  var o = {}, i = 0;

  // fix common character reversals
  // '*!(.js)' => '*.!(js)'
  str = str.replace(/!\(([^\w*()])/g, '$1!(');

  // support file extension negation
  str = str.replace(/([*\/])\.!\([*]\)/g, function (m, ch) {
    if (ch === '/') {
      return escape('\\/[^.]+');
    }
    return escape('[^.]+');
  });

  // create a unique key for caching by
  // combining the string and options
  var key = str
    + String(!!opts.regex)
    + String(!!opts.contains)
    + String(!!opts.escape);

  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }

  if (!(re instanceof RegExp)) {
    re = regex();
  }

  opts.negate = false;
  var m;

  while (m = re.exec(str)) {
    var prefix = m[1];
    var inner = m[3];
    if (prefix === '!') {
      opts.negate = true;
    }

    var id = '__EXTGLOB_' + (i++) + '__';
    // use the prefix of the _last_ (outtermost) pattern
    o[id] = wrap(inner, prefix, opts.escape);
    str = str.split(m[0]).join(id);
  }

  var keys = Object.keys(o);
  var len = keys.length;

  // we have to loop again to allow us to convert
  // patterns in reverse order (starting with the
  // innermost/last pattern first)
  while (len--) {
    var prop = keys[len];
    str = str.split(prop).join(o[prop]);
  }

  var result = opts.regex
    ? toRegex(str, opts.contains, opts.negate)
    : str;

  result = result.split('.').join('\\.');

  // cache the result and return it
  return (cache[key] = result);
}

/**
 * Convert `string` to a regex string.
 *
 * @param  {String} `str`
 * @param  {String} `prefix` Character that determines how to wrap the string.
 * @param  {Boolean} `esc` If `false` special characters will not be escaped. Defaults to `true`.
 * @return {String}
 */

function wrap(inner, prefix, esc) {
  if (esc) inner = escape(inner);

  switch (prefix) {
    case '!':
      return '(?!' + inner + ')[^/]' + (esc ? '%%%~' : '*?');
    case '@':
      return '(?:' + inner + ')';
    case '+':
      return '(?:' + inner + ')+';
    case '*':
      return '(?:' + inner + ')' + (esc ? '%%' : '*')
    case '?':
      return '(?:' + inner + '|)';
    default:
      return inner;
  }
}

function escape(str) {
  str = str.split('*').join('[^/]%%%~');
  str = str.split('.').join('\\.');
  return str;
}

/**
 * extglob regex.
 */

function regex() {
  return /(\\?[@?!+*$]\\?)(\(([^()]*?)\))/;
}

/**
 * Negation regex
 */

function negate(str) {
  return '(?!^' + str + ').*$';
}

/**
 * Create the regex to do the matching. If
 * the leading character in the `pattern` is `!`
 * a negation regex is returned.
 *
 * @param {String} `pattern`
 * @param {Boolean} `contains` Allow loose matching.
 * @param {Boolean} `isNegated` True if the pattern is a negation pattern.
 */

function toRegex(pattern, contains, isNegated) {
  var prefix = contains ? '^' : '';
  var after = contains ? '$' : '';
  pattern = ('(?:' + pattern + ')' + after);
  if (isNegated) {
    pattern = prefix + negate(pattern);
  }
  return new RegExp(prefix + pattern);
}


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
<<<<<<< HEAD
var n=r(91);t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");return t=t.replace(/[\\\/]+/g,"/"),!1!==e&&(t=n(t)),t}},function(t,e,r){(function(e){var r="win32"===e.platform;function n(t,e){var n=t[e];return e>0&&("/"===n||r&&"\\"===n)}t.exports=function(t){var e=t.length-1;if(e<2)return t;for(;n(t,e);)e--;return t.substr(0,e+1)}}).call(this,r(5))},function(t,e,r){"use strict";
=======

var removeTrailingSeparator = __webpack_require__(93);

module.exports = function normalizePath(str, stripTrailing) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  str = str.replace(/[\\\/]+/g, '/');
  if (stripTrailing !== false) {
    str = removeTrailingSeparator(str);
  }
  return str;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var isWin = process.platform === 'win32';

module.exports = function (str) {
	var i = str.length - 1;
	if (i < 2) {
		return str;
	}
	while (isSeparator(str, i)) {
		i--;
	}
	return str.substr(0, i + 1);
};

function isSeparator(str, i) {
	var char = str[i];
	return i > 0 && (char === '/' || (isWin && char === '\\'));
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * object.omit <https://github.com/jonschlinkert/object.omit>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n=r(93),i=r(19);t.exports=function(t,e){if(!n(t))return{};var r,o=(e=[].concat.apply([],[].slice.call(arguments,1)))[e.length-1],s={};"function"==typeof o&&(r=e.pop());var a="function"==typeof r;return e.length||a?(i(t,function(n,i){-1===e.indexOf(i)&&(a?r(n,i,t)&&(s[i]=n):s[i]=n)}),s):t}},function(t,e,r){"use strict";
=======
 */



var isObject = __webpack_require__(95);
var forOwn = __webpack_require__(20);

module.exports = function omit(obj, keys) {
  if (!isObject(obj)) return {};

  keys = [].concat.apply([], [].slice.call(arguments, 1));
  var last = keys[keys.length - 1];
  var res = {}, fn;

  if (typeof last === 'function') {
    fn = keys.pop();
  }

  var isFunction = typeof fn === 'function';
  if (!keys.length && !isFunction) {
    return obj;
  }

  forOwn(obj, function(value, key) {
    if (keys.indexOf(key) === -1) {

      if (!isFunction) {
        res[key] = value;
      } else if (fn(value, key, obj)) {
        res[key] = value;
      }
    }
  });
  return res;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */t.exports=function(t){return null!=t&&("object"==typeof t||"function"==typeof t)}},function(t,e,r){"use strict";
=======
 */



module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */t.exports=function(t,e,r){for(var n in t)if(!1===e.call(r,t[n],n,t))break}},function(t,e,r){"use strict";
=======
 */



module.exports = function forIn(obj, fn, thisArg) {
  for (var key in obj) {
    if (fn.call(thisArg, obj[key], key, obj) === false) {
      break;
    }
  }
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * parse-glob <https://github.com/jonschlinkert/parse-glob>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n=r(3),i=r(96),o=r(2),s=r(98),a=t.exports.cache={};function u(t,e,r){return t&&-1!==e.indexOf(r)}function c(t){return t=(t=t.split("__SLASH__").join("/")).split("__DOT__").join(".")}t.exports=function(t){if(a.hasOwnProperty(t))return a[t];var e={};e.orig=t,e.is={},t=t.replace(/\{([^{}]*?)}|\(([^()]*?)\)|\[([^\[\]]*?)\]/g,function(t,e,r,n){var i=e||r||n;return i?t.split(i).join(i.split("/").join("__SLASH__").split(".").join("__DOT__")):t});var r=i(t);e.is.glob=r.isGlob,e.glob=r.glob,e.base=r.base;var l=/([^\/]*)$/.exec(t);e.path={},e.path.dirname="",e.path.basename=l[1]||"",e.path.dirname=t.split(e.path.basename).join("")||"";var f=(e.path.basename||"").split(".")||"";e.path.filename=f[0]||"",e.path.extname=f.slice(1).join(".")||"",e.path.ext="",n(e.path.dirname)&&!e.path.basename&&(/\/$/.test(e.glob)||(e.path.basename=e.glob),e.path.dirname=e.base),-1!==t.indexOf("/")||e.is.globstar||(e.path.dirname="",e.path.basename=e.orig);var p=e.path.basename.indexOf(".");if(-1!==p&&(e.path.filename=e.path.basename.slice(0,p),e.path.extname=e.path.basename.slice(p)),"."===e.path.extname.charAt(0)){var h=e.path.extname.split(".");e.path.ext=h[h.length-1]}e.glob=c(e.glob),e.path.dirname=c(e.path.dirname),e.path.basename=c(e.path.basename),e.path.filename=c(e.path.filename),e.path.extname=c(e.path.extname);var d=t&&e.is.glob;return e.is.negated=t&&"!"===t.charAt(0),e.is.extglob=t&&o(t),e.is.braces=u(d,t,"{"),e.is.brackets=u(d,t,"[:"),e.is.globstar=u(d,t,"**"),e.is.dotfile=s(e.path.basename)||s(e.path.filename),e.is.dotdir=function(t){if(-1!==t.indexOf("/."))return!0;if("."===t.charAt(0)&&"/"!==t.charAt(1))return!0;return!1}(e.path.dirname),a[t]=e}},function(t,e,r){"use strict";
=======
 */



var isGlob = __webpack_require__(3);
var findBase = __webpack_require__(98);
var extglob = __webpack_require__(2);
var dotfile = __webpack_require__(100);

/**
 * Expose `cache`
 */

var cache = module.exports.cache = {};

/**
 * Parse a glob pattern into tokens.
 *
 * When no paths or '**' are in the glob, we use a
 * different strategy for parsing the filename, since
 * file names can contain braces and other difficult
 * patterns. such as:
 *
 *  - `*.{a,b}`
 *  - `(**|*.js)`
 */

module.exports = function parseGlob(glob) {
  if (cache.hasOwnProperty(glob)) {
    return cache[glob];
  }

  var tok = {};
  tok.orig = glob;
  tok.is = {};

  // unescape dots and slashes in braces/brackets
  glob = escape(glob);

  var parsed = findBase(glob);
  tok.is.glob = parsed.isGlob;

  tok.glob = parsed.glob;
  tok.base = parsed.base;
  var segs = /([^\/]*)$/.exec(glob);

  tok.path = {};
  tok.path.dirname = '';
  tok.path.basename = segs[1] || '';
  tok.path.dirname = glob.split(tok.path.basename).join('') || '';
  var basename = (tok.path.basename || '').split('.') || '';
  tok.path.filename = basename[0] || '';
  tok.path.extname = basename.slice(1).join('.') || '';
  tok.path.ext = '';

  if (isGlob(tok.path.dirname) && !tok.path.basename) {
    if (!/\/$/.test(tok.glob)) {
      tok.path.basename = tok.glob;
    }
    tok.path.dirname = tok.base;
  }

  if (glob.indexOf('/') === -1 && !tok.is.globstar) {
    tok.path.dirname = '';
    tok.path.basename = tok.orig;
  }

  var dot = tok.path.basename.indexOf('.');
  if (dot !== -1) {
    tok.path.filename = tok.path.basename.slice(0, dot);
    tok.path.extname = tok.path.basename.slice(dot);
  }

  if (tok.path.extname.charAt(0) === '.') {
    var exts = tok.path.extname.split('.');
    tok.path.ext = exts[exts.length - 1];
  }

  // unescape dots and slashes in braces/brackets
  tok.glob = unescape(tok.glob);
  tok.path.dirname = unescape(tok.path.dirname);
  tok.path.basename = unescape(tok.path.basename);
  tok.path.filename = unescape(tok.path.filename);
  tok.path.extname = unescape(tok.path.extname);

  // Booleans
  var is = (glob && tok.is.glob);
  tok.is.negated  = glob && glob.charAt(0) === '!';
  tok.is.extglob  = glob && extglob(glob);
  tok.is.braces   = has(is, glob, '{');
  tok.is.brackets = has(is, glob, '[:');
  tok.is.globstar = has(is, glob, '**');
  tok.is.dotfile  = dotfile(tok.path.basename) || dotfile(tok.path.filename);
  tok.is.dotdir   = dotdir(tok.path.dirname);
  return (cache[glob] = tok);
}

/**
 * Returns true if the glob matches dot-directories.
 *
 * @param  {Object} `tok` The tokens object
 * @param  {Object} `path` The path object
 * @return {Object}
 */

function dotdir(base) {
  if (base.indexOf('/.') !== -1) {
    return true;
  }
  if (base.charAt(0) === '.' && base.charAt(1) !== '/') {
    return true;
  }
  return false;
}

/**
 * Returns true if the pattern has the given `ch`aracter(s)
 *
 * @param  {Object} `glob` The glob pattern.
 * @param  {Object} `ch` The character to test for
 * @return {Object}
 */

function has(is, glob, ch) {
  return is && glob.indexOf(ch) !== -1;
}

/**
 * Escape/unescape utils
 */

function escape(str) {
  var re = /\{([^{}]*?)}|\(([^()]*?)\)|\[([^\[\]]*?)\]/g;
  return str.replace(re, function (outter, braces, parens, brackets) {
    var inner = braces || parens || brackets;
    if (!inner) { return outter; }
    return outter.split(inner).join(esc(inner));
  });
}

function esc(str) {
  str = str.split('/').join('__SLASH__');
  str = str.split('.').join('__DOT__');
  return str;
}

function unescape(str) {
  str = str.split('__SLASH__').join('/');
  str = str.split('__DOT__').join('.');
  return str;
}


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * glob-base <https://github.com/jonschlinkert/glob-base>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n=r(6),i=r(97),o=r(3);t.exports=function(t){if("string"!=typeof t)throw new TypeError("glob-base expects a string.");var e,r={};return r.base=i(t),r.isGlob=o(t),"."!==r.base?(r.glob=t.substr(r.base.length),"/"===r.glob.charAt(0)&&(r.glob=r.glob.substr(1))):r.glob=t,r.isGlob||(r.base="/"===(e=t).slice(-1)?e:n.dirname(e),r.glob="."!==r.base?t.substr(r.base.length):t),"./"===r.glob.substr(0,2)&&(r.glob=r.glob.substr(2)),"/"===r.glob.charAt(0)&&(r.glob=r.glob.substr(1)),r}},function(t,e,r){"use strict";var n=r(6),i=r(3);t.exports=function(t){t+="a";do{t=n.dirname(t)}while(i(t));return t}},function(t,e){
=======
 */



var path = __webpack_require__(6);
var parent = __webpack_require__(99);
var isGlob = __webpack_require__(3);

module.exports = function globBase(pattern) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob-base expects a string.');
  }

  var res = {};
  res.base = parent(pattern);
  res.isGlob = isGlob(pattern);

  if (res.base !== '.') {
    res.glob = pattern.substr(res.base.length);
    if (res.glob.charAt(0) === '/') {
      res.glob = res.glob.substr(1);
    }
  } else {
    res.glob = pattern;
  }

  if (!res.isGlob) {
    res.base = dirname(pattern);
    res.glob = res.base !== '.'
      ? pattern.substr(res.base.length)
      : pattern;
  }

  if (res.glob.substr(0, 2) === './') {
    res.glob = res.glob.substr(2);
  }
  if (res.glob.charAt(0) === '/') {
    res.glob = res.glob.substr(1);
  }
  return res;
};

function dirname(glob) {
  if (glob.slice(-1) === '/') return glob;
  return path.dirname(glob);
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(6);
var isglob = __webpack_require__(3);

module.exports = function globParent(str) {
	str += 'a'; // preserves full path in case of trailing path separator
	do {str = path.dirname(str)} while (isglob(str));
	return str;
};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-dotfile <https://github.com/jonschlinkert/is-dotfile>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
<<<<<<< HEAD
t.exports=function(t){if(46===t.charCodeAt(0)&&-1===t.indexOf("/",1))return!0;var e=t.lastIndexOf("/");return-1!==e&&46===t.charCodeAt(e+1)}},function(t,e,r){"use strict";
=======

module.exports = function(str) {
  if (str.charCodeAt(0) === 46 /* . */ && str.indexOf('/', 1) === -1) {
    return true;
  }
  var slash = str.lastIndexOf('/');
  return slash !== -1 ? str.charCodeAt(slash + 1) === 46  /* . */ : false;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * regex-cache <https://github.com/jonschlinkert/regex-cache>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
<<<<<<< HEAD
 */var n=r(100),i={},o={};t.exports=function(t,e,r){var s,a,u="_default_";if(!e&&!r)return"function"!=typeof t?t:i[u]||(i[u]=t(e));if("string"==typeof e){if(!r)return i[e]||(i[e]=t(e));u=e}else r=e;if((a=o[u])&&n(a.opts,r))return a.regex;return function(t,e,r){o[t]={regex:r,opts:e}}(u,r,s=t(e,r)),s},t.exports.cache=o,t.exports.basic=i},function(t,e,r){"use strict";
=======
 */



var equal = __webpack_require__(102);
var basic = {};
var cache = {};

/**
 * Expose `regexCache`
 */

module.exports = regexCache;

/**
 * Memoize the results of a call to the new RegExp constructor.
 *
 * @param  {Function} fn [description]
 * @param  {String} str [description]
 * @param  {Options} options [description]
 * @param  {Boolean} nocompare [description]
 * @return {RegExp}
 */

function regexCache(fn, str, opts) {
  var key = '_default_', regex, cached;

  if (!str && !opts) {
    if (typeof fn !== 'function') {
      return fn;
    }
    return basic[key] || (basic[key] = fn(str));
  }

  var isString = typeof str === 'string';
  if (isString) {
    if (!opts) {
      return basic[str] || (basic[str] = fn(str));
    }
    key = str;
  } else {
    opts = str;
  }

  cached = cache[key];
  if (cached && equal(cached.opts, opts)) {
    return cached.regex;
  }

  memo(key, opts, (regex = fn(str, opts)));
  return regex;
}

function memo(key, opts, regex) {
  cache[key] = {regex: regex, opts: opts};
}

/**
 * Expose `cache`
 */

module.exports.cache = cache;
module.exports.basic = basic;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */var n=r(101);t.exports=function(t,e){if(!t&&!e)return!0;if(!t&&e||t&&!e)return!1;var r,i=0,o=0;for(r in e)if(o++,!n(e[r])||!t.hasOwnProperty(r)||t[r]!==e[r])return!1;for(r in t)i++;return i===o}},function(t,e,r){"use strict";
=======
 */



var isPrimitive = __webpack_require__(103);

module.exports = function isEqual(a, b) {
  if (!a && !b) { return true; }
  if (!a && b || a && !b) { return false; }

  var numKeysA = 0, numKeysB = 0, key;
  for (key in b) {
    numKeysB++;
    if (!isPrimitive(b[key]) || !a.hasOwnProperty(key) || (a[key] !== b[key])) {
      return false;
    }
  }
  for (key in a) {
    numKeysA++;
  }
  return numKeysA === numKeysB;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */t.exports=function(t){return null==t||"function"!=typeof t&&"object"!=typeof t}},function(t,e,r){"use strict";var n=r(103),i=r(4),o=t.exports=function t(e,r){if(!(this instanceof t))return new t(e,r);this.options=r||{},this.pattern=e,this.history=[],this.tokens={},this.init(e)};o.prototype.init=function(t){this.orig=t,this.negated=this.isNegated(),this.options.track=this.options.track||!1,this.options.makeRe=!0},o.prototype.track=function(t){this.options.track&&this.history.push({msg:t,pattern:this.pattern})},o.prototype.isNegated=function(){return 33===this.pattern.charCodeAt(0)&&(this.pattern=this.pattern.slice(1),!0)},o.prototype.braces=function(){if(!0!==this.options.nobraces&&!0!==this.options.nobrace){var t=this.pattern.match(/[\{\(\[]/g),e=this.pattern.match(/[\}\)\]]/g);t&&e&&t.length!==e.length&&(this.options.makeRe=!1);var r=i.braces(this.pattern,this.options);this.pattern=r.join("|")}},o.prototype.brackets=function(){!0!==this.options.nobrackets&&(this.pattern=i.brackets(this.pattern))},o.prototype.extglob=function(){!0!==this.options.noextglob&&i.isExtglob(this.pattern)&&(this.pattern=i.extglob(this.pattern,{escape:!0}))},o.prototype.parse=function(t){return this.tokens=i.parseGlob(t||this.pattern,!0),this.tokens},o.prototype._replace=function(t,e,r){this.track('before (find): "'+t+'" (replace with): "'+e+'"'),r&&(e=e.split("?").join("%~").split("*").join("%%")),this.pattern=t&&e&&"string"==typeof t?this.pattern.split(t).join(e):this.pattern.replace(t,e),this.track("after")},o.prototype.escape=function(t){this.track("before escape: ");this.pattern=t.replace(/["\\](['"]?[^"'\\]['"]?)/g,function(t,e){var r=n.ESC,i=r&&r[e];return i||(/[a-z]/i.test(t)?t.split("\\").join(""):t)}),this.track("after escape: ")},o.prototype.unescape=function(t){this.pattern=t.replace(/__([A-Z]+)_([A-Z]+)__/g,function(t,e){return n[e][t]}),this.pattern=function(t){return t=(t=t.split("%~").join("?")).split("%%").join("*")}(this.pattern)}},function(t,e,r){"use strict";var n,i,o={};function s(t,e){return Object.keys(t).reduce(function(r,n){var i=e?e+n:n;return r[t[n]]=i,r},{})}o.escapeRegex={"?":/\?/g,"@":/\@/g,"!":/\!/g,"+":/\+/g,"*":/\*/g,"(":/\(/g,")":/\)/g,"[":/\[/g,"]":/\]/g},o.ESC={"?":"__UNESC_QMRK__","@":"__UNESC_AMPE__","!":"__UNESC_EXCL__","+":"__UNESC_PLUS__","*":"__UNESC_STAR__",",":"__UNESC_COMMA__","(":"__UNESC_LTPAREN__",")":"__UNESC_RTPAREN__","[":"__UNESC_LTBRACK__","]":"__UNESC_RTBRACK__"},o.UNESC=n||(n=s(o.ESC,"\\")),o.ESC_TEMP={"?":"__TEMP_QMRK__","@":"__TEMP_AMPE__","!":"__TEMP_EXCL__","*":"__TEMP_STAR__","+":"__TEMP_PLUS__",",":"__TEMP_COMMA__","(":"__TEMP_LTPAREN__",")":"__TEMP_RTPAREN__","[":"__TEMP_LTBRACK__","]":"__TEMP_RTBRACK__"},o.TEMP=i||(i=s(o.ESC_TEMP)),t.exports=o},function(t,e,r){"use strict";
=======
 */



// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chars = __webpack_require__(105);
var utils = __webpack_require__(4);

/**
 * Expose `Glob`
 */

var Glob = module.exports = function Glob(pattern, options) {
  if (!(this instanceof Glob)) {
    return new Glob(pattern, options);
  }
  this.options = options || {};
  this.pattern = pattern;
  this.history = [];
  this.tokens = {};
  this.init(pattern);
};

/**
 * Initialize defaults
 */

Glob.prototype.init = function(pattern) {
  this.orig = pattern;
  this.negated = this.isNegated();
  this.options.track = this.options.track || false;
  this.options.makeRe = true;
};

/**
 * Push a change into `glob.history`. Useful
 * for debugging.
 */

Glob.prototype.track = function(msg) {
  if (this.options.track) {
    this.history.push({msg: msg, pattern: this.pattern});
  }
};

/**
 * Return true if `glob.pattern` was negated
 * with `!`, also remove the `!` from the pattern.
 *
 * @return {Boolean}
 */

Glob.prototype.isNegated = function() {
  if (this.pattern.charCodeAt(0) === 33 /* '!' */) {
    this.pattern = this.pattern.slice(1);
    return true;
  }
  return false;
};

/**
 * Expand braces in the given glob pattern.
 *
 * We only need to use the [braces] lib when
 * patterns are nested.
 */

Glob.prototype.braces = function() {
  if (this.options.nobraces !== true && this.options.nobrace !== true) {
    // naive/fast check for imbalanced characters
    var a = this.pattern.match(/[\{\(\[]/g);
    var b = this.pattern.match(/[\}\)\]]/g);

    // if imbalanced, don't optimize the pattern
    if (a && b && (a.length !== b.length)) {
      this.options.makeRe = false;
    }

    // expand brace patterns and join the resulting array
    var expanded = utils.braces(this.pattern, this.options);
    this.pattern = expanded.join('|');
  }
};

/**
 * Expand bracket expressions in `glob.pattern`
 */

Glob.prototype.brackets = function() {
  if (this.options.nobrackets !== true) {
    this.pattern = utils.brackets(this.pattern);
  }
};

/**
 * Expand bracket expressions in `glob.pattern`
 */

Glob.prototype.extglob = function() {
  if (this.options.noextglob === true) return;

  if (utils.isExtglob(this.pattern)) {
    this.pattern = utils.extglob(this.pattern, {escape: true});
  }
};

/**
 * Parse the given pattern
 */

Glob.prototype.parse = function(pattern) {
  this.tokens = utils.parseGlob(pattern || this.pattern, true);
  return this.tokens;
};

/**
 * Replace `a` with `b`. Also tracks the change before and
 * after each replacement. This is disabled by default, but
 * can be enabled by setting `options.track` to true.
 *
 * Also, when the pattern is a string, `.split()` is used,
 * because it's much faster than replace.
 *
 * @param  {RegExp|String} `a`
 * @param  {String} `b`
 * @param  {Boolean} `escape` When `true`, escapes `*` and `?` in the replacement.
 * @return {String}
 */

Glob.prototype._replace = function(a, b, escape) {
  this.track('before (find): "' + a + '" (replace with): "' + b + '"');
  if (escape) b = esc(b);
  if (a && b && typeof a === 'string') {
    this.pattern = this.pattern.split(a).join(b);
  } else {
    this.pattern = this.pattern.replace(a, b);
  }
  this.track('after');
};

/**
 * Escape special characters in the given string.
 *
 * @param  {String} `str` Glob pattern
 * @return {String}
 */

Glob.prototype.escape = function(str) {
  this.track('before escape: ');
  var re = /["\\](['"]?[^"'\\]['"]?)/g;

  this.pattern = str.replace(re, function($0, $1) {
    var o = chars.ESC;
    var ch = o && o[$1];
    if (ch) {
      return ch;
    }
    if (/[a-z]/i.test($0)) {
      return $0.split('\\').join('');
    }
    return $0;
  });

  this.track('after escape: ');
};

/**
 * Unescape special characters in the given string.
 *
 * @param  {String} `str`
 * @return {String}
 */

Glob.prototype.unescape = function(str) {
  var re = /__([A-Z]+)_([A-Z]+)__/g;
  this.pattern = str.replace(re, function($0, $1) {
    return chars[$1][$0];
  });
  this.pattern = unesc(this.pattern);
};

/**
 * Escape/unescape utils
 */

function esc(str) {
  str = str.split('?').join('%~');
  str = str.split('*').join('%%');
  return str;
}

function unesc(str) {
  str = str.split('%~').join('?');
  str = str.split('%%').join('*');
  return str;
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chars = {}, unesc, temp;

function reverse(object, prepender) {
  return Object.keys(object).reduce(function(reversed, key) {
    var newKey = prepender ? prepender + key : key; // Optionally prepend a string to key.
    reversed[object[key]] = newKey; // Swap key and value.
    return reversed; // Return the result.
  }, {});
}

/**
 * Regex for common characters
 */

chars.escapeRegex = {
  '?': /\?/g,
  '@': /\@/g,
  '!': /\!/g,
  '+': /\+/g,
  '*': /\*/g,
  '(': /\(/g,
  ')': /\)/g,
  '[': /\[/g,
  ']': /\]/g
};

/**
 * Escape characters
 */

chars.ESC = {
  '?': '__UNESC_QMRK__',
  '@': '__UNESC_AMPE__',
  '!': '__UNESC_EXCL__',
  '+': '__UNESC_PLUS__',
  '*': '__UNESC_STAR__',
  ',': '__UNESC_COMMA__',
  '(': '__UNESC_LTPAREN__',
  ')': '__UNESC_RTPAREN__',
  '[': '__UNESC_LTBRACK__',
  ']': '__UNESC_RTBRACK__'
};

/**
 * Unescape characters
 */

chars.UNESC = unesc || (unesc = reverse(chars.ESC, '\\'));

chars.ESC_TEMP = {
  '?': '__TEMP_QMRK__',
  '@': '__TEMP_AMPE__',
  '!': '__TEMP_EXCL__',
  '*': '__TEMP_STAR__',
  '+': '__TEMP_PLUS__',
  ',': '__TEMP_COMMA__',
  '(': '__TEMP_LTPAREN__',
  ')': '__TEMP_RTPAREN__',
  '[': '__TEMP_LTBRACK__',
  ']': '__TEMP_RTBRACK__'
};

chars.TEMP = temp || (temp = reverse(chars.ESC_TEMP));

module.exports = chars;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * array-every <https://github.com/jonschlinkert/array-every>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
<<<<<<< HEAD
 */var n=r(105);t.exports=function(t,e,r){e=n(e,r);var i=!0;if(null==t)return i;for(var o=t.length,s=0;o--;)if(!e(t[s++],s,t)){i=!1;break}return i}},function(t,e,r){"use strict";
=======
 */



var iterator = __webpack_require__(107);

module.exports = function every(arr, cb, thisArg) {
  cb = iterator(cb, thisArg);
  var res = true;

  if (arr == null) return res;
  var len = arr.length;
  var i = 0;

  while (len--) {
    if (!cb(arr[i++], i, arr)) {
      res = false;
      break;
    }
  }

  return res;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * make-iterator <https://github.com/jonschlinkert/make-iterator>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Copyright (c) 2012, 2013 moutjs team and contributors (http://moutjs.com)
 * Licensed under the MIT License
<<<<<<< HEAD
 */var n=r(19);function i(t,e){for(var r=t.length,n=-1;++n<r;)if(o(t[n],e))return!0;return!1}function o(t,e){return t&&"object"==typeof t?Array.isArray(t)&&Array.isArray(e)?function(t,e){for(var r=e.length,n=-1;++n<r;)if(!i(t,e[n]))return!1;return!0}(t,e):function(t,e){var r=!0;return n(e,function(e,n){if(!o(t[n],e))return r=!1}),r}(t,e):t===e}function s(t){return t}t.exports=function(t,e){if(null==t)return s;switch(typeof t){case"function":return void 0!==e?function(r,n,i){return t.call(e,r,n,i)}:t;case"object":return function(e){return o(e,t)};case"string":case"number":return r=t,function(t){return t[r]}}var r}},function(t,e,r){"use strict";
=======
 */



var forOwn = __webpack_require__(20);

/**
 * Convert an argument into a valid iterator.
 * Used internally on most array/object/collection methods that receives a
 * callback/iterator providing a shortcut syntax.
 */

module.exports = function makeIterator(src, thisArg) {
  if (src == null) {
    return noop;
  }

  switch (typeof src) {
    // function is the first to improve perf (most common case)
    // also avoid using `Function#call` if not needed, which boosts
    // perf a lot in some cases
    case 'function':
      return (typeof thisArg !== 'undefined') ? function (val, i, arr) {
        return src.call(thisArg, val, i, arr);
      } : src;
    case 'object':
      return function (val) {
        return deepMatches(val, src);
      };
    case 'string':
    case 'number':
      return prop(src);
    }
};

function containsMatch(array, value) {
  var len = array.length;
  var i = -1;

  while (++i < len) {
    if (deepMatches(array[i], value)) {
      return true;
    }
  }
  return false;
}

function matchArray(o, value) {
  var len = value.length;
  var i = -1;

  while (++i < len) {
    if (!containsMatch(o, value[i])) {
      return false;
    }
  }
  return true;
}

function matchObject(o, value) {
  var res = true;
  forOwn(value, function (val, key) {
    if (!deepMatches(o[key], val)) {
      // Return false to break out of forOwn early
      return (res = false);
    }
  });
  return res;
}

/**
 * Recursively compare objects
 */

function deepMatches(o, value) {
  if (o && typeof o === 'object') {
    if (Array.isArray(o) && Array.isArray(value)) {
      return matchArray(o, value);
    } else {
      return matchObject(o, value);
    }
  } else {
    return o === value;
  }
}

function prop(name) {
  return function(obj) {
    return obj[name];
  };
}

function noop(val) {
  return val;
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * array-unique <https://github.com/jonschlinkert/array-unique>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */t.exports=function(t){if(!Array.isArray(t))throw new TypeError("array-unique expects an array.");for(var e=t.length,r=-1;r++<e;)for(var n=r+1;n<t.length;++n)t[r]===t[n]&&t.splice(n--,1);return t}},function(t,e,r){"use strict";
=======
 */



module.exports = function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  var len = arr.length;
  var i = -1;

  while (i++ < len) {
    var j = i + 1;

    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * array-slice <https://github.com/jonschlinkert/array-slice>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
<<<<<<< HEAD
 */function n(t,e,r){var n=t.length>>>0;return e=null==e?r||0:e<0?Math.max(n+e,0):Math.min(e,n)}t.exports=function(t,e,r){var i=t.length>>>0,o=[];for(e=n(t,e),r=n(t,r,i);e<r;)o.push(t[e++]);return o}},function(t,e,r){"use strict";
=======
 */



module.exports = function slice(arr, start, end) {
  var len = arr.length >>> 0;
  var range = [];

  start = idx(arr, start);
  end = idx(arr, end, len);

  while (start < end) {
    range.push(arr[start++]);
  }
  return range;
};


function idx(arr, pos, end) {
  var len = arr.length >>> 0;

  if (pos == null) {
    pos = end || 0;
  } else if (pos < 0) {
    pos = Math.max(len + pos, 0);
  } else {
    pos = Math.min(pos, len);
  }

  return pos;
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
/*!
 * index-of <https://github.com/jonschlinkert/index-of>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
<<<<<<< HEAD
 */t.exports=function(t,e,r){r=r||0;var n=-1;if(null==t)return n;for(var i=t.length,o=r<0?i+r:r;i--;)if(t[o++]===e){n=o-1;break}return n}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){var e=this;try{return t.map(function(t){for(var r in t)"client"===e.source&&(t[r]=e.formatDate(t[r],e.dateFormat(r))),!e.isListFilter(r)||e.opts.templates[r]||e.$scopedSlots[r]||(t[r]=e.optionText(t[r],r));return t})}catch(e){throw console.error("vue-tables-2: non-iterable data property. Expected array, got ".concat(n(t),". Make sure that your response conforms to the expected format, or use the 'responseAdapter' option to match the currently returned format")),console.error("Data equals",t),new Error}}},function(t,e,r){"use strict";t.exports=function(t,e){var r=this.listColumnsObject[e];return void 0===r[t]?t:r[t]}},function(t,e,r){"use strict";t.exports=function(t,e,r,n){var i=this._getValue(t,e);if(-1==this.templatesKeys.indexOf(e))return void 0!==i&&this.opts.highlightMatches&&-1!==this.filterableColumns.indexOf(e)?this.highlightMatch(i,e,n):i;var o=this.opts.templates[e];return o="function"==typeof o?o.apply(this.$root,[n,t,r,e]):n(o,{attrs:{data:t,column:e,index:r}})}},function(t,e,r){"use strict";t.exports=function(t,e){var r,n=this.opts.uniqueKey;r="client"==this.source&&void 0!==t[n]?this.tableData.filter(function(e){return t[n]===e[n]})[0]:t,this.dispatch("row-click",{row:r,event:e})}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){this.limit="object"===n(t)?t.target.value:t,this.updateState("perPage",this.limit),this.dispatch("limit",parseInt(this.limit)),this.setPage(1)}},function(t,e,r){"use strict";t.exports=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this.opts.childRow||"function"==typeof this.opts.childRow)throw new Error("vue-tables-2: Child row undefined or not a component");var r=e?this.openChildRows.filter(function(t){return e.includes(t)}):this.openChildRows;return r.length?this.$children.filter(function(e){return"ChildRow"===e.$options.name&&r.includes(e.data[t.opts.uniqueKey])}):[]}},function(t,e,r){"use strict";var n,i=(n=r(1))&&n.__esModule?n:{default:n};t.exports=function(t,e){if(this.vuex){if(t.split("::").length>1)return;this.commit(t.toUpperCase().replace("-","_"),e)}this.$emit(t,e),i.default.$emit("vue-tables.".concat(t),e),this.name&&i.default.$emit("vue-tables.".concat(this.name,".").concat(t),e)}},function(t,e,r){"use strict";t.exports=function(t,e){if(e&&e.stopPropagation(),this.openChildRows.includes(t)){var r=this.openChildRows.indexOf(t);this.openChildRows.splice(r,1)}else this.openChildRows.push(t)}},function(t,e,r){"use strict";t.exports=function(t){return this.openChildRows.includes(t)?"VueTables__child-row-toggler--open":"VueTables__child-row-toggler--closed"}},function(t,e,r){"use strict";t.exports=function(t){if("function"==typeof this.opts.requestFunction)return this.opts.requestFunction.call(this,t);if("undefined"!=typeof axios)return axios.get(this.url,{params:t}).catch(function(t){this.dispatch("error",t)}.bind(this));if(void 0!==this.$http)return this.$http.get(this.url,{params:t}).then(function(t){return t.json()}.bind(this),function(t){this.dispatch("error",t)}.bind(this));if("undefined"!=typeof $)return $.getJSON(this.url,t).fail(function(t){this.dispatch("error",t)}.bind(this));throw"vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource). To use a different library you can write your own request function (see the `requestFunction` option)"}},function(t,e,r){"use strict";t.exports=function(t){return"undefined"!=typeof axios?t.data:t}},function(t,e,r){"use strict";t.exports=function(t){var e=this.orderBy.ascending;return this.currentlySorting={column:t,ascending:e},void 0===this.opts.customSorting[t]?this.defaultSort(t,e):this.opts.customSorting[t](e)}},function(t,e,r){"use strict";t.exports=function(){var t={page:1,query:this.query,orderBy:this.orderBy,perPage:this.opts.perPage,customQueries:this.customQueries};return this.storage.setItem(this.stateKey,JSON.stringify(t)),t}},function(t,e,r){"use strict";t.exports=function(t,e){if(this.opts.saveState&&this.activeState){try{var r=JSON.parse(this.storage.getItem(this.stateKey))}catch(t){r=this.initState()}r[t]=e,this.storage.setItem(this.stateKey,JSON.stringify(r))}}},function(t,e,r){"use strict";t.exports=function(t){var e=this.opts.columnsClasses;return e.hasOwnProperty(t)?e[t]:""}},function(t,e,r){"use strict";t.exports=function(t){return t?((t=t.split("__")).shift(),t.join("__").split("@@@").join(".")):t}},function(t,e,r){"use strict";t.exports=function(t){var e=this;if(this.userControlsColumns||(this.userColumnsDisplay=JSON.parse(JSON.stringify(this.allColumns)),this.userControlsColumns=!0),this.userColumnsDisplay.includes(t)){if(1===this.userColumnsDisplay.length)return;var r=this.userColumnsDisplay.indexOf(t);this.userColumnsDisplay.splice(r,1)}else this.userColumnsDisplay.push(t);this.updateState("userControlsColumns",!0),this.updateState("userColumnsDisplay",this.userColumnsDisplay),this.$nextTick(function(){e._setFiltersDOM(e.query)})}},function(t,e,r){"use strict";t.exports=function(t){var e=this.orderBy.column,r=this.orderBy.ascending;this.userMultiSorting[e]||(this.userMultiSorting[e]=[]);var n=this.userMultiSorting[e];if(e===t)!n.length||r?this.orderBy.ascending=!this.orderBy.ascending:(this.orderBy=n.shift(),this.userMultiSorting={},this.userMultiSorting[this.orderBy.column]=n);else{var i=n.filter(function(e){return e.column==t})[0];i?i.ascending?i.ascending=!i.ascending:(this.userMultiSorting[e]=n.filter(function(e){return e.column!=t}),this.userMultiSorting[e].length||(this.userMultiSorting={})):n.push({column:t,ascending:!0})}this.time=Date.now(),this.dispatch("sorted",function(t,e){var r=[JSON.parse(JSON.stringify(t))];return r=r.concat(e[t.column])}(this.orderBy,this.userMultiSorting))}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){var e;if(this.opts.filterByColumn)for(var r in t){var i=this._getColumnName(r);if(this.isDateFilter(r))if(t[r]&&"object"===n(t[r])){var o="string"==typeof t[r].start?moment(t[r].start,"YYYY-MM-DD"):t[r].start,s="string"==typeof t[r].end?moment(t[r].end,"YYYY-MM-DD"):t[r].end;this._setDatepickerText(r,o,s)}else $(this.$el).find("#VueTables__".concat(r,"-filter")).html("<span class='VueTables__filter-placeholder'>"+this.display("filterBy",{column:this.getHeading(r)})+"</span>");else(e=this.$el.querySelector("[name='".concat(i,"']")))?e.value=t[r]:-1===this.columns.indexOf(r)&&console.error("vue-tables-2: Error in setting filter value. Column '".concat(r,"' does not exist."))}else this.$el.querySelector(".VueTables__search input").value=t}},function(t,e,r){"use strict";t.exports=function(t){var e=Object.keys(this.userMultiSorting);return e.length&&this.orderBy.column!==t?!!this.userMultiSorting[e[0]].filter(function(e){return e.column==t}).length:this.orderBy.column===t}},function(t,e,r){"use strict";t.exports=function(t,e){if(this.$scopedSlots.child_row)return this.$scopedSlots.child_row({row:e});var r=this.opts.childRow;return"function"==typeof r?r.apply(this,[t,e]):t(r,{attrs:{data:e}})}},function(t,e,r){"use strict";t.exports=function(){this.displayColumnsDropdown=!this.displayColumnsDropdown}},function(t,e,r){"use strict";t.exports=function(t){return 1===this.userColumnsDisplay.length&&this.userColumnsDisplay[0]===t}},function(t,e,r){"use strict";t.exports=function(t){this.vuex||(this.setPage(t),this.dispatch("pagination",t))}},function(t,e,r){"use strict";t.exports=function(){this.orderBy.column!=this.opts.groupBy?this.setOrder(this.opts.groupBy,!0):this.setOrder(this.opts.groupBy,!this.orderBy.ascending)}},function(t,e,r){"use strict";t.exports=function(t){return void 0!==this.opts.initFilters[t]?this.opts.initFilters[t]:!(void 0===this.query[t]||!this.query[t].start)&&{start:moment(this.query[t].start,"YYYY-MM-DD HH:mm:ss"),end:moment(this.query[t].end,"YYYY-MM-DD HH:mm:ss")}}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n=this.dateFormat(t);("string"==typeof t?$(this.$el).find("#VueTables__".concat(t,"-filter")):t).text(e.format(n)+" - "+r.format(n))}},function(t,e,r){"use strict";t.exports=function(t){return!this.opts.descOrderColumns.includes(t)}},function(t,e,r){"use strict";t.exports=function(t){return this.opts.dateFormatPerColumn.hasOwnProperty(t)?this.opts.dateFormatPerColumn[t]:this.opts.dateFormat}},function(t,e,r){"use strict";t.exports=function(){var t=this;if(this.opts.columnsDropdown){var e=function(t){return t.stopPropagation()},r=function(){t.displayColumnsDropdown&&(t.displayColumnsDropdown=!1)};this.$refs.columnsdropdown.addEventListener("click",e),document.addEventListener("click",r),this.$once("hook:beforeDestroy",function(){document.removeEventListener("click",r),t.$refs.columnsdropdown.removeEventListener("click",e)})}}},function(t,e,r){"use strict";t.exports=function(t,e){if(-1===e.indexOf("."))return t[e];var r=e.split("."),n=t[r[0]];if(!n)return"";for(var i=1;i<r.length;i++)if(void 0===(n=n[r[i]]))return"";return n}},function(t,e,r){"use strict";t.exports=function(t){return"vf__"+t.split(".").join("@@@")}},function(t,e,r){"use strict";t.exports={listColumnsObject:r(142),allColumns:r(143),templatesKeys:r(144),opts:r(145),tableData:r(147),storage:r(148),filterableColumns:r(149),hasChildRow:r(150),colspan:r(151),hasGenericFilter:r(152),stateKey:function(){return"vuetables_"+(this.name?this.name:this.id)},Page:function(){return this.page}}},function(t,e,r){"use strict";t.exports=function(){var t=Object.keys(this.opts.listColumns),e={};return t.forEach(function(t){e[t]={},this.opts.listColumns[t].forEach(function(r){e[t][r.id]=r.text})}.bind(this)),e}},function(t,e,r){"use strict";t.exports=function(){var t=this,e=this.columnsDisplay;return e||this.userControlsColumns?this.userControlsColumns?this.columns.filter(function(e){return t.userColumnsDisplay.includes(e)}):this.opts.ssr?this.Columns:this.Columns.filter(function(r){if(!e[r])return!0;var n=e[r],i=n[2],o=(!n[0]||t.windowWidth>=n[0])&&(!n[1]||t.windowWidth<n[1]);return"not"==i?!o:o}):this.Columns}},function(t,e,r){"use strict";t.exports=function(){return Object.keys(this.opts.templates)}},function(t,e,r){"use strict";t.exports=function(){var t=r(146)();return this.initOptions(t,this.globalOptions,this.options)}},function(t,e,r){"use strict";t.exports=function(){return{dateColumns:[],listColumns:{},datepickerOptions:{locale:{cancelLabel:"Clear"}},datepickerPerColumnOptions:{},initialPage:1,perPage:10,perPageValues:[10,25,50,100],groupBy:!1,collapseGroups:!1,destroyEventBus:!1,sendEmptyFilters:!1,params:{},sortable:!0,filterable:!0,groupMeta:[],initFilters:{},customFilters:[],templates:{},debounce:250,dateFormat:"DD/MM/YYYY",dateFormatPerColumn:{},toMomentFormat:!1,skin:!1,columnsDisplay:{},columnsDropdown:!1,texts:{count:"Showing {from} to {to} of {count} records|{count} records|One record",first:"First",last:"Last",filter:"Filter:",filterPlaceholder:"Search query",limit:"Records:",page:"Page:",noResults:"No matching records",filterBy:"Filter by {column}",loading:"Loading...",defaultOption:"Select {column}",columns:"Columns"},sortIcon:{is:"glyphicon-sort",base:"glyphicon",up:"glyphicon-chevron-up",down:"glyphicon-chevron-down"},sortingAlgorithm:function(t,e){return t.sort(this.getSortFn(e))},customSorting:{},multiSorting:{},clientMultiSorting:!0,serverMultiSorting:!1,filterByColumn:!1,highlightMatches:!1,orderBy:!1,descOrderColumns:[],footerHeadings:!1,headings:{},headingsTooltips:{},pagination:{dropdown:!1,chunk:10,edge:!1,align:"center",nav:"fixed"},childRow:!1,childRowTogglerFirst:!0,uniqueKey:"id",requestFunction:!1,requestAdapter:function(t){return t},responseAdapter:function(t){var e=this.getResponseData(t);return{data:e.data,count:e.count}},requestKeys:{query:"query",limit:"limit",orderBy:"orderBy",ascending:"ascending",page:"page",byColumn:"byColumn"},rowClassCallback:!1,preserveState:!1,saveState:!1,storage:"local",columnsClasses:{}}}},function(t,e,r){"use strict";t.exports=function(){return this.data}},function(t,e,r){"use strict";t.exports=function(){return"undefined"==typeof localStorage?{}:"local"===this.opts.storage?localStorage:sessionStorage}},function(t,e,r){"use strict";t.exports=function(){return this.opts.filterable&&this.opts.filterable.length?this.opts.filterable:this.Columns}},function(t,e,r){"use strict";t.exports=function(){return this.opts.childRow||this.$scopedSlots.child_row}},function(t,e,r){"use strict";t.exports=function(){return this.hasChildRow?this.allColumns.length+1:this.allColumns.length}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(){return!this.opts.filterByColumn&&("boolean"==typeof this.opts.filterable&&this.opts.filterable||"object"===n(this.opts.filterable)&&this.opts.filterable.length)}},function(t,e,r){"use strict";t.exports={input:r(154),select:r(155)}},function(t,e,r){"use strict";t.exports={twoWay:!0,bind:function(t,e,r){t.addEventListener("keydown",function(t){r.context[e.value]=t.target.value})},update:function(t,e,r,n){}}},function(t,e,r){"use strict";t.exports={twoWay:!0,bind:function(t,e,r){t.addEventListener("change",function(t){console.log("SELECT CHANGE"),r.context[e.value.name]=t.target.value,e.value.cb.call(this,e.value.params)})},update:function(t,e,r,n){}}},function(t,e,r){"use strict";var n,i=(n=r(1))&&n.__esModule?n:{default:n};t.exports=function(){var t,e=this;this.opts.destroyEventBus&&(i.default.$off(),i.default.$destroy()),this.vuex&&!this.opts.preserveState&&this.$store.unregisterModule(this.name),this.opts.filterByColumn&&this.opts.dateColumns.forEach(function(r){(t=$(e.$el).find("#VueTables__"+r+"-filter").data("daterangepicker"))&&t.remove()})}},function(t,e,r){"use strict";t.exports=function(t){if(null==t)return!0;if(t.length>0)return!1;if(0===t.length)return!0;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}},function(t,e,r){"use strict";var n=s(r(159)),i=s(r(160)),o=s(r(0));function s(t){return t&&t.__esModule?t:{default:t}}t.exports=function(t){var e={state:(0,n.default)(t),mutations:(0,i.default)(t)};t.$store&&t.$store.state&&t.$store.state[t.name]&&(e.state=o.default.recursive(e.state,t.$store.state[t.name]),t.$store.unregisterModule(t.name)),t.$store.registerModule(t.name,e)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e={page:t.opts.initialPage?t.opts.initialPage:1,limit:t.opts.perPage,count:"server"==t.source?0:t.data.length,columns:t.columns,data:"client"==t.source?t.data:[],query:t.initQuery(),customQueries:t.initCustomFilters(),sortBy:!(!t.opts.orderBy||!t.opts.orderBy.column)&&t.opts.orderBy.column,ascending:!t.opts.orderBy||!t.opts.orderBy.hasOwnProperty("ascending")||t.opts.orderBy.ascending};if(void 0!==t.$store.state[t.name])return(0,i.default)(!0,t.$store.state[t.name],e);return e};var n,i=(n=r(0))&&n.__esModule?n:{default:n}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,r,n="server"==t.source?(o(e={},"".concat(t.name,"/SET_DATA"),function(e,r){var n=t.opts.responseAdapter.call(t,r);e.data=n.data,e.count=parseInt(n.count)}),o(e,"".concat(t.name,"/LOADING"),function(t,e){}),o(e,"".concat(t.name,"/LOADED"),function(t,e){}),o(e,"".concat(t.name,"/ERROR"),function(t,e){}),e):o({},"".concat(t.name,"/SET_COUNT"),function(t,e){t.count=e});return i.default.recursive(!0,(o(r={},"".concat(t.name,"/PAGINATE"),function(e,r){e.page=r,t.updateState("page",r),"server"==t.source&&t.getData(),t.commit("PAGINATION",r)}),o(r,"".concat(t.name,"/SET_FILTER"),function(e,r){e.page=1,t.updateState("page",1),e.query=r,"server"==t.source&&t.getData()}),o(r,"".concat(t.name,"/PAGINATION"),function(t,e){}),o(r,"".concat(t.name,"/SET_CUSTOM_FILTER"),function(e,r){var n=r.filter,i=r.value;e.customQueries[n]=i,e.page=1,t.updateState("page",1),t.updateState("customQueries",e.customQueries),"server"==t.source&&t.getData()}),o(r,"".concat(t.name,"/SET_STATE"),function(t,e){var r=e.page,n=e.query,i=e.customQueries,o=e.limit,s=e.orderBy;t.customQueries=i,t.query=n,t.page=r,t.limit=o,t.ascending=s.ascending,t.sortBy=s.column}),o(r,"".concat(t.name,"/SET_LIMIT"),function(e,r){e.page=1,t.updateState("page",1),e.limit=r,"server"==t.source&&t.getData()}),o(r,"".concat(t.name,"/SORT"),function(e,r){var n=r.column,i=r.ascending;e.ascending=i,e.sortBy=n,"server"==t.source&&t.getData()}),o(r,"".concat(t.name,"/SORTED"),function(t,e){}),o(r,"".concat(t.name,"/ROW_CLICK"),function(t,e){}),o(r,"".concat(t.name,"/FILTER"),function(t,e){}),o(r,"".concat(t.name,"/LIMIT"),function(t,e){}),r),n)};var n,i=(n=r(0))&&n.__esModule?n:{default:n};function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){"use strict";t.exports=function(){return{framework:"bootstrap3",table:"table table-striped table-bordered table-hover",row:"row",column:"col-md-12",label:"",input:"form-control",select:"form-control",field:"form-group",inline:"form-inline",right:"pull-right",left:"pull-left",center:"text-center",contentCenter:"",small:"",nomargin:"",groupTr:"info",button:"btn btn-secondary",dropdown:{container:"dropdown",trigger:"dropdown-toggle",menu:"dropdown-menu",content:"",item:"",caret:"caret"},pagination:{nav:"",count:"",wrapper:"",list:"pagination",item:"page-item",link:"page-link",next:"",prev:"",active:"active",disabled:"disabled"}}}},function(t,e,r){"use strict";t.exports=function(){return{framework:"bootstrap4",table:"table table-striped table-bordered table-hover",row:"row",column:"col-md-12",label:"",input:"form-control",select:"form-control",field:"form-group",inline:"form-inline",right:"float-right",left:"float-left",center:"text-center",contentCenter:"justify-content-center",nomargin:"m-0",groupTr:"table-info",small:"",button:"btn btn-secondary",dropdown:{container:"dropdown",trigger:"dropdown-toggle",menu:"dropdown-menu",content:"",item:"dropdown-item",caret:"caret"},pagination:{nav:"",count:"",wrapper:"",list:"pagination",item:"page-item",link:"page-link",next:"",prev:"",active:"active",disabled:"disabled"}}}},function(t,e,r){"use strict";t.exports=function(){return{framework:"bulma",table:"table is-bordered is-striped is-hoverable is-fullwidth",row:"columns",column:"column is-12",label:"label",input:"input",select:"select",field:"field",inline:"is-horizontal",right:"is-pulled-right",left:"is-pulled-left",center:"has-text-centered",contentCenter:"is-centered",icon:"icon",small:"is-small",nomargin:"marginless",button:"button",groupTr:"is-selected",dropdown:{container:"dropdown",trigger:"dropdown-trigger",menu:"dropdown-menu",content:"dropdown-content",item:"dropdown-item",caret:"fa fa-angle-down"},pagination:{nav:"",count:"",wrapper:"pagination",list:"pagination-list",item:"",link:"pagination-link",next:"",prev:"",active:"is-current",disabled:""}}}},function(t,e,r){"use strict";var n,i=(n=r(0))&&n.__esModule?n:{default:n};t.exports=function(t,e,n,o){var s="VueTables__search_"+this.id,a="VueTables__dropdown-pagination_"+this.id,u="VueTables__limit_"+this.id,c=r(24).call(this,t),l=this.hasGenericFilter?t("div",{class:"VueTables__search-field"},[t("label",{attrs:{for:s},class:n.label},[this.display("filter")]),e.normalFilter(n,s)]):"",f=c.length>1?t("div",{class:"VueTables__limit-field"},[t("label",{class:n.label,attrs:{for:u}},[this.display("limit")]),e.perPage(c,n.select,u)]):"",p=this.opts.pagination&&this.opts.pagination.dropdown?t("div",{class:"VueTables__pagination-wrapper"},[t("div",{class:"".concat(n.field," ").concat(n.inline," ").concat(n.right," VueTables__dropdown-pagination"),directives:[{name:"show",value:this.totalPages>1}]},[t("label",{attrs:{for:a}},[this.display("page")]),e.dropdownPagination(n.select,a)])]):"",h=this.opts.columnsDropdown?t("div",{class:"VueTables__columns-dropdown-wrapper"},[e.columnsDropdown(n)]):"",d=this.opts.footerHeadings?t("tfoot",[t("tr",[e.headings(n.right)])]):"",g=l||f||p||h||o.beforeFilter||o.afterFilter||o.beforeLimit||o.afterLimit,y=t("div",{class:n.row,directives:[{name:"show",value:g}]},[t("div",{class:n.column},[t("div",{class:"".concat(n.field," ").concat(n.inline," ").concat(n.left," VueTables__search")},[o.beforeFilter,l,o.afterFilter]),t("div",{class:"".concat(n.field," ").concat(n.inline," ").concat(n.right," VueTables__limit")},[o.beforeLimit,f,o.afterLimit]),p,h])]);return t("div",{class:"VueTables VueTables--"+this.source},[y,o.beforeTable,t("div",{class:"table-responsive"},[t("table",{class:"VueTables__table ".concat(this.opts.skin?this.opts.skin:n.table)},[t("thead",[t("tr",[e.headings(n.right)]),o.beforeFilters,e.columnFilters(n),o.afterFilters]),d,o.beforeBody,t("tbody",[o.prependBody,e.rows(n),o.appendBody]),o.afterBody])]),o.afterTable,e.pagination((0,i.default)(n.pagination,{wrapper:"".concat(n.row," ").concat(n.column," ").concat(n.contentCenter),nav:n.center,count:"".concat(n.center," ").concat(n.column)})),e.dropdownPaginationCount()])}},function(t,e,r){"use strict";var n,i=(n=r(0))&&n.__esModule?n:{default:n};t.exports=function(t,e,n,o){var s="VueTables__search_"+this.id,a="VueTables__limit_"+this.id,u=r(24).call(this,t),c=this.hasGenericFilter?t("div",{class:"VueTables__search-field"},[t("label",{attrs:{for:s},class:n.label},[this.display("filter")]),e.normalFilter(n,s)]):"",l=u.length>1?t("div",{class:"VueTables__limit-field"},[t("label",{class:n.label,attrs:{for:a}},[this.display("limit")]),e.perPage(u,n.select,a)]):"",f=this.opts.columnsDropdown?t("div",{class:"VueTables__columns-dropdown-wrapper"},[e.columnsDropdown(n)]):"",p=c||l||f||o.beforeFilter||o.afterFilter||o.beforeLimit||o.afterLimit,h=t("div",{class:n.row,directives:[{name:"show",value:p}]},[t("div",{class:n.column},[t("div",{class:"".concat(n.field," ").concat(n.inline," ").concat(n.left," VueTables__search")},[o.beforeFilter,c,o.afterFilter]),t("div",{class:"".concat(n.field," ").concat(n.inline," ").concat(n.right," VueTables__limit")},[o.beforeLimit,l,o.afterLimit]),f])]);return t("div",{class:"VueTables VueTables--"+this.source},[h,o.beforeTable,t("div",{class:"table-responsive"},[t("table",{class:"VueTables__table ".concat(this.opts.skin?this.opts.skin:n.table)},[t("thead",[t("tr",[e.headings(n.right)]),o.beforeFilters,e.columnFilters(n),o.afterFilters]),t("tfoot",[t("tr",[t("td",{attrs:{colspan:this.colspan}},[e.pagination((0,i.default)(n.pagination,{list:"".concat(n.pagination.list," ").concat(n.right," ").concat(n.nomargin),count:"".concat(n.left)}))])])]),o.beforeBody,t("tbody",[o.prependBody,e.rows(n),o.appendBody]),o.afterBody])]),o.afterTable])}},function(t,e,r){"use strict";t.exports=function(t){var e=this;return function(r){var n;if("client"===e.source?(n=e.filteredData).length||"client"!==e.source||1===e.page||e.setPage(e.totalPages?e.totalPages:1):n=e.tableData,0===e.count){e.allColumns.length;return e.hasChildRow&&0,t("tr",{class:"VueTables__no-results"},[t("td",{class:"text-center",attrs:{colspan:e.colspan}},[e.display(e.loading?"loading":"noResults")])])}var i,o,s,a,u,c,l=[],f=e.opts.uniqueKey,p=(e.Page-1)*e.limit;return n.map(function(n,h){if(e.opts.groupBy&&"client"===e.source&&n[e.opts.groupBy]!==s&&(a=e.getGroupSlot(n[e.opts.groupBy]),u=n[e.opts.groupBy],c=e.opts.toggleGroups?t("button",{class:r.button,on:{click:e.toggleGroup.bind(e,u)}},[u,t("span",{class:e.groupToggleIcon(u)})]):u,l.push(t("tr",{class:r.groupTr,on:{click:e._toggleGroupDirection.bind(e)}},[t("td",{attrs:{colspan:e.colspan}},[c,a])])),s=n[e.opts.groupBy]),!e.opts.toggleGroups||!e.collapsedGroups.includes(s)){if(h=p+h+1,i=[],e.hasChildRow){var d=t("td",[t("span",{on:{click:e.toggleChildRow.bind(e,n[f])},class:"VueTables__child-row-toggler "+e.childRowTogglerClass(n[f])})]);e.opts.childRowTogglerFirst&&i.push(d)}e.allColumns.map(function(r){var o=e.$scopedSlots&&e.$scopedSlots[r];i.push(t("td",{class:e.columnClass(r)},[o?o({row:n,column:r,index:h}):e.render(n,r,h,t)]))}),e.hasChildRow&&!e.opts.childRowTogglerFirst&&i.push(d),o=e.opts.rowClassCallback?e.opts.rowClassCallback(n):"",l.push(t("tr",{class:o,on:{click:e.rowWasClicked.bind(e,n),dblclick:e.rowWasClicked.bind(e,n)}},[i," "])),l.push(e.hasChildRow&&e.openChildRows.includes(n[f])?t("tr",{class:"VueTables__child-row"},[t("td",{attrs:{colspan:e.colspan}},[e._getChildRowTemplate(t,n)])]):t())}}),l}}},function(t,e,r){"use strict";var n=r(7);t.exports=function(t){var e=this;return function(r,i){var o="client"==e.source?e.search.bind(e,e.data):e.serverSearch.bind(e);return t("input",{class:"".concat(r.input," ").concat(r.small),attrs:{type:"text",placeholder:e.display("filterPlaceholder"),id:i},on:{keyup:e.opts.debounce?n(o,e.opts.debounce):o}})}}},function(t,e,r){"use strict";r(7);t.exports=function(t){var e=this;return function(r,n){for(var i=[],o=1;o<=e.totalPages;o++){var s=e.page==o;i.push(t("option",{domProps:{value:o,selected:s}},[o]))}return t("select",{class:"".concat(r," dropdown-pagination"),directives:[{name:"show",value:e.totalPages>1}],attrs:{name:"page",id:n},ref:"page",domProps:{value:e.page},on:{change:e.setPage.bind(e,null,!1)}},[i])}}},function(t,e,r){"use strict";t.exports=function(t){var e=this;return function(){if(e.count>0&&e.opts.pagination.dropdown){var r=parseInt(e.limit),n=(e.Page-1)*r+1,i=e.Page==e.totalPages?e.count:n+r-1,o=e.opts.texts.count.split("|"),s=o[Math.min(1==e.count?2:1==e.totalPages?1:0,o.length-1)].replace("{count}",e.count).replace("{from}",n).replace("{to}",i);return t("div",{class:"VuePagination"},[t("p",{class:"VuePagination__count"},[s])])}return""}}},function(t,e,r){"use strict";var n;(n=r(0))&&n.__esModule;t.exports=function(t){var e=this;return function(n){if(!e.opts.filterByColumn||!e.opts.filterable)return"";var i=r(171).call(e,t,n.input),o=r(172).call(e,t),s=r(173).call(e,t,n.select),a=[];return e.hasChildRow&&e.opts.childRowTogglerFirst&&a.push(t("th")),e.allColumns.map(function(r){var n,u,c,l="";if(e.filterable(r))switch(!0){case e.isTextFilter(r):l=i(r);break;case e.isDateFilter(r):l=o(r);break;case e.isListFilter(r):l=s(r)}void 0!==e.$slots["filter__".concat(r)]&&(l=l?t("div",[l,e.$slots["filter__".concat(r)]]):e.$slots["filter__".concat(r)]),a.push(t("th",{class:e.columnClass(r)},[t("div",(n={class:"VueTables__column-filter"},u="class",c="VueTables__"+r+"-filter-wrapper",u in n?Object.defineProperty(n,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[u]=c,n),[l])]))}),e.hasChildRow&&!e.opts.childRowTogglerFirst&&a.push(t("th")),t("tr",{class:"VueTables__filters-row"},[a])}}},function(t,e,r){"use strict";var n=r(7);t.exports=function(t,e){var r=this,i="client"==this.source?this.search.bind(this,this.data):this.serverSearch.bind(this);if(this.opts.debounce)var o=n(i,this.opts.debounce),s=function(t){13===t.keyCode?(o.clear(),i.apply(void 0,arguments)):o.apply(void 0,arguments)};return function(n){return t("input",{on:{keyup:r.opts.debounce?s:i},class:e,attrs:{name:r._getColumnName(n),type:"text",placeholder:r.display("filterBy",{column:r.getHeading(n)})},domProps:{value:r.query[n]}})}}},function(t,e,r){"use strict";t.exports=function(t){var e=this;return function(r){return t("div",{class:"VueTables__date-filter",attrs:{id:"VueTables__"+r+"-filter"}},[t("span",{class:"VueTables__filter-placeholder"},[e.display("filterBy",{column:e.getHeading(r)})])])}}},function(t,e,r){"use strict";t.exports=function(t,e){var r=this;return function(n){var i,o=[],s="client"==r.source?r.search.bind(r,r.data):r.serverSearch.bind(r);return r.opts.listColumns[n].filter(function(t){return!t.hide}).map(function(e){i=e.id==r.query[n]&&""!==r.query[n],o.push(t("option",{domProps:{value:e.id,selected:i}},[e.text]))}),t("div",{class:"VueTables__list-filter",attrs:{id:"VueTables__"+n+"-filter"}},[t("select",{class:e,on:{change:s},attrs:{name:r._getColumnName(n)},domProps:{value:r.query[n]}},[t("option",{attrs:{value:""}},[r.display("defaultOption",{column:r.opts.headings[n]?r.opts.headings[n]:n})]),o])])}}},function(t,e,r){"use strict";t.exports=function(t){var e=this;return function(r){if(e.opts.pagination&&e.opts.pagination.dropdown)return"";var n={theme:r,chunk:e.opts.pagination.chunk,chunksNavigation:e.opts.pagination.nav,edgeNavigation:e.opts.pagination.edge,texts:{count:e.opts.texts.count,first:e.opts.texts.first,last:e.opts.texts.last}},i=e.vuex?e.name:e.id;return t("pagination",{ref:"pagination",attrs:{options:n,for:i,vuex:e.vuex,records:e.count,"per-page":parseInt(e.limit)},on:{paginate:e._onPagination.bind(e)}})}}},function(t,e,r){"use strict";t.exports=function(t){var e=this;return function(n){var i=r(176)(t,n),o=[];return e.hasChildRow&&e.opts.childRowTogglerFirst&&o.push(t("th")),e.allColumns.map(function(e){o.push(t("th",{on:{click:this.orderByColumn.bind(this,e)},class:this.sortableClass(e)},[t("span",{class:"VueTables__heading",attrs:{title:this.getHeadingTooltip(e,t)}},[this.getHeading(e,t)]),i.call(this,e)]))}.bind(e)),e.hasChildRow&&!e.opts.childRowTogglerFirst&&o.push(t("th")),o}}},function(t,e,r){"use strict";t.exports=function(t,e){return function(r){return this.sortable(r)?t("span",{class:"VueTables__sort-icon ".concat(e," ").concat(this.sortableChevronClass(r))}):""}}},function(t,e,r){"use strict";t.exports=function(t){var e=this;return function(r,n,i){return r.length>1?t("select",{class:n,attrs:{name:"limit",id:i},domProps:{value:e.limit},on:{change:e.setLimit.bind(e)}},[r]):""}}},function(t,e,r){"use strict";var n=r(179),i=r(180);t.exports=function(t){var e=this;return function(r){var o=e.columns.map(function(n){return i(t,r,t("a",{class:r.dropdown.item,attrs:{href:"#"},on:{click:function(){return e.toggleColumn(n)}}},[t("input",{attrs:{type:"checkbox",disabled:e._onlyColumn(n)},domProps:{value:n,checked:e.allColumns.includes(n)}}),e.getHeading(n)]))});return t("div",{ref:"columnsdropdown",class:"".concat(r.dropdown.container," ").concat(r.right," VueTables__columns-dropdown")},[t("button",{attrs:{type:"button"},class:"".concat(r.button," ").concat(r.dropdown.trigger),on:{click:e._toggleColumnsDropdown.bind(e)}},[e.display("columns"),t("span",{class:"".concat(r.icon," ").concat(r.small)},[t("i",{class:r.dropdown.caret})])]),n.call(e,t,r,o)])}}},function(t,e,r){"use strict";t.exports=function(t,e,r){return"bulma"===e.framework?t("div",{class:e.dropdown.menu,style:this.displayColumnsDropdown?"display:block":"display:none"},[t("div",{class:e.dropdown.content},[r])]):"bootstrap4"===e.framework?t("div",{class:e.dropdown.menu,style:this.displayColumnsDropdown?"display:block":"display:none"},[r]):t("ul",{class:e.dropdown.menu,style:this.displayColumnsDropdown?"display:block":"display:none"},[r])}},function(t,e,r){"use strict";t.exports=function(t,e,r){return"bulma"===e.framework?r:t("li",[r])}},function(t,e,r){"use strict";t.exports=function(){return{beforeFilters:this.$slots.beforeFilters?this.$slots.beforeFilters:"",afterFilters:this.$slots.afterFilters?this.$slots.afterFilters:"",beforeBody:this.$slots.beforeBody?this.$slots.beforeBody:"",prependBody:this.$slots.prependBody?this.$slots.prependBody:"",appendBody:this.$slots.appendBody?this.$slots.appendBody:"",afterBody:this.$slots.afterBody?this.$slots.afterBody:"",beforeFilter:this.$slots.beforeFilter?this.$slots.beforeFilter:"",afterFilter:this.$slots.afterFilter?this.$slots.afterFilter:"",beforeLimit:this.$slots.beforeLimit?this.$slots.beforeLimit:"",afterLimit:this.$slots.afterLimit?this.$slots.afterLimit:"",beforeTable:this.$slots.beforeTable?this.$slots.beforeTable:"",afterTable:this.$slots.afterTable?this.$slots.afterTable:""}}},function(t,e,r){"use strict";t.exports=function(){return this.opts.filterByColumn?JSON.stringify(this.query):this.query}},function(t,e,r){"use strict";t.exports=function(){return JSON.stringify(this.customQueries)}},function(t,e,r){"use strict";r(26);var n=r(187);t.exports=function(){var t=n(this.tableData),e=this.orderBy.column;t=this.search(t),e?(this.time&&(this.time=this.time),t=this.opts.sortingAlgorithm.call(this,t,e)):this.opts.groupBy&&(t=this.opts.sortingAlgorithm.call(this,t,this.opts.groupBy)),this.vuex?this.count!=t.length&&this.commit("SET_COUNT",t.length):this.count=t.length;var r=(this.page-1)*this.limit;return this.allFilteredData=JSON.parse(JSON.stringify(t)),t=t.splice(r,this.limit),this.applyFilters(t)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){var e=0;for(var r in t){("object"==n(t[r])||t[r]&&(!isNaN(t[r])||t[r].trim()))&&e++}return e}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n;return t.filter(function(t){return n=!0,e.forEach(function(e){var i=r[e.name];i&&!e.callback(t,i)&&(n=!1)}),n})}},function(t,e,r){(function(e){var r=function(){"use strict";function t(t,e){return null!=e&&t instanceof e}var r,n,i;try{r=Map}catch(t){r=function(){}}try{n=Set}catch(t){n=function(){}}try{i=Promise}catch(t){i=function(){}}function o(s,u,c,l,f){"object"==typeof u&&(c=u.depth,l=u.prototype,f=u.includeNonEnumerable,u=u.circular);var p=[],h=[],d=void 0!==e;return void 0===u&&(u=!0),void 0===c&&(c=1/0),function s(c,g){if(null===c)return null;if(0===g)return c;var y,m;if("object"!=typeof c)return c;if(t(c,r))y=new r;else if(t(c,n))y=new n;else if(t(c,i))y=new i(function(t,e){c.then(function(e){t(s(e,g-1))},function(t){e(s(t,g-1))})});else if(o.__isArray(c))y=[];else if(o.__isRegExp(c))y=new RegExp(c.source,a(c)),c.lastIndex&&(y.lastIndex=c.lastIndex);else if(o.__isDate(c))y=new Date(c.getTime());else{if(d&&e.isBuffer(c))return y=e.allocUnsafe?e.allocUnsafe(c.length):new e(c.length),c.copy(y),y;t(c,Error)?y=Object.create(c):void 0===l?(m=Object.getPrototypeOf(c),y=Object.create(m)):(y=Object.create(l),m=l)}if(u){var b=p.indexOf(c);if(-1!=b)return h[b];p.push(c),h.push(y)}for(var v in t(c,r)&&c.forEach(function(t,e){var r=s(e,g-1),n=s(t,g-1);y.set(r,n)}),t(c,n)&&c.forEach(function(t){var e=s(t,g-1);y.add(e)}),c){var _;m&&(_=Object.getOwnPropertyDescriptor(m,v)),_&&null==_.set||(y[v]=s(c[v],g-1))}if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(c);for(v=0;v<w.length;v++){var x=w[v];(!(C=Object.getOwnPropertyDescriptor(c,x))||C.enumerable||f)&&(y[x]=s(c[x],g-1),C.enumerable||Object.defineProperty(y,x,{enumerable:!1}))}}if(f){var S=Object.getOwnPropertyNames(c);for(v=0;v<S.length;v++){var C,P=S[v];(C=Object.getOwnPropertyDescriptor(c,P))&&C.enumerable||(y[P]=s(c[P],g-1),Object.defineProperty(y,P,{enumerable:!1}))}}return y}(s,c)}function s(t){return Object.prototype.toString.call(t)}function a(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return o.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},o.__objToStr=s,o.__isDate=function(t){return"object"==typeof t&&"[object Date]"===s(t)},o.__isArray=function(t){return"object"==typeof t&&"[object Array]"===s(t)},o.__isRegExp=function(t){return"object"==typeof t&&"[object RegExp]"===s(t)},o.__getRegExpFlags=a,o}();t.exports&&(t.exports=r)}).call(this,r(14).Buffer)},function(t,e,r){"use strict";t.exports=function(){this.data.forEach(function(t,e){this.opts.dateColumns.forEach(function(e){t[e]=t[e]?moment(t[e],this.opts.toMomentFormat):""}.bind(this))}.bind(this))}},function(t,e,r){"use strict";var n,i=(n=r(1))&&n.__esModule?n:{default:n};t.exports=function(){var t=this,e="vue-tables";this.name&&(e+="."+this.name),this.opts.customFilters.forEach(function(r){i.default.$off("".concat(e,".filter::").concat(r.name)),i.default.$on("".concat(e,".filter::").concat(r.name),function(e){t.customQueries[r.name]=e,t.updateState("customQueries",t.customQueries)})})}},function(t,e,r){"use strict";t.exports=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,n=this.defaultSort,i=this.userMultiSorting[this.currentlySorting.column]?this.userMultiSorting[this.currentlySorting.column]:this.opts.multiSorting[this.currentlySorting.column],o=this.currentlySorting.ascending,s=this;return function(a,u){var c,l=s._getValue(a,t)||"",f=s._getValue(u,t)||"",p=e?1:-1;if("string"==typeof l&&(l=l.toLowerCase()),"string"==typeof f&&(f=f.toLowerCase()),l===f&&i&&i[r+1]){var h=i[r+1];return c=void 0!==h.ascending?h.ascending:h.matchDir?o:!o,n(h.column,c,r+1)(a,u)}return l>f?p:-p}}},function(t,e,r){"use strict";t.exports=function(t){if(this.$scopedSlots&&this.$scopedSlots.__group_meta){var e=this.opts.groupMeta.find(function(e){return e.value===t});return e?this.$scopedSlots.__group_meta(e):""}return""}},function(t,e,r){"use strict";var n=c(r(0)),i=c(r(20)),o=c(r(9)),s=c(r(10)),a=c(r(11)),u=r(8);function c(t){return t&&t.__esModule?t:{default:t}}var l=r(21),f=r(22),p=r(23);e.install=function(t,e,c){var h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"bootstrap3",d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",g=c?(0,o.default)("server"):(0,s.default)(),y=n.default.recursive(!0,(0,a.default)(),{name:"server-table",components:{Pagination:u.Pagination},render:p.call(this,d,h),props:{columns:{type:Array,required:!0},url:{type:String},name:{type:String,required:!1},options:{type:Object,required:!1,default:function(){return{}}}},created:function(){if(!this.opts.requestFunction&&!this.url)throw'vue-tables-2: you must provide either a "url" prop or a custom request function. Aborting';f(this),this.vuex||(this.query=this.initQuery(),this.initOrderBy(),this.customQueries=this.initCustomFilters()),this.loadState(),this.getData(!0).then(function(t){this.setData(t),this.loading=!1,this.hasDateFilters()&&setTimeout(function(){this.initDateFilters()}.bind(this),0)}.bind(this))},mounted:function(){this._setColumnsDropdownCloseListener(),this.vuex||(this.registerServerFilters(),this.options.initialPage&&this.setPage(this.options.initialPage,!0))},data:function(){return n.default.recursive(l(),{source:"server",loading:!0,lastKeyStrokeAt:!1,globalOptions:e},(0,i.default)(c,"server",this.options.initialPage))},methods:{refresh:r(193),getData:r(194),setData:r(195),serverSearch:r(12),registerServerFilters:r(196),loadState:function(){var t=this;if(this.opts.saveState){if(!this.storage.getItem(this.stateKey))return this.initState(),void(this.activeState=!0);var e=JSON.parse(this.storage.getItem(this.stateKey));this.vuex?this.commit("SET_STATE",{query:e.query,customQueries:e.customQueries,page:e.page,limit:e.perPage,orderBy:e.orderBy}):(this.page=e.page,this.query=e.query,this.customQueries=e.customQueries,this.limit=e.perPage,this.orderBy=e.orderBy),this.opts.pagination.dropdown||setTimeout(function(){t.$refs.pagination.Page=e.page},0),this.activeState=!0}}},watch:{url:function(){this.refresh()}},computed:{totalPages:r(25),filteredQuery:r(197),hasMultiSort:function(){return this.opts.serverMultiSorting}}},g);return t.component("v-server-table",y),y}},function(t,e,r){"use strict";t.exports=function(){this.serverSearch()}},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i=r(0);t.exports=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=this.opts.requestKeys,a=(n(e={},s.query,this.filteredQuery),n(e,s.limit,this.limit),n(e,s.ascending,this.orderBy.ascending?1:0),n(e,s.page,this.page),n(e,s.byColumn,this.opts.filterByColumn?1:0),e);this.orderBy.hasOwnProperty("column")&&this.orderBy.column&&(a[s.orderBy]=this.orderBy.column),a=i(a,this.opts.params,this.customQueries,r),this.hasMultiSort&&this.orderBy.column&&this.userMultiSorting[this.orderBy.column]&&(a.multiSort=this.userMultiSorting[this.orderBy.column]),a=this.opts.requestAdapter(a),o&&this.dispatch("loading",a);var u=this.sendRequest(a);return t?u:u.then(function(t){return this.setData(t)}.bind(this))}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){var e=this.opts.responseAdapter.call(this,t);if(this.data=this.applyFilters(e.data),isNaN(e.count))throw console.error("vue-tables-2: invalid 'count' property. Expected number, got ".concat(n(e.count))),console.error("count equals",e.count),new Error;this.count=parseInt(e.count),setTimeout(function(){this.dispatch("loaded",t)}.bind(this),0)}},function(t,e,r){"use strict";var n,i=(n=r(1))&&n.__esModule?n:{default:n};t.exports=function(){var t="vue-tables";this.name&&(t+="."+this.name),this.opts.customFilters.forEach(function(e){i.default.$off("".concat(t,".filter::").concat(e)),i.default.$on("".concat(t,".filter::").concat(e),function(t){this.customQueries[e]=t,this.updateState("customQueries",this.customQueries),this.refresh()}.bind(this))}.bind(this))}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(){if("object"!==n(this.query)||this.opts.sendEmptyFilters)return this.query;var t={};for(var e in this.query)""!==this.query[e]&&(t[e]=this.query[e]);return t}}]);
=======
 */



module.exports = function indexOf(arr, ele, start) {
  start = start || 0;
  var idx = -1;

  if (arr == null) return idx;
  var len = arr.length;
  var i = start < 0
    ? (len + start)
    : start;

  while (len--) {
    if (arr[i++] === ele) {
      idx = i - 1;
      break;
    }
  }

  return idx;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (data) {
  var _this = this;

  try {
    return data.map(function (row) {
      for (var column in row) {

        if (_this.source === 'client') row[column] = _this.formatDate(row[column], _this.dateFormat(column));

        if (_this.isListFilter(column) && !_this.opts.templates[column] && !_this.$scopedSlots[column]) {
          row[column] = _this.optionText(row[column], column);
        }
      }

      return row;
    });
  } catch (e) {
    console.error('vue-tables-3: non-iterable data property. Expected array, got ' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)) + '. Make sure that your response conforms to the expected format, or use the \'responseAdapter\' option to match the currently returned format');
    console.error('Data equals', data);
    throw new Error();
  }
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value, column) {

  var list = this.listColumnsObject[column];

  if (typeof list[value] == 'undefined') return value;

  return list[value];
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (row, column, index, h) {

  var value = this._getValue(row, column);

  if (this.templatesKeys.indexOf(column) == -1) {

    if (typeof value === 'undefined' || !this.opts.highlightMatches || this.filterableColumns.indexOf(column) === -1) {
      return value;
    }

    return this.highlightMatch(value, column, h);
  }

  var template = this.opts.templates[column];

  template = typeof template == 'function' ? template.apply(this.$root, [h, row, index, column]) : h(template, {
    attrs: {
      data: row,
      column: column,
      index: index
    }
  });

  return template;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (row, event) {

  var data;
  var id = this.opts.uniqueKey;

  if (this.source == 'client' && typeof row[id] !== 'undefined') {
    data = this.tableData.filter(function (r) {
      return row[id] === r[id];
    })[0];
  } else {
    data = row;
  }

  this.dispatch('row-click', { row: data, event: event });
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (e) {
  this.limit = (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' ? e.target.value : e;
  this.updateState('perPage', this.limit);
  this.dispatch('limit', parseInt(this.limit));
  this.setPage(1);
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    var _this = this;

    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


    if (!this.opts.childRow || typeof this.opts.childRow === 'function') {
        throw new Error('vue-tables-3: Child row undefined or not a component');
    }

    var Rows = rows ? this.openChildRows.filter(function (row) {
        return rows.includes(row);
    }) : this.openChildRows;

    if (!Rows.length) return [];

    var components = this.$children.filter(function (child) {
        return child.$options.name === 'ChildRow' && Rows.includes(child.data[_this.opts.uniqueKey]);
    });

    return components;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = __webpack_require__(1);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (event, payload) {

  if (this.vuex) {
    if (event.split('::').length > 1) return;
    this.commit(event.toUpperCase().replace('-', '_'), payload);
  }

  this.$emit(event, payload);

  _bus2.default.$emit('vue-tables.' + event, payload);

  if (this.name) {
    _bus2.default.$emit('vue-tables.' + this.name + '.' + event, payload);
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (rowId, e) {

  if (e) e.stopPropagation();

  if (this.openChildRows.includes(rowId)) {
    var index = this.openChildRows.indexOf(rowId);
    this.openChildRows.splice(index, 1);
  } else {
    this.openChildRows.push(rowId);
  }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (rowId) {
  return this.openChildRows.includes(rowId) ? 'VueTables__child-row-toggler--open' : 'VueTables__child-row-toggler--closed';
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data) {

  if (typeof this.opts.requestFunction === 'function') {
    return this.opts.requestFunction.call(this, data);
  }

  if (typeof axios !== 'undefined') return axios.get(this.url, { params: data }).catch(function (e) {
    this.dispatch('error', e);
  }.bind(this));

  if (typeof this.$http !== 'undefined') return this.$http.get(this.url, { params: data }).then(function (data) {
    return data.json();
  }.bind(this), function (e) {
    this.dispatch('error', e);
  }.bind(this));

  if (typeof $ != 'undefined') return $.getJSON(this.url, data).fail(function (e) {
    this.dispatch('error', e);
  }.bind(this));

  throw "vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource). To use a different library you can write your own request function (see the `requestFunction` option)";
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (response) {

  if (typeof axios !== 'undefined') return response.data;

  return response;
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {

  var ascending = this.orderBy.ascending;

  this.currentlySorting = { column: column, ascending: ascending };

  if (typeof this.opts.customSorting[column] == 'undefined') return this.defaultSort(column, ascending);

  return this.opts.customSorting[column](ascending);
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    var state = {
        page: 1,
        query: this.query,
        orderBy: this.orderBy,
        perPage: this.opts.perPage,
        customQueries: this.customQueries
    };

    this.storage.setItem(this.stateKey, JSON.stringify(state));

    return state;
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (key, value) {

  if (!this.opts.saveState || !this.activeState) return;

  try {
    var currentState = JSON.parse(this.storage.getItem(this.stateKey));
  } catch (e) {
    var currentState = this.initState();
  }

  currentState[key] = value;

  this.storage.setItem(this.stateKey, JSON.stringify(currentState));
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var c = this.opts.columnsClasses;

  return c.hasOwnProperty(column) ? c[column] : '';
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (name) {
  if (!name) return name;

  name = name.split('__');
  name.shift();

  return name.join('__').split('@@@').join('.');
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
    var _this = this;

    if (!this.userControlsColumns) {
        this.userColumnsDisplay = JSON.parse(JSON.stringify(this.allColumns));
        this.userControlsColumns = true;
    }

    if (this.userColumnsDisplay.includes(column)) {

        // can't have no columns
        if (this.userColumnsDisplay.length === 1) return;

        var index = this.userColumnsDisplay.indexOf(column);
        this.userColumnsDisplay.splice(index, 1);
    } else {
        this.userColumnsDisplay.push(column);
    }

    this.updateState('userControlsColumns', true);
    this.updateState('userColumnsDisplay', this.userColumnsDisplay);

    this.$nextTick(function () {
        _this._setFiltersDOM(_this.query);
    });
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (secondaryCol) {

  var primaryCol = this.orderBy.column;
  var primaryAsc = this.orderBy.ascending;

  if (!this.userMultiSorting[primaryCol]) this.userMultiSorting[primaryCol] = [];

  var multi = this.userMultiSorting[primaryCol];

  if (primaryCol === secondaryCol) {
    if (!multi.length || primaryAsc) {
      // primary is the only sorted column or is ascending
      this.orderBy.ascending = !this.orderBy.ascending;
    } else {
      // remove primary column and make secondary primary
      this.orderBy = multi.shift();
      this.userMultiSorting = {};
      this.userMultiSorting[this.orderBy.column] = multi;
    }
  } else {
    var secondary = multi.filter(function (col) {
      return col.column == secondaryCol;
    })[0];

    if (secondary) {
      if (!secondary.ascending) {
        // remove sort
        this.userMultiSorting[primaryCol] = multi.filter(function (col) {
          return col.column != secondaryCol;
        });
        if (!this.userMultiSorting[primaryCol].length) this.userMultiSorting = {};
      } else {
        // change direction
        secondary.ascending = !secondary.ascending;
      }
    } else {
      // add sort
      multi.push({
        column: secondaryCol,
        ascending: true
      });
    }
  }
  // force re-compilation of the filteredData computed property
  this.time = Date.now();

  this.dispatch('sorted', getMultiSortData(this.orderBy, this.userMultiSorting));
};

function getMultiSortData(main, secondary) {
  var cols = [JSON.parse(JSON.stringify(main))];
  cols = cols.concat(secondary[main.column]);
  return cols;
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (query) {

  var el;

  if (this.opts.filterByColumn) {

    for (var column in query) {

      var columnName = this._getColumnName(column);

      if (this.isDateFilter(column)) {
        if (query[column] && _typeof(query[column]) === 'object') {
          var start = typeof query[column].start === 'string' ? moment(query[column].start, 'YYYY-MM-DD') : query[column].start;
          var end = typeof query[column].end === 'string' ? moment(query[column].end, 'YYYY-MM-DD') : query[column].end;

          this._setDatepickerText(column, start, end);
        } else {
          $(this.$el).find('#VueTables__' + column + '-filter').html("<span class='VueTables__filter-placeholder'>" + this.display('filterBy', { column: this.getHeading(column) }) + "</span>");
        }
        continue;
      }
      el = this.$el.querySelector('[name=\'' + columnName + '\']');

      if (el) {
        el.value = query[column];
      } else if (this.columns.indexOf(column) === -1) {
        console.error('vue-tables-3: Error in setting filter value. Column \'' + column + '\' does not exist.');
      }
    }
  } else {
    this.$el.querySelector('.VueTables__search input').value = query;
  }
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var userMultiSort = Object.keys(this.userMultiSorting);

  if (!userMultiSort.length || this.orderBy.column === column) return this.orderBy.column === column;

  return !!this.userMultiSorting[userMultiSort[0]].filter(function (col) {
    return col.column == column;
  }).length;
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, row) {
  // scoped slot
  if (this.$scopedSlots.child_row) return this.$scopedSlots.child_row({ row: row });

  var childRow = this.opts.childRow;

  // function
  if (typeof childRow === 'function') return childRow.apply(this, [h, row]);

  // component
  return h(childRow, {
    attrs: {
      data: row
    }
  });
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    this.displayColumnsDropdown = !this.displayColumnsDropdown;
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
    return this.userColumnsDisplay.length === 1 && this.userColumnsDisplay[0] === column;
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (page) {

    if (this.vuex) return;

    this.setPage(page);
    this.dispatch('pagination', page);
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

    if (this.orderBy.column != this.opts.groupBy) {
        this.setOrder(this.opts.groupBy, true);
    } else {
        this.setOrder(this.opts.groupBy, !this.orderBy.ascending);
    }
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
    if (typeof this.opts.initFilters[column] !== 'undefined') {
        return this.opts.initFilters[column];
    }

    if (typeof this.query[column] !== 'undefined' && this.query[column].start) {
        return {
            start: moment(this.query[column].start, 'YYYY-MM-DD HH:mm:ss'),
            end: moment(this.query[column].end, 'YYYY-MM-DD HH:mm:ss')
        };
    }

    return false;
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column, start, end) {

    var dateFormat = this.dateFormat(column);
    var el = typeof column === 'string' ? $(this.$el).find("#VueTables__" + column + "-filter") : column;

    el.text(start.format(dateFormat) + " - " + end.format(dateFormat));
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
    return !this.opts.descOrderColumns.includes(column);
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {

    if (this.opts.dateFormatPerColumn.hasOwnProperty(column)) {
        return this.opts.dateFormatPerColumn[column];
    }

    return this.opts.dateFormat;
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _this = this;

  if (this.opts.columnsDropdown) {

    var stopProp = function stopProp(e) {
      return e.stopPropagation();
    };
    var handler = function handler() {
      if (_this.displayColumnsDropdown) {
        _this.displayColumnsDropdown = false;
      }
    };

    this.$refs.columnsdropdown.addEventListener('click', stopProp);
    document.addEventListener('click', handler);

    this.$once('hook:beforeDestroy', function () {
      document.removeEventListener('click', handler);
      _this.$refs.columnsdropdown.removeEventListener('click', stopProp);
    });
  }
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (row, column) {

  if (column.indexOf('.') === -1) return row[column];

  var p = column.split('.');

  var value = row[p[0]];

  if (!value) return '';

  for (var i = 1; i < p.length; i++) {
    value = value[p[i]];

    // If the nested structure doesn't exist return an empty string
    if (typeof value === 'undefined') return '';
  }

  return value;
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
    return 'vf__' + column.split('.').join('@@@');
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    listColumnsObject: __webpack_require__(144),
    allColumns: __webpack_require__(145),
    templatesKeys: __webpack_require__(146),
    opts: __webpack_require__(147),
    tableData: __webpack_require__(149),
    storage: __webpack_require__(150),
    filterableColumns: __webpack_require__(151),
    hasChildRow: __webpack_require__(152),
    colspan: __webpack_require__(153),
    hasGenericFilter: __webpack_require__(154),
    stateKey: function stateKey() {
        var key = this.name ? this.name : this.id;
        return 'vuetables_' + key;
    },

    Page: function Page() {
        return this.page;
    }
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var columns = Object.keys(this.opts.listColumns);

  var res = {};

  columns.forEach(function (column) {
    res[column] = {};

    this.opts.listColumns[column].forEach(function (item) {
      res[column][item.id] = item.text;
    });
  }.bind(this));

  return res;
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _this = this;

  var display = this.columnsDisplay;

  // default - return all columns

  if (!display && !this.userControlsColumns) {
    return this.Columns;
  }

  // user toggled columns - return user selected columns

  if (this.userControlsColumns) {
    return this.columns.filter(function (column) {
      return _this.userColumnsDisplay.includes(column);
    });
  }

  if (this.opts.ssr) return this.Columns;

  // developer defined columns display

  return this.Columns.filter(function (column) {

    if (!display[column]) return true;

    var range = display[column];
    var operator = range[2];

    var inRange = (!range[0] || _this.windowWidth >= range[0]) && (!range[1] || _this.windowWidth < range[1]);

    return operator == 'not' ? !inRange : inRange;
  });
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
      return Object.keys(this.opts.templates);
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var defaults = __webpack_require__(148)();
  return this.initOptions(defaults, this.globalOptions, this.options);
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    dateColumns: [],
    listColumns: {},
    datepickerOptions: {
      locale: {
        cancelLabel: 'Clear'
      }
    },
    datepickerPerColumnOptions: {},
    initialPage: 1,
    perPage: 10,
    perPageValues: [10, 25, 50, 100],
    groupBy: false,
    collapseGroups: false,
    destroyEventBus: false,
    sendEmptyFilters: false,
    params: {},
    sortable: true,
    filterable: true,
    groupMeta: [],
    initFilters: {},
    customFilters: [],
    templates: {},
    debounce: 250,
    dateFormat: "DD/MM/YYYY",
    dateFormatPerColumn: {},
    toMomentFormat: false,
    skin: false,
    columnsDisplay: {},
    columnsDropdown: false,
    texts: {
      count: "Showing {from} to {to} of {count} records|{count} records|One record",
      first: 'First',
      last: 'Last',
      filter: "Filter:",
      filterPlaceholder: "Search query",
      limit: "Records:",
      page: "Page:",
      noResults: "No matching records",
      filterBy: "Filter by {column}",
      loading: 'Loading...',
      defaultOption: 'Select {column}',
      columns: 'Columns'
    },
    sortIcon: {
      is: 'glyphicon-sort',
      base: 'glyphicon',
      up: 'glyphicon-chevron-up',
      down: 'glyphicon-chevron-down'
    },
    sortingAlgorithm: function sortingAlgorithm(data, column) {
      return data.sort(this.getSortFn(column));
    },

    customSorting: {},
    multiSorting: {},
    clientMultiSorting: true,
    serverMultiSorting: false,
    filterByColumn: false,
    highlightMatches: false,
    orderBy: false,
    descOrderColumns: [],
    footerHeadings: false,
    headings: {},
    headingsTooltips: {},
    pagination: {
      dropdown: false,
      chunk: 10,
      edge: false,
      align: 'center',
      nav: 'fixed'
    },
    childRow: false,
    childRowTogglerFirst: true,
    uniqueKey: 'id',
    requestFunction: false,
    requestAdapter: function requestAdapter(data) {
      return data;
    },
    responseAdapter: function responseAdapter(resp) {

      var data = this.getResponseData(resp);

      return {
        data: data.data,
        count: data.count
      };
    },
    requestKeys: {
      query: 'query',
      limit: 'limit',
      orderBy: 'orderBy',
      ascending: 'ascending',
      page: 'page',
      byColumn: 'byColumn'
    },
    rowClassCallback: false,
    preserveState: false,
    saveState: false,
    storage: 'local',
    columnsClasses: {}
  };
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return this.data;
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  if (typeof localStorage === 'undefined') return {};

  return this.opts.storage === 'local' ? localStorage : sessionStorage;
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
       return this.opts.filterable && this.opts.filterable.length ? this.opts.filterable : this.Columns;
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return this.opts.childRow || this.$scopedSlots.child_row;
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    return this.hasChildRow ? this.allColumns.length + 1 : this.allColumns.length;
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function () {
    return !this.opts.filterByColumn && (typeof this.opts.filterable === 'boolean' && this.opts.filterable || _typeof(this.opts.filterable) === 'object' && this.opts.filterable.length);
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    input: __webpack_require__(156),
    select: __webpack_require__(157)
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  twoWay: true,
  bind: function bind(el, binding, vnode) {

    el.addEventListener('keydown', function (e) {
      vnode.context[binding.value] = e.target.value;
    });
  },

  update: function update(el, binding, vnode, oldVnode) {}

};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  twoWay: true,
  bind: function bind(el, binding, vnode) {
    el.addEventListener('change', function (e) {
      console.log("SELECT CHANGE");
      vnode.context[binding.value.name] = e.target.value;
      binding.value.cb.call(this, binding.value.params);
    });
  },

  update: function update(el, binding, vnode, oldVnode) {
    // el.value = vnode.context[binding.value];
    // console.log(binding.value + " was updated");
    //  vnode.context[binding.value] = el.value;

  }

};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = __webpack_require__(1);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
    var _this = this;

    var el;

    if (this.opts.destroyEventBus) {
        _bus2.default.$off();
        _bus2.default.$destroy();
    }

    if (this.vuex && !this.opts.preserveState) {
        this.$store.unregisterModule(this.name);
    }

    if (this.opts.filterByColumn) {
        this.opts.dateColumns.forEach(function (column) {
            el = $(_this.$el).find("#VueTables__" + column + "-filter").data('daterangepicker');
            if (el) el.remove();
        });
    }
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // Otherwise, does it have any properties of its own?
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _state = __webpack_require__(161);

var _state2 = _interopRequireDefault(_state);

var _mutations = __webpack_require__(162);

var _mutations2 = _interopRequireDefault(_mutations);

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (self) {

  var Module = {
    state: (0, _state2.default)(self),
    mutations: (0, _mutations2.default)(self)
  };

  if (self.$store && self.$store.state && self.$store.state[self.name]) {
    Module.state = _merge2.default.recursive(Module.state, self.$store.state[self.name]);
    self.$store.unregisterModule(self.name);
  }

  self.$store.registerModule(self.name, Module);
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (self) {

  var state = {
    page: self.opts.initialPage ? self.opts.initialPage : 1,
    limit: self.opts.perPage,
    count: self.source == 'server' ? 0 : self.data.length,
    columns: self.columns,
    data: self.source == 'client' ? self.data : [],
    query: self.initQuery(),
    customQueries: self.initCustomFilters(),
    sortBy: self.opts.orderBy && self.opts.orderBy.column ? self.opts.orderBy.column : false,
    ascending: self.opts.orderBy && self.opts.orderBy.hasOwnProperty('ascending') ? self.opts.orderBy.ascending : true
  };

  if (typeof self.$store.state[self.name] !== 'undefined') {
    return (0, _merge2.default)(true, self.$store.state[self.name], state);
  }

  return state;
};

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (self) {
  var _ref, _merge$recursive;

  var extra = self.source == 'server' ? (_ref = {}, _defineProperty(_ref, self.name + '/SET_DATA', function undefined(state, response) {

    var data = self.opts.responseAdapter.call(self, response);

    state.data = data.data;
    state.count = parseInt(data.count);
  }), _defineProperty(_ref, self.name + '/LOADING', function undefined(state, payload) {}), _defineProperty(_ref, self.name + '/LOADED', function undefined(state, payload) {}), _defineProperty(_ref, self.name + '/ERROR', function undefined(state, payload) {}), _ref) : _defineProperty({}, self.name + '/SET_COUNT', function undefined(state, count) {
    state.count = count;
  });

  return _merge2.default.recursive(true, (_merge$recursive = {}, _defineProperty(_merge$recursive, self.name + '/PAGINATE', function undefined(state, page) {
    state.page = page;
    self.updateState('page', page);

    if (self.source == 'server') self.getData();

    self.commit('PAGINATION', page);
  }), _defineProperty(_merge$recursive, self.name + '/SET_FILTER', function undefined(state, filter) {
    state.page = 1;

    self.updateState('page', 1);

    state.query = filter;

    if (self.source == 'server') {
      self.getData();
    }
  }), _defineProperty(_merge$recursive, self.name + '/PAGINATION', function undefined(state, page) {}), _defineProperty(_merge$recursive, self.name + '/SET_CUSTOM_FILTER', function undefined(state, _ref3) {
    var filter = _ref3.filter,
        value = _ref3.value;


    state.customQueries[filter] = value;
    state.page = 1;

    self.updateState('page', 1);
    self.updateState('customQueries', state.customQueries);

    if (self.source == 'server') {
      self.getData();
    }
  }), _defineProperty(_merge$recursive, self.name + '/SET_STATE', function undefined(state, _ref4) {
    var page = _ref4.page,
        query = _ref4.query,
        customQueries = _ref4.customQueries,
        limit = _ref4.limit,
        orderBy = _ref4.orderBy;

    state.customQueries = customQueries;
    state.query = query;
    state.page = page;
    state.limit = limit;
    state.ascending = orderBy.ascending;
    state.sortBy = orderBy.column;
  }), _defineProperty(_merge$recursive, self.name + '/SET_LIMIT', function undefined(state, limit) {
    state.page = 1;
    self.updateState('page', 1);

    state.limit = limit;

    if (self.source == 'server') self.getData();
  }), _defineProperty(_merge$recursive, self.name + '/SORT', function undefined(state, _ref5) {
    var column = _ref5.column,
        ascending = _ref5.ascending;


    state.ascending = ascending;
    state.sortBy = column;

    if (self.source == 'server') self.getData();
  }), _defineProperty(_merge$recursive, self.name + '/SORTED', function undefined(state, data) {}), _defineProperty(_merge$recursive, self.name + '/ROW_CLICK', function undefined(state, row) {}), _defineProperty(_merge$recursive, self.name + '/FILTER', function undefined(state, row) {}), _defineProperty(_merge$recursive, self.name + '/LIMIT', function undefined(state, limit) {}), _merge$recursive), extra);
};

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    return {
        framework: 'bootstrap3',
        table: 'table table-striped table-bordered table-hover',
        row: 'row',
        column: 'col-md-12',
        label: '',
        input: 'form-control',
        select: 'form-control',
        field: 'form-group',
        inline: 'form-inline',
        right: 'pull-right',
        left: 'pull-left',
        center: 'text-center',
        contentCenter: '',
        small: '',
        nomargin: '',
        groupTr: 'info',
        button: 'btn btn-secondary',
        dropdown: {
            container: 'dropdown',
            trigger: 'dropdown-toggle',
            menu: 'dropdown-menu',
            content: '',
            item: '',
            caret: 'caret'
        },
        pagination: {
            nav: '',
            count: '',
            wrapper: '',
            list: 'pagination',
            item: 'page-item',
            link: 'page-link',
            next: '',
            prev: '',
            active: 'active',
            disabled: 'disabled'
        }
    };
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    return {
        framework: 'bootstrap4',
        table: 'table table-striped table-bordered table-hover',
        row: 'row',
        column: 'col-md-12',
        label: '',
        input: 'form-control',
        select: 'form-control',
        field: 'form-group',
        inline: 'form-inline',
        right: 'float-right',
        left: 'float-left',
        center: 'text-center',
        contentCenter: 'justify-content-center',
        nomargin: 'm-0',
        groupTr: 'table-info',
        small: '',
        button: 'btn btn-secondary',
        dropdown: {
            container: 'dropdown',
            trigger: 'dropdown-toggle',
            menu: 'dropdown-menu',
            content: '',
            item: 'dropdown-item',
            caret: 'caret'
        },
        pagination: {
            nav: '',
            count: '',
            wrapper: '',
            list: 'pagination',
            item: 'page-item',
            link: 'page-link',
            next: '',
            prev: '',
            active: 'active',
            disabled: 'disabled'
        }
    };
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    return {
        framework: 'bulma',
        table: 'table is-bordered is-striped is-hoverable is-fullwidth',
        row: 'columns',
        column: 'column is-12',
        label: 'label',
        input: 'input',
        select: 'select',
        field: 'field',
        inline: 'is-horizontal',
        right: 'is-pulled-right',
        left: 'is-pulled-left',
        center: 'has-text-centered',
        contentCenter: 'is-centered',
        icon: 'icon',
        small: 'is-small',
        nomargin: 'marginless',
        button: 'button',
        groupTr: 'is-selected',
        dropdown: {
            container: 'dropdown',
            trigger: 'dropdown-trigger',
            menu: 'dropdown-menu',
            content: 'dropdown-content',
            item: 'dropdown-item',
            caret: 'fa fa-angle-down'
        },
        pagination: {
            nav: '',
            count: '',
            wrapper: 'pagination',
            list: 'pagination-list',
            item: '',
            link: 'pagination-link',
            next: '',
            prev: '',
            active: 'is-current',
            disabled: ''
        }
    };
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (h, modules, classes, slots) {

  var filterId = 'VueTables__search_' + this.id;
  var ddpId = 'VueTables__dropdown-pagination_' + this.id;
  var perpageId = 'VueTables__limit_' + this.id;
  var perpageValues = __webpack_require__(25).call(this, h);

  var genericFilter = this.hasGenericFilter ? h(
    'div',
    { 'class': 'VueTables__search-field' },
    [h(
      'label',
      {
        attrs: { 'for': filterId },
        'class': classes.label },
      [this.display('filter')]
    ), modules.normalFilter(classes, filterId)]
  ) : '';

  var perpage = perpageValues.length > 1 ? h(
    'div',
    { 'class': 'VueTables__limit-field' },
    [h(
      'label',
      { 'class': classes.label, attrs: { 'for': perpageId }
      },
      [this.display('limit')]
    ), modules.perPage(perpageValues, classes.select, perpageId)]
  ) : '';

  var dropdownPagination = this.opts.pagination && this.opts.pagination.dropdown ? h(
    'div',
    { 'class': 'VueTables__pagination-wrapper' },
    [h(
      'div',
      { 'class': classes.field + ' ' + classes.inline + ' ' + classes.right + ' VueTables__dropdown-pagination',
        directives: [{
          name: 'show',
          value: this.totalPages > 1
        }]
      },
      [h(
        'label',
        {
          attrs: { 'for': ddpId }
        },
        [this.display('page')]
      ), modules.dropdownPagination(classes.select, ddpId)]
    )]
  ) : '';

  var columnsDropdown = this.opts.columnsDropdown ? h(
    'div',
    { 'class': 'VueTables__columns-dropdown-wrapper' },
    [modules.columnsDropdown(classes)]
  ) : '';

  var footerHeadings = this.opts.footerHeadings ? h('tfoot', [h('tr', [modules.headings(classes.right)])]) : '';

  var shouldShowTop = genericFilter || perpage || dropdownPagination || columnsDropdown || slots.beforeFilter || slots.afterFilter || slots.beforeLimit || slots.afterLimit;

  var tableTop = h(
    'div',
    { 'class': classes.row, directives: [{
        name: 'show',
        value: shouldShowTop
      }]
    },
    [h(
      'div',
      { 'class': classes.column },
      [h(
        'div',
        { 'class': classes.field + ' ' + classes.inline + ' ' + classes.left + ' VueTables__search' },
        [slots.beforeFilter, genericFilter, slots.afterFilter]
      ), h(
        'div',
        { 'class': classes.field + ' ' + classes.inline + ' ' + classes.right + ' VueTables__limit' },
        [slots.beforeLimit, perpage, slots.afterLimit]
      ), dropdownPagination, columnsDropdown]
    )]
  );

  return h(
    'div',
    { 'class': "VueTables VueTables--" + this.source },
    [tableTop, slots.beforeTable, h(
      'div',
      { 'class': 'table-responsive' },
      [h(
        'table',
        { 'class': 'VueTables__table ' + (this.opts.skin ? this.opts.skin : classes.table) },
        [h('thead', [h('tr', [modules.headings(classes.right)]), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]), footerHeadings, slots.beforeBody, h('tbody', [slots.prependBody, modules.rows(classes), slots.appendBody]), slots.afterBody]
      )]
    ), slots.afterTable, modules.pagination((0, _merge2.default)(classes.pagination, {
      wrapper: classes.row + ' ' + classes.column + ' ' + classes.contentCenter,
      nav: classes.center,
      count: classes.center + ' ' + classes.column
    })), modules.dropdownPaginationCount()]
  );
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (h, modules, classes, slots) {

  var filterId = 'VueTables__search_' + this.id;
  var perpageId = 'VueTables__limit_' + this.id;
  var perpageValues = __webpack_require__(25).call(this, h);

  var genericFilter = this.hasGenericFilter ? h(
    'div',
    { 'class': 'VueTables__search-field' },
    [h(
      'label',
      {
        attrs: { 'for': filterId },
        'class': classes.label },
      [this.display('filter')]
    ), modules.normalFilter(classes, filterId)]
  ) : '';

  var perpage = perpageValues.length > 1 ? h(
    'div',
    { 'class': 'VueTables__limit-field' },
    [h(
      'label',
      { 'class': classes.label, attrs: { 'for': perpageId }
      },
      [this.display('limit')]
    ), modules.perPage(perpageValues, classes.select, perpageId)]
  ) : '';

  var columnsDropdown = this.opts.columnsDropdown ? h(
    'div',
    { 'class': 'VueTables__columns-dropdown-wrapper' },
    [modules.columnsDropdown(classes)]
  ) : '';

  var shouldShowTop = genericFilter || perpage || columnsDropdown || slots.beforeFilter || slots.afterFilter || slots.beforeLimit || slots.afterLimit;

  var tableTop = h(
    'div',
    { 'class': classes.row, directives: [{
        name: 'show',
        value: shouldShowTop
      }]
    },
    [h(
      'div',
      { 'class': classes.column },
      [h(
        'div',
        { 'class': classes.field + ' ' + classes.inline + ' ' + classes.left + ' VueTables__search' },
        [slots.beforeFilter, genericFilter, slots.afterFilter]
      ), h(
        'div',
        { 'class': classes.field + ' ' + classes.inline + ' ' + classes.right + ' VueTables__limit' },
        [slots.beforeLimit, perpage, slots.afterLimit]
      ), columnsDropdown]
    )]
  );

  return h(
    'div',
    { 'class': "VueTables VueTables--" + this.source },
    [tableTop, slots.beforeTable, h(
      'div',
      { 'class': 'table-responsive' },
      [h(
        'table',
        { 'class': 'VueTables__table ' + (this.opts.skin ? this.opts.skin : classes.table) },
        [h('thead', [h('tr', [modules.headings(classes.right)]), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]), h('tfoot', [h('tr', [h(
          'td',
          {
            attrs: { colspan: this.colspan }
          },
          [modules.pagination((0, _merge2.default)(classes.pagination, {
            list: classes.pagination.list + ' ' + classes.right + ' ' + classes.nomargin,
            count: '' + classes.left
          }))]
        )])]), slots.beforeBody, h('tbody', [slots.prependBody, modules.rows(classes), slots.appendBody]), slots.afterBody]
      )]
    ), slots.afterTable]
  );
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (classes) {

    var data;

    if (_this.source === 'client') {
      data = _this.filteredData;

      if (!data.length && _this.source === 'client' && _this.page !== 1) {
        // data was dynamically removed go to last page
        _this.setPage(_this.totalPages ? _this.totalPages : 1);
      }
    } else {
      data = _this.tableData;
    }

    if (_this.count === 0) {

      var colspan = _this.allColumns.length;
      if (_this.hasChildRow) colspan++;

      return h(
        'tr',
        { 'class': 'VueTables__no-results' },
        [h(
          'td',
          { 'class': 'text-center',
            attrs: { colspan: _this.colspan }
          },
          [_this.display(_this.loading ? 'loading' : 'noResults')]
        )]
      );
    }

    var rows = [];
    var columns;
    var rowKey = _this.opts.uniqueKey;

    var rowClass;
    var recordCount = (_this.Page - 1) * _this.limit;
    var currentGroup;
    var groupSlot;
    var groupValue;
    var groupByContent;

    data.map(function (row, index) {

      if (_this.opts.groupBy && _this.source === 'client' && row[_this.opts.groupBy] !== currentGroup) {
        groupSlot = _this.getGroupSlot(row[_this.opts.groupBy]);
        groupValue = row[_this.opts.groupBy];

        groupByContent = _this.opts.toggleGroups ? h(
          'button',
          { 'class': classes.button, on: {
              'click': _this.toggleGroup.bind(_this, groupValue)
            }
          },
          [groupValue, h('span', { 'class': _this.groupToggleIcon(groupValue) })]
        ) : groupValue;

        rows.push(h(
          'tr',
          { 'class': classes.groupTr, on: {
              'click': _this._toggleGroupDirection.bind(_this)
            }
          },
          [h(
            'td',
            {
              attrs: { colspan: _this.colspan }
            },
            [groupByContent, groupSlot]
          )]
        ));
        currentGroup = row[_this.opts.groupBy];
      }

      if (_this.opts.toggleGroups && _this.collapsedGroups.includes(currentGroup)) {
        return;
      }

      index = recordCount + index + 1;

      columns = [];

      if (_this.hasChildRow) {
        var childRowToggler = h('td', [h('span', {
          on: {
            'click': _this.toggleChildRow.bind(_this, row[rowKey])
          },
          'class': 'VueTables__child-row-toggler ' + _this.childRowTogglerClass(row[rowKey]) })]);
        if (_this.opts.childRowTogglerFirst) columns.push(childRowToggler);
      }

      _this.allColumns.map(function (column) {
        var rowTemplate = _this.$scopedSlots && _this.$scopedSlots[column];

        columns.push(h(
          'td',
          { 'class': _this.columnClass(column) },
          [rowTemplate ? rowTemplate({ row: row, column: column, index: index }) : _this.render(row, column, index, h)]
        ));
      });

      if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) columns.push(childRowToggler);

      rowClass = _this.opts.rowClassCallback ? _this.opts.rowClassCallback(row) : '';

      rows.push(h(
        'tr',
        { 'class': rowClass, on: {
            'click': _this.rowWasClicked.bind(_this, row),
            'dblclick': _this.rowWasClicked.bind(_this, row)
          }
        },
        [columns, ' ']
      ));

      rows.push(_this.hasChildRow && _this.openChildRows.includes(row[rowKey]) ? h(
        'tr',
        { 'class': 'VueTables__child-row' },
        [h(
          'td',
          {
            attrs: { colspan: _this.colspan }
          },
          [_this._getChildRowTemplate(h, row)]
        )]
      ) : h());
    });

    return rows;
  };
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debounce = __webpack_require__(7);

module.exports = function (h) {
  var _this = this;

  return function (classes, id) {
    var search = _this.source == "client" ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

    return h("input", {
      "class": classes.input + " " + classes.small,
      attrs: { type: "text",
        placeholder: _this.display("filterPlaceholder"),

        id: id
      },
      on: {
        "keyup": _this.opts.debounce ? debounce(search, _this.opts.debounce) : search
      }
    });
  };
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debounce = __webpack_require__(7);

module.exports = function (h) {
  var _this = this;

  return function (selectClass, id) {

    var pages = [];
    var selected;

    for (var pag = 1; pag <= _this.totalPages; pag++) {
      var selected = _this.page == pag;
      pages.push(h(
        "option",
        {
          domProps: {
            "value": pag,
            "selected": selected
          }
        },
        [pag]
      ));
    }
    return h(
      "select",
      { "class": selectClass + " dropdown-pagination",
        directives: [{
          name: "show",
          value: _this.totalPages > 1
        }],
        attrs: {
          name: "page",

          id: id
        },
        ref: "page",
        domProps: {
          "value": _this.page
        },
        on: {
          "change": _this.setPage.bind(_this, null, false)
        }
      },
      [pages]
    );
  };
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function () {
    if (_this.count > 0 && _this.opts.pagination.dropdown) {

      var perPage = parseInt(_this.limit);

      var from = (_this.Page - 1) * perPage + 1;
      var to = _this.Page == _this.totalPages ? _this.count : from + perPage - 1;

      var parts = _this.opts.texts.count.split('|');
      var i = Math.min(_this.count == 1 ? 2 : _this.totalPages == 1 ? 1 : 0, parts.length - 1);

      var count = parts[i].replace('{count}', _this.count).replace('{from}', from).replace('{to}', to);

      return h(
        'div',
        { 'class': 'VuePagination' },
        [h(
          'p',
          { 'class': 'VuePagination__count' },
          [count]
        )]
      );
    }

    return '';
  };
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (h) {
  var _this = this;

  return function (classes) {
    if (!_this.opts.filterByColumn || !_this.opts.filterable) return '';

    var textFilter = __webpack_require__(173).call(_this, h, classes.input);
    var dateFilter = __webpack_require__(174).call(_this, h);
    var listFilter = __webpack_require__(175).call(_this, h, classes.select);

    var filters = [];
    var filter;

    if (_this.hasChildRow && _this.opts.childRowTogglerFirst) filters.push(h('th'));

    _this.allColumns.map(function (column) {

      var filter = '';

      if (_this.filterable(column)) {
        switch (true) {
          case _this.isTextFilter(column):
            filter = textFilter(column);break;
          case _this.isDateFilter(column):
            filter = dateFilter(column);break;
          case _this.isListFilter(column):
            filter = listFilter(column);break;
        }
      }

      if (typeof _this.$slots['filter__' + column] !== 'undefined') {
        filter = filter ? h('div', [filter, _this.$slots['filter__' + column]]) : _this.$slots['filter__' + column];
      }

      filters.push(h(
        'th',
        { 'class': _this.columnClass(column) },
        [h(
          'div',
          _defineProperty({ 'class': 'VueTables__column-filter' }, 'class', 'VueTables__' + column + '-filter-wrapper'),
          [filter]
        )]
      ));
    });

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) filters.push(h('th'));

    return h(
      'tr',
      { 'class': 'VueTables__filters-row' },
      [filters]
    );
  };
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debounce = __webpack_require__(7);

module.exports = function (h, inputClass) {
  var _this = this;

  var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

  if (this.opts.debounce) {
    var debouncedSearch = debounce(search, this.opts.debounce);

    var onKeyUp = function onKeyUp(e) {
      if (e.keyCode === 13) {
        debouncedSearch.clear();
        search.apply(undefined, arguments);
      } else {
        debouncedSearch.apply(undefined, arguments);
      }
    };
  }

  return function (column) {
    return h('input', {
      on: {
        'keyup': _this.opts.debounce ? onKeyUp : search
      },

      'class': inputClass,
      attrs: { name: _this._getColumnName(column),
        type: 'text',
        placeholder: _this.display('filterBy', { column: _this.getHeading(column) })
      },
      domProps: {
        'value': _this.query[column]
      }
    });
  };
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (column) {
    return h(
      'div',
      { 'class': 'VueTables__date-filter',
        attrs: { id: 'VueTables__' + column + '-filter' }
      },
      [h(
        'span',
        { 'class': 'VueTables__filter-placeholder' },
        [_this.display('filterBy', { column: _this.getHeading(column) })]
      )]
    );
  };
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, selectClass) {
  var _this = this;

  return function (column) {

    var options = [];
    var selected = void 0;

    var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

    var displayable = _this.opts.listColumns[column].filter(function (item) {
      return !item.hide;
    });

    displayable.map(function (option) {
      selected = option.id == _this.query[column] && _this.query[column] !== '';
      options.push(h(
        'option',
        {
          domProps: {
            'value': option.id,
            'selected': selected
          }
        },
        [option.text]
      ));
    });

    return h(
      'div',
      { 'class': 'VueTables__list-filter',
        attrs: { id: 'VueTables__' + column + '-filter' }
      },
      [h(
        'select',
        { 'class': selectClass,
          on: {
            'change': search
          },
          attrs: {
            name: _this._getColumnName(column)
          },
          domProps: {
            'value': _this.query[column]
          }
        },
        [h(
          'option',
          {
            attrs: { value: '' }
          },
          [_this.display('defaultOption', { column: _this.opts.headings[column] ? _this.opts.headings[column] : column })]
        ), options]
      )]
    );
  };
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (theme) {

    if (_this.opts.pagination && _this.opts.pagination.dropdown) return '';

    var options = {
      theme: theme,
      chunk: _this.opts.pagination.chunk,
      chunksNavigation: _this.opts.pagination.nav,
      edgeNavigation: _this.opts.pagination.edge,
      texts: {
        count: _this.opts.texts.count,
        first: _this.opts.texts.first,
        last: _this.opts.texts.last
      }
    };

    var name = _this.vuex ? _this.name : _this.id;

    return h("pagination", {
      ref: "pagination",
      attrs: { options: options,
        "for": name,
        vuex: _this.vuex,
        records: _this.count,
        "per-page": parseInt(_this.limit)
      },
      on: {
        "paginate": _this._onPagination.bind(_this)
      }
    });
  };
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (right) {
    var sortControl = __webpack_require__(178)(h, right);

    var headings = [];

    if (_this.hasChildRow && _this.opts.childRowTogglerFirst) headings.push(h("th"));

    _this.allColumns.map(function (column) {
      headings.push(h(
        "th",
        {
          on: {
            "click": this.orderByColumn.bind(this, column)
          },

          "class": this.sortableClass(column) },
        [h(
          "span",
          { "class": "VueTables__heading", attrs: { title: this.getHeadingTooltip(column, h) }
          },
          [this.getHeading(column, h)]
        ), sortControl.call(this, column)]
      ));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) headings.push(h("th"));

    return headings;
  };
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, right) {
  return function (column) {

    if (!this.sortable(column)) return '';
    return h('span', { 'class': 'VueTables__sort-icon ' + right + ' ' + this.sortableChevronClass(column) });
  };
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (perpageValues, cls, id) {

    return perpageValues.length > 1 ? h(
      "select",
      { "class": cls,
        attrs: { name: "limit",

          id: id
        },
        domProps: {
          "value": _this.limit
        },
        on: {
          "change": _this.setLimit.bind(_this)
        }
      },
      [perpageValues]
    ) : '';
  };
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dropdownWrapper = __webpack_require__(181);
var dropdownItemWrapper = __webpack_require__(182);

module.exports = function (h) {
    var _this = this;

    return function (classes) {

        var cols = _this.columns.map(function (column) {
            return dropdownItemWrapper(h, classes, h(
                'a',
                { 'class': classes.dropdown.item,
                    attrs: { href: '#'
                    },
                    on: {
                        'click': function click() {
                            return _this.toggleColumn(column);
                        }
                    }
                },
                [h('input', {
                    attrs: { type: 'checkbox',
                        disabled: _this._onlyColumn(column)
                    },
                    domProps: {
                        'value': column,
                        'checked': _this.allColumns.includes(column)
                    }
                }), _this.getHeading(column)]
            ));
        });

        return h(
            'div',
            { ref: 'columnsdropdown', 'class': classes.dropdown.container + ' ' + classes.right + ' VueTables__columns-dropdown' },
            [h(
                'button',
                {
                    attrs: { type: 'button' },
                    'class': classes.button + ' ' + classes.dropdown.trigger,
                    on: {
                        'click': _this._toggleColumnsDropdown.bind(_this)
                    }
                },
                [_this.display('columns'), h(
                    'span',
                    { 'class': classes.icon + ' ' + classes.small },
                    [h('i', { 'class': classes.dropdown.caret })]
                )]
            ), dropdownWrapper.call(_this, h, classes, cols)]
        );
    };
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, classes, columns) {
    if (classes.framework === 'bulma') {
        return h(
            'div',
            { 'class': classes.dropdown.menu, style: this.displayColumnsDropdown ? 'display:block' : 'display:none' },
            [h(
                'div',
                { 'class': classes.dropdown.content },
                [columns]
            )]
        );
    }

    if (classes.framework === 'bootstrap4') {
        return h(
            'div',
            { 'class': classes.dropdown.menu, style: this.displayColumnsDropdown ? 'display:block' : 'display:none' },
            [columns]
        );
    }

    return h(
        'ul',
        { 'class': classes.dropdown.menu, style: this.displayColumnsDropdown ? 'display:block' : 'display:none' },
        [columns]
    );
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, classes, item) {
    if (classes.framework === 'bulma') {
        return item;
    }

    return h('li', [item]);
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    beforeFilters: this.$slots.beforeFilters ? this.$slots.beforeFilters : '',
    afterFilters: this.$slots.afterFilters ? this.$slots.afterFilters : '',
    beforeBody: this.$slots.beforeBody ? this.$slots.beforeBody : '',
    prependBody: this.$slots.prependBody ? this.$slots.prependBody : '',
    appendBody: this.$slots.appendBody ? this.$slots.appendBody : '',
    afterBody: this.$slots.afterBody ? this.$slots.afterBody : '',
    beforeFilter: this.$slots.beforeFilter ? this.$slots.beforeFilter : '',
    afterFilter: this.$slots.afterFilter ? this.$slots.afterFilter : '',
    beforeLimit: this.$slots.beforeLimit ? this.$slots.beforeLimit : '',
    afterLimit: this.$slots.afterLimit ? this.$slots.afterLimit : '',
    beforeTable: this.$slots.beforeTable ? this.$slots.beforeTable : '',
    afterTable: this.$slots.afterTable ? this.$slots.afterTable : ''
  };
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return this.opts.filterByColumn ? JSON.stringify(this.query) : this.query;
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return JSON.stringify(this.customQueries);
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var search = __webpack_require__(27);
var clone = __webpack_require__(189);

module.exports = function () {

  var data = clone(this.tableData);

  var column = this.orderBy.column;

  data = this.search(data);

  if (column) {
    // dummy var to force compilation
    if (this.time) this.time = this.time;

    data = this.opts.sortingAlgorithm.call(this, data, column);
  } else if (this.opts.groupBy) {
    data = this.opts.sortingAlgorithm.call(this, data, this.opts.groupBy);
  }

  if (this.vuex) {
    if (this.count != data.length) this.commit('SET_COUNT', data.length);
  } else {
    this.count = data.length;
  }

  var offset = (this.page - 1) * this.limit;

  this.allFilteredData = JSON.parse(JSON.stringify(data));

  data = data.splice(offset, this.limit);

  return this.applyFilters(data);
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (obj) {
  var count = 0;
  for (var prop in obj) {
    var isDateRange = _typeof(obj[prop]) == 'object';
    if (isDateRange || obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim())) count++;
  }
  return count;
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, customFilters, customQueries) {

  var passing;

  return data.filter(function (row) {

    passing = true;

    customFilters.forEach(function (filter) {
      var value = customQueries[filter.name];
      if (value && !filter.callback(row, value)) passing = false;
    });

    return passing;
  });
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16).Buffer))

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  this.data.forEach(function (row, index) {
    this.opts.dateColumns.forEach(function (column) {
      row[column] = row[column] ? moment(row[column], this.opts.toMomentFormat) : '';
    }.bind(this));
  }.bind(this));
};

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = __webpack_require__(1);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var _this = this;

  var event = 'vue-tables';
  if (this.name) event += '.' + this.name;

  this.opts.customFilters.forEach(function (filter) {
    _bus2.default.$off(event + '.filter::' + filter.name);
    _bus2.default.$on(event + '.filter::' + filter.name, function (value) {
      _this.customQueries[filter.name] = value;
      _this.updateState('customQueries', _this.customQueries);
    });
  });
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column, ascending) {
    var multiIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;


    var sort = this.defaultSort;
    var multiSort = this.userMultiSorting[this.currentlySorting.column] ? this.userMultiSorting[this.currentlySorting.column] : this.opts.multiSorting[this.currentlySorting.column];
    var asc = this.currentlySorting.ascending;
    var self = this;

    return function (a, b) {

        var aVal = self._getValue(a, column) || '';
        var bVal = self._getValue(b, column) || '';
        var dir = ascending ? 1 : -1;
        var secondaryAsc;

        if (typeof aVal === 'string') aVal = aVal.toLowerCase();
        if (typeof bVal === 'string') bVal = bVal.toLowerCase();

        if (aVal === bVal && multiSort && multiSort[multiIndex + 1]) {
            var sortData = multiSort[multiIndex + 1];
            if (typeof sortData.ascending !== 'undefined') {
                secondaryAsc = sortData.ascending;
            } else {
                secondaryAsc = sortData.matchDir ? asc : !asc;
            }

            return sort(sortData.column, secondaryAsc, multiIndex + 1)(a, b);
        }

        return aVal > bVal ? dir : -dir;
    };
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {

    if (this.$scopedSlots && this.$scopedSlots['__group_meta']) {
        var data = this.opts.groupMeta.find(function (val) {
            return val.value === value;
        });

        if (!data) return '';

        return this.$scopedSlots['__group_meta'](data);
    }

    return '';
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

var _data2 = __webpack_require__(21);

var _data3 = _interopRequireDefault(_data2);

var _vuex = __webpack_require__(11);

var _vuex2 = _interopRequireDefault(_vuex);

var _normal = __webpack_require__(12);

var _normal2 = _interopRequireDefault(_normal);

var _table = __webpack_require__(13);

var _table2 = _interopRequireDefault(_table);

var _vuePagination = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = __webpack_require__(22);
var _created = __webpack_require__(23);

var templateCompiler = __webpack_require__(24);

exports.install = function (Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bootstrap3';
  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'default';


  var state = useVuex ? (0, _vuex2.default)('server') : (0, _normal2.default)();

  var server = _merge2.default.recursive(true, (0, _table2.default)(), {
    name: 'server-table',
    components: {
      Pagination: _vuePagination.Pagination
    },
    render: templateCompiler.call(this, template, theme),
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      }
    },
    created: function created() {

      if (!this.opts.requestFunction && !this.url) {
        throw 'vue-tables-3: you must provide either a "url" prop or a custom request function. Aborting';
      }

      _created(this);

      if (!this.vuex) {
        this.query = this.initQuery();
        this.initOrderBy();
        this.customQueries = this.initCustomFilters();
      }

      this.loadState();

      this.getData(true).then(function (response) {

        this.setData(response);

        this.loading = false;

        if (this.hasDateFilters()) {
          setTimeout(function () {
            this.initDateFilters();
          }.bind(this), 0);
        }
      }.bind(this));
    },
    mounted: function mounted() {

      this._setColumnsDropdownCloseListener();

      if (this.vuex) return;

      this.registerServerFilters();

      if (this.options.initialPage) this.setPage(this.options.initialPage, true);
    },
    data: function data() {
      return _merge2.default.recursive(_data(), {
        source: 'server',
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions: globalOptions
      }, (0, _data3.default)(useVuex, 'server', this.options.initialPage));
    },
    methods: {
      refresh: __webpack_require__(195),
      getData: __webpack_require__(196),
      setData: __webpack_require__(197),
      serverSearch: __webpack_require__(14),
      registerServerFilters: __webpack_require__(198),
      loadState: function loadState() {
        var _this = this;

        if (!this.opts.saveState) return;

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.vuex) {
          this.commit('SET_STATE', {
            query: state.query,
            customQueries: state.customQueries,
            page: state.page,
            limit: state.perPage,
            orderBy: state.orderBy
          });
        } else {
          this.page = state.page;
          this.query = state.query;
          this.customQueries = state.customQueries;
          this.limit = state.perPage;
          this.orderBy = state.orderBy;
        }

        if (!this.opts.pagination.dropdown) {
          setTimeout(function () {
            _this.$refs.pagination.Page = state.page;
          }, 0);
        }

        this.activeState = true;
      }
    },
    watch: {
      url: function url() {
        this.refresh();
      }
    },
    computed: {
      totalPages: __webpack_require__(26),
      filteredQuery: __webpack_require__(199),
      hasMultiSort: function hasMultiSort() {
        return this.opts.serverMultiSorting;
      }
    }

  }, state);

  Vue.component('v-server-table', server);

  return server;
};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  this.serverSearch();
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var merge = __webpack_require__(0);

module.exports = function (promiseOnly) {
  var _data;

  var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var emitLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


  var keys = this.opts.requestKeys;

  var data = (_data = {}, _defineProperty(_data, keys.query, this.filteredQuery), _defineProperty(_data, keys.limit, this.limit), _defineProperty(_data, keys.ascending, this.orderBy.ascending ? 1 : 0), _defineProperty(_data, keys.page, this.page), _defineProperty(_data, keys.byColumn, this.opts.filterByColumn ? 1 : 0), _data);

  if (this.orderBy.hasOwnProperty('column') && this.orderBy.column) data[keys.orderBy] = this.orderBy.column;

  data = merge(data, this.opts.params, this.customQueries, additionalData);

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    data.multiSort = this.userMultiSorting[this.orderBy.column];
  }

  data = this.opts.requestAdapter(data);

  if (emitLoading) {
    this.dispatch('loading', data);
  }

  var promise = this.sendRequest(data);

  if (promiseOnly) return promise;

  return promise.then(function (response) {
    return this.setData(response);
  }.bind(this));
};

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (response) {

  var data = this.opts.responseAdapter.call(this, response);

  this.data = this.applyFilters(data.data);

  if (isNaN(data.count)) {
    console.error('vue-tables-3: invalid \'count\' property. Expected number, got ' + _typeof(data.count));
    console.error('count equals', data.count);
    throw new Error();
  }

  this.count = parseInt(data.count);

  setTimeout(function () {
    this.dispatch('loaded', response);
  }.bind(this), 0);
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = __webpack_require__(1);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {

  var event = 'vue-tables';
  if (this.name) event += '.' + this.name;

  this.opts.customFilters.forEach(function (filter) {
    _bus2.default.$off(event + '.filter::' + filter);
    _bus2.default.$on(event + '.filter::' + filter, function (value) {
      this.customQueries[filter] = value;
      this.updateState('customQueries', this.customQueries);
      this.refresh();
    }.bind(this));
  }.bind(this));
};

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function () {

    if (_typeof(this.query) !== 'object' || this.opts.sendEmptyFilters) {
        return this.query;
    }

    var result = {};

    for (var key in this.query) {
        if (this.query[key] !== '') {
            result[key] = this.query[key];
        }
    }

    return result;
};

/***/ })
/******/ ]);
>>>>>>> Fixed things and upgraded packages. Added pagination and afterPagination slot.
