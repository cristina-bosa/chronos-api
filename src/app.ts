import app from './config/server.config';

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`🚀 Server has awakened! Prepare for a magical coding journey!`)
  });
  