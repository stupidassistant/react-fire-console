"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AppBar_1 = require("@material-ui/core/AppBar");
const Avatar_1 = require("@material-ui/core/Avatar");
const Button_1 = require("@material-ui/core/Button");
const Grid_1 = require("@material-ui/core/Grid");
const Help_1 = require("@material-ui/icons/Help");
const Hidden_1 = require("@material-ui/core/Hidden");
const IconButton_1 = require("@material-ui/core/IconButton");
const Link_1 = require("@material-ui/core/Link");
const Menu_1 = require("@material-ui/icons/Menu");
const Notifications_1 = require("@material-ui/icons/Notifications");
const Toolbar_1 = require("@material-ui/core/Toolbar");
const Tooltip_1 = require("@material-ui/core/Tooltip");
const Typography_1 = require("@material-ui/core/Typography");
const styles_1 = require("@material-ui/core/styles");
const react_router_dom_1 = require("react-router-dom");
const NavTabs_1 = require("./NavTabs");
const lightColor = 'rgba(255, 255, 255, 0.7)';
const styles = (theme) => styles_1.createStyles({
    secondaryBar: {
        zIndex: 0,
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
function Header(props) {
    var _a;
    const { classes, onDrawerToggle, headerConfig, tabs, uri } = props;
    const [url, setUrl] = React.useState(null);
    if (url != null)
        return React.createElement(react_router_dom_1.Redirect, { to: url });
    return (React.createElement(React.Fragment, null,
        React.createElement(AppBar_1.default, { color: "primary", position: "sticky", elevation: 0 },
            React.createElement(Toolbar_1.default, null,
                React.createElement(Grid_1.default, { container: true, spacing: 1, alignItems: "center" },
                    React.createElement(Hidden_1.default, { smUp: true },
                        React.createElement(Grid_1.default, { item: true },
                            React.createElement(IconButton_1.default, { color: "inherit", "aria-label": "open drawer", onClick: onDrawerToggle, className: classes.menuButton },
                                React.createElement(Menu_1.default, null)))),
                    React.createElement(Grid_1.default, { item: true, xs: true }),
                    (headerConfig === null || headerConfig === void 0 ? void 0 : headerConfig.docsUri) && React.createElement(Grid_1.default, { item: true },
                        React.createElement(Link_1.default, { className: classes.link, href: headerConfig.docsUri, variant: "body2" }, "Go to docs")),
                    React.createElement(Grid_1.default, { item: true },
                        React.createElement(Tooltip_1.default, { title: "Alerts \u2022 No alerts" },
                            React.createElement(IconButton_1.default, { color: "inherit" },
                                React.createElement(Notifications_1.default, null)))),
                    React.createElement(Grid_1.default, { item: true },
                        React.createElement(IconButton_1.default, { color: "inherit", className: classes.iconButtonAvatar },
                            React.createElement(Avatar_1.default, { src: "/static/images/avatar/1.jpg", alt: "My Avatar" })))))),
        React.createElement(AppBar_1.default, { component: "div", className: classes.secondaryBar, color: "primary", position: "static", elevation: 0 },
            React.createElement(Toolbar_1.default, null,
                React.createElement(Grid_1.default, { container: true, alignItems: "center", spacing: 1 },
                    React.createElement(Grid_1.default, { item: true, xs: true },
                        React.createElement(Typography_1.default, { color: "inherit", variant: "h5", component: "h1" }, (headerConfig === null || headerConfig === void 0 ? void 0 : headerConfig.title) || "Default Title")), (_a = headerConfig === null || headerConfig === void 0 ? void 0 : headerConfig.additionButtons) === null || _a === void 0 ? void 0 :
                    _a.map(({ label, uri }) => (React.createElement(Grid_1.default, { item: true },
                        React.createElement(Button_1.default, { className: classes.button, href: uri, variant: "outlined", color: "inherit", size: "small" }, label)))),
                    (headerConfig === null || headerConfig === void 0 ? void 0 : headerConfig.helpUri) && React.createElement(Grid_1.default, { item: true },
                        React.createElement(Tooltip_1.default, { title: "Help" },
                            React.createElement(IconButton_1.default, { color: "inherit", href: headerConfig.helpUri },
                                React.createElement(Help_1.default, null))))))),
        React.createElement(AppBar_1.default, { component: "div", className: classes.secondaryBar, color: "primary", position: "static", elevation: 0 }, tabs && React.createElement(NavTabs_1.default, { root: uri, tabs: [
                { label: "Users", uri: 'users' },
                { label: "Sign-in method", uri: 'sign-in-method' },
                { label: "Templates", uri: 'templates' },
                { label: "Usage", uri: 'usage' }
            ] }))));
}
exports.default = styles_1.withStyles(styles)(Header);
//# sourceMappingURL=Header.js.map