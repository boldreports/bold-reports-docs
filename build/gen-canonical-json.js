const gulp = require("gulp");
const { readFileSync, writeFileSync } = require("fs");
const { parse, resolve, join } = require("path");

gulp.task("canonical_url", (done) => {
    var files = [];
    var commonJSON = JSON.parse(readFileSync(resolve('./common-files.json'), 'utf8'));
    var docHelperJSON = JSON.parse(readFileSync(resolve('./config.json'), 'utf8'));
    var packageJSON = JSON.parse(readFileSync(resolve('./package.json'), 'utf8'));
    var bucketName = docHelperJSON.publish.bucketName;
    var packageName = packageJSON.name;
    var commonRepos = Object.keys(commonJSON);
    commonRepos.forEach((repo) => {
      commonJSON[repo].forEach((p) => {
        var src = p.src;
        var dest = p.dest;
        files.push({
          dest : 'https://' + bucketName + '/' + detectPlatform(packageName, docHelperJSON.repos) + '/'+ dest + (parse(src).base == "index.md" ? "" : (parse(src).base).split('.')[0]),
          src : 'https://' + bucketName + '/' + detectPlatform(repo, docHelperJSON.repos) + '/' + (parse(src).base == "index.md" ? parse(src).dir : src.split('.')[0]) 
      });
      });
    });
    writeFileSync('canonical.json', JSON.stringify(files, null, '\t'))
    done();
  });
  
  function detectPlatform(n, i){
      var platforms = Object.keys(i);
      var platform = ''
      platforms.forEach(p =>{
          if(i[p].name == n)
              platform = i[p].url;
      })
      return platform
  }