function Encabezado(props) {
  return React.createElement(
    'h1',
    null,
    'Mi Sitio - ' + props.nombrePagina
  );
}

function Menu() {
  return React.createElement('ul', { className: 'menu' },
    React.createElement('li', null, 'Inicio'),
    React.createElement('li', null, 'Quienes Somos'),
    React.createElement('li', null, 'FAQ')
  )
}

function Contenido(props) {
  return React.createElement(
    'div',
    {className: 'contenido'},
    props.children
  );
}

function Tab(props){
  return React.createElement('li', { className: (props.activo?"tab tab-activo":"tab") },
    React.createElement('a', { href: props.link }, props.nombre)
  )
}
