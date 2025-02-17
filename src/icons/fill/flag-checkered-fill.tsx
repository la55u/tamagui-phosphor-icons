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
      <_Path d="M219.32,40.75A8,8,0,0,0,210.76,42c-28,24.22-51.72,12.48-79.21-1.13C103.07,26.76,70.78,10.79,34.76,42h0A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,219.32,40.75ZM48,152.44V105.88C64.85,94.6,80.64,94.29,96,98.54v47.74C80.87,142.47,64.87,142.71,48,152.44Zm160,11.81c-16.87,13.32-32.27,13.72-48,8.91V125.49c-21.62-6-42.38-21-64-26.95h0V42.87c9.25,2.83,18.61,7.45,28.45,12.32,11.26,5.57,23.11,11.43,35.55,14.56v55.74c15.35,4.25,31.14,3.94,48-7.35Z" />
    </_Svg>
  )
}

Icon.displayName = 'FlagCheckeredFill'

export const FlagCheckeredFill = memo<IconProps>(themed(Icon))
