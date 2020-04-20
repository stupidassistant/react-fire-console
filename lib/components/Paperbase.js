"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@material-ui/core/styles");
const CssBaseline_1 = require("@material-ui/core/CssBaseline");
const MuiTheme_1 = require("../theme/MuiTheme");
const Drawer_1 = require("./Drawer");
const MainPage_1 = require("./MainPage");
const DefaultNavigatorConfig_1 = require("./DefaultNavigatorConfig");
const styles = styles_1.createStyles({
    root: {
        display: 'flex',
        minHeight: '100vh',
    }
});
class Paperbase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
        this.toggleDraw = this.toggleDraw.bind(this);
    }
    toggleDraw() {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        });
    }
    render() {
        const { classes, navigatorConfig: propsNavigatorConfig } = this.props;
        const navigatorConfig = propsNavigatorConfig || DefaultNavigatorConfig_1.default;
        if (!navigatorConfig.auth.signedIn && navigatorConfig.auth.autoRedirect)
            return React.createElement(react_router_dom_1.Redirect, { to: navigatorConfig.auth.autoRedirect });
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(styles_1.ThemeProvider, { theme: MuiTheme_1.default },
                React.createElement("div", { className: classes.root },
                    React.createElement(CssBaseline_1.default, null),
                    React.createElement(Drawer_1.default, { open: this.state.mobileOpen, toggleDraw: this.toggleDraw, navigatorConfig: navigatorConfig }),
                    React.createElement(MainPage_1.default, { toggleDraw: this.toggleDraw, navigatorConfig: navigatorConfig })))));
    }
}
exports.default = styles_1.withStyles(styles)(Paperbase);
//# sourceMappingURL=Paperbase.js.map