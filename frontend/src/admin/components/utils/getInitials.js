export default function getInitials(name, surname) {
  const initials = name.charAt(0) + surname.charAt(0);
  return initials;
}
