import { Router } from 'express';



// const app = express();
// const router = express.Router();
const router = new Router();

router.use((req, res, next) => {
  console.log(`Method: ${req.method};\nURL: ${req.url};`)
  next();
});
router.get('/1', (req, res, next) => {
  res.send('wiwi');
});
router.get('/2', (req, res, next) => {
    res.send('jhuhuiuashuidha');
  });

 export default router 