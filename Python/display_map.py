import geopandas as gpd
import matplotlib.pyplot as plt
import pandas as pd

def show_map():
    minnesota = gpd.read_file('./shapefiles/shp_bdry_zip_code_tabulation_areas/zip_code_tabulation_areas.shp')
    minnesota = minnesota.to_crs("EPSG:3395")
    minnesota.boundary.plot()
    plt.show()

show_map()