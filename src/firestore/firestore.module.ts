import { Module, DynamicModule } from '@nestjs/common';
import { Firestore, Settings } from '@google-cloud/firestore';
import {
  FirestoreDatabaseProvider,
  FirestoreOptionsProvider,
  FirestoreCollectionProviders,
} from './firestore.providers';

type FirestoreModuleOptions = {
  imports: any[];
  useFactory: (...args: any[]) => Settings;
  inject: any[];
};

@Module({})
export class FirestoreModule {
  static forRoot(options: FirestoreModuleOptions): DynamicModule {
    const optionsProvider = {
      provide: FirestoreOptionsProvider,
      useFactory: options.useFactory,
      inject: options.inject,
    };
    // const firebaseConfig = {
    //   apiKey: 'AIzaSyAQYDGFf4eGBACB2diQ8xPU3ymMckqJ3IU',
    //   authDomain: 'eucalypto-group.firebaseapp.com',
    //   projectId: 'eucalypto-group',
    //   storageBucket: 'eucalypto-group.appspot.com',
    //   messagingSenderId: '1028125061775',
    //   appId: '1:1028125061775:web:843907bec450a6798bb6fa',
    //   measurementId: 'G-F8FLLPRYKK',
    // };

    // const firebaseConfig = {
    //   type: 'service_account',
    //   project_id: 'eucalypto-group',
    //   'Project Id': 'eucalypto-group',
    //   private_key_id: '4145933be3274852121cbb23125e345ad3e7e963',
    //   private_key:
    //     '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzyBlldHtnisL+\nl4XyaFlS6I6IjVDdojd8pD1AFhAUDz7bJ+4tvLpeCzrYPZ5/mp/lS8diqKH/SV68\n7zIqW4ZGR4oS8/KJGw9yacXa7+/VRSJr3cm+cJosrv06puTJoHCbrmRKNeu6rYkq\nMcHvyJ+W6HIXy9wnTZyPwMNVonDt3zK+1wNegKO1XFeI2V/GEcVcQ4r7AP7PjF1p\nXYdCO+G87Y2uwZM2LdtqI/qhhJ6+mi1llMzWF4dPz9Dr5UQ4HCTkmP0BgrVR36mQ\nqP8raJxd3Uzn7DWI1RB4kAJ7j1IP8Fl+G+IfbfTYywGuoA+XT5XmwOfIzHmUvgUj\nl+Bw/BohAgMBAAECggEABJez1Qx84IrCFh3fIppOzy2OApKq7QEpWLTwtEk7/5SE\nybVt7LDZs/BRKwKmoLeIUSO2mWBvGaXmq9M9HVQ5jGRkdGfTRh8GWH5iOwhjwIzO\nZyIDIYB1N8yqlGEnZA0wrebDvMTphjB2Wg5rrV6bJmWUEI6OdlnnCiG6+7OKyKYe\nwq4pVNN+FeMbM2Dn0wPCLLuQF1ifUxK5bgzNfiw3Tqdm2tPNtWOSBbkRulX0/5dR\nbrV67P9psQmcDe0r62GoHbCp4oORbBb+8dGekaotUNlGWNBA7OifT5JavIBeNW93\ntMFn7k81PVd6JuafSUqzNJZ+eAnd7yaEw+5mcz4g9wKBgQD4CgefT0N3kzYpazSJ\nOg+MiUXF7+IK1906DZXkUs3mXgL6zdr/coRyh2BWJnjeYmG+ewSPKUZLEgnxI+9b\nzc11PUVVdIIzjcq9hzUue8zC7XVTZI/ET3AM+5EdGzhAU38F+u+DGBlt0ivW6mGS\n4Q3647n6sUCey4TZjQtzgYbrYwKBgQC5jT5NGWIwykWdl0ThXWirYczW3yBHEhrd\nNNqKPmbzdvfMnmKiXQprnmyRE0raWRAWHw0SqMOsdfKPs2KGPNr7syJ7W4rMy8py\n22qHuqG9TKLq8pBLOewneCdYVk71UxW8YDdAG4TQixy78xhbpShgH0kGwC6otGi2\nl7iVkAdVqwKBgEXqRdXA+Op2o1ivcEKSDBn4A6PUhym5SRF5DNwr/v/FVh+t8OH6\nPJ0vzZbbB0zf/F89u75Cyx6T+htvnqOI8jXuzGFXEvBHMnOT7gipOsFjP6P+/4s9\nPP9b1b6XkpaHMpHT9rlEDL7o9BSDQnetWkxy7lRcrDNWeJ7949FuHEKzAoGAfHBt\nR+euImqFJZs9Zqbue4Grjq81RnSt74xyxCP1h3JR3bibDai4RFSLGwCFQspYL33D\nlq/4CsFPW3BCsyQ8+HC6v2A1RgOmUkE0wLI5pmqvGEJ04v6FkjLSsDux2HVQLnWY\nmDXcbL/fFW2C+HNbEJvqrcxVfm7/ivVVpXhicuECgYEApMEeMaqtrifvlblX43Yv\nCO7wdIhxoUpC/mdWGjb5QD54dd9MMSXt+QYNHlN5EsEaqD8MiisJiCyKR0PgldRz\nYEVappgN6exO3byYnuW8P+PvB8PDakOwbCa3EjQMJnWWd2usFhrIIavaQawaWUSI\njFL/6qpzacABMVFMGrHLCTA=\n-----END PRIVATE KEY-----\n',
    //   client_email:
    //     'nodebackendapi-eucalypto@eucalypto-group.iam.gserviceaccount.com',
    //   client_id: '114185880593728226796',
    //   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    //   token_uri: 'https://oauth2.googleapis.com/token',
    //   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    //   client_x509_cert_url:
    //     'https://www.googleapis.com/robot/v1/metadata/x509/nodebackendapi-eucalypto%40eucalypto-group.iam.gserviceaccount.com',
    // };

    //     const projectId = this.getProductionProjectId() ||
    //     (await this.getFileProjectId()) ||
    //     (await this.getDefaultServiceProjectId()) ||
    //     (await this.getGCEProjectId()) ||
    //     (await this.getExternalAccountClientProjectId());
    // this._cachedProjectId = projectId;

    const dbProvider = {
      provide: FirestoreDatabaseProvider,
      useFactory: (config) => new Firestore(config),
      inject: [FirestoreOptionsProvider],
    };
    const collectionProviders = FirestoreCollectionProviders.map(
      (providerName) => ({
        provide: providerName,
        useFactory: (db) => db.collection(providerName),
        inject: [FirestoreDatabaseProvider],
      }),
    );
    return {
      global: true,
      module: FirestoreModule,
      imports: options.imports,
      providers: [optionsProvider, dbProvider, ...collectionProviders],
      exports: [dbProvider, ...collectionProviders],
    };
  }
}
