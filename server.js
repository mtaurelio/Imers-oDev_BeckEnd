import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postsRoutes.js";
// Array de posts de exemplo, utilizado para demonstração.
const posts = [
  // ... seus objetos ...
];

// Cria uma instância do servidor Express.
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// function buscarPostPorID(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }
// app.get("/posts/:id", async (req, res) => {
//   const posts = await getTodosPosts();
//   const index = buscarPostPorID(req.params.id);
//   res.status(200).json(posts[index]);
// });
