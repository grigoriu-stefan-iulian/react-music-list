import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField
} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'


const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
})

const isEmpty = (str) => str.length === 0

// onTextChange, state, onSearchClick, classes
const Header = ({ onTextChange, searchTerm, onSearchClick, classes, clearSearch }) => {
    // const [searchText, setSearchText] = useState('')
    return (
        <div className="container">
            <header className="header app-header">
                <AppBar
                    position="static"
                    color="primary">
                    <Toolbar className="search-bar content-container">
                        <Typography variant="h6" color="inherit">
                            Musify
          </Typography>
                        <div className="search-container">
                            <TextField
                                placeholder="Search..."
                                className="search-input"
                                onChange={onTextChange}
                                value={searchTerm}
                            />
                            {!isEmpty(searchTerm) && (
                                <ClearIcon
                                    className="button--clear"
                                    onClick={clearSearch}
                                />
                            )}
                        </div>

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            onClick={onSearchClick}
                            disabled={isEmpty(searchTerm)}
                        >
                            Search
          </Button>
                    </Toolbar>
                </AppBar>
            </header>
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
