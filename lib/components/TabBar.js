"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NavTabs_1 = require("./NavTabs");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var styles = function (theme) {
    var _a;
    return styles_1.createStyles({
        secondaryBar: (_a = {
                zIndex: 0
            },
            _a[theme.breakpoints.down('sm')] = {
                width: '100vw'
            },
            _a)
    });
};
function TabBar(props) {
    var classes = props.classes, pageConfig = props.pageConfig, rootURI = props.rootURI;
    return (React.createElement(AppBar_1.default, { component: "div", className: classes.secondaryBar, color: "primary", position: "static", elevation: 0 },
        React.createElement(NavTabs_1.default, { root: rootURI, tabs: pageConfig.tabbed && pageConfig.tabs || [] })));
}
exports.default = styles_1.withStyles(styles)(TabBar);
//# sourceMappingURL=TabBar.js.map