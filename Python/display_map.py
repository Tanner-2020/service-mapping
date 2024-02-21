import geopandas as gpd
import pandas as pd
import webbrowser

def show_map(df):
    minnesota = gpd.read_file('./shapefiles/shp_bdry_zip_code_tabulation_areas/zip_code_tabulation_areas.shp')
    df = df.rename(columns={"zip_code" : "ZCTA5CE20"})
    df = df.astype({'ZCTA5CE20' : 'string'})
    df = df.astype({'primary_serv' : 'string'})
    df = df.astype({'secondary_serv' : 'string'})
    df = df.astype({'tertiary_serv' : 'string'})
    print(df.loc[44])
    minnesota = minnesota.merge(df, on="ZCTA5CE20", how='left')
    print(minnesota.loc[minnesota['ZCTA5CE20'] == '55044'])
    minnesota = minnesota.to_crs("EPSG:3395")
    map = minnesota.explore()
    output_path = r"./mn_zip.html"
    map.save(output_path)
    webbrowser.open('mn_zip.html')