import express from 'express';
import mongoose from 'mongoose';



mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    console.log('Conectado com sucesso');
    app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
  })
  .catch((error) => console.log(error));


