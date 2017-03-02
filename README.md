# Angular 2 Demo with Webpack 2

This project is intended to serve as a guide for new Angular 2 projects with lazily loading modules. It is still a work in progress. Directory structures and code will follow the style guide provided by [John Papa](https://angular.io/docs/ts/latest/guide/style-guide.html).

### Framework Technologies:
- Angular 2.4
- Webpack 2
- TypeScript
- Less

## Setup
> You must have Node version >= 5.0

```bash
# 1. Clone/Download repo and navigate to directory:
git clone https://github.com/amoore1337/angular2-demo.git && cd angular2-demo

# 2. Install global dependencies:
npm install --global yarn webpack typescript

# 3. Install local dependencies:
yarn install

# 4. Compile/Start webpack:
webpack -w

# 5. In another terminal window, navigate to angular2-demo/dist and host locally such as:
cd ./dist && python -m SimpleHTTPServer 8080
```

Go to [http://localhost:8080](http://localhost:8080/) in your broswer**

## File Structure
> This project uses a component-based file structure as outlined in the Angular style guide.
```
angular2-demo/
 ├──src/
 │   ├──main.ts                            * Entry file for 'bootstrapping' the app
 │   │
 │   ├──index.html
 │   │
 │   ├──polyfills.ts                       * Pollyfills file for cross-browser support  [More Info](https://angular.io/docs/ts/latest/guide/browser-support.html)
 │   │
 │   │──vendor.ts                          * Vendor file for loading dependencies separate from main bundle
 │   │
 │   ├──app/                               * Directory for application root module
 │   │   ├──about                          * Directory for 'about' module
 │   │   │   ├──about.component.html       * Template for 'about' component
 │   │   │   ├──about.component.less       * Styles for 'about' component
 │   │   │   ├──about.component.ts         * Logic for 'about' component
 │   │   │   ├──about.component.spec.ts    * Tests for 'about' component
 │   │   │   ├──about.module.ts
 │   │   │   ├──about.routing.module.ts    * Routing module for lazily loaded module
 │   │   │   └──index.ts                   * Index file for easy import syntax (ex: "import { AboutModule } from  './about'")
 │   │   │
 │   │   ├──dashboard
 │   │   │   ├──dashboard.component.html
 │   │   │   ├──dashboard.component.less
 │   │   │   ├──dashboard.component.ts
 │   │   │   ├──dashboard.component.spec.ts
 │   │   │   ├──dashboard.module.ts
 │   │   │   ├──dashboard.routing.ts
 │   │   │   └──index.ts
 │   │   │
 │   │   ├──nav-bar
 │   │   │   ├──nav-bar.component.html
 │   │   │   ├──nav-bar.component.less
 │   │   │   ├──nav-bar.component.ts
 │   │   │   ├──nav-bar.component.spec.ts
 │   │   │   ├──nav-bar.module.ts
 │   │   │   └──index.ts
 │   │   │
 │   │   ├──app.component.html
 │   │   ├──app.component.less
 │   │   ├──app.component.ts
 │   │   ├──app.component.spec.ts
 │   │   ├──app.module.ts                  * Module file where 'app' components and dependencies are loaded
 │   │   └──index.ts
 │   │
 │   ├──syles/                             * Directory for global styles
 │   │   ├──global.less
 │   │   └──colors.less
 │   │
 │   └──assets/                            * static assets such as images
 │       ├──images/
 │       │    └──some-image.svg
 │       └──favicon.ico
 │
 │
 ├──tsconfig.json                          * typescript configuration
 ├──package.json
 └──webpack.config.js                      * webpack main configuration file

```

## Resources
* [Angular Tutorial](https://angular.io/docs/ts/latest/tutorial/)
* [Angular Architecture](https://angular.io/docs/ts/latest/guide/architecture.html)
* [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
* [Angular with Webpack](https://angular.io/docs/ts/latest/guide/webpack.html)
* [AngularClass Starter Template](https://github.com/AngularClass/angular2-webpack-starter)
* [Webpack Getting Started](https://webpack.js.org/guides/get-started/)
* [TypeScript Quick Start](https://www.typescriptlang.org/docs/tutorial.html)


*More details to come...*
