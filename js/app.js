const steps = [
  {
    tag: "Paso 0",
    title: "¿Qué es Django?",
    desc: "Django es un framework web de Python que te permite construir aplicaciones web completas de manera rápida. Sigue el patrón MVT (Model-View-Template) y viene con todo incluido: panel de administración, ORM, autenticación, formularios y más.",
    content: `
      <div class="section">
        <div class="section-label">¿Para qué sirve?</div>
        <div class="info-cards">
          <div class="info-card"><div class="info-card-title">🗄 Bases de datos</div><div class="info-card-body">Maneja bases de datos con su ORM — sin escribir SQL directamente.</div></div>
          <div class="info-card"><div class="info-card-title">🔐 Autenticación</div><div class="info-card-body">Login, logout, permisos y usuarios vienen incluidos de fábrica.</div></div>
          <div class="info-card"><div class="info-card-title">⚙ Admin automático</div><div class="info-card-body">Panel de administración generado automáticamente desde tus modelos.</div></div>
          <div class="info-card"><div class="info-card-title">🌐 URLs y vistas</div><div class="info-card-body">Enrutamiento limpio: cada URL apunta a una función o clase de vista.</div></div>
        </div>
      </div>
      <div class="tip-box" style="margin-top:1rem"><strong>Patrón MVT:</strong> Model (datos) → View (lógica) → Template (HTML). Django conecta las tres capas automáticamente.</div>
    `
  },
  {
    tag: "Paso 1",
    title: "Instalación y entorno virtual",
    desc: "Antes de instalar Django, crea un entorno virtual para aislar las dependencias de tu proyecto. Esto evita conflictos entre diferentes proyectos.",
    content: `
      <div class="section">
        <div class="section-label">Requisitos</div>
        <div class="tip-box">Necesitas Python 3.10+ instalado. Verifica con: <code>python --version</code></div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">Crear entorno virtual</div>
        <div class="code-block"><span class="comment"># Crear el entorno virtual</span>
<span class="cmd">python -m venv entorno</span>

<span class="comment"># Activar en Linux / Mac</span>
<span class="cmd">source entorno/bin/activate</span>

<span class="comment"># Activar en Windows</span>
<span class="cmd">entorno\\Scripts\\activate</span>

<span class="comment"># Instalar Django</span>
<span class="cmd">pip install django</span>

<span class="comment"># Verificar instalación</span>
<span class="cmd">python -m django --version</span></div>
      </div>
      <div class="info-cards" style="margin-top:1rem">
        <div class="info-card"><div class="info-card-title">¿Por qué el entorno virtual?</div><div class="info-card-body">Mantiene las librerías de cada proyecto separadas. Si el proyecto A usa Django 4 y el B usa Django 5, no hay conflicto.</div></div>
      </div>
    `
  },
  {
    tag: "Paso 2",
    title: "Crear el proyecto",
    desc: "Un proyecto Django es el contenedor principal. Contiene la configuración global, las URLs raíz y conecta todas las aplicaciones.",
    content: `
      <div class="section">
        <div class="section-label">Comando para crear el proyecto</div>
        <div class="code-block"><span class="comment"># Crea la carpeta del proyecto</span>
<span class="cmd">django-admin startproject miproyecto</span>

<span class="comment"># Entrar a la carpeta</span>
<span class="cmd">cd miproyecto</span>

<span class="comment"># Correr el servidor de desarrollo</span>
<span class="cmd">python manage.py runserver</span></div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">Estructura de archivos generada</div>
        <div class="info-cards">
          <div class="info-card"><div class="file-name">manage.py</div><div class="info-card-body" style="margin-top:4px">Herramienta de línea de comandos. Desde aquí corres el servidor, creas migraciones, creás superusuarios, etc.</div></div>
          <div class="info-card"><div class="file-name">miproyecto/settings.py</div><div class="info-card-body" style="margin-top:4px">Configuración global: base de datos, apps instaladas, idioma, zona horaria, rutas de archivos estáticos.</div></div>
          <div class="info-card"><div class="file-name">miproyecto/urls.py</div><div class="info-card-body" style="margin-top:4px">URLs raíz del proyecto. Desde aquí se incluyen las URLs de cada aplicación.</div></div>
          <div class="info-card"><div class="file-name">miproyecto/wsgi.py</div><div class="info-card-body" style="margin-top:4px">Punto de entrada para servidores de producción como Gunicorn o uWSGI.</div></div>
          <div class="info-card"><div class="file-name">miproyecto/asgi.py</div><div class="info-card-body" style="margin-top:4px">Como wsgi.py pero para conexiones asíncronas (WebSockets, etc.).</div></div>
        </div>
      </div>
    `
  },
  {
    tag: "Paso 3",
    title: "Crear una aplicación",
    desc: "En Django, una 'app' es un módulo reutilizable que hace una cosa específica. Un proyecto puede tener muchas apps: blog, tienda, usuarios, etc.",
    content: `
      <div class="section">
        <div class="section-label">Crear la app</div>
        <div class="code-block"><span class="cmd">python manage.py startapp blog</span></div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">Archivos generados en la app</div>
        <div class="info-cards">
          <div class="info-card"><div class="file-name">models.py</div><div class="info-card-body" style="margin-top:4px">Define las tablas de la base de datos como clases Python. Cada campo del modelo = columna en la DB.</div></div>
          <div class="info-card"><div class="file-name">views.py</div><div class="info-card-body" style="margin-top:4px">La lógica de tu aplicación. Recibe una petición HTTP y devuelve una respuesta (HTML, JSON, etc.).</div></div>
          <div class="info-card"><div class="file-name">urls.py</div><div class="info-card-body" style="margin-top:4px">No se crea solo — lo creás vos. Define qué URL activa qué vista dentro de esta app.</div></div>
          <div class="info-card"><div class="file-name">admin.py</div><div class="info-card-body" style="margin-top:4px">Registra los modelos para que aparezcan en el panel de administración automático de Django.</div></div>
          <div class="info-card"><div class="file-name">apps.py</div><div class="info-card-body" style="margin-top:4px">Configuración de la app. Guarda el nombre de la app y permite personalizarla.</div></div>
          <div class="info-card"><div class="file-name">migrations/</div><div class="info-card-body" style="margin-top:4px">Carpeta donde Django guarda el historial de cambios en los modelos. No la toques a mano.</div></div>
        </div>
      </div>
      <div class="tip-box" style="margin-top:1rem"><strong>Importante:</strong> Registra la app en <code>settings.py</code> → <code>INSTALLED_APPS = [..., 'blog']</code></div>
    `
  },
  {
    tag: "Paso 4",
    title: "Modelos — la base de datos",
    desc: "Los modelos son clases Python que definen la estructura de tus datos. Django los convierte en tablas SQL automáticamente.",
    content: `
      <div class="section">
        <div class="section-label">blog/models.py</div>
        <div class="code-block"><span class="kw">from</span> django.db <span class="kw">import</span> models

<span class="kw">class</span> <span class="cmd">Articulo</span>(models.Model):
    titulo  = models.CharField(max_length=<span class="str">200</span>)
    cuerpo  = models.TextField()
    fecha   = models.DateTimeField(auto_now_add=<span class="kw">True</span>)
    activo  = models.BooleanField(default=<span class="kw">True</span>)

    <span class="kw">def</span> __str__(self):
        <span class="kw">return</span> self.titulo</div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">Aplicar los modelos a la base de datos</div>
        <div class="code-block"><span class="comment"># Genera el archivo de migración</span>
<span class="cmd">python manage.py makemigrations</span>

<span class="comment"># Aplica los cambios a la DB</span>
<span class="cmd">python manage.py migrate</span></div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">Tipos de campos comunes</div>
        <div class="grid-2">
          <div class="info-card"><div class="file-name">CharField</div><div class="info-card-body" style="margin-top:4px">Texto corto. Requiere max_length.</div></div>
          <div class="info-card"><div class="file-name">TextField</div><div class="info-card-body" style="margin-top:4px">Texto largo sin límite.</div></div>
          <div class="info-card"><div class="file-name">IntegerField</div><div class="info-card-body" style="margin-top:4px">Números enteros.</div></div>
          <div class="info-card"><div class="file-name">DateTimeField</div><div class="info-card-body" style="margin-top:4px">Fecha y hora.</div></div>
          <div class="info-card"><div class="file-name">ForeignKey</div><div class="info-card-body" style="margin-top:4px">Relación muchos-a-uno.</div></div>
          <div class="info-card"><div class="file-name">BooleanField</div><div class="info-card-body" style="margin-top:4px">True / False.</div></div>
        </div>
      </div>
    `
  },
  {
    tag: "Paso 5",
    title: "Vistas — la lógica",
    desc: "Las vistas reciben una petición HTTP, hacen algo (consultar la DB, procesar un formulario) y devuelven una respuesta. Pueden ser funciones o clases.",
    content: `
      <div class="section">
        <div class="section-label">blog/views.py — vista de función</div>
        <div class="code-block"><span class="kw">from</span> django.shortcuts <span class="kw">import</span> render
<span class="kw">from</span> .models <span class="kw">import</span> Articulo

<span class="kw">def</span> <span class="cmd">lista_articulos</span>(request):
    articulos = Articulo.objects.filter(activo=<span class="kw">True</span>)
    <span class="kw">return</span> render(request, <span class="str">'blog/lista.html'</span>, {
        <span class="str">'articulos'</span>: articulos
    })</div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">Vista basada en clase (alternativa)</div>
        <div class="code-block"><span class="kw">from</span> django.views.generic <span class="kw">import</span> ListView
<span class="kw">from</span> .models <span class="kw">import</span> Articulo

<span class="kw">class</span> <span class="cmd">ArticuloListView</span>(ListView):
    model = Articulo
    template_name = <span class="str">'blog/lista.html'</span>
    context_object_name = <span class="str">'articulos'</span></div>
      </div>
      <div class="tip-box" style="margin-top:1rem"><strong>ORM de Django:</strong> <code>Articulo.objects.all()</code> trae todos. <code>.filter()</code> filtra. <code>.get(pk=1)</code> trae uno. Sin SQL.</div>
    `
  },
  {
    tag: "Paso 6",
    title: "URLs — el enrutamiento",
    desc: "Las URLs conectan una ruta de navegador con una vista. Primero defines las URLs de la app, luego las incluyes en el proyecto.",
    content: `
      <div class="section">
        <div class="section-label">blog/urls.py (crear este archivo)</div>
        <div class="code-block"><span class="kw">from</span> django.urls <span class="kw">import</span> path
<span class="kw">from</span> . <span class="kw">import</span> views

urlpatterns = [
    path(<span class="str">''</span>, views.lista_articulos, name=<span class="str">'lista'</span>),
    path(<span class="str">'articulo/&lt;int:pk&gt;/'</span>, views.detalle, name=<span class="str">'detalle'</span>),
]</div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">miproyecto/urls.py — incluir las URLs de la app</div>
        <div class="code-block"><span class="kw">from</span> django.urls <span class="kw">import</span> path, include

urlpatterns = [
    path(<span class="str">'admin/'</span>, admin.site.urls),
    path(<span class="str">'blog/'</span>, include(<span class="str">'blog.urls'</span>)),
]</div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">Convertidores de URL</div>
        <div class="grid-2">
          <div class="info-card"><div class="file-name">&lt;int:pk&gt;</div><div class="info-card-body" style="margin-top:4px">Número entero.</div></div>
          <div class="info-card"><div class="file-name">&lt;str:slug&gt;</div><div class="info-card-body" style="margin-top:4px">Texto sin espacios.</div></div>
          <div class="info-card"><div class="file-name">&lt;uuid:id&gt;</div><div class="info-card-body" style="margin-top:4px">UUID estándar.</div></div>
          <div class="info-card"><div class="file-name">&lt;path:ruta&gt;</div><div class="info-card-body" style="margin-top:4px">Ruta completa con barras.</div></div>
        </div>
      </div>
    `
  },
  {
    tag: "Paso 7",
    title: "Templates — el HTML",
    desc: "Los templates son archivos HTML con un lenguaje de plantillas propio de Django. Permiten mostrar datos dinámicos, loops, condiciones y herencia de plantillas.",
    content: `
      <div class="section">
        <div class="section-label">Estructura de carpetas</div>
        <div class="code-block">blog/
  templates/
    blog/
      base.html    <span class="comment"># plantilla madre</span>
      lista.html   <span class="comment"># hereda de base</span></div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">base.html — plantilla madre</div>
        <div class="code-block"><span class="str">&lt;!DOCTYPE html&gt;</span>
&lt;html&gt;
&lt;body&gt;
  &lt;nav&gt;Mi Blog&lt;/nav&gt;
  {% block contenido %}{% endblock %}
&lt;/body&gt;
&lt;/html&gt;</div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">lista.html — hereda de base</div>
        <div class="code-block">{% extends <span class="str">'blog/base.html'</span> %}
{% block contenido %}
  {% for art in articulos %}
    &lt;h2&gt;{{ art.titulo }}&lt;/h2&gt;
    &lt;p&gt;{{ art.fecha }}&lt;/p&gt;
  {% endfor %}
{% endblock %}</div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">Sintaxis del lenguaje de templates</div>
        <div class="grid-2">
          <div class="info-card"><div class="file-name">{{ variable }}</div><div class="info-card-body" style="margin-top:4px">Muestra el valor de una variable.</div></div>
          <div class="info-card"><div class="file-name">{% tag %}</div><div class="info-card-body" style="margin-top:4px">Lógica: for, if, block, extends.</div></div>
          <div class="info-card"><div class="file-name">{{ var|filtro }}</div><div class="info-card-body" style="margin-top:4px">Transforma datos: upper, date, truncate...</div></div>
          <div class="info-card"><div class="file-name">{# comentario #}</div><div class="info-card-body" style="margin-top:4px">Comentarios que no se renderizan.</div></div>
        </div>
      </div>
    `
  },
  {
    tag: "Paso 8",
    title: "Admin — el panel automático",
    desc: "Django genera un panel de administración completo a partir de tus modelos. Solo debes registrar los modelos y crear un superusuario.",
    content: `
      <div class="section">
        <div class="section-label">Crear superusuario</div>
        <div class="code-block"><span class="cmd">python manage.py createsuperuser</span>
<span class="comment"># Te pedirá: usuario, email, contraseña</span></div>
      </div>
      <div class="section" style="margin-top:1rem">
        <div class="section-label">blog/admin.py — registrar el modelo</div>
        <div class="code-block"><span class="kw">from</span> django.contrib <span class="kw">import</span> admin
<span class="kw">from</span> .models <span class="kw">import</span> Articulo

<span class="comment"># Registro básico</span>
admin.site.register(Articulo)

<span class="comment"># Registro personalizado</span>
@admin.register(Articulo)
<span class="kw">class</span> <span class="cmd">ArticuloAdmin</span>(admin.ModelAdmin):
    list_display  = [<span class="str">'titulo'</span>, <span class="str">'fecha'</span>, <span class="str">'activo'</span>]
    list_filter   = [<span class="str">'activo'</span>]
    search_fields = [<span class="str">'titulo'</span>]</div>
      </div>
      <div class="info-cards" style="margin-top:1rem">
        <div class="info-card"><div class="info-card-title">Accede en</div><div class="info-card-body"><code>http://127.0.0.1:8000/admin/</code> con tu superusuario.</div></div>
      </div>
      <div class="tip-box" style="margin-top:1rem"><strong>list_display</strong> define qué columnas se ven en la tabla. <strong>list_filter</strong> agrega filtros laterales. <strong>search_fields</strong> activa la búsqueda por texto.</div>
    `
  },
  {
    tag: "Paso 9",
    title: "Flujo completo — resumen",
    desc: "Este es el ciclo de vida completo de una petición en Django. Cuando un usuario visita una URL, ocurre esto:",
    content: `
      <div class="section">
        <div class="info-cards">
          <div class="info-card">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span class="badge badge-blue">1</span>
              <div class="info-card-title">El navegador hace una petición</div>
            </div>
            <div class="info-card-body"><code>GET /blog/</code> llega al servidor Django.</div>
          </div>
          <div class="info-card">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span class="badge badge-blue">2</span>
              <div class="info-card-title">urls.py busca la URL</div>
            </div>
            <div class="info-card-body">Django revisa los patrones en orden hasta encontrar uno que coincida con <code>/blog/</code>.</div>
          </div>
          <div class="info-card">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span class="badge badge-blue">3</span>
              <div class="info-card-title">Se llama la vista</div>
            </div>
            <div class="info-card-body">Django llama a <code>lista_articulos(request)</code> y pasa el objeto request.</div>
          </div>
          <div class="info-card">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span class="badge badge-blue">4</span>
              <div class="info-card-title">La vista consulta el modelo</div>
            </div>
            <div class="info-card-body"><code>Articulo.objects.all()</code> genera el SQL y trae los datos de la DB.</div>
          </div>
          <div class="info-card">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span class="badge badge-blue">5</span>
              <div class="info-card-title">Se renderiza el template</div>
            </div>
            <div class="info-card-body">La vista pasa los datos a <code>lista.html</code> y Django genera el HTML final.</div>
          </div>
          <div class="info-card">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span class="badge badge-green">✓</span>
              <div class="info-card-title">Se devuelve la respuesta</div>
            </div>
            <div class="info-card-body">El HTML llega al navegador del usuario. ¡Listo!</div>
          </div>
        </div>
      </div>
      <div class="tip-box" style="margin-top:1rem"><strong>Comandos clave para recordar:</strong> <code>makemigrations</code> → <code>migrate</code> → <code>createsuperuser</code> → <code>runserver</code></div>
    `
  }
];

let current = 0;

function render() {
  const s = steps[current];
  document.getElementById('content').innerHTML = `
    <div class="step-header" style="margin-bottom:1.5rem">
      <span class="step-tag">${s.tag}</span>
      <div class="step-title">${s.title}</div>
      <div class="step-desc">${s.desc}</div>
    </div>
    ${s.content}
  `;
  const prog = document.getElementById('progress');
  prog.innerHTML = steps.map((_, i) => {
    let cls = i < current ? 'done' : i === current ? 'active' : '';
    return `<div class="step-dot ${cls}" onclick="goTo(${i})" title="Paso ${i}">${i}</div>`;
  }).join('');
  document.getElementById('btn-prev').disabled = current === 0;
  const btnNext = document.getElementById('btn-next');
  btnNext.disabled = false;
  btnNext.textContent = current === steps.length - 1 ? '¡Completado!' : 'Siguiente →';
  if (current === steps.length - 1) btnNext.disabled = true;
  window.scrollTo(0, 0);
}

function navigate(dir) { goTo(current + dir); }
function goTo(i) {
  if (i < 0 || i >= steps.length) return;
  current = i;
  render();
}

render();
