"use client";

import * as React from 'react';
import classNames from 'classnames';
import { useBootstrapPrefix } from './ThemeProvider';
import { jsx as _jsx } from "react/jsx-runtime";
const FormFloating = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
FormFloating.displayName = 'FormFloating';
export default FormFloating;