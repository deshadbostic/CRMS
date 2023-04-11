const router =require('./routers/customers.js');
test('has routes', () => {
  const routes = [
    { path: '/customers', method: 'get' },
    { path: '/vehicles', method: 'get' },
    { path: '/rentals', method: 'get' }
  ]

  routes.forEach((route) => {
    const match = router.stack.find(
      (s) => s.route.path === route.path && s.route.methods[route.method]
    );
    expect(match).toBeTruthy();
  });
});