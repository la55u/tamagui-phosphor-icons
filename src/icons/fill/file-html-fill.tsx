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
      <_Path d="M216,112V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,8,8H208A8,8,0,0,0,216,112ZM152,88V44l44,44Zm-24,64a8,8,0,0,1-8,8h-8v48a8,8,0,0,1-16,0V160H88a8,8,0,0,1,0-16h32A8,8,0,0,1,128,152Zm-56,0v56a8,8,0,0,1-16,0V188H40v20a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0v20H56V152a8,8,0,0,1,16,0Zm176,56a8,8,0,0,1-8,8H220a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h12A8,8,0,0,1,248,208Zm-48-56v56a8,8,0,0,1-16,0V180.88l-9.14,15.24a8,8,0,0,1-13.72,0L152,180.88V208a8,8,0,0,1-16,0V152a8,8,0,0,1,14.86-4.12L168,176.45l17.14-28.57A8,8,0,0,1,200,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileHtmlFill'

export const FileHtmlFill = memo<IconProps>(themed(Icon))
