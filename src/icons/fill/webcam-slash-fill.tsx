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
      <_Path d="M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L58.82,63.8A80,80,0,0,0,120,183.6V200H32a8,8,0,0,0,0,16H197.19l4.89,5.38a8,8,0,1,0,11.84-10.76ZM80,104a48.19,48.19,0,0,1,2.24-14.44L96,104.71a32,32,0,0,0,28.23,31.06L138,150.94A48,48,0,0,1,80,104Zm56,96V183.59a79.91,79.91,0,0,0,25.44-6.91L182.64,200ZM86.56,46.74a8,8,0,0,1,2-12.34,80,80,0,0,1,105,115.5,8,8,0,0,1-6.05,3.39l-.5,0a8,8,0,0,1-5.92-2.62L170,138.46a8,8,0,0,1-.92-9.54,48,48,0,0,0-61.95-68.14A8,8,0,0,1,97.67,59ZM128,72a32,32,0,0,1,32,32,35.18,35.18,0,0,1-.19,3.55,8,8,0,0,1-13.88,4.5L121.69,85.38A8,8,0,0,1,127.49,72Z" />
    </_Svg>
  )
}

Icon.displayName = 'WebcamSlashFill'

export const WebcamSlashFill = memo<IconProps>(themed(Icon))
