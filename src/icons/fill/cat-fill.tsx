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
      <_Path d="M222.83,33.54a16,16,0,0,0-18.14,3.15c-.14.14-.26.27-.38.41L187.05,57A111.28,111.28,0,0,0,69,57L51.69,37.1c-.12-.14-.24-.27-.38-.41a16,16,0,0,0-18.14-3.15A16.4,16.4,0,0,0,24,48.46V136c0,49,40.06,89.63,91.56,95.32a4,4,0,0,0,4.44-4v-32l-13.42-13.43a8.22,8.22,0,0,1-.41-11.37,8,8,0,0,1,11.49-.18L128,180.68l10.34-10.35a8,8,0,0,1,11.49.18,8.22,8.22,0,0,1-.41,11.37L136,195.31v32a4,4,0,0,0,4.44,4C191.94,225.62,232,185,232,136V48.46A16.4,16.4,0,0,0,222.83,33.54ZM84,152a12,12,0,1,1,12-12A12,12,0,0,1,84,152Zm20-64a8,8,0,1,1-16,0V69a8,8,0,0,1,16,0Zm32,0a8,8,0,1,1-16,0V64a8,8,0,0,1,16,0Zm16,0V69a8,8,0,0,1,16,0V88a8,8,0,1,1-16,0Zm20,64a12,12,0,1,1,12-12A12,12,0,0,1,172,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'CatFill'

export const CatFill = memo<IconProps>(themed(Icon))
