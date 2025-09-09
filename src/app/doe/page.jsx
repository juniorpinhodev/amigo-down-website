import DoeClient from './DoeClient';

export const metadata = {
  title: 'Doe Agora | Transforme Vidas',
  description: 'Sua doação para a Amigo Down ajuda a manter nossos atendimentos gratuitos e a construir um futuro mais inclusivo. Veja como contribuir via depósito bancário.',
  keywords: ['doar', 'doação', 'ajudar ONG', 'contribuição', 'causa social', 'síndrome de down'],
};

export default function DoePage() {
  return <DoeClient />;
}