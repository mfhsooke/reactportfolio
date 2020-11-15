import React from 'react'
import {ImHome3} from 'react-icons/im';
import {ImUser} from 'react-icons/im';
import {ImFolderOpen} from 'react-icons/im';
import {ImBubbles3} from 'react-icons/im';
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="#home" onClick={toggle}>
                        <ImHome3 />&nbsp;HOME</SidebarLink>
                    <SidebarLink to="#about" onClick={toggle}>
                        <ImUser />&nbsp;ABOUT</SidebarLink>
                    <SidebarLink to="#projects" onClick={toggle}>
                        <ImFolderOpen />&nbsp;PROJECTS</SidebarLink>
                    <SidebarLink to="#contact" onClick={toggle}>
                        <ImBubbles3 />&nbsp;CONTACT</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
