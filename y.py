# import geopandas as gpd
# from sqlalchemy import create_engine
# db_url = "postgresql://postgres.ielqyuxjmixnwxizcffl:HRV8M0C7KGVwPWpK@aws-1-ap-south-1.pooler.supabase.com:6543/postgres"
# try:
    
#     engine = create_engine(db_url)
    
#     print("Connecting to Supabase via SQLAlchemy...")
#     sql = "SELECT * FROM points_grid_new"
#     gdf = gpd.read_postgis(sql, engine, geom_col='geometry')
#     output_name = "pts_grid_full_data_new.geojson"
#     gdf.to_file(output_name, driver='GeoJSON')
    
#     print(f"Success! Exported {len(gdf)} rows with all attributes to {output_name}")

# except Exception as e:
#      print(f"Error: {e}")
# finally:

#  engine.dispose()