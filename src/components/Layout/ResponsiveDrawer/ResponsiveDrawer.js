import { Box, Drawer } from "@mui/material";
import DrawerContent from "./DrawerContent/DrawerContent";

const SvgBGLink = "https://gist.githubusercontent.com/AndrewJFleming/a5f1505e4cc8f38e2e513f2d6cac43a9/raw/38e95ca881d63c5c7ee07adc53da93d6f6002497/egyptian_green.svg"
// "https://gist.githubusercontent.com/AndrewJFleming/e49c39edfcb9f175327e070d80862ad8/raw/acd132f4c757ebf65481bb1d199887b7cc7fa8e8/egyptian.svg"
  // "https://gist.githubusercontent.com/AndrewJFleming/436ac85152ae18edd1dd858bee8097e9/raw/e0f253a3bfd5609b49c181b42d811ccb63371b3f/illust-9.svg";

const ResponsiveDrawer = ({
  drawerWidth,
  handleDrawerToggle,
  mobileOpen,
}) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="drawer-nav"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: "1px solid #ecf6d0",
            backgroundColor: "#1c0100",
            backgroundImage: `url(${SvgBGLink})`,
            backgroundSize: "100%",
          },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "success.dark",
            backgroundImage: `url(${SvgBGLink})`,
            backgroundSize: "100%",
          },
        }}
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default ResponsiveDrawer;
