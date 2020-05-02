"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var Select_1 = require("@material-ui/core/Select");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var AppBar_1 = require("@material-ui/core/AppBar");
var Avatar_1 = require("@material-ui/core/Avatar");
var Button_1 = require("@material-ui/core/Button");
var Grid_1 = require("@material-ui/core/Grid");
var Hidden_1 = require("@material-ui/core/Hidden");
var IconButton_1 = require("@material-ui/core/IconButton");
var Link_1 = require("@material-ui/core/Link");
var Menu_1 = require("@material-ui/icons/Menu");
var Notifications_1 = require("@material-ui/icons/Notifications");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var lightColor = 'rgba(255, 255, 255, 0.7)';
var styles = function (theme) {
    return styles_1.createStyles({
        menuButton: {
            marginLeft: -theme.spacing(1),
        },
        iconButtonAvatar: {
            padding: 4,
        },
        link: {
            textDecoration: 'none',
            color: lightColor,
            '&:hover': {
                color: theme.palette.common.white,
            },
        },
        button: {
            borderColor: lightColor,
        },
        select: {
            shadows: ["none"],
            color: theme.palette.common.white,
            '&:before': {
                borderColor: theme.palette.common.white,
            },
            '&:after': {
                borderColor: theme.palette.common.white,
            }
        },
        icon: {
            fill: theme.palette.common.white,
        },
        selectDark: {
            shadows: ["none"],
            color: theme.palette.common.black,
            '&:before': {
                borderColor: theme.palette.common.black,
            },
            '&:after': {
                borderColor: theme.palette.common.black,
            }
        },
        iconDark: {
            fill: theme.palette.common.black,
        },
    });
};
function Header(props) {
    var _a, _b, _c;
    var classes = props.classes, toggleDraw = props.toggleDraw, navigatorConfig = props.navigatorConfig, pageConfig = props.pageConfig;
    return (React.createElement(React.Fragment, null,
        React.createElement(AppBar_1.default, { color: pageConfig.header ? "primary" : "transparent", position: "sticky", elevation: 0 },
            React.createElement(Toolbar_1.default, null,
                React.createElement(Grid_1.default, { container: true, spacing: 1, alignItems: "center" },
                    React.createElement(Hidden_1.default, { mdUp: true },
                        React.createElement(Grid_1.default, { item: true },
                            React.createElement(IconButton_1.default, { color: "inherit", "aria-label": "open drawer", onClick: toggleDraw, className: classes.menuButton },
                                React.createElement(Menu_1.default, null)))),
                    navigatorConfig.mainBar.dropdown && React.createElement(Grid_1.default, { item: true },
                        React.createElement(Select_1.default, { value: navigatorConfig.mainBar.dropdown.value || "", defaultValue: navigatorConfig.mainBar.dropdown.initialValue, onChange: function (e) {
                                var _a;
                                if ((_a = navigatorConfig.mainBar.dropdown) === null || _a === void 0 ? void 0 : _a.onChange)
                                    navigatorConfig.mainBar.dropdown.onChange(e.target.value);
                            }, displayEmpty: true, disableUnderline: true, className: pageConfig.header ? classes.select : classes.selectDark, inputProps: {
                                classes: {
                                    icon: pageConfig.header ? classes.icon : classes.iconDark,
                                }
                            }, placeholder: navigatorConfig.mainBar.dropdown.placeholder },
                            navigatorConfig.mainBar.dropdown.placeholder &&
                                React.createElement(MenuItem_1.default, { value: "", disabled: true }, navigatorConfig.mainBar.dropdown.placeholder),
                            Object.keys(navigatorConfig.mainBar.dropdown.options).map(function (key) {
                                var _a;
                                return (React.createElement(MenuItem_1.default, { value: key }, (_a = navigatorConfig.mainBar.dropdown) === null || _a === void 0 ? void 0 : _a.options[key]));
                            }))),
                    React.createElement(Grid_1.default, { item: true, xs: true }),
                    ((_a = pageConfig.header) === null || _a === void 0 ? void 0 : _a.docsURI) && React.createElement(Grid_1.default, { item: true },
                        React.createElement(Link_1.default, { className: classes.link, href: pageConfig.header.docsURI, variant: "body2" }, "Go to docs")),
                    navigatorConfig.auth.isSignedIn && React.createElement(Grid_1.default, { item: true },
                        React.createElement(Tooltip_1.default, { title: "Alerts \u2022 No alerts" },
                            React.createElement(IconButton_1.default, { color: "inherit" },
                                React.createElement(Notifications_1.default, null)))),
                    React.createElement(Grid_1.default, { item: true }, navigatorConfig.auth.isSignedIn ?
                        React.createElement(IconButton_1.default, { color: "inherit", className: classes.iconButtonAvatar, onClick: navigatorConfig.auth.onPressIcon },
                            React.createElement(Avatar_1.default, { src: (_b = navigatorConfig.auth.user) === null || _b === void 0 ? void 0 : _b.imageURL, alt: (_c = navigatorConfig.auth.user) === null || _c === void 0 ? void 0 : _c.username }))
                        :
                            React.createElement(Button_1.default, { className: classes.button, onClick: navigatorConfig.auth.onPressRegister, href: navigatorConfig.auth.registerURI, variant: "outlined", color: "inherit", size: "small" }, "Sign In")))))));
}
exports.default = styles_1.withStyles(styles)(Header);
//# sourceMappingURL=TopBar.js.map