const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function (err, conn) {
  conn.createChannel(function (err, ch) {
    const q = 'hello';
    ch.assertQueue(q, {
      durable: true
    });
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q,
      new Buffer.from('Hello World!'), {
        persistent: true
      }
    );
    console.log(" [x] Sent 'Hello World!'");
  });
});