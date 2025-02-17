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
      <_Path d="M201,48H179.35L165.66,34.34A8,8,0,0,0,160,32H96a8,8,0,0,0-5.66,2.34L76.65,48H55A15,15,0,0,0,40,63V217a15,15,0,0,0,15,15h61a4,4,0,0,0,4-4V112.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8V228a4,4,0,0,0,4,4h61a15,15,0,0,0,15-15V63A15,15,0,0,0,201,48ZM86.54,115.08A4,4,0,0,1,80,112V67.31L95.24,52.07l23.47,35.21ZM128,88h0v0Zm48,24a4,4,0,0,1-2.3,3.63,3.93,3.93,0,0,1-4.21-.51l-32.2-27.82,23.47-35.21L176,67.31Z" />
    </_Svg>
  )
}

Icon.displayName = 'ShirtFoldedFill'

export const ShirtFoldedFill = memo<IconProps>(themed(Icon))
