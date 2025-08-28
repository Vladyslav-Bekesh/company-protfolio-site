"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Alert,
  Snackbar,
} from "@mui/material";
import { Send, LocationOn, Phone, Email, Schedule } from "@mui/icons-material";
import { useLocale } from "@/contexts/LocaleContext";

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useLocale();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Валідація форми
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSnackbar({
        open: true,
        message: "Будь ласка, заповніть всі поля",
        severity: "error",
      });
      return;
    }

    if (!formData.email.includes("@")) {
      setSnackbar({
        open: true,
        message: "Будь ласка, введіть коректну email адресу",
        severity: "error",
      });
      return;
    }

    // Тут можна додати логіку відправки форми
    console.log("Form submitted:", formData);

    setSnackbar({
      open: true,
      message: "Дякуємо! Ваше повідомлення успішно відправлено.",
      severity: "success",
    });

    // Очищення форми
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: (
        <LocationOn sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: t("contact.address"),
      content: "Київ, Україна",
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: t("contact.phone"),
      content: "+380 (XX) XXX-XX-XX",
    },
    {
      icon: <Email sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "Email",
      content: "your.email@example.com",
    },
    {
      icon: (
        <Schedule sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: t("contact.workingHours"),
      content: "Пн-Пт: 9:00 - 18:00",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#f5f5f5",
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
            {t("contact.title")}
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
            Зв'яжіться зі мною для обговорення вашого проекту або отримання
            консультації
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 3,
                }}
              >
                Надіслати повідомлення
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label={t("contact.name")}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label={t("contact.email")}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label={t("contact.message")}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  sx={{
                    mt: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  {t("contact.send")}
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: theme.shadows[4],
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ mb: 2 }}>{info.icon}</Box>

                      <Typography
                        variant="h6"
                        component="h4"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          mb: 1,
                        }}
                      >
                        {info.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {info.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Additional Info */}
            <Box sx={{ mt: 4 }}>
              <Card
                sx={{
                  p: 3,
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                }}
              >
                <Typography
                  variant="h6"
                  component="h4"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Чому обирають мене?
                </Typography>

                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Більше 5 років досвіду в розробці
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Більше 50 успішно реалізованих проектів
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Індивіальний підхід до кожного клієнта
                  </Typography>
                  <Typography component="li" variant="body2">
                    24/7 технічна підтримка
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
