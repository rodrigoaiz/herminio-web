# Plan técnico

## Stack recomendado
**Astro** como framework principal:
- El sitio es predominantemente estático/editorial → Astro genera HTML mínimo con JS solo donde se necesita, lo que favorece SEO y rendimiento.
- Contenido en Markdown/MDX (content collections), editable directamente por una persona con perfil técnico sin necesidad de un CMS pensado para no-técnicos — coherente con lo definido en el alcance.
- "Islas" de interactividad solo donde haga falta (carrusel de testimonios, menú móvil, formulario de contacto).
- Despliegue sencillo y de bajo costo en Netlify, Vercel o GitHub Pages.

**Alternativa viable**: Next.js, si se prevé crecer hacia funcionalidad dinámica (portal para familias, blog con backend, autenticación). Probablemente más peso del necesario para la v1 descrita en este plan.

Este punto queda como confirmación pendiente contigo antes de iniciar la construcción.

## Estructura de contenido propuesta
```
src/
  content/
    pilares/            # asamblea, textos-libres, hortaliza, trabajo-con-el-cuerpo, rincones.md
    testimonios/         # un archivo por testimonio
    celebraciones/       # un archivo o carpeta por ciclo escolar
  pages/                 # inicio, propuesta-pedagogica, preescolar, primaria, comunidad, ingreso, contacto
```

## Calidad no funcional
- **Rendimiento**: imágenes reales optimizadas (`astro:assets`, formatos AVIF/WebP), carga diferida (`lazy loading`), objetivo de LCP < 2.5s en 4G — relevante porque el sitio se apoyará en fotografía real, no en ilustraciones ligeras.
- **Accesibilidad**: WCAG AA como mínimo — contraste, foco visible, texto alternativo real y descriptivo en fotografía documental (no genérico), formularios con etiquetas asociadas correctamente.
- **SEO**: metadatos por página, datos estructurados `EducationalOrganization` (schema.org), `sitemap.xml`, Open Graph con fotografía real (no genérica) para que los enlaces compartidos reflejen la identidad del sitio.
- **Privacidad y cumplimiento**: el formulario de contacto y el proceso de ingreso recaban datos de menores (nombre, CURP, documentos). Se requiere un **Aviso de Privacidad** conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) — falta confirmar si ya existe uno vigente para adaptarlo al nuevo sitio.
- **Analítica**: considerar una herramienta respetuosa de la privacidad (p. ej. Plausible o Fathom) en vez de una analítica que perfile en detalle, dado que parte del público navega buscando información sobre menores.

## Integraciones
- WhatsApp Business (el número ya existe) vía enlace `wa.me` con mensaje prellenado.
- Mapa de ubicación de Tlalpan, embebido o enlazado a Google Maps.
- Redes ya existentes (Facebook, Instagram) enlazadas en header/footer.

## Migración de contenido existente
- Reescribir —no copiar tal cual— los textos ya identificados como material valioso (asamblea, textos libres, hortaliza, trabajo con el cuerpo, inglés), hoy dispersos en más de 15 páginas de Wix, y consolidarlos en la nueva arquitectura (ver [02-arquitectura-del-sitio.md](02-arquitectura-del-sitio.md)).
- Evaluar si se rescata el archivo de "Celebraciones" 2020–2025.
- Decidir el destino de "En pandemia" (ver arquitectura del sitio).

## Roadmap sugerido
1. **Fase 0 (actual)** — planificación: este documento y los anteriores.
2. **Fase 1** — dirección de marca visual (si se confirma el rediseño de marca) + wireframes de Inicio, Propuesta pedagógica e Ingreso.
3. **Fase 2** — sistema de diseño base (tipografía, color, componentes) siguiendo el brief de diseño.
4. **Fase 3** — maquetación de todas las páginas con contenido real (fotografía, testimonios).
5. **Fase 4** — QA (accesibilidad, rendimiento, revisión de copy con la escuela) y lanzamiento.

## Abiertas / a confirmar
- ¿Astro o prefieres Next.js/otra alternativa?
- ¿Dominio y hosting actuales? ¿Quién los administra hoy?
- ¿Existe ya un Aviso de Privacidad vigente?
- ¿El formulario de contacto debe notificar por correo, WhatsApp, o integrarse a algún CRM/hoja de cálculo existente?
