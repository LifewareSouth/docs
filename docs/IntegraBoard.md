---
id: intro
title: Manual de Usuario INTEGRABOARD®
slug: /
---

## Contenido

1. Aspectos Generales del sistema a considerar
   - 1.1. Requerimientos técnicos
      - 1.1.1. Software
      - 1.1.2. Hardware
   - 1.2. Instalación del software
      - 1.2.1. Registro y Primer Uso
2. IntegraBoard - Panel de Navegación
   - 2.1. Tableros
      - 2.1.1. Funcionalidades de Tablero
         - Listar Tableros
         - Filtro de búsqueda por nombre
         - Limpiar filtro
         - Crear nuevo tablero
         - Asignar Tablero
         - Eliminar Tablero
         - Exportar/Importar
   - 2.2. Modificar Tablero
      - 2.2.1. Visualización de tablero
         - Mostrar pictogramas
         - Asignar
         - Crear pictograma
      - 2.2.2. Asignar
         - Filtro por nombre
         - Filtro por categoría
         - Limpiar filtro
         - Listar pictogramas
         - Usar selección
         - Cancelar
      - 2.2.3. Index
         - Crear pictograma
         - Editar pictograma
         - Quitar pictograma
      - 2.2.4. Propiedades del tablero
         - Nombre
         - Tipo de tablero
         - Filas y Columnas
         - Pictograma que representa al tablero
         - Guardar tablero
   - 2.3. Pictogramas
      - 2.3.1. Funcionalidades de Pictogramas
         - Filtro de búsqueda por nombre
         - Filtro de búsqueda por categoría
         - Estado del sonido
         - Listar Pictogramas
         - Seleccionar pictograma
         - Crear nuevo pictograma
         - Borrar pictograma
         - Exportar/Importar
   - 2.4. Modificar Pictograma
      - 2.4.1. General
         - Sección
         - Vista Previa
         - Nombre Pictograma
         - Texto
         - Sonido
         - Visualización Categoría
         - Filtro
         - Imágenes
         - Guardar
         - Cancelar
3. IntegraBoard Player
   - 3.1. Iniciar Player
      - 3.1.1. Selección de tableros
         - Listar tableros
         - Seleccionar Tableros
   - 3.2. Tableros
      - 3.2.1. Tableros
         - Visualización de pictogramas
         - Accionar pictograma
         - Indicador del tablero
      - 3.2.2. Decir algo
         - Modo escucha / apagado
         - Reproductor de frases
         - Borrar
         - Salir
4. Casos de uso cotidiano
   - 4.1. Preparación
   - 4.2. Crear Pictogramas
   - 4.3. Crear Tablero
   - 4.4. Seleccionar tableros disponibles
   - 4.5. Usar Pictogramas
   - 4.6. Usar Simulador de voz


## 1. Aspectos Generales del sistema a considerar

### 1.1. Requerimientos técnicos

#### 1.1.1. ​ Software:


      - Windows 10.
      - .NET Framework 4.5.2.

#### 1.1.2. ​ Hardware:


      - Procesador 2.4 GHz o superior.
      - 2 GB de memoria RAM o superior.
      - 50 MB de espacio disponible en disco duro.

### 1.2. Instalación del software

Para instalar _IntegraBoard_ en su computador, solo debe abrir el archivo “Setup.exe”
previamente descargado u obtenido en un USB. El instalador lo guiará a través del
proceso de instalación, comprobará dependencias y creará accesos directos en el
escritorio y el menú de inicio dando el primer uso de manera inmediata.

#### 1.2.1. ​ Registro y Primer Uso

Para ejecutar ​ IntegraBoard ​, debe abrir el acceso directo ​ IntegraBoard en el escritorio o en el menú de inicio de su computador: Programas -> Lifeware -> IntegraBoard

La primera vez que se ejecuta ​ IntegraBoard ​, el programa se conectará al servidor de actualizaciones de ​ _Lifeware_ para registrar la copia de software. Este proceso es automático y tarda alrededor de un minuto. Para esto, es necesario tener habilitada una conexión a internet. Si el proceso es exitoso, buscará actualizaciones y las instalará en caso de ser necesario. El registro es ​ **obligatorio** ​ para el funcionamiento del software.

:::note
La primera vez que se ejecute el programa, será obligatorio estar conectado a internet para realizar el registro de la copia. Las próximas veces no será necesaria la conexión a internet, en este caso se omitirán las actualizaciones.
:::

## 2. IntegraBoard - Panel de Navegación

### 2.1 Tableros

En esta sección se pueden crear y configurar los tableros con los que se trabajará,
pudiendo modificarlos como se necesite para cada caso.

![Screenshoot](./img/manual-integraboard/2.1.jpg 'Tableros')

#### 2.1.1 Funcionalidades de Tablero

##### 1. Listar tableros

Lista los Tableros con su visualización en miniatura.

##### 2. Filtro de búsqueda por nombre.

Permite buscar un grupo en específico mediante un buscador.

##### 3. Limpiar filtro

Limpia el buscador y vuelve a mostrar todos los tableros.

##### 4. Crear nuevo tablero

Nos deriva a la pestaña “Modificar tablero”, esta nos permitirá crear un tablero desde
cero en la pestaña Modificación de tablero.

##### 5. Asignar tablero

Asigna el tablero modificando su estado a “Asignado” para que aparezca en el
IntegraBoard Player.

##### 6. Eliminar tablero

Elimina el tablero seleccionado.

##### 7. Exportar/Importar

Permite guardar/cargar el tablero seleccionado en el computador/aplicación.

### 2.2. Modificar tablero

En esta sección se puede crear o modificar un tablero, definiendo la cantidad de
pictogramas que tendrá, el nombre, los pictogramas, el tipo del tablero y su imagen
representativa.

![Screenshoot](./img/manual-integraboard/2.2.png 'Modificar tablero')

#### 2.2.1. Visualización de tablero

Muestra cómo se verá el tablero en uso.

![Screenshoot](./img/manual-integraboard/2.2.1.jpg 'Visualización de tablero')

##### 1. Mostrar pictogramas

Muestra los pictogramas asignados al tablero, pudiendo visualizarse como se verá en
el "IntregaBoard Player".

##### 2. Asignar

Permite ingresar a la pestaña de "Lista de pictogramas", también se puede tomar un
pictograma asignado y arrastrarlo a un espacio sin asignar en caso de necesitar
ordenarlo.

##### 3. Crear pictograma

Permite ingresar a la pestaña de "Crear/Modificar pictogramas", también se puede
tomar un pictograma asignado y arrastrarlo a un espacio sin asignar en caso de
necesitar ordenarlo.

#### 2.2.2. Asignar

Interfaz para agregar pictogramas a un tablero.

![Screenshoot](./img/manual-integraboard/2.2.2.jpg 'Asignar')

##### 1. Filtro por nombre

Filtra los pictogramas existentes por nombre.

##### 2. Filtro por categoría

Filtra los pictogramas existentes por categoría.

##### 3. Limpiar filtro

Restablece los filtros, para poder visualizar todos los pictogramas.

##### 4. Lista de pictogramas

Lista los pictogramas existentes.

##### 5. Usar selección

Permite asignar el pictograma al espacio seleccionado del tablero.

##### 6. Cancelar

Cancela la acción, permitiendo volver a la pestaña de Tableros.

#### 2.2.3. Index

Opciones principales para trabajar un pictograma asignado.

![Screenshoot](./img/manual-integraboard/2.2.3.jpg 'Index')

##### 1. Crear pictograma

Nos deriva a la pestaña "Crear pictogramas", para la edición de este (los cambios que
se realicen a este pictograma se verá reflejado en todos los tableros que lo tengan
asignados).

##### 2. Editar pictograma

Edita el Pictograma del espacio seleccionado del tablero llevándonos a la pestaña
“Editar Pictograma”.

##### 3. Quitar pictograma

Quita el Pictograma del espacio seleccionado del tablero.

#### 2.2.4. Propiedades del tablero

Nos permite modificar los datos propios del tablero.

![Screenshoot](./img/manual-integraboard/2.2.4.jpg 'Propiedades del tablero')

##### 1. Nombre

Permite asignar o cambiar el nombre del tablero.

##### 2. Tipo de tablero


Permite seleccionar entre tablero de comunicación y tablero de enseñanza.

##### 3. Filas y columnas


Permite agregarle filas horizontalmente al tablero, con un máximo de 7 y mínimo de 1
y adicionalmente permite agregar columnas verticalmente al tablero, con un máximo
de 4 y mínimo de 1.

##### 4. Pictograma que representa al tablero


Elegir uno de los pictogramas del tablero para que represente al tablero completo.

##### 5. Guardar tablero

Permite guardar la información del tablero.

### 2.3. Pictogramas

Sección que permitirá agregar y configurar pictogramas a partir de imágenes y acciones
propias.

![Screenshoot](./img/manual-integraboard/2.3.jpg 'Pictogramas')

#### 2.3.1 Funcionalidades de Pictogramas

##### 1. Filtro de búsqueda por nombre

Permite buscar un grupo en específico mediante un buscador.

##### 2. Filtro de búsqueda por categoría

Permite buscar un grupo en específico mediante un buscador.

##### 3. Listar pictogramas

Lista los Pictogramas con su visualización en miniatura nombre, texto y categoría.

##### 4. Seleccionar pictograma

Nos deriva a la pestaña “Modificar Pictograma”, esta nos permitirá crear un tablero
desde cero.

##### 5. Crear nuevo pictograma

Nos deriva a la pestaña “Modificar Pictograma”, esta nos permitirá crear un tablero
desde cero.

##### 6. Borrar pictograma

Elimina el Pictograma seleccionado.

##### 7. Exportar/Importar

Nos deriva a la pestaña “Exportar/Importar”, esta nos permitirá cargar a la aplicación y
guardar en nuestro computador los Pictogramas seleccionados.

### 2.4. Modificar pictograma

Esta sección nos permite configurar el pictograma a fondo, pudiendo cargar imágenes
personalizadas o asignar textos para su simulación de voz.

#### 2.4.1. Crear pictograma

![Screenshoot](./img/manual-integraboard/2.4.1.jpg 'Crear pictograma')

##### 1. Sección

Muestra la sección en la que nos encontramos.

##### 2. Vista Previa

Permite visualizar el pictograma en edición.

##### 3. Nombre Pictograma

Nombre con el que se guardará el pictograma.

##### 4. Texto

Corresponde al texto bajo la imagen.

##### 5. Sonido

Permite asignarle un sonido al pictograma para que este se reproduzca.

##### 6. Visualización Categoría

Se muestra el color de categoría para su mejor visualización.

##### 7. Filtro

Filtra las imágenes según el nombre que tenga asociado el archivo.

##### 8. Imágenes

Tenemos dos secciones para las imágenes. La del lado derecho es una lista de todas
las imágenes que quedan cargadas en el programa si es que fueron utilizadas en
algún otro pictograma. La de la izquierda es para subir imágenes y se cargarán en la
sección de la derecha.

##### 9. Guardar

Guarda los cambios realizados.

##### 10.Cancelar

Vuelve a la pestaña de Pictogramas sin realizar cambios.

## 3. IntegraBoard Player

### 3.1. Iniciar Player

#### 3.1.1. Selección de tableros

![Screenshoot](./img/manual-integraboard/3.1.1.jpg 'Selección de tableros')

##### 1. Listar tableros

Permite listar los tableros disponibles que posee el usuario a configurar.

##### 2. Seleccionar Tableros


Permite seleccionar el tablero que se quiere agregar como grupo aparte de los
tableros propios del usuario

### 3.2 Tableros

Pantalla principal donde se podrá trabajar con los tableros.

#### 3.2.1 Tableros

![Screenshoot](./img/manual-integraboard/3.2.1.jpg 'Tableros')

En esta sección podremos visualizar nuestro tablero seleccionado y hacer uso de los
pictogramas en caso de que estos tengan acciones asociadas, tan solo presionandolos.

##### 1. Visualización de pictogramas


Se visualiza el tablero con todos los pictogramas.

##### 2. Accionar pictograma


Al hacer clic, este ejecutará la acción configurada, ya sea reproducir un sonido,
una combinación de comandos o, una acción de YouTube o mencionar con el
simulador de voz un texto.

##### 3. Indicador del tablero

Se visualiza de qué tipo es el tablero. Puede ser de comunicación y de enseñanza.

#### 3.2.2 Decir algo

Esta sección permitirá que el usuario pueda comunicarse por medio de pictogramas con
un simulador de voz.
Al presionar el modo escucha, se podrán ir agregando pictogramas a una lista que se leerá
al presionar “Ejecutar”.
Con esto es posible que el niño pueda relacionarse mejor con las demás personas,
utilizando pictogramas de emociones, necesidades básicas, pronombres, entre muchos
otros.

![Screenshoot](./img/manual-integraboard/3.2.2.jpg 'Tableros')

##### 1. Modo escucha / apagado


Permite agregar pictogramas a la lista de frases. Esta opción solo estará disponible
cuando el tablero se encuentre en modo comunicación.

##### 2. Reproductor de frases


Permite reproducir la frase armada a base de los pictogramas seleccionados.

##### 3. Borrar


Permite eliminar todos los elementos de la frase armada. También se pueden
eliminar de manera individual.

##### 4. Salir


Vuelve al menú principal.

## 4. Casos de uso cotidiano

### 4.1. Preparación


Para poder trabajar con el tablero sin problemas primero debemos preparar los datos.
Necesitaremos crear en el siguiente orden los siguientes datos:
- Pictogramas: Estos son necesarios para poder crear un tablero y trabajar con
el sistema.
- Tableros: Estos contienen pictogramas y son categorizados como tableros de
comunicación o de enseñanza.

### 4.2. Crear Pictogramas

- Ir a la sección Pictogramas.
- Importar Carpeta (en caso de querer agregar pictogramas masivamente):
   - Seleccionar carpeta con pictogramas.
   - Presionar Aceptar.
- En caso de querer agregar pictograma individualmente:
   - Crear nuevo pictograma.
   - Agregar imagen.
   - Agregar título.
   - Agregar texto.
   - Agregar sonido.
   - Agregar categoría.
- Llenar datos en la pestaña crear pictograma:
   - Dentro de la selección o creación de pictogramas llenar los datos del pictograma: Nombre, texto, Sonido, Categoría.
   - Presionar guardar.
- Reproducir sonido:
   - Seleccionar sonido.
   - Agregar audio (mp3).
   - Reproducir audio (para probar que se escuche).
   - Presionar guardar.
- Asignar Imagen:
   - Ir a la lista de imágenes o agregar una nueva.
   - Seleccionar una imagen.
   - Presionar guardar.
- Editar Pictograma:
   - Ir a la sección Pictogramas.
   - Hacer doble clic en pictograma.
   - Realizar cambios y Guardar
   - Al realizar los cambios, estos se aplicarán a todos los tableros que contienen este pictograma.
- Editar Pictograma de tablero:
   - Ir a la Sección Tablero.
   - Seleccionar Tablero.
   - Seleccionar Pictograma y presionar Modificar Pictograma.
   - Realizar Cambios y Guardar.
   - Al realizar los cambios, estos se aplicarán a todos los tableros que contienen este pictograma.


### 4.3. Crear Tablero


- Ir a la sección Tableros.
- Presionar Crear nuevo tablero.
- En la sección derecha configurar el tamaño y el nombre a asignar.
- Presionar en los íconos que dicen Asignar y seleccionar los pictogramas a
Agregar.
- Guardar cambios.
- Guardar Tablero con la Opción de la derecha Guardar Tablero.

### 4.4. Seleccionar tableros disponibles


- Seleccionar tableros en la parte izquierda donde estarán listados según la
asignación que se les dio en la sección Tableros.

### 4.5. Usar Pictogramas

- Presionar Pictograma (Estos ejecutan su función asignada previamente en
las configuraciones de pictogramas).

### 4.6. Usar Simulador de voz


- Presionar en la sección Decir Algo ubicada en la parte derecha.
- Seleccionar los pictogramas que se quieren reproducir continuamente.

## Importante

:::important
El software puede funcionar en computadores que cuenten con Windows 10 (Professional, Home Single Lenguaje), pero su soporte no es oficial para sistemas operativos anteriores, por lo que Lifeware S.P.A no asegura su correcto funcionamiento. “Lifeware”, “IntegraBoard” y sus respectivos logotipos son marcas comerciales registradas de Lifeware SpA en Chile y/o en otros países.
:::

:::caution
“Windows”, “Windows XP”, “Windows Vista”, “Windows 7”, “Windows 8”, “Windows 10” son marcas comerciales de Microsoft Corporation en Estados Unidos y/o en otros países y no tienen relación alguna con Lifeware SpA.
Se prohíbe la copia total o parcial de forma digital, fotocopia, offset o cualquier otro medio mecánico o digital de este documento así como de cualquier componente de software, material audiovisual, página web y cualquier otro material del que la empresa Lifeware S.P.A. posea derechos, sin la autorización por escrito de Lifeware SpA.
:::