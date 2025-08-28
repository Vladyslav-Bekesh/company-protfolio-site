'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  LightMode,
  DarkMode,
  Language,
} from '@mui/icons-material';
import { useTheme as useCustomTheme } from '@/contexts/ThemeContext';
import { useLocale } from '@/contexts/LocaleContext';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { themeMode, toggleTheme } = useCustomTheme();
  const { locale, setLocale, t } = useLocale();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);

  const navigationItems = [
    { label: t('navigation.home'), href: '#home' },
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.services'), href: '#services' },
    { label: t('navigation.portfolio'), href: '#portfolio' },
    { label: t('navigation.contact'), href: '#contact' },
  ];

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageMenuAnchor(null);
  };

  const handleLanguageChange = (newLocale: 'uk' | 'en') => {
    setLocale(newLocale);
    handleLanguageClose();
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigationClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo/Brand */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            cursor: 'pointer',
          }}
          onClick={() => handleNavigationClick('#home')}
        >
          [Ваше Ім'я]
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                color="inherit"
                onClick={() => handleNavigationClick(item.href)}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Right Side Controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              },
            }}
          >
            {themeMode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>

          {/* Language Selector */}
          <IconButton
            onClick={handleLanguageClick}
            sx={{
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              },
            }}
          >
            <Language />
          </IconButton>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleMobileMenuToggle}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.08)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Меню
          </Typography>
          
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigationClick(item.href)}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: 500,
                        color: 'text.primary',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Language Menu */}
      <Menu
        anchorEl={languageMenuAnchor}
        open={Boolean(languageMenuAnchor)}
        onClose={handleLanguageClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => handleLanguageChange('uk')}
          selected={locale === 'uk'}
        >
          Українська
        </MenuItem>
        <MenuItem
          onClick={() => handleLanguageChange('en')}
          selected={locale === 'en'}
        >
          English
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
