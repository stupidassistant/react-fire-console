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
  branding: {
    text: "Default Logo",
    logo: <img src={'https://dummyimage.com/256x100/fff/aaa'} alt='Default Logo' width='100%' />
  },
  mainBar: {
    dropdown: {
      options: {
        0: "Profile 1"
      },
      placeholder: 'Select Main Profile'
    }
  },
  auth: {
    isSignedIn: false
  },
  groups: [
    {
      name: 'Project Overview',
      type: 'page',
      uri: '/',
      icon: <HomeIcon />,
      pageConfig: {
        tabbed: false
      }
    },
    {
      name: 'Develop',
      type: 'group',
      children: [
        {
          name: 'Authentication',
          uri: '/authentication',
          icon: <PeopleIcon />,
          pageConfig: {
            tabbed: true,
            header: {
              title: "Authentication",
            },
            mainTab: 'Users',
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
          name: 'Database',
          uri: '/database',
          icon: <DnsRoundedIcon />,
          pageConfig: {
            tabbed: true,
            header: {
              title: "Database",
            },
            mainTab: 'Data',
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
          name: 'Storage',
          uri: '/storage',
          icon: <PermMediaOutlinedIcon />,
          pageConfig: {
            tabbed: true,
            header: {
              title: "Storage",
            },
            mainTab: 'Files',
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
          name: 'Hosting',
          uri: '/hosting',
          icon: <PublicIcon />,
          pageConfig: {
            tabbed: true,
            header: {
              title: "Hosting",
            },
            mainTab: 'Dashboard',
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
          name: 'Functions',
          uri: '/functions',
          icon: <SettingsEthernetIcon />,
          pageConfig: {
            tabbed: true,
            header: {
              title: "Functions",
            },
            mainTab: 'Dashboard',
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
          name: 'ML Kit',
          uri: '/ml',
          icon: <SettingsInputComponentIcon />,
          pageConfig: {
            tabbed: false
          }
        }
      ]
    },
    {
      name: 'Quality',
      type: 'group',
      children: [
        {
          name: 'Crashlytics',
          uri: '/crashlytics',
          icon: <SettingsIcon />,
          pageConfig: {
            tabbed: false,
            header: {
              title: "Crashlytics",
            }
          }
        },
        {
          name: 'Performance',
          uri: '/performance',
          icon: <TimerIcon />,
          pageConfig: {
            tabbed: false,
            header: {
              title: "Performance",
              docsURI: '/',
              helpURI: '/'
            }
          }
        },
        {
          name: 'Test Lab',
          uri: '/testlab',
          icon: <PhonelinkSetupIcon />,
          pageConfig: {
            tabbed: false,
            header: {
              title: "Test Lab",
              additionalButtons: [
                {
                  label: "Options",
                  uri: '/'
                }
              ]
            }
          }
        }
      ]
    }
  ]
};

export default DefaultNavigatorConfig;