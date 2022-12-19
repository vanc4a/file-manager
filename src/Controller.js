const FileManager = require('./services/FileManager')
const fm = new FileManager()

exports.os = (operation) => {
    if(operation == 'os --cpus'){
        return console.log(fm.osCpu);
    }
    if(operation == 'os --homedir'){
        return console.log(fm.osHomeDir);
    }
    if(operation == 'os --architecture'){
        return console.log(fm.osArch);
    }
    if(operation == 'os --username'){
        return console.log(fm.username);
    }
    if(operation == 'os --EOL'){
        return console.log(fm.osEOL);
    }
    return console.log('Undefined command');
}
exports.fileList = () => {
    return console.table(fm.fileList())
}

exports.cd = (path) => {
    fm.pathNavigation(path)
}

exports.cat = (filename) => {
    fm.readFile(filename)
}

exports.rm = (filename) => {
    fm.removeFile(filename)
}

exports.rn = (current,target) => {
    fm.renameFile(current,target)
}

exports.add = (filename) => {
    fm.addFile(filename)
}

exports.cp = (current,target) => {
    fm.copyFile(current,target)
}

exports.mv = (current,target) => {
    fm.moveFile(current,target)
}
