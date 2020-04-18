import * as React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { NavigatorConfig } from './Navigator';

const DefaultNavigatorConfig: NavigatorConfig = [
  {
    id: 'Develop',
    children: [
      { id: 'Authentication', icon: <PeopleIcon />, uri: 'authentication' },
      { id: 'Database', icon: <DnsRoundedIcon />, uri: 'database' },
      { id: 'Storage', icon: <PermMediaOutlinedIcon />, uri: 'storage' },
      { id: 'Hosting', icon: <PublicIcon />, uri: 'hosting' },
      { id: 'Functions', icon: <SettingsEthernetIcon />, uri: 'functions' },
      { id: 'ML Kit', icon: <SettingsInputComponentIcon />, uri: 'ml' },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Crashlytics', icon: <SettingsIcon />, uri: 'crashlytics' },
      { id: 'Performance', icon: <TimerIcon />, uri: 'performance' },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon />, uri: 'testlab' },
    ],
  },
];

export default DefaultNavigatorConfig;