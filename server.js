const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT) || 8080;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

const routes = {
  '/': '/index.html',
  '/plans': '/plans.html',
  '/plans/': '/plans.html',
  '/faqs': '/faq.html',
  '/faqs/': '/faq.html',
  '/contact-us': '/contact-us.html',
  '/contact-us/': '/contact-us.html',
  '/ai_blogs': '/ai_blogs.html',
  '/ai_blogs/': '/ai_blogs.html',
  '/7-inspiring-secrets-from-sam-onigbanjo-gtm-architects': '/about-sam.html',
  '/7-inspiring-secrets-from-sam-onigbanjo-gtm-architects/': '/about-sam.html',
  '/terms-and-conditions': '/terms-and-conditions.html',
  '/terms-and-conditions/': '/terms-and-conditions.html',
  '/privacy-policy': '/privacy-policy.html',
  '/privacy-policy/': '/privacy-policy.html',
  '/refund-policy': '/refund-policy.html',
  '/refund-policy/': '/refund-policy.html',
  '/cookie-policy': '/cookie-policy.html',
  '/cookie-policy/': '/cookie-policy.html',
  '/disclaimer': '/disclaimer.html',
  '/disclaimer/': '/disclaimer.html',
  '/contract-opportunities': '/contract-opportunities.html',
  '/contract-opportunities/': '/contract-opportunities.html',
  '/about-sam-onigbanjo': '/about-sam-onigbanjo.html',
  '/about-sam-onigbanjo/': '/about-sam-onigbanjo.html',
  '/community-impact': '/community-impact.html',
  '/community-impact/': '/community-impact.html',
};

const redirects301 = {
  '/7-inspiring-secrets-from-sam-onigbanjo-gtm-architects': '/about-sam-onigbanjo/',
  '/7-inspiring-secrets-from-sam-onigbanjo-gtm-architects/': '/about-sam-onigbanjo/',
  '/ai-for-accountants': '/contact-us/',
  '/ai-for-accountants/': '/contact-us/',
  '/ai-for-productivity-in-schools': '/contact-us/',
  '/ai-for-productivity-in-schools/': '/contact-us/',
  '/ai-in-marketing': '/contact-us/',
  '/ai-in-marketing/': '/contact-us/',
  '/a-i-for-your-business-success': '/contact-us/',
  '/a-i-for-your-business-success/': '/contact-us/',
  '/land-that-job-with-ai-and-a-tailored-cv': '/contact-us/',
  '/land-that-job-with-ai-and-a-tailored-cv/': '/contact-us/',
};

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (redirects301[url]) {
    res.writeHead(301, { Location: redirects301[url] });
    return res.end();
  }
  const file = routes[url] || url;
  const relative = file.startsWith('/') ? file.slice(1) : file;
  const filePath = path.join(root, relative);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not found');
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'text/plain' });
    res.end(data);
  });
}).listen(port, () => {
  console.log(`Serving at http://localhost:${port}/`);
  console.log(`Blog: http://localhost:${port}/ai_blogs/`);
});
