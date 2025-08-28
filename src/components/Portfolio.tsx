'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';
import { useLocale } from '@/contexts/LocaleContext';

const Portfolio: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLocale();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Сучасна платформа для онлайн-торгівлі з інтеграцією платежів та системою управління замовленнями.',
      image: 'https://via.placeholder.com/400x250/1976d2/ffffff?text=E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      demoUrl: '#',
      githubUrl: '#',
      longDescription: 'Повнофункціональна e-commerce платформа з адміністративною панеллю, системою користувачів, корзиною покупок та інтеграцією з платіжними системами. Проект включає оптимізацію для пошукових систем та мобільну адаптацію.',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Мобільний додаток для банківських операцій з високим рівнем безпеки та зручним інтерфейсом.',
      image: 'https://via.placeholder.com/400x250/dc004e/ffffff?text=Banking+App',
      technologies: ['React Native', 'Firebase', 'Biometric Auth', 'Push Notifications'],
      category: 'Mobile Development',
      demoUrl: '#',
      githubUrl: '#',
      longDescription: 'Безпечний мобільний банківський додаток з підтримкою біометричної автентифікації, push-повідомлень та real-time оновлень. Додаток має інтуїтивний інтерфейс та відповідає всім стандартам банківської безпеки.',
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Система управління завданнями для команд з функціями співпраці та відстеження прогресу.',
      image: 'https://via.placeholder.com/400x250/4caf50/ffffff?text=Task+Manager',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
      category: 'Web Development',
      demoUrl: '#',
      githubUrl: '#',
      longDescription: 'Комплексна система управління проектами з функціями створення завдань, призначення відповідальних осіб, відстеження прогресу та сповіщень у реальному часі. Система підтримує роботу з великими командами та проектами.',
    },
    {
      id: 4,
      title: 'AI Chatbot',
      description: 'Інтелектуальний чат-бот для обслуговування клієнтів з використанням машинного навчання.',
      image: 'https://via.placeholder.com/400x250/ff9800/ffffff?text=AI+Chatbot',
      technologies: ['Python', 'TensorFlow', 'NLP', 'WebSocket'],
      category: 'AI/ML',
      demoUrl: '#',
      githubUrl: '#',
      longDescription: 'Розумний чат-бот, навчений на великих обсягах даних для надання точних відповідей на запити клієнтів. Бот інтегрується з веб-сайтом та мобільними додатками, надаючи 24/7 підтримку користувачів.',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Платформа для пошуку та оренди нерухомості з розширеними фільтрами та картами.',
      image: 'https://via.placeholder.com/400x250/9c27b0/ffffff?text=Real+Estate',
      technologies: ['Next.js', 'TypeScript', 'Google Maps API', 'Prisma'],
      category: 'Web Development',
      demoUrl: '#',
      githubUrl: '#',
      longDescription: 'Сучасна платформа для пошуку нерухомості з інтеграцією Google Maps, розширеними фільтрами пошуку та системою бронювання. Проект включає адміністративну панель для агентств нерухомості та систему користувачів.',
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Додаток для відстеження фізичних вправ з персоналізованими планами тренувань.',
      image: 'https://via.placeholder.com/400x250/607d8b/ffffff?text=Fitness+App',
      technologies: ['Flutter', 'Health Kit', 'Cloud Firestore', 'Analytics'],
      category: 'Mobile Development',
      demoUrl: '#',
      githubUrl: '#',
      longDescription: 'Комплексний додаток для фітнесу з інтеграцією з Health Kit та Google Fit, персоналізованими планами тренувань, відстеженням прогресу та соціальними функціями для мотивації користувачів.',
    },
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box
      id="portfolio"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
            {t('portfolio.title')}
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
            Ознайомтеся з моїми найкращими проектами та технологіями, які я використовую
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} lg={4} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
                onClick={() => handleProjectClick(project)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        mb: 1,
                      }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Project Details Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ pb: 1 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  {selectedProject.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {selectedProject.category}
                </Typography>
              </DialogTitle>
              
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
                
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  {selectedProject.longDescription}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    {t('portfolio.technologies')}:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </Box>
              </DialogContent>
              
              <DialogActions sx={{ p: 3, pt: 1 }}>
                <Button
                  startIcon={<GitHub />}
                  variant="outlined"
                  href={selectedProject.githubUrl}
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  startIcon={<Launch />}
                  variant="contained"
                  href={selectedProject.demoUrl}
                  target="_blank"
                >
                  {t('portfolio.viewProject')}
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Portfolio;
