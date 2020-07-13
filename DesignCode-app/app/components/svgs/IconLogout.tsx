import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIconLogout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <Path
        d="M3.4 2H8v2h2V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v9c0 .3.1.5.3.7l5 5c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.1.6-.5.6-.9V6c0-.3-.1-.5-.3-.7L3.4 2zM5 12.6l-3-3V3.4l3 3v6.2z"
        fill="#546BFB"
      />
      <Path
        d="M15.7 7.3L12 3.6 10.6 5l2 2H8v2h4.6l-2 2 1.4 1.4 3.7-3.7c.4-.4.4-1 0-1.4z"
        fill="#D7DCFF"
      />
    </Svg>
  );
}

export default SvgIconLogout;
