from flask import Flask, jsonify, request, render_template
from pymongo import MongoClient
from flask_cors import CORS
import requests


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
        

        # Update MongoDB with the received data
        # For example, insert data into a collection

        # collection.delete_one({'name': name, 'age': age})
        collection.insert_one({'name': name, 'age': age})
        
        return 'Data received and updated in MongoDB!'


@app.route('/user', methods=['POST'])
def receive_token():
    if request.method == 'POST':
        data = request.get_json()
        grant_type = data.get('grant_type')
        client_id = data.get('client_id')
        redirect_uri = data.get('redirect_uri')
        code = data.get('code')

        print(data)
        grant_type = data['grant_type']
        client_id = data['client_id']
        redirect_uri = data['redirect_uri']
        code = data['code']
        print(grant_type)
        
        # Perform actions with the received access token (e.g., store it in the database)
        # Example: Store the access token in the database
        # Your code here...

        token_response = requests.post(
            f'https://kauth.kakao.com/oauth/token',
            data={
                'grant_type': 'authorization_code',
                'client_id': client_id,
                'redirect_uri': redirect_uri,
                'code': code
            },
            headers={"content-type": "application/x-www-form-urlencoded"}
        )

        kakao_token = token_response.json()
        print(kakao_token)

        headers= {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
            'Authorization': 'Bearer ' + str(kakao_token['access_token'])
        }


        user_url = "https://kapi.kakao.com/v2/user/me"

        response = requests.request("GET", user_url, headers=headers)
        print("This is the response")
        print(response.text)

        

        
    
        

        return jsonify(response.text)

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