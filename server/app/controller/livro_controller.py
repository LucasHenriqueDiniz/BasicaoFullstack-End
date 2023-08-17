from flask import request, make_response
from flask_restx import Resource, marshal
from flask_cors import CORS, cross_origin

from app.util.dto import LivroDto
from app.service.livro_service import (
    editar_livro,
    excluir_livro,
    listar_todas_livros,
    criar_livro,
)

api = LivroDto.api
_livro = LivroDto.livro


@api.route("/")
class Livro(Resource):
    @api.expect(_livro, validate=True)
    def post(self):
        print(request.headers)
        data = request.json
        try:
            response = criar_livro(data)
            return response, 201
        except Exception as e:
            return {"message": str(e)}, 500

    @api.marshal_list_with(_livro, envelope="data")
    def get(self):
        try:
            return listar_todas_livros(), 200
        except Exception as e:
            return {"message": str(e)}, 500

@api.route("/<int:id_livro>")
@api.param("id_livro", "Book ID")
class LivroComId(Resource):
    @api.expect(_livro, validate=True)
    def put(self, id_livro):
        data = request.json
        try:
            response = editar_livro(id_livro, data)
            return response, 200
        except Exception as e:
            return {"message": "An error occurred while updating the book."}, 500

    def delete(self, id_livro):
        try:
            response = excluir_livro(id_livro)
            return response, 204
        except Exception as e:
            return {"message": "An error occurred while deleting the book."}, 500
