class Encabezado extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Mi Sitio - ' + this.props.nombrePagina
    );
  }
}
