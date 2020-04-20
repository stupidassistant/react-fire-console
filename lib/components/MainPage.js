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
    Paperbase.prototype.renderScreen = function (pageConfig, exact) {
        if (exact === void 0) { exact = false; }
        var _a = this.props, classes = _a.classes, navigatorConfig = _a.navigatorConfig, toggleDraw = _a.toggleDraw;
        var contents = pageConfig.contents;
        var fixedUri = pageConfig.uri || '/';
        if (!contents.tabbed)
            return (React.createElement(react_router_dom_1.Route, { path: fixedUri, exact: exact },
                React.createElement("div", { className: classes.app },
                    React.createElement(Header_1.default, { toggleDraw: toggleDraw, headerConfig: contents.header, auth: navigatorConfig.auth }),
                    contents.header.transparent ?
                        (contents.component || React.createElement(Content_1.default, { label: 'Empty Page' }))
                        :
                            React.createElement("main", { className: classes.main }, contents.component || React.createElement(Content_1.default, { label: 'Empty Page' })))));
        else {
            return (React.createElement(react_router_dom_1.Route, { path: fixedUri, exact: exact },
                React.createElement("div", { className: classes.app },
                    React.createElement(Header_1.default, { uri: fixedUri, toggleDraw: toggleDraw, headerConfig: contents.header, tabs: contents.tabs, auth: navigatorConfig.auth }),
                    React.createElement("main", { className: classes.main },
                        React.createElement(react_router_dom_1.Route, { path: fixedUri, exact: true },
                            React.createElement(react_router_dom_1.Redirect, { to: fixedUri + contents.rootRedirectsTo })),
                        contents.tabs.map(function (tab) { return (React.createElement(react_router_dom_1.Route, { path: fixedUri + tab.uri }, tab.component || React.createElement(Content_1.default, { label: tab.label }))); })))));
        }
    };
    Paperbase.prototype.render = function () {
        var _this = this;
        var navigatorConfig = this.props.navigatorConfig;
        return (React.createElement(react_router_dom_1.Switch, null,
            this.renderScreen(navigatorConfig.mainPage, true),
            navigatorConfig.groups.reduce(function (list, _a, groupId) {
                var children = _a.children;
                list.push.apply(list, children.map(function (pageConfig, pageId) {
                    return _this.renderScreen(pageConfig);
                }));
                return list;
            }, [])));
    };
    return Paperbase;
}(React.Component));
exports.default = styles_1.withStyles(styles)(Paperbase);
//# sourceMappingURL=MainPage.js.map