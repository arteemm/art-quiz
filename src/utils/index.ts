type request = {
  resource: string | null | undefined;
  id: string | null | undefined;
  verb: string | null | undefined;
};

export const Utils = {
  parseRequestURL: (): request => {
    const url: string = location.hash.slice(1).toLowerCase() || '/';

    const r: string[] = url.split('/');

    const request: request = {
      resource: null,
      id: null,
      verb: null,
    };

    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];

    return request;
  },

  sleep: (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),
};

export default Utils;
