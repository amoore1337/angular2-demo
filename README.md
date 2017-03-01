# Angular 2 Demo with Webpack 2

This project is intended to serve as a guide for new Angular 2 projects. It is still a work in progress. However, all code and directory structure will follow the style guide provided by [John Papa](https://angular.io/docs/ts/latest/guide/style-guide.html).

### Setup
> You must have Node version >= 5.0

1. Clone/Download repo and navigate to directory:
```bash
git clone https://github.com/amoore1337/angular2-demo.git && cd angular2-demo
```

2. Install global dependencies:
```bash
npm install --global yarn webpack typescript
```

3. Install local dependencies:
```bash
yarn install
```

4. Compile/Start webpack:
```bash
webpack -w
```

5. In another terminal window, navigate to ```angular2-demo/dist``` and host locally such as:
```bash
cd ./dist && python -m SimpleHTTPServer 8080
```

6. Go to [http://localhost://8080](http://localhost://8080) in your broswer

### Framework Technologies:
- Angular 2.4
- Webpack 2
- TypeScript
- Less

*More details to come...*
