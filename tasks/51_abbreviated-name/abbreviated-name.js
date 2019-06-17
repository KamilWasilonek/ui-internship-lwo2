export function abbreviated(name) {
  name = name.split(' ');
  for (let i = 1; i < name.length; i++) {
    name[i] = name[i].slice(0, 1).toUpperCase() + '.';
  }
  return name.join(' ');
}
