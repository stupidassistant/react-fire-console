"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Button_1 = require("@material-ui/core/Button");
var Grid_1 = require("@material-ui/core/Grid");
var Help_1 = require("@material-ui/icons/Help");
var IconButton_1 = require("@material-ui/core/IconButton");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var Typography_1 = require("@material-ui/core/Typography");
var lightColor = 'rgba(255, 255, 255, 0.7)';
var styles = function (theme) {
    var _a;
    return styles_1.createStyles({
        secondaryBar: (_a = {
                zIndex: 0
            },
            _a[theme.breakpoints.down('sm')] = {
                width: '100vw'
            },
            _a),
        button: {
            borderColor: lightColor,
        },
    });
};
function Header(props) {
    var _a;
    var classes = props.classes, pageConfig = props.pageConfig;
    return (React.createElement(React.Fragment, null, pageConfig.header &&
        React.createElement(AppBar_1.default, { component: "div", className: classes.secondaryBar, color: "primary", position: "static", elevation: 0 },
            React.createElement(Toolbar_1.default, null,
                React.createElement(Grid_1.default, { container: true, alignItems: "center", spacing: 1 },
                    React.createElement(Grid_1.default, { item: true, xs: true },
                        React.createElement(Typography_1.default, { color: "inherit", variant: "h5", component: "h1" }, pageConfig.header.title || "Default Title")), (_a = pageConfig.header.additionalButtons) === null || _a === void 0 ? void 0 :
                    _a.map(function (_a) {
                        var label = _a.label, uri = _a.uri;
                        return (React.createElement(Grid_1.default, { item: true },
                            React.createElement(Button_1.default, { className: classes.button, href: uri, variant: "outlined", color: "inherit", size: "small" }, label)));
                    }),
                    pageConfig.header.helpURI && React.createElement(Grid_1.default, { item: true },
                        React.createElement(Tooltip_1.default, { title: "Help" },
                            React.createElement(IconButton_1.default, { color: "inherit", href: pageConfig.header.helpURI },
                                React.createElement(Help_1.default, null)))))))));
}
exports.default = styles_1.withStyles(styles)(Header);
//# sourceMappingURL=Header.js.map