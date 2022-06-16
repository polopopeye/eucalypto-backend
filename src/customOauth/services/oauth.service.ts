import { Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import axios from 'axios';
import config from 'src/config';

@Injectable()
export class OauthService {
  private configuration: ConfigType<typeof config> = config();

  async linkedInOauth(body: any): Promise<any> {
    const { authCode, uri } = body;

    const client_id = this.configuration.linkedin.clientID;
    const client_secret = this.configuration.linkedin.clientSecret;

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
