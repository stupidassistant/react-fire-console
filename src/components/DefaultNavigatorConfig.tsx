import * as React from 'react';
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
import { NavigatorConfig } from './Navigator';

const DefaultNavigatorConfig: NavigatorConfig = {
  mainPage: {
    id: 'Project Overview',
    header: {
      title: 'Project Overview'
    },
    icon: <HomeIcon />
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
          tabs: [
            {
              label: "Users",
              uri: 'users'
            },
            {
              label: "Sign-in method",
              uri: 'signin-method'
            },
            {
              label: "Templates",
              uri: 'templates'
            },
            {
              label: "Usage",
              uri: 'usage'
            }
          ]
        },
        { id: 'Database', header: {title: 'Database'}, icon: <DnsRoundedIcon />, uri: '/database' },
        { id: 'Storage', header: {title: 'Storage'}, icon: <PermMediaOutlinedIcon />, uri: '/storage' },
        { id: 'Hosting', header: {title: 'Hosting'}, icon: <PublicIcon />, uri: '/hosting' },
        { id: 'Functions', header: {title: 'Functions'}, icon: <SettingsEthernetIcon />, uri: '/functions' },
        { id: 'ML Kit', header: {title: 'ML Kit'}, icon: <SettingsInputComponentIcon />, uri: '/ml' },
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