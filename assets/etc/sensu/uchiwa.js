module.exports = {
  sensu: [
    {
      name: 'Sensu',
      host: '127.0.0.1',
      ssl: false,
      port: 4567,
      user: '',
      pass: '',
      path: '',
      timeout: 5000
    }
  ],
  uchiwa: {
    user: '',
    pass: '',
    port: 3000,
    stats: 10,
    refresh: 10000
  }
}
