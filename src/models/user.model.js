const mongoose = require('mongoose');

const user = new mongoose.Schema(
  {
    email: { type: String, required: true },
    orcamentos: [
      {
        title: { type: String, required: false },
        valorPrevisto: { type: Number, required: true },
        valorReal: { type: Number, required: true },
        finalizado: { type: Boolean, required: false },
        despesas: [
          {
            description: { type: String, required: false },
            valorDespesa: { type: Number, required: true },
            done: { type: Boolean, required: false }
          }
        ]
      }
    ]
  },
  { timestamps: true },
);

module.exports = mongoose.model('users', user);