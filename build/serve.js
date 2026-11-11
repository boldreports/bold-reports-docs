const gulp = require('gulp');
const { exec } = require('shelljs');
const runSequence = require('gulp4-run-sequence');
const { syncPage, removePage } = require('./build.js');

// Starts the development server.
// - Gatsby's cache (.cache) is kept, so a restart only rebuilds what changed.
//   Run `gulp clean` first if you ever need a completely fresh start.
// - Markdown files in docs/ are watched: saving a page updates the running site.
gulp.task('serve', async () => {
    await runSequence('sync-pages', 'toc');

    const watcher = gulp.watch('./docs/**/*.md');
    const update = (file) => {
        try {
            if (syncPage(file)) console.log(`Page updated: ${file}`);
        } catch (error) {
            console.log(`Could not update ${file}: ${error.message}`);
        }
    };
    watcher.on('change', update);
    watcher.on('add', update);
    watcher.on('unlink', (file) => removePage(file));

    await new Promise((resolve) => {
        const server = exec('gatsby develop', { async: true });
        server.on('exit', resolve);
    });
    watcher.close();
});
