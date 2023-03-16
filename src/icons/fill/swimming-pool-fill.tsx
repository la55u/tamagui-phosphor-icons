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
      <_Path d="M24,168a8,8,0,0,1,8-8c14.42,0,22.19,5.18,28.44,9.34C66,173.06,70.42,176,80,176s14-2.94,19.56-6.66c6.24-4.16,14-9.34,28.43-9.34s22.2,5.18,28.44,9.34c5.58,3.72,10,6.66,19.57,6.66s14-2.94,19.56-6.66c6.25-4.16,14-9.34,28.44-9.34a8,8,0,0,1,0,16c-9.58,0-14,2.94-19.56,6.66-6.25,4.16-14,9.34-28.44,9.34s-22.2-5.18-28.44-9.34C142,178.94,137.57,176,128,176s-14,2.94-19.56,6.66c-6.24,4.16-14,9.34-28.43,9.34s-22.19-5.18-28.44-9.34C46,178.94,41.58,176,32,176A8,8,0,0,1,24,168Zm200,32c-14.42,0-22.19,5.18-28.44,9.34C190,213.06,185.58,216,176,216s-14-2.94-19.57-6.66c-6.24-4.16-14-9.34-28.44-9.34s-22.19,5.18-28.43,9.34C94,213.06,89.57,216,80,216s-14-2.94-19.56-6.66C54.19,205.18,46.42,200,32,200a8,8,0,0,0,0,16c9.58,0,14,2.94,19.56,6.66,6.25,4.16,14,9.34,28.44,9.34s22.19-5.18,28.43-9.34c5.58-3.72,10-6.66,19.56-6.66s14,2.94,19.57,6.66c6.24,4.16,14,9.34,28.44,9.34s22.19-5.18,28.44-9.34c5.57-3.72,10-6.66,19.56-6.66a8,8,0,0,0,0-16ZM80,141.39V32a8,8,0,0,1,16,0v8h64V32a8,8,0,0,1,16,0V143.29a8,8,0,0,1-16,0V136H96v5.39a8,8,0,0,1-16,0ZM96,72a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H104A8,8,0,0,0,96,72Zm0,32a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H104A8,8,0,0,0,96,104Z" />
    </_Svg>
  )
}

Icon.displayName = 'SwimmingPoolFill'

export const SwimmingPoolFill = memo<IconProps>(themed(Icon))
