import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import InfoIcon from '@material-ui/icons/Info';
import TodayIcon from '@material-ui/icons/Today';
import TimelineIcon from '@material-ui/icons/Timeline';

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    title: "Predictions",
    icon: <TodayIcon />,
    link: "/prediction"
  },
  {
    title: "Classification Model",
    icon: <InsertChartIcon />,
    link: "/classification-model"
  },
  {
    title: "Anomaly Graph",
    icon: <TimelineIcon />,
    link: "/anomaly-graph"
  },
  {
    title: "Terror Waves Information",
    icon: <InfoIcon />,
    link: "/terror-waves-information"
  }
];
