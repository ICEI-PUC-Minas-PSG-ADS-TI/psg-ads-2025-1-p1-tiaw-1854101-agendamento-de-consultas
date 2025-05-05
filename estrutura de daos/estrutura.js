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
}`