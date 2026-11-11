const gulp = require('gulp');
const { writeFileSync } = require('fs');
const { getToc, siteLink } = require('./config.js');

gulp.task('sitemap', (done) => {
    const dateInstance = new Date();
    const month = dateInstance.getMonth() + 1;
    const date = dateInstance.getDate();
    const lastModified = `${dateInstance.getFullYear()}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    const toc = getToc();
    const pageData = toc.pagesData || [];
    let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>

    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    \n`;
    pageData.forEach((page) => {
        xmlContent += `        <url>

        <loc>${siteLink + page.path}</loc>
  
        <lastmod>${lastModified}</lastmod>
  
    </url>\n`;
    });
    xmlContent += `</urlset>`;
    writeFileSync('./sitemap.xml', xmlContent, 'utf8');
    done();
});