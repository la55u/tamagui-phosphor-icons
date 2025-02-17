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
      <_Path d="M232,152a32,32,0,1,0-39.93,31,8,8,0,0,0-.07,1,32,32,0,0,1-32,32H136a32,32,0,0,1-32-32V143.48c31.47-4,56-31.47,56-64.31V40a16,16,0,0,0-16-16H128a8,8,0,0,0,0,16h16V79.17c0,26.58-21.25,48.49-47.36,48.83A48,48,0,0,1,48,80V40H64a8,8,0,0,0,0-16H48A16,16,0,0,0,32,40V80a64,64,0,0,0,56,63.49V184a48.05,48.05,0,0,0,48,48h24a48.05,48.05,0,0,0,48-48,8,8,0,0,0-.07-1A32,32,0,0,0,232,152Zm-32,8a8,8,0,1,1,8-8A8,8,0,0,1,200,160Z" />
    </_Svg>
  )
}

Icon.displayName = 'StethoscopeFill'

export const StethoscopeFill = memo<IconProps>(themed(Icon))
