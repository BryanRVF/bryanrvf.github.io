<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Características</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<style>
/* Reset de márgenes y padding para consistencia entre navegadores */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

/* Sección de características */
.features-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
}

.feature-box {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    width: 22%; /* Ancho de cada caja para que entren 4 en una fila */
    text-align: center;
    transition: all 0.3s ease;
    height: 250px; /* Altura fija para mantener uniformidad entre las cajas */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.feature-box:hover {
    border-color: #ffaf00; /* Color dorado en el borde al pasar el mouse */
}

.icon img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
    color: #555;
    flex-grow: 1;
}

/* Responsive Design */

/* Ajustes para pantallas medianas (tabletas y dispositivos de tamaño similar) */
@media (max-width: 768px) {
    .features-section {
        flex-wrap: wrap; /* Permite que las cajas se muevan a la siguiente línea si no hay espacio */
    }

    .feature-box {
        width: 45%; /* Ancho del 45% para que entren dos cajas por fila */
        margin-bottom: 20px; /* Espacio entre filas */
    }
}

/* Ajustes para pantallas pequeñas (teléfonos móviles y dispositivos de tamaño similar) */
@media (max-width: 480px) {
    .feature-box {
        width: 100%; /* Ancho del 100% para que cada caja ocupe toda la fila */
    }

    .icon img {
        width: 40px; /* Reducir el tamaño del icono */
        height: 40px;
    }

    h3 {
        font-size: 18px; /* Reducir el tamaño de la fuente del título */
    }

    p {
        font-size: 14px; /* Reducir el tamaño de la fuente del texto */
    }
}

</style>
    <!-- Sección de características -->
    <section class="features-section">
        <div class="feature-box">
            <div class="icon">
                <img src="https://img.icons8.com/ios-filled/50/000000/approval.png" alt="Calidad Icono">
            </div>
            <h3>CALIDAD</h3>
            <p>Ofrecemos la mejor calidad en todos y cada uno de nuestros productos e instalación de los mismos.</p>
        </div>
        <div class="feature-box">
            <div class="icon">
                <img src="https://img.icons8.com/ios-filled/50/ffaf00/sorting-options.png" alt="Variedad Icono">
            </div>
            <h3>VARIEDAD</h3>
            <p>Tenemos mucha variedad para que encuentre lo que desea aquí y podamos complacer todos los gustos de nuestros clientes.</p>
        </div>
        <div class="feature-box">
            <div class="icon">
                <img src="https://img.icons8.com/ios-filled/50/000000/fire-element.png" alt="Tendencia Icono">
            </div>
            <h3>TENDENCIA</h3>
            <p>Contamos con lo último en modelos de Mármol, Granito, Cuarzo y Melamina que hay en el mercado. Todos los puede encontrar aquí.</p>
        </div>
        <div class="feature-box">
            <div class="icon">
                <img src="https://img.icons8.com/ios-filled/50/000000/security-shield-green.png" alt="Garantía Icono">
            </div>
            <h3>GARANTÍA</h3>
            <p>Todos nuestros productos cuentan con garantía real de fabricación y una adicional de tienda, para la tranquilidad y comodidad de nuestros clientes.</p>
        </div>
    </section>

</body>
</html>
