import * as fs from 'fs'
import * as path from 'path'

export function svg(fileName: string): string {
    return fs.readFileSync(fileName, "utf8")
} 

export function fa(iconPath: string): string {
    return svg(path.resolve(__dirname,
        '../../../../@fortawesome/fontawesome-free/svgs/', iconPath + '.svg'))
}