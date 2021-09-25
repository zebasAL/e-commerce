import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SideSheet, Pane, Heading, Tablist, Button, Icon, MenuIcon,
} from 'evergreen-ui';
import NavBarCategoriesBtns from './NavBarCategoriesBtns';
import LoginAndCartBtns from './LoginAndCartBtns';

function AsideBar({ categoryValues }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="aside-navbar">
      <SideSheet
        width={200}
        height={100}
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading className="aside-navbar-header" size={600}>MENU</Heading>
          </Pane>
          <Tablist display="flex" flexDirection="column" flex="1" padding={8}>
            <LoginAndCartBtns display="flex" flexDirection="column" />
            <NavBarCategoriesBtns categoryValues={categoryValues} display="flex" flexDirection="column" flex="1" />
          </Tablist>
        </Pane>
      </SideSheet>
      <Button data-cy="aside-navbar" border="none" height={30} onClick={() => setIsShown(true)}>
        <Icon icon={MenuIcon} size={20} />
      </Button>
    </div>
  );
}

AsideBar.propTypes = {
  categoryValues: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AsideBar;
