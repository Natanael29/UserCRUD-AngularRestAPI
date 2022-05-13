const express = require('express');
const cors = require('cors');
const User = require('./config');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
    console.log("GET AlL USERS");
    res.send(list);
});

app.get("/getUser/:id", async (req, res) => {
    const snapshot = await User.get();
    const user = snapshot.docs.find((doc) => doc.id === req.params.id).data()
    res.send(user);
});

app.post('/create', async (req, res) => {
    const data = req.body;
    await User.add(data);
    res.send({msg: "User added"});
});

app.post('/update/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await User.doc(id).update(data);
    res.send({msg: "User updated"});
});

app.delete('/delete/:id', async (req, res) => {
    console.log('deleting');
    const id = req.params.id;
    await User.doc(id).delete();
    res.send({msg: "User Deleted"});
});

app.listen(4000, () => console.log("Up running"))