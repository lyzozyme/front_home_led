# Dockerize the app

1. Run `npm run build`
2. Build dockerfile `docker build -t front-home-led .`
3. Run container `docker run -d -p 8080:80 --name react-container front-home-led`