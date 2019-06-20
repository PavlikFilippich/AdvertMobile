$(document).on('click', '#login', function(){
    const password =  $("input[name=password]").val();
    const username = $("input[name=username]").val();
   

    $(function() {
        $.getJSON('user.json', function(data) {
          $.each(data.users, function(i, item) {
            const dbUser = item.login;
            const dbPass = item.password;
            if(dbUser == username && dbPass == password ){
                document.location.href = 'catalog.html'   ;
            }
            else {
                alert("Неправильний логін або пароль")
            }
          });
        });
      });  
   
});