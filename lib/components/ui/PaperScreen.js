"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
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
    var classes = props.classes, children = props.children;
    return (React.createElement(Paper_1.default, { className: classes.paper },
        React.createElement("div", { className: classes.contentWrapper }, children)));
}
exports.default = styles_1.withStyles(styles)(Content);
//# sourceMappingURL=PaperScreen.js.map