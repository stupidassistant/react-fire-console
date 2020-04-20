import * as React from 'react';

export type HeaderConfig = {
  title: string,
  helpUri?: string,
  docsUri?: string,
  additionButtons?: {
    uri: string,
    label: string
  }[],
};

export type PageConfig = {
  id: string,
  icon: JSX.Element,
  header: HeaderConfig,
  rootRedirectsTo?: string,
  component?: JSX.Element,
  tabs?: {
    uri: string,
    label: string,
    component?: JSX.Element,
  }[],
  uri?: string
}

export type NavigatorConfig = {
  title: string,
  mainPage: PageConfig,
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