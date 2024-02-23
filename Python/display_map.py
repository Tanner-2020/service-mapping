import geopandas as gpd
import pandas as pd
import webbrowser

def show_map(df):
    # Import shapefile of Minnesota zip codes
    minnesota = gpd.read_file('./shapefiles/shp_bdry_zip_code_tabulation_areas/zip_code_tabulation_areas.shp')

    # Removes codes of geoDataframe outside of accepted range
    minnesota = minnesota[minnesota['ZCTA5CE20'] >= '55000']
    minnesota = minnesota[minnesota['ZCTA5CE20'] < '57000']

    # Merges the DataFrame of servicer rankings and geographic data.
    print('Merging geographic data and servicing data.')
    df = df.rename(columns={"zip_code" : "ZCTA5CE20"})
    df = df.astype({'ZCTA5CE20' : 'string'})
    df = df.astype({'primary_serv' : 'string'})
    df = df.astype({'secondary_serv' : 'string'})
    df = df.astype({'tertiary_serv' : 'string'})
    minnesota = minnesota.merge(df, on="ZCTA5CE20", how='left')

    # Renames columns and formats output
    minnesota = minnesota.rename(columns={"ZCTA5CE20" : "Zip Code", "primary_serv" : "Primary Servicer", "secondary_serv" : "Secondary Servicer", "tertiary_serv" : 'Tertiary Servicer'})
    print("Geographic servicing data created.")
    minnesota = minnesota.to_crs("EPSG:3395")
    map = minnesota.explore(tooltip=['Zip Code', 'Primary Servicer', 'Secondary Servicer', 'Tertiary Servicer'])
    
    # Saves output and opens it in the web browser
    output_path = r"./mn_zip.html"
    map.save(output_path)
    print('Interactive map saved.')
    webbrowser.open('mn_zip.html')