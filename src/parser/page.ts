const url = "https://www.microsoft.com/pl-pl/store/deals/games/xbox";

export const pageUrl = (page: number) => {
  if (page === 0) {
    return url;
  }
  const skip = Math.ceil((page - 1) * 90);
  return `${url}?skipitems=${skip}`;
};
