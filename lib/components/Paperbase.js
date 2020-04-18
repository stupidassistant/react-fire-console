"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const CssBaseline_1 = require("@material-ui/core/CssBaseline");
const Content_1 = require("./Content");
const Header_1 = require("./Header");
const MuiTheme_1 = require("../theme/MuiTheme");
const Drawer_1 = require("./Drawer");
const DefaultNavigatorConfig_1 = require("./DefaultNavigatorConfig");
const drawerWidth = 256;
const styles = styles_1.createStyles({
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [MuiTheme_1.default.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
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
    footer: {
        padding: MuiTheme_1.default.spacing(2),
        background: '#eaeff1',
    },
});
class Paperbase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
    }
    toggleDraw() {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        });
    }
    render() {
        const { classes } = this.props;
        return (React.createElement(styles_1.ThemeProvider, { theme: MuiTheme_1.default },
            React.createElement("div", { className: classes.root },
                React.createElement(CssBaseline_1.default, null),
                React.createElement(Drawer_1.default, { open: this.state.mobileOpen, toggleDraw: this.toggleDraw, navigatorConfig: this.props.navigatorConfig || DefaultNavigatorConfig_1.default }),
                React.createElement("div", { className: classes.app },
                    React.createElement(Header_1.default, { onDrawerToggle: this.toggleDraw }),
                    React.createElement("main", { className: classes.main },
                        React.createElement(Content_1.default, null))))));
    }
}
exports.default = styles_1.withStyles(styles)(Paperbase);
//# sourceMappingURL=Paperbase.js.map