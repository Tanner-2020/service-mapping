import pandas as pd

def getEmployee(con):
    # Query of database employee data
    query = """SELECT * FROM employees"""
    employee_df = pd.read_sql(query, con)
    employee_df = employee_df.set_index('employee_id')
    return employee_df

def getLocation(con):
    # Query of database location data
    query = """SELECT * FROM location_zips"""
    location_df = pd.read_sql(query, con)
    location_df = location_df.set_index('zip_code')
    return location_df

def getService(con):
    # Query of database service history data
    query = """SELECT * FROM service_history"""
    service_df = pd.read_sql(query, con)
    service_df = service_df.set_index('service_id')
    return service_df

def getFacility(con):
    # Query of database facility locations data
    query = """SELECT * FROM facility_locations"""
    facility_df = pd.read_sql(query, con)
    facility_df = facility_df.set_index('facility_id')
    return facility_df