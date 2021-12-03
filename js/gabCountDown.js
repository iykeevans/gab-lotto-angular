(function () {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = document.querySelectorAll("#days");
  const hours = document.querySelectorAll("#hours");
  const minutes = document.querySelectorAll("#minutes");
  const seconds = document.querySelectorAll("#seconds");

  //   should go once I figure this out
  //   const countDown = new Date("Jun 23, 2021 15:11:00").getTime();
  //   const now = new Date().getTime();

  //   const distance = countDown - now;

  // $("#gamesModal").modal();

  const getDistance = (dueDate) => {
    const countDown = new Date(dueDate).getTime();
    const now = new Date().getTime();

    return countDown - now;
  };

  const interval = setInterval(function () {
    days.forEach((item) => {
      const dueDate =
        item.parentElement.parentElement.dataset.dueDate ||
        new Date().getTime();
      const distance = getDistance(dueDate);
      item.innerText = Math.floor(distance / day);
    });

    hours.forEach((item) => {
      const dueDate =
        item.parentElement.parentElement.dataset.dueDate ||
        new Date().getTime();
      const distance = getDistance(dueDate);
      item.innerText = Math.floor((distance % day) / hour);
    });

    minutes.forEach((item) => {
      const dueDate =
        item.parentElement.parentElement.dataset.dueDate ||
        new Date().getTime();
      const distance = getDistance(dueDate);
      item.innerText = Math.floor((distance % hour) / minute);
    });

    seconds.forEach((item) => {
      const dueDate =
        item.parentElement.parentElement.dataset.dueDate ||
        new Date().getTime();
      const distance = getDistance(dueDate);
      item.innerText = Math.floor((distance % minute) / second);
    });

    //do something later when date is reached

    if (getDistance("Jun 27, 2021 15:20:00") < 0) {
      $("#gamesModal").modal();

      clearInterval(interval);
    }
    //seconds
  }, 0);
})();
