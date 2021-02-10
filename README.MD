# MY BUDGET: Tenha o controle total da sua vida financeira na palma da sua mão


* ***database/mongo.database.js***

``` javascript

const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(_ => console.log('mongodb connected'))
  .catch(err => console.error(err.message));

module.exports = mongoose.connection;
```

* ***config MONGODB ==> .env***

MONGODB:mongodb+srv://<username>:<password>@cluster0.vrheg.mongodb.net/<dbname>?retryWrites=true&w=majority


* ***running application***

 *** NPM INSTALL  ***
 *** NPM START    ***

http://localhost:9000/





