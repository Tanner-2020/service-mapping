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

        # Query of database service history data
        query = """SELECT * FROM service_history"""
        service_df = pd.read_sql(query, cnx)
        service_df = service_df.set_index('service_id')
        print(service_df)

        # Query of database facility locations data
        query = """SELECT * FROM facility_locations"""
        facility_df = pd.read_sql(query, cnx)
        facility_df = facility_df.set_index('facility_id')
        print(facility_df)

        # Create combined table to find zip code primary service member
        primary_df = pd.merge(service_df, facility_df, on="facility_id")
        primary_df = pd.merge(primary_df, location_df, on='zip_code')
        primary_df = pd.merge(primary_df, employee_df, on="employee_id")
        primary_df = primary_df[primary_df['isActive'] == 1]
        primary_df = primary_df[primary_df['zip_code'] == int(os.getenv('zip'))]
        primary_df = primary_df.drop(['facility_name', 'facility_id', 'company', 'service_date', 'county', 'country', 'phone_number', 'email_addr', 'isActive','city','state'], axis=1)
        primary_df = primary_df.groupby(['first_name', 'last_name', 'zip_code'])['employee_id'].count().reset_index(name='count')
        primary_df = primary_df.sort_values('count', ascending=False)
        print(primary_df)

        # Close database connection
        cnx.close()
        print("Successfully closed database connection to " + os.getenv('database') + ".")
    except Exception as e:
        print("Error: " + e)

if __name__ == "__main__":
    main()