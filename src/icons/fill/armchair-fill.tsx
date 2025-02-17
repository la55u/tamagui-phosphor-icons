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
      <_Path d="M40,84.11V72A40,40,0,0,1,80,32h96a40,40,0,0,1,40,40V84.11A3.92,3.92,0,0,1,212,88h0a44.07,44.07,0,0,0-43.26,36H87.26A44.07,44.07,0,0,0,44,88h0A3.92,3.92,0,0,1,40,84.11ZM212,104a28,28,0,0,0-28,28v36a8,8,0,0,1-16,0V140H88v28a8,8,0,0,1-16,0V132a28,28,0,1,0-32,27.71V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V159.71A28,28,0,0,0,212,104Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArmchairFill'

export const ArmchairFill = memo<IconProps>(themed(Icon))
