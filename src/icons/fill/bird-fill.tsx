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
      <_Path d="M236.44,73.34,213.21,57.86A60,60,0,0,0,96,76V93.19L1.75,211A8,8,0,0,0,8,224H112A104.11,104.11,0,0,0,216,120V100.28l20.44-13.62a8,8,0,0,0,0-13.32ZM110.15,141.12l-40,48a8,8,0,0,1-12.3-10.24l40-48a8,8,0,1,1,12.3,10.24ZM164,80a12,12,0,1,1,12-12A12,12,0,0,1,164,80Z" />
    </_Svg>
  )
}

Icon.displayName = 'BirdFill'

export const BirdFill = memo<IconProps>(themed(Icon))
