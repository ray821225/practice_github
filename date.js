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

const spellName = (name) => {
  console.log("My name is " + name);
};

spellName("Ray");

const b = () => {
  console.log("b");
};
