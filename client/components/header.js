import * as React from 'react';

import Link from "next/link";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sell Tickets", href: "/tickets/new" },
    currentUser && { label: "My Orders", href: "/orders" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Button key={label} sx={{ color: '#000', marginRight: 3 }}>
          <Link href={href}>
            <a className="nav-link" style={{ textTransform: 'capitalize', fontWeight: 'bolder' }}>{label}</a>
          </Link>
        </Button>

      );
    });


  ///
  const window = null;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    // <nav className="navbar navbar-light bg-light">
    //   <Link href="/">
    //     <a className="navbar-brand">Ticket Hub</a>
    //   </Link>

    //   <div className="d-flex justify-content-end">
    //     <ul className="nav d-flex align-items-center">{links}</ul>
    //   </div>
    // </nav>
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" style={{ backgroundColor: '#fff', boxShadow: 'none' }} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginLeft: 8, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link href={`/`}>
                <img src="/ticket-hub.svg" />
              </Link>

            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block', } }} style={{ marginRight: 36 }}>
              {links}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer

            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>

        </Box>
      </Box >
      <Container>
        <div style={{
          marginTop: 36, marginBottom: 16, display: 'flex', gap: 32, fontWeight: 'bolder'
        }}>
          <span >Sports</span>
          <span>Movie</span>
          <span>Concert</span>
          <span>Sneakers</span>

        </div>
      </Container>
    </>

  );
};

export default Header;
