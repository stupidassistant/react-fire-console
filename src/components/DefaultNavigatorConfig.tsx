import * as React from 'react';

import { NavigatorConfig } from '../..';

import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';

const DefaultNavigatorConfig: NavigatorConfig = {
  title: 'react-fire-console',
  mainPage: {
    id: 'Project Overview',
    header: {
      title: 'Project Overview'
    },
    icon: <HomeIcon />
  },
  auth: {
    signedIn: true,
    imageURL: 'https://avatars1.githubusercontent.com/u/63911125?s=200&v=4',
    username: 'The Stupid Assistant',
    href: 'https://github.com/stupidassistant/react-fire-console'
  },
  groups: [
    {
      id: 'Develop',
      children: [
        {
          id: 'Authentication',
          header: {title: 'Authentication'},
          icon: <PeopleIcon />,
          uri: '/authentication',
          rootRedirectsTo: '/users',
          tabs: [
            {
              label: "Users",
              uri: '/users'
            },
            {
              label: "Sign-in method",
              uri: '/providers'
            },
            {
              label: "Templates",
              uri: '/templates'
            },
            {
              label: "Usage",
              uri: '/usage'
            }
          ]
        },
        {
          id: 'Database',
          header: {title: 'Database'},
          icon: <DnsRoundedIcon />,
          uri: '/database',
          rootRedirectsTo: '/data',
          tabs: [
            {
              label: "Data",
              uri: '/data'
            },
            {
              label: "Rules",
              uri: '/rules'
            },
            {
              label: "Indexes",
              uri: '/indexes'
            },
            {
              label: "Usage",
              uri: '/usage'
            }
          ]
        },
        {
          id: 'Storage',
          header: {title: 'Storage'},
          icon: <PermMediaOutlinedIcon />,
          uri: '/storage',
          rootRedirectsTo: '/files',
          tabs: [
            {
              label: "Files",
              uri: '/files'
            },
            {
              label: "Rules",
              uri: '/rules'
            },
            {
              label: "Usage",
              uri: '/usage'
            }
          ]
        },
        {
          id: 'Hosting',
          header: {title: 'Hosting'},
          icon: <PublicIcon />,
          uri: '/hosting',
          rootRedirectsTo: '/main',
          tabs: [
            {
              label: "Dashboard",
              uri: '/main'
            },
            {
              label: "Usage",
              uri: '/usage'
            }
          ]
        },
        {
          id: 'Functions',
          header: {title: 'Functions'},
          icon: <SettingsEthernetIcon />,
          uri: '/functions',
          rootRedirectsTo: '/list',
          tabs: [
            {
              label: "Dashboard",
              uri: '/list'
            },
            {
              label: "Health",
              uri: '/health'
            },
            {
              label: "Logs",
              uri: '/logs'
            },
            {
              label: "Usage",
              uri: '/usage'
            }
          ]
        },
        {
          id: 'ML Kit',
          header: {title: 'ML Kit'},
          icon: <SettingsInputComponentIcon />,
          uri: '/ml'
        },
      ],
    },
    {
      id: 'Quality',
      children: [
        { id: 'Crashlytics', header: {title: 'Crashlytics'}, icon: <SettingsIcon />, uri: '/crashlytics' },
        { id: 'Performance', header: {title: 'Performance'}, icon: <TimerIcon />, uri: '/performance' },
        { id: 'Test Lab', header: {title: 'Test Lab'}, icon: <PhonelinkSetupIcon />, uri: '/testlab' },
      ],
    },
  ]
}

export default DefaultNavigatorConfig;