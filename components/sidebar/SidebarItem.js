import { ListItemButton, ListItemIcon } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarItem = ({ item, handleDrawerToggle }) => {
  const pathname = usePathname();
  const style = {
    "&: hover": {
      backgroundColor: "#19376D",
    },
    backgroundColor: pathname === item.path ? "#19376D" : "unset",
    paddingY: "10px",
    paddingX: "15px",
  };

  return item && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={style}
      onClick={handleDrawerToggle}
    >
      <ListItemIcon
        sx={{
          color: "#ffffff",
          opacity: 0.3,
          minWidth: "40px",
        }}
      >
        {item.icon && item.icon}
      </ListItemIcon>
      {item.title}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
