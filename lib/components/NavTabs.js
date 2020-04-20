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
var Tab_1 = require("@material-ui/core/Tab");
var Tabs_1 = require("@material-ui/core/Tabs");
;
var NavTabs = (function (_super) {
    __extends(NavTabs, _super);
    function NavTabs(props) {
        var _this = _super.call(this, props) || this;
        _this.handleCallToRouter = _this.handleCallToRouter.bind(_this);
        return _this;
    }
    NavTabs.prototype.handleCallToRouter = function (_, uri) {
        this.props.history.push(uri);
    };
    NavTabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, tabs = _a.tabs, history = _a.history;
        return (React.createElement(Tabs_1.default, { value: history.location.pathname, onChange: this.handleCallToRouter, textColor: "inherit", scrollButtons: "auto", variant: "scrollable" }, tabs.map(function (_a, index) {
            var label = _a.label, uri = _a.uri;
            return (React.createElement(Tab_1.default, { textColor: "inherit", label: label, value: _this.props.root + uri }));
        })));
    };
    return NavTabs;
}(React.Component));
exports.default = react_router_dom_1.withRouter(NavTabs);
//# sourceMappingURL=NavTabs.js.map