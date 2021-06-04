#!/usr/bin/env bash

set -e

PROJECT_BASE_PATH='/usr/local/apps/festival-radio'
PROJECT_API_BASE_PATH='/usr/local/apps/festival-radio/api'

git pull
$PROJECT_API_BASE_PATH/env/bin/python manage.py migrate
$PROJECT_API_BASE_PATH/env/bin/python manage.py collectstatic --noinput
supervisorctl restart festival_api

echo "DONE! :)"
