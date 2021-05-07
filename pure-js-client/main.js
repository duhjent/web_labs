express = require('express');
app = express();

app.use(express.static('./'));

app.listen(8080, () => {
    console.log('app is running');
})