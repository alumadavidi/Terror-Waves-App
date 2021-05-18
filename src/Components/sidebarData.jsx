import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import InsertChartIcon from "@material-ui/icons/InsertChart";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Predictions",
    icon: <TrendingUpIcon />,
    link: "/prediction",
  },
  {
    title: "Model",
    icon: <InsertChartIcon />,
    link: "/model",
  },
  {
    title: "Mailbox",
    icon: <MailIcon />,
    link: "/mail",
  },
  {
    title: "hello",
    icon: <MailIcon />,
    link: "/hello",
  },
];
