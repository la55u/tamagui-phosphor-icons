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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm78.37,64H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM128,40.11c12,13,21,29.55,26.37,47.89H101.63C107,69.66,116,53.13,128,40.11ZM96,128a145.29,145.29,0,0,1,2-24h60a145.72,145.72,0,0,1,0,48H98A145.29,145.29,0,0,1,96,128Zm5.63,40h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168Zm49.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Zm23.53-61a161.79,161.79,0,0,0,0-48h38.46a88.15,88.15,0,0,1,0,48Z" />
    </_Svg>
  )
}

Icon.displayName = 'GlobeFill'

export const GlobeFill = memo<IconProps>(themed(Icon))
