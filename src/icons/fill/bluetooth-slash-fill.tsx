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
      <_Path d="M213.38,221.92a8,8,0,0,1-11.3-.54l-26.45-29.1L124.8,230.4A8,8,0,0,1,120,232a8,8,0,0,1-8-8V144L60.8,182.4a8,8,0,0,1-9.6-12.8l61.72-46.29L42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM144.55,110.53a8,8,0,0,0,10.72,1L188.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32V71.63A8,8,0,0,0,114.08,77Z" />
    </_Svg>
  )
}

Icon.displayName = 'BluetoothSlashFill'

export const BluetoothSlashFill = memo<IconProps>(themed(Icon))
