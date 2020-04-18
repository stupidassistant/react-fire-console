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
const PhonelinkSetup_1 = require("@material-ui/icons/PhonelinkSetup");
const DefaultNavigatorConfig = [
    {
        id: 'Develop',
        children: [
            { id: 'Authentication', icon: React.createElement(People_1.default, null), uri: 'authentication' },
            { id: 'Database', icon: React.createElement(DnsRounded_1.default, null), uri: 'database' },
            { id: 'Storage', icon: React.createElement(PhotoSizeSelectActual_1.default, null), uri: 'storage' },
            { id: 'Hosting', icon: React.createElement(Public_1.default, null), uri: 'hosting' },
            { id: 'Functions', icon: React.createElement(SettingsEthernet_1.default, null), uri: 'functions' },
            { id: 'ML Kit', icon: React.createElement(SettingsInputComponent_1.default, null), uri: 'ml' },
        ],
    },
    {
        id: 'Quality',
        children: [
            { id: 'Crashlytics', icon: React.createElement(Settings_1.default, null), uri: 'crashlytics' },
            { id: 'Performance', icon: React.createElement(Timer_1.default, null), uri: 'performance' },
            { id: 'Test Lab', icon: React.createElement(PhonelinkSetup_1.default, null), uri: 'testlab' },
        ],
    },
];
exports.default = DefaultNavigatorConfig;
//# sourceMappingURL=DefaultNavigatorConfig.js.map