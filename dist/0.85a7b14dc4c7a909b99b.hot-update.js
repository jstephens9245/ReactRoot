webpackHotUpdate(0,{

/***/ 9:
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./client/styles/main.scss ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Comfortaa);", ""]);
	
	// module
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\nbody {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  position: relative;\n  box-sizing: inherit; }\n\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n.o-aspect-ratio, .c-color-picker {\n  display: block; }\n\n.o-aspect-ratio__inner, .c-color-picker__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.o-aspect-ratio--sq, .c-color-picker {\n  padding: 100% 0 0 0; }\n\n.o-aspect-ratio--2-1 {\n  padding: 50% 0 0 0; }\n\n.o-aspect-ratio--1-2 {\n  padding: 200% 0 0 0; }\n\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.btn-color {\n  width: 5em;\n  height: 3em;\n  box-sizing: border-box;\n  border: 0.5em solid #ffffff;\n  box-shadow: 0 0 0.2em 0 #363636; }\n\n.navbar {\n  border-bottom: 1px solid black;\n  margin-bottom: 0; }\n\n.navbar a {\n  color: black; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.navClass {\n  top: -100%;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n.navToggle {\n  top: 0; }\n\n@media screen and (min-width: 768px) {\n  .navbarGearIcon {\n    display: none; } }\n\n.trashcan_img {\n  max-height: 5rem;\n  max-width: 5rem; }\n\n.homepage-container {\n  overflow: hidden;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif; }\n\n.homepage-main-image-container {\n  position: relative; }\n\n.homepage-main-image {\n  width: 100vw;\n  max-width: 100%; }\n\n.main-slogan {\n  position: absolute;\n  top: 10%;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\n.main-mini-desc {\n  position: absolute;\n  top: 20%;\n  font-style: italic;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.main-signup-button-container {\n  position: absolute;\n  top: 40%;\n  font-size: 1.8rem;\n  width: 100%;\n  text-align: center; }\n\n.main-signup-button {\n  width: 80%;\n  border-radius: 500px;\n  background-color: #FFFFA5;\n  color: #333333;\n  font-weight: bold;\n  font-family: \"Permanent Marker\";\n  border: none;\n  padding: 1.5rem 3rem;\n  cursor: pointer; }\n\n.main-signup-button:hover {\n  background-color: #333333;\n  color: #FFFFA5; }\n\n.postit-view {\n  position: absolute;\n  top: 70%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: \"Caveat Brush\"; }\n\n.bulb-img {\n  width: 100%;\n  vertical-align: top; }\n\n.postit {\n  box-sizing: border-box;\n  margin: 0.2em;\n  min-width: 3.9rem;\n  max-width: 3.9rem;\n  height: 3.9rem;\n  padding: 0.1em;\n  border: 1px solid #E8E8E8;\n  font-size: 1.8rem;\n  text-align: center;\n  border-bottom-right-radius: 60px 5px;\n  vertical-align: middle; }\n\n.postit:nth-child(even) {\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg); }\n\n.postit:nth-child(odd) {\n  -webkit-transform: rotate(-4deg);\n  -moz-transform: rotate(-4deg); }\n\n.yellow {\n  background: -webkit-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); }\n\n.lightyellow {\n  background: -webkit-linear-gradient(315deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%); }\n\n.pink {\n  background: -webkit-linear-gradient(315deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%);\n  background: linear-gradient(135deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%); }\n\n.green {\n  background: -webkit-linear-gradient(315deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%); }\n\n.blue {\n  background: -webkit-linear-gradient(315deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%);\n  background: linear-gradient(135deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%); }\n\n.brightgreen {\n  background: -webkit-linear-gradient(315deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%); }\n\n.border-line {\n  width: 90%;\n  border-bottom: 2px solid #7e8890;\n  margin: 0 auto;\n  margin-top: 3em; }\n\n.desc-container {\n  color: #333c4e; }\n\n.left-desc {\n  width: 100%;\n  padding: 0.8em;\n  line-height: 1.5em; }\n\n.left-desc-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.left-desc-content {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  color: #7e8890;\n  font-size: 1rem; }\n\n.right-desc {\n  width: 100%; }\n  .right-desc img {\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.right-desc-img {\n  width: 100%; }\n\n.team-desc {\n  display: none; }\n\n@media screen and (min-device-width: 414px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-signup-button {\n    width: 90%;\n    font-size: 1.9rem; }\n  .postit {\n    min-width: 5rem;\n    max-width: 5rem;\n    height: 5rem;\n    font-size: 3rem; } }\n\n@media screen and (min-device-width: 768px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    top: 40%;\n    font-size: 2rem;\n    font-weight: normal; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 60%;\n    font-size: 2.5rem; }\n  .postit {\n    min-width: 7rem;\n    max-width: 7rem;\n    height: 7rem;\n    font-size: 3em; }\n  .desc-container {\n    color: #333c4e;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 60rem; }\n  .left-desc {\n    width: 50%;\n    padding: 2em 5em;\n    line-height: 3em;\n    height: 28.8rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .left-desc-title {\n    text-align: left;\n    font-weight: 300;\n    font-size: 2rem; }\n  .left-desc-content {\n    width: 100%;\n    text-align: left;\n    font-weight: 300;\n    color: #7e8890;\n    font-size: 1.5rem; }\n  .right-desc {\n    width: 50%;\n    padding: 2em 5em; }\n  .right-desc-img {\n    width: 100%; }\n  .team-desc {\n    display: block;\n    position: fixed;\n    bottom: 0%;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    font-weight: 300;\n    text-align: center;\n    height: 4em;\n    line-height: 4em;\n    letter-spacing: 0.2rem; } }\n\n@media screen and (min-device-width: 1024px) {\n  .homepage-main-image {\n    margin: -11rem 0 -10rem 0; }\n  .main-slogan {\n    top: 30%;\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 2rem;\n    font-weight: 300; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 30%;\n    font-size: 2.5rem; }\n  .left-desc {\n    height: 40rem; }\n  .border-line {\n    margin-top: 15rem; }\n  /* typist css */\n  .Typist .Cursor--blinking {\n    opacity: 1;\n    -webkit-animation: blink 1s linear infinite;\n            animation: blink 1s linear infinite; }\n  @-webkit-keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } } }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.screen {\n  height: 80vh;\n  width: 100%;\n  border: thin solid black;\n  background-color: #ffffff;\n  padding-bottom: 10%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\n.grid {\n  background-color: #EF2D29; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.signup-form-container {\n  font-family: \"Open Sans\", sans-serif;\n  width: 90vw;\n  height: 65vh;\n  min-height: 28em;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 2em;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n  border-bottom-right-radius: 60px 10px;\n  border-bottom-left-radius: 60px 10px; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 2em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 1em; }\n\n.signup-input-field {\n  width: 80%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-disclaimer-container {\n  font-size: 0.65em;\n  width: 80%;\n  margin: 0 auto; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.login-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n@media screen and (min-device-width: 768px) {\n  .signup-form-container {\n    width: 40vw;\n    height: 50vh;\n    background-color: #fff;\n    margin: 0 auto;\n    margin-top: 2em;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); } }\n\n.slideIn-appear {\n  margin-top: -500px; }\n\n.slideIn-appear.slideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top .5s ease-in;\n  transition: margin-top .5s ease-in; }\n\n.c-note {\n  display: block;\n  background: #edd00d;\n  padding-top: 100%; }\n\n.c-note--focused {\n  box-shadow: 0.1em 0.1em 1em 0 #8c7b08; }\n\n.c-note__inner {\n  display: block;\n  position: absolute;\n  width: calc(100% - 2em);\n  top: 1em;\n  right: 1em;\n  bottom: 1vw;\n  left: 1em;\n  overflow: hidden;\n  border-bottom: solid transparent; }\n\n.c-note__content {\n  display: block;\n  font-size: inherit;\n  word-wrap: break-word;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.c-note__input {\n  position: absolute;\n  left: -200vw;\n  top: -200vh; }\n\n.top {\n  z-index: 2;\n  position: relative; }\n\n.bottom {\n  z-index: 1;\n  position: relative; }\n\n/*!\n * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\n * Code licensed under the Apache License v2.0.\n * For details, see http://www.apache.org/licenses/LICENSE-2.0.\n */\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled {\n  padding-left: 250px; }\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px; }\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px; }\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px; }\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 250px; }\n  #wrapper.toggled {\n    padding-left: 0; }\n  #sidebar-wrapper {\n    width: 250px; }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 0; }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative; }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0; } }\n\n.ion-gear-b {\n  border: none;\n  background: white;\n  -webkit-appearance: none; }\n\n.c-color-picker {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  background: #E6E6EF;\n  border-radius: 0.4em;\n  box-shadow: 0 0 0.5em 0 #363636; }\n\n.c-color-picker__wrapper--modal {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  margin: 0 auto;\n  background: #ffffff; }\n  .c-color-picker__wrapper--modal .c-color-picker {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 80%;\n    padding-top: 80%; }\n\n.c-color-picker__sample {\n  display: block;\n  width: 100%;\n  padding-top: 5%; }\n\n.c-color-picker__saturation {\n  cursor: pointer;\n  padding-top: 30%; }\n\n.c-color-picker__hue {\n  cursor: pointer;\n  padding-top: 10%; }\n\n.c-color-picker__presets {\n  margin-top: 1em; }\n  .c-color-picker__presets::after {\n    content: '';\n    display: block;\n    clear: both; }\n\n.c-color-picker__preset {\n  float: left;\n  width: 13.7%;\n  margin: 1% 3%;\n  padding-top: 13.6%;\n  cursor: pointer;\n  border-radius: 10%; }\n\n.participants-container {\n  display: none; }\n\n.participant-number-container {\n  text-align: center;\n  padding: 0.8em 0;\n  border-bottom: 2px solid black;\n  font-size: 1.5rem; }\n\n.participant-number i {\n  margin: 0 0.6em; }\n\n.participant-list-container {\n  margin: 0.6em;\n  height: 100%; }\n\n.participant-list {\n  list-style-type: none;\n  padding: 0;\n  text-align: left; }\n\n.participant-item {\n  margin: 0.4em 0; }\n\n.participant-image {\n  background: #3a3f41;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n  display: inline-block;\n  color: #fff;\n  vertical-align: middle;\n  position: relative; }\n\n.participant {\n  margin: 0 1em;\n  text-align: left;\n  display: inline-block;\n  height: 4rem;\n  line-height: 4rem;\n  vertical-align: middle; }\n\n.participant-icon {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n  left: 32%; }\n\n@media screen and (min-device-width: 1281px) {\n  .participants-container {\n    position: fixed;\n    width: 15vw;\n    height: 100vh;\n    float: right;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n    display: block;\n    top: 0%;\n    z-index: 1000;\n    background: #fff;\n    margin-top: 3.7em;\n    transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -webkit-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -moz-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05); }\n  .participants-container-show {\n    right: 0%; }\n  .participants-container-hide {\n    right: -14.5%; } }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n.ctrl-centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);
	
	// exports


/***/ },

/***/ 367:
/*!*********************************************!*\
  !*** ./client/containers/BoardContainer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 233);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _CustomDragLayerContainer = __webpack_require__(/*! ./CustomDragLayerContainer */ 368);
	
	var _CustomDragLayerContainer2 = _interopRequireDefault(_CustomDragLayerContainer);
	
	var _ParticipantsContainer = __webpack_require__(/*! ./ParticipantsContainer */ 577);
	
	var _ParticipantsContainer2 = _interopRequireDefault(_ParticipantsContainer);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 551);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BoardContainer = function (_Component) {
	  _inherits(BoardContainer, _Component);
	
	  function BoardContainer() {
	    _classCallCheck(this, BoardContainer);
	
	    return _possibleConstructorReturn(this, (BoardContainer.__proto__ || Object.getPrototypeOf(BoardContainer)).apply(this, arguments));
	  }
	
	  _createClass(BoardContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          dispatch = _props.dispatch,
	          board = _props.board,
	          notes = _props.notes;
	
	      var boardId = board.id;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-xs-12', key: this.props.board.id },
	        _react2.default.createElement(
	          'span',
	          { className: 'text-center' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            this.props.board.name
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'http://localhost:3030/note?=',
	            this.props.board.hash
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'screen col-xs-12' },
	            _react2.default.createElement(_CustomDragLayerContainer2.default, this.props)
	          )
	        ),
	        _react2.default.createElement(_ParticipantsContainer2.default, null)
	      );
	    }
	  }]);
	
	  return BoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    board: state.board.selectedBoard,
	    notes: state.noteReducer.all };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ socketConnect: _socketio.socketConnect, socketDisconnect: _socketio.socketDisconnect, clearSocketListeners: _socketio.clearSocketListeners }, dispatch);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

/***/ },

/***/ 577:
/*!****************************************************!*\
  !*** ./client/containers/ParticipantsContainer.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ParticipantsContainer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 551);
	
	var _Participants = __webpack_require__(/*! ../components/Participants */ 578);
	
	var _Participants2 = _interopRequireDefault(_Participants);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 569);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ParticipantsContainer = exports.ParticipantsContainer = function (_Component) {
	  _inherits(ParticipantsContainer, _Component);
	
	  function ParticipantsContainer(props) {
	    _classCallCheck(this, ParticipantsContainer);
	
	    var _this = _possibleConstructorReturn(this, (ParticipantsContainer.__proto__ || Object.getPrototypeOf(ParticipantsContainer)).call(this, props));
	
	    _this.state = {
	      totalParticipants: 0,
	      participants: [],
	      display: false
	    };
	
	    _this.connect = _this.connect.bind(_this);
	    _this.disconnect = _this.disconnect.bind(_this);
	    _this.joined = _this.joined.bind(_this);
	    _this.getRoomHash = _this.joined.bind(_this);
	    _this.toggleParticipantsMenu = _this.toggleParticipantsMenu.bind(_this);
	    return _this;
	  }
	
	  _createClass(ParticipantsContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.socketConnect('board');
	      this.props.addSocketListener('connect', this.connect);
	      this.props.addSocketListener('disconnect', this.disconnect);
	      this.props.addSocketListener('joined', this.joined);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.socketEmit('leave', {
	        room: (0, _stringHash.genShortHash)(this.props.selectedBoard.id) });
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	    }
	  }, {
	    key: 'connect',
	    value: function connect() {
	      this.setState({ status: 'connected' });
	
	      if (false) {
	        _reactRouter.browserHistory.push('/signup');
	      } else if (this.props.selectedBoard && !(0, _isEmpty2.default)(this.props.selectedBoard)) {
	        this.props.socketEmit('join', {
	          room: (0, _stringHash.genShortHash)(this.props.selectedBoard.id),
	          name: this.props.loggedInUser.first_name + ' ' + this.props.loggedInUser.last_name
	        });
	      }
	    }
	  }, {
	    key: 'disconnect',
	    value: function disconnect() {
	      this.setState({ status: 'disconnected' });
	    }
	  }, {
	    key: 'joined',
	    value: function joined(_ref) {
	      var participants = _ref.participants,
	          totalParticipants = _ref.totalParticipants;
	
	      this.setState({ participants: participants });
	      this.setState({ totalParticipants: totalParticipants });
	    }
	  }, {
	    key: 'toggleParticipantsMenu',
	    value: function toggleParticipantsMenu() {
	      this.setState({ display: !this.state.display });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Participants2.default, {
	        className: 'participants-wrapper',
	        totalParticipants: this.state.totalParticipants,
	        participants: this.state.participants,
	        display: this.state.display,
	        toggleParticipantsMenu: this.toggleParticipantsMenu });
	    }
	  }]);
	
	  return ParticipantsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    loggedInUser: state.userReducer.loggedInUser,
	    socket: state.socket,
	    selectedBoard: state.board.selectedBoard
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    addSocketListener: function addSocketListener(eventName, method) {
	      dispatch((0, _socketio.addSocketListener)(eventName, method));
	    },
	    clearSocketListeners: function clearSocketListeners(eventName, method) {
	      dispatch((0, _socketio.clearSocketListeners)(eventName, method));
	    },
	    socketEmit: function socketEmit(eventName, payload) {
	      dispatch((0, _socketio.socketEmit)(eventName, payload));
	    },
	    socketConnect: function socketConnect(namespace) {
	      dispatch((0, _socketio.socketConnect)(namespace));
	    },
	    socketDisconnect: function socketDisconnect() {
	      dispatch((0, _socketio.socketDisconnect)());
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ParticipantsContainer);

/***/ },

/***/ 582:
/*!**************************************************!*\
  !*** ./client/containers/UserBoardsContainer.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserBoardsContainer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 500);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _board = __webpack_require__(/*! ../actions/board */ 583);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserBoardsContainer = exports.UserBoardsContainer = function (_Component) {
	  _inherits(UserBoardsContainer, _Component);
	
	  function UserBoardsContainer() {
	    _classCallCheck(this, UserBoardsContainer);
	
	    return _possibleConstructorReturn(this, (UserBoardsContainer.__proto__ || Object.getPrototypeOf(UserBoardsContainer)).apply(this, arguments));
	  }
	
	  _createClass(UserBoardsContainer, [{
	    key: 'render',
	    value: function render() {
	      var boardId = this.props.board.id;
	      var boardIdNotes = this.props.notes;
	
	      return _react2.default.createElement(
	        'div',
	        { style: {
	            // width   : 400,
	            height: 200,
	            position: 'relative' } },
	        boardIdNotes.length ? boardIdNotes.map(function (note) {
	          var left = note.left,
	              top = note.top;
	
	          return _react2.default.createElement(_NoteWrapper2.default, {
	            key: note.id,
	            id: note.id,
	            left: left / 5,
	            top: top / 5,
	            note: note,
	            height: 40,
	            width: 40
	          });
	        }) : null
	      );
	    }
	  }]);
	
	  return UserBoardsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    notes: state.noteReducer.all.filter(function (note) {
	      return ownProps.board.id === note.board_id;
	    }),
	    board: ownProps.board
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserBoardsContainer);

/***/ },

/***/ 762:
/*!************************************!*\
  !*** ./client/components/Index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDndTouchBackend = __webpack_require__(/*! react-dnd-touch-backend */ 763);
	
	var _reactDndTouchBackend2 = _interopRequireDefault(_reactDndTouchBackend);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 369);
	
	var _SidebarContainer = __webpack_require__(/*! ../containers/SidebarContainer */ 764);
	
	var _SidebarContainer2 = _interopRequireDefault(_SidebarContainer);
	
	var _NavbarContainer = __webpack_require__(/*! ../containers/NavbarContainer */ 767);
	
	var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_NavbarContainer2.default, null),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement('div', { className: 'col-lg-2' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-lg-8 col-lg-offset-1' },
	        props.children && _react2.default.cloneElement(props.children, props)
	      )
	    )
	  );
	};
	
	exports.default = (0, _reactDnd.DragDropContext)((0, _reactDndTouchBackend2.default)({ enableMouseEvents: true }))(Index);

/***/ }

})
//# sourceMappingURL=0.85a7b14dc4c7a909b99b.hot-update.js.map