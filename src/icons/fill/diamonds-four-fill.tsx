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
      <_Path d="M86.9,73.82a16.72,16.72,0,0,1,0-23.65l29.27-29.28a16.75,16.75,0,0,1,23.66,0L169.1,50.17a16.72,16.72,0,0,1,0,23.65L139.83,103.1a16.75,16.75,0,0,1-23.66,0h0Zm148.21,42.35L205.83,86.89a16.74,16.74,0,0,0-23.65,0L152.9,116.17a16.75,16.75,0,0,0,0,23.66l29.28,29.28h0a16.74,16.74,0,0,0,23.65,0l29.28-29.28A16.75,16.75,0,0,0,235.11,116.17Zm-132,0L73.82,86.89a16.74,16.74,0,0,0-23.65,0L20.89,116.17a16.75,16.75,0,0,0,0,23.66l29.28,29.28h0a16.74,16.74,0,0,0,23.65,0l29.28-29.28A16.75,16.75,0,0,0,103.1,116.17Zm36.73,36.73a16.75,16.75,0,0,0-23.66,0L86.9,182.18a16.72,16.72,0,0,0,0,23.65l29.27,29.28h0a16.75,16.75,0,0,0,23.66,0l29.27-29.28a16.72,16.72,0,0,0,0-23.65Z" />
    </_Svg>
  )
}

Icon.displayName = 'DiamondsFourFill'

export const DiamondsFourFill = memo<IconProps>(themed(Icon))
