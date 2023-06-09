function calculate(birthDate) {
            birthDate = new Date(birthDate);
            currentDate = new Date();
                    let years = (currentDate.getFullYear() - birthDate.getFullYear());
                    let x=document.getElementById("age")
        
            return x.innerHTML='Age is : '+years+'.'
  }