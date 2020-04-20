"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const Content_1 = require("./Content");
const Header_1 = require("./Header");
const MuiTheme_1 = require("../theme/MuiTheme");
const react_router_dom_1 = require("react-router-dom");
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
        const { classes } = this.props;
        const { uri, component, header, tabs } = config;
        let fixedUri = uri || '/';
        return (React.createElement(react_router_dom_1.Route, { path: fixedUri, exact: exact },
            React.createElement("div", { className: classes.app },
                React.createElement(Header_1.default, { uri: fixedUri, onDrawerToggle: this.props.toggleDraw, headerConfig: header, tabs: tabs }),
                React.createElement("main", { className: classes.main },
                    React.createElement(Content_1.default, null)))));
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