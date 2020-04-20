import * as React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Content from './Content';
import Header from './Header';
import theme from '../theme/MuiTheme';
import { NavigatorConfig, PageConfig } from './Navigator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = createStyles({
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
});

export interface PaperbaseProps extends WithStyles<typeof styles> {
  toggleDraw: () => void,
  navigatorConfig: NavigatorConfig
}


class Paperbase extends React.Component<PaperbaseProps> {
  renderScreen(config: PageConfig, exact: boolean=false) {
    const { classes } = this.props;
    const { uri, component, header, tabs } = config;

    let fixedUri = uri || '/';
    return (
      <Route path={fixedUri} exact={exact}>
        <div className={classes.app}>
          <Header uri={fixedUri} onDrawerToggle={this.props.toggleDraw} headerConfig={header} tabs={tabs} />
          <main className={classes.main}>
            <Content />
          </main>
        </div>
      </Route>
    );
  }

  render() {
    const { navigatorConfig } = this.props;
  
    return (
      <Switch>
        {this.renderScreen(navigatorConfig.mainPage, true)}
        {
          navigatorConfig.groups.reduce((list: JSX.Element[], { children }, groupId) => {
            list.push(...children.map((_, pageId) =>
              this.renderScreen(navigatorConfig.groups[groupId].children[pageId])
            ));
            return list;
          }, [])
        }
      </Switch>
    );
  }
}

export default withStyles(styles)(Paperbase);