export function useElementClasses(className = '') {
  return {
    value: className || '',
    add: function(className, condition = true) {
      if (condition && className) {
        this.value = `${this.value} ${className}`.trim();
      }
    },
  };
}