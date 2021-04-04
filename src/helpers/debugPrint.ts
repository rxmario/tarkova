// eslint-disable-next-line import/prefer-default-export
export function debugPrint(message?: any, ...optionalParams: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${message}`, optionalParams);
  }
}
