const formatData = {};

formatData.price = function(price, currency, locale, fractionDigits = 2) {
  if (!price) {
    price = 0;
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits
  }).format(price);
};

export default function(ctx, inject) {
  inject('formatData', formatData);
}
