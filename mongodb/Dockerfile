# Base Image
FROM mongo:5.0.9

# ENV
ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD 1234
ENV MONGO_INITDB_DATABASE products

# Add file
ADD ./data/products.js /docker-entrypoint-initdb.d