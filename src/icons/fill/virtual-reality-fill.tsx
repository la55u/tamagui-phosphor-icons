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
      <_Path d="M176,116a12,12,0,0,1-12,12H152V104h12A12,12,0,0,1,176,116Zm80,12a80.09,80.09,0,0,1-80,80H80A80,80,0,0,1,80,48h96A80.09,80.09,0,0,1,256,128ZM119,88.59A8,8,0,0,0,108.59,93L90,138.74,71.41,93a8,8,0,1,0-14.82,6l26,64a8,8,0,0,0,14.82,0l26-64A8,8,0,0,0,119,88.59Zm61.83,49.76A28,28,0,0,0,164,88H144a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V144h12c.54,0,1.08,0,1.61-.05l11.44,20A8,8,0,0,0,191,156Z" />
    </_Svg>
  )
}

Icon.displayName = 'VirtualRealityFill'

export const VirtualRealityFill = memo<IconProps>(themed(Icon))
