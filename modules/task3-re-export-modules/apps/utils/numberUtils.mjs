//numberUtils.mjs for numeric operations that export various utility functions
export const add = (a, b) => a + b;

export const divide = (a, b) => {
  if (b === 0)  {
    throw new Error("division by zero is not allowed.");
  }
  return a / b;
}