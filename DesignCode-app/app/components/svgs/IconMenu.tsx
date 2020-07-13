import * as React from "react";
import Svg, { Defs, Path, Use } from "react-native-svg";

function SvgIconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg height={16} width={16} {...props}>
      <Defs>
        <Path
          id="icon-menu_svg__a"
          opacity={1}
          d="M1 1h14a1 1 0 010 2H1a1 1 0 010-2z"
        />
        <Path
          id="icon-menu_svg__b"
          opacity={1}
          d="M1 7h14a1 1 0 010 2H1a1 1 0 010-2z"
        />
        <Path
          id="icon-menu_svg__c"
          opacity={1}
          d="M1 13h6a1 1 0 010 2H1a1 1 0 010-2z"
        />
      </Defs>
      <Use xlinkHref="#icon-menu_svg__a" fill="#4775F2" />
      <Use xlinkHref="#icon-menu_svg__b" fill="#4775F2" />
      <Use xlinkHref="#icon-menu_svg__c" fill="#4775F2" fillOpacity={0.49} />
    </Svg>
  );
}

export default SvgIconMenu;
