// src/app/data/projects.data.ts
//
// El unico lugar donde se tocan los proyectos. Agregar uno es agregar un objeto
// a este array: el orden de aca es el orden en pantalla y `group` decide en que
// bloque cae. Los textos van en los dos idiomas; DataService los resuelve.
//
// Regla: cada numero que aparece en `metrics` sale de una medicion o de un
// conteo real. Si no se puede verificar, no va.

import { ProjectSeed } from '../models/portfolio.models';

export const PROJECTS: ProjectSeed[] = [

    // ─────────────────────────────────────────────────────────────────────
    // DESTACADOS — en produccion, con numeros
    // ─────────────────────────────────────────────────────────────────────

    {
        id: '01',
        name: 'DISTRIBUIDORA HARRY’S',
        group: 'FEATURED',
        status: 'PRODUCTION',
        type: {
            es: 'E-COMMERCE B2B/B2C + PUNTO DE VENTA · CLIENTE REAL',
            en: 'B2B/B2C E-COMMERCE + POINT OF SALE · PAYING CLIENT'
        },
        description: {
            es: 'Plataforma transaccional en producción para un cliente real: precios, mínimos de compra y descuentos distintos para consumidor final y mayorista sobre un único catálogo, punto de venta del local sincronizado en tiempo real con el inventario web, cobros online que se acreditan solos y panel de gestión con métricas de rentabilidad.',
            en: 'Live transactional platform built for a paying client: differentiated pricing, minimum orders and discounts for retail and wholesale customers over a single catalogue, an in-store point of sale synced in real time with web inventory, self-clearing online payments, and an admin panel with profitability metrics.'
        },
        technicalHighlight: {
            es: 'Blindaje transaccional: ningún importe se confía al cliente. El backend revalida y recalcula precios, stock y cupones contra la base antes de confirmar cada operación, tanto en la web como en el mostrador. La ingesta masiva de catálogo por Excel resiste condiciones de carrera combinando caché reactiva en memoria, bloqueos de fila (FOR UPDATE) e inserciones idempotentes (ON CONFLICT DO NOTHING). Del lado del navegador, partir el bundle único llevó la carga de entrada de 1,54 MB a 444 kB.',
            en: 'Transactional hardening: no monetary value is trusted from the client. The backend revalidates and recalculates prices, stock and coupons against the database before confirming every operation, on the web and at the counter alike. Bulk catalogue ingestion via Excel resists race conditions by combining a reactive in-memory cache, row-level locks (FOR UPDATE) and idempotent inserts (ON CONFLICT DO NOTHING). On the browser side, splitting the single bundle took the entry payload from 1.54 MB down to 444 kB.'
        },
        role: {
            es: 'Diseño, desarrollo, despliegue y soporte en producción. Solo, de punta a punta.',
            en: 'Design, development, deployment and production support. Solo, end to end.'
        },
        metrics: [
            {
                value: '792',
                label: { es: 'productos publicados en el catálogo público', en: 'products live in the public catalogue' }
            },
            {
                value: '1,54 MB → 444 kB',
                label: { es: 'carga de entrada tras partir el bundle (−71%)', en: 'entry payload after code-splitting (−71%)' }
            },
            {
                value: 'Web + POS',
                label: { es: 'un mismo stock, dos canales concurrentes', en: 'one stock pool, two concurrent channels' }
            },
            {
                value: { es: 'En producción', en: 'In production' },
                label: { es: 'sitio público, operado a diario por el cliente', en: 'public site, run daily by the client' }
            }
        ],
        techStack: [
            'React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI',
            'Node.js', 'Express', 'PostgreSQL', 'Zod', 'JWT',
            'Mercado Pago', 'Cloudinary', 'Cypress', 'Vercel', 'Railway', 'Cloudflare'
        ],
        liveUrl: 'https://www.distribuidoraharrys.com.ar',
        galleryLayout: 'wide',
        gallery: [
            {
                src: 'assets/projects/harrys-01-home.png',
                alt: {
                    es: 'Portada de la tienda, con envío gratis desde $50.000 y hasta 12 cuotas sin interés.',
                    en: 'Storefront home, with free shipping over $50,000 and up to 12 interest-free instalments.'
                }
            },
            {
                src: 'assets/projects/harrys-02-catalogo.png',
                alt: {
                    es: 'Catálogo de productos con filtros por categoría, marca y precio.',
                    en: 'Product catalogue with category, brand and price filters.'
                }
            },
            {
                src: 'assets/projects/harrys-03-admin-productos.png',
                alt: {
                    es: 'Panel de administración: alta y edición de productos, con carga masiva por Excel.',
                    en: 'Admin panel: creating and editing products, with bulk Excel upload.'
                }
            },
            {
                src: 'assets/projects/harrys-04-pos.png',
                alt: {
                    es: 'Punto de venta del local: carga rápida de productos, elección de lista minorista o mayorista y cobro.',
                    en: 'In-store point of sale: fast product entry, retail or wholesale price list, and checkout.'
                }
            },
            {
                src: 'assets/projects/harrys-06-admin-ventas.png',
                alt: {
                    es: 'Historial de ventas con filtros por vendedor, caja y estado del pedido.',
                    en: 'Sales history filtered by salesperson, register and order status.'
                }
            },
            {
                src: 'assets/projects/harrys-07-metricas.png',
                alt: {
                    es: 'Tablero de métricas del negocio: evolución de ventas y productos más vendidos.',
                    en: 'Business metrics dashboard: sales over time and best-selling products.'
                }
            },
            {
                src: 'assets/projects/harrys-05-footer.png',
                alt: {
                    es: 'Pie del sitio con las sucursales, garantías, botón de arrepentimiento y páginas legales.',
                    en: 'Site footer with branches, warranties, cancellation button and legal pages.'
                }
            }
        ],
        note: {
            es: 'Costos, márgenes, montos de venta y datos de empleados están ocultos por confidencialidad del cliente. El código es privado: los repositorios se transfirieron al cliente en la entrega.',
            en: 'Costs, margins, sales figures and employee data are hidden for client confidentiality. The code is private: the repositories were transferred to the client on delivery.'
        }
    },

    {
        id: '02',
        name: 'IT/DECK',
        group: 'FEATURED',
        status: 'PRODUCTION',
        type: {
            es: 'JUEGO DE FLASHCARDS DE IT · PWA + ANDROID',
            en: 'IT FLASHCARD GAME · PWA + ANDROID'
        },
        description: {
            es: 'Juego de flashcards de IT en español rioplatense, hecho porque no hay buen material de certificación en castellano. Doce mil preguntas con explicación repartidas en cinco ramas gratuitas, once certificaciones y doce perfiles de puesto, con modos de partida, liga entre amigos, duelos uno contra uno y barajas propias.',
            en: 'An IT flashcard game in Rioplatense Spanish, built because good certification material in Spanish does not exist. Twelve thousand explained questions across five free branches, eleven certifications and twelve job profiles, with several game modes, a friends league, one-on-one duels and user-made decks.'
        },
        technicalHighlight: {
            es: 'Es un único HTML sin framework ni dependencias de runtime: el banco entero se inyecta en el build y la aplicación funciona sin conexión, con el progreso guardado en el dispositivo. El build calcula un hash del contenido publicado y lo escribe en el HTML y en el service worker, así los teléfonos ya instalados se actualizan solos la próxima vez que abren con señal. Las preguntas prácticas dibujan la consola en HTML en vez de usar capturas: doscientos bytes contra cincuenta o doscientos kilobytes, legible por lectores de pantalla y corregible como cualquier otra carta.',
            en: 'It is a single HTML file with no framework and no runtime dependencies: the whole question bank is injected at build time and the app works offline, with progress kept on the device. The build hashes the published content and writes that hash into the HTML and the service worker, so phones that already have it installed update themselves the next time they open online. Practice questions draw the terminal in HTML instead of using screenshots: two hundred bytes against fifty or two hundred kilobytes, readable by screen readers and fixable like any other card.'
        },
        role: {
            es: 'Producto, contenido, motor, backend, distribución y compilación de Android. Solo, de punta a punta.',
            en: 'Product, content, engine, backend, distribution and Android build. Solo, end to end.'
        },
        metrics: [
            {
                value: '12.046',
                label: { es: 'preguntas, el 100% con explicación', en: 'questions, 100% with an explanation' }
            },
            {
                value: '653',
                label: { es: 'tests en verde, corriendo en cada push', en: 'tests passing, run on every push' }
            },
            {
                value: '11 + 12',
                label: { es: 'certificaciones y perfiles de puesto cubiertos', en: 'certifications and job profiles covered' }
            },
            {
                value: { es: 'Sin conexión', en: 'Offline-first' },
                label: { es: 'PWA instalable; el progreso vive en el dispositivo', en: 'installable PWA; progress lives on the device' }
            }
        ],
        techStack: [
            'JavaScript', 'HTML5', 'PWA / SERVICE WORKER', 'Node.js',
            'Cloudflare Workers', 'Durable Objects', 'Web Push (VAPID)',
            'Capacitor (Android)', 'GitHub Actions', 'Vercel'
        ],
        liveUrl: 'https://it-deck-ten.vercel.app',
        repoPrivate: true,
        galleryLayout: 'phone',
        gallery: [
            {
                src: 'assets/projects/itdeck-01-jugar.webp',
                alt: {
                    es: 'Pantalla Jugar: rango del jugador, desafío del día y las cinco ramas gratuitas con su cantidad de cartas.',
                    en: 'Play screen: player rank, daily challenge and the five free branches with their card counts.'
                }
            },
            {
                src: 'assets/projects/itdeck-02-carta.webp',
                alt: {
                    es: 'Una carta en juego: pregunta de hardware con cuatro opciones, vidas, temporizador y comodines.',
                    en: 'A card in play: a hardware question with four options, lives, timer and power-ups.'
                }
            },
            {
                src: 'assets/projects/itdeck-03-certificar.webp',
                alt: {
                    es: 'Sección Certificar: las once certificaciones con su código de examen, cantidad de preguntas y duración.',
                    en: 'Certify section: the eleven certifications with exam code, question count and time limit.'
                }
            },
            {
                src: 'assets/projects/itdeck-04-empleos.webp',
                alt: {
                    es: 'Sección Empleos: los doce perfiles de puesto, cada uno con su banco de preguntas de entrevista.',
                    en: 'Jobs section: the twelve job profiles, each with its own interview question bank.'
                }
            }
        ],
        note: {
            es: 'El repositorio es privado porque el contenido de certificaciones y empleos es el producto. La aplicación se usa entera y gratis desde el enlace.',
            en: 'The repository is private because the certification and job content is the product. The app itself is fully usable and free from the link.'
        }
    },

    {
        id: '03',
        name: 'VACUUM ENGINE',
        group: 'FEATURED',
        status: 'PRODUCTION',
        type: {
            es: 'MOTOR DE AUTOMATIZACIÓN COMERCIAL B2B',
            en: 'B2B COMMERCIAL AUTOMATION ENGINE'
        },
        description: {
            es: 'Plataforma que centraliza una operación comercial completa: intercepta las ofertas que los proveedores publican en canales de mensajería, sincroniza a diario los catálogos de cuatro proveedores y permite reenviar cualquier oferta a los clientes desde una única bandeja web. Reemplaza unas tres horas por día de mirar, copiar y reenviar a mano.',
            en: 'A platform that centralises an entire commercial operation: it intercepts the offers suppliers post on messaging channels, syncs four supplier catalogues daily, and lets any offer be forwarded to customers from a single web inbox. It removes roughly three hours a day of watching, copying and forwarding by hand.'
        },
        technicalHighlight: {
            es: 'Diagnostiqué la causa raíz de un fallo de autenticación recurrente en producción: al terminar el proceso sin cerrar el socket, el estado criptográfico de la sesión —el ratchet del protocolo Signal— quedaba a medio escribir, el servidor rechazaba la reconexión con un 401 y había que re-vincular a mano. Resuelto con un handler de SIGTERM/SIGINT que cierra el socket sin desvincular el dispositivo y drena las escrituras pendientes antes de salir. Sacar el navegador headless del servidor y hablar el protocolo directo por socket liberó memoria suficiente para que el proceso deje de morir por OOM.',
            en: 'I traced a recurring production authentication failure to its root cause: terminating the process without closing the socket left the session’s cryptographic state —the Signal protocol ratchet— half-written, so the server rejected reconnection with a 401 and manual re-pairing was needed. Fixed with a SIGTERM/SIGINT handler that closes the socket without unlinking the device and drains pending writes before exiting. Removing the headless browser from the server and speaking the protocol directly over a socket freed enough memory for the process to stop dying to the OOM killer.'
        },
        role: {
            es: 'Diseño, backend, scrapers, frontend, servidor y monitoreo. Solo, de punta a punta.',
            en: 'Design, backend, scrapers, frontend, server and monitoring. Solo, end to end.'
        },
        metrics: [
            {
                value: '3.400+',
                label: { es: 'productos sincronizados a diario, de cuatro proveedores', en: 'products synced daily, across four suppliers' }
            },
            {
                value: { es: '~3 h', en: '~3 h' },
                label: { es: 'de trabajo manual eliminadas por día', en: 'of manual work removed per day' }
            },
            {
                value: { es: '5-6 s → 1,1 s', en: '5-6 s → 1.1 s' },
                label: { es: 'carga completa de la aplicación', en: 'full application load' }
            },
            {
                value: '55 → 380 MB',
                label: { es: 'RAM libre tras sacar el navegador del servidor', en: 'free RAM after removing the browser from the server' }
            }
        ],
        techStack: [
            'Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Supabase',
            'Angular', 'Angular Material', 'Puppeteer', 'Cheerio',
            'GitHub Actions', 'nginx', 'systemd', 'VPS'
        ],
        repoPrivate: true,
        galleryLayout: 'phone',
        gallery: [
            {
                src: 'assets/projects/vacuum-01-catalogos.png',
                alt: {
                    es: 'Vista de catálogos: los productos sincronizados de los proveedores, con buscador y filtros.',
                    en: 'Catalogue view: products synced from suppliers, with search and filters.'
                }
            },
            {
                src: 'assets/projects/vacuum-02-bandeja.png',
                alt: {
                    es: 'Bandeja de ofertas interceptadas, lista para reenviar a los clientes desde un solo lugar.',
                    en: 'Inbox of intercepted offers, ready to be forwarded to customers from one place.'
                }
            },
            {
                src: 'assets/projects/vacuum-03-origenes.png',
                alt: {
                    es: 'Pantalla de orígenes: alta y control de los canales que el motor escucha.',
                    en: 'Sources screen: adding and managing the channels the engine listens to.'
                }
            }
        ],
        note: {
            es: 'Los nombres de proveedores y canales están ocultos por confidencialidad comercial. Corre en un servidor propio, así que no hay enlace público; el código es privado.',
            en: 'Supplier and channel names are hidden for commercial confidentiality. It runs on a private server, so there is no public link; the code is private.'
        }
    },

    {
        id: '04',
        name: 'VIXIT PLATFORM',
        group: 'FEATURED',
        status: 'PRODUCTION',
        type: {
            es: 'ERP INTERNO · CRM, CONTRATOS, PROYECTOS Y FINANZAS',
            en: 'INTERNAL ERP · CRM, CONTRACTS, PROJECTS AND FINANCE'
        },
        description: {
            es: 'El sistema con el que opero Vixit Labs de punta a punta: prospección, CRM, presupuestos, contratos, proyectos, tareas, tickets, mensajería y finanzas en doble moneda, sobre un modelo de datos de diecinueve entidades. Incluye un portal por token donde cada cliente sigue su proyecto sin crear cuenta.',
            en: 'The system I run Vixit Labs on, end to end: prospecting, CRM, quotes, contracts, projects, tasks, tickets, messaging and dual-currency finance, over a nineteen-entity data model. It includes a token-based portal where each client follows their project without creating an account.'
        },
        technicalHighlight: {
            es: 'Dos decisiones lo definen. Primera: la búsqueda de prospectos usa una API de mapas que se cobra por llamada, y en vez de confiar en el límite del proveedor el gasto está acotado en la propia base —una tabla de consumo lleva la cuenta y corta las búsquedas antes de superar el crédito gratuito, con una cadena de respaldo a fuentes abiertas cuando el cupo se agota—. Migrar a la versión nueva de la API bajó el costo por búsqueda de unos 37 centavos a unos 5. Segunda: los tres puntos de entrada externos (tickets de Vixit Center, consultas del sitio y demos agendadas desde la landing) son webhooks con el mismo patrón —token Bearer comparado en tiempo constante, validación con Zod, límite por IP e idempotencia por identificador—, así ningún prospecto ni ticket se carga a mano ni se duplica.',
            en: 'Two decisions define it. First: prospect search uses a mapping API billed per call, and rather than trusting the provider’s own limit, spending is capped in the database itself —a usage table keeps count and cuts off searches before the free credit is exceeded, with a fallback chain to open data sources once the quota runs out—. Migrating to the new version of the API brought the cost per search down from around 37 cents to about 5. Second: the three external entry points (Vixit Center tickets, website enquiries and demos booked from the landing page) are webhooks built on one pattern —Bearer token compared in constant time, Zod validation, per-IP rate limiting and idempotency by identifier—, so no prospect or ticket is ever entered by hand or duplicated.'
        },
        role: {
            es: 'Modelo de datos, backend, interfaz, integraciones y despliegue. Solo, de punta a punta.',
            en: 'Data model, backend, interface, integrations and deployment. Solo, end to end.'
        },
        metrics: [
            {
                value: '19',
                label: { es: 'entidades del negocio en un solo modelo de datos', en: 'business entities in a single data model' }
            },
            {
                value: '37¢ → 5¢',
                label: { es: 'costo por búsqueda tras migrar de API', en: 'cost per search after migrating API version' }
            },
            {
                value: { es: 'Tope duro', en: 'Hard cap' },
                label: { es: 'el gasto no puede excederse por diseño', en: 'spending cannot be exceeded by design' }
            },
            {
                value: { es: 'Portal por token', en: 'Token portal' },
                label: { es: 'el cliente entra sin crear cuenta', en: 'clients get in without an account' }
            }
        ],
        techStack: [
            'Next.js 16', 'React 19', 'TypeScript', 'Prisma 7', 'PostgreSQL',
            'Auth.js v5', 'Tailwind CSS 4', 'shadcn/ui', 'Zod', 'Recharts',
            'Resend', 'Vercel', 'Railway'
        ],
        liveUrl: 'https://platform-opal-one.vercel.app',
        repoPrivate: true,
        galleryLayout: 'wide',
        gallery: [
            {
                src: 'assets/projects/platform-01-adquisicion.png',
                alt: {
                    es: 'Módulo de adquisición: búsqueda de prospectos por zona y rubro, con el consumo de la API a la vista.',
                    en: 'Acquisition module: prospect search by area and industry, with API usage in plain sight.'
                }
            },
            {
                src: 'assets/projects/platform-02-portal.png',
                alt: {
                    es: 'Portal del cliente: estado del proyecto, presupuestos y tickets, sin necesidad de crear cuenta.',
                    en: 'Client portal: project status, quotes and tickets, with no account required.'
                }
            }
        ],
        note: {
            es: 'Es la plataforma interna del estudio: el enlace abre la pantalla de acceso, no el panel. Los nombres de clientes y el contenido de los tickets están ocultos, y el repositorio es privado.',
            en: 'This is the studio’s internal platform: the link opens the sign-in screen, not the dashboard. Client names and ticket contents are hidden, and the repository is private.'
        }
    },

    {
        id: '05',
        name: 'VIGILIA',
        group: 'FEATURED',
        status: 'DEPLOYED',
        type: {
            es: 'PIEZA DE DEMOSTRACIÓN · GRÁFICOS Y AUDIO EN TIEMPO REAL',
            en: 'DEMONSTRATION PIECE · REAL-TIME GRAPHICS AND AUDIO'
        },
        description: {
            es: 'Una estación de escucha del espacio profundo que lleva cuarenta y nueve años registrando y no responde nunca. El dial recorre el espectro de 300 MHz a 8,4 GHz en escala logarítmica, como cualquier receptor real, y en seis frecuencias hay transmisión. Todo el audio se sintetiza en el navegador: no hay un solo archivo de sonido en el proyecto. Tampoco hay imágenes.',
            en: 'A deep-space listening station that has been recording for forty-nine years and never answers. The dial sweeps the spectrum from 300 MHz to 8.4 GHz on a logarithmic scale, like any real receiver, and six frequencies carry a transmission. All audio is synthesised in the browser: there is not a single sound file in the project. Nor are there images.'
        },
        technicalHighlight: {
            es: 'El campo de señal es una simulación GPGPU con intercambio de texturas flotantes: cada partícula es un texel y la CPU no toca ninguna posición. Los datos de audio nunca pasan por el estado de React —viajan en un objeto mutable que se lee dentro de un único rAF central, porque sesenta renders por segundo serían inaceptables— y la tipografía respira con la señal por medio de custom properties. La calidad se adapta en tres niveles según la máquina, con un monitor que degrada si los fotogramas no alcanzan; con prefers-reduced-motion el canvas directamente no se monta y la placa estática es la experiencia completa, no una versión mutilada.',
            en: 'The signal field is a GPGPU simulation with float texture swapping: every particle is a texel and the CPU never touches a position. Audio data never passes through React state —it travels in a mutable object read inside a single central rAF, because sixty renders per second would be unacceptable— and the typography breathes with the signal through custom properties. Quality adapts across three tiers depending on the machine, with a monitor that degrades if frames fall short; under prefers-reduced-motion the canvas is never mounted at all, and the static plate is the complete experience rather than a mutilated one.'
        },
        role: {
            es: 'Concepto, escritura, diseño, shaders, motor de audio y accesibilidad. Solo, de punta a punta.',
            en: 'Concept, writing, design, shaders, audio engine and accessibility. Solo, end to end.'
        },
        metrics: [
            {
                value: '50.000',
                label: { es: 'partículas resueltas en GPU, ninguna en la CPU', en: 'particles resolved on the GPU, none on the CPU' }
            },
            {
                value: '13,39:1',
                label: { es: 'contraste medido en el cuerpo de texto: supera AAA', en: 'measured body-text contrast: beyond AAA' }
            },
            {
                value: '0',
                label: { es: 'archivos de sonido: el audio se sintetiza entero en el navegador', en: 'sound files: all audio is synthesised in the browser' }
            },
            {
                value: '40 + 18',
                label: { es: 'tests unitarios y recorridos de punta a punta', en: 'unit tests and end-to-end journeys' }
            }
        ],
        techStack: [
            'Next.js 16', 'React 19', 'TypeScript', 'three.js', 'React Three Fiber',
            'WebGL2 / GLSL', 'Tone.js', 'Web Audio API', 'Tailwind CSS 4',
            'next-intl', 'Zod', 'Vitest', 'Playwright', 'Vercel'
        ],
        liveUrl: 'https://vigilia-zeta.vercel.app',
        galleryLayout: 'wide',
        gallery: [
            {
                src: 'assets/projects/vigilia-01-portada.webp',
                alt: {
                    es: 'La estación apagada: portada en clave de placa fotográfica en negativo, con el botón de encendido.',
                    en: 'The station switched off: a cover styled as a photographic plate in negative, with the power button.'
                }
            },
            {
                src: 'assets/projects/vigilia-02-encendida.webp',
                alt: {
                    es: 'La estación encendida: el mundo se invierte a cianotipo profundo y aparece el campo de partículas.',
                    en: 'The station switched on: the world inverts to deep cyanotype and the particle field appears.'
                }
            },
            {
                src: 'assets/projects/vigilia-03-receptor.webp',
                alt: {
                    es: 'El receptor sintonizado en 2,306 GHz con la señal capturada al 100%, y el campo de partículas organizado en superficie de onda.',
                    en: 'The receiver tuned to 2.306 GHz with the signal captured at 100%, the particle field organised into a wave surface.'
                }
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────────────
    // EN CURSO — publicado o en construccion, sin clientes todavia
    // ─────────────────────────────────────────────────────────────────────

    {
        id: '06',
        name: 'VIXIT CENTER',
        group: 'ACTIVE',
        status: 'IN_DEVELOPMENT',
        type: {
            es: 'SaaS MULTI-TENANT DE AUDITORÍA DE CALIDAD',
            en: 'MULTI-TENANT QUALITY ASSURANCE SaaS'
        },
        description: {
            es: 'Plataforma multi-tenant donde un call center audita la calidad de atención de sus campañas: evaluaciones sobre grillas configurables, dashboards que cruzan producción con calidad, reportes en Excel y PDF, calibración entre evaluadores, planes de coaching y un portal aparte donde cada agente ve su devolución y deja su descargo. Treinta entidades de dominio y cincuenta y cuatro pantallas.',
            en: 'A multi-tenant platform where a contact centre audits the service quality of its campaigns: evaluations over configurable scorecards, dashboards crossing production with quality, Excel and PDF reports, calibration between reviewers, coaching plans, and a separate portal where each agent sees their feedback and files a response. Thirty domain entities and fifty-four screens.'
        },
        technicalHighlight: {
            es: 'Aislamiento multi-tenant: el identificador de organización sale siempre de la sesión y nunca del input, y toda mutación por id resuelve primero contra {id, organización} antes de tocar nada. El motor de puntaje es configurable por organización —pesos por módulo, criticidad, tratamiento de N/A— con un editor visual que valida que los pesos sumen 100%; si la grilla ya tiene evaluaciones cargadas bloquea el cambio estructural y ofrece duplicarla en una versión nueva, para no romper la integridad referencial del histórico.',
            en: 'Multi-tenant isolation: the organisation identifier always comes from the session and never from input, and every mutation by id resolves against {id, organisation} before touching anything. The scoring engine is configurable per organisation —module weights, criticality, N/A handling— with a visual editor that validates weights sum to 100%; if the scorecard already has evaluations loaded it blocks structural changes and offers to duplicate it into a new version, so the referential integrity of past records is never broken.'
        },
        role: {
            es: 'Producto, modelo de datos, backend, interfaz, tests y despliegue. Solo, de punta a punta.',
            en: 'Product, data model, backend, interface, tests and deployment. Solo, end to end.'
        },
        metrics: [
            {
                value: { es: 'Multi-tenant', en: 'Multi-tenant' },
                label: { es: 'aislamiento por organización en cada consulta', en: 'per-organisation isolation on every query' }
            },
            {
                value: { es: '5 roles', en: '5 roles' },
                label: { es: 'matriz de permisos por sección y acción', en: 'permission matrix by section and action' }
            },
            {
                value: '90',
                label: { es: 'tests unitarios en verde, más integración contra PostgreSQL real', en: 'unit tests passing, plus integration against a real PostgreSQL' }
            },
            {
                value: { es: 'Ley 25.326', en: 'Data protection' },
                label: { es: 'export y anonimización de datos personales', en: 'personal data export and anonymisation' }
            }
        ],
        techStack: [
            'Next.js 16', 'React 19', 'TypeScript', 'Prisma 7', 'PostgreSQL',
            'Auth.js v5', 'Tailwind CSS 4', 'Zod', 'SheetJS', 'react-pdf',
            'Recharts', 'Vitest', 'Vercel'
        ],
        repoPrivate: true,
        galleryLayout: 'wide',
        gallery: [
            {
                src: 'assets/projects/vixit-01-dashboard.png',
                alt: {
                    es: 'Dashboard: llamadas, porcentaje de ventas, auditorías, nota promedio y error crítico en un solo tablero.',
                    en: 'Dashboard: calls, sales rate, audits, average score and critical-error rate on a single board.'
                }
            },
            {
                src: 'assets/projects/vixit-04-grilla.png',
                alt: {
                    es: 'Editor visual de la grilla de evaluación: módulos, ítems y ponderaciones, validando que sumen 100%.',
                    en: 'Visual scorecard editor: modules, items and weights, validated to add up to 100%.'
                }
            },
            {
                src: 'assets/projects/vixit-06-evaluacion.png',
                alt: {
                    es: 'Carga de una auditoría: la nota por módulo y el total se recalculan mientras el analista completa la grilla.',
                    en: 'Filling in an audit: module scores and the total recalculate as the analyst completes the scorecard.'
                }
            },
            {
                src: 'assets/projects/vixit-05-reportes.png',
                alt: {
                    es: 'Reportes listos para presentar, exportables a Excel y PDF.',
                    en: 'Presentation-ready reports, exportable to Excel and PDF.'
                }
            },
            {
                src: 'assets/projects/vixit-02-operador.png',
                alt: {
                    es: 'Ficha de un operador: producción, calidad y evolución en el tiempo.',
                    en: 'An agent profile: production, quality and progress over time.'
                }
            },
            {
                src: 'assets/projects/vixit-03-portal-operador.png',
                alt: {
                    es: 'Portal del operador: cada agente ve su propia devolución y puede dejar un descargo.',
                    en: 'Agent portal: each agent sees their own feedback and can file a response.'
                }
            }
        ],
        note: {
            es: 'Capturas de una instancia de demostración con datos de prueba. El sistema está construido y desplegado, pero todavía no tiene clientes: por eso figura como trabajo en curso. El repositorio es privado.',
            en: 'Screenshots from a demo instance with test data. The system is built and deployed but does not have customers yet, which is why it is listed as work in progress. The repository is private.'
        }
    },

    {
        id: '07',
        name: 'LANDING VIXIT CENTER',
        group: 'ACTIVE',
        status: 'DEPLOYED',
        type: {
            es: 'LANDING DE VENTA CON AGENDA DE DEMOS',
            en: 'SALES LANDING PAGE WITH DEMO BOOKING'
        },
        description: {
            es: 'La pieza comercial de Vixit Center. Cuenta el problema en el lenguaje de quien lo tiene —la planilla de Excel que se rompe—, muestra capturas reales del sistema en vez de mockups, deja al prospecto calcular su propio precio según cuántos operadores y usuarios de calidad tenga, y cierra con una agenda donde reserva la demo él mismo.',
            en: 'The commercial piece for Vixit Center. It states the problem in the language of the person who has it —the spreadsheet that breaks— shows real screenshots of the system instead of mockups, lets the prospect work out their own price from how many agents and quality users they have, and closes with a scheduler where they book the demo themselves.'
        },
        technicalHighlight: {
            es: 'El lead no muere en un formulario: la reserva entra por webhook autenticado a Vixit Platform y aparece como prospecto en el CRM sin que nadie la cargue a mano. La página es honesta por diseño —dice que todavía no tiene clientes en vez de inventar logos— y las capturas llevan texto alternativo que describe qué muestra cada pantalla y con qué números, no un genérico "captura del sistema".',
            en: 'The lead does not die in a form: the booking arrives at Vixit Platform over an authenticated webhook and shows up as a prospect in the CRM with nobody typing it in. The page is honest by design —it says it has no customers yet instead of inventing logos— and the screenshots carry alt text describing what each screen shows and with what figures, not a generic "system screenshot".'
        },
        role: {
            es: 'Textos, diseño, desarrollo e integración con el CRM. Solo, de punta a punta.',
            en: 'Copy, design, development and CRM integration. Solo, end to end.'
        },
        metrics: [
            {
                value: { es: 'Simulador de precio', en: 'Price simulator' },
                label: { es: 'el prospecto calcula su costo antes de hablar con nadie', en: 'prospects work out their cost before talking to anyone' }
            },
            {
                value: { es: 'Agenda propia', en: 'Self-service booking' },
                label: { es: 'reserva la demo sin cruce de correos', en: 'books the demo with no email back-and-forth' }
            },
            {
                value: { es: 'Webhook al CRM', en: 'Webhook to the CRM' },
                label: { es: 'el lead entra sin carga manual', en: 'the lead lands with no manual entry' }
            }
        ],
        techStack: [
            'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'next/image', 'Cal.com', 'Vercel'
        ],
        liveUrl: 'https://vixit-center-landing.vercel.app',
        galleryLayout: 'wide',
        gallery: [
            {
                src: 'assets/projects/center-01-hero.webp',
                alt: {
                    es: 'Portada de la landing: la planilla de Excel a la izquierda y la misma información priorizada por el sistema a la derecha.',
                    en: 'Landing hero: the spreadsheet on the left and the same information prioritised by the system on the right.'
                }
            },
            {
                src: 'assets/projects/center-02-producto.webp',
                alt: {
                    es: 'Sección de producto: capturas reales del sistema, con los correos difuminados a propósito.',
                    en: 'Product section: real screenshots of the system, with email addresses deliberately blurred.'
                }
            }
        ]
    },

    {
        id: '08',
        name: 'VIXIT LABS WEB',
        group: 'ACTIVE',
        status: 'DEPLOYED',
        type: {
            es: 'WEB INSTITUCIONAL BILINGÜE',
            en: 'BILINGUAL COMPANY WEBSITE'
        },
        description: {
            es: 'La web del estudio. Un catálogo de las piezas propias en producción con sus números reales, siete servicios que salen de esos mismos sistemas, el método de trabajo en cinco etapas y una página de caso por producto. Bilingüe completo, con ruta por idioma y contenido equivalente en los dos.',
            en: 'The studio website. A catalogue of the in-house pieces running in production with their real figures, seven services that come out of those same systems, the five-stage working method, and a case page per product. Fully bilingual, with a route per language and equivalent content in both.'
        },
        technicalHighlight: {
            es: 'Sin base de datos y sin superficie expuesta: todo se renderiza en el servidor a partir de diccionarios tipados por idioma, y lo único dinámico es el formulario de contacto, que entra por webhook al CRM de Vixit Platform y además manda correo por su cuenta, así una consulta no se pierde aunque el webhook falle. Tener el contenido en un solo diccionario por idioma significa que corregir un texto no toca ningún componente.',
            en: 'No database and no exposed surface: everything renders on the server from typed per-language dictionaries, and the only dynamic part is the contact form, which posts to the Vixit Platform CRM over a webhook and also sends its own email, so an enquiry survives a failing webhook. Keeping the content in one dictionary per language means fixing a line of copy touches no component at all.'
        },
        role: {
            es: 'Identidad, textos, diseño y desarrollo. Solo, de punta a punta.',
            en: 'Identity, copy, design and development. Solo, end to end.'
        },
        metrics: [
            {
                value: { es: '2 idiomas', en: '2 languages' },
                label: { es: 'contenido completo, no una traducción parcial', en: 'complete content, not a partial translation' }
            },
            {
                value: '8',
                label: { es: 'páginas: home, servicios, estudio, casos y legales', en: 'pages: home, services, studio, cases and legal' }
            },
            {
                value: { es: 'Sin base de datos', en: 'No database' },
                label: { es: 'renderizado en servidor y servido desde CDN', en: 'server-rendered and served from a CDN' }
            }
        ],
        techStack: [
            'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4',
            'Motion', 'Lenis', 'Zod', 'Resend', 'Vercel'
        ],
        liveUrl: 'https://vixit-labs.vercel.app',
        repoPrivate: true,
        galleryLayout: 'wide',
        gallery: [
            {
                src: 'assets/projects/vixitlabs-01-hero.webp',
                alt: {
                    es: 'Portada del sitio: “Llevamos sistemas a producción y los mantenemos vivos”, con el emblema del estudio.',
                    en: 'Site hero: “We take systems to production and keep them alive”, with the studio emblem.'
                }
            },
            {
                src: 'assets/projects/vixitlabs-02-catalogo.webp',
                alt: {
                    es: 'Catálogo de piezas propias: cada una con qué resuelve y sus números reales de producción.',
                    en: 'Catalogue of in-house pieces: each with what it solves and its real production figures.'
                }
            },
            {
                src: 'assets/projects/vixitlabs-03-caso.webp',
                alt: {
                    es: 'Página de caso de Distribuidora Harry’s, el único cliente con nombre y enlace.',
                    en: 'Case page for Distribuidora Harry’s, the only client shown by name and link.'
                }
            }
        ],
        note: {
            es: 'El sitio es público; el repositorio es privado.',
            en: 'The site is public; the repository is private.'
        }
    },

    // ─────────────────────────────────────────────────────────────────────
    // ARCHIVO — pausados o cerrados. Van compactos: muestran rango, no pelean
    // atencion con lo que esta en produccion.
    // ─────────────────────────────────────────────────────────────────────

    {
        id: '09',
        name: 'CLAVO',
        group: 'ARCHIVE',
        status: 'PROTOTYPE',
        type: {
            es: 'JUEGO 3D · IA DE HORDA EN GODOT',
            en: '3D GAME · HORDE AI IN GODOT'
        },
        description: {
            es: 'Híbrido de tower defense y acción en tercera persona. Lo que vale del proyecto no es el juego: es la inteligencia artificial de la horda, donde cada enemigo es un individuo con personalidad, moral y memoria en vez de una unidad que camina hacia el objetivo.',
            en: 'A tower-defense and third-person-action hybrid. What matters here is not the game: it is the horde AI, where each enemy is an individual with a personality, morale and memory rather than a unit that walks towards the objective.'
        },
        technicalHighlight: {
            es: 'Cada enemigo corre una máquina de estados de trece estados y decide solo. Cinco arquetipos de personalidad, manadas con líder de estandarte que las envalentona, pánico en cadena cuando hay una matanza cerca o cae el líder, vendetta —el que escapó herido vuelve en la oleada siguiente, más fuerte y con nombre propio— y miedo aprendido: los más listos rodean las trampas que ya vieron matar. Mil cien líneas solo para el duende.',
            en: 'Each enemy runs a thirteen-state machine and decides for itself. Five personality archetypes, packs led by a standard-bearer who emboldens them, chain panic when a slaughter happens nearby or the leader falls, vendetta —the one who escaped wounded comes back the next wave, stronger and with a name of its own— and learned fear: the smarter ones walk around traps they have seen kill. Eleven hundred lines for the goblin alone.'
        },
        role: {
            es: 'Diseño de juego, IA, sistemas y programación. Solo, de punta a punta.',
            en: 'Game design, AI, systems and programming. Solo, end to end.'
        },
        metrics: [
            {
                value: '13',
                label: { es: 'estados por enemigo, decidiendo solo', en: 'states per enemy, deciding on its own' }
            },
            {
                value: '5',
                label: { es: 'arquetipos: guerrero, saqueador, berserk, cobarde, cruel', en: 'archetypes: warrior, looter, berserk, coward, cruel' }
            },
            {
                value: '60',
                label: { es: 'scripts de GDScript, ~450 kB de lógica', en: 'GDScript files, ~450 kB of logic' }
            }
        ],
        techStack: ['Godot 4.5', 'GDScript', 'Python'],
        repoPrivate: true,
        note: {
            es: 'Prototipo pausado. El repositorio es privado.',
            en: 'Prototype on hold. The repository is private.'
        }
    },

    {
        id: '10',
        name: 'BREATH SHOP',
        group: 'ARCHIVE',
        status: 'ARCHIVED',
        type: { es: 'E-COMMERCE FULL STACK', en: 'FULL STACK E-COMMERCE' },
        description: {
            es: 'SPA en Angular 17+ con Signals y componentes standalone, sobre un backend MVC escrito desde cero en PHP nativo: ruteo, controladores y capa de acceso a datos propios, sin framework.',
            en: 'Angular 17+ SPA with Signals and standalone components, on top of an MVC backend written from scratch in vanilla PHP: custom routing, controllers and data-access layer, no framework.'
        },
        technicalHighlight: {
            es: 'Autenticación stateless vía JWT con hasheo Bcrypt, y sincronización carrito–inventario en tiempo real para evitar sobreventa en compras concurrentes, sobre un esquema relacional con consultas parametrizadas contra inyección SQL.',
            en: 'Stateless JWT authentication with Bcrypt hashing, and real-time cart–inventory synchronisation to prevent overselling under concurrent purchases, on a relational schema using parameterised queries against SQL injection.'
        },
        role: {
            es: 'Frontend, backend y base de datos. Solo, de punta a punta.',
            en: 'Frontend, backend and database. Solo, end to end.'
        },
        techStack: [
            'Angular 17+',
            { es: 'PHP (MVC nativo)', en: 'PHP (vanilla MVC)' },
            'MySQL', 'JWT', 'Bcrypt'
        ],
        githubUrl: 'https://github.com/Wolpi066/Breath',
        videoUrl: 'assets/heroBreathe.mp4',
        videoKind: 'hero',
        videoPoster: 'assets/breath-poster.jpg'
    },

    {
        id: '11',
        name: 'EL CISMA',
        group: 'ARCHIVE',
        status: 'PROTOTYPE',
        type: { es: 'MOTOR DE JUEGO SURVIVAL HORROR', en: 'SURVIVAL HORROR GAME ENGINE' },
        description: {
            es: 'Motor 2D en C++ con Raylib: game loop propio y gestión manual de memoria sin garbage collection, con control explícito del ciclo de vida de cada entidad y del presupuesto de frame.',
            en: '2D engine in C++ with Raylib: custom game loop and manual memory management without garbage collection, with explicit control over every entity’s lifecycle and the frame budget.'
        },
        technicalHighlight: {
            es: 'Máquinas de estados finitos para la IA de enemigos —patrullar, perseguir y atacar— con transiciones disparadas por proximidad y estímulos sonoros. El motor está diseñado para ser testeable de forma aislada, con tests unitarios bajo TDD sobre colisiones y lógica de inventario.',
            en: 'Finite state machines driving enemy AI —patrol, chase and attack— with transitions triggered by proximity and sound cues. The engine is designed to be testable in isolation, with TDD unit tests covering collisions and inventory logic.'
        },
        role: {
            es: 'Motor, IA y tests. Solo, de punta a punta.',
            en: 'Engine, AI and tests. Solo, end to end.'
        },
        techStack: ['C++', 'Raylib', 'Tau', 'TDD'],
        githubUrl: 'https://github.com/Wolpi066/ElCisma',
        videoUrl: 'assets/ElCisma.mp4',
        videoKind: 'demo',
        videoPoster: 'assets/ElCisma-poster.jpg'
    }
];
