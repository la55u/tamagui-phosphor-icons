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
      <_Path d="M50.15,168l38.92-67.43-2.24-3.88a48,48,0,1,1,85.05-44.17,8.17,8.17,0,0,1-3.19,10.4,8,8,0,0,1-11.35-3.72,32,32,0,1,0-56.77,29.3.57.57,0,0,1,.08.13l13.83,23.94a8,8,0,0,1,0,8L77.86,184a16,16,0,0,1-27.71-16Zm141-40H178.81L141.86,64a16,16,0,0,0-27.71,16l34.64,60a8,8,0,0,0,6.92,4h35.63c17.89,0,32.95,14.64,32.66,32.53A32,32,0,0,1,192.31,208a8.23,8.23,0,0,0-8.28,7.33,8,8,0,0,0,8,8.67,48.05,48.05,0,0,0,48-48.93C239.49,148.79,217.48,128,191.19,128ZM208,175.23c-.4-8.61-7.82-15.23-16.43-15.23H114.81a8,8,0,0,0-6.93,4L91.72,192h0a32,32,0,1,1-53.47-35,8.2,8.2,0,0,0-.92-11,8,8,0,0,0-11.72,1.17A47.63,47.63,0,0,0,16,175.54,48,48,0,0,0,105.55,200v0l4.62-8H192A16,16,0,0,0,208,175.23Z" />
    </_Svg>
  )
}

Icon.displayName = 'WebhooksLogoFill'

export const WebhooksLogoFill = memo<IconProps>(themed(Icon))
