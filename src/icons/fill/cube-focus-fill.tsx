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
      <_Path d="M178.59,90.22,128,119.43,77.41,90.22a4,4,0,0,1,0-6.93l44.35-25.61a12.48,12.48,0,0,1,12.48,0l44.35,25.61A4,4,0,0,1,178.59,90.22ZM64,107.88v49.55a13,13,0,0,0,6.42,11.24L114,193.84a4,4,0,0,0,6-3.46V133.29L70,104.42A4,4,0,0,0,64,107.88Zm128,49.55V107.88a4,4,0,0,0-6-3.46l-50,28.87v57.09a4,4,0,0,0,6,3.46l43.57-25.17A13,13,0,0,0,192,157.43ZM224,40H184a8,8,0,0,0,0,16h32V88a8,8,0,0,0,16,0V48A8,8,0,0,0,224,40ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96Z" />
    </_Svg>
  )
}

Icon.displayName = 'CubeFocusFill'

export const CubeFocusFill = memo<IconProps>(themed(Icon))
