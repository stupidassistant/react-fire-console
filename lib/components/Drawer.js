"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var Hidden_1 = require("@material-ui/core/Hidden");
var Navigator_1 = require("./Navigator");
var MuiTheme_1 = require("../theme/MuiTheme");
var drawerWidth = 256;
var styles = styles_1.createStyles({
    drawer: (_a = {},
        _a[MuiTheme_1.default.breakpoints.up('md')] = {
            width: drawerWidth,
            flexShrink: 0,
        },
        _a)
});
var Drawer = (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drawer.prototype.render = function () {
        var _a = this.props, classes = _a.classes, navigatorConfig = _a.navigatorConfig, toggleDraw = _a.toggleDraw, open = _a.open;
        return (React.createElement(React.Fragment, null,
            React.createElement(CssBaseline_1.default, null),
            React.createElement("nav", { className: classes.drawer },
                React.createElement(Hidden_1.default, { smUp: true, implementation: "css" },
                    React.createElement(Navigator_1.default, { PaperProps: { style: { width: drawerWidth } }, variant: "temporary", open: open, onClose: toggleDraw, navigatorConfig: navigatorConfig, toggleDraw: toggleDraw })),
                React.createElement(Hidden_1.default, { smDown: true, implementation: "css" },
                    React.createElement(Navigator_1.default, { PaperProps: { style: { width: drawerWidth } }, navigatorConfig: navigatorConfig })))));
    };
    return Drawer;
}(React.Component));
exports.default = styles_1.withStyles(styles)(Drawer);
//# sourceMappingURL=Drawer.js.map