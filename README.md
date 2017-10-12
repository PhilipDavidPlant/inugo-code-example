# InugoCodeExample

This is a small app which shows a dynamicly reordering list of available carparks in a series of imaginary parking structures. The list is fetched from the backend via a simple GET api which is polled every 2 seconds for changes (for this kind of behaviour I would usually use web sockets, but I wanted to keep it simple).

The api simply grabs some mock data and randomly removes parks from one of the structures before returning it.

The list has some nice animations that play when the order changes. I was also planning on doing a management screen for adding parking structure but I found I didn't have enough time.

This example project demonstrates a node.js back-end working with an Angular Front end.

Code for the node server is stored under the `/server` folder.
Code for the front-end is stored in the `/src` folder, and most of the components are in the `/src/app` folder.

## Build Everything

Run `npm build` to complie and run both the backend and frontend together. Navigate to `http://localhost:3000`. You will need to rebuild the app if you change any source files

## Complie Front-end

If you just want to build the font-end, run `ng build`. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

