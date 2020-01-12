import { DefaultFrontMatter } from '../src/front-matter'
import { Toc, findPreviousAndNextTocEntries } from '../src/toc'
import { fa } from './common/inline-svg'
import { NavBarItem } from './navbar/navbar-temp'

export function* navItems(fm: DefaultFrontMatter, toc: Toc, relFileName: string): 
    Iterable<NavBarItem> {
    yield { link: '/', caption: fm.projectName, icon: fm.logo || "", title: true }
    if (fm.download)
        yield { link: fm.download, caption: 'Download', icon: fa('brands/npm') }
    yield { link: fm.repository, caption: 'GitHub', icon: fa('brands/github') }
        if (fm.license)
        yield { link: fm.license, caption: 'License', icon: fa('solid/file-contract') }
    let [prev, next] = findPreviousAndNextTocEntries(toc, relFileName)
    if (prev)
        yield { link: '/' + prev.file, caption: 'Previous: ' + prev.page,
            icon: fa('solid/angle-double-left') }
    else
        yield { caption: 'Previous:', icon: fa('solid/angle-double-left') }
    if (next)
        yield { link: '/' + next.file, caption: 'Next: ' + next.page,
            icon: fa('solid/angle-double-right') }
    else
        yield { caption: 'Next:', icon: fa('solid/angle-double-right') }
}

