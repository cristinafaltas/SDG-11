from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson.json_util import dumps
app = Flask(__name__)

# Stringa di connessione al DB
app.config["MONGO_URI"] = "mongodb+srv://cristina:lAvXDD4fCIy3KWL8@cluster0.7nx5c.mongodb.net/SDG11?retryWrites=true&w=majority" #Importante qui va specificato il nome del DB

mongo = PyMongo(app)
# Per rispondere alle chiamate cross origin
CORS(app)

# Annotation that allows the function to be hit at the specific URL.
@app.route("/")
# Generic Python functino that returns "Hello world!"
def index():
    return "Hello world!"

# Questa route effettua una find() su tutto il DB (si limita ai primi 100 risultati)
@app.route('/PopulationSlums', methods=['GET'])
def get_PopulationSlums():
    ProportionUrbanPopulationSlums = mongo.db.ProportionUrbanPopulationSlums
    output = []
    list_curs = ProportionUrbanPopulationSlums.find({"Year":2014},{"_id":0,"Entity":1,"Year":1,"Urban population lining in slums":1,"Code":0})
    
    return dumps(list(list_curs))

@app.route('/PublicTransport', methods=['GET'])
def get_PublicTransport():
    ProportionUrbanPopulationPublicTransport = mongo.db.ProportionUrbanPopulationPublicTransport

    output = []
    list_curs = ProportionUrbanPopulationPublicTransport.find({},{"_id":0}).limit(100)
    
    return dumps(list(list_curs))

@app.route('/UrbanArea', methods=['GET'])
def get_UrbanArea():
    ProportionGlobalUrbanArea = mongo.db.ProportionGlobalUrbanArea

    output = []
    list_curs = ProportionGlobalUrbanArea.find({},{"_id":0}).limit(100)
    
    return dumps(list(list_curs))

@app.route('/UrbanPolice', methods=['GET'])
def get_UrbanPolice():
    StagesNationalUrbanPolices = mongo.db.StagesNationalUrbanPolices

    output = []
    list_curs = StagesNationalUrbanPolices.find({},{"_id":0}).limit(100)
    
    return dumps(list(list_curs))

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()