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
      <_Path
        d="M141.66,189.64l-75.3-75.3a8,8,0,0,0-11.32,0L42.34,127a8,8,0,0,0,0,11.32L68,164,34.34,197.66a8,8,0,0,0,0,11.31L47,221.66a8,8,0,0,0,11.32,0L92,188l25.64,25.65a8,8,0,0,0,11.32,0l12.7-12.7A8,8,0,0,0,141.66,189.64Z"
        opacity="0.2"
      />
      <_Path
        d="M68,164,34.34,197.66a8,8,0,0,0,0,11.31L47,221.66a8,8,0,0,0,11.32,0L92,188"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Rect
        x="75.02"
        y="102.75"
        width="33.96"
        height="122.49"
        rx="8.01"
        transform="translate(-89.02 113.09) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="160"
        y1="96"
        x2="104"
        y2="152"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="82.44 130.43 152 40 216 40 216 104 125.57 173.56"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'SwordDuotone'

export const SwordDuotone = memo<IconProps>(themed(Icon))
