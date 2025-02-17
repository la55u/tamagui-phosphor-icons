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
      <_Path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm31.54,90.77c-27.06,27-69.42,38.35-126.32,33.95q2.39,17.84,6.7,37.57a8,8,0,0,1-6.11,9.52,7.81,7.81,0,0,1-1.72.19,8,8,0,0,1-7.8-6.29q-4.91-22.43-7.39-42.64-20.2-2.49-42.61-7.39a8,8,0,0,1,3.42-15.63q19.71,4.3,37.54,6.7c-4.39-56.89,7-99.24,34-126.29C133,12.58,202.43,24.9,215.9,27.82A16.07,16.07,0,0,1,228.18,40.1C231.1,53.57,243.43,123,199.54,166.77Zm13-123.28a167.84,167.84,0,0,0-49.25-2.78c-20.24,2-37.4,7.83-51.25,17.46A88,88,0,0,0,197.83,144c9.62-13.85,15.49-31,17.46-51.25A169,169,0,0,0,212.54,43.49Z" />
    </_Svg>
  )
}

Icon.displayName = 'FishSimpleFill'

export const FishSimpleFill = memo<IconProps>(themed(Icon))
