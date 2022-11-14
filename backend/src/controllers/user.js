
async function login(req, res) {
    const { email, password } = req.body;
    try {
        res.status(200).json({ message: "Login success", ...req.body })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function createUser(req, res) {
    const { email, password, githubUsername, nickname } = req.body;
    try {
        res.status(201).json(req.body)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    login,
    createUser
}