'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Code,
  PhoneAndroid,
  Palette,
  Business,
  Build,
} from '@mui/icons-material';
import { useLocale } from '@/contexts/LocaleContext';

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLocale();

  const services = [
    {
      icon: <Code sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: t('services.webDevelopment'),
      description: 'Створюю сучасні веб-сайти та веб-додатки з використанням найновіших технологій та найкращих практик розробки.',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Responsive Design'],
      color: theme.palette.primary.main,
    },
    {
      icon: <PhoneAndroid sx={{ fontSize: 50, color: theme.palette.secondary.main }} />,
      title: t('services.mobileApps'),
      description: 'Розробляю нативні та крос-платформені мобільні додатки для iOS та Android.',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      color: theme.palette.secondary.main,
    },
    {
      icon: <Palette sx={{ fontSize: 50, color: '#4caf50' }} />,
      title: t('services.uiDesign'),
      description: 'Створюю інтуїтивні та привабливі інтерфейси, які забезпечують відмінний користувацький досвід.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: '#4caf50',
    },
    {
      icon: <Business sx={{ fontSize: 50, color: '#ff9800' }} />,
      title: t('services.consulting'),
      description: 'Надаю експертні консультації з питань цифрової трансформації та технологічного розвитку.',
      features: ['Strategy Planning', 'Technology Audit', 'Process Optimization', 'Team Training'],
      color: '#ff9800',
    },
    {
      icon: <Build sx={{ fontSize: 50, color: '#9c27b0' }} />,
      title: t('services.maintenance'),
      description: 'Забезпечую постійну підтримку та обслуговування ваших цифрових продуктів.',
      features: ['24/7 Support', 'Performance Monitoring', 'Security Updates', 'Backup Management'],
      color: '#9c27b0',
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 2,
            }}
          >
            {t('services.title')}
          </Typography>
          
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Я пропоную комплексний спектр послуг для створення та розвитку вашого цифрового бізнесу
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                  borderTop: `4px solid ${service.color}`,
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box sx={{ textAlign: 'left' }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      Ключові особливості:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Typography
                          key={featureIndex}
                          component="li"
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 0.5,
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Готові почати проект? Зв'яжіться зі мною для безкоштовної консультації!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
