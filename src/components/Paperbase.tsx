import * as React from 'react';
import {
  createStyles,
  ThemeProvider,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NavigatorConfig } from './Navigator';
import theme from '../theme/MuiTheme';
import Drawer from './Drawer';
import MainPage from './MainPage';
import DefaultNavigatorConfig from './DefaultNavigatorConfig';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  }
});

export interface PaperbaseProps extends WithStyles<typeof styles> {
  navigatorConfig?: NavigatorConfig
}

type State = {
  mobileOpen: boolean
};

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
    const { classes, navigatorConfig: propsNavigatorConfig } = this.props;

    const navigatorConfig = propsNavigatorConfig || DefaultNavigatorConfig
  
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <Drawer open={this.state.mobileOpen} toggleDraw={this.toggleDraw} navigatorConfig={navigatorConfig} />
            <MainPage toggleDraw={this.toggleDraw} navigatorConfig={navigatorConfig} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default withStyles(styles)(Paperbase);