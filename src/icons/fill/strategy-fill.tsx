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
      <_Path d="M104,188a36,36,0,1,1-36-36A36,36,0,0,1,104,188ZM34.34,117.66a8,8,0,0,0,11.32,0L60,103.31l14.34,14.35a8,8,0,0,0,11.32-11.32L71.31,92,85.66,77.66A8,8,0,0,0,74.34,66.34L60,80.69,45.66,66.34A8,8,0,0,0,34.34,77.66L48.69,92,34.34,106.34A8,8,0,0,0,34.34,117.66Zm173,70.34,14.35-14.34a8,8,0,0,0-11.32-11.32L196,176.69l-14.34-14.35a8,8,0,0,0-11.32,11.32L184.69,188l-14.35,14.34a8,8,0,0,0,11.32,11.32L196,199.31l14.34,14.35a8,8,0,0,0,11.32-11.32ZM157.66,50.34,155.31,48H176a8,8,0,0,0,0-16H136a8,8,0,0,0-8,8V80a8,8,0,0,0,16,0V59.31l2.34,2.35c17.93,17.93,17.9,35.4,14.71,46.9-4.64,16.77-19.36,31.77-35,35.68A8,8,0,0,0,128,160a8.13,8.13,0,0,0,2-.24c21.21-5.3,40.35-24.6,46.53-46.93C182.58,90.78,175.9,68.59,157.66,50.34Z" />
    </_Svg>
  )
}

Icon.displayName = 'StrategyFill'

export const StrategyFill = memo<IconProps>(themed(Icon))
