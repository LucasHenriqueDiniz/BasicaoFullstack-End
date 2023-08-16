import logging
import os
from flask import Flask
from flask_cors import CORS

from app.extensions import db, migrate, api

from app.controller.livro_controller import api as livro_ns

class testConfig():
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), 'flask_boilerplate_main.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
def create_app():
    app = Flask(__name__)
    app.config.from_object(testConfig)
    
    logging.getLogger('flask_cors').level = logging.DEBUG

    CORS(app)
    db.init_app(app)
    migrate.init_app(app, db)
    api.init_app(app)
    
    api.add_namespace(livro_ns, path="/livro")
    return app