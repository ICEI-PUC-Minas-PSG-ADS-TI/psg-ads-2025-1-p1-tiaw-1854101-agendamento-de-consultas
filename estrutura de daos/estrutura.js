//Victor,Charles,Lucas, Fernando, MAtheus, Kailany//

`Usuario={
  "id": "uuid",
  "nome": "string",
  "email": "string",
  "senha_hash": "string",
  "tipo": "enum('paciente', 'profissional', 'admin')",
  "telefone": "string",
  "foto_perfil_url": "string",
  "especialidade_id": "uuid (nullable, se for paciente)",
  "avaliacao_media": "float (calculada a partir das avaliações)",
  "criado_em": "timestamp",
  "atualizado_em": "timestamp"
}


Agendamento={
  "id": "uuid",
  "nome": "string",
  "email": "string",
  "senha_hash": "string",
  "tipo": "enum('paciente', 'profissional', 'admin')",
  "telefone": "string",
  "foto_perfil_url": "string",
  "especialidade_id": "uuid (nullable, se for paciente)",
  "avaliacao_media": "float (calculada a partir das avaliações)",
  "criado_em": "timestamp",
  "atualizado_em": "timestamp"
}


Mensagem{
  "id": "uuid",
  "remetente_id": "uuid",
  "destinatario_id": "uuid",
  "conteudo": "text",
  "tipo": "enum('chat-bot', 'direta')",
  "data_envio": "timestamp",
  "lida": "boolean"
}

CategoriaConsulta (ou Especialidade)
{
  "id": "uuid",
  "nome": "string",
  "descricao": "text",
  "criado_em": "timestamp"
}

 LocalAtendimento

  "id": "uuid",
  "nome_clinica": "string",
  "endereco": {
    "rua": "string",
    "numero": "string",
    "bairro": "string",
    "cidade": "string",
    "estado": "string",
    "cep": "string"
  },
  "telefone": "string",
  "profissionais_ids": ["array de uuid"],
  "ativo": "boolean"
}

Notificacao
{
  "id": "uuid",
  "usuario_id": "uuid",
  "tipo": "enum('sistema', 'mensagem', 'agendamento')",
  "titulo": "string",
  "mensagem": "text",
  "lida": "boolean",
  "data_envio": "timestamp"
}`
