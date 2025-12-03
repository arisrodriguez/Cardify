# Cardify - Birthday Card Projects

Proyecto sencillo en React creado para practicar:
- Trabajo en equipo con Git y GitHub  
- Ramas y Pull Requests  
- Componentes básicos en React  
- Uso de un modal (ventana emergente)  
- Función sencilla para exportar una tarjeta como imagen  
- Organización de un proyecto real en equipo

## 📌 Descripción general
La web muestra:
1. Un `Header`
2. Una sección de descripción del sitio
3. Una lista de tarjetas (simples)
4. Al hacer clic en una tarjeta → se abre una ventana emergente (modal) con:
   - Detalles de la tarjeta
   - Botón para exportar la tarjeta como imagen (usando html-to-image)
5. Una sección opcional de “Sobre los desarrolladores”
6. Un `Footer` simple

Todo sin diseño complejo. Solo estructura.

## 📁 Estructura sugerida
src/
components/
Header.jsx
Description.jsx
DeveloperSection.jsx
Footer.jsx
cards/
CardItem.jsx
CardList.jsx
CardModal.jsx
data/
cards.js
App.jsx

## 🧪 Funcionalidades mínimas
- Mostrar tarjetas desde un archivo `cards.jsx`
- Cada tarjeta muestra un modal al dar clic
- Modal incluye botón "Exportar imagen"
- Cerrar el modal con un botón
- Varias ramas y PRs para practicar trabajo en equipo

## Notas
Las imágenes deben estar en public/images/
Ejemplo:

public/
  images/
    card-floral.jpg
    card-minimal.jpg
    ...