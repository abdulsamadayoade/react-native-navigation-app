import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Icon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={0.7}
      d="M8.326 1c-.118 0-.185.095-.203.17l-.38 2.08a7.079 7.079 0 0 0-.909.38L5.081 2.425a.216.216 0 0 0-.268.026L2.446 4.82a.216.216 0 0 0-.02.268l1.21 1.746c-.145.29-.275.591-.38.903l-2.086.38a.216.216 0 0 0-.17.209v3.348a.217.217 0 0 0 .17.203l2.087.38c.106.313.24.612.385.902l-1.216 1.746a.216.216 0 0 0 .02.269l2.367 2.367c.069.07.188.082.268.027l1.747-1.204c.295.147.6.274.916.38l.379 2.08a.216.216 0 0 0 .203.176h3.348a.216.216 0 0 0 .203-.177l.38-2.08c.314-.105.616-.233.909-.379l1.746 1.204c.08.055.2.043.268-.027l2.368-2.367a.216.216 0 0 0 .02-.268l-1.21-1.747c.144-.288.274-.586.379-.896l2.093-.386a.216.216 0 0 0 .17-.203V8.326a.216.216 0 0 0-.17-.21l-2.093-.38a7.062 7.062 0 0 0-.373-.895l1.204-1.753a.216.216 0 0 0-.02-.268L15.18 2.452a.216.216 0 0 0-.268-.026l-1.746 1.203a7.038 7.038 0 0 0-.91-.379l-.379-2.08a.216.216 0 0 0-.203-.17H8.326Zm.17.419h3.008l.367 2.02a.214.214 0 0 0 .137.164c.377.119.74.271 1.086.452.067.035.153.03.216-.014l1.694-1.17 2.125 2.125-1.17 1.694a.213.213 0 0 0-.013.216c.178.343.32.704.438 1.08.023.072.088.13.163.143l2.034.367v3.002l-2.034.373a.214.214 0 0 0-.163.143 6.63 6.63 0 0 1-.445 1.08.214.214 0 0 0 .013.216l1.17 1.694-2.118 2.119-1.694-1.171a.214.214 0 0 0-.216-.013 6.66 6.66 0 0 1-1.086.451.214.214 0 0 0-.137.164l-.367 2.027H8.496l-.367-2.027a.214.214 0 0 0-.137-.164 6.72 6.72 0 0 1-1.092-.45.214.214 0 0 0-.216.012l-1.694 1.17-2.12-2.118 1.178-1.694a.213.213 0 0 0 .013-.216 6.634 6.634 0 0 1-.451-1.086.214.214 0 0 0-.164-.144l-2.027-.366V8.496l2.027-.367a.214.214 0 0 0 .164-.144c.118-.377.264-.74.444-1.085a.214.214 0 0 0-.013-.216L2.871 4.99 4.99 2.87l1.7 1.171a.214.214 0 0 0 .216.014 6.71 6.71 0 0 1 1.086-.452.214.214 0 0 0 .137-.163l.367-2.021Zm1.439 4.604A3.98 3.98 0 0 0 5.958 10a3.98 3.98 0 0 0 3.977 3.977A3.98 3.98 0 0 0 13.91 10a3.98 3.98 0 0 0-3.976-3.977Zm0 .419A3.555 3.555 0 0 1 13.493 10a3.555 3.555 0 0 1-3.558 3.558A3.555 3.555 0 0 1 6.377 10a3.555 3.555 0 0 1 3.558-3.558Z"
    />
  </Svg>
);

export default Icon;