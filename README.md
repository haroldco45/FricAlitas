# FricAlitas Dosquebradas — Menú Digital + Pedidos por WhatsApp (PWA)

Aplicación web progresiva (PWA) para **FricAlitas Dosquebradas**, restaurante de alitas crujientes, FricaBurger, FricaPöllö y combos para compartir.

## 🎯 Objetivo
Catálogo digital interactivo con carrito de pedido y envío directo por WhatsApp, pensado para que FricAlitas lo publique en sus redes sociales (Instagram, Facebook, WhatsApp Business) y los clientes puedan ver el menú completo, armar su pedido y enviarlo en segundos.

## 🍗 Contenido del menú
- **Combos de Alitas**: 6, 10, 15, 20 y 30 alas (precios desde $26.900 hasta $96.900), salsas (BBQ Gourmet, Miel Mostaza, Picante suave/medio/alto) y acompañantes a elección (Francesa, Criolla, Yucas).
- **Especialidades**: FricaPöllö (perfecto para 2), Fricapöllitö personal, FricaBurger, Fricawich.
- **Combos para compartir**: FricaTenders Combo, Combo FricaCrush, Fricä Ramö (ideal para regalo / San Valentín).
- **Adiciones y bebidas**: papitas, queso, trozos de pollo, salsa, tender y alita adicional, Coca-Cola y agua.
- **Horarios** en tiempo real (hora Colombia, UTC-5) para el FricaTruck Dosquebradas y Cocina Oculta Pereira (solo domicilios), con indicador de abierto/cerrado.

## 🛒 Funcionalidades
- Catálogo con tarjetas de producto, imágenes reales y precios.
- Carrito flotante con contador y resumen de pedido.
- Formulario de entrega: nombre, teléfono, tipo de entrega (domicilio o recoger), dirección con botón de GPS, forma de pago y comentarios.
- Envío del pedido formateado directo al WhatsApp del negocio (+57 312 8614711).
- Pantalla de confirmación tras el envío.
- Aviso de tratamiento de datos personales conforme a la **Ley 1581 de 2012 (Habeas Data)**.

## ⚙️ Instalación / publicación
1. Sube toda la carpeta a GitHub Pages, Netlify o el hosting de preferencia.
2. Verifica que `manifest.json`, `sw.js` y la carpeta `icons/` y `assets/` queden en la raíz junto a `index.html`.
3. (Opcional) Reemplaza `assets/og-image.jpg` por una foto en mejor resolución para la vista previa al compartir en WhatsApp/redes.
4. Comparte el enlace — los usuarios podrán instalar la app desde el navegador ("Agregar a pantalla de inicio").

## 📁 Estructura
```
index.html        → App principal (menú + carrito + pedido)
manifest.json     → Configuración PWA
sw.js             → Service Worker (modo offline)
icons/            → Íconos de la app (192x192 y 512x512)
assets/           → Fotos del menú extraídas del catálogo original
```

---
Desarrollada por **Vibras Positivas HM** — Derechos de Autor Reservados
