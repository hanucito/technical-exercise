# Desafio: Data Segmentation
## Descripción
Ese repositorio pretende resolver el **desafío** propuesto en https://github.com/iamat/desafios-frontend.

Se incluyen los archivos del desafío `data.html` y `data.js` y se ofrecen dos soluciones: una implementando `AngularJS` y otra implementando `React`.

También se utilizan dos fuentes de datos:
- `results` (hardcodeado): un array declarado en `shared.js`. Resultados de la encuesta.
- `teams` ([ajax](https://api.iamat.com/atcodes/dilema2015/teams/)): nombres de algunos de los grupos/equipos listados en `results`.

## Solución con `AngularJS`
- `ng.html`: archivo a visualizar en el navegador.
- `ng.js`: lógica del renderizado de datos.

#### Archivos compartidos
- `shared.js`: variales y funciones generales. JavaScript nativo.
- `theme.css`: hoja de estilos.
- `raphael.min.js` / [`Raphaël`](http://dmitrybaranovskiy.github.io/raphael/) (*MIT License*): manipulación de SVG. 

#### Archivos externos
- [`AngularJS`](https://angularjs.org/) (MIT License)
    - https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js

## Solución con `React`
- `react.html`: archivo a visualizar en el navegador.
- `react.js`: lógica del renderizado de datos.

#### Archivos compartidos
- `shared.js`: variales y funciones generales. JavaScript nativo.
- `theme.css`: hoja de estilos.
- `raphael.min.js` / [`Raphaël`](http://dmitrybaranovskiy.github.io/raphael/) (*MIT License*): manipulación de SVG.

#### Archivos externos
- [`React`](https://facebook.github.io/react/) (*MIT License*)
    - https://fb.me/react-15.3.0.min.js 
    - https://fb.me/react-dom-15.3.0.min.js
- [`Babel`](http://babeljs.io/) (*MIT License*): soporte para *text/babel*
    - https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js
