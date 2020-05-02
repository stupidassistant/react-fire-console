import * as React from 'react';

export type NavigatorConfig = {
  auth: {
    isSignedIn: boolean,
    user?: {
      imageURL?: string,
      username: string,
      email: string
    },
    redirectIfNotSignedIn?: string,
    onPressIcon?: () => void,
    onPressRegister?: () => void,
    registerURI?: string
  },
  mainBar: {
    notifications?: {
      inbox: {
        title: string,
        description: string,
        date: Date,
        read: boolean
      }[],
      unread: number
    },
    dropdown?: {
      options: Record<string|number, string>,
      value?: string|number,
      initialValue?: string|number,
      onChange?: (v: string|number) => void,
      placeholder?: string,
      onCreate?: () => void
    }
  },
  branding: {
    logo?: JSX.Element,
    text: string
  },
  groups: GroupConfig[]
};

export type SinglePageGroupConfig = {
  type: "page",
  uri: string,
  name: string,
  icon: JSX.Element,
  pageConfig: PageConfig
}

export type TabbedPageGroupConfig = {
  type: "group",
  name: string,
  children: {
    uri: string,
    name: string,
    icon: JSX.Element,
    pageConfig: PageConfig
  }[]
}

export type GroupConfig = TabbedPageGroupConfig | SinglePageGroupConfig;

export type PageConfig = SinglePageConfig | TabbedPageConfig;

export type SinglePageConfig = {
  tabbed: false,
  header?: {
    title: string,
    dropdown?: {
      options: Record<string|number, string>,
      value?: string|number,
      initialValue?: string|number,
      onChange?: (v: string|number) => void,
      placeholder?: string,
      onCreate?: () => void
    },
    additionalButtons?: {
      label: string,
      uri: string
    }[],
    docsURI?: string,
    helpURI?: string
  },
  component?: JSX.Element
}

export type TabbedPageConfig = {
  tabbed: true,
  header: {
    title: string,
    dropdown?: {
      options: Record<string|number, string>,
      value?: string|number,
      initialValue?: string|number,
      onChange?: (v: string|number) => void,
      placeholder?: string,
      onCreate?: () => void
    },
    additionalButtons?: {
      label: string,
      uri: string
    }[],
    docsURI?: string,
    helpURI?: string
  },
  mainTab: string,
  tabs: {
    label: string,
    uri: string,
    component?: JSX.Element
  }[]
}

export interface FireConsoleProps extends React.Props<FireConsole> {
  config: NavigatorConfig;
}

declare class FireConsole extends React.Component<FireConsoleProps, any> {
  config: NavigatorConfig;
}

declare module 'react-fire-console' {}

export default FireConsole;