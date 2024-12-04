const firebaseConfig = {
    apiKey: "AIzaSyBRSD7cwLtkoaMoMTFU6u_y88CRGktLydg",
    authDomain: "datos-form-curso-js.firebaseapp.com",
    projectId: "datos-form-curso-js",
    storageBucket: "datos-form-curso-js.appspot.com",
    messagingSenderId: "530484600017",
    appId: "1:530484600017:web:359f04845365fc646439f0",
    measurementId: "G-GG88RL2M4W"
  };
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

    document.getElementById("formulario").addEventListener("submit", (event)=>{
    event.preventDefault()

    //validar nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if (entradaNombre.value.trim() === '') {
      errorNombre.textContent = 'Por favor, introducí tu nombre';
      errorNombre.classList.add('error-message');
    } else {
      errorNombre.textContent = '';
      errorNombre.classList.remove('error-message');
    }

    //validar mail
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico

    if (!emailPattern.test(emailEntrada.value)) {
      emailError.textContent = 'Por favor, introducí un mail válido';
      emailError.classList.add('error-message');
    } else {
      emailError.textContent = '';
      emailError.classList.remove('error-message');
    }   
    
    //validar contra
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
      contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales';
      contrasenaError.classList.add('error-message');
    } else {
      contrasenaError.textContent = '';
      contrasenaError.classList.remove('error-message');
    }
    
    //si es valido enviar
    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
        //BACKEND QUE MANDA EL FORM
        if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
            db.collection("users").add({
              nombre: entradaNombre.value,
              email: emailEntrada.value,
              password: contrasenaEntrada.value
            })
            .then((docRef) => {
              alert('El formulario se ha enviado con éxito', docRef.id);
              document.getElementById('formulario').reset();
            })
            .catch((error) => {
              alert(error);
            });
          }

        alert("Formulario enviado correctamente");
        document.getElementById("formulario").reset();
    }
});