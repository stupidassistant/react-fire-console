import * as React from 'react';
import NavTabs from './NavTabs';

import { PageConfig } from '../..';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
      [theme.breakpoints.down('sm')]: {
        width: '100vw'
      }
    },
    button: {
      borderColor: lightColor,
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  pageConfig: PageConfig
}

function Header(props: HeaderProps) {
  const { classes, pageConfig } = props;

  return (
    <React.Fragment>
      {pageConfig.header &&
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
                  {pageConfig.header.title || "Default Title"}
                </Typography>
              </Grid>
              {pageConfig.header.additionalButtons?.map(({label, uri}) => (
                <Grid item>
                  <Button className={classes.button} href={uri} variant="outlined" color="inherit" size="small">
                    {label}
                  </Button>
                </Grid>
              ))}
              {pageConfig.header.helpURI && <Grid item>
                <Tooltip title="Help">
                  <IconButton color="inherit" href={pageConfig.header.helpURI}>
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              </Grid>}
            </Grid>
          </Toolbar>
        </AppBar>
      }
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);