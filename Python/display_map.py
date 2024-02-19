import geopandas as gpd
import pandas as pd
import webbrowser

def show_map():
    minnesota = gpd.read_file('./shapefiles/shp_bdry_zip_code_tabulation_areas/zip_code_tabulation_areas.shp')
    minnesota = minnesota.to_crs("EPSG:3395")
    map = minnesota.explore()
    output_path = r"./mn_zip.html"
    map.save(output_path)
    webbrowser.open('mn_zip.html')

show_map()