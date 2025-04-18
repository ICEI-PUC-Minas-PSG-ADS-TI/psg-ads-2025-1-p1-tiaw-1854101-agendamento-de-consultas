# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>


## Personas



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... | QUERO/PRECISO ... `FUNCIONALIDADE`                                        | PARA ... `MOTIVO/VALOR`                |
|-----------|---------------------------------------------------------------------------|----------------------------------------|
|PACIENTE   | Quero receber notificações sobre consultas e horários de medicação        | Para obter atendimento sem precisar me deslocar.                |
|PACIENTE   | Quero ter a opção de realizar consultas online com médicos                |Para evitar esquecimentos e seguir corretamente meu tratamento   |
|MÉDICO     | Quero visualizar o histórico de atendimentos e exames dos meus pacientes  |Para acompanhar a recuperação do paciente com cautela e proximidade.   |
|MÉDICO     | Quero lembretes de manter contato com pacientes de casos mais graves      |Para tomar decisões mais assertivas no diagnóstico e tratamento. |

## Requisitos
### Requisitos Funcionais

Código	|Requisito	                                       |Prioridade |
|-------|--------------------------------------------------|-----------|
#RF001	|Deve permitir cadastro de usuários	               | Alta
#RF002	|Deve permitir o Login do usuário já existente	   | Alta
#RF003	|Deve permitir editar o perfil de Usuário	       | Média
#RF004	|"Troca de mensagens, via ChatBot"	               | Média
#RF005	|Troca de mensagens com profissional	           | Alta
#RF006	|Permitir cancelar agendamento	                   | Alta
#RF007	|Permitir fazer mais de um agendamento	           | Alta
#RF008	|Visualizar o Histórico de Consultas	           | Média
#RF009	|Permitir ver perfis dos profissionais que atuam   | Média
#RF010	|Permitir pacientes avaliarem profissionais	       | Baixa
#RF011	|Permitir profissionais auxiliarem os pacientes	   | Alta
#RF012	|Permitir pagamentos online	                       | Alta
#RF013	|Busca por um determinado profissional	           | Média
#RF014	|Busca por um determinado tipo de consulta	       | Média



### Requisitos não Funcionais

Código	| Requisito	                                                            | Prioridade  |
|-------|-----------------------------------------------------------------------|-------------|
#RNF001	| Em que ser acessível em Navegador	                                    |  Alta
#RNF002	| O APP tem que sempre estar funcionando	                            |  Alta
#RNF003	| Os Feedbacks devem ser registrados	                                |  Média
#RNF004	| Deve ser acessível para usuários sem conhecimento técnico	            |  Média
#RNF005	| Fornecer suporte de Idiomas	                                        |  Baixa
#RNF006	| Deve funcionar com conexão baixa	                                    |  Alta
#RNF007	| Deve ser possível iniciar sem acesso à Internet	                    |  Média
#RNF008	| Deve haver proteção de dados	                                        |  Alta
#RNF009	| Não deve ocupar muito armazenamento	                                |  Média
#RNF010	| O sistema deve operar mesmo com falhas	                            |  Alta
#RNF011	| O usuário deve ter a possibilidade de alterar temas e notificações	|  Baixa
#RNF012	| Deve permitir o backup de arquivos	                                |  Média
#RNF013	| "Deve ser feito em HTML, CSS, JS"	                                    |  Baixa
#RNF014	| Deve permitir atualização sem perda de dados	                        |  Alta

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

