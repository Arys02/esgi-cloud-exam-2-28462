module.exports = {
  s3: {
    accessKeyId: process.env.accessKey, // TODO
    secretAccessKey: process.env.secretKey, // TODO
    endpoint: process.env.endpoint, // TODO
    bucket: process.env.bucket, // TODO
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};
