const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://leoguime:123mudar@cluster0-d8yjs.mongodb.net/test?retryWrites=true&w=majority', {})

mongoose.Error.messages.general.required = "O atributo '{PAT}' é obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite minimo de '{MAX}'."
mongoose.Error.messages.Number.min = "'{VALUE}' não é válido para o atributo '{PATH}'."
