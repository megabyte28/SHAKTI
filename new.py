import psycopg2
import geopandas as gpd

# 1. Database Connection String (Direct from Supabase)
# format: "dbname='postgres' user='postgres' host='db.[REF].supabase.co' password='[PASS]' port='5432'"
conn_string = "dbname='postgres' user='postgres' host='' password='YOUR_PASSWORD' port='5432'"

try:
    # 2. Establish connection via psycopg2
    with psycopg2.connect(conn_string) as conn:
        print("Connected to Supabase...")
        
        # 3. Load the table into GeoPandas
        # 'SELECT *' grabs all your non-geometric data automatically
        sql = "SELECT * FROM pts_grid"
        
        # geom_col must match your column name in TablePlus (usually 'geom' or 'geometry')
        gdf = gpd.read_postgis(sql, conn, geom_col='geom')

    # 4. Save to GeoJSON
    output_name = "pts_grid_full_data.geojson"
    gdf.to_file(output_name, driver='GeoJSON')
    
    print(f"Success! Exported {len(gdf)} rows with all attributes to {output_name}")

except Exception as e:
    print(f"Connection or Export Error: {e}")