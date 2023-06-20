"use client";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const sidebarWidth = "220px";
const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  marginTop: "45px",
}));

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Navbar
        sidebarWidth={sidebarWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Sidebar
        sidebarWidth={sidebarWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Main sx={{ ml: { sm: sidebarWidth } }}>{children}</Main>
    </>
  );
}
