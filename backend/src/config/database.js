const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://leoguime:123mudar@cluster0-d8yjs.mongodb.net/test?retryWrites=true&w=majority',{})