// 1108. Defanging an IP Address

let defangIPaddr = function (address) {
  let defAdr = "";

  for (let key of address) {
    if (key == ".") {
      defAdr += "[.]";
    } else {
      defAdr += key;
    }
  }

  return defAdr;
};

const ip = "255.100.50.0";

console.log(typeof defangIPaddr(ip));

// или

let defangIPaddr2 = function (address) {
  return address.split(".").join("[.]");
};
