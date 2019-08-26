export default (value) =>
{
    if (!value)
    {
        return;
    }
    const date = new Date(value.date);
    return date.toLocaleString(['en-US'], { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
};
