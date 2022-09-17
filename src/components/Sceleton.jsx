import React from 'react';
import ContentLoader from 'react-content-loader';

function Sceleton(props) {
  return (
    <>
       <ContentLoader 
        speed={2}
        width={200}
        height={210}
        viewBox="0 0 200 210"
        backgroundColor="#f9e7f2"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="191" y="292" rx="0" ry="0" width="5" height="0" /> 
        <rect x="0" y="384" rx="10" ry="10" width="98" height="39" /> 
        <rect x="114" y="381" rx="23" ry="23" width="146" height="39" /> 
        <rect x="198" y="436" rx="0" ry="0" width="0" height="1" /> 
        <rect x="0" y="279" rx="10" ry="10" width="260" height="24" /> 
        <rect x="0" y="319" rx="10" ry="10" width="258" height="49" /> 
        <rect x="29" y="7" rx="2" ry="2" width="162" height="102" /> 
        <rect x="30" y="113" rx="2" ry="2" width="104" height="29" /> 
        <rect x="140" y="113" rx="2" ry="2" width="50" height="29" /> 
        <rect x="30" y="146" rx="2" ry="2" width="160" height="45" /> 
        <rect x="127" y="121" rx="0" ry="0" width="6" height="1" />
      </ContentLoader>
    </>
  )
}

export default Sceleton