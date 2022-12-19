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
    let arr = path.split(' ')
    fm.pathNavigation(arr[1])
}