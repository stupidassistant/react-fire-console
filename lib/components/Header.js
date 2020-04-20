"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NavTabs_1 = require("./NavTabs");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Avatar_1 = require("@material-ui/core/Avatar");
var Button_1 = require("@material-ui/core/Button");
var Grid_1 = require("@material-ui/core/Grid");
var Help_1 = require("@material-ui/icons/Help");
var Hidden_1 = require("@material-ui/core/Hidden");
var IconButton_1 = require("@material-ui/core/IconButton");
var Link_1 = require("@material-ui/core/Link");
var Menu_1 = require("@material-ui/icons/Menu");
var Notifications_1 = require("@material-ui/icons/Notifications");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var Typography_1 = require("@material-ui/core/Typography");
var lightColor = 'rgba(255, 255, 255, 0.7)';
var styles = function (theme) {
    return styles_1.createStyles({
        secondaryBar: {
            zIndex: 0,
            width: '100vw'
        },
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
    });
};
function Header(props) {
    var _a;
    var classes = props.classes, toggleDraw = props.toggleDraw, headerConfig = props.headerConfig, tabs = props.tabs, uri = props.uri, auth = props.auth;
    return (React.createElement(React.Fragment, null,
        React.createElement(AppBar_1.default, { color: headerConfig.transparent ? "transparent" : "primary", position: headerConfig.thin && headerConfig.transparent ? "absolute" : "sticky", elevation: 0 },
            React.createElement(Toolbar_1.default, null,
                React.createElement(Grid_1.default, { container: true, spacing: 1, alignItems: "center" },
                    React.createElement(Hidden_1.default, { mdUp: true },
                        React.createElement(Grid_1.default, { item: true },
                            React.createElement(IconButton_1.default, { color: "inherit", "aria-label": "open drawer", onClick: toggleDraw, className: classes.menuButton },
                                React.createElement(Menu_1.default, null)))),
                    React.createElement(Grid_1.default, { item: true, xs: true }),
                    (headerConfig === null || headerConfig === void 0 ? void 0 : headerConfig.docsUri) && React.createElement(Grid_1.default, { item: true },
                        React.createElement(Link_1.default, { className: classes.link, href: headerConfig.docsUri, variant: "body2" }, "Go to docs")),
                    auth.signedIn && React.createElement(Grid_1.default, { item: true },
                        React.createElement(Tooltip_1.default, { title: "Alerts \u2022 No alerts" },
                            React.createElement(IconButton_1.default, { color: "inherit" },
                                React.createElement(Notifications_1.default, null)))),
                    React.createElement(Grid_1.default, { item: true }, auth.signedIn ?
                        React.createElement(IconButton_1.default, { color: "inherit", className: classes.iconButtonAvatar, onClick: auth.onPress },
                            React.createElement(Avatar_1.default, { src: auth.imageURL, alt: auth.username }))
                        :
                            React.createElement(Button_1.default, { className: classes.button, onClick: auth.onPress, href: auth.href, variant: "outlined", color: "inherit", size: "small" }, "Sign In"))))),
        !headerConfig.thin &&
            React.createElement(AppBar_1.default, { component: "div", className: classes.secondaryBar, color: headerConfig.transparent ? "transparent" : "primary", position: "static", elevation: 0 },
                React.createElement(Toolbar_1.default, null,
                    React.createElement(Grid_1.default, { container: true, alignItems: "center", spacing: 1 },
                        React.createElement(Grid_1.default, { item: true, xs: true },
                            React.createElement(Typography_1.default, { color: "inherit", variant: "h5", component: "h1" }, (headerConfig === null || headerConfig === void 0 ? void 0 : headerConfig.title) || "Default Title")), (_a = headerConfig === null || headerConfig === void 0 ? void 0 : headerConfig.additionButtons) === null || _a === void 0 ? void 0 :
                        _a.map(function (_a) {
                            var label = _a.label, uri = _a.uri;
                            return (React.createElement(Grid_1.default, { item: true },
                                React.createElement(Button_1.default, { className: classes.button, href: uri, variant: "outlined", color: "inherit", size: "small" }, label)));
                        }),
                        (headerConfig === null || headerConfig === void 0 ? void 0 : headerConfig.helpUri) && React.createElement(Grid_1.default, { item: true },
                            React.createElement(Tooltip_1.default, { title: "Help" },
                                React.createElement(IconButton_1.default, { color: "inherit", href: headerConfig.helpUri },
                                    React.createElement(Help_1.default, null))))))),
        !headerConfig.thin && uri &&
            React.createElement(AppBar_1.default, { component: "div", className: classes.secondaryBar, color: headerConfig.transparent ? "transparent" : "primary", position: "static", elevation: 0 },
                React.createElement(NavTabs_1.default, { root: uri, tabs: tabs || [] }))));
}
exports.default = styles_1.withStyles(styles)(Header);
//# sourceMappingURL=Header.js.map