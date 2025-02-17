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
      <_Path d="M213.91,210.62a8,8,0,1,1-11.84,10.76l-90.51-99.57a75.89,75.89,0,0,0-8.56,2.4l-5.9,29.51a16,16,0,0,1-9.75,11.72l-.29.11-49,17.37a16,16,0,0,1-18.38-5.07c-17.23-22.21-15.3-51.68,4.69-71.67A141.26,141.26,0,0,1,69.68,75.74L42.09,45.38A8,8,0,1,1,53.93,34.62Zm17.68-104.44c-28.86-28.87-69.5-44.16-111.49-42a8,8,0,0,0-5.5,13.37l90.81,99.9a8,8,0,0,0,3.24,2.16l9.25,3.28a16,16,0,0,0,18.38-5.07C253.51,155.64,251.58,126.17,231.59,106.18Z" />
    </_Svg>
  )
}

Icon.displayName = 'PhoneSlashFill'

export const PhoneSlashFill = memo<IconProps>(themed(Icon))
