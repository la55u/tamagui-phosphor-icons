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
      <_Path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,220.67,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8V96a48,48,0,0,1,41.61-47.56A83.85,83.85,0,0,1,178,48a46.06,46.06,0,0,1,46,46C224,147.61,146.25,196.15,128,206.8Z" />
    </_Svg>
  )
}

Icon.displayName = 'HeartHalfFill'

export const HeartHalfFill = memo<IconProps>(themed(Icon))
