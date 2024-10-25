from flask import Flask, render_template, request, redirect, session
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv
import bcrypt

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('CONNNECTION_URI')

# create insatance of database 
db = SQLAlchemy(app)

app.secret_key = os.getenv('SECRET_KEY')

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    def __init__(self,username,email,password):
        self.username = username 
        self.email = email
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    def checkPassword(self,password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))

with app.app_context():
    db.create_all()






@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/login", methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        # find the user by email. beacuse email is unique
        user = User.query.filter_by(email=email).first()


        if user and user.checkPassword(password):
        # if some data present in 'user' variable
            session['username'] = user.username
            session['email'] = user.email

            return redirect('/account')
        else :
            render_template("login.html",error='Invalid user')

    return render_template("login.html")



@app.route("/register", methods=['GET','POST'])
def register():
    if request.method == 'POST':

        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')

        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect('/login') 


    return render_template("register.html")

@app.route("/temp")
def temp():
    return render_template("temp.html")


@app.route("/flower")
def flower():
    return render_template("flower.html")

@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")

@app.route("/agriculture-products")
def product():
    return render_template("product.html")

@app.route("/cart")
def cart():
    return render_template("cart.html")


@app.route('/contact', methods=['GET','POST'])
def contact():
    if request.method == 'POST':
        pass

    return render_template("contact.html")


@app.route("/account")
def account():
   
    # if session['name']:
        # if session has name then only this block of code execute
        user = User.query.filter_by(email=session['email']).first()
        return render_template("account.html", user=user)
    # else : 
        # return redirect("/login")


@app.route("/logout")
def logout():
    session.pop('email', None)
    session.pop('username', None)
    return redirect('/')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)