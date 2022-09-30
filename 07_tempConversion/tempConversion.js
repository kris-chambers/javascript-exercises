const ftoc = function(ftemp) {
let ctemp = ((5/9) * (ftemp - 32));
return Math.round(ctemp * 10) / 10;
};

const ctof = function(ctemp) {
let ftemp = (((9/5) * ctemp) + 32);
return Math.round(ftemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
