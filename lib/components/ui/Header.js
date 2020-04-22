"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var styles = function (theme) {
    return styles_1.createStyles({
        header: {
            padding: 20,
            paddingTop: 48,
            backgroundColor: 'rgb(52, 68, 159)',
            height: 450,
            paddingBottom: 100
        }
    });
};
function Header(props) {
    var classes = props.classes;
    return (React.createElement(core_1.Box, { className: classes.header },
        React.createElement(core_1.Box, { display: "flex", flexDirection: 'column', justifyContent: 'center', height: '100%' },
            React.createElement(core_1.Container, { maxWidth: "md", style: { color: 'white' } },
                React.createElement(core_1.Typography, { variant: "h3" }, "A/B Testing"),
                React.createElement(core_1.Typography, { variant: "h6" }, "Run experiments to make key engagement flows more effective"),
                React.createElement(core_1.Button, { variant: "contained", color: "secondary" }, "Create experiment")))));
}
exports.default = styles_1.withStyles(styles)(Header);
//# sourceMappingURL=Header.js.map