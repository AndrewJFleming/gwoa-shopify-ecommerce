import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    navLink: {
      textDecoration: "none",
      // color: theme.palette.success.main,
      "&:hover": {
        textDecoration: "none",
        // color: theme.palette.success.light,
      },
    },
    navLinkButton: {
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.25)!important",
      },
    },
  };
});

const DrawerMenuItems = ({ path, icon, text }) => {
  const classes = useStyles();

  return (
    <Link className={classes.navLink} to={path}>
      <ListItem button className={classes.navLinkButton}>
        <ListItemIcon sx={{ color: "success.main" }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

export default DrawerMenuItems;
