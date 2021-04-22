const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  };

  test('Testar Upper case', done => {
      uppercase('Ola, tudo bem', srt).toBe('OLA, TUDO BEM');
      done();
  })