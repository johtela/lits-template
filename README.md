# Default HTML Template for [LiTScript][]

 This package contains the APIs needed to implement LiTScript templates as 
 well as the default template that is included out-of-the-box. Templates 
 build static web pages using input parameters provided by LiTScript. They
 are loaded dynamically, making it possible to write your own templates. Most 
 of the time you probably prefer just to customize the default template using 
 various parameters provided by it.
 
 Templates also include the style sheets and code files required by the 
 web pages. These can be written using [Less][] and TypeScript. You can use 
 [CommonJS modules][] to organize your source files in a clean structure. 
 LiTScript transforms TypeScript to JS and Less to CSS. It then bundles the
 modules into few files that are easy to deploy. Since the bundler tracks all
 the style and code files, you can change them on the fly and see the results 
 right away. This is convenient especially in watch mode. 
 
 You can utilize the simple templating framework provided by the package to 
 create new templates or use whatever technology you like. 
 
 [LiTScript]: https://johtela.github.io/litscript
 [Less]: http://lesscss.org/
 [CommonJS modules]: https://www.typescriptlang.org/docs/handbook/modules.html
 
## Documentation

* Information about LiTScript is available at <https://johtela.github.io/litscript>
* The documentation for this project can be found at <https://johtela.github.io/lits-template>
