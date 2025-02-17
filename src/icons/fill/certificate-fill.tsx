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
      <_Path d="M232,88.86V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H152v24a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14a55.87,55.87,0,0,0,0-78.28ZM128,144H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,99.06-20.42-10.22a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0ZM192,168a40,40,0,1,1,40-40A40,40,0,0,1,192,168Z" />
    </_Svg>
  )
}

Icon.displayName = 'CertificateFill'

export const CertificateFill = memo<IconProps>(themed(Icon))
