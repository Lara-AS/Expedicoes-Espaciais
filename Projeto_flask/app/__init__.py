from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///expedicoes.db"
db = SQLAlchemy(app)

from app.models.expedicoes import Expedicoes
with app.app_context():
    db.create_all()
   
from app.view.reso_expedicoes import Index, ExpedicoesCreate, ExpedicoesUpdate, ExpedicoesDelete
api.add_resource(Index, '/')
api.add_resource(ExpedicoesCreate, '/criar')
api.add_resource(ExpedicoesUpdate, '/atualizar')
api.add_resource(ExpedicoesDelete, '/deletar')
