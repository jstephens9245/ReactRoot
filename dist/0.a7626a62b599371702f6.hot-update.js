webpackHotUpdate(0,{

/***/ 281:
/*!*************************************!*\
  !*** ./client/components/Navbar.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Navbar = function Navbar(props) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'nav',
				{ className: 'navbar navbar-inverse navbar-static-top', role: 'navigation' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'navbar-header' },
						_react2.default.createElement(
							'button',
							{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'true', 'aria-controls': 'navbar' },
							_react2.default.createElement(
								'span',
								{ className: 'sr-only' },
								'Toggle navigation'
							),
							_react2.default.createElement('span', { className: 'icon-bar' }),
							_react2.default.createElement('span', { className: 'icon-bar' }),
							_react2.default.createElement('span', { className: 'icon-bar' })
						)
					),
					_react2.default.createElement(
						'div',
						_defineProperty({ id: 'navbar', className: 'navbar-collapse collapse in' }, 'id', 'bs-example-navbar-collapse-1'),
						_react2.default.createElement(
							'ul',
							{ className: 'nav navbar-nav' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'a',
									{ href: '/' },
									'Home'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'a',
									{ href: '/' },
									'About'
								)
							)
						)
					)
				)
			)
		);
	};
	exports.default = Navbar;

/***/ }

})
//# sourceMappingURL=0.a7626a62b599371702f6.hot-update.js.map