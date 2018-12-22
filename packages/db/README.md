Zombie

- Connection

  - MQTT connection
    - MQTT address
    - Client ID
  - Direct connection
    - IP address
    - Authentication key

- Only one database

  - Makes the most sense
  - Can't provide user with direct SQL access on shared instance
    - The API would be super messy to do right inside modules
    - More portable higher level abstractation

- Database synchronization

  - Download DB from server:

    - Filtered database containing information only accesible to user
      - Maybe use sql permissions (look into it)
      - Database in the client will be the exact same as on the server (albeit with less data)

  - Upload DB to server:
    - Just record the Database API "interactions" that happen, not SQL level statements
      - Advantages
        - client and server can be running different schemas
        - no need for sql statements
      - To upload to server, call remoteSDK with the interactions

* @db
  - standard
* browser-db provider
  - in browser database

## Usage in browser

Add the following to webpack config:

```js
plugins: [
    ..., // any existing plugins that you already have
    new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
        result.request = result.request.replace(/typeorm/, "typeorm/browser");
    }),
    new webpack.ProvidePlugin({
      'window.SQL': 'sql.js/js/sql.js'
    })
],
externals: [
  {fs: true}
]
```