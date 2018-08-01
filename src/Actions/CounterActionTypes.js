export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/* Action creators */

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
