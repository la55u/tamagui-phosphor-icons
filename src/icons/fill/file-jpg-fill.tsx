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
      <_Path d="M48,120H208a8,8,0,0,0,8-8V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM152,44l44,44H152ZM120,144H104a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40h-8V160h8a12,12,0,0,1,0,24Zm96,16.87a8,8,0,0,1-2.22,5.53A30.06,30.06,0,0,1,192,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a29.38,29.38,0,0,1,16.48,5.12,8,8,0,0,1-9,13.26A13.21,13.21,0,0,0,192,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.63,13.63,0,0,0,8-2.71V192a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8ZM80,152v38a26,26,0,0,1-52,0,8,8,0,0,1,16,0,10,10,0,0,0,20,0V152a8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileJpgFill'

export const FileJpgFill = memo<IconProps>(themed(Icon))
