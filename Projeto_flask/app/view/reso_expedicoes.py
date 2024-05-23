from flask import jsonify
from flask_restful import Resource, reqparse
from app.models.expedicoes import Expedicoes
from datetime import date

argumentos = reqparse.RequestParser()
argumentos.add_argument('nome', type = str)
argumentos.add_argument('data', type=str)
argumentos.add_argument('destino', type = str)
argumentos.add_argument('estado', type = str)
argumentos.add_argument('tripulacao', type = str)
argumentos.add_argument('carga', type = str)
argumentos.add_argument('duracao', type = str)
argumentos.add_argument('custo', type = float)
argumentos.add_argument('status', type = str)

argumentos_update = reqparse.RequestParser()
argumentos_update.add_argument('id', type = int)
argumentos_update.add_argument('nome', type = str)
argumentos_update.add_argument('data', type=str)
argumentos_update.add_argument('destino', type = str)
argumentos_update.add_argument('estado', type = str)
argumentos_update.add_argument('tripulacao', type = str)
argumentos_update.add_argument('carga', type = str)
argumentos_update.add_argument('duracao', type = str)
argumentos_update.add_argument('custo', type = float)
argumentos_update.add_argument('status', type = str)

argumentos_delete = reqparse.RequestParser()
argumentos_delete.add_argument('id', type = int)

class Index(Resource):
    def get(self):
        return jsonify("Bem vindo à aplicação Flask")

class ExpedicoesCreate(Resource):
    def post(self):
        try:
            datas = argumentos.parse_args()
            Expedicoes.save_expedicoes(self, datas['nome'], datas['data'], datas['destino'], datas['estado'], datas['tripulacao'], datas['carga'], datas['duracao'], datas['custo'], datas['status'])
            return {"message": 'Expedição criada com sucesso!'}, 200
        except Exception as e:
            return jsonify({'status': 500, 'msg': f'{e}'}), 500


class ExpedicoesUpdate(Resource):
    def put(self):
        try:
            datas = argumentos_update.parse_args()
            Expedicoes.update_expedicoes(self, datas['id'], datas['nome'], datas['data'], datas['destino'], datas['estado'], datas['tripulacao'], datas['carga'], datas['duracao'], datas['custo'], datas['status'])
            return {"message": 'Expedição atualizada com sucesso!'}, 200    
        except Exception as e:
            return jsonify({'status': 500, 'msg': f'{e}'}), 500
       
class ExpedicoesDelete(Resource):
    def delete(self):
        try:
            datas = argumentos_delete.parse_args()
            Expedicoes.delete_expedicoes(self, datas['id'])
            return {"message": 'Expedição deletada com sucesso!'}, 200  
        except Exception as e:
            return jsonify({'status': 500, 'msg': f'{e}'}), 500
