from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/register")
def register():
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


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)