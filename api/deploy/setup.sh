#!/usr/bin/env bash

set -e

# TODO: Set to URL of git repo.
PROJECT_GIT_URL='https://github.com/gbielanova/festival-radio.git'

PROJECT_BASE_PATH='/usr/local/apps/festival-radio'
PROJECT_API_BASE_PATH='/usr/local/apps/festival-radio/api'

echo "Installing dependencies..."
apt-get update
apt-get install -y python3-dev python3-venv python3-requests sqlite python-pip supervisor nginx git

# Create project directory
mkdir -p $PROJECT_BASE_PATH
git clone $PROJECT_GIT_URL $PROJECT_BASE_PATH

# Create virtual environment
mkdir -p $PROJECT_API_BASE_PATH/env
python3 -m venv $PROJECT_API_BASE_PATH/env

# Install python packages
$PROJECT_API_BASE_PATH/env/bin/pip install -r $PROJECT_API_BASE_PATH/requirements.txt
$PROJECT_API_BASE_PATH/env/bin/pip install uwsgi==2.0.18

# Run migrations and collectstatic
cd $PROJECT_API_BASE_PATH
$PROJECT_API_BASE_PATH/env/bin/python manage.py migrate
$PROJECT_API_BASE_PATH/env/bin/python manage.py collectstatic --noinput

# Configure supervisor
cp $PROJECT_API_BASE_PATH/deploy/supervisor_festival_api.conf /etc/supervisor/conf.d/festival_api.conf
supervisorctl reread
supervisorctl update
supervisorctl restart festival_api

# Configure nginx
cp $PROJECT_API_BASE_PATH/deploy/nginx_festival_api.conf /etc/nginx/sites-available/festival_api.conf
rm /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/festival_api.conf /etc/nginx/sites-enabled/festival_api.conf
systemctl restart nginx.service

echo "DONE! :)"
