rs.initiate({
    _id: "rs-shard-01",
    version: 1,
    members: [
        {_id: 0, host: "shard01-a:27017"}
    ]
})