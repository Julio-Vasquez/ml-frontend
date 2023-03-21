type props = {
    value: number
    decimalLength?: number
    location: string
    currency: string
}

export const formatPrice = ({
    value,
    decimalLength = 2,
    location,
    currency,
}: props) => {
    const formatter = new Intl.NumberFormat(location, {
        style: 'currency',
        currency,
        currencySign: 'standard',
        minimumFractionDigits: decimalLength,
        maximumFractionDigits: decimalLength,
    })

    return formatter.format(value)
}
