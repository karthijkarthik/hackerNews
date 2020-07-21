import express from 'express';
import path from 'path';
import template from './src/template';
import ssr from './src/server';

const app = express()

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
  error: null,
  isLoaded: false,
  pageNumber: 0,
  totalPageNumber: 0,
  newsItems: [],
  hiddenNewsId: []
}

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content}  = ssr(initialState)
  const response = template("Hackers News", preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});
