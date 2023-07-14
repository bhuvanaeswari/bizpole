import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineIcon from "lineicons-react";
const menuItems = () => {
  return [
    {
      text: "Dashboard",
      icon: <LineIcon name="grid-alt" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Leads & Enquiries",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Customers",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Business",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Orders",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Check List",
    icon: <LineIcon name="lni lni-check-box" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Coupons",
    icon: <LineIcon name="lni lni-ticket" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Services & Packages",
    icon: <LineIcon name="lni lni-package" />,
      subMenuItems: [],
      divider: true,
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Filings & Compliances",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "Data Management",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
  ];
};

export default menuItems;
