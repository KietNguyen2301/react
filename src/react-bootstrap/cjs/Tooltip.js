"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _ThemeProvider = require("./ThemeProvider");
var _helpers = require("./helpers");
var _getInitialPopperStyles = _interopRequireDefault(require("./getInitialPopperStyles"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Tooltip = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  placement = 'right',
  className,
  style,
  children,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tooltip');
  const isRTL = (0, _ThemeProvider.useIsRTL)();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = (0, _helpers.getOverlayDirection)(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...(0, _getInitialPopperStyles.default)(popper == null ? void 0 : popper.strategy)
    };
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: ref,
    style: computedStyle,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: (0, _classnames.default)(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: `${bsPrefix}-inner`,
      children: children
    })]
  });
});
Tooltip.displayName = 'Tooltip';
var _default = Object.assign(Tooltip, {
  // Default tooltip offset.
  // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
  TOOLTIP_OFFSET: [0, 6]
});
exports.default = _default;
module.exports = exports.default;