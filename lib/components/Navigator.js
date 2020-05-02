"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var clsx_1 = require("clsx");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var Divider_1 = require("@material-ui/core/Divider");
var Drawer_1 = require("@material-ui/core/Drawer");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var styles = function (theme) {
    return styles_1.createStyles({
        categoryHeader: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        categoryHeaderPrimary: {
            color: theme.palette.common.white,
        },
        item: {
            paddingTop: 1,
            paddingBottom: 1,
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover,&:focus': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
        },
        itemCategory: {
            backgroundColor: '#232f3e',
            boxShadow: '0 -1px 0 #404854 inset',
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        logo: {
            backgroundColor: '#232f3e',
            boxShadow: '0 -1px 0 #404854 inset',
            padding: 0
        },
        itemActiveItem: {
            color: '#4fc3f7',
        },
        itemPrimary: {
            fontSize: 'inherit',
        },
        itemIcon: {
            minWidth: 'auto',
            marginRight: theme.spacing(2),
        },
        divider: {
            marginTop: theme.spacing(2),
        },
    });
};
function Navigator(props) {
    var classes = props.classes, navigatorConfig = props.navigatorConfig, toggleDraw = props.toggleDraw, history = props.history, other = __rest(props, ["classes", "navigatorConfig", "toggleDraw", "history"]);
    return (React.createElement(Drawer_1.default, __assign({ variant: "permanent" }, other),
        React.createElement(List_1.default, { disablePadding: true },
            React.createElement(ListItem_1.default, { className: clsx_1.default(classes.logo, classes.itemCategory) }, navigatorConfig.branding.logo || navigatorConfig.branding.text),
            navigatorConfig.groups.map(function (groupConfig, id) {
                switch (groupConfig.type) {
                    case "page":
                        return (React.createElement(ListItem_1.default, { component: react_router_dom_1.Link, to: groupConfig.uri, onClick: toggleDraw, className: clsx_1.default(classes.item, classes.itemCategory) },
                            React.createElement(ListItemIcon_1.default, { className: classes.itemIcon }, groupConfig.icon),
                            React.createElement(ListItemText_1.default, { classes: {
                                    primary: classes.itemPrimary,
                                } }, groupConfig.name)));
                    case "group":
                        return (React.createElement(React.Fragment, { key: id },
                            React.createElement(ListItem_1.default, { className: classes.categoryHeader },
                                React.createElement(ListItemText_1.default, { classes: {
                                        primary: classes.categoryHeaderPrimary,
                                    } }, groupConfig.name)),
                            groupConfig.children.map(function (_a, key) {
                                var uri = _a.uri, name = _a.name, icon = _a.icon;
                                return (React.createElement(ListItem_1.default, { key: key, button: true, component: react_router_dom_1.Link, to: uri, onClick: function (e) {
                                        if (history.location.pathname.indexOf(uri) == 0)
                                            e.preventDefault();
                                        else if (toggleDraw)
                                            toggleDraw();
                                    }, className: clsx_1.default(classes.item, history.location.pathname.indexOf(uri) == 0 && classes.itemActiveItem) },
                                    React.createElement(ListItemIcon_1.default, { className: classes.itemIcon }, icon),
                                    React.createElement(ListItemText_1.default, { classes: {
                                            primary: classes.itemPrimary,
                                        } }, name)));
                            }),
                            React.createElement(Divider_1.default, { className: classes.divider })));
                }
            }))));
}
exports.default = styles_1.withStyles(styles)(react_router_dom_1.withRouter(Navigator));
//# sourceMappingURL=Navigator.js.map