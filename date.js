const fulldate = new Date();

const day = fulldate.getDay();

const time = fulldate.getTime();

const year = fulldate.getFullYear();

const month = fulldate.getMonth();

const date = fulldate.getDate();

const hour = fulldate.getHours();

const today = () => {
  console.log("Today is " + year + "/" + month + "/" + date);
};

today();
