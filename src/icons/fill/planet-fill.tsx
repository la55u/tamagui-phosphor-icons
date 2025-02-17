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
      <_Path d="M223.22,115.75A97.08,97.08,0,0,1,224,128,95.93,95.93,0,0,1,69.43,204c25.19-6.16,54.82-18.93,82.44-34.8C181.31,152.29,206.16,133.46,223.22,115.75Zm21.89-55.07c-7.65-13.19-27.84-16.16-58.5-8.66h0A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31h0C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4,97.22,97.22,0,0,1-14.16-13.42c-17.29,2.88-28,1-30.53-3.29-1.46-2.51-.65-7.24,2.22-13a79.42,79.42,0,0,1,10.28-15.05.29.29,0,0,0,0-.09l0,.08h0a96.21,96.21,0,0,0,18,31.32c20.94-3.49,51.49-13.91,88.63-35.25C172,139.19,202,116.67,218.79,96.82a95.69,95.69,0,0,0-18-31.35h0l-.13-.15c0,.05.09.09.13.15,14.21-2.35,27.37-2.17,30.5,3.24.92,1.57,1,3.92.15,7-1.69,6.31-6.19,13.53-12.63,21.13a95.39,95.39,0,0,1,4.43,18.93c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68Z" />
    </_Svg>
  )
}

Icon.displayName = 'PlanetFill'

export const PlanetFill = memo<IconProps>(themed(Icon))
