const axios = require('axios');

async function test() {
  try {
    console.log('Testing WhatsApp API...');

    // Connect
    const connect = await axios.get('http://localhost:5570/connect/1');
    console.log('Connect:', connect.data);

    // Wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Check status
    const status = await axios.get('http://localhost:5570/status/1');
    console.log('Status:', status.data);

    // Manual ready if needed
    if (status.data.data.status !== 'ready') {
      const manual = await axios.get('http://localhost:5570/manual-ready/1');
      console.log('Manual ready:', manual.data);
    }

    // Send message
    const send = await axios.get('http://localhost:5570/send', {
      params: {
        phone: '6282130697168',
        text: 'Test dari script'
      }
    });
    console.log('Send:', send.data);

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

test(); 