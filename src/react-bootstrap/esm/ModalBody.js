"use client";

import * as React from 'react';
import classNames from 'classnames';
import { useBootstrapPrefix } from './ThemeProvider';
import { jsx as _jsx } from "react/jsx-runtime";
const ModalBody = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-body');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
ModalBody.displayName = 'ModalBody';
export default ModalBody;