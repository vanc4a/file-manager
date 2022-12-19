const controller = require('./Controller')

module.exports = Router = (route) => {
    let args = route.split(' ')
    if(route == '.exit'){
        return process.exit(1)  
    }
    if(args[0] == 'os'){
        return controller.os(route)
    }
    if(args[0] == 'cat' && args.length >= controller.cat.length){
        return controller.cat(args[1])
    }
    if(args[0] == 'add' && args.length >= controller.add.length){
        return controller.add(args[1])
    }
    if(args[0] == 'rn' && args.length >= controller.rn.length){
        return controller.rn(args[1],args[2])
    }
    if(args[0] ==  'cp' && args.length >= controller.cp.length){
        return controller.cp(args[1],args[2])
    }
    if(args[0] ==  'rm' && args.length >= controller.rm.length){
        return controller.rm(args[1])
    }
    if(args[0] == 'mv' && args.length >= controller.mv.length){
        return controller.mv(args[1],args[2])
    }
    if(args[0] == 'rn' && args.length >= controller.rn.length){
        return controller.rn(args[1],args[2])
    }
    if(args[0] == 'cd' && args.length >= controller.cd.length){
        return controller.cd(args[1])
    }
    if(route == 'ls'){
        return controller.fileList()
    }
    return console.log('Undefined command')
}