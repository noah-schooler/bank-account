function BankInfo(name, initialDeposit) {
  this.name = name,
  this.balance = initialDeposit
}

function BankAccount() {
  this.bankInfo = [];
  // this.currentId = 0;
}

BankAccount.prototype.addInfo = function(info) {
  // BankInfo.id = this.assignId();
  this.bankInfo.push(info);
}

// BankAccount.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

BankAccount.prototype.depositing = function(deposit) {
  var account = this.bankInfo[0];
  return account.balance = deposit + account.balance;
}

BankAccount.prototype.withdrawing = function(withdraw) {
  var account = this.bankInfo[0];
  return account.balance = account.balance - withdraw;
}

var newAccount = new BankAccount;

$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initiaDeposit = parseInt($("#initialDeposit").val());
    var initialInfo = new BankInfo(name, initiaDeposit);
    newAccount.addInfo(initialInfo);

    $(".output").show();
    $("#nameOutput").text(initialInfo.name);
    $("#balanceOutput").text(initialInfo.balance);
  });

    $("#depositButton").click(function(){
      var deposit = parseInt($("#deposit").val());
      $("#balanceOutput").text(newAccount.depositing(deposit));
    });

    $("#withdrawButton").click(function(){
      var withdrawal = parseInt($("#withdrawal").val());
      $("#balanceOutput").text(newAccount.withdrawing(withdrawal));
    });
});
