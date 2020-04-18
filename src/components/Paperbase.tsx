import * as React from 'react';
import {
  createStyles,
  ThemeProvider,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NavigatorConfig } from './Navigator';
import Content from './Content';
import Header from './Header';
import theme from '../theme/MuiTheme';
import Drawer from './Drawer';
import DefaultNavigatorConfig from './DefaultNavigatorConfig';

const drawerWidth = 256;

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
});

export interface PaperbaseProps extends WithStyles<typeof styles> {
  navigatorConfig?: NavigatorConfig
}

type State = {
  mobileOpen: boolean
}


class Paperbase extends React.Component<PaperbaseProps, State> {
  constructor(props: PaperbaseProps) {
    super(props);

    this.state = {
      mobileOpen: false
    }
  }

  toggleDraw() {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    });
  }

  render() {
    const { classes } = this.props;
  
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Drawer open={this.state.mobileOpen} toggleDraw={this.toggleDraw} navigatorConfig={this.props.navigatorConfig || DefaultNavigatorConfig} />
          <div className={classes.app}>
            <Header onDrawerToggle={this.toggleDraw} />
            <main className={classes.main}>
              <Content />
            </main>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(Paperbase);