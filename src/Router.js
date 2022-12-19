const controller = require('./Controller')

module.exports = Router = (route) => {
    if(route == '.exit'){
        return process.exit(1)
    }
    if(route.includes('os')){
        controller.os(route)
    }
    if(route.includes('cat')){

    }
    if(route.includes('add')){
        
    }
    if(route.includes('rn')){
        
    }
    if(route.includes('cp')){
        
    }
    if(route.includes('rm')){
        
    }
    if(route.includes('mv')){
        
    }
    if(route.includes('rn')){
        
    }
    if(route.includes('cd')){
        return controller.cd(route)
    }
    if(route == 'ls'){
        return controller.fileList()
    }
    return 'Undefined command'
}