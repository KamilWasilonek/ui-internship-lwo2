// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  return this.split(' ')
      .map((item) => {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
      })
      .join('');
};
