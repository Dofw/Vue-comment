const obj = {
  boolean: true,
  next: {
    abc: 123,
  },
}

function proxyFunc(obj) {
  if (typeof obj === 'object') {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        obj[key] = proxyFunc(obj[key])
      }
    }
  }

  return new Proxy(obj, {
    set(target, prop, value) {
      console.log('set' + prop)
      Reflect.set(target, prop, value)
    },
    get(target, prop) {
      console.log('get' + prop)
      return Reflect.get(target, prop)
    },
  })
}

