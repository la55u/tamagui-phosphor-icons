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
      <_Path d="M96,113.89,107.06,136H84.94ZM232,56V216a8,8,0,0,1-11.58,7.16L192,208.94l-28.42,14.22a8,8,0,0,1-7.16,0L128,208.94,99.58,223.16a8,8,0,0,1-7.16,0L64,208.94,35.58,223.16A8,8,0,0,1,24,216V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM135.16,156.42l-32-64a8,8,0,0,0-14.32,0l-32,64a8,8,0,0,0,14.32,7.16L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16ZM208,128a8,8,0,0,0-8-8H184V104a8,8,0,0,0-16,0v16H152a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V136h16A8,8,0,0,0,208,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'ExamFill'

export const ExamFill = memo<IconProps>(themed(Icon))
