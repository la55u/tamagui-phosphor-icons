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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128.57,189.66l-5.46,5.45a44,44,0,0,1-62.22-62.22l24-24a44.08,44.08,0,0,1,55.56-5.48,8,8,0,0,1-8.9,13.3A28,28,0,0,0,96.2,120.2l-24,24a28,28,0,0,0,39.6,39.6l5.45-5.46a8,8,0,0,1,11.32,11.32Zm66.54-66.55-24,24a44.08,44.08,0,0,1-55.56,5.48,8,8,0,0,1,8.9-13.3,28.06,28.06,0,0,0,35.35-3.49l24-24a28,28,0,0,0-39.6-39.6l-5.45,5.46a8,8,0,0,1-11.32-11.32l5.46-5.45a44,44,0,0,1,62.22,62.22Z" />
    </_Svg>
  )
}

Icon.displayName = 'LinkFill'

export const LinkFill = memo<IconProps>(themed(Icon))
