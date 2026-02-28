import geopandas as gpd
from sqlalchemy import create_engine

# 1. Update your connection string
# Format: postgresql://user:password@host:port/dbname
db_url = "postgresql://postgres.ielqyuxjmixnwxizcffl:HRV8M0C7KGVwPWpK@aws-1-ap-south-1.pooler.supabase.com:6543/postgres"

try:
    # 2. Create the SQLAlchemy engine
    engine = create_engine(db_url)
    
    print("Connecting to Supabase via SQLAlchemy...")

    # 3. Use 'SELECT *' to grab ALL columns (attributes + geometry)
    sql = "SELECT * FROM points_grid"
    
    # 4. Load into GeoDataFrame
    # Ensure 'geom_col' matches the column name in TablePlus
    gdf = gpd.read_postgis(sql, engine, geom_col='geometry')

    # 5. Export to GeoJSON
    # GeoPandas automatically puts all non-geom columns into 'properties'
    output_name = "pts_grid_full_data.geojson"
    gdf.to_file(output_name, driver='GeoJSON')
    
    print(f"Success! Exported {len(gdf)} rows with all attributes to {output_name}")

except Exception as e:
    print(f"Error: {e}")
finally:
    # SQLAlchemy handles connection pooling, so no manual close is strictly needed here
    engine.dispose()