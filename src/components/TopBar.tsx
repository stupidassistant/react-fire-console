import * as React from 'react';

import { NavigatorConfig, PageConfig } from '../..';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) =>
  createStyles({
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
    select: {
      shadows: ["none"],
      color: theme.palette.common.white,
      '&:before': {
        borderColor: theme.palette.common.white,
      },
      '&:after': {
        borderColor: theme.palette.common.white,
      }
    },
    icon: {
      fill: theme.palette.common.white,
    },
    selectDark: {
      shadows: ["none"],
      color: theme.palette.common.black,
      '&:before': {
        borderColor: theme.palette.common.black,
      },
      '&:after': {
        borderColor: theme.palette.common.black,
      }
    },
    iconDark: {
      fill: theme.palette.common.black,
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  navigatorConfig: NavigatorConfig,
  pageConfig: PageConfig,
  toggleDraw: () => void;
}

function Header(props: HeaderProps) {
  const { classes, toggleDraw, navigatorConfig, pageConfig } = props;

  return (
    <React.Fragment>
      <AppBar color={pageConfig.header ? "primary" : "transparent"} position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDraw}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            {navigatorConfig.mainBar.dropdown && <Grid item>
              <Select
                value={navigatorConfig.mainBar.dropdown.value || ""}
                defaultValue={navigatorConfig.mainBar.dropdown.initialValue}
                onChange={(e: React.ChangeEvent<{value: string|number}>) => {
                  if (navigatorConfig.mainBar.dropdown?.onChange)
                    navigatorConfig.mainBar.dropdown.onChange(e.target.value)
                }}
                displayEmpty
                disableUnderline
                className={pageConfig.header ? classes.select : classes.selectDark}
                inputProps={{
                  classes: {
                    icon: pageConfig.header ? classes.icon : classes.iconDark,
                  }
                }}
                placeholder={navigatorConfig.mainBar.dropdown.placeholder}
              >
                {navigatorConfig.mainBar.dropdown.placeholder &&
                  <MenuItem value="" disabled>
                    {navigatorConfig.mainBar.dropdown.placeholder}
                  </MenuItem>
                }
                {
                  Object.keys(navigatorConfig.mainBar.dropdown.options).map(key => (
                    <MenuItem value={key}>{navigatorConfig.mainBar.dropdown?.options[key]}</MenuItem>
                  ))
                }
              </Select>
            </Grid>}
            <Grid item xs />
            {pageConfig.header?.docsURI && <Grid item>
              <Link className={classes.link} href={pageConfig.header.docsURI} variant="body2">
                Go to docs
              </Link>
            </Grid>}
            {navigatorConfig.auth.isSignedIn && <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>}
            <Grid item>
              {navigatorConfig.auth.isSignedIn ?
                <IconButton color="inherit" className={classes.iconButtonAvatar} onClick={navigatorConfig.auth.onPressIcon}>
                  <Avatar src={navigatorConfig.auth.user?.imageURL} alt={navigatorConfig.auth.user?.username} />
                </IconButton>
              :
                <Button className={classes.button} onClick={navigatorConfig.auth.onPressRegister} href={navigatorConfig.auth.registerURI} variant="outlined" color="inherit" size="small">
                  Sign In
                </Button>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);