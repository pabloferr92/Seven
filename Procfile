web: gunicorn backend.seven.wsgi:application --log-file - --log-level debug
python manage.py collectstatic --noinput
manage.py migrate
release: python manage.py migrate