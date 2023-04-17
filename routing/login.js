const handleLogin = (req, res) => {
  const { username, password } = req.body;

  // validasi username dan password
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username dan password diperlukan" });
  }

  // validasi user dari database
  if (username !== "ivatTampan" || password !== "ivatTampan") {
    return res.status(401).json({ message: "Username atau password salah" });
  }

  // jika berhasil, kirim respon usernamnya dan pesan login berhasil
  res.status(200).json({ username, message: "login berhasil" });
};

module.exports = { handleLogin };
