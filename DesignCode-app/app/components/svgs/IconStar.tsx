import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgIconStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <G clipPath="url(#icon-star_svg__clip0)">
        <Path
          d="M15.144 5.439l-4.317-.628L8.9.9a1.041 1.041 0 00-1.8 0L5.173 4.812l-4.317.627A1 1 0 00.3 7.145l3.123 3.045-.737 4.3a1 1 0 001.451 1.054L8 13.513l3.861 2.029a1 1 0 001.451-1.054l-.737-4.3L15.7 7.145a1 1 0 00-.554-1.705l-.002-.001z"
          fill="#546BFB"
        />
      </G>
      <Defs>
        <ClipPath id="icon-star_svg__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgIconStar;
