const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'build'); // 指定您的 build 目錄

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(file => {
    if (file.endsWith('.js') || file.endsWith('.css')) {
      console.log(`Found: ${file}`);
      // 在這裡可以添加代碼來檢查文件是否存在
    }
  });
});