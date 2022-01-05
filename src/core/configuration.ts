import { environment } from './../environments/environment';

export const Configuration = {
  MobydickApiUrl: environment.MobydickApiUrl,
  dateFormat: 'MMM d, yyyy, HH:mm',
  NeshanWebMapApiToken: environment.NeshanWebMapApiToken,
  NeshanServiceApiToken: environment.NeshanServiceApiToken,
  NeshanUri: environment.NeshanUri,
  ApiHeader: {
    ['Authorization']: '',
  },
};
