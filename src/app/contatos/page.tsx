import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entre em Contato Conosco',
  description: 'Fale com a Associação Amigo Down. Encontre nosso telefone, e-mail, endereço em São José/SC e horário de funcionamento. Estamos prontos para ajudar.',
  keywords: ['contato', 'telefone', 'endereço', 'e-mail', 'localização', 'São José', 'Santa Catarina'],
}
import ContatosClient from './ContatosClient';

export default function ContatosPage() {
  return <ContatosClient />;
}
