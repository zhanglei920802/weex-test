// { "framework": "Vue"} 

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\awesome-project\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3406165a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "backgroundColor": "#F5F5F5"
  },
  "floor": {
    "marginBottom": "15",
    "backgroundColor": "#FFFFFF"
  },
  "title": {
    "fontSize": "40",
    "textAlign": "center",
    "paddingTop": "35",
    "paddingBottom": "25"
  },
  "desc": {
    "lines": 2,
    "color": "#999999",
    "fontSize": "30",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "image-section": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "20"
  },
  "image": {
    "width": "800",
    "height": "800"
  },
  "comment": {
    "color": "#52bfe6",
    "fontSize": "32",
    "textAlign": "right",
    "paddingRight": "50",
    "marginTop": "25",
    "marginBottom": "20"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

var dataset = ["http://f12.baidu.com/it/u=2661567341,837532549&fm=72", "http://f11.baidu.com/it/u=2040953427,2540893113&fm=72", "http://img4.imgtn.bdimg.com/it/u=1665207864,746409922&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=98013154,1220740613&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=3014892180,449401099&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3565185884,2248353566&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3387604187,1975332677&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2293301641,2299712276&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2731130380,1370996372&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=1327201233,3155965882&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1837408469,3117811683&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1805227779,612962393&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=635704053,1460945271&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1848984829,2212207435&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=426595056,3152484396&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=973931041,1439083005&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=1676381918,4104479558&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2587046710,615424435&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2661055612,1771836516&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2113456265,3087231249&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=2511100503,501373762&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2043305675,3979419376&fm=200&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3817831153,1208367360&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2476735148,3942852702&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2903519743,1599025789&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=25607590,2670701718&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3734095846,3009742410&fm=200&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=12892867,3769007656&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=511769507,3839834658&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=613337516,2383193070&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1070639764,2476761727&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1776751002,2239493494&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3169300040,1868474930&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2485556866,1040383057&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1159386606,974071300&fm=200&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=428549871,4004515111&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=3020363501,2556804754&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2831971532,2628550146&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=528726796,1166721206&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3454737647,4030834292&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=785168405,1618349646&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=399118516,1470088676&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2377831296,2829820506&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3765646207,3433470061&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=913670472,1974972123&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=239103271,57473868&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=266745161,658804068&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3725075326,306785646&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=1620464803,2737906254&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=331572712,759561753&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=3800620228,1045885064&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2830050197,906753887&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=4084186690,1418917382&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=2721859087,2474842230&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1913075245,624333735&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=215280212,1447766602&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2021033896,2206286168&fm=200&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=145120150,2955608145&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3612945739,551576333&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=3147963129,3658320987&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3757535761,1361544363&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3792213609,1894730467&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=476997803,3399648711&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=212297457,1410173076&fm=200&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3955217826,2041232644&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2551085345,2321064520&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=950771854,530317119&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=718984817,420355692&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2585662342,915866491&fm=200&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=52012746,2788855913&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=1731289026,1820369445&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3406930813,1505021094&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2221141123,2209835861&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2471258591,1536588225&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=1199578130,2250283762&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2249195933,1641983106&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=4063893668,3154339931&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=934655643,3695220288&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1830359176,654163576&fm=200&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=775213009,2342605160&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1561000227,838375663&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3907304162,40948652&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=344937781,3308213955&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1386202289,2630401461&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2989467763,1882889397&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2244213614,2504869820&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1234067747,918256887&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2451195931,1950322973&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=297766146,972316190&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=3915738658,2729894341&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3740387432,3833143475&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=3655969545,3662282967&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3110094567,1509314476&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=3755569129,1205422522&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2598302518,4005171176&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=1087739149,2478931224&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=234158733,266212988&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=1613369776,3707021913&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=1775808145,4150969167&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=1439351280,466388967&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=430419632,3111613628&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=1801780095,2530900124&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=223081846,1488786902&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=282901204,1919086271&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=306298440,2426744544&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3007509172,2210146860&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=2552919264,3016693621&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=126075903,1678557847&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=410073894,636782090&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=3438014993,3412842102&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=827973836,2552555195&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=4127236884,2055119776&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2691948538,3074122458&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1635040708,3816840562&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=998961392,2679758312&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1114364787,146279090&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3878125299,1286004269&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=2422677321,1320464292&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1798306657,37311304&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3780666674,2788286951&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=164688397,3075176879&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=2251509186,4168222555&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=1182725857,395391443&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2875044496,690135780&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2166739356,2338652421&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2873140164,2363278784&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=4153335319,629689038&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2528888639,1230901553&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3718787475,2276664493&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=255763202,11000479&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=612572670,551799757&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3710769859,2287159410&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=673705309,204913383&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=1442929374,874732621&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=32909612,1700584317&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2686060258,4085432880&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3141880112,2742178332&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=963584811,1533868930&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3854045392,3759475215&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=3788914237,601380286&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=1619565115,2713981497&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1249348092,1412907035&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3334865724,496541316&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2980343196,3393518034&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1974357449,4155234904&fm=200&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2298574839,1195378447&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3636988380,4148941804&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1675294266,1925353415&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=3896991415,2655543178&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=276082286,88275310&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=699105693,866957547&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=347053305,372800094&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2335306679,3823818525&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2230054552,4198360814&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=978126910,4283625386&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3989817356,1389761678&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3959046900,1396942340&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=24891318,2882117068&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1196104146,4010244297&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2126575794,297752086&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3831931901,2549212929&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=201479574,3885060287&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1205424623,1184216547&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3137230302,3389117326&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=3278832849,3997171782&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3001843822,3183063268&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=3892625170,776131515&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1864235153,2344073721&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=4119048310,830281087&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=1031290294,420826013&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2076175135,2099810317&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=3374356001,1768990768&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=3192960209,2610411018&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3989918506,2172134076&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1275182080,3739242725&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=322300516,2480027651&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=1561984392,38013299&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=971327017,1453920304&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=3543045664,4155516251&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2642285910,1203593348&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=3813022351,527507416&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=1044052603,2399301348&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=1206238050,4286111171&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3232576286,3538645878&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2952015519,1366237961&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=3199245663,4276880729&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2457886704,3018679990&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=300634809,2185827033&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3136040584,1219842210&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1878881832,3693701918&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3778423085,3211510421&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=4110518665,204467751&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1416582191,2071416639&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=2216707566,3434196485&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=1964683736,2575457583&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=2666280125,2732637048&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3682802722,3639156972&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=918738661,1036578696&fm=27&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=1876024375,3295096030&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3200582827,4117839675&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=1444327093,3282554499&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=4123078759,96989005&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=4267320336,543654192&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=991282511,209537153&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=742602374,225006590&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=1112244923,912424342&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=3285028558,2260648296&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=606556634,1012412134&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=1058590951,3360930413&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=2478536738,2750288220&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=3669566317,2324400662&fm=27&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=2496357203,3422250710&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=86004972,1816246412&fm=27&gp=0.jpg"];

exports.default = {
  data: function data() {
    var N = 10;
    var floors = [];
    while (N--) {
      floors.push.apply(floors, dataset);
    }
    return { floors: floors };
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.floors), function(item, i) {
    return _c('cell', {
      key: i,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": item,
        "resize": "stretch"
      }
    })])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map