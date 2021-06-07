export const handleFloat = (price) =>
{
    return parseFloat(price.toFixed(2)).toLocaleString(undefined,
        {'minimumFractionDigits':2,'maximumFractionDigits':2})
}

