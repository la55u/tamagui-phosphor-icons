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
      <_Path d="M168.06,75.94a12,12,0,1,1-12-12A12,12,0,0,1,168.06,75.94Zm39.87,81c-20.76,26.37-53.85,40.74-98.41,42.77l-22,51.42A8,8,0,0,1,80.13,256l-.51,0a8,8,0,0,1-7.19-5.78L57.62,198.37,5.8,183.53a8,8,0,0,1-1-15.05l51.43-22c2-44.57,16.41-77.66,42.79-98.41,43.21-34,104.91-22.83,116.84-20.25a16,16,0,0,1,12.26,12.26C230.76,52,241.94,113.76,207.93,157Zm4.6-113.49c-10.71-2.32-66-12.39-103.57,17.18A80.9,80.9,0,0,0,96.13,73.32a36,36,0,0,0,39.36,38.47,8,8,0,0,1,8.72,8.72,36,36,0,0,0,38.49,39.36,80.64,80.64,0,0,0,12.65-12.81C224.92,109.49,214.85,54.18,212.53,43.47Z" />
    </_Svg>
  )
}

Icon.displayName = 'FishFill'

export const FishFill = memo<IconProps>(themed(Icon))
