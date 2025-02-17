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
      <_Path d="M213.92,210.61a8,8,0,1,1-11.84,10.77l-14.51-16A147.19,147.19,0,0,1,133,239.18a15.44,15.44,0,0,1-10,0c-15.2-5-91-34.76-91-124.38V56a16,16,0,0,1,8.26-14,8,8,0,0,1,13.66-7.39ZM208,40H98.52A8,8,0,0,0,92.6,53.38L199.69,171.17a7.94,7.94,0,0,0,5.91,2.62,7.64,7.64,0,0,0,1.26-.1,8,8,0,0,0,6-4.61c7.37-16.36,11.1-34.62,11.1-54.29V56A16,16,0,0,0,208,40Z" />
    </_Svg>
  )
}

Icon.displayName = 'ShieldSlashFill'

export const ShieldSlashFill = memo<IconProps>(themed(Icon))
