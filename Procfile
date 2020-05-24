web: gunicorn backend.seven.wsgi:application --log-file - --log-level debug
manage.py migrate
release: python backend.manage.py migrate