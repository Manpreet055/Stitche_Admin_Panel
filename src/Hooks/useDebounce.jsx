const useDebounce = ({ callBack, delay }) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callBack(...args);
    }, delay);
  };
};

export default useDebounce;
