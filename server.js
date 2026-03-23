const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = 5000;
const HOST = '0.0.0.0';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.zip': 'application/zip',
  '.txt': 'text/plain'
};

const compressible = new Set(['.html', '.js', '.css', '.json', '.svg', '.txt']);

const cacheControl = (ext) => {
  if (ext === '.html') return 'no-cache';
  if (['.png', '.jpg', '.gif', '.ico'].includes(ext)) return 'public, max-age=31536000, immutable';
  if (['.js', '.css'].includes(ext)) return 'public, max-age=86400';
  return 'public, max-age=3600';
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  let filePath = urlPath === '/' ? '/index.html' : urlPath;
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
      return;
    }

    const headers = {
      'Content-Type': contentType,
      'Cache-Control': cacheControl(ext),
    };

    const acceptEncoding = req.headers['accept-encoding'] || '';
    if (compressible.has(ext) && acceptEncoding.includes('br')) {
      headers['Content-Encoding'] = 'br';
      res.writeHead(200, headers);
      zlib.brotliCompress(content, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 4 } }, (err, compressed) => {
        res.end(err ? content : compressed);
      });
    } else if (compressible.has(ext) && acceptEncoding.includes('gzip')) {
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(200, headers);
      zlib.gzip(content, { level: 6 }, (err, compressed) => {
        res.end(err ? content : compressed);
      });
    } else {
      res.writeHead(200, headers);
      res.end(content);
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
