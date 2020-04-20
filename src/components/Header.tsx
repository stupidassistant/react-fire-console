import * as React from 'react';
import NavTabs from './NavTabs';

import { HeaderConfig } from '../..';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
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
  });

interface HeaderProps extends WithStyles<typeof styles> {
  headerConfig: HeaderConfig,
  tabs?: {
    label: string,
    uri: string
  }[],
  auth: {
    signedIn: false,
    onPress?: () => void,
    href?: string
  } | {
    signedIn: true,
    imageURL: string,
    username: string,
    onPress?: () => void,
    href?: string
  },
  uri: string,
  toggleDraw: () => void;
}

function Header(props: HeaderProps) {
  const { classes, toggleDraw, headerConfig, tabs, uri, auth } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
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
            <Grid item xs />
            {headerConfig?.docsUri && <Grid item>
              <Link className={classes.link} href={headerConfig.docsUri} variant="body2">
                Go to docs
              </Link>
            </Grid>}
            {auth.signedIn && <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>}
            <Grid item>
              {auth.signedIn ?
                <IconButton color="inherit" className={classes.iconButtonAvatar} onClick={auth.onPress}>
                  <Avatar src={auth.imageURL} alt={auth.username} />
                </IconButton>
              :
                <Button className={classes.button} onClick={auth.onPress} href={auth.href} variant="outlined" color="inherit" size="small">
                  Sign In
                </Button>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {headerConfig?.title || "Default Title"}
              </Typography>
            </Grid>
            {headerConfig?.additionButtons?.map(({label, uri}) => (
              <Grid item>
                <Button className={classes.button} href={uri} variant="outlined" color="inherit" size="small">
                  {label}
                </Button>
              </Grid>
            ))}
            {headerConfig?.helpUri && <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit" href={headerConfig.helpUri}>
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>}
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <NavTabs
          root={uri}
          tabs={tabs || []}
        />
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);