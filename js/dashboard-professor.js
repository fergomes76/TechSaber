/* ==========================================================
   dashboard-professor.js
   Comportamentos interativos da página do professor
   ========================================================== */


/* ----------------------------------------------------------
   1. MODAL – ABRIR / FECHAR
   O <dialog> nativo já trata foco e teclado (ESC fecha).
   As funções abaixo são chamadas pelos botões no HTML.
   ---------------------------------------------------------- */

/** Abre o modal de adicionar atividade */
function abrirModal() {
  document.getElementById('modal-add').showModal();
}

/** Fecha o modal de adicionar atividade */
function fecharModal() {
  document.getElementById('modal-add').close();
}


/* ----------------------------------------------------------
   2. FORMULÁRIO – PUBLICAR ATIVIDADE
   Ao submeter, adiciona uma nova linha na tabela e
   fecha o modal. (Substituir pelo fetch() da API futuramente)
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  const form   = document.getElementById('form-atividade');
  const tabela = document.querySelector('.activities-table tbody');

  form.addEventListener('submit', (evento) => {
    evento.preventDefault(); /* impede o comportamento padrão do <dialog> */

    /* Lê os valores dos campos */
    const titulo = document.getElementById('input-titulo').value.trim();
    const turma  = document.getElementById('input-turma').value;
    const hoje   = new Date().toLocaleDateString('pt-BR');

    /* Cria uma nova linha na tabela */
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${titulo}</td>
      <td>${turma}</td>
      <td>${hoje}</td>
      <td><span class="badge badge--active">Ativo</span></td>
      <td><button class="btn-action">Acesse</button></td>
    `;

    tabela.prepend(linha); /* insere no topo da tabela */

    /* Limpa o formulário e fecha o modal */
    form.reset();
    fecharModal();
  });

});