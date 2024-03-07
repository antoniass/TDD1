export const priceFormat = (price: number, currency: string): string => {
    const roundPrice = (Math.round(price*100)/100).toFixed(2);
    const formatPrice = currency.replace('%PRICE%', roundPrice);
    return `${roundPrice} ${formatPrice} || currency || 'SEK'}`;
};
