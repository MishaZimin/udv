export const formatName = (fullName: string) => {
  const [lastName, firstName] = fullName.split(" ");
  if (!lastName || !firstName) return fullName;
  return `${lastName} ${firstName[0]}.`;
};
