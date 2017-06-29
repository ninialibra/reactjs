class Encabezado extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Mi Sitio - ' + this.props.nombrePagina
    );
  }
}

class Boton extends React.Component {
  render() {
    var color = this.props.color;

    if (!color) { color = 'blue'; }

    return React.createElement('button', {
      style: { color: color }
    }, this.props.texto);
  }
}

class App extends React.Component {
  render() {
    return React.createElement('div', null,
      React.createElement(
      	'h1',
      	{className: 'titulo' + this.props.titulo},
      	this.props.titulo
      ),
      this.props.contenido ?
        React.createElement(
      	  Contenido,
      	  {ancho: 1024, mostrarAds: true},
          this.props.contenido
        ) :
        React.createElement(SinContenido)
    );
  }
}
