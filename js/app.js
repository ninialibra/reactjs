/*
El primer parámetro: tag a crear

El segundo parámetro podría ser un json con atributos del tag a crear
- para aplicar style: { style: { color: 'red' } }
- src de una img: { src: 'img.jpg' }
- clase de css: { className: 'nombre_clase' }

Tercer parámetro: el contenido (hijos del elemento)
*/

var encabezado = React.createElement('h1', null, 'Hola mundo');
ReactDOM.render(encabezado, document.getElementById('content'));

var link = React.createElement('a', { href: 'https://www.google.com', style: { color: 'red' } }, 'Ir a Google');
ReactDOM.render(link, document.getElementById('content1'));

var div = React.createElement('div', null,
  React.createElement('h1', null, 'El titulo'),
  React.createElement('p', null, 'Primer Párrafo'),
  React.createElement('p', { style: { fontSize: '15px' } },
    'Segundo Párrafo',
    React.createElement('a', { href: 'https://twitter.com' }, 'Ver más')
  )
);
ReactDOM.render(div, document.getElementById('content2'));

var varios = React.createElement('div', null,
  React.createElement(Encabezado, { nombrePagina: 'Pagina 1'}),
  React.createElement(Menu),
  React.createElement(Contenido, null,
    React.createElement('p', null, 'Mi contenido')
  )
);
ReactDOM.render(varios, document.getElementById('content3'));

var menu = React.createElement('ul', null,
  React.createElement(Tab, { activo: false,link: '#inicio', nombre: 'Inicio'}),
  React.createElement(Tab, { activo: true,link: '#quienes-somos', nombre: 'Quienes Somos'}),
  React.createElement(Tab, { activo: false,link: '#faq', nombre: 'FAQ'}),
);
ReactDOM.render(menu, document.getElementById('content4'));
