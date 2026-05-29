/* ==========================================================
   dashboard-admin.js
   Comportamentos interativos do painel do administrador
   ========================================================== */


/* ----------------------------------------------------------
   1. SISTEMA DE ABAS
   Alterna entre Visão Geral, Professores e Alunos
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  /**
   * Ativa a aba cujo data-tab === id do painel alvo.
   * @param {string} alvo - valor do atributo data-tab
   */
  function ativarAba(alvo) {
    /* Atualiza botões */
    tabBtns.forEach(btn => {
      btn.setAttribute('aria-selected', btn.dataset.tab === alvo ? 'true' : 'false');
    });

    /* Exibe apenas o painel correspondente */
    tabPanels.forEach(painel => {
      painel.classList.toggle('active', painel.id === alvo);
    });
  }

  /* Listener em cada botão de aba */
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => ativarAba(btn.dataset.tab));
  });

  /* Abre a primeira aba por padrão */
  ativarAba('aba-visao-geral');


  /* --------------------------------------------------------
     2. ANIMAÇÃO DAS BARRAS DE PROGRESSO
     Aguarda 100ms para disparar a transição CSS (width: 0 → valor real)
     -------------------------------------------------------- */
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(barra => {
      barra.style.width = barra.dataset.valor;
    });
  }, 100);

});