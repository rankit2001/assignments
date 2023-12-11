/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(giveList=[]){
    this.ls = giveList;
  }
  add(todo){
    this.ls.push(todo);
  }
  remove(indexOfTodo){
    if(this.ls.length>indexOfTodo){
      this.ls.splice(indexOfTodo,1);
    }
  }
  update(index, updatedTodo){
    if(this.ls.length>index){
      this.ls[index] = updatedTodo;
    }
    
  }
  getAll(){
    return this.ls;
  }
  get(indexOfTodo){
    if(this.ls.length>indexOfTodo){
      return this.ls[indexOfTodo];
    }
    return null;
  }
  clear(){
    this.ls.splice(0,this.ls.length);
  }
}

module.exports = Todo;
