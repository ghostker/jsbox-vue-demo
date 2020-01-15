const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const safari = require("safari");
const port = 8849;

async function build() {
  const config = await require("./build/webpack.dev.conf");
  const options = {
    publicPath: config.output.publicPath
  };

  console.log("Dev web server starting...");
  const server = new WebpackDevServer(webpack(config), options);
  server.listen(port, "localhost", err => {
    if (err) {
      console.log(err);
    }

    const url = `http://localhost:${port}`;
    console.log(`Launching website at: ${url}`);
    safari.open(url);
  });
}

build();