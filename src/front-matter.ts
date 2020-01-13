/**
 * ---
 * { "useMath": true }
 * ---
 * # Front Matter
 * 
 * The settings used in generating HTML pages are defined in an interface called 
 * front matter. Users can edit the front matter by modifying the 
 * `litsconfig.json` file or by adding it in front of a source file. Below is 
 * an example showing how to include a front matter in a markdown file.
 * ```markdown
 * ---
 * { "useMath": true }
 * ---
 * ```
 */
//#region -c front-matter.ts imports
import * as path from 'path'
//#endregion
/**
 * ## Generic Front Matter
 * 
 * The minimum front matter that all templates must provide is defined using
 * the `FrontMatter` interface. It contains only the list of visualizer
 * modules referenced in the documentation.
 */
export interface Visualizer {
    path: string
    includeStyles: boolean
}
export interface FrontMatter {
    /**
     * ### Dynamic Code
     * 
     * To create interactive documentation pages you need to be able to call 
     * your code dynamically and show the results on the page. The `visualizers`
     * setting contains the name of your root code file that is included in
     * the generated HTML pages. The file path is relative to the project base 
     * directory.
     */
    visualizers: Visualizer[]
}
/**
 * ## Settings Provided by Default Template
 * 
 * The default template extends the generic front matter in many ways. The
 * specific properties are explained below.
 */
export interface DefaultFrontMatter extends FrontMatter {
    /**
     * ### Used Template
     * 
     * This theme contains two templates: one for "normal" pages and another
     * for landing pages. "Normal" is the default.
     */
    template: "normalpage" | "landingpage"
    /**
     * ### Project Name
     * 
     * The project name is displayed everywhere where a title is needed; in the 
     * navigation bar, in the page title (browser tab), and so on.
     */
    projectName: string
    /**
     * ### Project URLs
     * 
     * Following settings contain links used in the navigation bar. They can be 
     * absolute URLs to external web sites, or relative paths to pages in the 
     * project. If you use relative paths, always remember to add the `/` 
     * character at the front. The forward slash character points to the root 
     * of the generated web site.
     * 
     * The repository field contains the URL of the git repo that hosts the 
     * project sources.
     */
    repository: string
    /**
     * The download field contains the URL of the download site, typically NPM 
     * home page.
     */
    download: string
    /**
     * The URL of the license info page.
     */
    license: string
    /**
     * Link to the logo image used in the navigation bar. This should be an 
     * icon, a small bitmap, or a SVG file.
     */
    logo: string
    /**
     * ### Syntax Highlighting
     * 
     * There are multiple syntax highlight schemes to choose from. These should 
     * be familiar from popular text editors.
     */
    syntaxHighlight: "coding-horror" | "monokai" | "solarized-light" | "son-of-obsidian" 
    /**
     * ### Math Notation
     * 
     * LiTScript uses [KaTeX][] to layout mathematical formulas. By turning the 
     * `useMath` field on, KaTeX is loaded from an external CDN.
     * 
     * You can include formulas in markdown with [LaTeX][] notation by 
     * surrounding them by single `$` (inline) or double `$$` (block) dollar 
     * signs. For example the block
     * 
     *    $$x = { -b \pm \sqrt{b^2 - 4ac} \over 2a }$$ 
     * 
     * renders like this:
     * 
     * $$x = { -b \pm \sqrt{b^2 - 4ac} \over 2a }$$
     */
    useMath: boolean
    /**
     * ### Customizing Menu Headers
     * 
     * You can change the text in the menu headers, if you don't like the 
     * defaults, or if you want to localize them. 
     */
    tocMenuHeader: string
    pageMenuHeader: string
    /**
     * ### Footer
     * 
     * The best place for copyright and other general information is the footer.
     * You can show it in page menu, content area, or TOC menu. 
     */
    footer: string
    footerLocation: 'page-menu' | 'content-area' | 'toc-menu'
    /**
     * ### Customizing Theme
     * 
     * The path to the user-specified theme overrides. The path is relative
     * to the project directory.
     */
    userTheme: string
}
/**
 * [Katex]: https://katex.org/
 * [LaTeX]: https://en.wikibooks.org/wiki/LaTeX/Mathematics
 * 
 * ## Defaults
 * 
 * Default values are defined here. These are used, if a property is not present 
 * in the configuration file.
 */
export const defaults: DefaultFrontMatter = {
    visualizers: [],
    template: "normalpage",
    projectName: "Project",
    repository: "https://github.com/user/repo",
    download: "",
    license: "license.html",
    logo: "",
    syntaxHighlight: "monokai",
    useMath: false,
    tocMenuHeader: "Table of Contents",
    pageMenuHeader: "On This Page",
    footer: "Copyright © 2019",
    footerLocation: "page-menu",
    userTheme: path.resolve(__dirname, `../../components/user-theme.less`)
}