export const turboLogger = (message, textcolor = "red") => {
  const textStyle = `color: ${textcolor}`;
  console.log(`%c${message}`, textStyle);
};
