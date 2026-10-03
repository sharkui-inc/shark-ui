export const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");
