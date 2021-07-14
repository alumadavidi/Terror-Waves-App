import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import InsertChartIcon from "@material-ui/icons/InsertChart";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    title: "Predictions",
    icon: <TrendingUpIcon />,
    link: "/prediction"
  },
  {
    title: "Classification Model",
    icon: <InsertChartIcon />,
    link: "/classification-model"
  },
  {
    title: "Anomaly Graph",
    icon: <MailIcon />,
    link: "/anomaly-graph"
  },
  {
    title: "Terror Waves Information",
    icon: <InsertChartIcon />,
    link: "/terror-waves-information"
  }
];
