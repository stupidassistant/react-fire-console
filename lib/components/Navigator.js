"use strict";
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
const React = require("react");
const clsx_1 = require("clsx");
const styles_1 = require("@material-ui/core/styles");
const Divider_1 = require("@material-ui/core/Divider");
const Drawer_1 = require("@material-ui/core/Drawer");
const List_1 = require("@material-ui/core/List");
const ListItem_1 = require("@material-ui/core/ListItem");
const ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
const ListItemText_1 = require("@material-ui/core/ListItemText");
const Home_1 = require("@material-ui/icons/Home");
const styles = (theme) => styles_1.createStyles({
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
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
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
function Navigator(props) {
    const { classes, navigatorConfig } = props, other = __rest(props, ["classes", "navigatorConfig"]);
    return (React.createElement(Drawer_1.default, Object.assign({ variant: "permanent" }, other),
        React.createElement(List_1.default, { disablePadding: true },
            React.createElement(ListItem_1.default, { className: clsx_1.default(classes.firebase, classes.item, classes.itemCategory) }, "Paperbase"),
            React.createElement(ListItem_1.default, { className: clsx_1.default(classes.item, classes.itemCategory) },
                React.createElement(ListItemIcon_1.default, { className: classes.itemIcon },
                    React.createElement(Home_1.default, null)),
                React.createElement(ListItemText_1.default, { classes: {
                        primary: classes.itemPrimary,
                    } }, "Project Overview")),
            navigatorConfig.map(({ id, children }) => (React.createElement(React.Fragment, { key: id },
                React.createElement(ListItem_1.default, { className: classes.categoryHeader },
                    React.createElement(ListItemText_1.default, { classes: {
                            primary: classes.categoryHeaderPrimary,
                        } }, id)),
                children.map(({ id: childId, icon }) => (React.createElement(ListItem_1.default, { key: childId, button: true, className: clsx_1.default(classes.item, false && classes.itemActiveItem) },
                    React.createElement(ListItemIcon_1.default, { className: classes.itemIcon }, icon),
                    React.createElement(ListItemText_1.default, { classes: {
                            primary: classes.itemPrimary,
                        } }, childId)))),
                React.createElement(Divider_1.default, { className: classes.divider })))))));
}
exports.default = styles_1.withStyles(styles)(Navigator);
//# sourceMappingURL=Navigator.js.map