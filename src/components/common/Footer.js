import React from "react";
import { BottomNavigation, BottomNavigationAction, Icon } from "@material-ui/core";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <BottomNavigation showLabels value={value} onChange={handleChange}>
      <BottomNavigationAction label="Shots" icon={<Icon>camera_alt</Icon>} />
      <BottomNavigationAction label="Something" icon={<Icon>camera_alt</Icon>} />
      <BottomNavigationAction label="Likes" icon={<Icon>thumb_up</Icon>} />
      <BottomNavigationAction label="Favorites" icon={<Icon>favorite</Icon>} />
      <BottomNavigationAction label="Membership" icon={<Icon>people</Icon>} />
    </BottomNavigation>
  );
}
