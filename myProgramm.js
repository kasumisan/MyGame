var items = [
  [2, 1, 0],
  [0, 2, 1],
  [1, 0, 2]
];
let user1;
let user2;
function getUserNumber() {
user = parseInt(prompt("Введите ЦЕЛОЕ число от 1 до 3, 0 - Выход"));
 while (isNaN(user)||user<1||user>3) {
   alert ("Ошибка!Повторите ввод");
  user = parseInt(prompt("Введите ЦЕЛОЕ число от 1 до 3, 0 - Выход"));
}
{
   return (user)
   }
}

mes =("Введите ЦЕЛОЕ число от 1 до 3, 0 - Выход");
user1=getUserNumber(user1);
user2=getUserNumber(user2);
user1 = user1 -1;
user2 = user2 -1;  
win = items[user1][user2];
if(win == 0)
{
	mes="выйграл user2";
}
else if(win == 1)
{
	mes="выйграл user1";
}
else
{
	mes="Ничья";
}
alert(mes);
alert("Спасибо за игру, будем ожидать следующую игру");