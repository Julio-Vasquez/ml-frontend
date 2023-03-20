type dateFormat = {
    date: Date
    includeTime?: boolean
    location: string
}

const basicDateConfig: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
}

const basicDateConfigWithTime: Intl.DateTimeFormatOptions = {
    ...basicDateConfig,
    hour: 'numeric',
    minute: 'numeric',
}

export const formatDate = ({ date, includeTime = false, location }: dateFormat) =>
    new Date(date).toLocaleDateString(
        location,
        includeTime ? { ...basicDateConfigWithTime } : { ...basicDateConfig }
    )
