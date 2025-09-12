const useDebounce = ({ callBack, delay }) => {
  let timer; // <-- Move timer here, outside the returned function
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callBack(...args);
    }, delay);
  };
};

export default useDebounce;