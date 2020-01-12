/**
 * # Default HTML Template for LiTScript
 * 
 * This package contains the APIs needed to implement LiTScript templates as 
 * well as the default template that is included out-of-the-box. Templates 
 * build static web pages using input parameters provided by LiTScript. They
 * are loaded dynamically, making it possible to write your own templates. Most 
 * of the time you probably prefer just to customize the default template using 
 * various parameters provided by it.
 * 
 * Templates also include the style sheets and code files required by the 
 * web pages. These can be written using [Less][] and TypeScript. You can use 
 * [CommonJS modules][] to organize your source files in a clean structure. 
 * LiTScript transforms TypeScript to JS and Less to CSS. It then bundles the
 * modules into few files that are easy to deploy. Since the bundler tracks all
 * the style and code files, you can change them on the fly and see the results 
 * right away. This is convenient especially in watch mode. 
 * 
 * You can utilize the simple templating framework provided by the package to 
 * create new templates or use whatever technology you like. 
 * 
 * [Less]: http://lesscss.org/
 * [CommonJS modules]: https://www.typescriptlang.org/docs/handbook/modules.html
 * 
 * ## Default Template
 * 
 * The documentation you are currently reading is generated with the default 
 * template. It is designed for Wiki-like technical documentation. It offers two
 * menus to help navigating the docs: table of contents and page menu. The first 
 * one shows all the pages in the documentation, and the second one the sections 
 * inside a page.
 * 
 * The default template also displays a navigation bar containing the links to
 * GitHub repository, NPM home page, license information, and so on. These are
 * typically included in a project documentation.
 * 
 * Generated pages are responsive and work also on smaller screens. The menus
 * and navigation bar collapse automatically when screen size gets smaller.
 * 
 * Finally, the default template is highly customizable. You can change the 
 * colors, fonts, sizes and shapes of buttons, placement of the menus, and so 
 * on. The appearearance of almost every element in a page can be tweaked using 
 * the variables in the theme file. 
 * 
 * ## Exports
 * 
 * The following APIs are exported by the package. First we publish the
 * [table of contents](src/toc.html) interface and its supportive functions.
 */
export * from './src/toc'
/**
 * Then we export the [front matter](src/front-matter.html) interface which
 * contains the mandatory configuration parameters that all templates must
 * have.
 */
export { Visualizer, FrontMatter } from './src/front-matter'
/**
 * Last, we export the `Template` interface. It acts as the entry point of a
 * template package.
 */
export { Template } from './src/template'
/**
 * The default export of a template module must return an instance of the 
 * `Template` interface. Below, we import the reference to the default template 
 * and publish it as the default export. 
 */
import { template } from './src/template'
export default template