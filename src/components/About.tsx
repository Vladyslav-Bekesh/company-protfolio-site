"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Lightbulb, CheckCircle, Security, Group } from "@mui/icons-material";
import { useLocale } from "@/contexts/LocaleContext";

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useLocale();

  const values = [
    {
      icon: (
        <Lightbulb sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: t("about.values.innovation"),
      description:
        "Я постійно шукаю нові та кращі способи вирішення завдань та створення інноваційних рішень.",
    },
    {
      icon: (
        <CheckCircle sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: t("about.values.quality"),
      description:
        "Кожен проект я виконую на найвищому рівні якості, дотримуючись найкращих практик та стандартів.",
    },
    {
      icon: (
        <Security sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: t("about.values.reliability"),
      description:
        "Я завжди дотримуюся обіцянок та термінів, забезпечуючи надійність у всьому, що роблю.",
    },
    {
      icon: <Group sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: t("about.values.teamwork"),
      description:
        "Я люблю працювати в команді та ефективно співпрацювати з клієнтами та колегами.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: "text.primary",
              mb: 2,
            }}
          >
            {t("about.title")}
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "text.secondary",
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            {t("about.description")}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{value.icon}</Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      mb: 2,
                    }}
                  >
                    {value.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional personal info */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  borderRadius: 3,
                  background: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "4rem",
                }}
              >
                🎯
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    mb: 3,
                  }}
                >
                  Моя місія
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Я прагну створювати інноваційні технологічні рішення, які
                  допомагають людям та бізнесу досягати своїх цілей.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                  }}
                >
                  Моя робота об'єднує технічну експертизу, креативність та
                  розуміння потреб користувачів для створення продуктів, які
                  мають значення.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
