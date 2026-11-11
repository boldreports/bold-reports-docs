const gulp = require('gulp');
const gzip = require('gulp-gzip');
const { rm, exec, mkdir, cp } = require('shelljs');

const CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    AWS_REPORTS_BUCKET: "help.boldreports.com"
};

const s3 = require('gulp-s3-upload')(CONFIG);


const publish = (dirName, done) => {
    dirName = dirName.endsWith('/') ? dirName : dirName + '/';

    const aws = {
        Bucket: CONFIG.AWS_REPORTS_BUCKET,
        ACL: 'public-read',
        uploadNewFilesOnly: false
    };

    gulp.src(dirName + '**', { buffer: false })
        .pipe(s3(aws, {
            maxRetries: 5,
            maxRedirects: 100,
            retryDelayOptions: {
                base: 1000
            }
        }))
        .on('end', () => {
            console.log('Published in CDN');
        })
        .on('error', (e) => {
            console.error('unable to sync: ', e.stack);
            done(e);
        });
};

/**
 * publish into S3
 */
gulp.task('publish-docs', (done) => {
    rm('-rf', './documentation');
    exec(`node_modules\\.bin\\gulp production-build & node_modules\\.bin\\gulp sitemap`);
    cp('sitemap.xml', 'public/');
    const folderPath = './public/';
    const filePath = './documentation';
    mkdir('-p', filePath);

    gulp.src([folderPath + '/**/*'])
        // .pipe(gzip({
        //     append: false
        // }))
        .pipe(gulp.dest(filePath))
        .on('end', () => {
            publish(filePath, done);
            done();
        })
        .on('error', (e) => {
            done(e);
        });
});

module.exports = {
    publish: publish
};