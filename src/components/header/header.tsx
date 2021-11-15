import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'
import Hamburger from '../../assets/hamburger-menu.svg'
import Heart from '../../assets/heart.svg'
import Search from '../../assets/search.svg'
import LogoUrl from '../../assets/logo.svg'

const StyledHeader = styled.header(({transparent}: {transparent?: boolean}) => {
    return {
    ...typography.nav,
    backgroundColor: transparent ? 'rgba(0, 0 ,0 ,0)' : colors.white,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
    padding: '20px 10px',
    color: transparent ? '#FFFFFF' : 'inherit',
}})

const Logo = styled(LogoUrl)({
    border: 'none',
    height: '24px',
    width: '97px',
})

const IconWrapper = styled.div({
    justifyContent: 'end',
    display: 'flex',
    alignItems: 'center',
})

const HamburgerIcon = styled(Hamburger)({
    border: 'none',
    height: '18px',
    width: '24px',
})
const HeartIcon = styled(Heart)({
    border: 'none',
    height: '22.5px',
    width: '25px',
    marginRight: '31px'
})
const SearchIcon = styled(Search)({
    border: 'none',
    height: '20px',
    width: '20px',
    marginRight: '24px',
})

type Props = {
    transparent?: boolean;
}
const Header = ({transparent}: Props) => {
    return (
        <StyledHeader transparent={true}>
            <Logo />
            <IconWrapper>
                <SearchIcon />
                <HeartIcon />
                <HamburgerIcon />
            </IconWrapper>
            {/* <Heart />
            <Search />
            <Hamburger /> */}
        </StyledHeader>
    )
}

export default Header