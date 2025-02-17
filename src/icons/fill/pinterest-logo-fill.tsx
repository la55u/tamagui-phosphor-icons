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
      <_Path d="M232,128.7c-.38,56.49-46.46,102.73-102.94,103.29a104.16,104.16,0,0,1-25.94-3,4,4,0,0,1-2.91-4.86l8.64-34.55A60.57,60.57,0,0,0,136,196c37,0,66.7-33.45,63.81-73.36A72,72,0,1,0,61.24,155,8,8,0,0,0,72,159.29a8.19,8.19,0,0,0,4-10.49,56,56,0,1,1,107.86-24.93C186,154.4,163.73,180,136,180a44.87,44.87,0,0,1-23.14-6.44l14.9-59.62a8,8,0,0,0-15.52-3.88L85.38,217.51a4,4,0,0,1-5.71,2.59A104,104,0,0,1,24,126.88C24.6,70.52,70.67,24.52,127,24A104,104,0,0,1,232,128.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'PinterestLogoFill'

export const PinterestLogoFill = memo<IconProps>(themed(Icon))
