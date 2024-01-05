from flask import Flask, jsonify, request, render_template
from pymongo import MongoClient
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb+srv://jjpark57:baseball101@cluster0.hsrsouo.mongodb.net/')  # Replace with your MongoDB connection string
db = client['mytrip']  # Replace 'your_database' with your database name
collection = db['flask']  # Replace 'your_collection' with your collection name


@app.route('/login', methods=['POST'])
def index():
    # Perform MongoDB operations here using 'collection'
    if request.method == 'POST':
        data = request.json  # Get the JSON data sent from React Native
        name = data.get('name')
        age = data.get('age')

        # Update MongoDB with the received data
        # For example, insert data into a collection

        # collection.delete_one({'name': name, 'age': age})
        collection.insert_one({'name': name, 'age': age})
        
        return 'Data received and updated in MongoDB!'

@app.route('/', methods=['GET'])
def hello():
    # Your data (example)
    data = {
        'message': 'Hello, this is a Flask app!',
        'status': 'success'
    }
    return jsonify(data)



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)