export function insert(str, strToInsert = '', position = 0) {
  return str.slice(0, position) + strToInsert + str.slice(position);
}
