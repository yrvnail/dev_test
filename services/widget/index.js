const SERVICE_NAME = 'widget'

const broker = require('../../broker')(SERVICE_NAME)

broker.createService({
  name: SERVICE_NAME,
  actions: {
    random: {
      rest: {
        method: 'GET',
      },
      async handler(ctx) {
        console.log(`${SERVICE_NAME} call getRandom`)

        const response = await broker
          .call('randomizer.getNum', ctx)
          .then((res) => console.log(res))
          .catch((err) => console.error('Unable to get randomized number', err))
        return response
      },
    },
  },
})

broker.start()
