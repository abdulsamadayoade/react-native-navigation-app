import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Icon = (props: SvgProps) => (
  <Svg width={14} height={18} fill="none" {...props}>
    <Path
      fill={props.fill}
      d="M12.143.857h-.857V0H2.714v.857h-.857C.91.857.143 1.625.143 2.571v13.715C.143 17.233.91 18 1.857 18h10.286c.947 0 1.714-.767 1.714-1.714V2.57c0-.946-.767-1.714-1.714-1.714Zm-8.572 0h6.857v.857H3.571V.857ZM13 16.286a.858.858 0 0 1-.857.857H1.857A.858.858 0 0 1 1 16.286V2.57c0-.472.384-.857.857-.857h.857v.857h8.572v-.857h.857c.472 0 .857.385.857.857v13.715ZM5.286 5.143h6V6h-6v-.857Zm0 2.571h6v.857h-6v-.857Zm0 2.572h6v.857h-6v-.857Zm0 2.571h6v.857h-6v-.857ZM3.57 6h-.857v-.857h.857V6Zm0 2.571h-.857v-.857h.857v.857Zm0 2.572h-.857v-.857h.857v.857Zm0 2.571h-.857v-.857h.857v.857Z"
    />
  </Svg>
);
export default Icon;
