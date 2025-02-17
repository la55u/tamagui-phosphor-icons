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
      <_Path d="M235.39,84.07l-28.15,24,8.43,35.73a13.09,13.09,0,0,1-5,13.58,13.25,13.25,0,0,1-14.63.7l-32-19-32,19a13.25,13.25,0,0,1-14.63-.7,13.1,13.1,0,0,1-5-13.58l8.43-35.73-28.16-24A13.13,13.13,0,0,1,100.1,61l37.23-3.15L151.85,24a13.24,13.24,0,0,1,24.31,0l14.52,33.87L227.9,61a13.12,13.12,0,0,1,7.49,23.06ZM85.66,114.34a8,8,0,0,0-11.32,0l-56,56a8,8,0,0,0,11.32,11.32l56-56A8,8,0,0,0,85.66,114.34Zm16,56a8,8,0,0,0-11.32,0l-56,56a8,8,0,0,0,11.32,11.32l56-56A8,8,0,0,0,101.66,170.34Zm60.69,0-56,56a8,8,0,0,0,11.32,11.32l56-56a8,8,0,0,0-11.31-11.32Z" />
    </_Svg>
  )
}

Icon.displayName = 'ShootingStarFill'

export const ShootingStarFill = memo<IconProps>(themed(Icon))
