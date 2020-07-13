import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIconNight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <Path
        d="M6 0C2.5.9 0 4.1 0 7.9 0 12.4 3.6 16 8.1 16c3.8 0 6.9-2.5 7.9-6C9.9 11.7 4.3 6.1 6 0z"
        fill="#999"
      />
    </Svg>
  );
}

export default SvgIconNight;
