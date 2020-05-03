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

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';

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
    }
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
                <Box display='flex' flexDirection='row'>
                  <Typography color="inherit" variant="h5" component="h1">
                    {pageConfig.header.title || "Default Title"}
                  </Typography>
                  {pageConfig.header.dropdown && (
                    <Select
                      value={pageConfig.header.dropdown.value || ""}
                      defaultValue={pageConfig.header.dropdown.initialValue}
                      onChange={(e: React.ChangeEvent<{value: string|number}>) => {
                        if (pageConfig.header?.dropdown?.onChange != undefined)
                          pageConfig.header.dropdown.onChange(e.target.value)
                      }}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        borderRadius: 50,
                        paddingLeft: 16,
                        paddingRight: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display:'flex',
                        marginLeft: 16
                      }}
                      displayEmpty
                      disableUnderline
                      placeholder={pageConfig.header.dropdown.placeholder}
                    >
                      {pageConfig.header.dropdown.placeholder &&
                        <MenuItem value="" disabled>
                          {pageConfig.header.dropdown.placeholder}
                        </MenuItem>
                      }
                      {
                        Object.keys(pageConfig.header.dropdown.options).map(key => (
                          <MenuItem value={key}>{pageConfig.header?.dropdown?.options[key]}</MenuItem>
                        ))
                      }
                    </Select>
                  )}
                </Box>
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