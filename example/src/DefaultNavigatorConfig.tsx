import * as React from 'react';
import { NavigatorConfig } from 'react-fire-console';

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
    icon: <HomeIcon />,
    uri: '/',
    contents: {
      tabbed: false,
      header: {
        thin: true,
        transparent: true,
        docsUri: 'https://github.com/stupidassistant/react-fire-console'
      }
    }
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
          icon: <PeopleIcon />,
          uri: '/authentication',
          contents: {
            tabbed: true,
            header: {
              title: 'Authentication'
            },
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
          }
        },
        {
          id: 'Database',
          icon: <DnsRoundedIcon />,
          uri: '/database',
          contents: {
            tabbed: true,
            header: {title: 'Database'},
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
          }
        },
        {
          id: 'Storage',
          icon: <PermMediaOutlinedIcon />,
          uri: '/storage',
          contents: {
            tabbed: true,
            header: {title: 'Storage'},
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
          }
        },
        {
          id: 'Hosting',
          icon: <PublicIcon />,
          uri: '/hosting',
          contents: {
            tabbed: true,
            header: {title: 'Hosting'},
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
        }
        },
        {
          id: 'Functions',
          icon: <SettingsEthernetIcon />,
          uri: '/functions',
          contents: {
            tabbed: true,
            header: {title: 'Functions'},
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
          }
        },
        {
          id: 'ML Kit',
          icon: <SettingsInputComponentIcon />,
          uri: '/ml',
          contents: {
            tabbed: true,
            header: { title: 'ML Kit' },
            rootRedirectsTo: '/root',
            tabs: [
              {
                label: "Root",
                uri: '/root'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'Quality',
      children: [
        {
          id: 'Crashlytics',
          icon: <SettingsIcon />,
          uri: '/crashlytics',
          contents: {
            tabbed: true,
            header: {title: 'Crashlytics'},
            rootRedirectsTo: '/root',
            tabs: [
              {
                label: "Root",
                uri: '/root'
              }
            ]
          }
        },
        {
          id: 'Performance',
          icon: <TimerIcon />,
          uri: '/performance',
          contents: {
            tabbed: true,
            header: {title: 'Performance'},
            rootRedirectsTo: '/root',
            tabs: [
              {
                label: "Root",
                uri: '/root'
              }
            ]
          }
        },
        {
          id: 'Test Lab',
          icon: <PhonelinkSetupIcon />,
          uri: '/testlab',
          contents: {
            tabbed: true,
            header: {title: 'Test Lab'},
            rootRedirectsTo: '/root',
            tabs: [
              {
                label: "Root",
                uri: '/root'
              }
            ]
          }
        }
      ]
    }
  ]
};

export default DefaultNavigatorConfig;