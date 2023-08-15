from app import db

class Livro(db.Model):
    """ Book Model for storing book details """
    __tablename__ = "livro"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    titulo = db.Column(db.String(255), unique=True, nullable=False)
    autor = db.Column(db.String(255), nullable=False)
    ano_publicacao = db.Column(db.Integer, nullable=False)
    categoria = db.Column(db.String(255), nullable=False)
    capa = db.Column(db.String(255), nullable=True)
    sinopse = db.Column(db.String(255), nullable=True)

    def __init__(self, titulo, autor, ano_publicacao, categoria, capa, sinopse):
        self.titulo = titulo
        self.autor = autor
        self.ano_publicacao = ano_publicacao
        self.categoria = categoria
        self.capa = capa
        self.sinopse = sinopse
        
    def __repr__(self):
        return "<Livro '{}'>".format(self.titulo)
