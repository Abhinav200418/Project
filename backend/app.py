from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

with app.app_context():
    db.create_all()

@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    if not name or not email:
        return jsonify({'error': 'Missing fields'}), 400
    try:
        user = User(name=name, email=email)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'User added'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
