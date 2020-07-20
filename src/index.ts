import express, {Request, Response} from 'express'
import { resolve } from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack';
const compiler = webpack(require('../webpack.config'))
const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
	app.use(
		'/dist',
		webpackDevMiddleware(compiler)
	)
}

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(resolve(__dirname, '../public')))
}

app.get("/api/profile", (req: Request, res: Response) => {
	setTimeout(() => {
		res.json({ id: 1, name: "user 2" });
	}, 200);
});

app.use('*', (req: Request, res: Response) => {
	res.sendFile(resolve(__dirname, '../public/index.html'))
})

app.listen(3000, () => {
	console.log('React Starter is running on :3000')
})