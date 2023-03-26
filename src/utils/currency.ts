export const formatCurrencyBRL = (value: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const toFixedNumber = Number(value.toFixed(2));

  return formatter.format(toFixedNumber);
};
