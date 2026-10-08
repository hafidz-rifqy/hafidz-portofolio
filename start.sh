#!/bin/sh

if [ ! -d /app/dist ]; then
  echo "Build artifacts not found. Running production build..."
  npm run build
fi

exec npm run preview -- --host 0.0.0.0 --port 3000
