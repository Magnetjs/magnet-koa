magnet-koa
===========

### Usage
Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Koa from 'magnet-koa';
import Server from 'magnet-spdy';

let app = await magnet([
  [Koa, Config],
  Logger,
  Server
]);
// Server running at default port 3000
```
srever/config/koa.js
```
export default {
  // If listen provided then only it will start as server
  port: 3000
}
```
