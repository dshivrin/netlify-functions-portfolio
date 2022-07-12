const fetch = require('node-fetch');
const fileType = require('file-type');

exports.handler = async () => {
 
    const file = './Dima Shivrin Resume.docx'
    
    const response = await fetch(file);
    const status_code = response.status
    const content_type = response.headers.get('content-type')
    const buffer = await response.buffer();
    const type = await fileType.fromBuffer(buffer)
  
    return {
      statusCode: status_code,
      headers: {
        'Content-Type': content_type,
      },
      isBase64Encoded: true,
      body: buffer.toString('base64')
    }
  }