webpackHotUpdate(0,{

/***/ 282:
/*!***************************************************!*\
  !*** ./client/containers/CreateBoardContainer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _CreateBoard = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/CreateBoard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _CreateBoard2 = _interopRequireDefault(_CreateBoard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
		return {
			user: state.user
		};
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
		return {};
	};
	
	var CreateBoardContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CreateBoard2.default);
	
	exports.default = CreateBoardContainer;

/***/ }

})
//# sourceMappingURL=0.f5e5dc27b12fbfac83a6.hot-update.js.map