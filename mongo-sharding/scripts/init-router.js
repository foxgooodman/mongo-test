sh.addShard("rs-shard-01/shard01-a:27017")
sh.addShard("rs-shard-02/shard02-a:27017")

sh.enableSharding("somedb");

sh.shardCollection("somedb.helloDoc", { "name": "hashed" });

// Переходим к базе данных somedb и добавляем документы в коллекцию helloDoc
use somedb;

for (var i = 0; i < 1000; i++) {
    db.helloDoc.insert({ age: i, name: "ly" + i });
}
