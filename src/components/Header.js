import React from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core'
import SearchInput from './SearchInput'

const Header = () => {
    return (
        <AppBar
            position="static"
            color="secondary"
            id="appbar-content"
        >

            <div className="content-container">
              
                    <div className="header__content">
                        <div className="header__app-name">
                            <Typography variant="h6" color="inherit">
                                <Link className="header__logo" to="/" >
                                    <h1>Musify</h1>
                                </Link>
                            </Typography>
                        </div>
                        <div className="header__search-input">
                            <SearchInput />
                        </div>
                        <div className="header__favorites">
                            <Link
                                className="header__favorites__link"
                                to="/favorites/"
                            >
                                Favorites
                    </Link>
                        </div>
                    </div>
               
            </div>
        </AppBar>
    )
}

export default Header
