import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export function LandingPage() {
  return (
    <div className="mx-auto w-[90%] max-w-2xl text-primary-foreground">
      <Accordion type="single" collapsible className="mt-6 w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Saber mais sobre o projeto</AccordionTrigger>
          <AccordionContent>
            <h1 className="mb-4 text-3xl font-bold">
              Bem-vindo ao TransfereAí!
            </h1>
            <p className="mb-4">
              TransfereAí! é um projeto voltado para demonstrar e aplicar
              conceitos de
              <strong> procedures functions</strong> no contexto de
              desenvolvimento de sistemas. As transações financeiras são usadas
              como um exemplo prático, pois ilustram bem a importância de
              garantir a segurança, eficiência e consistência ao processar
              operações no banco de dados.
            </p>
            <p>
              As <strong>procedures functions</strong> são funções armazenadas
              diretamente no banco de dados, responsáveis por gerenciar
              múltiplas operações de maneira organizada. Elas asseguram que as
              ações ocorram de forma atômica — ou seja, tudo ou nada — o que é
              fundamental quando se trata de operações sensíveis como as
              financeiras. Caso haja algum erro durante o processo, a procedure
              reverte automaticamente a operação, garantindo que o banco de
              dados permaneça consistente e sem falhas.
            </p>
            <p className="mt-4">
              Além disso, o projeto implementa validações detalhadas para
              garantir que as informações recebidas estejam corretas antes de
              processar qualquer operação. Isso inclui verificar se os dados dos
              usuários são válidos e se as regras de negócio (como evitar que o
              usuário envie dinheiro para ele mesmo) estão sendo seguidas. Tudo
              isso visa reforçar o aprendizado sobre como utilizar{' '}
              <strong>procedures</strong> para lidar com cenários reais.
            </p>
            <p className="mt-4">
              Em essência, o TransfereAí! serve como um laboratório para
              explorar o uso de <strong>procedures functions</strong>,
              destacando sua importância na construção de aplicações robustas e
              seguras.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
