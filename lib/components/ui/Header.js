"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var styles = function (theme) {
    return styles_1.createStyles({
        header: {
            paddingTop: 48,
            backgroundColor: 'rgb(52, 68, 159)',
            height: 450
        }
    });
};
function Header(props) {
    var classes = props.classes;
    return (React.createElement(core_1.Box, { className: classes.header },
        React.createElement(core_1.Container, { maxWidth: "md" },
            React.createElement(core_1.Typography, { variant: "h3" }, "Performance"),
            React.createElement(core_1.Typography, { variant: "h5" }, "Get actionable insights into your app's performance and the latencies your users experience"))));
}
exports.default = styles_1.withStyles(styles)(Header);
//# sourceMappingURL=Header.js.map