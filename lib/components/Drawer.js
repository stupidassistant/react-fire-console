"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const CssBaseline_1 = require("@material-ui/core/CssBaseline");
const Hidden_1 = require("@material-ui/core/Hidden");
const Navigator_1 = require("./Navigator");
const MuiTheme_1 = require("../theme/MuiTheme");
const drawerWidth = 256;
const styles = styles_1.createStyles({
    drawer: {
        [MuiTheme_1.default.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    }
});
class Drawer extends React.Component {
    render() {
        const { classes, navigatorConfig } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(CssBaseline_1.default, null),
            React.createElement("nav", { className: classes.drawer },
                React.createElement(Hidden_1.default, { smUp: true, implementation: "css" },
                    React.createElement(Navigator_1.default, { PaperProps: { style: { width: drawerWidth } }, variant: "temporary", open: this.props.open, onClose: this.props.toggleDraw, navigatorConfig: navigatorConfig })),
                React.createElement(Hidden_1.default, { smDown: true, implementation: "css" },
                    React.createElement(Navigator_1.default, { PaperProps: { style: { width: drawerWidth } }, navigatorConfig: navigatorConfig })))));
    }
}
exports.default = styles_1.withStyles(styles)(Drawer);
//# sourceMappingURL=Drawer.js.map