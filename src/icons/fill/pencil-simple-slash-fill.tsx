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
      <_Path d="M213.93,210.62a8,8,0,1,1-11.84,10.76L154.4,168.92,104,219.31A15.86,15.86,0,0,1,92.69,224H48a16,16,0,0,1-16-16V163.31A15.89,15.89,0,0,1,36.68,152l53.6-53.6-48.2-53A8,8,0,1,1,53.92,34.62ZM227.32,96,183,140.34a8,8,0,0,1-5.66,2.34h-.19a8,8,0,0,1-5.73-2.62L118.07,81.4a8,8,0,0,1,.26-11L160,28.69a16,16,0,0,1,22.63,0l44.69,44.68A16,16,0,0,1,227.32,96ZM216,84.69,171.32,40l-24,24L192,108.69Z" />
    </_Svg>
  )
}

Icon.displayName = 'PencilSimpleSlashFill'

export const PencilSimpleSlashFill = memo<IconProps>(themed(Icon))
