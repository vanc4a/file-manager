const fs = require('fs/promises')
const os = require('os');
const path = require('path')
const { createReadStream, createWriteStream } = require('fs');

module.exports = class FileMager {  
    osArch = os.arch();
    osCpu = os.cpus();
    osHomeDir = os.homedir();
    osEOL = os.EOL;
    username = 'User';
    currentDir = null

    constructor(){
        process.argv.map(arg => {
            if(arg.includes('--username=')){
                this.username = arg.slice(arg.indexOf('=') + 1)
            }
        })
        this.currentDir = this.osHomeDir
        console.log(`Welcome to the File Manager, ${this.username}!`)
    }

    fileList() {
        return fs.readdir(this.currentDir,{withFileTypes: true})
        .then(files => {
            files.map(file => file.Type = file.isFile() ? 'file' : 'directory')
            console.table(files)
        });
    }

    pathNavigation(targetPath) {
        this.currentDir = path.resolve(this.currentDir,targetPath)
    }
    
    addFile(filename) {
        return fs.writeFile(`${this.currentDir}/${filename}`,'');
    }
    
    renameFile(curent,target) { 
        return fs.rename(`${this.currentDir}/${curent}`,`${this.currentDir}/${target}`);
    }
    
    readFile(file) {
        return fs.readFile(`${this.currentDir}/${file}`,'utf8').then(readed => console.log(readed));
    }
    
    removeFile(file) {
        return fs.unlink(`${this.currentDir}/${file}`);
    }
    
    copyFile(current,target) {
        return createReadStream(`${this.currentDir}/${current}`,{encoding: 'utf-8'})
            .pipe(createWriteStream(`${this.currentDir}/${target}`))
    }
    
    moveFile(current,target) {
        this.copyFile(curent,target);
        this.removeFile(current);
    }
}