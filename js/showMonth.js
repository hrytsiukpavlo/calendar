const showMonth = (months, date) => {
    document.querySelector('.calendar-date h1').innerHTML =
        months[date.getMonth()];
};

export default showMonth;
