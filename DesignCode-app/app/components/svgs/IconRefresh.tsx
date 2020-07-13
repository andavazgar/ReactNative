import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIconRefresh(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <Path
        d="M4.5 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.3.4 5.9.4 3.1 3.1L.9.9.2 7.3l6.4-.7-2.1-2.1z"
        fill="#546BFB"
      />
      <Path
        d="M15.8 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z"
        fill="#D7DCFF"
      />
    </Svg>
  );
}

export default SvgIconRefresh;
