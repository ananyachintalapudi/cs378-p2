import React from 'react';

const MenuTitle = ({logo}) => {
    return (
        <div>
            <div class="row">
                <img src={logo} class="logo" alt="Addikted Coffee Logo" />
            </div>
            <div class="row">
                <div class="h1">Addikted after One Sip</div>
                <div class="h2">OPEN 24 HOURS</div>
            </div>
        </div>
    );
};

export default MenuTitle;
