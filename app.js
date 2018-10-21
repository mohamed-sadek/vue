const Koa = require('koa');
const send = require('koa-send');
const compress = require('koa-compress');
const helmet = require('koa-helmet');
const app = new Koa();

app.use(compress())
	.use(helmet.frameguard())
	.use(helmet.xssFilter())
	.use(helmet.noSniff());

// response
app.use(async (ctx) => {
	await send(ctx, ctx.path, { root: __dirname + '/dist' });
});

app.listen(3000);