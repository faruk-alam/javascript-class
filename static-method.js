// class Test
// {
//   static display()
//   {
//     return "static method is invoked"
//   }
// }
// console.log(Test.display());
class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
  static display()  
  {  
    return "static method is invoked again"  
  }  
}  
console.log(Test.display());