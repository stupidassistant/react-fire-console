"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const People_1 = require("@material-ui/icons/People");
const DnsRounded_1 = require("@material-ui/icons/DnsRounded");
const PhotoSizeSelectActual_1 = require("@material-ui/icons/PhotoSizeSelectActual");
const Public_1 = require("@material-ui/icons/Public");
const SettingsEthernet_1 = require("@material-ui/icons/SettingsEthernet");
const SettingsInputComponent_1 = require("@material-ui/icons/SettingsInputComponent");
const Timer_1 = require("@material-ui/icons/Timer");
const Settings_1 = require("@material-ui/icons/Settings");
const Home_1 = require("@material-ui/icons/Home");
const PhonelinkSetup_1 = require("@material-ui/icons/PhonelinkSetup");
const DefaultNavigatorConfig = {
    mainPage: {
        id: 'Project Overview',
        header: {
            title: 'Project Overview'
        },
        icon: React.createElement(Home_1.default, null)
    },
    groups: [
        {
            id: 'Develop',
            children: [
                {
                    id: 'Authentication',
                    header: { title: 'Authentication' },
                    icon: React.createElement(People_1.default, null),
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
                { id: 'Database', header: { title: 'Database' }, icon: React.createElement(DnsRounded_1.default, null), uri: '/database' },
                { id: 'Storage', header: { title: 'Storage' }, icon: React.createElement(PhotoSizeSelectActual_1.default, null), uri: '/storage' },
                { id: 'Hosting', header: { title: 'Hosting' }, icon: React.createElement(Public_1.default, null), uri: '/hosting' },
                { id: 'Functions', header: { title: 'Functions' }, icon: React.createElement(SettingsEthernet_1.default, null), uri: '/functions' },
                { id: 'ML Kit', header: { title: 'ML Kit' }, icon: React.createElement(SettingsInputComponent_1.default, null), uri: '/ml' },
            ],
        },
        {
            id: 'Quality',
            children: [
                { id: 'Crashlytics', header: { title: 'Crashlytics' }, icon: React.createElement(Settings_1.default, null), uri: '/crashlytics' },
                { id: 'Performance', header: { title: 'Performance' }, icon: React.createElement(Timer_1.default, null), uri: '/performance' },
                { id: 'Test Lab', header: { title: 'Test Lab' }, icon: React.createElement(PhonelinkSetup_1.default, null), uri: '/testlab' },
            ],
        },
    ]
};
exports.default = DefaultNavigatorConfig;
//# sourceMappingURL=DefaultNavigatorConfig.js.map