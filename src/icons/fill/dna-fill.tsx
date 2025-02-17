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
      <_Path d="M200,204.5V232a8,8,0,0,1-16,0V204.5a63.67,63.67,0,0,0-35.38-57.25l-48.4-24.19A79.58,79.58,0,0,1,56,51.5V24a8,8,0,0,1,16,0V51.5a63.67,63.67,0,0,0,35.38,57.25l48.4,24.19A79.58,79.58,0,0,1,200,204.5ZM163.18,192H83a8,8,0,0,1-8-8.53A8.19,8.19,0,0,1,83.25,176H149.7a4,4,0,0,0,2.75-6.9,48.24,48.24,0,0,0-11-7.53L97,139.31a8,8,0,0,0-8.31.71h0A80.27,80.27,0,0,0,56,204.5v27.23A8.18,8.18,0,0,0,63.47,240,8,8,0,0,0,72,232V216h88a8,8,0,0,0,8-8v-3.5a48.76,48.76,0,0,0-.9-9.32A4,4,0,0,0,163.18,192ZM191.47,16A8.18,8.18,0,0,0,184,24.27V40H96a8,8,0,0,0-8,8v3.5a48.76,48.76,0,0,0,.9,9.32A4,4,0,0,0,92.82,64h79.93A8.19,8.19,0,0,1,181,71.47,8,8,0,0,1,173,80H106.3a4,4,0,0,0-2.75,6.9,48.24,48.24,0,0,0,11,7.53L159,116.69a7.93,7.93,0,0,0,8.31-.72h0A80.27,80.27,0,0,0,200,51.5V24A8,8,0,0,0,191.47,16Z" />
    </_Svg>
  )
}

Icon.displayName = 'DnaFill'

export const DnaFill = memo<IconProps>(themed(Icon))
