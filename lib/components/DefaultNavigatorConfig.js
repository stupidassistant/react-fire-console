"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var People_1 = require("@material-ui/icons/People");
var DnsRounded_1 = require("@material-ui/icons/DnsRounded");
var PhotoSizeSelectActual_1 = require("@material-ui/icons/PhotoSizeSelectActual");
var Public_1 = require("@material-ui/icons/Public");
var SettingsEthernet_1 = require("@material-ui/icons/SettingsEthernet");
var SettingsInputComponent_1 = require("@material-ui/icons/SettingsInputComponent");
var Timer_1 = require("@material-ui/icons/Timer");
var Settings_1 = require("@material-ui/icons/Settings");
var Home_1 = require("@material-ui/icons/Home");
var PhonelinkSetup_1 = require("@material-ui/icons/PhonelinkSetup");
var Header_1 = require("./ui/Header");
var DefaultNavigatorConfig = {
    title: 'react-fire-console',
    mainPage: {
        id: 'Project Overview',
        icon: React.createElement(Home_1.default, null),
        uri: '/',
        contents: {
            tabbed: false,
            header: {
                thin: true,
                transparent: true,
                docsUri: 'https://github.com/stupidassistant/react-fire-console'
            },
            component: React.createElement(Header_1.default, null)
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
                    icon: React.createElement(People_1.default, null),
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
                    icon: React.createElement(DnsRounded_1.default, null),
                    uri: '/database',
                    contents: {
                        tabbed: true,
                        header: { title: 'Database' },
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
                    icon: React.createElement(PhotoSizeSelectActual_1.default, null),
                    uri: '/storage',
                    contents: {
                        tabbed: true,
                        header: { title: 'Storage' },
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
                    icon: React.createElement(Public_1.default, null),
                    uri: '/hosting',
                    contents: {
                        tabbed: true,
                        header: { title: 'Hosting' },
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
                    icon: React.createElement(SettingsEthernet_1.default, null),
                    uri: '/functions',
                    contents: {
                        tabbed: true,
                        header: { title: 'Functions' },
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
                    icon: React.createElement(SettingsInputComponent_1.default, null),
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
                    icon: React.createElement(Settings_1.default, null),
                    uri: '/crashlytics',
                    contents: {
                        tabbed: true,
                        header: { title: 'Crashlytics' },
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
                    icon: React.createElement(Timer_1.default, null),
                    uri: '/performance',
                    contents: {
                        tabbed: true,
                        header: { title: 'Performance' },
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
                    icon: React.createElement(PhonelinkSetup_1.default, null),
                    uri: '/testlab',
                    contents: {
                        tabbed: true,
                        header: { title: 'Test Lab' },
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
exports.default = DefaultNavigatorConfig;
//# sourceMappingURL=DefaultNavigatorConfig.js.map