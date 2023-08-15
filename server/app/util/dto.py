from flask_restx import Namespace, fields

class LivroDto:
    api = Namespace('livro', description='Book')
    livro = api.model('livro', {
        'id': fields.Integer(),
        'titulo': fields.String(required=True),
        'autor': fields.String(required=True),
        'ano_publicacao': fields.Integer(required=True),
        'categoria': fields.String(required=True),
        'capa': fields.String(),
        'sinopse': fields.String()
    })
