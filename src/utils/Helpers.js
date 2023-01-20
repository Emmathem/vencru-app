export const CurrencySign = '$';
// export const CurrencySign = '₦';

export const formatAmount = (num) => {
    if (num) {
        const initial = parseFloat(num).toFixed(2);
        return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};

export const formatNumber = (num) => {
    if (!num) {
        return;
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const scrollToTop = () => {
    window.scrollTo(0, 0);
};
