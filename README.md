# Juanjo's Parrilla — Menú Digital

Menú estático pensado para GitHub Pages y uso principalmente en celulares.

## Estructura

- `index.html`: estructura de la carta.
- `css/styles.css`: diseño visual mobile-first.
- `js/menu.js`: información de categorías y platos.
- `js/app.js`: renderizado y navegación.
- `assets/logo-juanjos.png`: logo suministrado.
- `assets/categories/`: imágenes/ilustraciones de referencia por categoría.

## Publicación en GitHub Pages

1. Crea un repositorio, por ejemplo `juanjos-parrilla-menu`.
2. Copia estos archivos al repositorio.
3. Haz commit y push.
4. En GitHub entra a `Settings > Pages`.
5. Selecciona `Deploy from a branch`.
6. Selecciona `main` y `/ (root)`.
7. Guarda y espera el despliegue.

No requiere Node, npm, React, backend ni base de datos.

## Importante sobre la información del menú

La página de Canva pública expone las seis categorías del menú, pero buena parte de su contenido está publicado como imágenes. Para el prototipo se usaron datos disponibles públicamente en la carta digital y en DiDi Food como referencia, por lo que los precios y textos deben validarse contra la carta física de la sede de Caldas antes de publicar.

La sección "Sodas Saborizadas" queda deliberadamente sin datos inventados hasta validar sus sabores y precios.

## Cómo actualizar un plato

Editar `js/menu.js`. Ejemplo:

```js
{
  name: "Churrasco",
  price: 46000,
  description: "Descripción del plato."
}
```

## Próxima fase recomendada

- Reemplazar las ilustraciones de categoría por fotografías generadas con estilo gastronómico consistente.
- Validar todos los nombres, descripciones y precios de la sede de Caldas.
- Hacer una prueba en 2 o 3 celulares antes de imprimir el QR.
