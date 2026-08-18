const menuData = [
  {
    id: "entradas",
    title: "Entradas",
    subtitle: "Para comenzar la experiencia con algo para compartir.",
    image: "assets/categories/entradas.png",
    items: [
      { name: "Chorizo Santarrosano", price: 6800 },
      { name: "Palito de Queso", price: 9000 },
      { name: "Empanadas · 4 unidades", price: 6800 },
      { name: "Patacón con Hogao · 4 unidades", price: 12000 },
      { name: "Salchipapa", price: 16900 },
      { name: "Juanjo's Kids", price: 16900 },
      { name: "Ensalada César", price: 27000 },
      { name: "Queso Asado", price: 22500 },
      { name: "Chicharroncitos crujientes", price: 21000 }
    ]
  },
  {
    id: "parrilla",
    title: "Asados a la Parrilla",
    subtitle: "Cortes y preparaciones con el sabor inconfundible del fuego.",
    image: "assets/categories/parrilla.png",
    items: [
      { name: "Solomo de Res a la Parrilla", price: 32500, description: "Corte seleccionado y madurado de solomo de res de 200 g. Incluye papas, arepa y ensalada de la casa." },
      { name: "Suprema de Pollo a la Parrilla", price: 29900, description: "Corte fino de jugosa pechuga de pollo a la parrilla con papas, arepa y ensalada de la casa." },
      { name: "Suprema de Pollo Apanada", price: 31500, description: "Corte fino de jugosa pechuga de pollo apanada con papas, arepa y ensalada de la casa." },
      { name: "Cerdo a la Parrilla", price: 29900, description: "Seleccionado corte de pierna de cerdo a la parrilla, acompañado de papas, arepa y ensalada de la casa." },
      { name: "Pechuga Napolitana", price: 34900, description: "Pechuga de pollo 200 g asada a la parrilla y gratinada con queso, tomate y finas hierbas. Incluye papas, arepa y ensalada." },
      { name: "Picada Mediana · 2 a 3 personas", price: 69900, description: "Res 140 g, pollo 140 g, cerdo 280 g, chicharrón 140 g, chorizos y morcilla. Acompañada de papas, ensalada, arepa, tomate y limón." },
      { name: "Picada Grande · 4 a 5 personas", price: 89900, description: "Res 250 g, pollo 250 g, cerdo 250 g, tocino 150 g, chorizos y morcilla. Acompañada de papas, ensalada, arepa, tomate y limón." },
      { name: "Chuzo de Pollo", price: 27000, description: "Trozos de pechuga 250 g con tocineta, asados a la parrilla con salsa BBQ. Acompañado de papas, arepa y ensalada." }
    ]
  },
  {
    id: "premium",
    title: "Asados Premium",
    subtitle: "Cortes especiales para quienes quieren llevar la parrilla al siguiente nivel.",
    image: "assets/categories/premium.png",
    items: [
      { name: "Costi Chicharrón", price: 41900, description: "Jugoso y crujiente chicharrón, corte desde el tocino a la costilla, asado al horno. Incluye papas criollas, ensalada y aderezo de limón." },
      { name: "Costillas Parrilleras", price: 38000, description: "Costillas de cerdo a la parrilla, bañadas en salsa BBQ especial. Acompañadas de papas, arepa y ensalada." },
      { name: "Parrilla Mixta", price: 41500, description: "Mix de carnes de pollo, res y cerdo, acompañado de papas, arepa y ensalada." },
      { name: "Salmón a la Parrilla", price: 52500, description: "Delicioso corte de salmón asado a la parrilla, acompañado de papas, arepa y ensalada." },
      { name: "Punta de Anca Mariposa", price: 42500, description: "Seleccionado corte de punta de anca en corte fino, acompañado de papas, arepa y ensalada de la casa." },
      { name: "Beef Chorizo", price: 41500, description: "Seleccionado y madurado corte de solomo de res, acompañado de papas, arepa y ensalada." },
      { name: "Churrasco · 300 g", price: 41500, description: "Seleccionado y jugoso lomo de res en corte mariposa, acompañado de papas, arepa y ensalada." },
      { name: "Lomo Fino de Res", price: 48000, description: "Jugoso y seleccionado lomo de res o baby beef, acompañado de papas, arepa y ensalada." },
      { name: "Filet Mignon", price: 51900, description: "Seleccionado y jugoso lomo de res en medallones cubiertos con tocineta premium. Incluye papas, arepa y ensalada." },
      { name: "Medallones de Cerdo", price: 34000, description: "Lomo de cerdo en medallones, preparados a la parrilla. Acompañados de papas, arepa y ensalada." },
      { name: "Tomahawk", price: 65000, description: "Jugosa y seleccionada chuleta de res (Corte grueso). Acompañados de papas, arepa y ensalada." }
    ]
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    subtitle: "Todas nuestras hamburguesas van acompañadas con papas a la francesa.",
    image: "assets/categories/hamburguesas.png",
    items: [
      { name: "Juanjo's Burger Clásica", price: 29000, description: "Carne de res 180 g, tocineta en salsa BBQ, tomate, lechuga, pan artesanal, queso mozzarella y pepinillos." },
      { name: "Juanjo's Burger Hawaiana", price: 30500, description: "Carne de res 180 g, pan artesanal, piña asada, tomate, lechuga, pepinillos, queso mozzarella y tocineta." },
      { name: "Juanjo's Burger Pollo", price: 30500, description: "Pechuga de pollo a la parrilla 180 g, tocineta en BBQ, tomate, lechuga, pan artesanal, mozzarella y pepinillos." },
      { name: "Juanjo's Burger Ranchera", price: 32500, description: "Carne de res 180 g y chorizo, tocineta BBQ, tomate, lechuga, pan artesanal y mozzarella." },
      { name: "Juanjo's Burger Pollo Apanado", price: 32500, description: "Pechuga de pollo apanada 180 g, tocineta BBQ, tomate, lechuga, pan artesanal, mozzarella y pepinillos." },
      { name: "Juanjo's Burger Mexicana", price: 31500, description: "Carne de res 180 g, tocineta, champiñones, mozzarella, lechuga, chile, guacamole, pico de gallo y pepinillos." },
      { name: "Juanjo's Burger Mixta", price: 34900, description: "Mix de carne de res y filete de pechuga de pollo, mozzarella, lechuga, pan artesanal y pepinillos." },
      { name: "Burger Vegetariana", price: 28800, description: "Proteína a base de lentejas, mozzarella y champiñones, pan parmesano artesanal, aguacate, cebolla morada y vegetales." },
      { name: "Burger Pesto", price: 34900, description: "Carne de res 180 g, pan de pesto, cheddar, salsa de ajo y mostaza, tocineta BBQ, vegetales y aros de cebolla." },
      { name: "Burger Grill Cheese", price: 34900, description: "Carne de res 180 g, queso asado a la parrilla, pan de orégano, tocineta BBQ, aros de cebolla y vegetales." },
      { name: "Burger Amapola", price: 34900, description: "Carne de res 180 g rellena de cheddar y mozzarella, pan con semillas de amapola, tocineta BBQ, vegetales y salsa de ajo." }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    subtitle: "Para acompañar la parrilla, la hamburguesa o simplemente refrescarte.",
    image: "assets/categories/bebidas.png",
    items: [
      { name: "Limonada de Coco · 500 ml", price: 11500 },
      { name: "Jugo de Mandarina en Leche · 500 ml", price: 11500 },
      { name: "Jugo en Agua · 500 ml", price: 8500, description: "Sabores disponibles: mango, mora o fresa." },
      { name: "Jugo en Leche · 500 ml", price: 9500, description: "Sabores disponibles: mango, mora o fresa." },
      { name: "Limonada Natural · 500 ml", price: 8500 },
      { name: "Limonada Cerezada · 500 ml", price: 11500 },
      { name: "Copa de Vino", price: 12900 },
      { name: "Copa de Sangría", price: 15900 },
      { name: "Jarra de Sangría", price: 67500 },
      { name: "Te Hatsu", price: 9900 }
    ]
  },
  {
    id: "sodas",
    title: "Sodas Saborizadas / Cervezas",
    subtitle: "Refrescate con una soda o una buena cerveza",
    image: "assets/categories/sodas.png",
    items: [
      { name: "Soda saborizada de Maracuya", price: 10500 },
      { name: "Soda saborizada de Cereza", price: 10500 },
      { name: "Soda saborizada de Manzana verde", price: 10500 },
      { name: "Soda saborizada de Mango biche", price: 10500 },
      { name: "Soda saborizada de Frutos rojos", price: 10500 },
      { name: "Soda saborizada de Lyche y mango", price: 10500 },
      { name: "Cerveza Pilen / Aguila", price: 8900 },
      { name: "Cerveza Club Colombia", price: 9900 },
      { name: "Cerveza Corona", price: 12500 },
      { name: "Cerveza Tres Cordilleras", price: 12500 }
    ]
  }
];
