#app imports
from datetime import datetime
import json
import jwt
import datetime

from flask import Flask, request, jsonify
from flask_mysqldb import MySQL 
from flask_cors import CORS, cross_origin



#app config
app=Flask(__name__)
CORS(app, support_credentials=True)
app.config['SECRET_KEY']='JWTAuthKey'

#DB config 
app.config['MYSQL_HOST'] = 'database-2.c8hjebd9wtea.ap-south-1.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'admin'
app.config['MYSQL_PASSWORD'] = 'Admin123'
app.config['MYSQL_DB'] = 'TrafficDb' 
mysql = MySQL(app)

#API endpoints
@app.route('/')
def index():
    return jsonify('hello world')

@app.route('/login',methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    data=request.get_json()
    
    username=data.get('username')
    password=data.get('password')
    
    if not username or not password:
        return jsonify({'message':'invalid credentials'}),403
    if password=='admin123' and username=='admin':
        token=jwt.encode({'user':'admin','exp':datetime.datetime.utcnow()+datetime.timedelta(days=30)}, app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({'user':'admin','token': token}),200
    else:
        return jsonify({'message':'invalid credentials'}),403
    
    
@app.route('/isloggedin', methods=['POST'])
def isauth():
    data=request.get_json()
    token= data.get('token')
    valid= jwt.decode(token, app.config['SECRET_KEY'], algorithms="HS256")
    if valid:
        
        return jsonify({'success':True,'data':'admin'}),200
    else:
        return jsonify({'success':False}),403
    
@app.route('/offences/all')
def all():
    try:
        cursor = mysql.connection.cursor()
        #cursor.execute(''' SELECT c.repno, c.dlno, c.regno, d.d_name, c.o_type, c.o_date, c.location, o.fine, c.ispaid FROM driver d, commits c, offences o where d.dlno=c.dlno and o.o_type=c.o_type ''') #Query
        cursor.execute('''select * from all_details ''')
        data=cursor.fetchall()
        return jsonify({'data':data}),200
    except:
        return jsonify({'error':'database error'}),500
    

@app.route('/offences/del/<repno>', methods=['POST'])
def offDel(repno):
    cursor = mysql.connection.cursor()
    cursor.execute(''' DELETE FROM commits WHERE repno=%s''',[repno])
    mysql.connection.commit()
    return jsonify("Deleted!")


#app run config
app.run(host='localhost', port= 5000)
