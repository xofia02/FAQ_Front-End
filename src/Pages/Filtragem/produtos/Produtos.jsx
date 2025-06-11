import React from "react";
import CategoriaLayout from "../../../components/CategoriaLayout/CategoriaLayout"; 

const perguntas = [
  { pergunta: 'Como comprar um produto?', resposta: 'Acesse a loja e clique em "Adicionar ao carrinho".' },
  { pergunta: 'Posso parcelar?', resposta: 'Sim, em até 12x sem juros no cartão.' },
  { pergunta: 'Como rastrear meu pedido?', resposta: 'Após envio, você receberá um link de rastreio.' },
  { pergunta: 'Qual prazo de entrega?', resposta: 'De 3 a 7 dias úteis, dependendo da região.' },
  { pergunta: 'Posso trocar um produto?', resposta: 'Sim, em até 30 dias com nota fiscal.' },
  { pergunta: 'Tem garantia?', resposta: 'Todos os produtos têm garantia mínima de 1 ano.' },
  { pergunta: 'Quais formas de pagamento aceitam?', resposta: 'Aceitamos cartão de crédito, boleto e Pix.' },
  { pergunta: 'Como cancelar um pedido?', resposta: 'Você pode cancelar pelo site até o momento do envio.' },
  { pergunta: 'Fazem entrega para todo o Brasil?', resposta: 'Sim, entregamos para todas as regiões do país.' },
  { pergunta: 'Posso alterar o endereço após comprar?', resposta: 'Só antes do envio. Entre em contato com o suporte.' },
  { pergunta: 'Tem loja física?', resposta: 'Não, atuamos apenas no ambiente online.' },
  { pergunta: 'Como faço para falar com o suporte?', resposta: 'Nosso chat e e-mail estão disponíveis 24h no site.' },
  { pergunta: 'O produto pode vir com defeito?', resposta: 'Raramente, mas se ocorrer, garantimos a troca ou devolução.' },
  { pergunta: 'Posso comprar sem cadastro?', resposta: 'Sim, mas recomendamos cadastro para facilitar futuras compras.' },
  { pergunta: 'Vocês oferecem descontos?', resposta: 'Sim, confira nossas promoções na página inicial.' },
  { pergunta: 'Como usar um cupom de desconto?', resposta: 'Digite o código no campo indicado no carrinho antes de finalizar a compra.' },
];

const Produtos = () => {
  return (
    <CategoriaLayout
      icone="🛒"
      titulo="Produtos"
      cor="#4CAF50"
      perguntas={perguntas}
    />
  );
};

export default Produtos;