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
@app.route('/ProportionUrbanPopulationSlums', methods=['GET'])
def get_all_addresses():
    ProportionUrbanPopulationSlums = mongo.db.ProportionUrbanPopulationSlums
    output = []
    list_curs = ProportionUrbanPopulationSlums.find({},{"_id":0}).limit(100)
    
    return dumps(list(list_curs))

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()