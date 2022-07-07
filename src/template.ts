/**
 * # Template API
 * 
 * When you want to create a template, you need implement the `Template`
 * interface. It is the main entry point to the library.
 */
//#region -c template.ts imports
import * as path from 'path'
import * as toc from './toc'
import * as fm from './front-matter'
import * as tmp from '../components/common/template'
import pageTemplate from '../components/page-temp'
import landingTemplate from '../components/landing-temp'
//#endregion
/**
 * ## Aliases
 * 
 * A template can use path aliases to allow conditional including of style 
 * files. Aliases are stored in a dictionary. Name of the alias is the key and
 * the path to be used is the value. 
 */
export type Aliases = {
    [key: string]: string;
}
/**
 * ## Template Interface
 * 
 * If you decide to write your own template for LiTScript, you need to provide
 * an implementation for the following interface. You also need to export the
 * object that implements the interface as the default export.
 */
export interface Template {
    /**
     * ### Generating Single Page
     * 
     * The main task of a template is to generate a HTML page for given
     * content. The method that does this gets a lot of stuff as parameters:
     * - Front matter as data structure.
     * - TOC as data structure.
     * - Contents of the page as string. This is already in HTML format.
     * - Additional style sheet imports in the `styles` string.
     * - Additional script imports in tje `scripts` string.
     * - The relative file path of the outputted page.
     * - The full, resolved file path of the outputted page.
     */
    generate(fm: fm.FrontMatter, toc: toc.Toc, contents: string, styles: string,
        scripts: string, relFilePath: string, fullFilePath: string): void
    /**
     * ### Getting Default Values for Front Matter
     * 
     * All configuration items should provide sensible default values. The
     * default settings for front matter are returned by this method.
     */
    frontMatterDefaults(): fm.FrontMatter
    /**
     * ### Root Code File
     * 
     * Webpack needs a root module which it compiles to a single JS file. The
     * main TS file is the root module that imports all the other modules. All
     * of these will be bundled together LiTScript. The modules can import also
     * CSS or Less files. They will be bundled to a single CSS file.
     */
    mainTSFile(): string
    /**
     * ### Path Aliases to Resolve
     * 
     * Aliases needed by the template (see above) are returned by this method.
     */
    pathAliases(fm: fm.FrontMatter): Aliases
    /**
     * ### Copy Auxiliary Files
     * 
     * Any fonts, images, etc. needed by the template can be copied to the 
     * output directory of LiTScript by implementing the following function.
     * The function gets the base directory of the web site as an argument,
     */
    copyAuxiliaryFiles(fullBasePath: string): void
}
/**
 * ## The Default Template
 * 
 * The built-in template that comes with LiTScript is declared below. It 
 * implements the interface defined above.
 */
export const template: Template = {
    /**
     * ### Page Generator
     * 
     * HTML pages are built using template engine that you can find under 
     * the `components` directory. This is out of scope for the documentation,
     * but you can check the engine's implementation from code.
     * 
     * Depending on the front matter setting, we generate either a normal page
     * or landing page. They have separate templates.
     */    
    generate(fm: fm.FrontMatter, toc: toc.Toc, contents: string, styles: string,
        scripts: string, relFilePath: string, fullFilePath: string) {
        let dfm = fm as fm.DefaultFrontMatter
        let temp = dfm.template == 'normalpage' ?
            pageTemplate(dfm, toc, contents, styles, scripts, relFilePath) :
            landingTemplate(dfm, toc, contents, styles, scripts, relFilePath)
        tmp.saveHtmlTemplate(temp, fullFilePath);
    },
    /**
     * ### Front Matter Defaults
     * 
     * The default front matter settings are defined in the 
     * [`front-matter.ts`](/src/front-matter.html#defaults)
     */
    frontMatterDefaults() {
        return fm.defaults
    },
    /**
     * ### Main TS File
     * 
     * The root module of all the JS code and style files required by the
     * default template is located under `components` directory.
     */
    mainTSFile() {
        return path.resolve(__dirname, '../../components/main.ts')
    },
    /**
     * ### Path Aliases
     * 
     * We define two aliases which will be resolved by Webpack. The first 
     * allows us to change the Less file that provides syntax highlighting. The
     * second one refers to the user-theme Less file that contains the style
     * overrides. Note how we use front matter settings to construct the paths.
     */
    pathAliases(fm: fm.DefaultFrontMatter) {
        return {
            syntaxhighlight:
                path.resolve(__dirname,
                    `../../components/syntax/${fm.syntaxHighlight}.less`),
            userTheme: path.resolve(fm.userTheme)
        }
    },
    /**
     * ### Auxiliary Files
     * 
     * The default template does not need any auxiliary files.
     */
     copyAuxiliaryFiles(fullBasePath: string): void { }
}