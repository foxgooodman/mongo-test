use somedb;

// Получаем количество документов на каждом шарде
var shardStats = db.helloDoc.aggregate([
    { $collStats: { storageStats: {} } }
]);

shardStats.forEach(function(stat) {
    print("Shard: " + stat.shard + ", Document count: " + stat.storageStats.count);
});
