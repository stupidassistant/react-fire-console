import * as React from 'react';

export type TabbedHeaderConfig = {
  title: string,
  helpUri?: string,
  docsUri?: string,
  transparent?: boolean,
  additionButtons?: {
    uri: string,
    label: string
  }[],
  thin?: false
};

export type ThinHeaderConfig = {
  docsUri?: string,
  transparent?: boolean,
  thin: true
};

export type HeaderConfig = TabbedHeaderConfig | ThinHeaderConfig;

export type TabbedPageContents = {
  tabbed: true,
  header: TabbedHeaderConfig,
  rootRedirectsTo?: string,
  tabs: {
    uri: string,
    label: string,
    component?: JSX.Element,
  }[]
};

export type SinglePageContents = {
  tabbed: false,
  header: ThinHeaderConfig,
  component?: JSX.Element
};

export type PageContents = TabbedPageContents | SinglePageContents;

declare const PageContents: PageContents;

export type PageConfig = {
  id: string,
  icon: JSX.Element,
  uri: string,
  contents: PageContents
}

export type NavigatorConfig = {
  logo: JSX.Element,
  mainPage: PageConfig & {uri: '/'},
  auth: {
    signedIn: false,
    autoRedirect?: string,
    onPress?: () => void,
    href?: string
  } | {
    signedIn: true,
    imageURL: string,
    username: string,
    onPress?: () => void,
    href?: string
  },
  groups: {
    id: string,
    children: (PageConfig & {
      uri: string
    })[]
  }[];
}

export interface FireConsoleProps extends React.Props<FireConsole> {
  config: NavigatorConfig;
}

declare class FireConsole extends React.Component<FireConsoleProps, any> {
  config: NavigatorConfig;
}

declare module 'react-fire-console' {}

export default FireConsole;