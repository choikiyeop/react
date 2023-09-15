


export const decodeJwtToken = (token: string, type: 'HEADER'|'PAYLOAD'|'SIGNATURE' = 'PAYLOAD') => {
  const tokenArray = token.split('.');

  if (type === 'HEADER') {
    return JSON.parse(decodeURIComponent(atob(tokenArray[0])));
  }
  if (type === 'PAYLOAD') {
    return JSON.parse(decodeURIComponent(atob(tokenArray[1])));
  }
  if (type === 'SIGNATURE') {
    return JSON.parse(decodeURIComponent(atob(tokenArray[2])));
  }
}