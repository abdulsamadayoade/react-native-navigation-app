import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Icon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.25 6.75 9 1.5l6.75 5.25V15a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Z"
    />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.75 16.5V9h4.5v7.5"
    />
  </Svg>
);

export default Icon;
