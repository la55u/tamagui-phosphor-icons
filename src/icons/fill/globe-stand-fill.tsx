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
      <_Path d="M48,96a80,80,0,1,1,80,80A80.09,80.09,0,0,1,48,96Zm146.46,69.28A96,96,0,0,1,58.72,29.54,8,8,0,1,0,47.18,18.46,112,112,0,0,0,120,207.71V224H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V207.72a111.21,111.21,0,0,0,69.54-30.9,8,8,0,1,0-11.08-11.54Z" />
    </_Svg>
  )
}

Icon.displayName = 'GlobeStandFill'

export const GlobeStandFill = memo<IconProps>(themed(Icon))
