# Brief de diseño

Sigue la estructura de brief de diseño estándar del proyecto (impeccable/shape), aplicada al rediseño completo del sitio.

## 1. Resumen de la funcionalidad
Rediseño del sitio institucional de la Escuela Herminio Almendros, un colegio de preescolar y primaria en Tlalpan, CDMX, con una pedagogía activa y constructivista (herencia Freinet) en operación desde 1980. El sitio debe comunicar con claridad esa propuesta pedagógica a familias que están comparando opciones, y ofrecer un camino siempre visible —pero nunca agresivo— hacia el proceso real de ingreso (plática informativa → ambientación de tres días → entrevista).

## 2. Acción principal del usuario
En palabras del equipo del proyecto: *"todo es importante, pero lo más importante es conocer la propuesta, saber por qué es una opción diferente"*. Agendar la plática informativa es la acción secundaria: debe estar siempre visible y accesible, pero no debe competir por protagonismo con el entendimiento de la propuesta pedagógica. El sitio convence mostrando, no empujando un formulario.

## 3. Dirección de diseño
Cálido, editorial, documental — más cerca de una publicación cultural/pedagógica o de un cuaderno escolar real que de un sitio corporativo de "academia bilingüe premium". Debe sentirse hecho por personas (un colectivo docente), no por un departamento de marketing.

**Evitar explícitamente** (ver anti-referencias en [`.impeccable.md`](../../.impeccable.md)): gradientes azul/morado tipo SaaS, iconografía tech genérica, fotos de stock, grids de "instalaciones" con nombres en inglés, sellos/badges como elemento hero.

**Buscar**: fotografía documental real (no posada, no stock) de hortaliza, asamblea, textos libres, trabajo con el cuerpo; paleta orgánica tintada hacia verdes de la hortaliza y tonos cálidos de tierra/papel; tipografía con carácter editorial que se sienta escrita a mano en algún punto (textos libres) sin perder legibilidad para cuerpos de texto largos.

## 4. Estrategia de layout
Composición guiada por el contenido, con ritmo editorial: bloques de texto e imagen que alternan asimetría en vez de una grilla repetitiva de tarjetas idénticas. La fotografía real ocupa espacio protagónico y sin recortes forzados. Los testimonios se presentan como citas destacadas, no como tarjetas con avatar genérico. El CTA de contacto vive en una posición persistente y discreta (header y/o elemento flotante para WhatsApp), nunca como banner intrusivo o modal.

## 5. Estados clave
- **Inicio**: primera vista (hero + frase de propuesta), scroll con las secciones descritas en la arquitectura del sitio.
- **Propuesta pedagógica**: vista de "deep dive" con los pilares (asamblea, textos libres, hortaliza, trabajo con el cuerpo, rincones).
- **Preescolar / Primaria**: narrativa "un día en..." + materias.
- **Comunidad**: galería/celebraciones, con estado de carga para imágenes y video.
- **Ingreso**: pasos del proceso, con estado que aclara costos y tiempos sin ambigüedad.
- **Contacto**: formulario con estados de envío, éxito y error; enlace directo a WhatsApp.
- **Navegación móvil**: menú colapsado, CTA de contacto siempre alcanzable.
- **404**: tono coherente con la voz cálida del resto del sitio, no un error genérico.

## 6. Modelo de interacción
Mayormente navegación editorial estática, con interacción ligera y orgánica: revelado suave de fotografías al hacer scroll en Inicio, carrusel simple de testimonios, secciones expandibles para el detalle del proceso de ingreso, formulario de contacto con validación clara. Se evita cualquier animación que se sienta "tech" o llamativa; el movimiento debe sentirse calmado, nunca urgente ni gamificado.

## 7. Requisitos de contenido
- Declaración de propuesta pedagógica (refinada a partir del texto actual de misión).
- Descripciones narrativas por pilar, reescritas a partir del copy real ya identificado: asamblea, textos libres, hortaliza, trabajo con el cuerpo, inglés (ver investigación).
- Testimonios de familias/egresados (por conseguir — recurso disponible según lo indicado por el equipo).
- Copy del proceso de ingreso con tono de bienvenida, no de trámite burocrático.
- Microcopy de CTA que invite, no presione: por ejemplo "Conoce la propuesta" o "Agenda una plática", nunca "¡Inscríbete ya!" ni contadores de urgencia.

## 8. Referencias recomendadas
Del set de referencias de impeccable, las más relevantes para esta implementación:
- `spatial-design.md` — para la composición editorial asimétrica y el ritmo visual.
- `typography.md` — para elegir una pareja tipográfica cálida y evitar los defaults corporativos.
- `color-and-contrast.md` — para construir la paleta orgánica en OKLCH sin caer en el azul corporativo.
- `motion-design.md` — para movimiento orgánico y no "tech".
- `ux-writing.md` — para el tono de voz cercano y sin superlativos en toda la microcopy.

## 9. Preguntas abiertas
- Alcance final del rediseño de marca: ¿nuevo logo, o solo refresco de paleta/tipografía sobre el logo actual?
- ¿Quién autoriza el uso de fotos/video de niñas y niños (permiso de imagen)?
- ¿Hay una preferencia real por Astro vs. otro framework, o se delega la decisión técnica? (ver [04-plan-tecnico.md](04-plan-tecnico.md))
- ¿Se mantiene contenido de "En pandemia" y bajo qué enfoque?
