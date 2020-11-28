import { Flex, Heading, TopNav, Button } from 'bumbag';
import React from 'react';

const Header = () => {
    return (<TopNav>
        <TopNav.Section>
            <TopNav.Item href="https://bumbag.style" fontWeight="semibold">

            </TopNav.Item>
            <TopNav.Item href="#">Get started</TopNav.Item>
            <TopNav.Item href="#">Components</TopNav.Item>
        </TopNav.Section>
        <TopNav.Section marginRight="major-2">
            <TopNav.Item>
                <Button variant="ghost" palette="primary">Sign up</Button>
            </TopNav.Item>
            <TopNav.Item>
                <Button palette="primary">Login</Button>
            </TopNav.Item>
        </TopNav.Section>
    </TopNav>)
}

export default Header;