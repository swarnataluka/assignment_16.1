function viewModel(login) { 
    var self = this; 

    self.login = { 
        email: ko.observable(login.email), 
        passwrd: ko.observable(login.password), 
        status: login.status 
    }; 
}; 

var login = { 
    email: 'charlie@gmail.com', 
    passwrd: 'password1234', 
    status: 'Active' 
};