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
      <_Path d="M231.79,187.33A80,80,0,0,0,169.57,72.59,80,80,0,1,0,24.21,139.33l-7.66,26.82a14,14,0,0,0,17.3,17.3l26.82-7.66a80.15,80.15,0,0,0,25.75,7.63,80,80,0,0,0,108.91,40.37l26.82,7.66a14,14,0,0,0,17.3-17.3Zm-16.26,1.34,7.55,26.41-26.41-7.55a8,8,0,0,0-6,.68,64.06,64.06,0,0,1-86.32-24.64A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.51,92.93A8,8,0,0,0,215.53,188.67Z" />
    </_Svg>
  )
}

Icon.displayName = 'ChatsCircleFill'

export const ChatsCircleFill = memo<IconProps>(themed(Icon))
