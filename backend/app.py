from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    # Your data (example)
    data = {
        'message': 'Hello, this is a Flask app!',
        'status': 'success'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)