import { Box, Typography, Button } from "@mui/material";
import React, {useState, useEffect, useCallback} from "react";
import { makeStyles } from "@mui/styles";
import { client } from "../../client";

const BannerBGLink =
  "https://live.staticflickr.com/65535/52204528982_faafda6ee1_k.jpg";

const useStyles = makeStyles((theme) => {
  return {
    bannerContentWrap: {
      backgroundColor: theme.palette.error.dark,
      position: "relative",
      "&:before": {
        content: "' '",
        display: "block",
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        opacity: "0.2",
        // backgroundImage: `url(${BannerBGLink})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
        backgroundSize: "cover",
      },
    },
    bannerContent: {
      color: "#000",
      position: "relative",
      height: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const Banner = () => {
const [isBannerLoading, setIsBannerLoading] = useState(false)
const [bannerContent, setBannerContent] = useState({})

const getBannerContent = useCallback(async () => {
  try {
    const response = await client.getEntries({content_type: 'welcomeBanner'})
    const responseData = response.items[0]
    console.log(responseData)
    cleanUpBannerContent(responseData)
  } catch (error) {
    console.log(error)
  }
},[])

const cleanUpBannerContent = useCallback((rawData) => {
  const cleanBannerContent = () => {
    const {id} = rawData.sys
    const title = rawData.fields.title
    const subtitle = rawData.fields.subtitle
    const bGImage = rawData.fields.bannerBgImage.fields.file.url
    const updatedBannerContent = {id, title, subtitle, bGImage}
    return updatedBannerContent
  }
  setBannerContent(cleanBannerContent)
}, [])

useEffect(() => {
  getBannerContent()
},[getBannerContent])

  const classes = useStyles();
  return (
    <Box className={classes.bannerContentWrap} sx={{
      "&:before": {
        backgroundImage: `url(${bannerContent.bGImage})`
      }}}>
      <Box className={classes.bannerContent}>
        <Typography variant="h2" sx={{color: "common.white", textAlign: "center"}}>{bannerContent.title}</Typography>
        <Typography variant="h5" sx={{my: 2, color: "common.white", textAlign: "center"}}>{bannerContent.subtitle}</Typography>
        <Button color="primary" variant="contained">Test</Button>
      </Box>
    </Box>
  );
};

export default Banner;
