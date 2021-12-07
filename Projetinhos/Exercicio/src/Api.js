const urlpostUser = 'http://localhost:1337/auth/local/register';
const urlGet = 'http://localhost:1337/auth/local';
const urlGetConta = 'http://localhost:1337/contas';

export function USER_GET(body) {
  return {
    url: urlGet,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_POST(body) {
  return {
    url: urlpostUser,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_CONTA(token) {
  return {
    url: urlGetConta,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function POST_CONTA(token, body) {
  return {
    url: urlGetConta,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}
