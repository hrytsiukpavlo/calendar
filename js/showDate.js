const showDate = () => {
    document.querySelector('.calendar-date p').innerHTML =
        new Date().toDateString();
};

export default showDate;
