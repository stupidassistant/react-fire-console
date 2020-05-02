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
var styles_1 = require("@material-ui/core/styles");
var react_router_dom_1 = require("react-router-dom");
var Content_1 = require("./Content");
var Header_1 = require("./Header");
var MuiTheme_1 = require("../theme/MuiTheme");
var TopBar_1 = require("./TopBar");
var TabBar_1 = require("./TabBar");
var styles = styles_1.createStyles({
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
});
var Paperbase = (function (_super) {
    __extends(Paperbase, _super);
    function Paperbase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Paperbase.prototype.renderPageConfig = function (pageConfig, rootURI) {
        var _a = this.props, classes = _a.classes, navigatorConfig = _a.navigatorConfig, toggleDraw = _a.toggleDraw;
        return (React.createElement("div", { className: classes.app },
            React.createElement(TopBar_1.default, { navigatorConfig: navigatorConfig, pageConfig: pageConfig, toggleDraw: toggleDraw }),
            pageConfig.header && React.createElement(Header_1.default, { pageConfig: pageConfig }),
            pageConfig.tabbed ? (React.createElement(React.Fragment, null,
                React.createElement(TabBar_1.default, { pageConfig: pageConfig, rootURI: rootURI }),
                React.createElement(react_router_dom_1.Route, { path: "" + rootURI, exact: true },
                    React.createElement(react_router_dom_1.Redirect, { to: "" + rootURI + pageConfig.tabs.filter(function (v) { return v.label == pageConfig.mainTab; })[0].uri })),
                React.createElement("main", { className: classes.main }, pageConfig.tabs.map(function (_a) {
                    var component = _a.component, uri = _a.uri;
                    return (React.createElement(react_router_dom_1.Route, { path: "" + rootURI + uri, exact: true }, component || React.createElement(Content_1.default, { label: 'Empty Page' })));
                })))) : (React.createElement("main", { className: classes.main }, pageConfig.component || React.createElement(Content_1.default, { label: 'Empty Page' })))));
    };
    Paperbase.prototype.renderGroups = function (navigatorConfig) {
        var _this = this;
        return navigatorConfig.groups.reduce(function (list, groupConfig, key) {
            if (groupConfig.type == "page")
                list.push(React.createElement(react_router_dom_1.Route, { path: groupConfig.uri, exact: true }, _this.renderPageConfig(groupConfig.pageConfig, groupConfig.uri)));
            else if (groupConfig.type == "group")
                list.push.apply(list, groupConfig.children.map(function (_a) {
                    var pageConfig = _a.pageConfig, uri = _a.uri;
                    return (React.createElement(react_router_dom_1.Route, { path: uri }, _this.renderPageConfig(pageConfig, uri)));
                }));
            return list;
        }, []);
    };
    Paperbase.prototype.render = function () {
        var navigatorConfig = this.props.navigatorConfig;
        return this.renderGroups(navigatorConfig);
    };
    return Paperbase;
}(React.Component));
exports.default = styles_1.withStyles(styles)(Paperbase);
//# sourceMappingURL=MainPage.js.map