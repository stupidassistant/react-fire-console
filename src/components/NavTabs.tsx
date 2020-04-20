import * as React from "react";

import { RouteComponentProps, withRouter } from "react-router-dom";

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

interface Props extends RouteComponentProps<any> {
  root: string,
  tabs: {
    label: string,
    uri: string
  }[]
};

class NavTabs extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleCallToRouter = this.handleCallToRouter.bind(this);
  }

  handleCallToRouter(_: any, uri: string) {
    this.props.history.push(uri);
  }

  render() {
    const { tabs, history } = this.props;
    return (
      <Tabs
        value={history.location.pathname}
        onChange={this.handleCallToRouter}
        textColor="inherit"
        variant="scrollable"
      >
        {
          tabs.map(({label, uri}, index) => (
            <Tab
              textColor="inherit"
              label={label}
              value={this.props.root + uri}
            />
          ))
        }
      </Tabs>       
    )
  }
}

export default withRouter(NavTabs);