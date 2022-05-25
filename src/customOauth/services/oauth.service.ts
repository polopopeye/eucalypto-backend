import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OauthService {
  async linkedInOauth(body: any): Promise<any> {
    const { authCode, uri } = body;
    console.log(
      '🚀 ~ file: oauth.service.ts ~ line 8 ~ OauthService ~ linkedInOauth ~ authCode',
      authCode,
    );

    const client_id = '78pctji9v7v9at';
    const client_secret = 'l4MIWCdavd2KcE49';

    const response = {
      email: {},
      profile: {},
    };

    await axios({
      method: 'post',
      params: {
        code: authCode,
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: uri,
        grant_type: 'authorization_code',
      },
      url: 'https://www.linkedin.com/uas/oauth2/accessToken',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(async (res) => {
        const accesToken = res.data.access_token;

        if (accesToken) {
          await axios
            .get(
              'https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))',
              {
                headers: {
                  Authorization: `Bearer ${accesToken}`,
                },
              },
            )
            .then((res) => {
              response.email = res.data;

              console.log(
                '🚀 ~ file: oauth.service.ts ~ line 50 ~ OauthService ~ .then ~ res.data',
                res.data,
              );

              return res.data;
            })
            .catch((err) => {
              console.log(
                '🚀 ~ file: oauth.service.ts ~ line 48 ~ OauthService ~ .then ~ err',
                err,
              );
            });

          await axios
            .get('https://api.linkedin.com/v2/me', {
              headers: {
                Authorization: `Bearer ${accesToken}`,
              },
            })
            .then((res) => {
              response.profile = res.data;
              console.log(
                '🚀 ~ file: oauth.service.ts ~ line 50 ~ OauthService ~ .then ~ res.data',
                res.data,
              );

              return res.data;
            })
            .catch((err) => {
              console.log(
                '🚀 ~ file: oauth.service.ts ~ line 48 ~ OauthService ~ .then ~ err',
                err,
              );
            });
        } else {
          console.log(
            '🚀 ~ file: oauth.service.ts ~ line 57 ~ OauthService ~ .then ~ empty',
          );
        }
      })
      .catch((err) => {
        console.log(
          '🚀 ~ file: oauth.service.ts ~ line 55 ~ OauthService ~ linkedInOauth ~ err',
          err,
        );
      });

    return response;
  }
}
