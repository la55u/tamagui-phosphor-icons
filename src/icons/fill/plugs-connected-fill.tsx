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
      <_Path d="M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32.06,32.06,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-58.35,103h0L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22a16,16,0,0,1,0,22.63ZM88.41,34.53a8,8,0,0,1,15.18-5.06l8,24a8,8,0,0,1-15.18,5.06Zm-64,58.94a8,8,0,0,1,10.12-5.06l24,8a8,8,0,0,1-5.06,15.18l-24-8A8,8,0,0,1,24.41,93.47Zm207.18,69.06a8,8,0,0,1-10.12,5.06l-24-8a8,8,0,0,1,5.06-15.18l24,8A8,8,0,0,1,231.59,162.53Zm-64,58.94a8,8,0,0,1-15.18,5.06l-8-24a8,8,0,0,1,15.18-5.06Z" />
    </_Svg>
  )
}

Icon.displayName = 'PlugsConnectedFill'

export const PlugsConnectedFill = memo<IconProps>(themed(Icon))
