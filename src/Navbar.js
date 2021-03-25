import React, { useContext } from 'react';
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

const content = {
    english: {
        search: "Search",
        flag: <img alt="Flag of the United States of America" src="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/220px-Flag_of_the_United_States.svg.png" width="30" height="25" />
    },
    french: {
        search: "Chercher",
        // flag: "🇫🇷"
        flag: <img alt="File:Flag of France" src="//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png" width="30" height="25"/>
    },
    spanish: {
        search: "Buscar",
        flag: <img alt="Flag of Spain (Civil)" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_%28Civil%29.svg/200px-Flag_of_Spain_%28Civil%29.svg.png" width="30" height="25" />
    }
};

function Navbar(props) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { classes } = props;
    const { search, flag } = content[language];
    return (
        <div className={classes.root}>
            <AppBar position="static" color={ isDarkMode ? "default" : "primary" }>
                <ToolBar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span role="img" aria-label="flag" style= {{marginTop: "7px"}}>{flag}</span>
                    </IconButton>
                    <Typography className={classes.title} varient="h6" color="inherit">
                        { isDarkMode ? "Dark" : "Light" }
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase 
                            placeholder= {`${search}...`}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput 
                            }}
                        />
                    </div>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Navbar);