import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkMode, toggleTheme } = this.context;
        const {classes} = this.props;
        return (
            <LanguageContext.Consumer>
                {content =>
                    <div className={classes.root}>
                        <AppBar position="static" color={ isDarkMode ? "default" : "primary" }>
                            <ToolBar>
                                <IconButton className={classes.menuButton} color="inherit">
                                    <span role="img" aria-label="flag">🎏</span>
                                </IconButton>
                                <Typography className={classes.title} varient="h6" color="inherit">
                                    App Title
                                </Typography>
                                <Switch onChange={toggleTheme} />
                                <div className={classes.grow} />
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase 
                                        placeholder= {`${content.language}...`}
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput 
                                        }}
                                    />
                                </div>
                            </ToolBar>
                        </AppBar>
                    </div>
                }
            </LanguageContext.Consumer>
        )
    }
}

export default withStyles(styles)(Navbar);