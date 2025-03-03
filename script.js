import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";  

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para cargar las incidencias en una tabla
async function cargarIncidencias() {
    const incidenciasRef = collection(db, "incidencias");  // Nombre de la colección en Firestore
    const querySnapshot = await getDocs(incidenciasRef);
    
    let tableBody = document.getElementById("tablaIncidencias");
    tableBody.innerHTML = "";  // Limpiar tabla antes de actualizar

    querySnapshot.forEach((doc) => {
        let data = doc.data();
        let fila = `
            <tr>
                <td>${data.matricula}</td>
                <td>${data.kilometraje}</td>
                <td>${data.estadoMecanica}</td>
                <td>${data.estadoCarroceria}</td>
                <td>${data.estadoNeumaticos}</td>
                <td><a href="${data.fotoVehiculo}" target="_blank">Ver Foto</a></td>
            </tr>
        `;
        tableBody.innerHTML += fila;
    });
}

// Llamar a la función cuando se cargue la página
window.onload = cargarIncidencias;
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";  

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para cargar las incidencias en una tabla
async function cargarIncidencias() {
    const incidenciasRef = collection(db, "incidencias");  // Nombre de la colección en Firestore
    const querySnapshot = await getDocs(incidenciasRef);
    
    let tableBody = document.getElementById("tablaIncidencias");
    tableBody.innerHTML = "";  // Limpiar tabla antes de actualizar

    querySnapshot.forEach((doc) => {
        let data = doc.data();
        let fila = `
            <tr>
                <td>${data.matricula}</td>
                <td>${data.kilometraje}</td>
                <td>${data.estadoMecanica}</td>
                <td>${data.estadoCarroceria}</td>
                <td>${data.estadoNeumaticos}</td>
                <td><a href="${data.fotoVehiculo}" target="_blank">Ver Foto</a></td>
            </tr>
        `;
        tableBody.innerHTML += fila;
    });
}

// Llamar a la función cuando se cargue la página
window.onload = cargarIncidencias;
