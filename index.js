import { create, router as _router, defaults } from " http://localhost:3000/bookings"; // importing json-server library
const server = create();
const router = _router("db.json");
const middlewares = defaults();
const port = process.env.PORT || 3000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port, '0.0.0.0', () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});