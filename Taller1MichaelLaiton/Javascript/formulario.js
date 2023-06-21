//reglas de validacion
const number=/^[0-9]{2,15}$/
const text=/[a-zA-ZñÑá-úÁ-Ú]{10,50}/
const email = /\w+@misena\.edu\.co/
// Acceder a los elementos que se van a alterar
const form=document.getElementById("frmvalidacion")
console.log(form)
// const form=document.queerySelector("#frmvalidacion")
//Acceder al valor digitado en los campos vacios 
const doc=form.doc.value
const nombre=form.nombre.value
const apellido=form.apellido.value
const fecha_nacimiento=form.fecha_nacimiento.value
const correo_electronico=form.correo_electronico.value
const password=form.password.value
const comprobar_password=form.comprobar_password.value   




 const f1=document.querySelector("#campoNoDoc .feedback")
 const f2=document.querySelector("#campoNombre .feedback")
 const f3=document.querySelector("#campoApell .feedback")
 const f4=document.querySelector("#campoFechaNac .feedback")
 const f5=document.querySelector("#campoCorreo .feedback")
 const f6=document.querySelector("#campoPass .feedback")
 const f7=document.querySelector("#campoComprPass .feedback")
    form.doc.addEventListener('input',(e)=>{
    e.preventDefault()

console.log("Se esta escribiendo sobre le input")
    
    if(number.test(e.target.value)){
    //reglas pasa la validacion
    form.doc.setAttribute("class","succes")
    f1.style.setProperty("visibility","hidden")
    f1.style.setProperty("opacity","0")
    flag=false
}else{
    //relga NO pasa la validacion
    
    form.doc.setAttribute("class","error")
    f1.textContent="Solo se pueden ingresar valores numericos superiores a 1 hasta el 9"
    f1.style.setProperty("visibility","visible")
    f1.style.setProperty("opacity","1")
}


}) 

form.addEventListener ("submit",(e)=>{
        e.preventDefault()

        if(form.doc.value==null ||form.doc.value==0 || flag==false){
            alert("Debe ingresar el numero de documento")
            form.doc.focus()
            form.doc.setAttribute("class","error")
        }
        else{
            form.submit()
        }
})

//Nombre
form.nombre.addEventListener('input',(e)=>{
    e.preventDefault()

console.log("Se esta escribiendo sobre le input")
    
    if(text.test(e.target.value)){
    //reglas pasa la validacion
    form.nombre.setAttribute("class","succes")
    f2.style.setProperty("visibility","hidden")
    f2.style.setProperty("opacity","0")
    flag=false
}else{
    //relga NO pasa la validacion
    
    form.nombre.setAttribute("class","error")
    f2.textContent="Debe ingresar nombre   con caracter numerico superior de 1 a 9//Sin ningun espacio"
    f2.style.setProperty("visibility","visible")
    f2.style.setProperty("opacity","1")
}


}) 

form.addEventListener ("submit",(e)=>{
        e.preventDefault()

        if(form.nombre.value==null ||form.nombre.value==0 || flag==false){
            alert("Debe ingresar el nombre ")
            form.nombre.focus()
            form.nombre.setAttribute("class","error")
        }
        else{
            form.submit()
        }
})


//apellido
form.apellido.addEventListener('input',(e)=>{
    e.preventDefault()

console.log("Se esta escribiendo sobre le input")
    
    if(text.test(e.target.value)){
    //reglas pasa la validacion
    form.apellido.setAttribute("class","succes")
    f3.style.setProperty("visibility","hidden")
    f3.style.setProperty("opacity","0")
    flag=false
}else{
    //relga NO pasa la validacion
    
    form.apellido.setAttribute("class","error")
    f3.textContent="Debe ingresar apellido con caracter numerico superior de 1 a 9//Sin ningun espacio"
    f3.style.setProperty("visibility","visible")
    f3.style.setProperty("opacity","1")
}


}) 

form.addEventListener ("submit",(e)=>{
        e.preventDefault()

        if(form.apellido.value==null ||form.apellido.value==0 || flag==false){
            alert("Debe ingresar el apellido ")
            form.apellido.focus()
            form.apellido.setAttribute("class","error")
        }
        else{
            form.submit()
        }
})

//Fecha 

form.fecha_nacimiento.addEventListener('input', e => {
  e.preventDefault();

  console.log("se está escribiendo");
  const fecha_nacimiento = new Date(e.target.value);
  const hoy = new Date();
  const edad = hoy.getFullYear() - fecha_nacimiento.getFullYear();

  if (edad < 18) {
    f4.textContent = "Debes ser mayor de 18 años para registrarte"
    f4.style.setProperty("visibility", "visible")
    f4.style.setProperty("opacity", "1")
  } else {
    form.FeNa.setAttribute("class", "success")
    f4.style.setProperty("visibility", "hidden")
    f4.style.setProperty("opacity", "0")
  }
});

if (form.fecha_nacimiento.value == null || form.fecha_nacimiento.value == 0 || new Date(form.FeNa.value) < 18) {
    alert("Debe ingresar una fecha de nacimiento válida (debes ser mayor de 18 años para registrarte)");
    form.FeNa.focus();
    form.FeNa.setAttribute("class", "error");
    flag = false;
  }

//correo
form.Pass.addEventListener('input', e => {
  e.preventDefault();

  console.log("se está escribiendo");
  if (passwordd.test(e.target.value)) {
    form.Pass.setAttribute("class","success")
    f5.style.setProperty("visibility","hidden")
    f5.style.setProperty("opacity","0")
  } else {
    form.Pass.setAttribute("class","error")
    f5.textContent="Ingrese mínimo una letra mayúscula, un número, una letra minúscula y un caracter especial(mínimo 10 caracteres)"
    f5.style.setProperty("visibility","visible")
    f5.style.setProperty("opacity","1")
  }
}
) 

if (form.Coel.value == null || form.Coel.value == 0 || !email.test(form.Coel.value)) {
    alert("Debe ingresar un correo válido (solo se aceptan correos @misena.edu.co)");
    form.Coel.focus();
    form.Coel.setAttribute("class", "error");
    flag = false;
  }

//contraseña

form.password.addEventListener('input',(e)=>{
    e.preventDefault()

console.log("Se esta escribiendo sobre le input")
    
    if(text.test(e.target.value)){
    //reglas pasa la validacion
    form.password.setAttribute("class","succes")
    f6.style.setProperty("visibility","hidden")
    f6.style.setProperty("opacity","0")
    flag=false
}else{
    //relga NO pasa la validacion
    
    form.password.setAttribute("class","error")
    f6.textContent="Ingresa caracteres numericos y palabras superiores a 1 "
    f6.style.setProperty("visibility","visible")
    f6.style.setProperty("opacity","1")
}


}) 

form.addEventListener ("submit",(e)=>{
        e.preventDefault()

        if(form.password.value==null ||form.password.value==0 || flag==false){
            alert("Debes ingresar la contraseña")
            form.password.focus()
            form.password.setAttribute("class","error")
        }
        else{
            form.submit()
        }
})

//comprovacion de contraseña


form.comprobar_password.addEventListener('input',(e)=>{
    e.preventDefault()

console.log("Se esta escribiendo sobre le input")
    
    if(text.test(e.target.value)){
    //reglas pasa la validacion
    form.comprobar_password.setAttribute("class","succes")
    f7.style.setProperty("visibility","hidden")
    f7.style.setProperty("opacity","0")
    flag=false
}else{
    //relga NO pasa la validacion
    
    form.comprobar_password.setAttribute("class","error")
    f7.textContent="Ingresa la misma contraseña "
    f7.style.setProperty("visibility","visible")
    f7.style.setProperty("opacity","1")
}


}) 

form.addEventListener ("submit",(e)=>{
        e.preventDefault()

        if(form.comprobar_password.value==null ||form.comprobar_password.value==0 || flag==false){
            alert("la contraseña no concide ")
            form.comprobar_password.focus()
            form.comprobar_password.setAttribute("class","error")
        }
        else{
            form.submit()
        }
})
