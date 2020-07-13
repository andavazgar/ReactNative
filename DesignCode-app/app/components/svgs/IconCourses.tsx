import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgIconCourses(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <G clipPath="url(#icon-courses_svg__clip0)">
        <Path
          d="M6 12h2c.6 0 1-.4 1-1V3.5l3.2 7.9c.2.5.8.8 1.3.5l1.9-.8c.5-.2.8-.8.5-1.3L12.1.5c-.2-.5-.8-.8-1.3-.5L9 .8C8.9.4 8.5 0 8 0H6c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1z"
          fill="#7D8FFF"
        />
        <Path
          d="M1 12h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1z"
          fill="#546BFB"
        />
        <Path d="M16 14H0v2h16v-2z" fill="#D7DCFF" />
      </G>
      <Defs>
        <ClipPath id="icon-courses_svg__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgIconCourses;
