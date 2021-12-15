
# Instalar o react e react dom
npm install react react-dom


# Instalar dependecias
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli

# Configurar o babel
Na pasta rais do projecto e so criar um arquivo com o nome ".babelrc" colocar as seguintes instrucoes.

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

Transforma todas funcionalidades recentes.

# Configurar webpack

const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: path.resolve(__dirname, 'public', 'bundle.js'),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};


instalar o webpack-dev-server