webpackHotUpdate(0,{

/***/ 578:
/*!***********************************************!*\
  !*** ./client/containers/SidebarContainer.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _Sidebar = __webpack_require__(/*! ../components/Sidebar */ 579);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _navbar = __webpack_require__(/*! ../actions/navbar */ 580);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    sidebarToggle: state.nav.sidebarToggle
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {};
	};
	
	var SC = function (_Component) {
	  _inherits(SC, _Component);
	
	  function SC(props) {
	    _classCallCheck(this, SC);
	
	    var _this = _possibleConstructorReturn(this, (SC.__proto__ || Object.getPrototypeOf(SC)).call(this, props));
	
	    _this.state = {
	      boardTemplateToggle: false,
	      sidebarToggle: false
	    };
	    return _this;
	  }
	
	  _createClass(SC, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Sidebar2.default, {
	        boardTemplateToggle: this.state.boardTemplateToggle,
	        sidebarToggle: this.state.sidebarToggle,
	        toggleClick: this.toggleClick
	      });
	    }
	  }]);
	
	  return SC;
	}(_react.Component);
	
	var SidebarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SC);
	
	exports.default = SidebarContainer;

/***/ }

})
//# sourceMappingURL=0.4a8c5fa82051387a8477.hot-update.js.map