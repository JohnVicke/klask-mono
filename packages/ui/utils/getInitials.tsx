export const getInitials = (name: string) => {
  const nameSplit = name.split(" ");
  const firstName = nameSplit[0];
  const lastName = nameSplit[1];
  return `${firstName[0]}${lastName[0]}`;
};
