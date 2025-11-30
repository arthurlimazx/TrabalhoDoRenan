const botoesReproduzir = document.querySelectorAll('.reproduzir');

botoesReproduzir.forEach((botao) => {
    botao.addEventListener('click', () => {
      const album= botao.closest('[class^=album]');
      if (album) {
          const lista = album.querySelector('.musicas');
          if (lista) {
          lista.classList.toggle('aberta');
        }
      }
    });
  })
  