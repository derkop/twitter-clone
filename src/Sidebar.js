import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function Sidebar() {
    const displayName = localStorage.getItem('name');
    const avatar = localStorage.getItem("profilePic");

    return (
        <div className="sidebar">
            <TwitterIcon className="twitter__icon"/>

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth disableRipple> Tweet</Button>
            
            <div className="sidebar__user">
                <Avatar src={avatar} alt="User Avatar" className="sidebar__avatar" />
                <div className="sidebar__userInfo">
                    <span className="sidebar__displayname">{displayName}</span>
                    <span className="sidebar__username">@testuser</span>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
