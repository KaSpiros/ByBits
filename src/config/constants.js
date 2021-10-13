let tokenArray = [];

export const USER_TOKEN = (token) => {
  if (token !== undefined) {
    tokenArray.push(token);
    // console.log(tokenArray[latest_token - 1]);
    const latest_token = tokenArray.length;
    return tokenArray[latest_token - 1];
  }
  const latest_token = tokenArray.length;
  return tokenArray[latest_token - 1];
};
