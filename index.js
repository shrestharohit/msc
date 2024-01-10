let totalWorkHours = 0;
const perHourPay = 13;
const USDConversionRate = 132.5;

function calculateSum() {
  const value = document.getElementById("input-value").value;
  if (!value) return;
  const cleanValue = value.replaceAll("hrs\n", "");
  const replaceAllLineBreaks = cleanValue.replaceAll("hrs", "");
  const valueArray = replaceAllLineBreaks.split("");
  totalWorkHours = valueArray.reduce((a, b) => Number(a) + Number(b));
  setHTMLContents();
}

function setHTMLContents() {
  const totalHoursWorked = document.getElementById("total-hours-worked");
  const totalIncomeUsd = document.getElementById("total-income-usd");
  const totalincomeNrs = document.getElementById("total-income-nrs");
  totalHoursWorked.innerText = `${totalWorkHours}hrs`;
  totalIncomeUsd.innerText = `$${totalWorkHours * perHourPay}`;
  totalincomeNrs.innerText = `NRs.${
    totalWorkHours * perHourPay * USDConversionRate
  }`;
}
