import * as React from 'react';

import { NavigatorConfig, PageConfig, PageContents, TabbedHeaderConfig } from '../../index';

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
  
  renderScreen(pageConfig: PageConfig, exact: boolean=false): JSX.Element {
    const { classes, navigatorConfig, toggleDraw } = this.props;

    const contents: PageContents = pageConfig.contents;
    const fixedUri = pageConfig.uri || '/';

    if (!contents.tabbed)
      return (
        <Route path={fixedUri} exact={exact}>
          <div className={classes.app}>
            <Header toggleDraw={toggleDraw} headerConfig={contents.header} auth={navigatorConfig.auth} />
            {contents.header.transparent ?
              (contents.component || <Content label={'Empty Page'} />)
            : 
              <main className={classes.main}>
                {contents.component || <Content label={'Empty Page'} />}
              </main>
            }
        </div>
        </Route>
      );
    else {      
      return (
        <Route path={fixedUri} exact={exact}>
          <div className={classes.app}>
            <Header uri={fixedUri} toggleDraw={toggleDraw} headerConfig={contents.header} tabs={contents.tabs} auth={navigatorConfig.auth} />
            <main className={classes.main}>
              <Route path={fixedUri} exact>
                <Redirect to={fixedUri + contents.rootRedirectsTo} />
              </Route>
              {
                contents.tabs.map((tab: any) => (
                  <Route path={fixedUri + tab.uri}>
                    {tab.component || <Content label={tab.label} />}
                  </Route>
                ))
              }
            </main>
          </div>
        </Route>
      );
    }
  }

  render() {
    const { navigatorConfig } = this.props;
  
    return (
      <Switch>
        {this.renderScreen(navigatorConfig.mainPage, true)}
        {
          navigatorConfig.groups.reduce((list: JSX.Element[], { children }, groupId) => {
            list.push(...children.map((pageConfig: PageConfig, pageId): JSX.Element =>
              this.renderScreen(pageConfig)
            ));

            return list;
          }, [])
        }
      </Switch>
    );
  }
}

export default withStyles(styles)(Paperbase);