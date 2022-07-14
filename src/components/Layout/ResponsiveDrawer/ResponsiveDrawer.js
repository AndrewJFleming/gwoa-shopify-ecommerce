import { Box, Drawer } from "@mui/material";
import DrawerContent from "./DrawerContent/DrawerContent";

const SvgBGLink = "https://gist.githubusercontent.com/AndrewJFleming/a5f1505e4cc8f38e2e513f2d6cac43a9/raw/38e95ca881d63c5c7ee07adc53da93d6f6002497/egyptian_green.svg"

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
            backgroundColor: "success.dark",
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
