const gulp = require('gulp');
const glob = require("glob");
const path = require("path");
const fs = require("fs").promises;

gulp.task("validate-code-highlight", async () => {
  var list = [];
  const pattern = "**/*.md";
  const codeBlockPattern = /```([\s\S]*?)```/g;
  const secondLineEmptyRegex = /^(?:[^\n]*\n){1}\s*\n/;
  const directoryPath = path.join(process.cwd(), "docs");

  try {
    const files = await new Promise((resolve, reject) => {
      glob(path.join(directoryPath, pattern), (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });

    for (const mdFile of files) {
      const data = await fs.readFile(mdFile, "utf-8");
      const matches = data.match(codeBlockPattern);
      if (matches) {
        for (const match of matches) {
          if (secondLineEmptyRegex.test(match)) {
            list.push(mdFile);
            break;
          }
        }
      }
    }
    if (list.length > 0) {
      console.log("!!!!!...........Code block second line should not be empty in below files...........!!!!!");
      console.table(list);
      process.exit(1);
    }
  } catch (err) {
    console.error("Error:", err);
  }
});