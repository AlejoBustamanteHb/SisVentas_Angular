angular
    .module("app")
    .controller("myController", store);

store.$inject = ['$scope'];

function store($scope) {

    window.s = $scope;
    $scope.busqueda;
    $scope.idCat = "";
    $scope.selected = {};
    $scope.precioCompra;
    $scope.cantProd = 1;
    $scope.images1 = [
        {
            ruta: "/img/azir.png",
            name: "Figura Azir Reinos Combatientes",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 1
        },
        {
            ruta: "/img/tris.png",
            name: "Figura Tristana Domadora de Dragones",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 1
        },
        {
            ruta: "/img/kata.png",
            name: "Estatua Katarina",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 65.00,
            categoria: 3
        },
        {
            ruta: "/img/ashe.png",
            name: "Estatua Ashe",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 65.00,
            categoria: 3
        },

        {
            ruta: "/img/gnar.png",
            name: "Figura Gnar Caballero",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 1
        },
        {
            ruta: "/img/thresh.png",
            name: "Estatua Tresh",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 70.00,
            categoria: 3
        },
        {
            ruta: "/img/heca.png",
            name: "Figura Hecarim de Arcadia",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 1
        },
        {
            ruta: "/img/twistedfatefront.png",
            name: "Estatua Twisted Fate",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 70.00,
            categoria: 3
        },
        {
            ruta: "/img/jinx.png",
            name: "Figura Jinx Explosiva",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 1
        },
        {
            ruta: "/img/cait.png",
            name: "Estatua Caitlyn",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 3
        },
        {
            ruta: "/img/lulu.png",
            name: "Figura Lulu",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 2
        },
        {
            ruta: "/img/vi.png",
            name: "Estatua Vi Unlocked",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 70.00,
            categoria: 3
        },
        {
            ruta: "/img/cho.png",
            name: "Figura Cho'Gath",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 2
        },
        {
            ruta: "/img/microporo.png",
            name: "Paquete de 4 poros festivos mini",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 4
        },
        {
            ruta: "/img/lux.png",
            name: "Figura Lux",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 2
        },
        {
            ruta: "/img/ziggs.png",
            name: "Estatua Ziggs",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 70.00,
            categoria: 3
        },
        {
            ruta: "/img/poppy.png",
            name: "Figura Poppy",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 2
        },
        {
            ruta: "/img/gnarP.png",
            name: "Peluche de Gnar",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 30.00,
            categoria: 4
        },
        {
            ruta: "/img/poroP.png",
            name: "Peluche de Poro",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 25.00,
            categoria: 4
        },
        {
            ruta: "/img/voliP.png",
            name: "Peluche de Volibear",
            description: "Lorem Ipsum dolor Sit Amet",
            price: 18.00,
            categoria: 4
        }
    ];
    for (var i = 0; i < $scope.images1.length; i++) {
        $scope.images1[i].id = i;
    }

    $scope.idCategoria = [];

    $scope.compra = [];

    $scope.mostrarCategoria1 = function () {
        $scope.idCat = "";
        $scope.idCat = "Categoria 1";
        $scope.idCategoria = [];
        for (var i = 0; i < $scope.images1.length; i++) {
            if ($scope.images1[i].categoria == 1) {
                $scope.idCategoria.push($scope.images1[i]);
            }
        }
    }
    $scope.mostrarCategoria2 = function () {
        $scope.idCat = "";
        $scope.idCat = "Categoria 2";
        $scope.idCategoria = [];
        for (var i = 0; i < $scope.images1.length; i++) {
            if ($scope.images1[i].categoria == 2) {
                $scope.idCategoria.push($scope.images1[i]);
            }
        }
    }
    $scope.mostrarCategoria3 = function () {
        $scope.idCat = "";
        $scope.idCat = "Categoria 3";
        $scope.idCategoria = [];
        for (var i = 0; i < $scope.images1.length; i++) {
            if ($scope.images1[i].categoria == 3) {
                $scope.idCategoria.push($scope.images1[i]);
            }
        }
    }
    $scope.mostrarCategoria4 = function () {
        $scope.idCat = "";
        $scope.idCat = "Categoria 4";
        $scope.idCategoria = [];
        for (var i = 0; i < $scope.images1.length; i++) {
            if ($scope.images1[i].categoria == 4) {
                $scope.idCategoria.push($scope.images1[i]);
            }
        }
    }

    $scope.pay = function () {

    };

    $scope.selectItem = function (element) {
        $scope.selected = {};
        $scope.selected = element;
    }

    $scope.verificar = function () {
        if ($scope.precioCompra != 0) {
            $scope.message = "¡¡¡¡ MUCHAS GRACIAS POR SU COMPRA ¡¡¡¡";

        } else {
            $scope.message = "Por Favor Seleccione Algo de Nuestra Tienda para continuar Gracias!!!";
            $scope.precioCompra = "NO APLICA";
        }
    }

    $scope.addCart = function (element) {
        var precioCompra = 0;
        $scope.compra.push(element);
        for (var i = 0; i < $scope.compra.length; i++) {
            $scope.compra[i].id = i;
            precioCompra += $scope.compra[i].price;
        }
        $scope.precioCompra = precioCompra;
        alert("Añadido al Carrito");

    };
    $scope.limpiar = function () {
        $scope.compra = [];
        $scope.precioCompra = 0;
    }
    $scope.deleteItem = function (id, precio) {
        $scope.compra.splice(id, 1);
        $scope.precioCompra -= precio;
        for (var i = 0; i < $scope.compra.length; i++) {
            $scope.compra[i].id = i;
        }
    }

    $scope.addRuta;
    $scope.addName;
    $scope.addDesc;
    $scope.addPrice;
    $scope.addCategory;

    
    $scope.addProduct = function (addRuta, addName, addDesc, addPrice, addCategory) {

        var obj = {};
        obj.ruta = "/img/"+addRuta;
        obj.name = addName;
        obj.description = addDesc;
        obj.price = addPrice;
        obj.categoria = addCategory;
        
        $scope.images1.push(obj);
        //Se Actualiza el ID Al ingresar un nuevo producto
        for (var i = 0; i < $scope.images1.length; i++) {
            $scope.images1[i].id = i;
        }
        console.log(obj);

    }
    /**
      $scope.deleteItem = function (id) {
        $scope.images1.splice(id, 1);

        //Se Actualiza el Id de todos los objetos al eliminar el producto
        for (var i = 0; i < $scope.images1.length; i++) {
            $scope.images1[i].id = i;
        }
    }
    

    $scope.editItem = function(id){
        $scope.images1[id].ruta = $scope.editRuta;
        $scope.images1[id].name = $scope.editName;
        $scope.images1[id].description = $scope.editDescription;
        $scope.images1[id].price = $scope.editPrice;
        $scope.images1[id].categoria = $scope.editCategoria;
    }


    **/





    /**
    *
    *
    **/

    var admin = false;
    window.s = $scope;
    var comprobar = false;
    $scope.messageAdmin;
    $scope.array1 = [
        {
            ruta: "/toIcon/icon1.svg",
            name: "array1_img1"
        },
        {
            ruta: "/toIcon/icon2.svg",
            name: "array1_img2"
        },
        {
            ruta: "/toIcon/icon3.svg",
            name: "array1_img3"
        },
        {
            ruta: "/toIcon/icon4.svg",
            name: "array1_img4"
        },
        {
            ruta: "/toIcon/icon5.svg",
            name: "array1_img5"
        }
    ];
    $scope.array2 = [
        {
            ruta: "/toIcon/icon6.svg",
            name: "array2_img1"
        },
        {
            ruta: "/toIcon/icon7.svg",
            name: "array2_img2"
        },
        {
            ruta: "/toIcon/icon8.svg",
            name: "array2_img3"
        },
        {
            ruta: "/toIcon/icon9.svg",
            name: "array2_img4"
        },
        {
            ruta: "/toIcon/icon10.svg",
            name: "array2_img5"
        }
    ];
    $scope.array3 = [
        {
            ruta: "/toIcon/icon11.svg",
            name: "array3_img1"
        },
        {
            ruta: "/toIcon/icon12.svg",
            name: "array3_img2"
        },
        {
            ruta: "/toIcon/icon13.svg",
            name: "array3_img3"
        },
        {
            ruta: "/toIcon/icon14.svg",
            name: "array3_img4"
        },
        {
            ruta: "/toIcon/icon15.svg",
            name: "array3_img5"
        }
    ];

    $scope.isAdmin = false;
    $scope.isAdminValidate = false;
    $scope.cont = 0;
    $scope.pass;
    $scope.name;
    $scope.messageAdmin = "Inicio de Sesion de Administrador";
    $scope.intento = false;
    $scope.contrasenia = [];
    $scope.verify = function (name, pass) {
        if (name === "admin") {
            $scope.cont++;
        }
        if (pass === "des000") {
            $scope.cont++;
        }
        if ($scope.cont === 2) {
            $scope.isAdmin = true;
        }

        if ($scope.isAdmin === true) {

            $scope.intento = true;
        } else {
            $scope.messageAdmin = "Inicio de Sesion de Administrador";
            $scope.datosSesion = "Datos de Inicio de Sesion Incorrectos";
            $scope.intento = true;
        }
    }

    /**Validate**/
    $scope.combinacion = ["/toIcon/icon4.svg", "/toIcon/icon10.svg", "/toIcon/icon15.svg"]
    $scope.contrasenia = [];
    $scope.nameArray = $scope.array1;

    $scope.bandera = false;

    $scope.text = "Elija Su Imagen para La Contraseña";
    $scope.enviarArray = function (ruta) {

        $scope.contrasenia.push(ruta);

        if ($scope.nameArray == $scope.array1) {
            $scope.nameArray = $scope.array2;
        } else if ($scope.nameArray == $scope.array2) {
            $scope.nameArray = $scope.array3;
        } else if ($scope.nameArray == $scope.array3) {
            $scope.nameArray = "";
            $scope.text = "";
            bandera = true;
        }

    }
    //313 727 4988
    $scope.borrarCombinacion = function () {
        $scope.contrasenia = [];
        $scope.nameArray = $scope.array1;
    }
    $scope.validarCombinacion = function () {
        for (var i = 0; i < $scope.combinacion.length; i++) {
            if ($scope.combinacion[i] === $scope.contrasenia[i]) {
                $scope.cont++;
            }
        }
        if ($scope.cont === 5) {
            $scope.messageAdmin = "Bienvenido Administrador";
            $scope.datosSesion = "Hola Administrador!!!";
            $scope.isAdminValidate = true;
        } else {
            alert("Convinacion Incorrecta Intentelo Nuevamente");
            $scope.isAdmin = false;
            $scope.isAdminValidate = false;
            $scope.cont = 0;
            $scope.intento = false;
            $scope.messageAdmin = "Inicio de Sesion de Administrador";
            $scope.contrasenia = [];
            $scope.nameArray = $scope.array1;
        }
    }
    $scope.cerrarSesion = function () {
        $scope.isAdmin = false;
        $scope.isAdminValidate = false;
        $scope.cont = 0;
        $scope.intento = false;
        $scope.messageAdmin = "Inicio de Sesion de Administrador";
        $scope.contrasenia = [];
        $scope.nameArray = $scope.array1;
    }
};