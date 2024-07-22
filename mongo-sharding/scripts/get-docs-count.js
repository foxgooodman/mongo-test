use somedb;

db.helloDoc.aggregate([
    { $collStats: { storageStats: {} } }
]).forEach(function(stat) {
    print("Shard: " + stat.shard + ", Document count: " + stat.storageStats.count);
});