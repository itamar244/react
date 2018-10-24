/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as Children from './ReactChildren';
import {
  createElement as createElementNormal,
  createFactory as createFactoryNormal,
  cloneElement as cloneElementNormal,
  isValidElement,
} from './ReactElement';
import {
  createElementWithValidation,
  createFactoryWithValidation,
  cloneElementWithValidation,
} from './ReactElementValidator';

export {default as version} from 'shared/ReactVersion';
export {
  REACT_CONCURRENT_MODE_TYPE as unstable_ConcurrentMode,
  REACT_FRAGMENT_TYPE as Fragment,
  REACT_PROFILER_TYPE as unstable_Profiler,
  REACT_STRICT_MODE_TYPE as StrictMode,
  REACT_SUSPENSE_TYPE as Suspense,
} from 'shared/ReactSymbols';

export {Component, PureComponent} from './ReactBaseClasses';
export {createRef} from './ReactCreateRef';
export {createContext} from './ReactContext';
export {lazy} from './ReactLazy';
export {default as forwardRef} from './forwardRef';
export {default as memo} from './memo';
export {default as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED} from './ReactSharedInternals';

export {Children, isValidElement};

export const createElement = __DEV__
  ? createElementWithValidation
  : createElementNormal;
export const cloneElement = __DEV__
  ? cloneElementWithValidation
  : cloneElementNormal;
export const createFactory = __DEV__
  ? createFactoryWithValidation
  : createFactoryNormal;
