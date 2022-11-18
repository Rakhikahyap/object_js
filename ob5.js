let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5]
var n={}
for (i in list2){
   n[list1[i]]=list2[i]
}
console.log(n);


var a=[1,2,3,4,5]
var b=['a','b','c','d','e']
let m={}
for (i in b){
    m[a[i]]=b[i]
}
console.log(m)