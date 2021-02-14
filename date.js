const fulldate = new Date();

const day = fulldate.getDay();

const time = fulldate.getTime();

const year = fulldate.getFullYear();

const month = fulldate.getMonth() + 1;

const date = fulldate.getDate() + 1;

const hour = fulldate.getHours();

<<<<<<< HEAD
const tomorrow = () => {
    console.log("Tomorrow is " + year + "/" + month + "/" + date);
  };
  
  tomorrow();

=======
const today = () => {
  console.log("Today is " + year + "/" + month + "/" + date);
};

today();
>>>>>>> adeb063130fc78a4309adcbcb84ef91e80214fa6
