function serUsername(username){
    // complex DB calls
    this.username=username
    console.log("called");
    
}

function create_user(username,email,password)
{
    // serUsername(username)
    serUsername.call(this,username)
    this.email=email
    this.password = password
}

const chai=new create_user("mlbb","mlbb@mail.com","123mlbb")
console.log(chai);
