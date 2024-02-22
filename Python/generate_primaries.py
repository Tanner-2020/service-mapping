import os
import warnings
import mysql.connector
import pandas as pd
from dotenv import load_dotenv
from data_processing import *
from display_map import *

def main():

    warnings.filterwarnings('ignore')
    load_dotenv()
    df_data=[]

    try:
        # Connection to database
        cnx = mysql.connector.connect(user=os.getenv('user'), password=os.getenv('password'),
                                      host=os.getenv('host'), database=os.getenv('database'))
        print("Successfully connected to " + os.getenv('database') + ".")

        service_df = getService(cnx)
        facility_df = getFacility(cnx)
        location_df = getLocation(cnx)
        employee_df = getEmployee(cnx)

        for zip in range(55000, 57000):
            # Create combined table to find zip code primary service member
            primary_df = pd.merge(service_df, facility_df, on="facility_id")
            primary_df = pd.merge(primary_df, location_df, on='zip_code')
            primary_df = pd.merge(primary_df, employee_df, on="employee_id")
            primary_df = primary_df[primary_df['isActive'] == 1]
            primary_df = primary_df[primary_df['zip_code'] == zip]
            primary_df = primary_df.drop(['facility_name', 'facility_id', 'company', 'service_date', 'county', 'country', 'phone_number', 'email_addr', 'isActive','city','state','zip_code'], axis=1)
            primary_df = primary_df.groupby(['employee_id'])['employee_id'].count().reset_index(name='count')
            primary_df = primary_df.sort_values(['count'], ascending=False)
            primary_df = primary_df.iloc[:3]
            primary_df = primary_df.merge(employee_df, on='employee_id')


            # Creates row for zip code and adds it to DataFrame.
            data = getTopServicers(zip, primary_df)
            df_data.append(data)
        
        # Generates map
        servicers_df = pd.DataFrame(df_data, columns=['zip_code', 'primary_serv', 'secondary_serv', 'tertiary_serv'])
        print('Servicer information collected.')
        show_map(servicers_df)


        # Close database connection
        cnx.close()
        print("Successfully closed database connection to " + os.getenv('database') + ".")
    except Exception as e:
        print("Error: " + e)

if __name__ == "__main__":
    main()