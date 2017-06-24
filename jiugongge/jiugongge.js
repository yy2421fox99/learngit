
function changebg(){
			var chars = ['','box_1','box_2','box_3','box_4','box_5','box_6','box_7','box_8','box_9',];//定义9个格子的数组
			var res = "";//定义单个格子
			var bgColor="";//定义每个格子的background
								for (var j = 0 ; j < 3 ; j++){
										var lena = chars.length-1;//定义数组长度
										var idd = Math.ceil(Math.random()*lena);//随机一个数组索引
										res = chars[idd];//找到要改变background的格子
										chars.splice(idd,1);//删除数组内被找到的元素，且将后面的元素索引提上来
										
							  			for (var i = 0 ; i < 6 ; i++){
											bgColor += "" + Math.round(Math.random() * 9)//随机一个9以内的数

											}//循环6次，形成一个6位数
										document.getElementById(res).style.backgroundColor="#" + bgColor;//改变已经找到格子的background
										bgColor="";//将backgroung重新置空
	
								}//循环3次，找到3个格子分别改变颜色
   }
var int;//定义延时函数s
function click1(){
clearInterval(int);//预先停止，防止多次触发后进入失控
int = setInterval(changebg,500);//每500毫秒执行changebg()	
}
function click2(){
clearInterval(int);//停止执行changebg()
var x = document.getElementsByClassName("box1");//获得所有类名为'box1'组成数组

for (var i = 0 ,len = x.length;i < len ; i++){
    x[i].style.backgroundColor="red";//将每个box1的background设置为红色
	}
 }//遍历数组