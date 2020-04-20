import * as React from 'react';

import { NavigatorConfig, PageConfig } from '../..';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from "react-router-dom";

import Content from './Content';
import Header from './Header';

import theme from '../theme/MuiTheme';

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
    const { classes, navigatorConfig, toggleDraw } = this.props;
    const { uri, header, tabs, rootRedirectsTo, component } = config;

    let fixedUri = uri || '/';
    return (
      <Route path={fixedUri} exact={exact}>
        <div className={classes.app}>
          <Header uri={fixedUri} toggleDraw={toggleDraw} headerConfig={header} tabs={tabs} auth={navigatorConfig.auth} />
          <main className={classes.main}>
            {
              rootRedirectsTo &&
                <Route path={fixedUri} exact>
                  <Redirect to={fixedUri + rootRedirectsTo} />
                </Route>
            }
            {
              tabs ? 
                tabs.map(tab => {
                  return (
                  <Route path={fixedUri + tab.uri}>
                    {tab.component || <Content label={tab.label} />}
                  </Route>
                )}) : 
                component || <Content label={header.title} />
            }
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