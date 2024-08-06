// import { Client } from 'whatsapp-web.js'
// // import qrcode from 'qrcode-terminal'

// import qrcode from 'qrcode';

// const client = new Client();

// // Listen for the 'qr' event and generate a URL instead of a QR code
// client.on('qr', async (qr) => {
//     // Generate a URL for the QR code
//     try {
//         const url = await qrcode.toDataURL(qr);
//         console.log(`URL RECEIVED: ${url}`);
//         // You can now share this URL or display it in your application
//         // Users will need to open this URL in their default browser to complete the setup
//     } catch (err) {
//         console.error(err);
//     }
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.on('message', msg => {
//     console.log('Received message:', msg.body);
// });

// client.on('message', msg => {
//     if (msg.body.toLowerCase() === '!ping') {
//         msg.reply('pong');
//     }
//     console.log('Message body:', msg.body);
// });

// client.initialize();

import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client();

client.on('qr', (qr) => {
    // Log the URL of the QR code
    const directUrl = `https://web.whatsapp.com/send?phone=918770529849`;
    console.log('Direct WhatsApp URL:', directUrl);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    console.log('msg: ', msg.body);
});

client.on('message', msg => {
    if (msg.body === '!ping') {
        msg.reply('pong');
    }
    console.log('msg.body: ', msg.body);
});

client.initialize();

