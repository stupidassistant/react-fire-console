"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const react_router_dom_1 = require("react-router-dom");
const Content_1 = require("./Content");
const Header_1 = require("./Header");
const MuiTheme_1 = require("../theme/MuiTheme");
const styles = styles_1.createStyles({
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: MuiTheme_1.default.spacing(6, 4),
        background: '#eaeff1',
    },
});
class Paperbase extends React.Component {
    renderScreen(config, exact = false) {
        const { classes, navigatorConfig, toggleDraw } = this.props;
        const { uri, header, tabs, rootRedirectsTo, component } = config;
        let fixedUri = uri || '/';
        return (React.createElement(react_router_dom_1.Route, { path: fixedUri, exact: exact },
            React.createElement("div", { className: classes.app },
                React.createElement(Header_1.default, { uri: fixedUri, toggleDraw: toggleDraw, headerConfig: header, tabs: tabs, auth: navigatorConfig.auth }),
                React.createElement("main", { className: classes.main },
                    rootRedirectsTo &&
                        React.createElement(react_router_dom_1.Route, { path: fixedUri, exact: true },
                            React.createElement(react_router_dom_1.Redirect, { to: fixedUri + rootRedirectsTo })),
                    tabs ?
                        tabs.map(tab => {
                            return (React.createElement(react_router_dom_1.Route, { path: fixedUri + tab.uri }, tab.component || React.createElement(Content_1.default, { label: tab.label })));
                        }) :
                        component || React.createElement(Content_1.default, { label: header.title })))));
    }
    render() {
        const { navigatorConfig } = this.props;
        return (React.createElement(react_router_dom_1.Switch, null,
            this.renderScreen(navigatorConfig.mainPage, true),
            navigatorConfig.groups.reduce((list, { children }, groupId) => {
                list.push(...children.map((_, pageId) => this.renderScreen(navigatorConfig.groups[groupId].children[pageId])));
                return list;
            }, [])));
    }
}
exports.default = styles_1.withStyles(styles)(Paperbase);
//# sourceMappingURL=MainPage.js.map