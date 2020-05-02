import * as React from 'react';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Link } from "react-router-dom";

import { NavigatorConfig, GroupConfig } from '../..';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Omit } from '@material-ui/types';


const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    logo: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      padding: 0
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  });

export interface NavigatorProps extends RouteComponentProps, Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {
  navigatorConfig: NavigatorConfig,
  toggleDraw?: () => void
}

function Navigator(props: NavigatorProps) {
  const { classes, navigatorConfig, toggleDraw, history, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.logo, classes.itemCategory)}>
          {navigatorConfig.branding.logo || navigatorConfig.branding.text}
        </ListItem>
        {navigatorConfig.groups.map((groupConfig: GroupConfig, id: number) => {
          switch (groupConfig.type) {
            case "page":
              return (
                <ListItem
                  component={Link}
                  to={groupConfig.uri} 
                  onClick={toggleDraw}
                  className={clsx(classes.item, classes.itemCategory)}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {groupConfig.icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {groupConfig.name}
                  </ListItemText>
                </ListItem>
              );
            case "group":
              return (
                <React.Fragment key={id}>
                  <ListItem className={classes.categoryHeader}>
                    <ListItemText
                      classes={{
                        primary: classes.categoryHeaderPrimary,
                      }}
                    >
                      {groupConfig.name}
                    </ListItemText>
                  </ListItem>
                  {groupConfig.children.map(({uri, name, icon}, key: number) => (
                    <ListItem
                      key={key}
                      button
                      component={Link}
                      to={uri}
                      onClick={(e: any) => {
                        if (history.location.pathname.indexOf(uri) == 0)
                          e.preventDefault();
                        else if (toggleDraw)
                          toggleDraw()
                      }}
                      className={clsx(classes.item, history.location.pathname.indexOf(uri) == 0 && classes.itemActiveItem)}
                    >
                      <ListItemIcon className={classes.itemIcon}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.itemPrimary,
                        }}
                      >
                        {name}
                      </ListItemText>
                    </ListItem>
                  ))}
                  <Divider className={classes.divider} />
                </React.Fragment>
              );
          }
        })}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(withRouter(Navigator));