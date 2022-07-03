import { Typography } from '@mui/material';
import React from 'react'

const BannerBGLink =
  "https://live.staticflickr.com/65535/52092076129_ea52f24095_k.jpg";


const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${BannerBGLink})`, display: "flex", justifyContent: "center", alignItems: "center",height: "70vh", backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" }}>
        {/* <img style={{width: "100%"}} src="https://live.staticflickr.com/65535/52092076129_ea52f24095_k.jpg" alt="homepage banner"/> */}
        <Typography variant="h2">Welcome</Typography>
    </div>
  )
}

export default Banner