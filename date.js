const fulldate = new Date();

const day = fulldate.getDay();

const time = fulldate.getTime();

const year = fulldate.getFullYear();

const month = fulldate.getMonth() + 1;

const date = fulldate.getDate() + 1;

const hour = fulldate.getHours();

const tomorrow = () => {
  console.log("Tomorrow is " + year + "/" + month + "/" + date);
};

const today = () => {
  console.log("Today is " + year + "/" + month + "/" + date);
};

const a = () => {
  console.log("this a funciton");
};

const b = () => {
  console.log("b");
};

const c = () => {
  console.log("c");
};

const d = () => {
  console.log("d");
};
