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
      <_Path d="M213.38,221.92a8,8,0,0,1-11.3-.54l-26.46-29.1A79.74,79.74,0,0,1,136,207.59V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,100.79,52.36l-10.88-12A48,48,0,0,1,80,128V87.09L42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92Zm-51.3-92.11A8,8,0,0,0,176,124.43V64A48,48,0,0,0,87.16,38.78,8,8,0,0,0,88,48.37Zm30.1,31.83a8,8,0,0,0,10.36-4.55A79.62,79.62,0,0,0,208,128a8,8,0,0,0-16,0,63.71,63.71,0,0,1-4.36,23.27A8,8,0,0,0,192.18,161.64Z" />
    </_Svg>
  )
}

Icon.displayName = 'MicrophoneSlashFill'

export const MicrophoneSlashFill = memo<IconProps>(themed(Icon))
