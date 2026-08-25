# 🏛️ Diplomado CNPCyF — Landing Page, Portal & Dashboard

Plataforma web de alta especialización para el **Diplomado en Código Nacional de Procedimientos Civiles y Familiares** respaldado por **UNICEQ** y con **Certificación Oficial SEP-CONOCER (Estándar EC1038)**.

---

## 🌟 Características Principales

1. **Landing Page Ultra Profesional (Estilo Apple / High-End Legal):**
   - Estética oscura de lujo (`#07090E`), toques dorados, tipografía moderna y micro-animaciones.
   - Contador en cuenta regresiva para la fecha de inicio.
   - Desglose interactivo de los **10 Módulos** temáticos y objetivos.
   - Calendario híbrido (Google Meet + Campus UNICEQ Querétaro).
   - Inversión oficial: **$5,000.00 MXN** (con opción de apartado de $2,000).

2. **Pasarela de Pagos Stripe & Onboarding Inmediato:**
   - Captura de datos del alumno para emisión de diploma y cédula SEP.
   - Validación y simulación de webhooks de Stripe.
   - Pantalla de bienvenida con folio de matrícula, código de Google Classroom y enlaces de Meet.

3. **Aula Virtual del Estudiante (`/aula`):**
   - Enlace directo a sesiones en vivo de Google Meet.
   - Integración con Google Classroom.
   - Biblioteca de formatos procesales y manuales descargables.
   - Videoteca de grabaciones en alta definición.
   - Módulo de liquidación de saldo para alumnos con apartado.

4. **Panel de Control Administrativo (`/admin`):**
   - Métricas y KPIs en tiempo real (recaudación total, alumnos inscritos, liquidados vs. apartados).
   - Tabla de alumnos con filtros, buscador y cambio de estatus de pago con 1 clic.
   - Botón directo para contactar por WhatsApp a cada alumno con mensaje personalizado.
   - Exportación de lista oficial de alumnos en formato CSV/Excel.
   - Editor de enlaces de Meet y Classroom para actualización dinámica.

---

## 🚀 Inicio Rápido en Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo local
npm run dev

# 3. Compilar para producción
npm run build
```

---

## ⚙️ Variables de Entorno (`.env.example`)

Copia `.env.example` a `.env` si deseas enlazar tus credenciales reales de Stripe:

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_STRIPE_PAYMENT_URL_FULL=https://buy.stripe.com/...
VITE_STRIPE_PAYMENT_URL_DEPOSIT=https://buy.stripe.com/...
```

---

## 🏛️ Créditos & Coordinación

* **Institución:** UNICEQ (Universidad Central de Querétaro).
* **Certificación Oficial:** SEP-CONOCER Estándar EC1038.
* **Coordinación Académica:** Mtro. Claudio Pulido (`claudio.pulido@gesacademico.edu.mx` • Tel: `442 352 3965`).
