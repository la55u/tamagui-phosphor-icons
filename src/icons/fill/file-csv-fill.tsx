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
      <_Path d="M213.65,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V88A8,8,0,0,0,213.65,82.34ZM152,88V44l44,44ZM48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,85.78,206.4,30.06,30.06,0,0,1,64,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.17,14.17,0,0,0,64,160C55.18,160,48,169,48,180Zm103.81,16.31a20.82,20.82,0,0,1-9.19,15.23C137.43,215,131,216,125.13,216a61.34,61.34,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.2,14.95,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.58,20.58,0,0,1,9-14.95c11.85-8,30.72-3.31,32.84-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.57,4.57,0,0,0-2,3.67c-.11.9-.13,1.09,1.12,1.9,2.31,1.49,6.45,2.68,10.45,3.84C137.49,174.17,154,179,151.81,196.31Zm63.72-41.62-20,56a8,8,0,0,1-15.07,0l-20-56a8,8,0,0,1,15.07-5.38L188,184.21l12.46-34.9a8,8,0,0,1,15.07,5.38Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileCsvFill'

export const FileCsvFill = memo<IconProps>(themed(Icon))
