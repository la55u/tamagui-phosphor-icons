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
      <_Path d="M88,112A16,16,0,1,1,72,96,16,16,0,0,1,88,112ZM240,64V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H224A16,16,0,0,1,240,64ZM186,192l-15.6-20.8A8,8,0,0,0,164,168H92a8,8,0,0,0-6.4,3.2L70,192Zm30-80a32,32,0,0,0-32-32H72a32,32,0,0,0,0,64H184A32,32,0,0,0,216,112ZM99.7,96a31.92,31.92,0,0,1,0,32h56.6a31.92,31.92,0,0,1,0-32ZM184,96a16,16,0,1,0,16,16A16,16,0,0,0,184,96Z" />
    </_Svg>
  )
}

Icon.displayName = 'CassetteTapeFill'

export const CassetteTapeFill = memo<IconProps>(themed(Icon))
