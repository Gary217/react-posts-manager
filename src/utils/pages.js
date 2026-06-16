export const getPagesCount = (totalPostsCount, pageLimit) => {
  return Math.ceil(totalPostsCount / pageLimit);
};

export const getPagesArr = (totalPagesCount) => {
  let result = [];
  for (let i = 0; i < totalPagesCount; i++) {
    result.push(i + 1);
  }
  return result;
};
