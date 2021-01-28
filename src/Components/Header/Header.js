import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption/HeaderOption';
//import LinkedInIcon from '@material-ui/icons/LinkedIn';

import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1611817536~hmac=5dfdb1305492793a05045dd94d4af7b8" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">
                {/* <HomeIcon />
                <PeopleAltIcon />
                <WorkIcon />
                <MessageIcon />
                <NotificationsIcon /> */}

                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleAltIcon} title="Networks" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={MessageIcon} title="Message" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
            </div>
        </div>
    )
}

export default Header
