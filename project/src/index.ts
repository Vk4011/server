import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Hello World!  💻 server is running sucesfully' });
});
const dotenvConfig = dotenv.config();
if (dotenvConfig.error) {
  throw dotenvConfig.error;
}
const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n\t Server is running on http://localhost:${PORT} \n`);
});
