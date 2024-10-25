import mysql.connector
from mysql.connector import Error
import os
from dotenv import load_dotenv

load_dotenv()

def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            password=user_password,
            database=db_name
        )
        print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection

# Replace with your own connection details
# or the IP address of your MySQL server
host=os.getenv('HOST')
user=os.getenv('USER_NAME')
password=os.getenv('PASSWORD')
database=os.getenv('DATABASE')



# Create a connection
conn = create_connection(host, user, password, database)

# Don't forget to close the connection
# if conn:
#     conn.close()




def register_user():
    print("hello")