import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={50}
    
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.64.524a3.87 3.87 0 0 1 3.889 0l13.424 7.804a3.87 3.87 0 0 1 1.924 3.345v15.654a3.87 3.87 0 0 1-1.925 3.345L27.53 38.476a3.87 3.87 0 0 1-3.89 0l-13.423-7.804a3.87 3.87 0 0 1-1.925-3.345v-3.42h-3.04v-2.073h3.04V19.76h-4.56v-2.073H13.128v-2.073H6.08v-2.073h2.21v-1.869a3.87 3.87 0 0 1 1.925-3.345L23.64.524Zm1.944 6.608 10.591 6.184v12.368l-10.59 6.184-10.592-6.184v-3.85H8.291V19.76h6.702v-6.445l10.591-6.184ZM.83 15.615h2.073v2.073H.829v-2.073Zm1.244 4.146H0v2.073h2.073V19.76Zm.553 4.146h2.072v2.072H2.626v-2.072Zm5.665 0h4.837v2.072H8.29v-2.072Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={40.797}
        x2={42.838}
        y2={20.797}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#72E909" />
        <Stop offset={1} stopColor="#0B4E09" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent