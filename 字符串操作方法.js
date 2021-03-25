//concat()  用于合并两个或多个数组，此方法不会更改现有的数组，而是返回定义的新数组
    var arr1 = ['a','b','c'];
    var arr2 = ['d','e','f'];
    var arr3 = arr1.concat(arr2);
    console.log(arr3);      //结果输出['a','b','c','d','e','f'];

//splice() 通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容，此方法会改变原数组
    var months = ['Jan','March','April','June'];
    months.splice(1,0,'Feb');   // 1为索引号为1， 0为删除0个元素 ，在索引号为1的地方插入'Feb'
    console.log(months);    //结果为['Jan','Feb',March','April','June']

    months.splice(4,1,'May');   //索引号为4，删除1个元素，添加(插入)'May'
    console.log(months);    //结果为['Jan','Feb','March','April','May']

//substr()  //截取(提取)字符串
    var str1 = '改革春风吹满地';
    console.log(str1.substr(2,2));  //第一个2 是索引号的值为2 从第几个开始    第二个2 是提取几个字符

//replace()     //替换字符      replace('被替换的字符','替换为的字符')  它只会替换第一个字符
    var str = 'andy';
    console.log(str.replace('a','b'));      //bndy
    // 有一个字符串'abciefoxyozzopp'要求把里面所有的o替换为*
    var str2 = 'abciefoxyozzopp';
    while(str2.indexOf(o) !== -1){
        str2 = str2.replace('o','*');
    }
        console.log(str2);
    
//split('分隔符')       //把字符转换为数组  
    //前面我们学过的 join 是把数组转换为字符串，正好相反
    var str3 = 'red,pink,blue';
        console.log(str3.split(','));   //注意要加引号
    var str4 = 'red&pink&blue';
    console.log(str4.split('&'));

//toUpperCase()     //全部字符串转换大写          注意：不能在null或undefind类型上调用
    var sentence = 'The Dog is stupid!';
    console.log(sentence.toUpperCase());    //结果为'THE DOG IS STUPID!'
    
//toLowerCase()     //全部字符串转换为小写    如上类同