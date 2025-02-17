import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Circle as _Circle,
  Defs as _Defs,
  Ellipse as _Ellipse,
  G as _G,
  Line as _Line,
  LinearGradient as _LinearGradient,
  Path as _Path,
  Polygon as _Polygon,
  Polyline as _Polyline,
  RadialGradient as _RadialGradient,
  Rect as _Rect,
  Stop as _Stop,
  Svg as _Svg,
  Symbol as _Symbol,
  Text as _Text,
  Use as _Use,
} from 'react-native-svg'

import { themed } from '../../themed'
import { IconProps } from '../icons/IconProps'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg
      viewBox="0 0 256 256"
      {...otherProps}
      height={size}
      width={size}
      fill={`${color}`}
    >
      <_Rect width="256" height="256" fill="none" />
      <_Path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66l20.58-20.58C169.92,58.85,151.17,48,128,48,91.73,48,69.87,69.44,69.66,69.66A8,8,0,0,1,58.34,58.34C59.42,57.27,85.18,32,128,32c23.36,0,46.13,9.1,66.28,26.41l16.06-16.07A8,8,0,0,1,224,48ZM186.34,186.34c-.21.22-22.07,21.66-58.34,21.66-23.17,0-41.92-10.85-54.92-21.76l20.58-20.58A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66l16.06-16.07C81.87,214.9,104.64,224,128,224c42.82,0,68.58-25.27,69.66-26.34a8,8,0,0,0-11.32-11.32Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowsClockwiseFill'

export const ArrowsClockwiseFill = memo<IconProps>(themed(Icon))
