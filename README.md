## Инструкция по развертыванию:

В .env файле можете указать свободный порт на котором запустить сервер.

Для запуска требуется [Docker](https://www.docker.com/). В папке сервера выполнить команду ниже:
```
docker-compose up --build 
```

Как увидете вывод: `🚀 Running on port {9000}`, можете делать запросы к серверу по адресу: `http://localhost:{9000}`

Удачи!
