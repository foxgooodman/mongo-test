rs.initiate({
    _id: "rs-shard-02",
    version: 1,
    members: [{_id: 0, host: "shard02-a:27017"}]
})