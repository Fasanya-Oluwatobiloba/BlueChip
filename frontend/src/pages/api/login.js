let users = [
  { username: "nora", password: "123456" }, // Example user for testing
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(405).json({ error: "Only POST requests allowed" });
  }
}
