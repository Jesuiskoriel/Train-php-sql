FROM php:8.2-apache

# Installer les extensions nécessaires
RUN docker-php-ext-install pdo pdo_mysql

# Copier le code source dans le conteneur
COPY src/ /var/www/html

# Configurer le répertoire de travail
WORKDIR /var/www/html

# Activer les modules Apache (si nécessaire)
RUN a2enmod rewrite
