import os
import warnings
import mysql.connector
import pandas as pd
from dotenv import load_dotenv

def main():

    warnings.filterwarnings('ignore')
    load_dotenv()
    try:
        # Connection to database
        cnx = mysql.connector.connect(user=os.getenv('user'), password=os.getenv('password'),
                                      host=os.getenv('host'), database=os.getenv('database'))
        print("Successfully connected to " + os.getenv('database') + ".")

        # Query of database employee data
        query = """SELECT * FROM employees"""
        employee_df = pd.read_sql(query, cnx)
        employee_df = employee_df.set_index('employee_id')
        print(employee_df)

        # Query of database location data
        query = """SELECT * FROM location_zips"""
        location_df = pd.read_sql(query, cnx)
        location_df = location_df.set_index('zip_code')
        print(location_df)
        
        # Close database connection
        cnx.close()
        print("Successfully closed database connection to " + os.getenv('database') + ".")
    except Exception as e:
        print("Failed to connect to Sql database. Exception: " + e)

if __name__ == "__main__":
    main()