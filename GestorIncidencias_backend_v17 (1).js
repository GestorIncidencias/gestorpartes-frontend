// ============================================================
// GESTOR DE INCIDENCIAS URBANAS — POLICÍA LOCAL LA ZUBIA
// Backend Google Apps Script — VERSIÓN DEFINITIVA COMPLETA
// ============================================================

const ESCUDO_PL_B64 = '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';

const CONFIG = {
  SHEET_INCIDENCIAS:    'Incidencias',
  SHEET_SENALES_V:      'SeñalesVerticales',
  SHEET_SENALES_H:      'SeñalesHorizontales',
  SHEET_INTERSECCIONES: 'Intersecciones',
  SHEET_HISTORIAL:      'Historial',
  SHEET_USUARIOS:       'Usuarios',
  SHEET_AREAS:          'Areas',
  SHEET_CONTACTOS:      'Contactos',
  SHEET_VEHICULOS:      'Vehiculos',
  SHEET_DEPOSITOS:      'Depositos',
  SHEET_COBERTURA:      'Cobertura',
  SHEET_OCUPACIONES:    'Ocupaciones',
  CARPETA_FOTOS:        'GestorIncidencias_Fotos',
  CARPETA_INFORMES:     'GestorIncidencias_Informes',

  // URL del Web App de GestorPartes (Implementar → Administrar
  // implementaciones → copiar "URL de la aplicación web" de la
  // implementación activa) — IMPRESCINDIBLE rellenarla para que el
  // traspaso automático de incidencias a intervenciones funcione (ver
  // _intentarVolcarEnGestorPartes). Si se deja vacía, crearIncidencia
  // sigue funcionando con normalidad, simplemente sin traspaso automático.
  URL_API_GESTORPARTES: 'https://script.google.com/macros/s/AKfycbwXM_4eInyp6I64wCyIbcRR-O4Z97hUn2KMU53IOICe9Sd9IWq0jEB-uxCHWdHlTFZCFQ/exec',
};

const ORDINALES = ['PRIMERO','SEGUNDO','TERCERO','CUARTO','QUINTO','SEXTO',
  'SÉPTIMO','OCTAVO','NOVENO','DÉCIMO','UNDÉCIMO','DUODÉCIMO','DECIMOTERCERO',
  'DECIMOCUARTO','DECIMOQUINTO','DECIMOSEXTO','DECIMOSÉPTIMO','DECIMOCTAVO',
  'DECIMONOVENO','VIGÉSIMO'];

// ── TABLA LEGAL: Ordenanza Municipal de Ocupación y Utilización de Espacios Públicos ──
// Referencia: subtipo de ocupación irregular -> artículo, tipificación y cuantía orientativa (arts. 76-77)
const TABLA_SANCIONES_OCUPACION = {
  // TITULO II - Obras (arts. 8-12)
  'Obras sin autorización':                          { articulo: 'Art. 8-11 (por remisión, análogo a obras/zanjas sin licencia)', tipificacion: 'Grave', cuantiaMin: 150, cuantiaMax: 600 },
  'Andamio sin licencia':                             { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 100, cuantiaMax: 300 },
  'Grúa sin licencia o sin reunir requisitos':         { articulo: 'Art. 76 (graves) / Art. 77 (muy graves si trabaja sin medidas de seguridad)', tipificacion: 'Grave / Muy grave', cuantiaMin: 600, cuantiaMax: 2000 },
  'Obra con señalización/protección incorrecta o insuficiente': { articulo: 'Art. 12 / Art. 76', tipificacion: 'Grave', cuantiaMin: 250, cuantiaMax: 800 },
  'Corte de calle total sin licencia':                 { articulo: 'Art. 76', tipificacion: 'Grave', cuantiaMin: 250, cuantiaMax: 800 },
  'Corte de calle parcial sin licencia':                { articulo: 'Art. 76', tipificacion: 'Grave', cuantiaMin: 150, cuantiaMax: 500 },
  'Corte de calle no ajustado a fecha autorizada':      { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 50, cuantiaMax: 180 },
  'Corte de calle sin señalización/iluminación (con licencia)': { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 100, cuantiaMax: 300 },
  // TITULO III - Zanjas (arts. 13-20)
  'Zanja sin licencia':                                { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 250, cuantiaMax: 800 },
  'Zanja sin diligencia/precaución (conducciones)':     { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 500, cuantiaMax: 1000 },
  'Zanja con peligro para peatones/vehículos/servicios': { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 500, cuantiaMax: 1000 },
  'No contactar con Servicios Técnicos antes de zanja/cata': { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 110, cuantiaMax: 350 },
  'No reparar daños de zanja en vía pública':           { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 110, cuantiaMax: 350 },
  'Daños a mobiliario urbano por ocupación/zanja/cata':  { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 90, cuantiaMax: 280 },
  // TITULO IV - Contenedores (arts. 21-25)
  'Contenedor sin autorización / lugar distinto al autorizado': { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 30, cuantiaMax: 100 },
  'Contenedor sin señalización obligatoria':            { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 30, cuantiaMax: 100 },
  'Contenedor con residuos/materiales prohibidos':      { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 150, cuantiaMax: 600 },
  // TITULO V - Terrazas de verano (arts. 26-32)
  'Terraza sin autorización':                          { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 150, cuantiaMax: 500 },
  'Terraza fuera de fecha de concesión':                { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 150, cuantiaMax: 500 },
  'Terraza sin reunir condicionantes de la autorización': { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 100, cuantiaMax: 300 },
  'Exceso de veladores sobre lo autorizado':            { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  'Terraza sin retirar mobiliario fuera de horario':     { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 30, cuantiaMax: 100 },
  'Terraza sin condiciones de limpieza exigidas':        { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  // TITULO VI - Actividades/atracciones privadas (arts. 33-41)
  'Actividad/atracción privada sin licencia':           { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 250, cuantiaMax: 800 },
  // TITULO VII - Toldos (arts. 42-46)
  'Toldo sin licencia':                                 { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 30, cuantiaMax: 100 },
  'Toldo a altura menor a la permitida':                { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  // TITULO VIII - Pancartas y banderolas (arts. 47-52)
  'Pancarta/banderola sin autorización':                { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  'Pancarta/banderola fuera de tiempo autorizado':       { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 30, cuantiaMax: 100 },
  'Pancarta/banderola con peligro para personas o bienes': { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 150, cuantiaMax: 600 },
  // TITULO IX - Reservas de espacio (arts. 53-58)
  'Reserva de espacio sin autorización':                { articulo: 'Art. 53-58 (por remisión)', tipificacion: 'Leve/Grave (según afectación)', cuantiaMin: 40, cuantiaMax: 600 },
  'Uso indebido de reserva de espacio (PMR u otras)':    { articulo: 'Art. 53-58 (por remisión)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  // TITULO X - Pasos de vehículos / vados (arts. 59-73)
  'Vado sin autorización':                              { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 150, cuantiaMax: 600 },
  'Señal de vado sin nº de expediente o ilegible':       { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  'Señal de vado sin troquelado correspondiente':        { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  'Señal de vado sin limitación horaria correspondiente': { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  'Vado sin señal reglamentaria colocada':               { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  'Rampa fija no permitida (solo se admiten móviles)':   { articulo: 'Art. 76 (graves) / Art. 58.3', tipificacion: 'Grave', cuantiaMin: 100, cuantiaMax: 300 },
  'No retirar rampas móviles tras la maniobra':          { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 40, cuantiaMax: 200 },
  'No reparar desperfectos por paso de vehículos':       { articulo: 'Art. 76 (graves)', tipificacion: 'Grave', cuantiaMin: 150, cuantiaMax: 600 },
  'No cambio de titularidad solicitado':                { articulo: 'Art. 76 (leves)', tipificacion: 'Leve', cuantiaMin: 30, cuantiaMax: 100 },
  // Genérico / sin encaje específico
  'Otro (especificar en observaciones)':                { articulo: 'Art. 7 (norma general de ocupación)', tipificacion: 'A valorar', cuantiaMin: null, cuantiaMax: null },
  'Ocupación no catalogada — especificar en observaciones (ej. camión de mudanza, grúa suelta...)': { articulo: 'Art. 7 (norma general de ocupación)', tipificacion: 'A valorar', cuantiaMin: null, cuantiaMax: null },
  // Opción neutra (item 11): ocupación autorizada comprobada sin incidencias, no sancionable
  'Ocupación autorizada — sin incidencias':              { articulo: null, tipificacion: 'No sancionable — autorizada y ajustada a condiciones', cuantiaMin: null, cuantiaMax: null }
};

const TIPOS_OCUPACION = {
  'Obras': ['Obras sin autorización','Andamio sin licencia','Grúa sin licencia o sin reunir requisitos','Obra con señalización/protección incorrecta o insuficiente','Corte de calle total sin licencia','Corte de calle parcial sin licencia','Corte de calle no ajustado a fecha autorizada','Corte de calle sin señalización/iluminación (con licencia)','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Zanjas': ['Zanja sin licencia','Zanja sin diligencia/precaución (conducciones)','Zanja con peligro para peatones/vehículos/servicios','No contactar con Servicios Técnicos antes de zanja/cata','No reparar daños de zanja en vía pública','Daños a mobiliario urbano por ocupación/zanja/cata','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Contenedores': ['Contenedor sin autorización / lugar distinto al autorizado','Contenedor sin señalización obligatoria','Contenedor con residuos/materiales prohibidos','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Terraza de verano': ['Terraza sin autorización','Terraza fuera de fecha de concesión','Terraza sin reunir condicionantes de la autorización','Exceso de veladores sobre lo autorizado','Terraza sin retirar mobiliario fuera de horario','Terraza sin condiciones de limpieza exigidas','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Actividad/atracción privada': ['Actividad/atracción privada sin licencia','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Toldo': ['Toldo sin licencia','Toldo a altura menor a la permitida','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Pancarta/banderola': ['Pancarta/banderola sin autorización','Pancarta/banderola fuera de tiempo autorizado','Pancarta/banderola con peligro para personas o bienes','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Reserva de espacio': ['Reserva de espacio sin autorización','Uso indebido de reserva de espacio (PMR u otras)','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Paso de vehículos (vado)': ['Vado sin autorización','Señal de vado sin nº de expediente o ilegible','Señal de vado sin troquelado correspondiente','Señal de vado sin limitación horaria correspondiente','Vado sin señal reglamentaria colocada','Rampa fija no permitida (solo se admiten móviles)','No retirar rampas móviles tras la maniobra','No reparar desperfectos por paso de vehículos','No cambio de titularidad solicitado','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Evento municipal': ['Mercadillo','Verbena','Pasacalles','Evento musical en plaza','Ocupación autorizada — sin incidencias','Otro (especificar en observaciones)'],
  'Otro (especificar)': ['Ocupación no catalogada — especificar en observaciones (ej. camión de mudanza, grúa suelta...)']
};

// ── PUNTO DE ENTRADA ─────────────────────────────────────
function doGet(e)  { return handleRequest(e); }
function doPost(e) { return handleRequest(e); }

function handleRequest(e) {
  try {
    const params   = e.parameter || {};
    const postData = e.postData ? JSON.parse(e.postData.contents || '{}') : {};
    const data     = Object.assign({}, params, postData);
    const action   = data.action || '';
    let result;

    switch (action) {
      // AUTH
      case 'login':               result = login(data); break;
      case 'loginConCodigoRecuperacion': result = loginConCodigoRecuperacion(data); break;
      case 'generarCodigoRecuperacionPin': result = generarCodigoRecuperacionPin(data); break;
      case 'cambiarPin':          result = cambiarPin(data); break;
      // INCIDENCIAS
      case 'crearIncidencia':     result = crearIncidencia(data); break;
      case 'getIncidencias':      result = getIncidencias(data); break;
      case 'getIncidencia':       result = getIncidencia(data); break;
      case 'actualizarEstado':    result = actualizarEstado(data); break;
      case 'cerrarIncidencia':    result = cerrarIncidencia(data); break;
      case 'actualizarExpediente':result = actualizarExpediente(data); break;
      case 'subirFoto':           result = subirFoto(data); break;
      case 'getFoto':             result = getFoto(data); break;
      // SEÑALIZACIÓN
      case 'crearSenalV':         result = crearSenalVertical(data); break;
      case 'getSenalesV':         result = getSenalesVerticales(data); break;
      case 'actualizarSenalV':    result = actualizarSenalVertical(data); break;
      case 'crearSenalH':         result = crearSenalHorizontal(data); break;
      case 'getSenalesH':         result = getSenalesHorizontales(data); break;
      case 'actualizarSenalH':    result = actualizarSenalHorizontal(data); break;
      case 'crearInterseccion':   result = crearInterseccion(data); break;
      case 'getIntersecciones':   result = getIntersecciones(data); break;
      case 'actualizarInterseccion': result = actualizarInterseccion(data); break;
      case 'sugerirVinculoSenal': result = sugerirVinculoSenal(data); break;
      case 'vincularSenalIncidencia': result = vincularSenalIncidencia(data); break;
      case 'generarInformeAuditoriaSenales': result = generarInformeAuditoriaSenales(data); break;
      // HISTORIAL
      case 'getHistorial':        result = getHistorial(data); break;
      case 'addHistorial':        result = addHistorial(data); break;
      // VEHÍCULOS
      case 'crearVehiculo':       result = crearVehiculo(data); break;
      case 'getVehiculos':        result = getVehiculos(data); break;
      case 'crearDeposito':       result = crearDeposito(data); break;
      case 'getDepositos':        result = getDepositos(data); break;
      case 'asignarDepositoVehiculo': result = asignarDepositoVehiculo(data); break;
      case 'getInfraccionesInmovilizacion': result = getInfraccionesInmovilizacion(); break;
      case 'comprobarVehiculo':   result = comprobarVehiculo(data); break;
      // OCUPACIONES DE VÍA PÚBLICA
      case 'getTablaSancionesOcupacion': result = getTablaSancionesOcupacion(data); break;
      case 'crearOcupacion':      result = crearOcupacion(data); break;
      case 'getOcupaciones':      result = getOcupaciones(data); break;
      case 'actualizarComprobacionInSitu': result = actualizarComprobacionInSitu(data); break;
      case 'getOcupacion':        result = getOcupacion(data); break;
      case 'comprobarOcupacion':  result = comprobarOcupacion(data); break;
      case 'actualizarEstadoOcupacion': result = actualizarEstadoOcupacion(data); break;
      case 'generarListadoTerrazas': result = generarListadoTerrazas(data); break;
      case 'generarListadoRestoOcupaciones': result = generarListadoRestoOcupaciones(data); break;
      case 'generarActaDenunciaOcupacion': result = generarActaDenunciaOcupacion(data); break;
      // COBERTURA
      case 'registrarCobertura':  result = registrarCobertura(data); break;
      case 'getCobertura':        result = getCobertura(data); break;
      // ADMIN
      case 'getUsuarios':         result = getUsuarios(data); break;
      case 'backupManual':        result = backupManual(data); break;
      case 'getBackupsLog':       result = getBackupsLog(data); break;
      case 'crearUsuario':        result = crearUsuario(data); break;
      case 'actualizarUsuario':   result = actualizarUsuario(data); break;
      case 'getAreas':            result = getAreas(data); break;
      case 'crearArea':           result = crearArea(data); break;
      case 'getContactos':        result = getContactos(data); break;
      case 'crearContacto':       result = crearContacto(data); break;
      // ESTADÍSTICAS
      case 'getEstadisticas':     result = getEstadisticas(data); break;
      case 'getPuntosNegros':     result = getPuntosNegros(data); break;
      case 'getIndicePorArea':    result = getIndicePorArea(data); break;
      // INFORMES
      case 'generarInformeTurno': result = generarInformeTurno(data); break;
      case 'generarActaVehiculo': result = generarActaVehiculo(data); break;
      case 'generarInformeMensual': result = generarInformeMensual(data); break;
      case 'generarInformePatrimonial': result = generarInformePatrimonial(data); break;
      case 'crearComprobacion':    result = crearComprobacion(data); break;
      case 'getComprobaciones':    result = getComprobaciones(data); break;
      case 'realizarComprobacion': result = realizarComprobacion(data); break;
      case 'exportarIncidencias':  result = exportarIncidencias(data); break;
      default:
        result = { ok: false, error: 'Acción no reconocida: ' + action };
    }

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── UTILIDADES ────────────────────────────────────────────
function getSheet(nombre) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nombre);
}

function sheetToObjects(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });
    return obj;
  });
}

function generarId(prefijo) {
  const año  = new Date().getFullYear();
  const rand = Math.floor(Math.random() * 90000) + 10000;
  return prefijo + '-' + año + '-' + rand;
}

function ahora() { return new Date().toISOString(); }

function verificarToken(token) {
  if (!token) return null;
  const usuarios = sheetToObjects(getSheet(CONFIG.SHEET_USUARIOS));
  return usuarios.find(u => u.token === token && u.activo === true) || null;
}

function getCarpetaFotos() {
  const c = DriveApp.getFoldersByName(CONFIG.CARPETA_FOTOS);
  return c.hasNext() ? c.next() : DriveApp.createFolder(CONFIG.CARPETA_FOTOS);
}

function getCarpetaMes() {
  const hoy  = new Date();
  const nom  = hoy.getFullYear() + '-' + String(hoy.getMonth() + 1).padStart(2, '0');
  const raiz = getCarpetaFotos();
  const sub  = raiz.getFoldersByName(nom);
  return sub.hasNext() ? sub.next() : raiz.createFolder(nom);
}

function getCarpetaInformes() {
  const c = DriveApp.getFoldersByName(CONFIG.CARPETA_INFORMES);
  return c.hasNext() ? c.next() : DriveApp.createFolder(CONFIG.CARPETA_INFORMES);
}

function moverAInformes(docId) {
  const archivo  = DriveApp.getFileById(docId);
  const carpeta  = getCarpetaInformes();
  carpeta.addFile(archivo);
  try { DriveApp.getRootFolder().removeFile(archivo); } catch(e) {}
  return archivo;
}

// ── SEGURIDAD: HASH DE PIN (item 23) ──────────────────────
// Apps Script no tiene bcrypt nativo; usamos SHA-256 con sal por usuario, que ya es
// muchísimo mejor que el texto plano anterior. Cada usuario tiene su propia sal (pinSalt).
function _sha256Hex(texto) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, texto, Utilities.Charset.UTF_8);
  return bytes.map(b => ((b < 0 ? b + 256 : b).toString(16)).padStart(2, '0')).join('');
}
function _generarSalt() { return Utilities.getUuid().replace(/-/g, '').slice(0, 16); }
function _hashPin(pin, salt) { return _sha256Hex(salt + ':' + String(pin)); }
function _generarCodigoNumerico(digitos) {
  let c = '';
  for (let i = 0; i < digitos; i++) c += Math.floor(Math.random() * 10);
  return c;
}

// ── IDENTIDAD MOSTRADA EN LA APP (nunca el nombre real) ────
// La app nunca muestra el nombre real de nadie, ni en pantalla ni en documentos.
// En su lugar se usa "Agente/Oficial [badge]" o, para roles especiales
// (Jefatura, concejalías, grúa...), una etiqueta fija sin número — configurada
// en el campo etiquetaEspecial de cada usuario. El nombre real solo queda
// guardado en la hoja Usuarios como registro interno, nunca sale de ahí.
function etiquetaAgente(usuario) {
  if (!usuario) return '—';
  if (usuario.etiquetaEspecial) return usuario.etiquetaEspecial;
  return (usuario.empleo || 'Agente') + ' ' + usuario.badge;
}

// ── AUTH ──────────────────────────────────────────────────
function login(data) {
  const { badge, pin } = data;
  if (!badge || !pin) return { ok: false, error: 'Credenciales incompletas' };
  const sheet    = getSheet(CONFIG.SHEET_USUARIOS);
  const usuarios = sheetToObjects(sheet);
  const usuario  = usuarios.find(u => String(u.badge) === String(badge) && u.activo === true);
  if (!usuario) return { ok: false, error: 'Badge o PIN incorrecto' };

  let autenticado = false;
  let necesitaMigrarHash = false;
  if (usuario.pinSalt) {
    autenticado = _hashPin(pin, usuario.pinSalt) === usuario.pin;
  } else {
    // Fila antigua todavía en texto plano (pre-hash): validamos igual para no bloquear a nadie
    // y migramos el PIN a hash de forma transparente en este mismo login.
    autenticado = String(usuario.pin) === String(pin);
    necesitaMigrarHash = autenticado;
  }
  if (!autenticado) return { ok: false, error: 'Badge o PIN incorrecto' };

  const token = Utilities.getUuid();
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (String(filas[i][headers.indexOf('badge')]) === String(badge)) {
      if (necesitaMigrarHash) {
        const salt = _generarSalt();
        sheet.getRange(i+1, headers.indexOf('pin')+1).setValue(_hashPin(pin, salt));
        sheet.getRange(i+1, headers.indexOf('pinSalt')+1).setValue(salt);
      }
      sheet.getRange(i+1, headers.indexOf('token')+1).setValue(token);
      sheet.getRange(i+1, headers.indexOf('ultimoLogin')+1).setValue(ahora());
      break;
    }
  }
  return { ok: true, token, debeCambiarPin: usuario.debeCambiarPin === true, usuario: {
    badge: usuario.badge, nombre: etiquetaAgente(usuario),
    rol: usuario.rol,     grupo: usuario.grupo
  }};
}

// ── INCIDENCIAS ───────────────────────────────────────────
// ============================================================
// INTEGRACIÓN CON GESTORPARTES — traspaso automático a la hoja de servicio
// ============================================================
// Al crear una incidencia, si quien la crea tiene un turno abierto en
// GestorPartes (lo normal: se está de servicio al darla de alta), se
// genera automáticamente una Intervención en ese turno. El tipo se deja
// SIEMPRE genérico ('Informe') — nunca se intenta adivinar la
// clasificación exacta a partir de la categoría de la incidencia, porque
// las dos taxonomías no coinciden y una mala clasificación automática se
// colaría sin revisión en un documento oficial. La categoría/tipo/
// descripción originales quedan en el texto de la intervención para que
// el agente los vea y, si quiere, afine el tipo a mano desde GestorPartes.
//
// Reutiliza el MISMO token de sesión del usuario (login delegado, ambas
// apps comparten la hoja Usuarios) — no hace falta ninguna autenticación
// nueva entre los dos sistemas.
//
// Si algo falla (red, GestorPartes caído o inaccesible, o el agente no
// tiene turno abierto), NO se bloquea ni se revierte la creación de la
// incidencia — se guarda igual, sin intervención vinculada, y sigue
// disponible el flujo manual de "Convertir en intervención" que ya existe
// en GestorPartes como red de seguridad.
function _intentarVolcarEnGestorPartes(incidencia, usuario) {
  if (!CONFIG.URL_API_GESTORPARTES) return; // no configurado todavía: no hace nada, no es un error
  try {
    const urlTurno = CONFIG.URL_API_GESTORPARTES + '?action=getMiTurnoAbierto&token=' + encodeURIComponent(usuario.token);
    const rTurno = UrlFetchApp.fetch(urlTurno, { muteHttpExceptions: true });
    const turno = JSON.parse(rTurno.getContentText());
    if (!turno.ok || !turno.turno) return; // sin turno abierto ahora mismo: se queda para conversión manual

    const partes = {
      action: 'crearIntervencion',
      token: usuario.token,
      parteId: turno.turno.id,
      tipo: 'Informe',
      ubicacion: (incidencia.calle || '') + (incidencia.numero ? ', ' + incidencia.numero : ''),
      descripcion: 'Incidencia registrada en GestorIncidencias — ' +
        (incidencia.categoria || '') + (incidencia.tipoEspecifico ? ' / ' + incidencia.tipoEspecifico : '') +
        (incidencia.descripcion ? ': ' + incidencia.descripcion : ''),
      incidenciaVinculadaId: incidencia.id
    };
    // POST con cuerpo JSON (no query string): la descripción puede superar
    // con holgura el límite razonable de una URL con GET.
    UrlFetchApp.fetch(CONFIG.URL_API_GESTORPARTES, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(partes),
      muteHttpExceptions: true
    });
    // GestorPartes ya escribe de vuelta 'intervencionVinculadaId' en esta
    // misma hoja de Incidencias (ver _vincularIncidenciaConvertida en su
    // backend) — no hace falta duplicar esa escritura aquí.
  } catch (e) {
    Logger.log('No se pudo volcar automáticamente en GestorPartes (incidencia ' + incidencia.id + '): ' + e);
    // Silencioso a propósito: un fallo aquí no debe impedir ni deshacer la
    // creación de la incidencia, que ya se guardó antes de llamar a esto.
  }
}

function crearIncidencia(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  const sheet  = getSheet(CONFIG.SHEET_INCIDENCIAS);
  const id     = generarId('INC');
  const ts     = ahora();

  // Detectar reincidencia
  const todas       = sheetToObjects(sheet);
  const reincidentes = todas.filter(i =>
    i.calle && data.calle &&
    i.calle.toLowerCase() === data.calle.toLowerCase() &&
    i.categoria === data.categoria &&
    i.estado    !== 'Resuelta'
  );
  const esReincidente = reincidentes.length > 0;

  // Urgencia (respetar la del agente si viene)
  let urgencia = data.urgencia || 'Baja';
  if (esReincidente) {
    const ord = ['Baja','Media','Alta','Urgente'];
    const idx = ord.indexOf(urgencia);
    if (idx < ord.length - 1) urgencia = ord[idx + 1];
  }

  // Plazo
  const plazos = { Urgente: 1, Alta: 3, Media: 15, Baja: 30 };
  const fp     = new Date();
  fp.setDate(fp.getDate() + (plazos[urgencia] || 15));

  sheet.appendRow([
    id, ts, usuario.badge, etiquetaAgente(usuario),
    data.municipio || 'La Zubia',
    data.calle || '', data.numero || '',
    (data.lat ? parseFloat(data.lat) : ''), (data.lng ? parseFloat(data.lng) : ''),
    data.fechaDeteccion || '',
    data.categoria || '', data.catOtro || '',
    data.tipoEspecifico || '', data.tipoOtro || '',
    data.descripcion || '',
    data.dimensiones || '', data.dimensionesDetalle || '',
    data.afectaCirculacion || 'No',
    data.afectaPeatones  || 'No',
    data.riesgoPersonas  || 'No',
    data.avisoReiterado  || 'No',
    urgencia, fp.toISOString(), data.urgenciaManual || 'No',
    data.origen || 'Observación directa de la patrulla',
    data.tramitacion || 'Informe a jefatura',
    data.empresa || '',
    data.areaResponsable || '', data.areaOtro || '',
    data.senalizacionProvisional || 'No', data.senalProvDesc || '',
    data.avisoTelefonico || 'No',
    data.horaAviso || '', data.personaContactada || '',
    data.agentes || usuario.badge,
    data.expedienteGestiona || '',
    data.fotos || '',
    esReincidente ? 'Sí' : 'No',
    reincidentes.length > 0 ? reincidentes.map(r => r.id).join(',') : '',
    'Registrada',
    '', '', '', '', '', '',
    data.derivadaPorConcejal || 'No',
    data.concejaliaDerivo || '',
    data.ciudadanoAviso || '',
    data.actuacionPolicial || ''
  ]);

  addHistorialInterno(id, 'Incidencia', 'Registrada', usuario.badge, etiquetaAgente(usuario),
    (data.categoria || '') + (data.tipoEspecifico ? ' — ' + data.tipoEspecifico : ''));

  if (data.lat && data.lng) {
    registrarCoberturaInterno(data.lat, data.lng, usuario.badge, ts);
  }

  _intentarVolcarEnGestorPartes({
    id, calle: data.calle, numero: data.numero,
    categoria: data.categoria, tipoEspecifico: data.tipoEspecifico, descripcion: data.descripcion
  }, usuario);

  return { ok: true, id, esReincidente, urgenciaAsignada: urgencia,
    fechaPlazo: fp.toISOString() };
}

function getIncidencias(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  let incs = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));

  if (data.estado)          incs = incs.filter(i => i.estado === data.estado);
  if (data.urgencia)        incs = incs.filter(i => i.urgencia === data.urgencia);
  if (data.categoria)       incs = incs.filter(i => i.categoria === data.categoria);
  if (data.areaResponsable) incs = incs.filter(i => i.areaResponsable === data.areaResponsable);
  if (data.badge)           incs = incs.filter(i => String(i.agentes||i.badgeAgente||'').includes(String(data.badge)));
  if (data.desde)           incs = incs.filter(i => i.fechaRegistro >= data.desde);
  if (data.hasta)           incs = incs.filter(i => i.fechaRegistro <= data.hasta);
  if (data.calle)           incs = incs.filter(i => (i.calle||'').toLowerCase() === data.calle.toLowerCase());
  if (data.soloDerivadas === 'true') incs = incs.filter(i => i.derivadaPorConcejal === 'Sí');

  // Busqueda libre
  if (data.buscar) {
    const b = data.buscar.toLowerCase();
    incs = incs.filter(i =>
      (i.id||'').toLowerCase().includes(b) ||
      (i.calle||'').toLowerCase().includes(b) ||
      (i.descripcion||'').toLowerCase().includes(b) ||
      (i.expedienteGestiona||'').toLowerCase().includes(b)
    );
  }

  const ahora2 = new Date();
  incs = incs.map(i => Object.assign({}, i, {
    vencida: (i.fechaPlazo && new Date(i.fechaPlazo) < ahora2 && i.estado !== 'Resuelta') ? 'Sí' : 'No'
  }));

  const ordU = { Urgente:0, Alta:1, Media:2, Baja:3 };
  incs.sort((a,b) => {
    const ua = ordU[a.urgencia] ?? 4, ub = ordU[b.urgencia] ?? 4;
    if (ua !== ub) return ua - ub;
    return new Date(b.fechaRegistro) - new Date(a.fechaRegistro);
  });

  return { ok: true, incidencias: incs, total: incs.length };
}

function getIncidencia(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const incs = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));
  const inc  = incs.find(i => i.id === data.id);
  if (!inc) return { ok: false, error: 'No encontrada' };
  const historial = sheetToObjects(getSheet(CONFIG.SHEET_HISTORIAL))
    .filter(h => h.entidadId === data.id)
    .sort((a,b) => new Date(a.fecha) - new Date(b.fecha));
  return { ok: true, incidencia: inc, historial };
}

function actualizarEstado(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet   = getSheet(CONFIG.SHEET_INCIDENCIAS);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      sheet.getRange(i+1, headers.indexOf('estado')+1).setValue(data.nuevoEstado);
      if (data.fotoCierre) {
        const parts = data.observaciones ? data.observaciones.split('|fotoCierre:') : ['',''];
        const obs = parts[0];
        const foto = parts[1] || data.fotoCierre || '';
        const idxFoto = headers.indexOf('fotoCierre');
        if (idxFoto >= 0 && foto) sheet.getRange(i+1, idxFoto+1).setValue(foto);
        addHistorialInterno(data.id,'Incidencia',data.nuevoEstado,usuario.badge,etiquetaAgente(usuario),obs);
      } else {
        addHistorialInterno(data.id,'Incidencia',data.nuevoEstado,usuario.badge,etiquetaAgente(usuario),data.observaciones||'');
      }
      return { ok: true };
    }
  }
  return { ok: false, error: 'No encontrada' };
}

function cerrarIncidencia(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  if (!['admin','jefatura'].includes(usuario.rol)) return { ok: false, error: 'Sin permisos' };
  const sheet   = getSheet(CONFIG.SHEET_INCIDENCIAS);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  const campos  = {
    estado: 'Resuelta', badgeCierre: usuario.badge, nombreCierre: etiquetaAgente(usuario),
    fechaCierre: ahora(), observacionesCierre: data.observacionesCierre || '',
    fotoCierre: data.fotoCierre || '', valoracionCierre: data.valoracionCierre || ''
  };
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      Object.keys(campos).forEach(k => {
        const idx = headers.indexOf(k);
        if (idx >= 0) sheet.getRange(i+1, idx+1).setValue(campos[k]);
      });
      addHistorialInterno(data.id,'Incidencia','Resuelta — '+data.valoracionCierre,
        usuario.badge,etiquetaAgente(usuario),data.observacionesCierre||'');
      return { ok: true };
    }
  }
  return { ok: false, error: 'No encontrada' };
}

function actualizarExpediente(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet   = getSheet(CONFIG.SHEET_INCIDENCIAS);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      const idx = headers.indexOf('expedienteGestiona');
      if (idx >= 0) sheet.getRange(i+1, idx+1).setValue(data.expedienteGestiona||'');
      addHistorialInterno(data.id,'Incidencia','Expediente Gestiona actualizado',
        usuario.badge,etiquetaAgente(usuario),'Expediente: '+data.expedienteGestiona);
      return { ok: true };
    }
  }
  return { ok: false, error: 'No encontrada' };
}

function subirFoto(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  try {
    const blob    = Utilities.newBlob(Utilities.base64Decode(data.base64), data.mimeType||'image/jpeg', data.nombre||'foto.jpg');
    const carpeta = getCarpetaMes();
    const archivo = carpeta.createFile(blob);
    archivo.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return { ok: true, url: archivo.getUrl(), id: archivo.getId() };
  } catch(e) { return { ok: false, error: e.toString() }; }
}

// Sirve la foto en base64 a través del propio backend autenticado, en vez de depender
// de que el enlace público de Drive funcione (las políticas de Workspace del Ayuntamiento
// pueden bloquear "cualquiera con el enlace" a nivel de administrador, por encima de lo que
// pida el script). Acepta tanto un ID de archivo como una URL completa de Drive (se extrae el ID).
function getFoto(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  try {
    let id = data.id || '';
    const m = id.match(/\/d\/([a-zA-Z0-9_-]+)/) || id.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (m) id = m[1];
    if (!id) return { ok: false, error: 'ID de foto no válido' };
    const archivo = DriveApp.getFileById(id);
    const blob = archivo.getBlob();
    return { ok: true, base64: Utilities.base64Encode(blob.getBytes()), mimeType: blob.getContentType() };
  } catch(e) { return { ok: false, error: e.toString() }; }
}

// ── SEÑALIZACIÓN ──────────────────────────────────────────
function crearSenalVertical(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const id = generarId('SV');
  getSheet(CONFIG.SHEET_SENALES_V).appendRow([
    id, ahora(), usuario.badge, etiquetaAgente(usuario),
    data.codigo||'', data.tipo||'', data.descripcion||'',
    data.calle||'', data.numero||'', (data.lat?parseFloat(data.lat):''), (data.lng?parseFloat(data.lng):''),
    data.ladoCalzada||'', data.soporte||'',
    data.estado||'Bueno', data.fotoInicial||'',
    data.fechaInstalacion||'', data.observaciones||'', 'Activa',
    '', '', '', '', ''  // fechaComunicacion, fechaResolucion, fotoCierre, obsResolucion, incidenciaVinculada
  ]);
  addHistorialInterno(id,'SeñalVertical','Inventariada',usuario.badge,etiquetaAgente(usuario),'Estado: '+(data.estado||'Bueno'));
  return { ok: true, id };
}

function getSenalesVerticales(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  let senales = sheetToObjects(getSheet(CONFIG.SHEET_SENALES_V));
  if (data.estado) senales = senales.filter(s => s.estado === data.estado);
  if (data.calle)  senales = senales.filter(s => (s.calle||'').toLowerCase().includes(data.calle.toLowerCase()));
  if (data.buscar) {
    const b = data.buscar.toLowerCase();
    senales = senales.filter(s => (s.id||'').toLowerCase().includes(b) || (s.calle||'').toLowerCase().includes(b) ||
      (s.codigo||'').toLowerCase().includes(b) || (s.tipo||'').toLowerCase().includes(b) || (s.descripcion||'').toLowerCase().includes(b));
  }
  return { ok: true, senales, total: senales.length };
}

function actualizarSenalVertical(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet   = getSheet(CONFIG.SHEET_SENALES_V);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      if (data.estado) sheet.getRange(i+1, headers.indexOf('estado')+1).setValue(data.estado);
      if (data.fechaComunicacion) sheet.getRange(i+1, headers.indexOf('fechaComunicacion')+1).setValue(data.fechaComunicacion);
      if (data.fechaResolucion)   sheet.getRange(i+1, headers.indexOf('fechaResolucion')+1).setValue(data.fechaResolucion);
      if (data.fotoCierre)        sheet.getRange(i+1, headers.indexOf('fotoCierre')+1).setValue(data.fotoCierre);
      if (data.obsResolucion)     sheet.getRange(i+1, headers.indexOf('obsResolucion')+1).setValue(data.obsResolucion);
      addHistorialInterno(data.id,'SeñalVertical',data.estado||'Actualizada',
        usuario.badge,etiquetaAgente(usuario),data.observaciones||data.obsResolucion||'');
      const vinc = filas[i][headers.indexOf('incidenciaVinculada')];
      if (vinc && data.estado && ESTADOS_RESOLUCION_INVENTARIO.includes(data.estado)) {
        _cerrarIncidenciaPorInventario(vinc, data.id, 'señal vertical', usuario);
      }
      return { ok: true };
    }
  }
  return { ok: false, error: 'Señal no encontrada' };
}

function crearSenalHorizontal(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const id = generarId('SH');
  getSheet(CONFIG.SHEET_SENALES_H).appendRow([
    id, ahora(), usuario.badge, etiquetaAgente(usuario),
    data.tipo||'', data.descripcion||'', data.calle||'', data.numero||'',
    (data.latInicio?parseFloat(data.latInicio):''), (data.lngInicio?parseFloat(data.lngInicio):''),
    (data.latFin?parseFloat(data.latFin):''), (data.lngFin?parseFloat(data.lngFin):''),
    data.longitud||'', data.estado||'Bueno',
    data.fotoInicial||'', data.fechaUltimaRenovacion||'', data.observaciones||'', 'Activa',
    '', '', '', '', ''  // fechaComunicacion, fechaResolucion, fotoCierre, obsResolucion, incidenciaVinculada
  ]);
  addHistorialInterno(id,'SeñalHorizontal','Inventariada',usuario.badge,etiquetaAgente(usuario),'Estado: '+(data.estado||'Bueno'));
  return { ok: true, id };
}

function actualizarSenalHorizontal(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet   = getSheet(CONFIG.SHEET_SENALES_H);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      if (data.estado) sheet.getRange(i+1, headers.indexOf('estado')+1).setValue(data.estado);
      if (data.estadoRegistro) sheet.getRange(i+1, headers.indexOf('estadoRegistro')+1).setValue(data.estadoRegistro);
      if (data.fechaComunicacion) sheet.getRange(i+1, headers.indexOf('fechaComunicacion')+1).setValue(data.fechaComunicacion);
      if (data.fechaResolucion)   sheet.getRange(i+1, headers.indexOf('fechaResolucion')+1).setValue(data.fechaResolucion);
      if (data.fotoCierre)        sheet.getRange(i+1, headers.indexOf('fotoCierre')+1).setValue(data.fotoCierre);
      if (data.obsResolucion)     sheet.getRange(i+1, headers.indexOf('obsResolucion')+1).setValue(data.obsResolucion);
      addHistorialInterno(data.id,'SeñalHorizontal',data.estadoRegistro||data.estado||'Actualizada',
        usuario.badge,etiquetaAgente(usuario),data.observaciones||data.obsResolucion||'');
      const vinc = filas[i][headers.indexOf('incidenciaVinculada')];
      if (vinc && data.estado && ESTADOS_RESOLUCION_INVENTARIO.includes(data.estado)) {
        _cerrarIncidenciaPorInventario(vinc, data.id, 'señal horizontal', usuario);
      }
      return { ok: true };
    }
  }
  return { ok: false, error: 'Señal no encontrada' };
}

function getSenalesHorizontales(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  let senales = sheetToObjects(getSheet(CONFIG.SHEET_SENALES_H));
  if (data.estado) senales = senales.filter(s => s.estado === data.estado);
  if (data.calle)  senales = senales.filter(s => (s.calle||'').toLowerCase().includes(data.calle.toLowerCase()));
  if (data.buscar) {
    const b = data.buscar.toLowerCase();
    senales = senales.filter(s => (s.id||'').toLowerCase().includes(b) || (s.calle||'').toLowerCase().includes(b) ||
      (s.tipo||'').toLowerCase().includes(b) || (s.descripcion||'').toLowerCase().includes(b));
  }
  return { ok: true, senales, total: senales.length };
}

function crearInterseccion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const id = generarId('INT');
  getSheet(CONFIG.SHEET_INTERSECCIONES).appendRow([
    id, ahora(), usuario.badge, etiquetaAgente(usuario),
    data.nombre||'', data.calles||data.nombre||'',
    (data.lat?parseFloat(data.lat):''), (data.lng?parseFloat(data.lng):''),
    data.senalizacionExistente||'',
    data.deficit||'', data.nivelRiesgo||'Medio',
    data.propuestaActuacion||'', data.fotoInicial||'', data.croquisPropuesta||'',
    data.observaciones||'', 'Pendiente', ''
  ]);
  addHistorialInterno(id,'Interseccion','Registrada',usuario.badge,etiquetaAgente(usuario),'Riesgo: '+(data.nivelRiesgo||'Medio'));
  return { ok: true, id };
}

function actualizarInterseccion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet   = getSheet(CONFIG.SHEET_INTERSECCIONES);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      if (data.estado) sheet.getRange(i+1, headers.indexOf('estado')+1).setValue(data.estado);
      if (data.propuestaActuacion) sheet.getRange(i+1, headers.indexOf('propuestaActuacion')+1).setValue(data.propuestaActuacion);
      if (data.observaciones) sheet.getRange(i+1, headers.indexOf('observaciones')+1).setValue(data.observaciones);
      addHistorialInterno(data.id,'Interseccion',data.estado||'Actualizada',
        usuario.badge,etiquetaAgente(usuario),data.observaciones||'');
      const vinc = filas[i][headers.indexOf('incidenciaVinculada')];
      if (vinc && data.estado && ESTADOS_RESOLUCION_INVENTARIO.includes(data.estado)) {
        _cerrarIncidenciaPorInventario(vinc, data.id, 'intersección', usuario);
      }
      return { ok: true };
    }
  }
  return { ok: false, error: 'Intersección no encontrada' };
}

function getIntersecciones(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  let ints = sheetToObjects(getSheet(CONFIG.SHEET_INTERSECCIONES));
  if (data.estado)     ints = ints.filter(i => i.estado === data.estado);
  if (data.nivelRiesgo)ints = ints.filter(i => i.nivelRiesgo === data.nivelRiesgo);
  if (data.calle)      ints = ints.filter(i => (i.calles||i.nombre||'').toLowerCase().includes(data.calle.toLowerCase()));
  if (data.buscar) {
    const b = data.buscar.toLowerCase();
    ints = ints.filter(i => (i.id||'').toLowerCase().includes(b) || (i.nombre||'').toLowerCase().includes(b) ||
      (i.calles||'').toLowerCase().includes(b) || (i.deficit||'').toLowerCase().includes(b));
  }
  return { ok: true, intersecciones: ints, total: ints.length };
}

// ── VÍNCULO INVENTARIO DE SEÑALIZACIÓN ↔ INCIDENCIAS (item 18) ──
// Devuelve elementos del inventario en la misma calle que puedan corresponder a una incidencia de señalización,
// para que el agente confirme el vínculo en vez de duplicar el registro.
function sugerirVinculoSenal(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const calle = (data.calle||'').toLowerCase().trim();
  if (!calle) return { ok: true, sugerencias: [] };

  const match = (s) => (s.calle||'').toLowerCase().includes(calle) || calle.includes((s.calle||'').toLowerCase());

  const verticales = sheetToObjects(getSheet(CONFIG.SHEET_SENALES_V))
    .filter(s => match(s) && !s.incidenciaVinculada && s.estadoRegistro !== 'Resuelta')
    .map(s => ({ id: s.id, tipoInventario: 'vertical', etiqueta: (s.codigo||'Señal vertical')+' — '+(s.descripcion||''), calle: s.calle, estado: s.estado }));

  const horizontales = sheetToObjects(getSheet(CONFIG.SHEET_SENALES_H))
    .filter(s => match(s) && !s.incidenciaVinculada && s.estadoRegistro !== 'Resuelta')
    .map(s => ({ id: s.id, tipoInventario: 'horizontal', etiqueta: (s.tipo||'Señal horizontal')+' — '+(s.descripcion||''), calle: s.calle, estado: s.estado }));

  const intersecciones = sheetToObjects(getSheet(CONFIG.SHEET_INTERSECCIONES))
    .filter(i => (((i.calles||i.nombre||'').toLowerCase().includes(calle))||calle.includes((i.calles||i.nombre||'').toLowerCase())) && !i.incidenciaVinculada && i.estado !== 'Resuelta')
    .map(i => ({ id: i.id, tipoInventario: 'interseccion', etiqueta: 'Intersección — '+(i.nombre||i.calles||''), calle: i.calles||i.nombre, estado: i.nivelRiesgo }));

  return { ok: true, sugerencias: [].concat(verticales, horizontales, intersecciones).slice(0, 8) };
}

function _hojaPorTipoInventario(tipo) {
  if (tipo === 'vertical')      return CONFIG.SHEET_SENALES_V;
  if (tipo === 'horizontal')    return CONFIG.SHEET_SENALES_H;
  if (tipo === 'interseccion')  return CONFIG.SHEET_INTERSECCIONES;
  return null;
}

function vincularSenalIncidencia(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const hojaNombre = _hojaPorTipoInventario(data.tipoInventario);
  if (!hojaNombre) return { ok: false, error: 'Tipo de inventario no válido' };

  const sheet   = getSheet(hojaNombre);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  const colId   = headers.indexOf('id');
  const colVinc = headers.indexOf('incidenciaVinculada');
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][colId] === data.senalId) {
      sheet.getRange(i+1, colVinc+1).setValue(data.incidenciaId);
      addHistorialInterno(data.senalId, 'Inventario:'+data.tipoInventario, 'Vinculada a incidencia '+data.incidenciaId,
        usuario.badge, etiquetaAgente(usuario), '');
      addHistorialInterno(data.incidenciaId, 'Incidencia', 'Vinculada a elemento de inventario ('+data.tipoInventario+') '+data.senalId,
        usuario.badge, etiquetaAgente(usuario), '');
      return { ok: true };
    }
  }
  return { ok: false, error: 'Elemento de inventario no encontrado' };
}

// Cuando un elemento del inventario pasa a un estado de resolución y tiene una incidencia vinculada,
// cierra automáticamente la incidencia y deja constancia en el historial de ambas entidades.
const ESTADOS_RESOLUCION_INVENTARIO = ['Reparada','Reparado','Sustituida','Sustituido','Resuelta','Resuelto','Subsanada','Subsanado'];
function _cerrarIncidenciaPorInventario(incidenciaId, senalId, tipoInventario, usuario) {
  if (!incidenciaId) return;
  const sheet   = getSheet(CONFIG.SHEET_INCIDENCIAS);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  const colId   = headers.indexOf('id');
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][colId] === incidenciaId) {
      if (filas[i][headers.indexOf('estado')] === 'Resuelta') return; // ya cerrada
      sheet.getRange(i+1, headers.indexOf('estado')+1).setValue('Resuelta');
      sheet.getRange(i+1, headers.indexOf('badgeCierre')+1).setValue(usuario.badge);
      sheet.getRange(i+1, headers.indexOf('nombreCierre')+1).setValue(etiquetaAgente(usuario));
      sheet.getRange(i+1, headers.indexOf('fechaCierre')+1).setValue(ahora());
      sheet.getRange(i+1, headers.indexOf('observacionesCierre')+1).setValue(
        'Cierre automático al resolverse el elemento de inventario vinculado ('+tipoInventario+' '+senalId+').');
      addHistorialInterno(incidenciaId, 'Incidencia', 'Cerrada automáticamente por resolución del inventario vinculado',
        usuario.badge, etiquetaAgente(usuario), tipoInventario+' '+senalId);
      return;
    }
  }
}

// ── HISTORIAL ─────────────────────────────────────────────
function addHistorialInterno(entidadId, tipoEntidad, accion, badge, nombre, observaciones) {
  getSheet(CONFIG.SHEET_HISTORIAL).appendRow([
    Utilities.getUuid(), ahora(),
    entidadId, tipoEntidad, accion, badge, nombre, observaciones
  ]);
}

function addHistorial(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  addHistorialInterno(data.entidadId, data.tipoEntidad, data.accion,
    usuario.badge, etiquetaAgente(usuario), data.observaciones||'');
  return { ok: true };
}

function getHistorial(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  let h = sheetToObjects(getSheet(CONFIG.SHEET_HISTORIAL));
  if (data.entidadId)  h = h.filter(x => x.entidadId  === data.entidadId);
  if (data.tipoEntidad) h = h.filter(x => x.tipoEntidad === data.tipoEntidad);
  h.sort((a,b) => new Date(b.fecha) - new Date(a.fecha));
  return { ok: true, historial: h };
}

// ── VEHÍCULOS ─────────────────────────────────────────────
// Infracciones anotables en el Acta de Inmovilización (vehículos sin seguro / sin ITV)
const INFRACCIONES_INMOVILIZACION = [
  {
    id: 'seguro_turismo', normativa: 'SOA', articulo: '2', apartado: '1', opcion: '5L', inciso: 'SEGURO', puntos: 0,
    importeReducido: 400, importeNormal: 800,
    resumen: 'Sin seguro obligatorio — Turismos (permiso B)',
    texto: 'INCUMPLIR EL PROPIETARIO DEL VEHÍCULO RESEÑADO LA OBLIGACIÓN DE SUSCRIBIR Y MANTENER EN VIGOR UN CONTRATO DE SEGURO QUE CUBRA LA RESPONSABILIDAD CIVIL DERIVADA DE SU CIRCULACIÓN. (TURISMOS. SE EXIGE EL PERMISO DE LA CLASE B. EL AGENTE DENUNCIANTE COMPROBARÁ QUE LA ÚLTIMA ANOTACIÓN DE SEGURO VIGENTE EN FIVA ES DE FECHA ........)'
  },
  {
    id: 'seguro_motocicleta', normativa: 'SOA', articulo: '2', apartado: '1', opcion: '5K', inciso: 'SEGURO', puntos: 0,
    importeReducido: 350, importeNormal: 700,
    resumen: 'Sin seguro obligatorio — Motocicletas (permiso A2, A1 o A)',
    texto: 'INCUMPLIR EL PROPIETARIO DEL VEHÍCULO RESEÑADO LA OBLIGACIÓN DE SUSCRIBIR Y MANTENER EN VIGOR UN CONTRATO DE SEGURO QUE CUBRA LA RESPONSABILIDAD CIVIL DERIVADA DE SU CIRCULACIÓN. (MOTOCICLETAS. SE EXIGE EL PERMISO DE LAS CLASES A2, A1 O A. EL AGENTE DENUNCIANTE COMPROBARÁ QUE LA ÚLTIMA ANOTACIÓN DE SEGURO VIGENTE EN FIVA ES DE FECHA ...... )'
  },
  {
    id: 'seguro_ciclomotor', normativa: 'SOA', articulo: '2', apartado: '1', opcion: '5J', inciso: 'SEGURO', puntos: 0,
    importeReducido: 325, importeNormal: 650,
    resumen: 'Sin seguro obligatorio — Ciclomotores (permiso AM)',
    texto: 'INCUMPLIR EL PROPIETARIO DEL VEHÍCULO RESEÑADO LA OBLIGACIÓN DE SUSCRIBIR Y MANTENER EN VIGOR UN CONTRATO DE SEGURO QUE CUBRA LA RESPONSABILIDAD CIVIL DERIVADA DE SU CIRCULACIÓN. (CICLOMOTORES. SE EXIGE PERMISO DE LA CLASE AM. EL AGENTE DENUNCIANTE COMPROBARÁ QUE LA ÚLTIMA ANOTACIÓN DE SEGURO VIGENTE EN FIVA ES DE FECHA....... )'
  },
  {
    id: 'seguro_tercera_categoria', normativa: 'SOA', articulo: '2', apartado: '1', opcion: '5M', inciso: 'SEGURO', puntos: 0,
    importeReducido: 750, importeNormal: 1500,
    resumen: 'Sin seguro obligatorio — Vehículos de tercera categoría',
    texto: 'INCUMPLIR EL PROPIETARIO DEL VEHÍCULO RESEÑADO LA OBLIGACIÓN DE SUSCRIBIR Y MANTENER EN VIGOR UN CONTRATO DE SEGURO QUE CUBRA LA RESPONSABILIDAD CIVIL DERIVADA DE SU CIRCULACIÓN. (VEHÍCULOS TERCERA CATEGORÍA. SE EXIGE EL PERMISO DE LAS CLASES C1, C1+E, C, C+E, D1, D1+E, D O D+E. EL AGENTE DENUNCIANTE COMPROBARÁ QUE LA ÚLTIMA ANOTACIÓN DE SEGURO VIGENTE EN FIVA ES DE FECHA......)'
  },
  {
    id: 'itv', normativa: 'VEH', articulo: '10', apartado: '1', opcion: '5A', inciso: 'I.T.V.', puntos: 0,
    importeReducido: 100, importeNormal: 200,
    resumen: 'Carecer de ITV en vigor',
    texto: 'NO HABERSE SOMETIDO EL VEHÍCULO RESEÑADO A LA INSPECCIÓN TÉCNICA PERIÓDICA ESTABLECIDA REGLAMENTARIAMENTE. (FRECUENCIA DE INSPECCIÓN: ARTÍCULO 6.1 RD 920/2017 ITV; EN DIRECTA RELACIÓN CON LO PRECEPTUADO EN LOS ARTS. 4 Y 6 DE DICHA NORMA.)'
  },
  {
    id: 'abandono', normativa: '', articulo: '', apartado: '', opcion: '', inciso: '', puntos: '', importeReducido: '', importeNormal: '',
    resumen: 'Vehículo abandonado en vía pública con signos de deterioro',
    texto: ''
  },
  {
    id: 'otro', normativa: '', articulo: '', apartado: '', opcion: '', inciso: '', puntos: '', importeReducido: '', importeNormal: '',
    resumen: 'Otro (especificar en observaciones)',
    texto: ''
  }
];

function getInfraccionesInmovilizacion() {
  return { ok: true, infracciones: INFRACCIONES_INMOVILIZACION };
}

function crearVehiculo(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet(CONFIG.SHEET_VEHICULOS);
  if (!sheet) return { ok: false, error: 'Hoja Vehiculos no existe. Ejecuta inicializarSistema.' };
  const id = generarId('VEH');
  const fase = data.fase || 'Acta de vehículo abandonado';
  let estadoInicial = 'Activo';
  if (fase === 'Consulta negativa') estadoInicial = 'No procede';
  else if (fase === 'Vehículo sin seguro — retirada grúa') {
    estadoInicial = data.pendienteRetirada === 'Sí' ? 'Pendiente de retirada (grúa)' : 'Retirado confirmado';
  }
  sheet.appendRow([
    id, ahora(), usuario.badge, etiquetaAgente(usuario),
    fase,
    data.matricula||'', data.bastidor||'',
    data.marca||'', data.modelo||'', data.color||'',
    data.titular||'', data.dni||'',
    data.domicilio||'', data.municipioTitular||'', data.telefono||'',
    data.calle||'', data.numero||'', (data.lat?parseFloat(data.lat):''), (data.lng?parseFloat(data.lng):''),
    data.indicios||'', data.observaciones||'',
    data.agentes||usuario.badge,
    data.fotos||'', data.municipio||'La Zubia', estadoInicial,
    '', '', (estadoInicial==='Retirado confirmado'?ahora():''),
    data.infracciones||'', data.depositoId||'', data.nExpedienteInmovilizacion||''
  ]);
  addHistorialInterno(id,'Vehiculo',fase,
    usuario.badge,etiquetaAgente(usuario),'Matrícula: '+(data.matricula||'—')+(data.depositoId?' · Depósito asignado desde el registro':''));
  return { ok: true, id, estado: estadoInicial };
}

function getVehiculos(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet(CONFIG.SHEET_VEHICULOS);
  if (!sheet) return { ok: true, vehiculos: [] };
  let vehs = sheetToObjects(sheet);
  if (data.matricula) vehs = vehs.filter(v => (v.matricula||'').toUpperCase() === (data.matricula||'').toUpperCase());
  if (data.estado)    vehs = vehs.filter(v => v.estado === data.estado);
  if (data.calle)     vehs = vehs.filter(v => (v.calle||'').toLowerCase().includes(data.calle.toLowerCase()));
  if (data.desde)     vehs = vehs.filter(v => v.fechaRegistro >= data.desde);
  if (data.hasta)     vehs = vehs.filter(v => v.fechaRegistro <= data.hasta);
  if (data.buscar) {
    const b = data.buscar.toLowerCase();
    vehs = vehs.filter(v => (v.matricula||'').toLowerCase().includes(b) || (v.titular||'').toLowerCase().includes(b) ||
      (v.calle||'').toLowerCase().includes(b) || (v.marca||'').toLowerCase().includes(b) || (v.modelo||'').toLowerCase().includes(b));
  }
  const UMBRAL_DIAS_ALERTA = 3;
  const depositos = sheetToObjects(getSheet(CONFIG.SHEET_DEPOSITOS));
  vehs = vehs.map(v => {
    const dias = v.fechaRegistro ? Math.floor((new Date() - new Date(v.fechaRegistro)) / 86400000) : null;
    const dep = v.depositoId ? depositos.find(d => d.id === v.depositoId) : null;
    return Object.assign({}, v, {
      diasTranscurridos: dias,
      alertaAntiguedad: v.estado === 'Pendiente de retirada (grúa)' && dias !== null && dias >= UMBRAL_DIAS_ALERTA,
      depositoNombre: dep ? dep.nombre : ''
    });
  });
  return { ok: true, vehiculos: vehs, total: vehs.length };
}

// ── DEPÓSITOS DE VEHÍCULOS (mini-registro: nombre + dirección) ──
function crearDeposito(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  if (!data.nombre) return { ok: false, error: 'El nombre del depósito es obligatorio' };
  const sheet = getSheet(CONFIG.SHEET_DEPOSITOS);
  if (!sheet) return { ok: false, error: 'Hoja Depositos no existe. Ejecuta inicializarSistema.' };
  const id = generarId('DEP');
  sheet.appendRow([id, data.nombre, data.direccion||'', ahora(), usuario.badge]);
  return { ok: true, id };
}

function getDepositos(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet(CONFIG.SHEET_DEPOSITOS);
  if (!sheet) return { ok: true, depositos: [] };
  return { ok: true, depositos: sheetToObjects(sheet) };
}

// Asigna o mueve el vehículo a un depósito (puede cambiar más de una vez con el tiempo)
function asignarDepositoVehiculo(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet   = getSheet(CONFIG.SHEET_VEHICULOS);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      sheet.getRange(i+1, headers.indexOf('depositoId')+1).setValue(data.depositoId||'');
      if (data.confirmarRetirada === 'true' || data.confirmarRetirada === true) {
        sheet.getRange(i+1, headers.indexOf('estado')+1).setValue('Retirado confirmado');
        sheet.getRange(i+1, headers.indexOf('fechaRetirada')+1).setValue(ahora());
      }
      const depositos = sheetToObjects(getSheet(CONFIG.SHEET_DEPOSITOS));
      const dep = depositos.find(d => d.id === data.depositoId);
      addHistorialInterno(data.id, 'Vehiculo', 'Asignado a depósito: ' + (dep ? dep.nombre : (data.depositoId||'—')),
        usuario.badge, etiquetaAgente(usuario), '');
      return { ok: true };
    }
  }
  return { ok: false, error: 'Vehículo no encontrado' };
}

// Comprobación in situ: confirmar retirada, o dejar constancia de que sigue el vehículo
function comprobarVehiculo(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet(CONFIG.SHEET_VEHICULOS);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idCol = headers.indexOf('id');
  const rowIdx = values.findIndex((r, i) => i > 0 && r[idCol] === data.id);
  if (rowIdx === -1) return { ok: false, error: 'No encontrado' };
  const col = (name) => headers.indexOf(name) + 1;
  const row = rowIdx + 1;

  if (data.resultado === 'retirado') {
    sheet.getRange(row, col('estado')).setValue('Retirado confirmado');
    sheet.getRange(row, col('fechaRetirada')).setValue(ahora());
  }
  sheet.getRange(row, col('fechaUltimaComprobacion')).setValue(ahora());
  sheet.getRange(row, col('badgeUltimaComprobacion')).setValue(usuario.badge);
  if (data.observaciones) {
    const actuales = sheet.getRange(row, col('observaciones')).getValue();
    sheet.getRange(row, col('observaciones')).setValue((actuales ? actuales + ' | ' : '') + data.observaciones);
  }
  addHistorialInterno(data.id,'Vehiculo',
    data.resultado === 'retirado' ? 'Retirada confirmada' : 'Comprobado — sigue en el lugar',
    usuario.badge, etiquetaAgente(usuario), data.observaciones || '');
  return { ok: true };
}

// ── OCUPACIONES DE VÍA PÚBLICA ────────────────────────────
// Ordenanza Municipal de Ocupación y Utilización de Espacios Públicos (BOP nº154, 10-08-2012)
function getTablaSancionesOcupacion() {
  return { ok: true, tiposOcupacion: TIPOS_OCUPACION, tablaSanciones: TABLA_SANCIONES_OCUPACION };
}

function crearOcupacion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet(CONFIG.SHEET_OCUPACIONES);
  if (!sheet) return { ok: false, error: 'Hoja Ocupaciones no existe. Ejecuta inicializarSistema.' };
  const id = generarId('OCU');
  const ts = ahora();

  // Si se marca directamente como infracción al crear, autocompletamos desde la tabla legal
  const refLegal = data.subtipo ? TABLA_SANCIONES_OCUPACION[data.subtipo] : null;
  const esInfraccion = data.esInfraccion === 'Sí' || data.disponeAutorizacion === 'No' || data.comprobacionInSitu === 'No';
  const articulo = data.articuloInfringido || (refLegal ? refLegal.articulo : '');
  const tipificacion = data.tipificacion || (refLegal ? refLegal.tipificacion : '');
  const cMin = data.cuantiaMin || (refLegal ? refLegal.cuantiaMin : '');
  const cMax = data.cuantiaMax || (refLegal ? refLegal.cuantiaMax : '');

  let estado = data.estado || 'Vigente';
  if (esInfraccion && estado === 'Vigente') estado = data.disponeAutorizacion === 'No' ? 'Sin autorización' : 'Infracción detectada';

  sheet.appendRow([
    id, ts, usuario.badge, etiquetaAgente(usuario),
    data.tipoOcupacion || '', data.subtipo || '',
    data.titular || '', data.empresa || '',
    data.calle || '', data.numero || '',
    (data.lat ? parseFloat(data.lat) : ''), (data.lng ? parseFloat(data.lng) : ''),
    data.municipio || 'La Zubia',
    data.origenRegistro || 'Registro Gestiona',
    data.nExpedienteGestiona || '',
    data.fechaInicioVigencia || '', data.fechaFinVigencia || '',
    data.disponeAutorizacion || 'No consta',
    data.comprobacionInSitu || 'Sin comprobar todavía',
    data.metrosOcupados || '',
    data.veladoresSolicitados || '', data.veladoresAutorizados || '',
    data.tarima || 'No', data.tarimaObs || '',
    estado,
    esInfraccion ? 'Sí' : 'No', articulo, tipificacion, cMin, cMax,
    data.expedienteSancionador || '',
    '', '',
    data.observaciones || '', data.fotos || ''
  ]);

  addHistorialInterno(id, 'Ocupacion', 'Registrada', usuario.badge, etiquetaAgente(usuario),
    (data.tipoOcupacion || '') + (data.subtipo ? ' — ' + data.subtipo : ''));

  return { ok: true, id, estado };
}

// Cualquier agente de patrulla, en cualquier momento posterior al registro, puede confirmar
// si una ocupación autorizada se ajusta o no a lo concedido tras comprobarlo sobre el terreno.
function actualizarComprobacionInSitu(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  if (!['Sí','No'].includes(data.resultado)) return { ok: false, error: 'Resultado no válido' };

  const sheet   = getSheet(CONFIG.SHEET_OCUPACIONES);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      sheet.getRange(i+1, headers.indexOf('comprobacionInSitu')+1).setValue(data.resultado);
      sheet.getRange(i+1, headers.indexOf('fechaUltimaComprobacion')+1).setValue(ahora());
      sheet.getRange(i+1, headers.indexOf('badgeUltimaComprobacion')+1).setValue(usuario.badge);

      if (data.resultado === 'No') {
        // No se ajusta a lo autorizado: pasa a infracción, con la tipificación por defecto del subtipo
        // (o la que indique explícitamente quien comprueba, si la aporta).
        const subtipo = filas[i][headers.indexOf('subtipo')];
        const refLegal = TABLA_SANCIONES_OCUPACION[subtipo];
        const articulo = data.articuloInfringido || (refLegal ? refLegal.articulo : 'Art. 75 de la Ordenanza (incumplimiento de condiciones de autorización)');
        const tipificacion = data.tipificacion || (refLegal ? refLegal.tipificacion : 'A valorar');
        sheet.getRange(i+1, headers.indexOf('esInfraccion')+1).setValue('Sí');
        sheet.getRange(i+1, headers.indexOf('articuloInfringido')+1).setValue(articulo);
        sheet.getRange(i+1, headers.indexOf('tipificacion')+1).setValue(tipificacion);
        if (data.cuantiaMin) sheet.getRange(i+1, headers.indexOf('cuantiaMin')+1).setValue(data.cuantiaMin);
        if (data.cuantiaMax) sheet.getRange(i+1, headers.indexOf('cuantiaMax')+1).setValue(data.cuantiaMax);
        if (filas[i][headers.indexOf('estado')] === 'Vigente')
          sheet.getRange(i+1, headers.indexOf('estado')+1).setValue('Infracción detectada');
      }

      addHistorialInterno(data.id, 'Ocupacion',
        'Comprobación in situ: ' + (data.resultado === 'Sí' ? 'se ajusta a lo autorizado' : 'NO se ajusta a lo autorizado'),
        usuario.badge, etiquetaAgente(usuario), data.observaciones||'');
      return { ok: true };
    }
  }
  return { ok: false, error: 'Ocupación no encontrada' };
}

function getOcupaciones(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet(CONFIG.SHEET_OCUPACIONES);
  if (!sheet) return { ok: true, ocupaciones: [] };
  let ocs = sheetToObjects(sheet);

  if (data.tipoOcupacion) ocs = ocs.filter(o => o.tipoOcupacion === data.tipoOcupacion);
  if (data.estado)        ocs = ocs.filter(o => o.estado === data.estado);
  if (data.esInfraccion === 'true') ocs = ocs.filter(o => o.esInfraccion === 'Sí');
  if (data.pendienteComprobar === 'true') ocs = ocs.filter(o => o.comprobacionInSitu === 'Sin comprobar todavía');
  if (data.calle)         ocs = ocs.filter(o => (o.calle||'').toLowerCase().includes(data.calle.toLowerCase()));
  if (data.buscar) {
    const b = data.buscar.toLowerCase();
    ocs = ocs.filter(o => (o.id||'').toLowerCase().includes(b) || (o.titular||'').toLowerCase().includes(b) ||
      (o.empresa||'').toLowerCase().includes(b) || (o.calle||'').toLowerCase().includes(b) ||
      (o.nExpedienteGestiona||'').toLowerCase().includes(b));
  }

  // Cálculo dinámico de caducidad, igual que 'vencida' en Incidencias — no persiste en la hoja
  const ahora2 = new Date();
  ocs = ocs.map(o => {
    const caducada = o.fechaFinVigencia && new Date(o.fechaFinVigencia) < ahora2 &&
      ['Vigente'].includes(o.estado);
    return Object.assign({}, o, { estadoCalculado: caducada ? 'Caducada' : o.estado });
  });

  ocs.sort((a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro));
  return { ok: true, ocupaciones: ocs, total: ocs.length };
}

function getOcupacion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const ocs = sheetToObjects(getSheet(CONFIG.SHEET_OCUPACIONES));
  const oc = ocs.find(o => o.id === data.id);
  if (!oc) return { ok: false, error: 'No encontrada' };
  const historial = sheetToObjects(getSheet(CONFIG.SHEET_HISTORIAL))
    .filter(h => h.entidadId === data.id)
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  return { ok: true, ocupacion: oc, historial };
}

// Comprobación en calle: confirmar retirada, o marcar como infracción si sigue puesta
function comprobarOcupacion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet(CONFIG.SHEET_OCUPACIONES);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idCol = headers.indexOf('id');
  const rowIdx = values.findIndex((r, i) => i > 0 && r[idCol] === data.id);
  if (rowIdx === -1) return { ok: false, error: 'No encontrada' };

  const col = (name) => headers.indexOf(name) + 1;
  const row = rowIdx + 1;

  if (data.resultado === 'retirada') {
    sheet.getRange(row, col('estado')).setValue('Retirada confirmada');
  } else if (data.resultado === 'infraccion') {
    const refLegal = data.subtipo ? TABLA_SANCIONES_OCUPACION[data.subtipo] : null;
    sheet.getRange(row, col('estado')).setValue('Infracción detectada');
    sheet.getRange(row, col('esInfraccion')).setValue('Sí');
    sheet.getRange(row, col('articuloInfringido')).setValue(data.articuloInfringido || (refLegal ? refLegal.articulo : ''));
    sheet.getRange(row, col('tipificacion')).setValue(data.tipificacion || (refLegal ? refLegal.tipificacion : ''));
    sheet.getRange(row, col('cuantiaMin')).setValue(data.cuantiaMin || (refLegal ? refLegal.cuantiaMin : ''));
    sheet.getRange(row, col('cuantiaMax')).setValue(data.cuantiaMax || (refLegal ? refLegal.cuantiaMax : ''));
  }
  sheet.getRange(row, col('fechaUltimaComprobacion')).setValue(ahora());
  sheet.getRange(row, col('badgeUltimaComprobacion')).setValue(usuario.badge);
  if (data.observaciones) {
    const actuales = sheet.getRange(row, col('observaciones')).getValue();
    sheet.getRange(row, col('observaciones')).setValue((actuales ? actuales + ' | ' : '') + data.observaciones);
  }

  addHistorialInterno(data.id, 'Ocupacion',
    data.resultado === 'retirada' ? 'Retirada confirmada' : 'Infracción detectada',
    usuario.badge, etiquetaAgente(usuario), data.observaciones || '');

  return { ok: true };
}

function actualizarEstadoOcupacion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet(CONFIG.SHEET_OCUPACIONES);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idCol = headers.indexOf('id');
  const rowIdx = values.findIndex((r, i) => i > 0 && r[idCol] === data.id);
  if (rowIdx === -1) return { ok: false, error: 'No encontrada' };
  const col = (name) => headers.indexOf(name) + 1;
  sheet.getRange(rowIdx + 1, col('estado')).setValue(data.estado || 'Vigente');
  if (data.expedienteSancionador) sheet.getRange(rowIdx + 1, col('expedienteSancionador')).setValue(data.expedienteSancionador);
  addHistorialInterno(data.id, 'Ocupacion', 'Estado actualizado a ' + (data.estado || ''), usuario.badge, etiquetaAgente(usuario), '');
  return { ok: true };
}

// ── COBERTURA ─────────────────────────────────────────────
function registrarCoberturaInterno(lat, lng, badge, fecha) {
  getSheet(CONFIG.SHEET_COBERTURA).appendRow([Utilities.getUuid(), fecha, badge, parseFloat(lat), parseFloat(lng)]);
}

function registrarCobertura(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  registrarCoberturaInterno(data.lat, data.lng, usuario.badge, ahora());
  return { ok: true };
}

function getCobertura(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  let puntos = sheetToObjects(getSheet(CONFIG.SHEET_COBERTURA));
  if (data.desde) puntos = puntos.filter(p => p.fecha >= data.desde);
  return { ok: true, puntos };
}

// ── ADMIN: USUARIOS ───────────────────────────────────────
function getUsuarios(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || !['admin','jefatura'].includes(usuario.rol)) return { ok: false, error: 'Sin permisos' };
  return { ok: true, usuarios: sheetToObjects(getSheet(CONFIG.SHEET_USUARIOS))
    .map(u => ({ badge: u.badge, etiqueta: etiquetaAgente(u), empleo: u.empleo||'Agente', rol: u.rol, grupo: u.grupo, activo: u.activo }))
  };
}

function actualizarUsuario(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || usuario.rol !== 'admin') return { ok: false, error: 'Sin permisos' };
  const sheet   = getSheet(CONFIG.SHEET_USUARIOS);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (String(filas[i][headers.indexOf('badge')]) === String(data.badge)) {
      if (data.empleo !== undefined)          sheet.getRange(i+1, headers.indexOf('empleo')+1).setValue(data.empleo);
      if (data.etiquetaEspecial !== undefined)sheet.getRange(i+1, headers.indexOf('etiquetaEspecial')+1).setValue(data.etiquetaEspecial);
      if (data.grupo !== undefined)           sheet.getRange(i+1, headers.indexOf('grupo')+1).setValue(data.grupo);
      if (data.rol !== undefined)             sheet.getRange(i+1, headers.indexOf('rol')+1).setValue(data.rol);
      if (data.activo !== undefined)          sheet.getRange(i+1, headers.indexOf('activo')+1).setValue(data.activo);
      return { ok: true };
    }
  }
  return { ok: false, error: 'Usuario no encontrado' };
}

function crearUsuario(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || usuario.rol !== 'admin') return { ok: false, error: 'Sin permisos' };
  const salt = _generarSalt();
  getSheet(CONFIG.SHEET_USUARIOS).appendRow([
    data.badge, _hashPin(data.pin, salt), salt, data.nombre, data.rol||'agente',
    data.grupo||'', true, '', '', false, '', '',
    data.empleo||'Agente', data.etiquetaEspecial||''
  ]);
  return { ok: true };
}

// ── RECUPERACIÓN DE PIN POR CÓDIGO DE UN SOLO USO (item 22) ──
// Flujo: un admin/jefatura genera un código para el badge que ha olvidado el PIN
// (se lo comunica verbalmente o por el canal que use la Jefatura); el agente lo canjea
// para entrar, y la app le obliga a fijar un PIN nuevo antes de poder usar nada más.
function generarCodigoRecuperacionPin(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || !['admin','jefatura'].includes(usuario.rol)) return { ok: false, error: 'Sin permisos' };
  const sheet   = getSheet(CONFIG.SHEET_USUARIOS);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (String(filas[i][headers.indexOf('badge')]) === String(data.badgeObjetivo)) {
      const codigo = _generarCodigoNumerico(6);
      const expira = new Date(Date.now() + 24*60*60*1000).toISOString(); // válido 24h
      sheet.getRange(i+1, headers.indexOf('codigoRecuperacion')+1).setValue(codigo);
      sheet.getRange(i+1, headers.indexOf('codigoRecuperacionExpira')+1).setValue(expira);
      addHistorialInterno(String(data.badgeObjetivo), 'Usuario', 'Código de recuperación de PIN generado',
        usuario.badge, etiquetaAgente(usuario), 'Válido hasta ' + expira);
      return { ok: true, codigo, expira };
    }
  }
  return { ok: false, error: 'Badge no encontrado' };
}

function loginConCodigoRecuperacion(data) {
  const { badge, codigo } = data;
  if (!badge || !codigo) return { ok: false, error: 'Datos incompletos' };
  const sheet   = getSheet(CONFIG.SHEET_USUARIOS);
  const usuarios = sheetToObjects(sheet);
  const usuario = usuarios.find(u => String(u.badge) === String(badge) && u.activo === true);
  if (!usuario || !usuario.codigoRecuperacion) return { ok: false, error: 'Código no válido' };
  if (String(usuario.codigoRecuperacion) !== String(codigo)) return { ok: false, error: 'Código no válido' };
  if (usuario.codigoRecuperacionExpira && new Date(usuario.codigoRecuperacionExpira) < new Date()) {
    return { ok: false, error: 'Código caducado — pide uno nuevo a Jefatura' };
  }

  const token = Utilities.getUuid();
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (String(filas[i][headers.indexOf('badge')]) === String(badge)) {
      sheet.getRange(i+1, headers.indexOf('token')+1).setValue(token);
      sheet.getRange(i+1, headers.indexOf('ultimoLogin')+1).setValue(ahora());
      sheet.getRange(i+1, headers.indexOf('debeCambiarPin')+1).setValue(true);
      sheet.getRange(i+1, headers.indexOf('codigoRecuperacion')+1).setValue('');
      sheet.getRange(i+1, headers.indexOf('codigoRecuperacionExpira')+1).setValue('');
      break;
    }
  }
  addHistorialInterno(String(badge), 'Usuario', 'Acceso mediante código de recuperación de PIN', badge, etiquetaAgente(usuario), '');
  return { ok: true, token, debeCambiarPin: true, usuario: {
    badge: usuario.badge, nombre: etiquetaAgente(usuario), rol: usuario.rol, grupo: usuario.grupo
  }};
}

function cambiarPin(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  if (!data.pinNuevo || String(data.pinNuevo).length < 4) return { ok: false, error: 'El PIN nuevo debe tener al menos 4 dígitos' };

  // Si no viene de un flujo de recuperación forzado, exigimos el PIN actual como comprobación.
  if (!usuario.debeCambiarPin) {
    if (!data.pinActual) return { ok: false, error: 'Introduce tu PIN actual' };
    const okActual = usuario.pinSalt
      ? _hashPin(data.pinActual, usuario.pinSalt) === usuario.pin
      : String(usuario.pin) === String(data.pinActual);
    if (!okActual) return { ok: false, error: 'PIN actual incorrecto' };
  }

  const sheet   = getSheet(CONFIG.SHEET_USUARIOS);
  const filas   = sheet.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (String(filas[i][headers.indexOf('badge')]) === String(usuario.badge)) {
      const salt = _generarSalt();
      sheet.getRange(i+1, headers.indexOf('pin')+1).setValue(_hashPin(data.pinNuevo, salt));
      sheet.getRange(i+1, headers.indexOf('pinSalt')+1).setValue(salt);
      sheet.getRange(i+1, headers.indexOf('debeCambiarPin')+1).setValue(false);
      addHistorialInterno(usuario.badge, 'Usuario', 'PIN actualizado', usuario.badge, etiquetaAgente(usuario), '');
      return { ok: true };
    }
  }
  return { ok: false, error: 'Usuario no encontrado' };
}

// ── ADMIN: ÁREAS ──────────────────────────────────────────
function getAreas(data) {
  const sheet = getSheet(CONFIG.SHEET_AREAS);
  if (!sheet) return { ok: true, areas: [] };
  return { ok: true, areas: sheetToObjects(sheet).filter(a => a.activa === true) };
}

function crearArea(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || !['admin','jefatura'].includes(usuario.rol)) return { ok: false, error: 'Sin permisos' };
  const id = generarId('AREA');
  getSheet(CONFIG.SHEET_AREAS).appendRow([id, data.nombre, data.concejaliaResponsable||'', data.emailContacto||'', true]);
  return { ok: true, id };
}

// ── ADMIN: CONTACTOS ──────────────────────────────────────
function getContactos(data) {
  const sheet = getSheet(CONFIG.SHEET_CONTACTOS);
  if (!sheet) return { ok: true, contactos: [] };
  return { ok: true, contactos: sheetToObjects(sheet).filter(c => c.activo === true) };
}

function crearContacto(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || !['admin','jefatura'].includes(usuario.rol)) return { ok: false, error: 'Sin permisos' };
  const id = generarId('CONT');
  getSheet(CONFIG.SHEET_CONTACTOS).appendRow([id, data.nombre||'', data.cargo||'', data.telefono||'', true]);
  return { ok: true, id };
}

// ── ESTADÍSTICAS ──────────────────────────────────────────
function getEstadisticas(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  let incs = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));
  if (data.desde) incs = incs.filter(i => i.fechaRegistro >= data.desde);
  if (data.hasta) incs = incs.filter(i => i.fechaRegistro <= data.hasta);
  if (data.areaResponsable) incs = incs.filter(i => i.areaResponsable === data.areaResponsable);

  const ahora2 = new Date();
  const total       = incs.length;
  const resueltas   = incs.filter(i => i.estado === 'Resuelta').length;
  const pendientes  = incs.filter(i => i.estado !== 'Resuelta').length;
  const vencidas    = incs.filter(i => i.fechaPlazo && new Date(i.fechaPlazo) < ahora2 && i.estado !== 'Resuelta').length;
  const urgentes    = incs.filter(i => i.urgencia === 'Urgente' && i.estado !== 'Resuelta').length;
  const reincidentes = incs.filter(i => i.esReincidente === 'Sí').length;

  const porCategoria = {};
  incs.forEach(i => { porCategoria[i.categoria] = (porCategoria[i.categoria]||0) + 1; });

  const porArea = {};
  incs.forEach(i => { if (i.areaResponsable) porArea[i.areaResponsable] = (porArea[i.areaResponsable]||0) + 1; });

  // Por agente
  const porAgente = {};
  incs.forEach(i => {
    const badges = String(i.agentes||i.badgeAgente||'').split(';');
    badges.forEach(b => {
      if (b.trim()) porAgente[b.trim()] = (porAgente[b.trim()]||0) + 1;
    });
  });

  const res2 = incs.filter(i => i.estado === 'Resuelta' && i.fechaCierre && i.fechaRegistro);
  const tiempoMedio = res2.length > 0
    ? res2.reduce((acc,i) => acc + (new Date(i.fechaCierre) - new Date(i.fechaRegistro)) / 86400000, 0) / res2.length
    : 0;

  // Por mes
  const porMes = {};
  incs.forEach(i => {
    if (!i.fechaRegistro) return;
    const m = new Date(i.fechaRegistro).toLocaleDateString('es-ES', { year:'numeric', month:'2-digit' });
    porMes[m] = (porMes[m]||0) + 1;
  });

  // Por mes Y área (tendencia de cada área a lo largo del tiempo, no solo el global)
  // Estructura: { "Área X": { "2026-06": 3, "2026-07": 5 }, "Área Y": {...} }
  const porMesArea = {};
  incs.forEach(i => {
    if (!i.fechaRegistro || !i.areaResponsable) return;
    const m = new Date(i.fechaRegistro).toLocaleDateString('es-ES', { year:'numeric', month:'2-digit' });
    if (!porMesArea[i.areaResponsable]) porMesArea[i.areaResponsable] = {};
    porMesArea[i.areaResponsable][m] = (porMesArea[i.areaResponsable][m]||0) + 1;
  });

  // Por calle
  const porCalle = {};
  incs.forEach(i => {
    if (!i.calle) return;
    const k = (i.calle||'').trim();
    porCalle[k] = (porCalle[k]||0) + 1;
  });

  // Tiempo medio por área
  const tiempoPorArea = {};
  const countPorArea = {};
  incs.filter(i => i.estado === 'Resuelta' && i.fechaCierre && i.areaResponsable).forEach(i => {
    const dias = (new Date(i.fechaCierre) - new Date(i.fechaRegistro)) / 86400000;
    tiempoPorArea[i.areaResponsable] = (tiempoPorArea[i.areaResponsable]||0) + dias;
    countPorArea[i.areaResponsable] = (countPorArea[i.areaResponsable]||0) + 1;
  });
  Object.keys(tiempoPorArea).forEach(k => {
    tiempoPorArea[k] = Math.round(tiempoPorArea[k] / countPorArea[k] * 10) / 10;
  });

  return { ok: true, estadisticas: {
    total, resueltas, pendientes, vencidas, urgentes, reincidentes,
    porCategoria, porArea, porAgente, porMes, porMesArea, porCalle, tiempoPorArea,
    tiempoMedioResolucionDias: Math.round(tiempoMedio * 10) / 10
  }};
}

function getPuntosNegros(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const incs  = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));
  const hace90 = new Date(Date.now() - 90 * 86400000);
  const grupos = {};
  incs.filter(i => new Date(i.fechaRegistro) > hace90).forEach(i => {
    const k = (i.calle||'').toLowerCase() + '||' + i.categoria;
    if (!grupos[k]) grupos[k] = { calle: i.calle, categoria: i.categoria, incidencias: [] };
    grupos[k].incidencias.push(i);
  });
  return { ok: true, puntosNegros: Object.values(grupos)
    .filter(g => g.incidencias.length >= 3)
    .sort((a,b) => b.incidencias.length - a.incidencias.length)
  };
}

function getIndicePorArea(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const incs  = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));
  const areas = {};
  incs.forEach(i => {
    if (!i.areaResponsable) return;
    if (!areas[i.areaResponsable]) areas[i.areaResponsable] = { recibidas:0, resueltasEnPlazo:0, vencidas:0 };
    areas[i.areaResponsable].recibidas++;
    if (i.estado === 'Resuelta' && i.fechaCierre && i.fechaPlazo) {
      if (new Date(i.fechaCierre) <= new Date(i.fechaPlazo)) areas[i.areaResponsable].resueltasEnPlazo++;
    }
    if (i.fechaPlazo && new Date(i.fechaPlazo) < new Date() && i.estado !== 'Resuelta') {
      areas[i.areaResponsable].vencidas++;
    }
  });
  return { ok: true, indice: Object.entries(areas).map(([area, s]) => ({
    area, recibidas: s.recibidas, resueltasEnPlazo: s.resueltasEnPlazo, vencidas: s.vencidas,
    indiceRespuesta: s.recibidas > 0 ? Math.round((s.resueltasEnPlazo / s.recibidas) * 100) : 0
  })).sort((a,b) => a.indiceRespuesta - b.indiceRespuesta)};
}

// ── HELPERS PARA GOOGLE DOCS ──────────────────────────────
// Inserta el escudo de la Policía Local en una celda de tabla, manteniendo proporción
function insertarEscudoEnCelda(celda, anchoPt) {
  try {
    const blob = Utilities.newBlob(Utilities.base64Decode(ESCUDO_PL_B64), 'image/jpeg', 'escudo_pl.jpg');
    const img = celda.appendImage(blob);
    const ratio = img.getHeight() / img.getWidth();
    img.setWidth(anchoPt);
    img.setHeight(Math.round(anchoPt * ratio));
    return img;
  } catch (e) {
    return null; // Si falla la imagen, no bloqueamos la generación del documento
  }
}

function crearCabecera(body, nRegistro) {
  const tab = body.appendTable([['', '', '']]);
  tab.setBorderWidth(0);

  const celEsc = tab.getCell(0, 0);
  celEsc.setWidth(70);
  celEsc.clear();
  insertarEscudoEnCelda(celEsc, 55);

  const celTxt = tab.getCell(0, 1);
  celTxt.setWidth(260);
  celTxt.clear();
  const p1 = celTxt.appendParagraph('POLICÍA LOCAL');
  p1.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  const p2 = celTxt.appendParagraph('AYUNTAMIENTO LA ZUBIA');
  p2.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  const p3 = celTxt.appendParagraph('GRANADA');
  p3.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  const celReg = tab.getCell(0, 2);
  celReg.clear();
  if (nRegistro !== undefined) {
    const pReg = celReg.appendParagraph('Nº DE REGISTRO: ' + (nRegistro || '[sin asignar]'));
    pReg.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
    pReg.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:10,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  }

  body.appendHorizontalRule();
}

function crearPie(body) {
  body.appendParagraph('');
  body.appendHorizontalRule();
  const pie = body.appendParagraph('JEFATURA DE POLICÍA LOCAL LA ZUBIA. PLAZA DEL AYUNTAMIENTO S/N . policialocal@ayuntamientolazubia.com . Tlf. 958/591624  616/454218');
  pie.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  pie.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:9,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
}

function parJustif(body, texto, negrita) {
  const p = body.appendParagraph(texto);
  p.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  p.setIndentFirstLine(28);
  p.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.BOLD]:false,[DocumentApp.Attribute.ITALIC]:false,[DocumentApp.Attribute.UNDERLINE]:false});
  if (negrita) p.editAsText().setBold(true);
  return p;
}

function campoCon(body, label, valor) {
  const txt = label + ': ' + (valor||'—') + '.';
  const p   = body.appendParagraph(txt);
  p.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  p.setIndentStart(28);
  p.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.BOLD]:false,[DocumentApp.Attribute.ITALIC]:false,[DocumentApp.Attribute.UNDERLINE]:false});
  p.editAsText().setBold(0, label.length - 1, true);
  return p;
}

function fechaFormato(iso) {
  if (!iso) return new Date().toLocaleDateString('es-ES',{day:'2-digit',month:'long',year:'numeric'});
  try { return new Date(iso).toLocaleDateString('es-ES',{day:'2-digit',month:'long',year:'numeric'}); }
  catch(e) { return iso; }
}

// ── GENERACIÓN: INFORME DE TURNO ─────────────────────────
function generarInformeTurno(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  const ids = (data.ids||'').split(',').filter(Boolean);
  if (!ids.length) return { ok: false, error: 'No hay incidencias' };

  const todas       = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));
  const incidencias = ids.map(id => todas.find(i => i.id === id)).filter(Boolean);

  const badges    = String(data.agentes||usuario.badge).split(';').map(b => b.trim()).filter(Boolean);
  const fecha     = fechaFormato(null);
  const titulo    = 'Informe_Turno_' + new Date().toISOString().slice(0,10) + '_' + badges.join('_');
  const doc       = DocumentApp.create(titulo);
  const body      = doc.getBody();
  body.setMarginTop(72).setMarginBottom(72).setMarginLeft(90).setMarginRight(72);
  body.clear();

  crearCabecera(body, incidencias.length === 1 ? incidencias[0].expedienteGestiona : '');

  const titDoc = body.appendParagraph('INFORME DE SERVICIO — INCIDENCIAS DETECTADAS EN VÍA PÚBLICA');
  titDoc.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  titDoc.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  body.appendParagraph('');

  const encab = badges.length === 1
    ? `El Policía Local con número de carné profesional ${badges[0]}, le da conocimiento al Sr. Oficial Jefe para su conocimiento y efectos oportunos:`
    : `Los Policías Locales con número de carné profesional ${badges.join(' y ')}, le dan conocimiento al Sr. Oficial Jefe para su conocimiento y efectos oportunos:`;
  parJustif(body, encab);
  body.appendParagraph('');

  incidencias.forEach((inc, i) => {
    const ordinal = ORDINALES[i] || ('INC-'+(i+1));
    const pOrd = body.appendParagraph(ordinal + '. \u2013 Que durante el servicio de patrullaje se ha detectado la siguiente incidencia en la vía pública del municipio de La Zubia (Granada):');
    pOrd.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
    pOrd.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
    pOrd.editAsText().setBold(0, ordinal.length + 2, true);
    body.appendParagraph('');

    campoCon(body, 'Fecha de detección', inc.fechaDeteccion ? fechaFormato(inc.fechaDeteccion) : fechaFormato(inc.fechaRegistro));
    campoCon(body, 'Ubicación', (inc.calle||'—')+(inc.numero?', '+inc.numero:'')+', La Zubia (Granada)');
    campoCon(body, 'Categoría', (inc.categoria||'—')+(inc.tipoEspecifico?'. Tipo: '+inc.tipoEspecifico:'')+(inc.tipoOtro?' ('+inc.tipoOtro+')':''));
    campoCon(body, 'Descripción', inc.descripcion||'—');
    campoCon(body, 'Dimensiones/Afectación', (inc.dimensiones||'—')+(inc.dimensionesDetalle?' ('+inc.dimensionesDetalle+')':''));
    campoCon(body, 'Tramitación', (inc.tramitacion||'—')+(inc.areaResponsable?'. Área responsable: '+inc.areaResponsable:'')+(inc.empresa?'. Empresa/servicio: '+inc.empresa:''));
    if (inc.senalizacionProvisional === 'Sí') {
      campoCon(body, 'Señalización provisional', 'Se ha señalizado provisionalmente'+(inc.senalProvDesc?' mediante '+inc.senalProvDesc:''));
    }
    if (inc.avisoTelefonico === 'Sí' && inc.personaContactada) {
      campoCon(body, 'Aviso telefónico', 'Se ha dado aviso a '+inc.personaContactada+(inc.horaAviso?' a las '+inc.horaAviso+' horas':''));
    }
    if (inc.esReincidente === 'Sí') {
      campoCon(body, 'Observación', 'Se trata de una incidencia reincidente en esta ubicación y categoría');
    }
    body.appendParagraph('');
  });

  parJustif(body, 'Lo que se informa para su conocimiento y efectos oportunos, quedando a disposición de la Jefatura para cualquier aclaración que estime necesaria.');
  body.appendParagraph('');

  const pF = body.appendParagraph('La Zubia a ' + fecha);
  pF.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  pF.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  const firma = badges.length === 1
    ? 'El Policía Local n\u00ba ' + badges[0]
    : 'Los Polic\u00edas Locales n\u00ba ' + badges.join(' y n\u00ba ');
  const pFirma = body.appendParagraph(firma);
  pFirma.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  pFirma.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  crearPie(body);
  doc.saveAndClose();
  moverAInformes(doc.getId());
  return { ok: true, url: doc.getUrl(), id: doc.getId(), titulo };
}

// ── GENERACIÓN: ACTA VEHÍCULO ABANDONADO ─────────────────
function generarActaVehiculo(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  const todos = sheetToObjects(getSheet(CONFIG.SHEET_VEHICULOS));
  const veh   = todos.find(v => v.id === data.id);
  if (!veh) return { ok: false, error: 'Vehículo no encontrado' };

  const fechaActo  = fechaFormato(null);
  const badges     = String(veh.agentes||usuario.badge).split(';').map(b => b.trim()).filter(Boolean);
  const indicios   = String(veh.indicios||'').split(',').map(i => i.trim()).filter(Boolean);
  const hora       = new Date().toLocaleTimeString('es-ES', {hour:'2-digit', minute:'2-digit'});
  const fotosUrls  = veh.fotos ? String(veh.fotos).split(',').filter(Boolean) : [];

  // Determinar título según fase
  const esCNeg = veh.fase === 'Consulta negativa';
  const tituloPrincipal = esCNeg
    ? 'INFORME DE VERIFICACIÓN DE VEHÍCULO CON RESULTADO NEGATIVO DE ABANDONO'
    : 'ACTA ACREDITATIVA DEL ESTACIONAMIENTO DE UN VEHÍCULO EN LA VÍA PÚBLICA CON EVIDENTES MUESTRAS DE ABANDONO';

  // Texto de agentes
  const txtAgentes = badges.length === 1
    ? 'el funcionario de la Policía Local con número profesional ' + badges[0]
    : 'los funcionarios de la Policía Local con números profesionales ' + badges.join(', ');

  // Texto de indicios en línea
  const txtIndicios = indicios.join(', ');

  // Texto titular
  const txtTitular = veh.titular
    ? 'Consultado el Registro de Vehículos de la Dirección General de Tráfico (DGT), figura como titular ' +
      (veh.titular||'') +
      (veh.dni ? ', con D.N.I. / N.I.E. nº ' + veh.dni : '') +
      (veh.domicilio ? ', con domicilio en ' + veh.domicilio : '') +
      (veh.municipioTitular ? ', ' + veh.municipioTitular : '') +
      '.'
    : 'Consultado el Registro de Vehículos de la Dirección General de Tráfico (DGT), no consta titular identificado para la matrícula indicada.';

  // Párrafos del cuerpo como array
  let parrafosCuerpo = [];
  if (esCNeg) {
    parrafosCuerpo = [
      'En La Zubia (Granada), siendo las ' + hora + ' horas del día ' + fechaActo + ', por ' + txtAgentes + ', por medio de la presente hacen constar:',
      'Que a raíz de aviso vecinal, se ha procedido a inspeccionar el vehículo de la marca ' + (veh.marca||'—') + ', modelo ' + (veh.modelo||'—') + ', de color ' + (veh.color||'—') + ', con placa de matrícula ' + (veh.matricula||'—') + ', y número de bastidor ' + (veh.bastidor||'Desconocido') + ', estacionado en la calle ' + (veh.calle||'—') + (veh.numero ? ', junto al número ' + veh.numero : '') + ' de esta localidad.',
      'Del reconocimiento externo practicado sobre el vehículo NO se aprecian indicios suficientes de abandono. El vehículo no presenta daños estructurales que lo inhabiliten para la circulación, y no concurren los elementos definidos en el artículo 105 del Real Decreto Legislativo 6/2015 para considerarlo en situación de abandono.',
      txtTitular
    ];
  } else {
    parrafosCuerpo = [
      'En La Zubia (Granada), siendo las ' + hora + ' horas del día ' + fechaActo + ', por ' + txtAgentes + ', por medio de la presente hacen constar:',
      'Que cuando realizaban servicio ordinario han comprobado que en la calle ' + (veh.calle||'—') + (veh.numero ? ', junto al número ' + veh.numero : '') + ' de esta localidad, se encuentra estacionado el vehículo de la marca ' + (veh.marca||'—') + ', modelo ' + (veh.modelo||'—') + ', de color ' + (veh.color||'—') + ', con placa de matrícula ' + (veh.matricula||'—') + ', y número de bastidor ' + (veh.bastidor||'Desconocido') + ', el cual presenta evidentes muestras de encontrarse en situación de abandono, siendo las mismas las que a continuación se relacionan:',
      txtIndicios,
      txtTitular
    ];
  }


  // Texto de fase
  let txtFase = '';
  if (veh.fase === 'Primera observación') {
    txtFase = 'La presente acta corresponde a la PRIMERA OBSERVACIÓN del vehículo. Transcurrido el plazo de un mes, se procederá a realizar una segunda comprobación conforme a lo establecido en el artículo 105 del Real Decreto Legislativo 6/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial.';
  } else if (veh.fase === 'Segunda comprobación') {
    txtFase = 'La presente acta corresponde a la SEGUNDA COMPROBACIÓN del vehículo, habiéndose realizado la primera observación con anterioridad. Habiéndose acreditado la permanencia del vehículo en el mismo lugar y en idéntico estado, procede el inicio del expediente de retirada conforme al artículo 105 del Real Decreto Legislativo 6/2015.';
  } else if (veh.fase === 'Inicio expediente') {
    txtFase = 'Cumplidos los requisitos legales establecidos en el artículo 105 del Real Decreto Legislativo 6/2015, de 30 de octubre, se procede al INICIO DEL EXPEDIENTE de retirada del vehículo abandonado.';
  }

  const doc  = DocumentApp.create('Acta_Vehiculo_' + (veh.matricula||veh.id) + '_' + new Date().toISOString().slice(0,10));
  const body = doc.getBody();
  body.setMarginTop(72).setMarginBottom(72).setMarginLeft(90).setMarginRight(72);
  body.clear();

  crearCabecera(body, veh.nExpedienteInmovilizacion || veh.id);

  // ── TÍTULO ──
  const pTit = body.appendParagraph(tituloPrincipal);
  pTit.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  pTit.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',
    [DocumentApp.Attribute.UNDERLINE]:true});
  body.appendParagraph('');
  body.appendParagraph('');

  // ── CUERPO PRINCIPAL en párrafos separados ──
  parrafosCuerpo.forEach(function(parrafo) {
    if (parrafo && parrafo.trim()) {
      const p = body.appendParagraph(parrafo.trim());
      p.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
      p.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.BOLD]:false});
      body.appendParagraph('');
    }
  });

  // Texto de fase (si aplica)
  if (txtFase) {
    const pFase = body.appendParagraph(txtFase);
    pFase.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
    pFase.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.BOLD]:false});
    body.appendParagraph('');
  }

  // Observaciones
  const pObs = body.appendParagraph('OBSERVACIONES: ' + (veh.observaciones||''));
  pObs.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.BOLD]:false});
  body.appendParagraph('');

  // Documentación fotográfica
  const pFoto = body.appendParagraph('DOCUMENTACIÓN FOTOGRÁFICA: Se incorporan fotografías del vehículo y de su situación en la vía pública. De lo cual se deja constancia a los efectos oportunos.');
  pFoto.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  pFoto.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.BOLD]:false});
  body.appendParagraph('');
  body.appendParagraph('');

  // Cierre
  const pCierre = body.appendParagraph('Y para que así conste, se extiende la presente acta.');
  pCierre.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.BOLD]:false});
  body.appendParagraph('');

  const pFecha = body.appendParagraph('En La Zubia, a ' + fechaActo + '.');
  pFecha.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.BOLD]:false});
  body.appendParagraph('');
  body.appendParagraph('');
  body.appendParagraph('');

  // Pie de página
  crearPie(body);

  // ── PÁGINAS DE FOTOS ──
  if (fotosUrls.length > 0) {
    fotosUrls.forEach((url, idx) => {
      try {
        body.appendPageBreak();
        // Cabecera en página de foto
        const pfm1 = body.appendParagraph('POLICÍA LOCAL');
        pfm1.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
        const pfm2 = body.appendParagraph('AYUNTAMIENTO LA ZUBIA');
        pfm2.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
        const pfm3 = body.appendParagraph('GRANADA');
        pfm3.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
        body.appendParagraph('');

        // Título sección fotos (solo en primera página de fotos)
        if (idx === 0) {
          const pDocFot = body.appendParagraph('DOCUMENTACIÓN FOTOGRÁFICA');
          pDocFot.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
          body.appendParagraph('');
        }

        // Pie foto centrado
        const pPieFoto = body.appendParagraph('Fotografía ' + (idx + 1));
        pPieFoto.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
        pPieFoto.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

        // Insertar imagen desde URL de Drive
        try {
          const fileId = url.match(/[-\w]{25,}/)?.[0];
          if (fileId) {
            const blob = DriveApp.getFileById(fileId).getBlob();
            const img = body.appendImage(blob);
            img.setWidth(400);
            const ratio = img.getHeight() / img.getWidth();
            img.setHeight(Math.round(400 * ratio));
            const pImg = img.getParent().asText ? null : img.getParent();
            if (pImg) pImg.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
          }
        } catch(eImg) {
          body.appendParagraph('[Imagen no disponible: ' + url + ']')
            .setAttributes({[DocumentApp.Attribute.FONT_SIZE]:10,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
        }
      } catch(ePage) {
        Logger.log('Error en página de foto ' + idx + ': ' + ePage);
      }
    });
  }

  doc.saveAndClose();
  moverAInformes(doc.getId());
  addHistorialInterno(veh.id,'Vehiculo','Acta generada',usuario.badge,etiquetaAgente(usuario),'Fase: '+veh.fase);
  return { ok: true, url: doc.getUrl(), id: doc.getId() };
}

// ── GENERACIÓN: AUDITORÍA DE SEÑALES DEFICIENTES (item 20) ──
function generarInformeAuditoriaSenales(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  const ESTADOS_DEFICIENTES = ['Deteriorado','Deficiente','Fuera de servicio'];
  const verticales     = sheetToObjects(getSheet(CONFIG.SHEET_SENALES_V)).filter(s => ESTADOS_DEFICIENTES.includes(s.estado) && s.estadoRegistro !== 'Resuelta');
  const horizontales   = sheetToObjects(getSheet(CONFIG.SHEET_SENALES_H)).filter(s => ESTADOS_DEFICIENTES.includes(s.estado) && s.estadoRegistro !== 'Resuelta');
  const intersecciones = sheetToObjects(getSheet(CONFIG.SHEET_INTERSECCIONES)).filter(i => ['Medio','Alto'].includes(i.nivelRiesgo) && i.estado !== 'Resuelta');

  const fecha  = fechaFormato(null);
  const doc    = DocumentApp.create('Auditoria_Senales_Deficientes_' + new Date().toISOString().slice(0,10));
  const body   = doc.getBody();
  body.setMarginTop(72).setMarginBottom(72).setMarginLeft(90).setMarginRight(72);
  body.clear();

  crearCabecera(body);

  const tit = body.appendParagraph('INFORME DE AUDITORÍA DE SEÑALIZACIÓN DEFICIENTE');
  tit.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  tit.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  body.appendParagraph('');

  parJustif(body, 'El presente informe recoge, a fecha ' + fecha + ', el estado del inventario de señalización vertical, horizontal e intersecciones registradas por la Policía Local de La Zubia que presentan deficiencias pendientes de subsanación.');
  body.appendParagraph('');

  const resumen = body.appendParagraph('RESUMEN: ' + verticales.length + ' señales verticales deficientes · ' + horizontales.length + ' señales horizontales deficientes · ' + intersecciones.length + ' intersecciones con riesgo medio/alto.');
  resumen.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  resumen.editAsText().setBold(true);
  body.appendParagraph('');

  function bloque(titulo, items, filas) {
    const h = body.appendParagraph(titulo);
    h.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
    body.appendParagraph('');
    if (!items.length) {
      parJustif(body, 'Sin elementos deficientes registrados en esta categoría.');
    } else {
      items.forEach((it, idx) => filas(it, idx));
    }
    body.appendParagraph('');
  }

  bloque('1. SEÑALES VERTICALES DEFICIENTES', verticales, (s) => {
    campoCon(body, (s.codigo||s.id), (s.descripcion||'—')+' — '+(s.calle||'—')+(s.numero?', '+s.numero:'')+'. Estado: '+s.estado+(s.observaciones?'. Obs: '+s.observaciones:''));
  });

  bloque('2. SEÑALES HORIZONTALES DEFICIENTES', horizontales, (s) => {
    campoCon(body, s.id, (s.tipo||'—')+' — '+(s.descripcion||'—')+' — '+(s.calle||'—')+'. Estado: '+s.estado+(s.observaciones?'. Obs: '+s.observaciones:''));
  });

  bloque('3. INTERSECCIONES CON DÉFICIT DE SEÑALIZACIÓN (RIESGO MEDIO/ALTO)', intersecciones, (i) => {
    campoCon(body, (i.nombre||i.id), (i.calles||'—')+'. Riesgo: '+i.nivelRiesgo+'. Déficit: '+(i.deficit||'—')+(i.propuestaActuacion?'. Propuesta: '+i.propuestaActuacion:''));
  });

  const pF = body.appendParagraph('La Zubia a ' + fecha);
  pF.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  pF.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  const pFirma = body.appendParagraph('Jefatura de Policía Local de La Zubia');
  pFirma.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  pFirma.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  crearPie(body);
  doc.saveAndClose();
  moverAInformes(doc.getId());
  return { ok: true, url: doc.getUrl(), id: doc.getId(),
    resumen: { verticales: verticales.length, horizontales: horizontales.length, intersecciones: intersecciones.length } };
}

function generarInformeMensual(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || !['admin','jefatura'].includes(usuario.rol)) return { ok: false, error: 'Sin permisos' };

  const mes = data.mes || (new Date().getMonth() + 1);
  const año = data.año || new Date().getFullYear();
  const desde = new Date(año, mes - 1, 1).toISOString();
  const hasta  = new Date(año, mes, 0, 23, 59, 59).toISOString();
  const nomMes = new Date(año, mes - 1, 1).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

  let incs = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));
  incs = incs.filter(i => i.fechaRegistro >= desde && i.fechaRegistro <= hasta);

  const total      = incs.length;
  const resueltas  = incs.filter(i => i.estado === 'Resuelta').length;
  const pendientes = incs.filter(i => i.estado !== 'Resuelta').length;
  const urgentes   = incs.filter(i => i.urgencia === 'Urgente').length;
  const vencidas   = incs.filter(i => i.vencida === 'Sí' || (i.fechaPlazo && new Date(i.fechaPlazo) < new Date() && i.estado !== 'Resuelta')).length;
  const reincid    = incs.filter(i => i.esReincidente === 'Sí').length;

  const porCat = {};
  incs.forEach(i => { porCat[i.categoria] = (porCat[i.categoria]||0) + 1; });

  const doc  = DocumentApp.create('Informe_Mensual_' + año + '_' + String(mes).padStart(2,'0'));
  const body = doc.getBody();
  body.clear();

  crearCabecera(body);

  const tit = body.appendParagraph('INFORME MENSUAL DE INCIDENCIAS EN VÍA PÚBLICA — ' + nomMes.toUpperCase());
  tit.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  tit.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  body.appendParagraph('');

  parJustif(body, 'La Jefatura de la Policía Local de La Zubia eleva a la Alcaldía el presente informe de resumen de incidencias detectadas y gestionadas en la vía pública durante el mes de ' + nomMes + ':');
  body.appendParagraph('');

  const p1 = body.appendParagraph('PRIMERO. \u2013 RESUMEN ESTADÍSTICO:');
  p1.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  body.appendParagraph('');

  campoCon(body, 'Total de incidencias registradas', String(total));
  campoCon(body, 'Incidencias resueltas', String(resueltas));
  campoCon(body, 'Incidencias pendientes de resolución', String(pendientes));
  campoCon(body, 'Incidencias urgentes (actuación en 24h)', String(urgentes));
  campoCon(body, 'Incidencias vencidas sin resolver', String(vencidas));
  campoCon(body, 'Incidencias reincidentes', String(reincid));
  body.appendParagraph('');

  const p2 = body.appendParagraph('SEGUNDO. \u2013 DISTRIBUCIÓN POR CATEGORÍAS:');
  p2.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  body.appendParagraph('');

  Object.entries(porCat).sort((a,b) => b[1]-a[1]).forEach(([cat, n]) => {
    campoCon(body, cat, n + ' incidencias');
  });
  body.appendParagraph('');

  const p3 = body.appendParagraph('TERCERO. \u2013 RELACIÓN DE INCIDENCIAS:');
  p3.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  body.appendParagraph('');

  incs.forEach((inc, i) => {
    const lin = body.appendParagraph('        ' + (i+1) + '. ' + inc.id + ' — ' + (inc.calle||'—') + (inc.numero?', '+inc.numero:'') + ' — ' + (inc.categoria||'—') + ' — ' + (inc.urgencia||'—') + ' — ' + (inc.estado||'—'));
    lin.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:10,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  });
  body.appendParagraph('');

  parJustif(body, 'Lo que se informa para su conocimiento y efectos oportunos.');
  body.appendParagraph('');

  const pF = body.appendParagraph('La Zubia a ' + fechaFormato(null));
  pF.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  pF.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  const pFirma = body.appendParagraph('El Jefe de la Policía Local de La Zubia');
  pFirma.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  pFirma.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  crearPie(body);
  doc.saveAndClose();
  moverAInformes(doc.getId());
  return { ok: true, url: doc.getUrl(), id: doc.getId(), estadisticas: { total, resueltas, pendientes, urgentes, vencidas } };
}

// ── GENERACIÓN: RESPONSABILIDAD PATRIMONIAL ───────────────
function generarInformePatrimonial(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  const todas = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));
  const inc   = todas.find(i => i.id === data.id);
  if (!inc) return { ok: false, error: 'Incidencia no encontrada' };

  const badges   = String(data.agentes || inc.agentes || usuario.badge).split(';').map(b => b.trim()).filter(Boolean);
  const fecha    = fechaFormato(null);
  const reclamante = data.reclamante || '[NOMBRE DEL RECLAMANTE]';
  const dniRec   = data.dniReclamante || '[DNI]';
  const domicRec = data.domicilioReclamante || '[DOMICILIO]';
  const expGest  = data.expedienteGestiona || inc.expedienteGestiona || '[Nº EXPEDIENTE GESTIONA]';
  const abogado  = data.abogado || '';
  const fechaHecho = data.fechaHecho || '[FECHA DEL HECHO]';

  const doc  = DocumentApp.create('Informe_Patrimonial_' + (inc.id||'') + '_' + new Date().toISOString().slice(0,10));
  const body = doc.getBody();
  body.setMarginTop(72).setMarginBottom(72).setMarginLeft(90).setMarginRight(72);
  body.clear();

  crearCabecera(body, data.expedienteGestiona || inc.expedienteGestiona || '');

  const tit = body.appendParagraph('INFORME SOBRE RECLAMACIÓN PATRIMONIAL POR ' + (data.tipoReclamacion||'CAÍDA EN VÍA PÚBLICA').toUpperCase() + ' Y VALORACIÓN DE RELACIÓN CAUSAL.');
  tit.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  tit.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  body.appendParagraph('');

  // Encabezamiento
  const encab = badges.length === 1
    ? `El Policía Local con número de carné profesional ${badges[0]}, le da conocimiento al Sr. Oficial Jefe para su conocimiento y efectos oportunos:`
    : `Los Policías Locales con número de carné profesional ${badges.join(' y ')}, le dan conocimiento al Sr. Oficial Jefe para su conocimiento y efectos oportunos:`;
  parJustif(body, encab);
  body.appendParagraph('');

  const introd = abogado
    ? `Que en relación al expediente de Gestiona ${expGest}, en el cual se solicita que se informe sobre la reclamación patrimonial presentada por ${abogado}, como abogado en representación de ${reclamante}, con DNI ${dniRec}, con domicilio en ${domicRec}, INFORMAR:`
    : `Que en relación al expediente de Gestiona ${expGest}, en el cual se solicita que se informe sobre la reclamación patrimonial presentada por ${reclamante}, con DNI ${dniRec}, con domicilio en ${domicRec}, INFORMAR:`;
  parJustif(body, introd);
  body.appendParagraph('');

  // PRIMERO — Finalidad
  const p1 = body.appendParagraph('PRIMERO. \u2013 Que el presente informe tiene por finalidad analizar, desde el punto de vista técnico, los hechos que motivan la reclamación patrimonial de referencia, valorando la posible relación entre el desperfecto existente en la vía pública y los daños alegados, así como determinar si concurren los elementos necesarios para establecer un nexo causal suficiente a efectos de responsabilidad patrimonial de la Administración.');
  p1.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  p1.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  p1.editAsText().setBold(0, 9, true);
  body.appendParagraph('');

  // SEGUNDO — Hechos e incidencia
  const fechaInc = fechaFormato(inc.fechaDeteccion||inc.fechaRegistro);
  const p2 = body.appendParagraph('SEGUNDO. \u2013 Los hechos objeto de reclamación se sitúan en ' + (inc.calle||'—') + (inc.numero?', nº '+inc.numero:'') + ', La Zubia (Granada), en relación con la siguiente incidencia registrada en el sistema de gestión de incidencias de la Policía Local:');
  p2.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  p2.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  p2.editAsText().setBold(0, 9, true);
  body.appendParagraph('');

  campoCon(body, 'Fecha de detección', fechaInc);
  campoCon(body, 'Categoría', (inc.categoria||'—')+(inc.tipoEspecifico?' \u2014 '+inc.tipoEspecifico:''));
  campoCon(body, 'Descripción del desperfecto', inc.descripcion||'—');
  campoCon(body, 'Dimensiones/Afectación', (inc.dimensiones||'—')+(inc.dimensionesDetalle?' ('+inc.dimensionesDetalle+')':''));
  campoCon(body, 'Área responsable notificada', inc.areaResponsable||'—');
  campoCon(body, 'Estado en el momento del siniestro', data.estadoMomento||inc.estado||'—');
  body.appendParagraph('');

  // TERCERO — Análisis técnico
  const p3txt = data.analisisTercero || 'Que del análisis de la documentación obrante en el expediente y del reconocimiento del lugar, se desprende que el desperfecto descrito presenta ' + (inc.dimensiones ? 'una afectación ' + inc.dimensiones.toLowerCase() : 'entidad suficiente') + ' para generar riesgo en determinadas condiciones, siendo su percepción posible para un usuario que transite por la zona con un nivel de atención adecuado.';
  const p3 = body.appendParagraph('TERCERO. \u2013 ' + p3txt);
  p3.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  p3.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  p3.editAsText().setBold(0, 9, true);
  body.appendParagraph('');

  // CUARTO — Nexo causal
  const p4 = body.appendParagraph('CUARTO. \u2013 Que para que exista responsabilidad patrimonial de la Administración es necesaria la concurrencia de los siguientes requisitos: (i) existencia de daño efectivo, evaluable económicamente e individualizado; (ii) que el daño sea consecuencia del funcionamiento normal o anormal de los servicios públicos; (iii) relación de causalidad directa entre el daño y el funcionamiento del servicio; y (iv) que el daño no se deba a fuerza mayor (artículos 32 y siguientes de la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público).');
  p4.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  p4.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  p4.editAsText().setBold(0, 9, true);
  body.appendParagraph('');

  // QUINTO — Conocimiento previo
  const p5txt = inc.fechaRegistro < (data.fechaHecho||inc.fechaRegistro) ? 'Que la Policía Local tenía conocimiento del desperfecto con anterioridad a la fecha del siniestro alegado, habiendo sido registrado en el sistema de gestión de incidencias con fecha ' + fechaFormato(inc.fechaRegistro) + ', comunicado al área responsable y encontrándose pendiente de resolución en la fecha de los hechos.' : 'Que la Policía Local no tenía constancia previa del desperfecto en la fecha del siniestro alegado (' + (data.fechaHecho||'Sin determinar') + '), habiendo sido detectado y registrado con posterioridad.';
  const p5 = body.appendParagraph('QUINTO. \u2013 ' + p5txt);
  p5.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  p5.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  p5.editAsText().setBold(0, 9, true);
  body.appendParagraph('');

  // SEXTO — Conclusión
  const concl = data.conclusion || 'Del conjunto del análisis se desprende que el desperfecto registrado presenta entidad con capacidad potencial de generar riesgo. La valoración del nexo causal y de la concurrencia de los requisitos de responsabilidad patrimonial corresponde al órgano administrativo competente en la instrucción del expediente.';
  const p6 = body.appendParagraph('SEXTO. \u2013 Valoración Global y Conclusión: ' + concl);
  p6.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  p6.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  p6.editAsText().setBold(0, 9, true);
  body.appendParagraph('');

  parJustif(body, 'Lo que se informa para su conocimiento y efectos oportunos, quedando a disposición de la Jefatura y del órgano instructor para cualquier aclaración que estime necesaria.');
  body.appendParagraph('');

  const pF = body.appendParagraph('La Zubia a ' + fecha);
  pF.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  pF.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  const firma = badges.length === 1
    ? 'El Policía Local n\u00ba ' + badges[0]
    : 'Los Polic\u00edas Locales n\u00ba ' + badges.join(' y n\u00ba ');
  const pFirma = body.appendParagraph(firma);
  pFirma.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  pFirma.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  crearPie(body);
  doc.saveAndClose();
  moverAInformes(doc.getId());
  return { ok: true, url: doc.getUrl(), id: doc.getId() };
}

// ── GENERACIÓN: LISTADO DE OCUPACIONES (dos secciones: terrazas / resto) ──
function generarListadoTerrazas(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  let ocs = sheetToObjects(getSheet(CONFIG.SHEET_OCUPACIONES));
  if (data.soloVigentes === 'true') ocs = ocs.filter(o => o.estado === 'Vigente');
  const terrazas = ocs.filter(o => o.tipoOcupacion === 'Terraza de verano');

  const fecha = fechaFormato(null);
  const doc   = DocumentApp.create('Listado_Terrazas_' + new Date().toISOString().slice(0,10));
  const body  = doc.getBody();
  body.setMarginTop(72).setMarginBottom(72).setMarginLeft(60).setMarginRight(60);
  body.clear();

  crearCabecera(body);

  const tit = body.appendParagraph('LISTADO DE TERRAZAS DE VERANO');
  tit.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  tit.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  const sub = body.appendParagraph('Actualizado a ' + fecha);
  sub.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  sub.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:10,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.ITALIC]:true});
  body.appendParagraph('');

  if (terrazas.length) {
    const filas = [['Establecimiento / Expediente','Localización','Veladores Solicitados','Veladores Autorizados','Autorización','Tarima']];
    terrazas.forEach(t => {
      filas.push([
        (t.titular||'—') + (t.nExpedienteGestiona?' / '+t.nExpedienteGestiona:''),
        t.calle || '—',
        t.veladoresSolicitados || '—',
        t.veladoresAutorizados || '—',
        t.disponeAutorizacion || '—',
        (t.tarima||'No') + (t.tarimaObs?' ('+t.tarimaObs+')':'')
      ]);
    });
    const tabla = body.appendTable(filas);
    tabla.getRow(0).editAsText().setBold(true);
    for (let i=0;i<tabla.getNumRows();i++) for (let j=0;j<tabla.getRow(i).getNumCells();j++)
      tabla.getCell(i,j).editAsText().setFontSize(9).setFontFamily('Book Antiqua');
  } else {
    parJustif(body, 'No hay terrazas de verano registradas.');
  }

  crearPie(body);
  doc.saveAndClose();
  moverAInformes(doc.getId());
  return { ok: true, url: doc.getUrl(), id: doc.getId() };
}

function generarListadoRestoOcupaciones(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  let ocs = sheetToObjects(getSheet(CONFIG.SHEET_OCUPACIONES));
  if (data.soloVigentes === 'true') ocs = ocs.filter(o => o.estado === 'Vigente');
  const resto = ocs.filter(o => o.tipoOcupacion !== 'Terraza de verano');

  const fecha = fechaFormato(null);
  const doc   = DocumentApp.create('Listado_Ocupaciones_Resto_' + new Date().toISOString().slice(0,10));
  const body  = doc.getBody();
  body.setMarginTop(72).setMarginBottom(72).setMarginLeft(60).setMarginRight(60);
  body.clear();

  crearCabecera(body);

  const tit = body.appendParagraph('LISTADO DE OCUPACIONES DE VÍA PÚBLICA');
  tit.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  tit.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  const sub = body.appendParagraph('Actualizado a ' + fecha);
  sub.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  sub.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:10,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.ITALIC]:true});
  body.appendParagraph('');

  const porTipo = {};
  resto.forEach(o => { (porTipo[o.tipoOcupacion] = porTipo[o.tipoOcupacion] || []).push(o); });
  if (Object.keys(porTipo).length) {
    Object.keys(porTipo).forEach(tipo => {
      const hTipo = body.appendParagraph(tipo.toUpperCase());
      hTipo.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.UNDERLINE]:true});
      porTipo[tipo].forEach(o => {
        const rango = (o.fechaInicioVigencia?fechaFormato(o.fechaInicioVigencia):'—') + ' a ' + (o.fechaFinVigencia?fechaFormato(o.fechaFinVigencia):'—');
        const linea = body.appendParagraph('• ' + (o.calle||'—') + (o.numero?' '+o.numero:'') + ' (' + rango + ')' + (o.subtipo?' — '+o.subtipo:''));
        linea.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:10,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
      });
      body.appendParagraph('');
    });
  } else {
    parJustif(body, 'No hay ocupaciones registradas.');
  }

  crearPie(body);
  doc.saveAndClose();
  moverAInformes(doc.getId());
  return { ok: true, url: doc.getUrl(), id: doc.getId() };
}

// ── GENERACIÓN: ACTA DE DENUNCIA — OCUPACIÓN DE VÍA PÚBLICA (item 34) ──
function generarActaDenunciaOcupacion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  const todas = sheetToObjects(getSheet(CONFIG.SHEET_OCUPACIONES));
  const oc    = todas.find(o => o.id === data.id);
  if (!oc) return { ok: false, error: 'Ocupación no encontrada' };

  const nRegistro = data.nRegistro || oc.nExpedienteGestiona || '';
  const badges    = String(data.agentes || oc.badgeAgente || usuario.badge).split(';').map(b => b.trim()).filter(Boolean);
  const fecha     = fechaFormato(null);

  const doc  = DocumentApp.create('Acta_Denuncia_Ocupacion_' + oc.id);
  const body = doc.getBody();
  body.setMarginTop(72).setMarginBottom(72).setMarginLeft(90).setMarginRight(72);
  body.clear();

  crearCabecera(body, nRegistro);

  const tit = body.appendParagraph('ACTA - DENUNCIA INFRACCIÓN A LA ORDENANZA MUNICIPAL DE OCUPACIÓN Y UTILIZACIÓN DE ESPACIOS PÚBLICOS.');
  tit.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  tit.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.UNDERLINE]:true});
  body.appendParagraph('');

  campoCon(body, 'Preceptos Infringidos', oc.articuloInfringido || '—');
  const pConc = body.appendParagraph('Concepto genérico: ' + (oc.subtipo || '—'));
  pConc.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  pConc.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.ITALIC]:true});
  body.appendParagraph('');

  const hDat = body.appendParagraph('DATOS DE LA PERSONA/ENTIDAD DENUNCIADA:');
  hDat.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.UNDERLINE]:true});
  campoCon(body, 'Nombre y Apellidos / Razón social', (data.nombreDenunciado || oc.titular || '—') + (oc.empresa?' ('+oc.empresa+')':''));
  campoCon(body, 'DNI ó CIF', data.dniDenunciado || '—');
  campoCon(body, 'Domicilio', data.domicilioDenunciado || '—');
  campoCon(body, 'Teléfono', data.telefonoDenunciado || '—');
  body.appendParagraph('');

  const hHech = body.appendParagraph('HECHOS DENUNCIADOS:');
  hHech.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.UNDERLINE]:true});
  const pHF = body.appendParagraph('HORA: ' + (data.hora||'—') + '        FECHA: ' + (data.fechaHechos||fecha) + '        LUGAR: ' + (oc.calle||'—') + (oc.numero?', '+oc.numero:''));
  pHF.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:10,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
  body.appendParagraph('');

  parJustif(body, data.relato || '[Descripción de los hechos observados por la patrulla, contraste con la autorización/padrón si procede, y motivación de la infracción detectada.]');
  body.appendParagraph('');

  if (oc.tipificacion || oc.cuantiaMin) {
    parJustif(body, 'Los hechos descritos suponen una infracción tipificada como ' + (oc.tipificacion||'—') +
      ' conforme al artículo ' + (oc.articuloInfringido||'—') + ' de la Ordenanza Municipal de Ocupación y Utilización de Espacios Públicos' +
      (oc.cuantiaMin ? ', con una cuantía orientativa de sanción de ' + oc.cuantiaMin + ' a ' + oc.cuantiaMax + ' euros.' : '.'));
    body.appendParagraph('');
  }

  parJustif(body, 'El artículo 75 de la citada Ordenanza recoge que, con independencia de las sanciones, el incumplimiento de las condiciones establecidas en la autorización podrá dar lugar a la suspensión temporal o a la revocación de la misma, atendiendo a la gravedad de la infracción, trascendencia social del hecho y demás circunstancias concurrentes. Por lo anteriormente expuesto se propone la sanción correspondiente por infracción de la Ordenanza Municipal de Ocupación y Utilización de Espacios Públicos del Ayuntamiento de La Zubia.');
  body.appendParagraph('');
  parJustif(body, 'Que en testimonio de lo actuado, se extiende la presente ACTA, la cual será remitida a la Autoridad competente en la materia a los efectos que en justicia procedan.');
  body.appendParagraph('');

  const firma = badges.length === 1
    ? 'El Agente Nº ' + badges[0]
    : 'Los Agentes Nº ' + badges.join(' y Nº ');
  const pFirma = body.appendParagraph(firma + '\n(DOCUMENTO FIRMADO ELECTRÓNICAMENTE)');
  pFirma.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  pFirma.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:11,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});

  crearPie(body);

  // Anexo fotográfico, si hay fotos
  if (oc.fotos) {
    body.appendPageBreak();
    const hAnexo = body.appendParagraph('Anexo Fotográfico al Acta');
    hAnexo.setAttributes({[DocumentApp.Attribute.BOLD]:true,[DocumentApp.Attribute.FONT_SIZE]:12,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua',[DocumentApp.Attribute.UNDERLINE]:true});
    body.appendParagraph('');
    String(oc.fotos).split(',').forEach(url => {
      const p = body.appendParagraph('Foto: ' + url);
      p.setAttributes({[DocumentApp.Attribute.FONT_SIZE]:9,[DocumentApp.Attribute.FONT_FAMILY]:'Book Antiqua'});
    });
  }

  doc.saveAndClose();
  moverAInformes(doc.getId());

  // Vincula el acta al expediente de la ocupación
  actualizarEstadoOcupacion({ token: data.token, id: oc.id, estado: 'Derivada a sancionador', expedienteSancionador: nRegistro });

  return { ok: true, url: doc.getUrl(), id: doc.getId() };
}
// ── BACKUP AUTOMÁTICO DIARIO (item 24) ─────────────────────
// Copia diaria de la hoja de cálculo completa a una carpeta de Drive, con rotación
// (se conservan los últimos N backups) y registro de confirmación en la propia hoja.
const CONFIG_BACKUP = {
  CARPETA_BACKUPS: 'GestorIncidencias_Backups',
  DIAS_RETENCION: 30,
  SHEET_BACKUPS: 'BackupsLog'
};

function _getCarpetaBackups() {
  const c = DriveApp.getFoldersByName(CONFIG_BACKUP.CARPETA_BACKUPS);
  return c.hasNext() ? c.next() : DriveApp.createFolder(CONFIG_BACKUP.CARPETA_BACKUPS);
}

function backupDiario() {
  const inicio = new Date();
  let resultado;
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const fecha = Utilities.formatDate(inicio, 'GMT+1', 'yyyy-MM-dd_HHmm');
    const nombreCopia = 'Backup_GestorIncidencias_' + fecha;
    const archivoOriginal = DriveApp.getFileById(ss.getId());
    const carpeta = _getCarpetaBackups();
    const copia = archivoOriginal.makeCopy(nombreCopia, carpeta);
    resultado = { ok: true, archivoId: copia.getId(), url: copia.getUrl(), nombre: nombreCopia };
    _rotarBackups(carpeta);
  } catch (e) {
    resultado = { ok: false, error: e.toString() };
  }
  _registrarBackup(resultado, inicio);
  return resultado;
}

function _rotarBackups(carpeta) {
  const archivos = carpeta.getFilesByType(MimeType.GOOGLE_SHEETS);
  const lista = [];
  while (archivos.hasNext()) lista.push(archivos.next());
  lista.sort((a, b) => b.getDateCreated().getTime() - a.getDateCreated().getTime());
  for (let i = CONFIG_BACKUP.DIAS_RETENCION; i < lista.length; i++) {
    lista[i].setTrashed(true);
  }
}

function _registrarBackup(resultado, inicio) {
  try {
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG_BACKUP.SHEET_BACKUPS);
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(CONFIG_BACKUP.SHEET_BACKUPS);
      sheet.appendRow(['fecha','ok','archivoId','url','error','duracionMs']);
    }
    const duracion = new Date().getTime() - inicio.getTime();
    sheet.appendRow([inicio.toISOString(), resultado.ok, resultado.archivoId||'', resultado.url||'', resultado.error||'', duracion]);
  } catch (e) {
    // Si ni siquiera se puede registrar, queda al menos en los logs de ejecución del propio Apps Script.
  }
}

function getBackupsLog(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || !['admin','jefatura'].includes(usuario.rol)) return { ok: false, error: 'Sin permisos' };
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG_BACKUP.SHEET_BACKUPS);
  if (!sheet) return { ok: true, backups: [] };
  const filas = sheetToObjects(sheet);
  return { ok: true, backups: filas.slice(-15).reverse() };
}

function backupManual(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || usuario.rol !== 'admin') return { ok: false, error: 'Sin permisos' };
  return backupDiario();
}

// Instala el disparador diario. EJECUTAR UNA SOLA VEZ manualmente desde el editor de Apps Script
// (abrir este archivo, seleccionar "instalarTriggerBackupDiario" en el desplegable de funciones y pulsar ▶).
// No hace falta repetirlo salvo que se borre el disparador desde Activadores.
function instalarTriggerBackupDiario() {
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction() === 'backupDiario') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('backupDiario').timeBased().everyDays(1).atHour(4).create();
  return { ok: true, mensaje: 'Disparador diario instalado — backupDiario() se ejecutará cada día alrededor de las 04:00.' };
}

function inicializarSistema() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const hojas = {
    [CONFIG.SHEET_INCIDENCIAS]: [
      'id','fechaRegistro','badgeAgente','nombreAgente','municipio',
      'calle','numero','lat','lng','fechaDeteccion',
      'categoria','catOtro','tipoEspecifico','tipoOtro','descripcion',
      'dimensiones','dimensionesDetalle',
      'afectaCirculacion','afectaPeatones','riesgoPersonas','avisoReiterado',
      'urgencia','fechaPlazo','urgenciaManual',
      'origen','tramitacion','empresa','areaResponsable','areaOtro',
      'senalizacionProvisional','senalProvDesc',
      'avisoTelefonico','horaAviso','personaContactada',
      'agentes','expedienteGestiona','fotos',
      'esReincidente','incidentesPrevios','estado',
      'badgeCierre','nombreCierre','fechaCierre',
      'observacionesCierre','fotoCierre','valoracionCierre',
      'derivadaPorConcejal','concejaliaDerivo','ciudadanoAviso','actuacionPolicial'
    ],
    [CONFIG.SHEET_SENALES_V]: [
      'id','fechaInventario','badgeAgente','nombreAgente',
      'codigo','tipo','descripcion','calle','numero','lat','lng',
      'ladoCalzada','soporte','estado','fotoInicial',
      'fechaInstalacion','observaciones','estadoRegistro',
      'fechaComunicacion','fechaResolucion','fotoCierre','obsResolucion','incidenciaVinculada'
    ],
    [CONFIG.SHEET_SENALES_H]: [
      'id','fechaInventario','badgeAgente','nombreAgente',
      'tipo','descripcion','calle','numero','latInicio','lngInicio','latFin','lngFin',
      'longitud','estado','fotoInicial','fechaUltimaRenovacion','observaciones','estadoRegistro',
      'fechaComunicacion','fechaResolucion','fotoCierre','obsResolucion','incidenciaVinculada'
    ],
    [CONFIG.SHEET_INTERSECCIONES]: [
      'id','fechaRegistro','badgeAgente','nombreAgente',
      'nombre','calles','lat','lng',
      'senalizacionExistente','deficit',
      'nivelRiesgo','propuestaActuacion','fotoInicial','croquisPropuesta','observaciones','estado','incidenciaVinculada'
    ],
    [CONFIG.SHEET_HISTORIAL]: [
      'id','fecha','entidadId','tipoEntidad','accion','badge','nombre','observaciones'
    ],
    [CONFIG.SHEET_USUARIOS]: [
      'badge','pin','pinSalt','nombre','rol','grupo','activo','token','ultimoLogin',
      'debeCambiarPin','codigoRecuperacion','codigoRecuperacionExpira','empleo','etiquetaEspecial'
    ],
    [CONFIG.SHEET_AREAS]: [
      'id','nombre','concejaliaResponsable','emailContacto','activa'
    ],
    [CONFIG.SHEET_CONTACTOS]: [
      'id','nombre','cargo','telefono','activo'
    ],
    [CONFIG.SHEET_VEHICULOS]: [
      'id','fechaRegistro','badgeAgente','nombreAgente',
      'fase','matricula','bastidor','marca','modelo','color',
      'titular','dni','domicilio','municipioTitular','telefono',
      'calle','numero','lat','lng',
      'indicios','observaciones','agentes','fotos','municipio','estado',
      'fechaUltimaComprobacion','badgeUltimaComprobacion','fechaRetirada',
      'infracciones','depositoId','nExpedienteInmovilizacion'
    ],
    [CONFIG.SHEET_DEPOSITOS]: [
      'id','nombre','direccion','fechaAlta','badgeAgente'
    ],
    [CONFIG.SHEET_COBERTURA]: [
      'id','fecha','badge','lat','lng'
    ],
    [CONFIG.SHEET_OCUPACIONES]: [
      'id','fechaRegistro','badgeAgente','nombreAgente',
      'tipoOcupacion','subtipo',
      'titular','empresa',
      'calle','numero','lat','lng','municipio',
      'origenRegistro','nExpedienteGestiona',
      'fechaInicioVigencia','fechaFinVigencia',
      'disponeAutorizacion','comprobacionInSitu','metrosOcupados',
      'veladoresSolicitados','veladoresAutorizados','tarima','tarimaObs',
      'estado',
      'esInfraccion','articuloInfringido','tipificacion','cuantiaMin','cuantiaMax',
      'expedienteSancionador',
      'fechaUltimaComprobacion','badgeUltimaComprobacion',
      'observaciones','fotos'
    ],
    'Comprobaciones': [
      'id','fechaCreacion','incidenciaId','badgeJefatura','nombreJefatura',
      'motivoComunicacion','fechaLimite',
      'badgeComprobador','nombreComprobador','fechaComprobacion',
      'resultado','fotoComprobacion','observaciones','estado'
    ]
  };

  Object.entries(hojas).forEach(([nombre, cabeceras]) => {
    let hoja = ss.getSheetByName(nombre);
    if (!hoja) {
      hoja = ss.insertSheet(nombre);
      hoja.appendRow(cabeceras);
      hoja.getRange(1,1,1,cabeceras.length)
        .setBackground('#1F4E79')
        .setFontColor('#FFFFFF')
        .setFontWeight('bold');
    }
  });

  // Usuarios iniciales
  const shU   = ss.getSheetByName(CONFIG.SHEET_USUARIOS);
  const datU  = shU.getDataRange().getValues();
  if (datU.length <= 1) {
    shU.appendRow(['3831','1234','Agente R-3','admin','R-3',true,'','']);
    shU.appendRow(['9999','0000','Jefatura PL','jefatura','',true,'','']);
    shU.appendRow(['8888','0000','Concejal Derivador','concejal','',true,'','']);
  }

  // Áreas de La Zubia precargadas
  const shA  = ss.getSheetByName(CONFIG.SHEET_AREAS);
  const datA = shA.getDataRange().getValues();
  if (datA.length <= 1) {
    const areas = [
      ['Obras y Servicios / Mantenimiento','Personal y Mantenimiento — Dña. Rosario Iglesias Garzón'],
      ['Alumbrado Público','Personal y Mantenimiento — Dña. Rosario Iglesias Garzón'],
      ['Jardinería y Zonas Verdes','Urbanismo y Desarrollo Local — Don José María Montoro Pérez'],
      ['Limpieza Viaria y Residuos','Urbanismo y Desarrollo Local — Don José María Montoro Pérez'],
      ['Señalización Vial','Bienestar Social y Tráfico — Dña. Rebeca Sánchez Molina'],
      ['Urbanismo y Actividades','Urbanismo y Desarrollo Local — Don José María Montoro Pérez'],
      ['Monte Público y Medio Ambiente','Urbanismo y Desarrollo Local — Don José María Montoro Pérez'],
      ['Servicios Sociales','Bienestar Social — Dña. Rebeca Sánchez Molina'],
      ['Bienestar Animal','Desarrollo Sostenible — Don Pablo Laguna Sánchez'],
      ['Protección Civil','Fiestas y Protección Civil — Dña. Natalia Arregui Barragán'],
      ['Empresa Eléctrica (Endesa/Sevillana)','Externa'],
      ['Empresa de Aguas (Emasagra)','Externa'],
      ['Empresa de Telecomunicaciones','Externa'],
      ['112 — Emergencias','Externa'],
      ['Bomberos','Externa'],
      ['Jefatura Policía Local','Interna'],
    ];
    areas.forEach(([nom, conc]) => {
      shA.appendRow([generarId('AREA'), nom, conc, '', true]);
    });
  }

  Logger.log('✅ Sistema inicializado correctamente — versión definitiva');
  return '✅ Sistema inicializado correctamente';
}

// ── COMPROBACIONES ────────────────────────────────────────
function crearComprobacion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario || !['admin','jefatura'].includes(usuario.rol))
    return { ok: false, error: 'Solo jefatura puede generar órdenes de comprobación' };

  const sheet = getSheet('Comprobaciones');
  if (!sheet) return { ok: false, error: 'Hoja Comprobaciones no existe. Ejecuta inicializarSistema.' };

  const id = generarId('CMP');
  const fechaLimite = data.fechaLimite || (() => {
    const d = new Date(); d.setDate(d.getDate() + 7); return d.toISOString();
  })();

  sheet.appendRow([
    id, ahora(), data.incidenciaId, usuario.badge, etiquetaAgente(usuario),
    data.motivoComunicacion || 'Área comunica resolución',
    fechaLimite, '', '', '', '', '', 'Pendiente'
  ]);

  // Actualizar estado de la incidencia
  const shInc = getSheet(CONFIG.SHEET_INCIDENCIAS);
  const filas = shInc.getDataRange().getValues();
  const headers = filas[0];
  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.incidenciaId) {
      shInc.getRange(i+1, headers.indexOf('estado')+1).setValue('Pendiente de comprobación');
      break;
    }
  }

  addHistorialInterno(data.incidenciaId, 'Incidencia',
    'Comprobación programada — área comunica resolución',
    usuario.badge, etiquetaAgente(usuario),
    'Fecha límite comprobación: ' + new Date(fechaLimite).toLocaleDateString('es-ES'));

  return { ok: true, id, fechaLimite };
}

function getComprobaciones(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };
  const sheet = getSheet('Comprobaciones');
  if (!sheet) return { ok: true, comprobaciones: [] };
  let comps = sheetToObjects(sheet);
  if (data.estado) comps = comps.filter(c => c.estado === data.estado);
  const ahora2 = new Date();
  comps = comps.map(c => Object.assign({}, c, {
    vencida: (c.fechaLimite && new Date(c.fechaLimite) < ahora2 && c.estado === 'Pendiente') ? 'Sí' : 'No'
  }));
  comps.sort((a,b) => new Date(a.fechaLimite) - new Date(b.fechaLimite));
  return { ok: true, comprobaciones: comps, total: comps.length };
}

function realizarComprobacion(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  const sheet = getSheet('Comprobaciones');
  const filas = sheet.getDataRange().getValues();
  const headers = filas[0];

  for (let i = 1; i < filas.length; i++) {
    if (filas[i][headers.indexOf('id')] === data.id) {
      sheet.getRange(i+1, headers.indexOf('badgeComprobador')+1).setValue(usuario.badge);
      sheet.getRange(i+1, headers.indexOf('nombreComprobador')+1).setValue(etiquetaAgente(usuario));
      sheet.getRange(i+1, headers.indexOf('fechaComprobacion')+1).setValue(ahora());
      sheet.getRange(i+1, headers.indexOf('resultado')+1).setValue(data.resultado);
      sheet.getRange(i+1, headers.indexOf('fotoComprobacion')+1).setValue(data.fotoComprobacion || '');
      sheet.getRange(i+1, headers.indexOf('observaciones')+1).setValue(data.observaciones || '');
      sheet.getRange(i+1, headers.indexOf('estado')+1).setValue(data.resultado === 'Resuelto' ? 'Confirmada' : 'No resuelto');

      const incId = filas[i][headers.indexOf('incidenciaId')];

      if (data.resultado === 'Resuelto') {
        addHistorialInterno(incId, 'Incidencia',
          'Comprobación in situ — CONFIRMADO RESUELTO',
          usuario.badge, etiquetaAgente(usuario), data.observaciones || '');
      } else {
        // Reabrir incidencia
        const shInc = getSheet(CONFIG.SHEET_INCIDENCIAS);
        const filasInc = shInc.getDataRange().getValues();
        const headersInc = filasInc[0];
        for (let j = 1; j < filasInc.length; j++) {
          if (filasInc[j][headersInc.indexOf('id')] === incId) {
            shInc.getRange(j+1, headersInc.indexOf('estado')+1).setValue('En gestión');
            break;
          }
        }
        addHistorialInterno(incId, 'Incidencia',
          'Comprobación in situ — NO RESUELTO — Reabierta',
          usuario.badge, etiquetaAgente(usuario),
          'El área comunicó resolución pero el problema persiste. ' + (data.observaciones || ''));
      }
      return { ok: true };
    }
  }
  return { ok: false, error: 'Comprobación no encontrada' };
}

// ── EXPORTACIÓN A EXCEL (CSV) ─────────────────────────────
function exportarIncidencias(data) {
  const usuario = verificarToken(data.token);
  if (!usuario) return { ok: false, error: 'Sesión inválida' };

  let incs = sheetToObjects(getSheet(CONFIG.SHEET_INCIDENCIAS));
  if (data.desde) incs = incs.filter(i => i.fechaRegistro >= data.desde);
  if (data.hasta)  incs = incs.filter(i => i.fechaRegistro <= data.hasta);
  if (data.badge)  incs = incs.filter(i => (i.agentes||'').includes(data.badge));

  const cabeceras = ['ID','Fecha','Calle','Número','Categoría','Tipo','Descripción',
    'Urgencia','Estado','Área Responsable','Tramitación','Agentes',
    'Reincidente','Expediente Gestiona','Fecha Límite','Fecha Cierre'];

  const filas = incs.map(i => [
    i.id, i.fechaRegistro, i.calle, i.numero, i.categoria, i.tipoEspecifico,
    i.descripcion, i.urgencia, i.estado, i.areaResponsable, i.tramitacion,
    i.agentes, i.esReincidente, i.expedienteGestiona, i.fechaPlazo, i.fechaCierre
  ]);

  const csv = [cabeceras, ...filas].map(r =>
    r.map(c => '"' + String(c||'').replace(/"/g,'""') + '"').join(',')
  ).join('\n');

  // Crear archivo en Drive
  const blob = Utilities.newBlob('\uFEFF' + csv, 'text/csv', 'Incidencias_' + new Date().toISOString().slice(0,10) + '.csv');
  const carpeta = getCarpetaInformes();
  const archivo = carpeta.createFile(blob);
  archivo.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  return { ok: true, url: archivo.getUrl(), total: incs.length };
}

// ============================================================
// MIGRACIÓN PUNTUAL: columna intervencionVinculadaId en Incidencias
// ============================================================
// Necesaria para que GestorPartes pueda marcar, al crear una intervención
// vinculada, qué incidencia quedó convertida (ya sea por el traspaso
// automático de _intentarVolcarEnGestorPartes o por la conversión manual
// "Convertir en intervención" que ya existía). Solo añade la columna si no
// existe todavía — no toca ninguna fila de datos. Ejecutar una sola vez
// desde el editor de Apps Script, eligiendo "migrarColumnaIntervencionVinculada".
function migrarColumnaIntervencionVinculada() {
  const sheet = getSheet(CONFIG.SHEET_INCIDENCIAS);
  const cabecera = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  if (cabecera.indexOf('intervencionVinculadaId') === -1) {
    sheet.getRange(1, cabecera.length + 1).setValue('intervencionVinculadaId');
    Logger.log('Columna intervencionVinculadaId añadida a Incidencias (columna ' + (cabecera.length + 1) + ').');
  } else {
    Logger.log('La columna intervencionVinculadaId ya existía en Incidencias, no se toca.');
  }
}
