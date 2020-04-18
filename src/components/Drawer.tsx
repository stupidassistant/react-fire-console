import * as React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator, { NavigatorConfig } from './Navigator';
import theme from '../theme/MuiTheme';

const drawerWidth = 256;

const styles = createStyles({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  }
});

export interface DrawerProps extends WithStyles<typeof styles> {
  navigatorConfig: NavigatorConfig,
  open: boolean,
  toggleDraw: () => void 
}

class Drawer extends React.Component<DrawerProps> {
  render() {
    const { classes, navigatorConfig } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={this.props.open}
              onClose={this.props.toggleDraw}
              navigatorConfig={navigatorConfig}
            />
          </Hidden>
          <Hidden smDown implementation="css">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              navigatorConfig={navigatorConfig}
            />
          </Hidden>
        </nav>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Drawer);