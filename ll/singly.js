function Listnode(data){
    this.data=data;
    this.pointer=null;
}

function List(){
    this.head=null;
    this.length=0;
}

List.prototype.insertAtstart=function(data){
    let node=new Listnode(data);
    node.pointer=this.head;
    this.head=node;
    this.length++;

}
List.prototype.inseertAtlast=function(data){
    let node=new Listnode(data);
    let last=this.head;
    while(last.pointer != null){
        last=last.pointer;
    }
    last.pointer=node;
}
List.prototype.insertAtrandom=function(data,loc){
    let node=new Listnode(data);
    let currnode=this.head;
    let prenode=null;
    let index=this.length;

    while(loc !== index){
        prenode=currnode;
        currnode=currnode.pointer;
        index--;
    }
    node.pointer=currnode;
    prenode.pointer=node;
    this.length++
}
List.prototype.delete=function (data){
    let currnode=this.head;
    let prenode=nul;
    while(data !== currnode.data){
        prenode=currnode;
        currnode=currnode.pointer;
    }
    prenode.pointer=currnode.pointer;
    this.length--;
}
List.prototype.reverse=function(){
    let currnode=this.head;
    let prenode=null;
    let index=this.length;
    while(index !==1){
        prenode=currnode;
        currnode=currnode.pointer;
    }
}
const List1=new List();
List1.insertAtstart(100);
List1.insertAtstart(200);