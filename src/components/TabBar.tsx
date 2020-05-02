import * as React from 'react';

import { PageConfig } from '../..';
import NavTabs from './NavTabs';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
      [theme.breakpoints.down('sm')]: {
        width: '100vw'
      }
    }
  });

interface TabBarProps extends WithStyles<typeof styles> {
  pageConfig: PageConfig,
  rootURI: string
}

function TabBar(props: TabBarProps) {
  const { classes, pageConfig, rootURI } = props;

  return (
    <AppBar
      component="div"
      className={classes.secondaryBar}
      color={"primary"}
      position="static"
      elevation={0}
    >
      <NavTabs
        root={rootURI}
        tabs={pageConfig.tabbed && pageConfig.tabs || []}
      />
    </AppBar>
  );
}

export default withStyles(styles)(TabBar);