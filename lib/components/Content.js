"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AppBar_1 = require("@material-ui/core/AppBar");
const Toolbar_1 = require("@material-ui/core/Toolbar");
const Typography_1 = require("@material-ui/core/Typography");
const Paper_1 = require("@material-ui/core/Paper");
const Grid_1 = require("@material-ui/core/Grid");
const Button_1 = require("@material-ui/core/Button");
const TextField_1 = require("@material-ui/core/TextField");
const Tooltip_1 = require("@material-ui/core/Tooltip");
const IconButton_1 = require("@material-ui/core/IconButton");
const styles_1 = require("@material-ui/core/styles");
const Search_1 = require("@material-ui/icons/Search");
const Refresh_1 = require("@material-ui/icons/Refresh");
const styles = (theme) => styles_1.createStyles({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },
});
function Content(props) {
    const { classes } = props;
    return (React.createElement(Paper_1.default, { className: classes.paper },
        React.createElement(AppBar_1.default, { className: classes.searchBar, position: "static", color: "default", elevation: 0 },
            React.createElement(Toolbar_1.default, null,
                React.createElement(Grid_1.default, { container: true, spacing: 2, alignItems: "center" },
                    React.createElement(Grid_1.default, { item: true },
                        React.createElement(Search_1.default, { className: classes.block, color: "inherit" })),
                    React.createElement(Grid_1.default, { item: true, xs: true },
                        React.createElement(TextField_1.default, { fullWidth: true, placeholder: "Search by email address, phone number, or user UID", InputProps: {
                                disableUnderline: true,
                                className: classes.searchInput,
                            } })),
                    React.createElement(Grid_1.default, { item: true },
                        React.createElement(Button_1.default, { variant: "contained", color: "primary", className: classes.addUser }, "Add user"),
                        React.createElement(Tooltip_1.default, { title: "Reload" },
                            React.createElement(IconButton_1.default, null,
                                React.createElement(Refresh_1.default, { className: classes.block, color: "inherit" }))))))),
        React.createElement("div", { className: classes.contentWrapper },
            React.createElement(Typography_1.default, { color: "textSecondary", align: "center" }, "No users for this project yet2"))));
}
exports.default = styles_1.withStyles(styles)(Content);
//# sourceMappingURL=Content.js.map