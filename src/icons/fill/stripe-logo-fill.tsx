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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184c-22.06,0-40-14.35-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16s24-7.33,24-16c0-9.48-8.61-13-26.88-18.26C109.37,129.2,89.78,123.55,89.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C145.64,91.94,137.65,88,128,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C145.78,123,168,129.45,168,152,168,169.65,150.06,184,128,184Z" />
    </_Svg>
  )
}

Icon.displayName = 'StripeLogoFill'

export const StripeLogoFill = memo<IconProps>(themed(Icon))
