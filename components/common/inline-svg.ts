import * as fs from 'fs'
import * as path from 'path'

export function svg(fileName: string): string {
    return fs.readFileSync(fileName, "utf8")
} 

export function fa(iconPath: string): string {
    let fapaths = [
        '../../../../@fortawesome/fontawesome-free/svgs/',
        '../../../node_modules/@fortawesome/fontawesome-free/svgs/'
    ]
    let fapath = fapaths
        .map(p => path.resolve(__dirname, p))
        .find(fs.existsSync)
    if (!fapath)
        throw("Cannot find Font Awesome npm directory")
    return svg(path.resolve(fapath, iconPath + '.svg'))
}