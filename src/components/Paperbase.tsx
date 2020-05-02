import * as React from 'react';
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import { NavigatorConfig } from '../..';

import { createStyles, ThemeProvider, withStyles, WithStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../theme/MuiTheme';
import Drawer from './Drawer';
import MainPage from './MainPage';

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  }
});

export interface PaperbaseProps extends WithStyles<typeof styles> {
  navigatorConfig: NavigatorConfig
}

type State = {
  mobileOpen: boolean
};

class Paperbase extends React.Component<PaperbaseProps, State> {
  constructor(props: PaperbaseProps) {
    super(props);

    this.state = {
      mobileOpen: false
    };

    this.toggleDraw = this.toggleDraw.bind(this);
  }

  toggleDraw() {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    });
  }

  render() {
    const { classes, navigatorConfig } = this.props;

    if (!navigatorConfig.auth.isSignedIn && navigatorConfig.auth.redirectIfNotSignedIn)
      return <Redirect to={navigatorConfig.auth.redirectIfNotSignedIn} />
  
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