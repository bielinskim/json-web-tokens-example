const bcrypt = require('bcrypt');


bcrypt.hash('test', 1, function (err, hash) {
    bcrypt.compare('test1', hash, function (err, result) {
        console.log(result);
    });
});

bcrypt.hash('test', 1, function (err, hash) {
    console.log(hash);
});


