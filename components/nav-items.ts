import { DefaultFrontMatter } from '../src/front-matter'
import { Toc, findPreviousAndNextTocEntries, relLink } from '../src/toc'
import { fa } from './common/inline-svg'
import { NavBarItem } from './navbar/navbar-temp'

export function* navItems(fm: DefaultFrontMatter, toc: Toc, relFileName: string): 
    Iterable<NavBarItem> {
    yield { 
        link: relLink(relFileName, 'index.html'), 
        caption: fm.projectName, 
        icon: fm.logo ? relLink(relFileName, fm.logo) : "", 
        title: true 
    }
    if (fm.download)
        yield { 
            link: relLink(relFileName, fm.download), 
            caption: 'Download', 
            icon: fm.download.includes("npmjs.com") ? 
                fa('brands/npm') :
                fa('solid/cloud-download-alt')
        }
    yield { 
        link: relLink(relFileName, fm.repository), 
        caption: 'GitHub', 
        icon: fa('brands/github') 
    }
    if (fm.license)
        yield { 
            link: relLink(relFileName, fm.license), 
            caption: 'License', 
            icon: fa('solid/file-contract') 
        }
    let [prev, next] = findPreviousAndNextTocEntries(toc, relFileName)
    yield prev ?
        { 
            link: relLink(relFileName, prev.file), 
            caption: 'Previous: ' + prev.page,
            icon: fa('solid/angle-double-left') 
        } :
        { 
            caption: 'Previous:', 
            icon: fa('solid/angle-double-left') 
        }
    yield next ?
         { 
            link: relLink(relFileName, next.file), 
            caption: 'Next: ' + next.page,
            icon: fa('solid/angle-double-right') 
        } :
        { 
            caption: 'Next:', 
            icon: fa('solid/angle-double-right') 
        }
}