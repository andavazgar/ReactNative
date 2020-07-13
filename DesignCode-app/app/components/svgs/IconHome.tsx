import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgIconHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <G clipPath="url(#icon-home_svg__clip0)">
        <Path
          d="M11 16h2c.6 0 1-.4 1-1V8h1c.3 0 .6-.1.8-.3.4-.4.3-1-.1-1.4l-7-6C8.3 0 7.8 0 7.4.3l-7 6c-.4.4-.5 1-.1 1.4.1.2.4.3.7.3h1v7c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h4v3c0 .6.4 1 1 1z"
          fill="#546BFB"
        />
      </G>
      <Defs>
        <ClipPath id="icon-home_svg__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgIconHome;
