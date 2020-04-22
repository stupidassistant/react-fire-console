"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = require("@material-ui/core/Typography");
var Paper_1 = require("@material-ui/core/Paper");
var styles = function (theme) {
    return styles_1.createStyles({
        paper: {
            maxWidth: 936,
            margin: 'auto',
            overflow: 'hidden',
        },
        contentWrapper: {
            margin: '40px 16px',
        },
    });
};
function Content(props) {
    var classes = props.classes, label = props.label;
    return (React.createElement(Paper_1.default, { className: classes.paper },
        React.createElement("div", { className: classes.contentWrapper },
            React.createElement(Typography_1.default, { color: "textSecondary", align: "center" }, "This page, called " + label + " has not been configured yet. Please stand by."))));
}
exports.default = styles_1.withStyles(styles)(Content);
//# sourceMappingURL=Content.js.map