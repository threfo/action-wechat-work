// const axios = require('axios');

// const payload = {};

// if (process.env.INPUT_MSGTYPE === 'text') {
//   payload.msgtype = process.env.INPUT_MSGTYPE;
//   payload.text = {
//     content: process.env.INPUT_CONTENT,
//   };

// if (process.env.INPUT_MENTIONED_LIST) {
//   let mentioned_list;
//   try {
//     mentioned_list = JSON.parse(process.env.INPUT_MENTIONED_LIST);
//   } catch (error) {
//     mentioned_list = [];
//   }
//   payload.text.mentioned_list = mentioned_list;
// }

// if (process.env.INPUT_MENTIONED_MOBILE_LIST) {
//   let mentioned_mobile_list;
//   try {
//     mentioned_mobile_list = JSON.parse(process.env.INPUT_MENTIONED_MOBILE_LIST);
//   } catch (error) {
//     mentioned_mobile_list = [];
//   }
//   payload.text.mentioned_mobile_list = mentioned_mobile_list;
// }

// if (process.env.INPUT_MSGTYPE === 'markdown') {
//   payload.msgtype = process.env.INPUT_MSGTYPE;
//   payload.markdown = {
//     content: process.env.INPUT_CONTENT,
//   };

// }

// if (process.env.INPUT_MSGTYPE === 'image') {
//   payload.msgtype = process.env.INPUT_MSGTYPE;
//   payload.image = {
//     base64: process.env.INPUT_BASE64,
//     md5: process.env.INPUT_MD5,
//   };
// }

// if (process.env.INPUT_MSGTYPE === 'news') {
//   payload.msgtype = process.env.INPUT_MSGTYPE;
//   let articles;
//   try {
//     articles = JSON.parse(process.env.INPUT_ARTICLES);
//   } catch (error) {
//     articles = [];
//   }
//   payload.news = {
//     articles,
//   };
// }

// if (process.env.INPUT_MSGTYPE === 'file') {
//   payload.msgtype = process.env.INPUT_MSGTYPE;
//   payload.file = {
//     media_id: process.env.INPUT_MEDIA_ID,
//   };
// }


// console.log('The message content in JSON format...');
// console.log(JSON.stringify(payload));
// const url = process.env.WECHAT_WORK_BOT_WEBHOOK;

// (async () => {
//     console.log('Sending message ...');
//     await axios.post(url, JSON.stringify(payload), {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//     console.log('Message sent Success! Shutting down ...');
//     process.exit(0);
// })()
//     .catch((err) => {
//         console.error(err.message);
//         console.error('Message sent error:', err.response.data);
//         process.exit(1);
//     });

const axios = require('axios');

var url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=0c557eb2-5fca-4da0-9756-9ae014f9bbac";
var payload = {"msgtype":"text","text":{"content":"项目：threfo/qywechat-bot-message-template\n分支：main\n构建失败\n\n查看构建状态：https://github.com/threfo/qywechat-bot-message-template/actions/runs/1577926824","mentioned_list":["@all"]}};

(async () => {
    console.log('Sending message ...');
    await axios.post(url, JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    console.log('Message sent Success! Shutting down ...');
    process.exit(0);
})()
    .catch((err) => {
        console.error(err.message);
        console.error('Message sent error:', err.response.data);
        process.exit(1);
    });



