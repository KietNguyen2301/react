"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _uncontrollable = require("uncontrollable");
var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));
var _ThemeProvider = require("./ThemeProvider");
var _AlertHeading = _interopRequireDefault(require("./AlertHeading"));
var _AlertLink = _interopRequireDefault(require("./AlertLink"));
var _Fade = _interopRequireDefault(require("./Fade"));
var _CloseButton = _interopRequireDefault(require("./CloseButton"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Alert = /*#__PURE__*/React.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show = true,
    closeLabel = 'Close alert',
    closeVariant,
    className,
    children,
    variant = 'primary',
    onClose,
    dismissible,
    transition = _Fade.default,
    ...props
  } = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
    show: 'onClose'
  });
  const prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'alert');
  const handleClose = (0, _useEventCallback.default)(e => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? _Fade.default : transition;
  const alert = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "alert",
    ...(!Transition ? props : undefined),
    ref: ref,
    className: (0, _classnames.default)(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CloseButton.default, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Transition, {
    unmountOnExit: true,
    ...props,
    ref: undefined,
    in: show,
    children: alert
  });
});
Alert.displayName = 'Alert';
var _default = Object.assign(Alert, {
  Link: _AlertLink.default,
  Heading: _AlertHeading.default
});
exports.default = _default;
module.exports = exports.default;