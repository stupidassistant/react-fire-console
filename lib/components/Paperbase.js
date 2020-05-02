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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var MuiTheme_1 = require("../theme/MuiTheme");
var Drawer_1 = require("./Drawer");
var MainPage_1 = require("./MainPage");
var styles = styles_1.createStyles({
    root: {
        display: 'flex',
        minHeight: '100vh',
    }
});
var Paperbase = (function (_super) {
    __extends(Paperbase, _super);
    function Paperbase(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            mobileOpen: false
        };
        _this.toggleDraw = _this.toggleDraw.bind(_this);
        return _this;
    }
    Paperbase.prototype.toggleDraw = function () {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        });
    };
    Paperbase.prototype.render = function () {
        var _a = this.props, classes = _a.classes, navigatorConfig = _a.navigatorConfig;
        if (!navigatorConfig.auth.isSignedIn && navigatorConfig.auth.redirectIfNotSignedIn)
            return React.createElement(react_router_dom_1.Redirect, { to: navigatorConfig.auth.redirectIfNotSignedIn });
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(styles_1.ThemeProvider, { theme: MuiTheme_1.default },
                React.createElement("div", { className: classes.root },
                    React.createElement(CssBaseline_1.default, null),
                    React.createElement(Drawer_1.default, { open: this.state.mobileOpen, toggleDraw: this.toggleDraw, navigatorConfig: navigatorConfig }),
                    React.createElement(MainPage_1.default, { toggleDraw: this.toggleDraw, navigatorConfig: navigatorConfig })))));
    };
    return Paperbase;
}(React.Component));
exports.default = styles_1.withStyles(styles)(Paperbase);
//# sourceMappingURL=Paperbase.js.map