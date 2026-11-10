// Funções e listas compartilhadas pelas duas páginas.
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const TALENTOS = [
  "Artes visuais",
  "Música",
  "Audiovisual",
  "Teatro",
  "Contação de Histórias",
  "Mediação de leitura/Clube do livro",
  "Mediação de bate-papo",
  "Mestre de cerimônias",
  "Dança",
  "Outro",
];

const CLASSIFICACOES = [
  "Livre",
  "0-6 anos",
  "7-12 anos",
  "12-14 anos",
  "maiores de 14 anos",
  "maiores de 16 anos",
  "maiores de 18 anos",
];

// Protege o site: transforma qualquer texto digitado pelos autores em texto
// "inofensivo" antes de mostrar na tela.
function esc(texto) {
  return String(texto ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

// Só aceita links que começam com http:// ou https://
function linkSeguro(url) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:" ? u.href : null;
  } catch (e) {
    return null;
  }
}

function configuracaoPendente() {
  return SUPABASE_URL.startsWith("COLE_AQUI") || SUPABASE_ANON_KEY.startsWith("COLE_AQUI");
}
