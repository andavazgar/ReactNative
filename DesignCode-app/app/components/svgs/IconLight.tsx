import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIconLight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <Path
        d="M9 0H7v2h2V0zM14.294 3.052L12.88 1.637 11.465 3.05l1.414 1.414 1.415-1.413zM16 7h-2v2h2V7zM11.535 13.02l1.415 1.413 1.414-1.415-1.415-1.413-1.414 1.414zM9 14H7v2h2v-2zM1.566 12.948l1.414 1.415 1.415-1.413-1.414-1.415-1.415 1.413zM2 7H0v2h2V7zM4.465 3.12L3.05 1.707 1.636 3.12l1.415 1.414L4.465 3.12z"
        fill="#7D8FFF"
      />
      <Path
        d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
        fill="#546BFB"
      />
    </Svg>
  );
}

export default SvgIconLight;
