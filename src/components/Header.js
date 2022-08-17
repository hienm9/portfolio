import React from 'react'
import Navigation from './Navigation';

function Header(props) {
    const {page, setPage} = props;

    return (
        <>
            <header className="header">
                <h1><a href="/portfolio">Hien Mai</a></h1>
                    <Navigation
                        page={page}
                        setPage={setPage}
                    ></Navigation>
            </header>
        </>
    )
}

export default Header;