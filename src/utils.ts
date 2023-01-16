export const normalizeCurrency = (value: number) => {
  return value.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const capitalizeFirst = (value: string) => value[0].toUpperCase() + value.substring(1);
