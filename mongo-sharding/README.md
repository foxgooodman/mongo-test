# pymongo-api

## Как запустить

Запускаем mongodb и приложение

```shell
docker compose up -d
```

Выполните эти команды одну за другой:
```bash
docker-compose exec configsvr01 sh -c "mongosh < /scripts/init-configsvr.js"
docker-compose exec shard01-a sh -c "mongosh < /scripts/init-shard01.js"
docker-compose exec shard02-a sh -c "mongosh < /scripts/init-shard02.js"
```

Подождите несколько секунд пока сервер конфигурации и шарды выберут ведущие ноды

Выполните:
```bash
docker-compose exec router01 sh -c "mongosh < /scripts/init-router.js"
```

Проверьте документы на шардах:
```bash
docker-compose exec router01 sh -c "mongosh < /scripts/get-docs-count.js"
```

Сброс кластера
```bash
docker-compose down
docker-compose rm
docker-compose down -v --rmi all --remove-orphans
```