import router from 'index';

test('has routes', () => {
  const routes = [
    { path: '/customer', method: 'get' },
    { path: '/vehicle', method: 'get' },
    { path: '/reset', method: 'get' }
  ]

  routes.forEach((route) => {
    const match = router.stack.find(
      (s) => s.route.path === route.path && s.route.methods[route.method]
    );
    expect(match).toBeTruthy();
  });
});