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
      <_Path d="M128,144a28,28,0,1,1,28-28A28,28,0,0,1,128,144Zm15.75,0h-31.5a20.17,20.17,0,0,0-16,7.82,19.67,19.67,0,0,0-3.58,17.05l12.18,48A20.17,20.17,0,0,0,124.44,232h7.12a20.17,20.17,0,0,0,19.64-15.13l12.18-48a19.67,19.67,0,0,0-3.58-17.05A20.17,20.17,0,0,0,143.75,144Zm38.49-2a8,8,0,0,0,5.75,9.74,8.12,8.12,0,0,0,2,.25,8,8,0,0,0,7.74-6,72,72,0,1,0-139.46,0,8,8,0,1,0,15.49-4,56,56,0,1,1,108.48,0ZM128,24A104,104,0,0,0,70.49,214.66a8,8,0,0,0,11.09-2.23,8,8,0,0,0-2.24-11.09,88,88,0,1,1,97.31,0,8,8,0,0,0,8.86,13.32A104,104,0,0,0,128,24Z" />
    </_Svg>
  )
}

Icon.displayName = 'ApplePodcastsLogoFill'

export const ApplePodcastsLogoFill = memo<IconProps>(themed(Icon))
