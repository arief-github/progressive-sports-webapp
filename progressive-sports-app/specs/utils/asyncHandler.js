const asyncHandler = fn => async (...args) => {
  try {
    return await fn(...args);
  } catch (err) {
    console.log(err);
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export {
  asyncHandler,
  sleep
};
