"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Tab_1 = require("@material-ui/core/Tab");
const Tabs_1 = require("@material-ui/core/Tabs");
;
class NavTabs extends React.Component {
    constructor(props) {
        super(props);
        this.handleCallToRouter = this.handleCallToRouter.bind(this);
    }
    handleCallToRouter(_, uri) {
        this.props.history.push(uri);
    }
    render() {
        const { tabs, history } = this.props;
        return (React.createElement(Tabs_1.default, { value: history.location.pathname, onChange: this.handleCallToRouter, textColor: "inherit", variant: "scrollable" }, tabs.map(({ label, uri }, index) => (React.createElement(Tab_1.default, { textColor: "inherit", label: label, value: this.props.root + uri })))));
    }
}
exports.default = react_router_dom_1.withRouter(NavTabs);
//# sourceMappingURL=NavTabs.js.map