import * as React from 'react';
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
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import NavTabs from './NavTabs';

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

export type HeaderConfig = {
  title: string,
  helpUri?: string,
  docsUri?: string,
  additionButtons?: {
    uri: string,
    label: string
  }[]
};

interface HeaderProps extends WithStyles<typeof styles> {
  headerConfig: HeaderConfig,
  tabs?: {
    label: string,
    uri: string
  }[],
  uri: string,
  onDrawerToggle: () => void;
}

function Header(props: HeaderProps) {
  const { classes, onDrawerToggle, headerConfig, tabs, uri } = props;

  const [url, setUrl] = React.useState<null|string>(null);

  if (url != null)
    return <Redirect to={url} />

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
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
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
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
        {tabs && <NavTabs
          root={uri}
          tabs={[
            {label: "Users", uri: 'users'},
            {label: "Sign-in method", uri: 'sign-in-method'},
            {label: "Templates", uri: 'templates'},
            {label: "Usage", uri: 'usage'}
          ]}
        />}
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);