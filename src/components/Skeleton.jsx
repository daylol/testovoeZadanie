import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1400}
    height={164}
    viewBox="0 0 1400 164"
    backgroundColor="#878787"
    foregroundColor="#262626"
    {...props}
  >
    <rect x="561" y="189" rx="3" ry="3" width="88" height="6" /> 
    <rect x="558" y="187" rx="3" ry="3" width="52" height="6" /> 
    <rect x="555" y="184" rx="3" ry="3" width="410" height="6" /> 
    <rect x="467" y="192" rx="3" ry="3" width="380" height="6" /> 
    <rect x="480" y="196" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="585" cy="205" r="20" /> 
    <circle cx="59" cy="75" r="49" /> 
    <rect x="122" y="25" rx="5" ry="5" width="720" height="50" /> 
    <rect x="122" y="131" rx="5" ry="5" width="200" height="26" /> 
    <rect x="122" y="87" rx="5" ry="5" width="100" height="29" /> 
    <circle cx="1375" cy="41" r="15" /> 
    <rect x="1200" y="131" rx="5" ry="5" width="200" height="24" />
  </ContentLoader>
)

export default MyLoader

