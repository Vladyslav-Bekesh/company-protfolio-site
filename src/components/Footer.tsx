'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  GitHub,
} from '@mui/icons-material';
import { useLocale } from '@/contexts/LocaleContext';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLocale();

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Особисті',
      links: [
        { label: t('navigation.about'), href: '#about' },
        { label: 'Резюме', href: '#resume' },
        { label: 'Блог', href: '#blog' },
        { label: 'Подорожі', href: '#travels' },
      ],
    },
    {
      title: 'Послуги',
      links: [
        { label: t('services.webDevelopment'), href: '#web-development' },
        { label: t('services.mobileApps'), href: '#mobile-apps' },
        { label: t('services.uiDesign'), href: '#ui-design' },
        { label: t('services.consulting'), href: '#consulting' },
      ],
    },
    {
      title: 'Портфоліо',
      links: [
        { label: 'Веб-проекти', href: '#web-projects' },
        { label: 'Мобільні додатки', href: '#mobile-projects' },
        { label: 'Дизайн проекти', href: '#design-projects' },
        { label: 'Відгуки клієнтів', href: '#testimonials' },
      ],
    },
    {
      title: 'Правова інформація',
      links: [
        { label: t('footer.privacy'), href: '#privacy' },
        { label: t('footer.terms'), href: '#terms' },
        { label: 'Cookies', href: '#cookies' },
        { label: 'GDPR', href: '#gdpr' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: '#', label: 'Facebook' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram />, href: '#', label: 'Instagram' },
    { icon: <GitHub />, href: '#', label: 'GitHub' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr 1fr' }, gap: 4 }}>
          {/* Personal Info */}
          <Box sx={{ gridColumn: { xs: '1', md: '1' } }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                [Ваше Ім'я]
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                Я - досвідчений розробник та дизайнер, який створює інноваційні цифрові рішення. 
                Моя мета - допомогти бізнесу та людям досягти успіху в цифровому світі.
              </Typography>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <Box key={index} sx={{ gridColumn: { xs: '1', md: String(index + 2) } }}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 2,
                  }}
                >
                  {section.title}
                </Typography>
                
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {section.links.map((link, linkIndex) => (
                    <Box component="li" key={linkIndex} sx={{ mb: 1 }}>
                      <Link
                        href={link.href}
                        sx={{
                          color: 'text.secondary',
                          textDecoration: 'none',
                          '&:hover': {
                            color: theme.palette.primary.main,
                          },
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {link.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Newsletter Section */}
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.divider}`,
            pt: 4,
            mt: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Підпишіться на мої оновлення
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Отримуйте останні новини про мої проекти, технології та події
          </Typography>
        </Box>

        {/* Bottom Footer */}
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.divider}`,
            pt: 3,
            mt: 3,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            © {currentYear} [Ваше Ім'я]. {t('footer.rights')}.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              href="#privacy"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {t('footer.privacy')}
            </Link>
            <Link
              href="#terms"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {t('footer.terms')}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
