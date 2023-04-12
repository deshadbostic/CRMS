const {app} = require('./server')
const PORT=process.env.PORT || 5500;
console.log(PORT);
app.listen(PORT,() =>console.log(`server started ${PORT}`));