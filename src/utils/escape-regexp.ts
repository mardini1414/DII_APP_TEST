export const escapeRegExp = (value: string) => {
  const regex = /[.*+?^${}()|[\]\\]/g;

  return value.replace(regex, "\\$&");
};
