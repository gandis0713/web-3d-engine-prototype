import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    display: "relative",
    zIndex: theme.zIndex.drawer + 1,
  },
  tabs: {
    flexGrow: 1,
  }
}));

export const Top = {
  tabMesh: {
    name: 'mesh',
    path: '/mesh'
  },
  tabVolume: {
    name: 'volume',
    path: '/volume'
  }
};

function TopBar () {

  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);
  const changeTab = function(event, index) {
    setTabIndex(Number(index));
  }

  return (
    <div className={classes.root}>
      <AppBar  position="fixed"  className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit">
            <MenuIcon />
          </IconButton>                
          <Tabs
            className={classes.tabs}
            value={tabIndex}
            onChange={changeTab}>
            <Tab 
              label={Top.tabMesh.name}
              component={Link}
              to={Top.tabMesh.path}/>
            <Tab
              label={Top.tabVolume.name}
              component={Link}
              to={Top.tabVolume.path}/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;