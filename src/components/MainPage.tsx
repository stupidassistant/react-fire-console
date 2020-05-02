import * as React from 'react';

import { NavigatorConfig, GroupConfig, PageConfig } from '../../index';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Route, Redirect } from "react-router-dom";

import Content from './Content';
import Header from './Header';

import theme from '../theme/MuiTheme';
import TopBar from './TopBar';
import TabBar from './TabBar';

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
  private renderPageConfig(pageConfig: PageConfig, rootURI: string): JSX.Element {
    const { classes, navigatorConfig, toggleDraw } = this.props;

    return (
      <div className={classes.app}>
        <TopBar navigatorConfig={navigatorConfig} pageConfig={pageConfig} toggleDraw={toggleDraw} />
        {pageConfig.header && <Header pageConfig={pageConfig} />}
        {pageConfig.tabbed ? (
          <React.Fragment>
            <TabBar pageConfig={pageConfig} rootURI={rootURI} />
            <Route path={`${rootURI}`} exact={true}>
              <Redirect to={`${rootURI}${pageConfig.tabs.filter(v => v.label == pageConfig.mainTab)[0].uri}`} />
            </Route>
            <main className={classes.main}>
              {
                pageConfig.tabs.map(({component, uri}) => (
                  <Route path={`${rootURI}${uri}`} exact={true}>
                    {component || <Content label={'Empty Page'} />}
                  </Route>
                ))
              }
            </main>
          </React.Fragment>
        ) : (
          <main className={classes.main}>
            {pageConfig.component || <Content label={'Empty Page'} />}
          </main>
        )}
      </div>
    );
  }

  private renderGroups(navigatorConfig: NavigatorConfig): JSX.Element[] {
    return navigatorConfig.groups.reduce((list: JSX.Element[], groupConfig: GroupConfig, key: number) => {
      if (groupConfig.type == "page") 
        list.push(
          <Route path={groupConfig.uri} exact={true}>
            {this.renderPageConfig(groupConfig.pageConfig, groupConfig.uri)}
          </Route>
        );
      else if (groupConfig.type == "group")
        list.push(...groupConfig.children.map(({pageConfig, uri}) => (
          <Route path={uri}>
            {this.renderPageConfig(pageConfig, uri)}
          </Route>
        )));
      return list;
    }, []);
  }

  render() {
    const { navigatorConfig } = this.props;

    return this.renderGroups(navigatorConfig);
  }
}

export default withStyles(styles)(Paperbase);