const caixa = document.getElementById('caixa');
const seletor = document.getElementById('unidade');

seletor.addEventListener('change', () => {
  const unidade = seletor.value;

  // Remove todas as classes de unidade
  caixa.classList.remove('px', 'em', 'rem', 'percent', 'vwvh');

  // Adiciona a classe correspondente
  caixa.classList.add(unidade);
});
