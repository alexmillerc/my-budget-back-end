const users = require('../models/user.model');

const userJson = (data) => ({
  email: data.email,
  orcamentos: data.orcamentos.map(l => ({
    title: l.title,
    valorPrevisto: l.valorPrevisto,
    valorReal: l.valorReal,
    finalizado: l.finalizado,
    despesas: l.despesas.map(t => ({
      description: t.description,
      valorDespesa: t.valorDespesa,
      done: t.done,
    })),
  })),
});

const get = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email || !email.trim())
      return res.status(400).json({ message: 'Email invalid' });

    const user = await users.findOne({ email });
    if (!user)
      return res.status(404).json({ message: `Not found ${email}` });

    return res.status(200).json(userJson(user));
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const post = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email || !email.trim())
      return res.status(400).json({ message: 'Email invalid' });

    let user = await users.findOne({ email });
    if (user)
      return res.status(409).json({ message: `Conflict ${email}` });

    const orcamentos = [];
    user = await users.create({ email, orcamentos });
    return res.status(201).json(userJson(user));
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const patch = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email || !email.trim())
      return res.status(400).json({ message: 'Email invalid' });

    const { orcamentos } = req.body;
    if (!orcamentos)
      return res.status(400).json({ message: 'orcamentos invalid' });

    const user = await users.findOne({ email });
    if (!user)
      return res.status(404).json({ message: `Not found ${email}` });

    user.orcamentos = orcamentos;
    await user.save();
    return res.status(202).json(userJson(user));
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const cancel = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email || !email.trim())
      return res.status(400).json({ message: 'Email invalid' });

    const { orcamentos } = req.body;
    if (!orcamentos)
      return res.status(400).json({ message: 'orcamentos invalid' });

    const user = await users.findOne({ email });
    if (!user)
      return res.status(404).json({ message: `Not found ${email}` });

    user.orcamentos = orcamentos;
    await user.delete();
    return res.status(202).json(userJson(user));
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { get, post, patch, cancel };