const dotenv = require('dotenv')
dotenv.config() //commonJS
const RouterMiddleWare = require('./utils/RouterMiddleware')
const {DatabaseService, Employees} = require('./models')
const express = require('express');
//const {User } = require('./models');



const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;



// app.get('/users', async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });

// app.post('/users', async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     const newUser = await User.create({ name, email });
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// app.put('/users/:id', async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   if (!user) return res.status(404).json({ error: "User not found" });
//   await user.update(req.body);
//   res.json(user);
// });
// app.delete('/users/:id', async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   if (!user) return res.status(404).json({ error: "User not found" });
//   await user.destroy();
//   res.status(204).end();
// });
app.listen(PORT, async () => {
	await DatabaseService.init(app,'routes')
  RouterMiddleWare.init(app, 'routes')
  console.log(`Server running on port ${PORT}`); 
});

  
  app.get('/students', (req, res)=>{
    res.json({name: "Ralph"})
})
app.post('/students/create', (req,res)=>{
    const {name} = req.body
    console.log('This is the name that i get', name)
    createReponse(null, req, res)
})
const createReponse = (error, request, response)=>{
    if(error) console.log('this is the error', error)
        else {
            const {name} = request.body
            response.json({name: name})
        }
}