import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    google: {
      projectID: process.env.GOOGLE_PROJECT_ID,
      credFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    },
    redis: {
      url: process.env.REDIS_URL,
      cacheTimeOut: process.env.REDIS_CACHE_TIME_SECONDS,
    },
    email: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    front: {
      host: process.env.FRONT_HOST,
    },
  };
});
